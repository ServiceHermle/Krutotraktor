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

  
  function downloadFile(filename, content, mime){
    const blob = new Blob([content], { type: mime });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  function exportHotelsJSON(list){
    const payload = { exportedAt: new Date().toISOString(), hotels: list };
    downloadFile("hotels-export.json", JSON.stringify(payload, null, 2), "application/json;charset=utf-8");
  }

  function toCsvValue(v){
    const s = (v ?? "").toString().replace(/"/g, '""');
    return `"${s}"`;
  }

  function exportHotelsCSV(list){
    const header = ["city","name","phone","notes"];
    const rows = list.map(h => [
      toCsvValue(h.city),
      toCsvValue(h.name),
      toCsvValue(h.phone),
      toCsvValue(h.notes),
    ].join(","));
    const csv = [header.join(","), ...rows].join("\n");
    downloadFile("hotels-export.csv", csv, "text/csv;charset=utf-8");
  }

  // Import helpers (supports both raw array and {hotels:[...]})
  function normalizeHotel(h){
    const obj = h && typeof h === 'object' ? h : {};
    return {
      city: String(obj.city||'').trim(),
      name: String(obj.name||obj.hotel||'').trim(),
      phone: String(obj.phone||obj.tel||'').trim(),
      notes: String(obj.notes||obj.note||'').trim(),
    };
  }

  function parseHotelsPayload(text){
    const raw = JSON.parse(text);
    const arr = Array.isArray(raw) ? raw : (raw && Array.isArray(raw.hotels) ? raw.hotels : null);
    if(!arr) throw new Error('Neplatný formát');
    const out = arr.map(normalizeHotel).filter(h=>h.city && h.name);
    return out;
  }

  function normKey(s){
    return (s??"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");
  }

  function mergeHotels(existing, incoming){
    // UPDATE: merge by city+name (case-insensitive). Only fill missing fields.
    const byKey = new Map();
    existing.forEach(h=>{
      const k = normKey(h.city)+'|'+normKey(h.name);
      if(k !== '|') byKey.set(k, h);
    });

    incoming.forEach(inc=>{
      const k = normKey(inc.city)+'|'+normKey(inc.name);
      if(k === '|') return;
      const cur = byKey.get(k);
      if(!cur){
        existing.push({city:inc.city, name:inc.name, phone:inc.phone||'', notes:inc.notes||''});
        byKey.set(k, existing[existing.length-1]);
        return;
      }
      if(!cur.phone && inc.phone) cur.phone = inc.phone;
      if(!cur.notes && inc.notes) cur.notes = inc.notes;
    });
    return existing;
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
          <button class="hv-close-mini" type="button" id="hvCloseBtn" aria-label="Close" title="Close">🚪</button>
        </div>

        <input accept="application/json" id="hvImportFile" style="display:none" type="file" />

        <dialog id="hvImportModeDlg">
          <form class="modal" method="dialog">
            <div class="modal-h">Import hotelů</div>
            <div class="modal-b">
              <div style="display:grid; gap:10px">
                <div class="muted">Vyber režim importu:</div>
                <div class="card" style="padding:10px">
                  <div style="font-weight:700">Override (přepsat)</div>
                  <div class="muted">Smaže všechny hotely a nahraje data ze souboru znovu.</div>
                </div>
                <div class="card" style="padding:10px">
                  <div style="font-weight:700">Update (doplnit)</div>
                  <div class="muted">Zachová stávající hotely, přidá jen chybějící položky (podle město + hotel).</div>
                </div>
              </div>
            </div>
            <div class="modal-f">
              <button class="btn" type="button" data-act="hvImportCancel">Zrušit</button>
              <button class="btn" type="button" data-act="hvImportMode" data-mode="override">Override</button>
              <button class="btn primary" type="button" data-act="hvImportMode" data-mode="update">Update</button>
            </div>
          </form>
        </dialog>

        <div class="hv-row">
          <input class="input" id="hvSearch" type="text" data-i18n-placeholder="hotels_search_ph" />
        </div>

        <div class="hv-list" id="hvList"></div>

        <div class="hv-bottom">
          <button class="btn inline hv-bottom-btn" type="button" id="hvAddBtn" data-i18n="btn_add_hotel"></button>
          <button class="btn inline hv-bottom-btn" type="button" id="hvExportBtn" data-i18n="btn_export"></button>
          <button class="btn inline hv-bottom-btn" type="button" id="hvImportBtn" data-i18n="btn_import_json"></button>
        </div>

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
    try{ const cb=ov.querySelector('#hvCloseBtn'); const lbl=t('btn_close'); if(cb){ cb.title=lbl; cb.setAttribute('aria-label', lbl); } }catch(e){}

    ov.querySelector("#hvAddBtn").addEventListener("click", ()=>openEditor(null));
    ov.querySelector("#hvExportBtn").addEventListener("click", ()=>{
      // JSON = backup, CSV = Excel
      exportHotelsJSON(hotels);
      // Uncomment if you also want CSV every time:
      // exportHotelsCSV(hotels);
    });

    // Import (mode dialog + file picker)
    let hotelsImportMode = 'override';
    const importBtn = ov.querySelector('#hvImportBtn');
    const importFile = ov.querySelector('#hvImportFile');
    const importDlg = ov.querySelector('#hvImportModeDlg');

    if(importBtn && importDlg && importFile){
      importBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        importDlg.showModal();
      });

      importDlg.addEventListener('click', (e)=>{
        const cancel = e.target.closest('[data-act="hvImportCancel"]');
        if(cancel){ importDlg.close(); return; }
        const b = e.target.closest('[data-act="hvImportMode"]');
        if(!b) return;
        hotelsImportMode = b.getAttribute('data-mode') || 'override';
        importDlg.close();
        importFile.value = '';
        setTimeout(()=>importFile.click(), 150);
      });

      importFile.addEventListener('change', (e)=>{
        const file = e.target.files && e.target.files[0];
        if(!file) return;
        const reader = new FileReader();
        reader.onload = (ev)=>{
          try{
            const incoming = parseHotelsPayload(String(ev.target.result||''));
            if(hotelsImportMode === 'override'){
              if(!confirm('Import přepíše existující hotely. Pokračovat?')) return;
              hotels = incoming;
            }else{
              hotels = mergeHotels(load(), incoming);
            }
            save(hotels);
            closeEditor();
            render();
            toast(hotelsImportMode === 'override' ? 'Import hotov (Override)' : 'Import hotov (Update)');
          }catch(err){
            alert('Import selhal: ' + (err && err.message ? err.message : err));
          }finally{
            e.target.value = '';
          }
        };
        reader.readAsText(file);
      });
    }
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
        <div class="hv-item hv-item-row">
          <div class="hv-item__main">
            <div class="hv-city">${esc(h.city||"—")}</div>
            <div class="hv-name">${esc(h.name||"—")}</div>
            ${h.notes ? `<div class="hv-notes-line">${esc(h.notes)}</div>` : ""}
          </div>

          <div class="hv-item__side">
            <div class="hv-phone">${esc(phone)}</div>
            <div class="hv-item__actions">
              ${phone ? `<a class="hv-icon-btn" href="tel:${esc(phone)}" title="${esc(btnCall)}" aria-label="${esc(btnCall)}">📞</a>` : `<span class="hv-icon-btn hv-icon-btn--disabled" aria-hidden="true">📞</span>`}
              <button class="hv-icon-btn" type="button" data-act="map" data-idx="${h.__idx}" title="${esc(btnMap)}" aria-label="${esc(btnMap)}">🗺️</button>
              <button class="hv-icon-btn" type="button" data-act="edit" data-idx="${h.__idx}" title="${esc(btnEdit)}" aria-label="${esc(btnEdit)}">✏️</button>
              <button class="hv-icon-btn hv-icon-btn--danger" type="button" data-act="del" data-idx="${h.__idx}" title="${esc(btnDel)}" aria-label="${esc(btnDel)}">🗑️</button>
            </div>
          </div>
        </div>
      `;      `;
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
