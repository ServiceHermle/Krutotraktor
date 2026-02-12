(function(){
  const KEY="hotels";
  const app = document.getElementById("app");

  function load(){
    try { return JSON.parse(localStorage.getItem(KEY) || "[]"); } catch(e){ return []; }
  }
  function save(list){ localStorage.setItem(KEY, JSON.stringify(list)); }

  function t(key){
    try { return (typeof window.t === "function") ? window.t(key) : key; }
    catch(e){ return key; }
  }

  function norm(s){
    return (s??"").toString().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");
  }
  function esc(s){
    return (s??"").toString().replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
  }
  async function copyText(text){
    try{ await navigator.clipboard.writeText(text); }
    catch(e){
      const ta=document.createElement("textarea");
      ta.value=text; ta.style.position="fixed"; ta.style.opacity="0";
      document.body.appendChild(ta); ta.select(); document.execCommand("copy"); ta.remove();
    }
  }
  function mapsQuery(h){
    return encodeURIComponent([h.name,h.city].filter(Boolean).join(", "));
  }

  let hotels = load();
  let editingIndex = null;

  function syncIconTitle(){
    const btn = document.getElementById("hotelViewBtn");
    if(btn) btn.setAttribute("title", t("tab_hotels"));
  }

  function ensureOverlay(){
    let ov=document.getElementById("hvOverlay");
    if(ov) return ov;

    ov=document.createElement("div");
    ov.id="hvOverlay";
    ov.className="hv-overlay";
    ov.innerHTML = `
      <div class="hv-card">
        <div class="hv-header">
          <div class="hv-title" data-i18n="hotels_title"></div>
          <div class="hv-actions">
            <button class="btn inline" type="button" id="hvAddBtn" data-i18n="btn_add_hotel"></button>
            <button class="btn inline" type="button" id="hvCloseBtn" data-i18n="btn_close"></button>
          </div>
        </div>

        <div class="hv-row">
          <input class="input" id="hvSearch" type="text" data-i18n-placeholder="hotels_search_ph" />
        </div>

        <div class="hv-list" id="hvList"></div>

        <div class="hv-editor" id="hvEditor">
          <div class="hv-grid">
            <input class="input" id="hv-city" data-i18n-placeholder="label_city" />
            <input class="input" id="hv-name" data-i18n-placeholder="label_hotel" />
            <input class="input" id="hv-phone" data-i18n-placeholder="label_phone" />
          </div>
          <textarea class="input hv-notes" id="hv-notes" data-i18n-placeholder="label_note"></textarea>
          <div class="hv-item__btns" style="justify-content:flex-end">
            <button class="btn inline" type="button" id="hvSave" data-i18n="btn_save"></button>
            <button class="btn inline" type="button" id="hvCancel" data-i18n="btn_back"></button>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(ov);

    // Apply translations immediately (overlay is dynamic)
    try{ if(typeof window.applyI18n === "function") window.applyI18n(); }catch(e){}

    ov.querySelector("#hvCloseBtn").addEventListener("click", closeOverlay);
    ov.querySelector("#hvAddBtn").addEventListener("click", ()=>openEditor(null));
    ov.querySelector("#hvCancel").addEventListener("click", closeEditor);
    ov.querySelector("#hvSave").addEventListener("click", saveEditor);
    ov.querySelector("#hvSearch").addEventListener("input", render);

    ov.addEventListener("click", async (e)=>{
      const btn=e.target.closest("[data-act]");
      if(!btn) return;
      const idx=Number(btn.getAttribute("data-idx"));
      const act=btn.getAttribute("data-act");
      const h=hotels[idx];
      if(!h) return;

      if(act==="map"){
        window.open("https://www.google.com/maps/search/?api=1&query=" + mapsQuery(h), "_blank");
      }else if(act==="copy"){
        await copyText((h.phone||"").toString());
      }else if(act==="edit"){
        openEditor(idx);
      }else if(act==="del"){
        if(confirm(t("confirm_delete_hotel"))){
          hotels.splice(idx,1);
          save(hotels);
          closeEditor();
          render();
        }
      }
    });

    document.addEventListener("keydown", (e)=>{
      if(e.key==="Escape" && ov.classList.contains("is-open")) closeOverlay();
    });

    return ov;
  }

  function openOverlay(){
    const ov=ensureOverlay();
    ov.classList.add("is-open");
    if(app) app.style.display="none";
    const s=ov.querySelector("#hvSearch"); if(s){ s.value=""; s.focus(); }
    closeEditor();
    render();
  }

  function closeOverlay(){
    const ov=document.getElementById("hvOverlay");
    if(!ov) return;
    ov.classList.remove("is-open");
    if(app) app.style.display="";
    closeEditor();
  }

  function openEditor(idx){
    const ov=ensureOverlay();
    const ed=ov.querySelector("#hvEditor");
    ed.classList.add("is-open");
    editingIndex = idx;
    const h = (idx===null || idx===undefined) ? {city:"",name:"",phone:"",notes:""} : hotels[idx];
    ov.querySelector("#hv-city").value = h.city || "";
    ov.querySelector("#hv-name").value = h.name || "";
    ov.querySelector("#hv-phone").value = h.phone || "";
    ov.querySelector("#hv-notes").value = h.notes || "";
    setTimeout(()=>ov.querySelector("#hv-city").focus(),0);
  }

  function closeEditor(){
    const ov=document.getElementById("hvOverlay");
    if(!ov) return;
    ov.querySelector("#hvEditor").classList.remove("is-open");
    editingIndex = null;
  }

  function saveEditor(){
    const ov=ensureOverlay();
    const city=ov.querySelector("#hv-city").value.trim();
    const name=ov.querySelector("#hv-name").value.trim();
    const phone=ov.querySelector("#hv-phone").value.trim();
    const notes=ov.querySelector("#hv-notes").value.trim();
    if(!city || !name){ alert(t("err_enter_name")); return; }
    const item={city,name,phone,notes};
    if(editingIndex===null){
      hotels.push(item);
    }else{
      hotels[editingIndex]=item;
    }
    save(hotels);
    closeEditor();
    render();
  }

  function render(){
    const ov=document.getElementById("hvOverlay");
    if(!ov) return;
    const q=norm(ov.querySelector("#hvSearch").value || "").trim();
    const list=ov.querySelector("#hvList");

    const filtered = hotels
      .map((h, idx)=>({...h, __idx: idx}))
      .filter(h=>{
        if(!q) return true;
        const blob = norm(`${h.city||""} ${h.name||""} ${h.phone||""} ${h.notes||""}`);
        return blob.includes(q);
      })
      .sort((a,b)=> (a.city||"").localeCompare(b.city||"", undefined, {sensitivity:"base"}));

    const btnCall = t("btn_call");
    const btnMap  = t("btn_map");
    const btnCopy = t("btn_copy");
    const btnEdit = t("btn_edit");
    const btnDel  = t("btn_delete");
    const empty   = t("hotels_hint") ? "" : ""; // keep unused

    list.innerHTML = filtered.map(h=>{
      const phone=(h.phone||"").toString().trim();
      return `
        <div class="hv-item">
          <div class="hv-item__top">
            <div>
              <div class="hv-city">${esc(h.city||"—")}</div>
              <div class="hv-name">${esc(h.name||"—")}</div>
              ${h.notes ? `<div class="hv-name" style="opacity:.7;margin-top:6px">${esc(h.notes)}</div>` : ""}
            </div>
            <div class="hv-phone">${esc(phone)}</div>
          </div>
          <div class="hv-item__btns">
            ${phone ? `<a class="btn inline" href="tel:${esc(phone)}">${esc(btnCall)}</a>` : ""}
            <button class="btn inline" type="button" data-act="map" data-idx="${h.__idx}">${esc(btnMap)}</button>
            ${phone ? `<button class="btn inline" type="button" data-act="copy" data-idx="${h.__idx}">${esc(btnCopy)}</button>` : ""}
            <button class="btn inline" type="button" data-act="edit" data-idx="${h.__idx}">${esc(btnEdit)}</button>
            <button class="btn inline" type="button" data-act="del" data-idx="${h.__idx}">${esc(btnDel)}</button>
          </div>
        </div>
      `;
    }).join("") || `<div style="opacity:.75;padding:6px 2px">${esc(t("toast_done"))}</div>`;
  }

  // Keep icon title in sync after language changes
  document.addEventListener("click", (e)=>{
    if(e.target.closest(".langbtn[data-lang]")){
      setTimeout(syncIconTitle, 0);
      // Also update overlay labels if open
      setTimeout(()=>{ try{ if(typeof window.applyI18n==="function") window.applyI18n(); }catch(e){} }, 0);
      setTimeout(()=>{ if(document.getElementById("hvOverlay")?.classList.contains("is-open")) render(); }, 0);
    }
  });

  // Global click delegation for the 🛌 button
  document.addEventListener("click", (e)=>{
    if(e.target.closest("#hotelViewBtn")){
      syncIconTitle();
      openOverlay();
      try{ if(typeof window.applyI18n === "function") window.applyI18n(); }catch(e){}
      render();
    }
  });

  // Initial title
  document.addEventListener("DOMContentLoaded", syncIconTitle);

})();
