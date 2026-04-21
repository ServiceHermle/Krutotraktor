

let refreshed = false;
navigator.serviceWorker && navigator.serviceWorker.addEventListener('controllerchange', () => { if (refreshed) return; refreshed = true; location.reload(); });

// --- i18n (CZ/DE/EN) ---
const I18N = {
  cs: {
    lock_owner_verify: "Ověření vlastníka",
    lock_code_placeholder: "Zadej ověřovací kód",
    lock_remember_device: "Zapamatovat zařízení",
    lock_unlock: "Odemknout",
    tab_calc: "Výpočet",
    tab_range: "Období",
    tab_fixed: "Pevné kódy",
    tab_clients: "Zákazníci",
    tab_hotels: "Hotely",
    label_date: "Datum",
    label_machine_number: "Číslo stroje",
    placeholder_machine_n: "N",
    btn_recalc: "Přepočítat",
    btn_today: "Dnes",
    btn_copy: "Kopírovat",
    btn_copy_all: "Kopírovat vše",
    btn_share: "Sdílet",
    btn_add_machine: "+ Stroj",
    footer_disclaimer: "Použití a sdílení mimo společnost Hermle je přísně zakázáno.",
    toast_done: "Hotovo",
    toast_filled_calc: "Vyplněno do výpočtu",
    dlg_daily_title: "Denní kód",
    dlg_daily_valid_today: "Platí pro dnešní den",
    btn_ok: "OK",
    dlg_logout_title: "Odhlásit",
    dlg_forget_device: "Zapomenout zařízení",
    btn_back: "Zpět",
    btn_logout: "Odhlásit",
    label_search: "Vyhledávání",
    placeholder_search: "Hledat…",
    placeholder_client_search: "Hledat zákazníka nebo N…",
    label_from: "Od",
    label_to: "Do",
    btn_generate: "Vygenerovat",
    btn_prev_week: "◀ Předchozí týden",
    btn_next_week: "Následující týden ▶",
    btn_print_pdf: "Tisk / PDF",
    th_date: "Datum",
    th_day: "Den",
    th_mp_access: "MP Access",
    th_mp_acceptance: "MP Acceptance",
    th_plc_access: "PLC Access",
    btn_add_code: "+ Přidat kód",
    fixed_head_codes: "Kódy",
    fixed_head_params: "Parametry",
    dlg_edit_code_title: "Upravit kód",
    label_name: "Název",
    label_code: "Kód",
    label_desc: "Popis",
    label_param_num: "Parametr (číslo)",
    btn_close: "Zavřít",
    btn_save: "Uložit",
    btn_add_client: "+ Přidat",
    btn_add_hotel: "+ Přidat",
    btn_export_json: "Export",
    btn_import_json: "Import",
    dlg_edit_title: "Upravit",
    btn_edit: "Upravit",
    btn_delete: "Smazat",
    btn_use: "Použít",
    btn_add_machine_small: "+ Stroj",
    label_note: "Poznámka",
    hotels_search: "Vyhledávání",
    hotels_search_ph: "Město nebo hotel…",
    hotels_hint: "Třídění podle měst, vyhledávání podle města nebo názvu hotelu.",
    dlg_hotel_title: "Hotel",
    label_city: "Město",
    label_hotel: "Hotel",
    label_phone: "Telefon",
    label_contact: "Kontakt",
    label_address: "Adresa",
    customers_no_machines: "Žádné stroje",
    label_machine_name: "Název stroje",
    label_machine_number_short: "Číslo (N)",
    dlg_add_customer_title: "Přidat zákazníka",
    dlg_edit_customer_title: "Upravit zákazníka",
    dlg_add_machine_title: "Přidat stroj",
    dlg_edit_machine_title: "Upravit stroj",
    toast_saved: "Uloženo",
    toast_deleted: "Smazáno",
    err_enter_name: "Zadejte název",
    confirm_delete_customer: "Opravdu smazat zákazníka?",
    confirm_delete_machine: "Opravdu smazat stroj?",
    customers_filter_hint: "Zadejte 1 písmeno pro filtr A–Z",
    btn_map: "Mapa",
    btn_call: "Volat",
    btn_machines: "Stroje",
    confirm_delete_hotel: "Opravdu smazat hotel?",
    hotels_title: "Hotely",
    hotels_open_title: "Hotely",
    btn_export: "Export",
},
  de: {
    toast_filled_calc: "In die Berechnung übernommen",
    lock_owner_verify: "Eigentümerprüfung",
    lock_code_placeholder: "Bestätigungscode eingeben",
    lock_remember_device: "Gerät merken",
    lock_unlock: "Entsperren",
    tab_calc: "Berechnung",
    tab_range: "Zeitraum",
    tab_fixed: "Feste Codes",
    tab_clients: "Kunden",
    tab_hotels: "Hotels",
    label_date: "Datum",
    label_machine_number: "Maschinennummer",
    placeholder_machine_n: "Nr.",
    btn_recalc: "Neu berechnen",
    btn_today: "Heute",
    btn_copy: "Kopieren",
    btn_copy_all: "Alles kopieren",
    btn_share: "Teilen",
    btn_add_machine: "+ Maschine",
    btn_add_hotel: "+ Hinzufügen",
    footer_disclaimer: "Nutzung und Weitergabe außerhalb der Firma Hermle ist strengstens untersagt.",
    toast_done: "Fertig",
    dlg_daily_title: "Tagescode",
    dlg_daily_valid_today: "Gültig für heute",
    btn_ok: "OK",
    dlg_logout_title: "Abmelden",
    dlg_forget_device: "Gerät vergessen",
    btn_back: "Zurück",
    btn_logout: "Abmelden",
    label_search: "Suche",
    placeholder_search: "Suchen…",
    placeholder_client_search: "Kunde oder Nr. suchen…",
    label_from: "Von",
    label_to: "Bis",
    btn_generate: "Generieren",
    btn_prev_week: "◀ Vorherige Woche",
    btn_next_week: "Nächste Woche ▶",
    btn_print_pdf: "Druck / PDF",
    th_date: "Datum",
    th_day: "Tag",
    th_mp_access: "MP Access",
    th_mp_acceptance: "MP Acceptance",
    th_plc_access: "PLC Access",
    btn_add_code: "+ Code hinzufügen",
    fixed_head_codes: "Codes",
    fixed_head_params: "Parameter",
    dlg_edit_code_title: "Code bearbeiten",
    label_name: "Name",
    label_code: "Code",
    label_desc: "Beschreibung",
    label_param_num: "Parameter (Zahl)",
    btn_close: "Schließen",
    btn_save: "Speichern",
    btn_add_client: "+ Hinzufügen",
    btn_export_json: "Export",
    btn_import_json: "Import",
    dlg_edit_title: "Bearbeiten",
    btn_edit: "Bearbeiten",
    btn_delete: "Löschen",
    btn_use: "Verwenden",
    btn_add_machine_small: "+ Maschine",
    label_note: "Notiz",
    hotels_search: "Suche",
    hotels_search_ph: "Stadt oder Hotel…",
    hotels_hint: "Sortierung nach Städten, Suche nach Stadt oder Hotelname.",
    dlg_hotel_title: "Hotel",
    label_city: "Stadt",
    label_hotel: "Hotel",
    label_phone: "Telefon",
    label_contact: "Kontakt",
    label_address: "Adresse",
    customers_no_machines: "Keine Maschinen",
    label_machine_name: "Maschinenname",
    label_machine_number_short: "Nummer (N)",
    dlg_add_customer_title: "Kunde hinzufügen",
    dlg_edit_customer_title: "Kunde bearbeiten",
    dlg_add_machine_title: "Maschine hinzufügen",
    dlg_edit_machine_title: "Maschine bearbeiten",
    toast_saved: "Gespeichert",
    toast_deleted: "Gelöscht",
    err_enter_name: "Bitte Name eingeben",
    confirm_delete_customer: "Kunden wirklich löschen?",
    confirm_delete_machine: "Maschine wirklich löschen?",
    customers_filter_hint: "1 Buchstabe = A–Z Filter",
    btn_map: "Karte",
    btn_call: "Anrufen",
    btn_machines: "Maschinen",
    confirm_delete_hotel: "Hotel wirklich löschen?",
    hotels_title: "Hotels",
    hotels_open_title: "Hotels",
    btn_export: "Export",
},
  en: {
    toast_filled_calc: "Filled into calculator",
    lock_owner_verify: "Owner verification",
    lock_code_placeholder: "Enter verification code",
    lock_remember_device: "Remember this device",
    lock_unlock: "Unlock",
    tab_calc: "Calculator",
    tab_range: "Period",
    tab_fixed: "Fixed codes",
    tab_clients: "Customers",
    tab_hotels: "Hotels",
    label_date: "Date",
    label_machine_number: "Machine number",
    placeholder_machine_n: "No.",
    btn_recalc: "Recalculate",
    btn_today: "Today",
    btn_copy: "Copy",
    btn_copy_all: "Copy all",
    btn_share: "Share",
    btn_add_machine: "+ Machine",
    btn_add_hotel: "+ Add",
    footer_disclaimer: "Use and sharing outside Hermle is strictly prohibited.",
    toast_done: "Done",
    dlg_daily_title: "Daily code",
    dlg_daily_valid_today: "Valid for today",
    btn_ok: "OK",
    dlg_logout_title: "Log out",
    dlg_forget_device: "Forget device",
    btn_back: "Back",
    btn_logout: "Log out",
    label_search: "Search",
    placeholder_search: "Search…",
    placeholder_client_search: "Search customer or No…",
    label_from: "From",
    label_to: "To",
    btn_generate: "Generate",
    btn_prev_week: "◀ Previous week",
    btn_next_week: "Next week ▶",
    btn_print_pdf: "Print / PDF",
    th_date: "Date",
    th_day: "Day",
    th_mp_access: "MP Access",
    th_mp_acceptance: "MP Acceptance",
    th_plc_access: "PLC Access",
    btn_add_code: "+ Add code",
    fixed_head_codes: "Codes",
    fixed_head_params: "Parameters",
    dlg_edit_code_title: "Edit code",
    label_name: "Name",
    label_code: "Code",
    label_desc: "Description",
    label_param_num: "Parameter (number)",
    btn_close: "Close",
    btn_save: "Save",
    btn_add_client: "+ Add",
    btn_export_json: "Export",
    btn_import_json: "Import",
    dlg_edit_title: "Edit",
    btn_edit: "Edit",
    btn_delete: "Delete",
    btn_use: "Use",
    btn_add_machine_small: "+ Machine",
    label_note: "Note",
    hotels_search: "Search",
    hotels_search_ph: "City or hotel…",
    hotels_hint: "Sorted by cities, search by city or hotel name.",
    dlg_hotel_title: "Hotel",
    label_city: "City",
    label_hotel: "Hotel",
    label_phone: "Phone",
    label_contact: "Contact",
    label_address: "Address",
    customers_no_machines: "No machines",
    label_machine_name: "Machine name",
    label_machine_number_short: "Number (N)",
    dlg_add_customer_title: "Add customer",
    dlg_edit_customer_title: "Edit customer",
    dlg_add_machine_title: "Add machine",
    dlg_edit_machine_title: "Edit machine",
    toast_saved: "Saved",
    toast_deleted: "Deleted",
    err_enter_name: "Enter a name",
    confirm_delete_customer: "Delete customer?",
    confirm_delete_machine: "Delete machine?",
    customers_filter_hint: "1 letter = A–Z filter",
    btn_map: "Map",
    btn_call: "Call",
    btn_machines: "Machines",
    confirm_delete_hotel: "Delete hotel?",
    hotels_title: "Hotels",
    hotels_open_title: "Hotels",
    btn_export: "Export",
}
};

function getLang(){
  const saved = (canUseLocal() ? localStorage.getItem("lang") : null);
  if (saved && I18N[saved]) return saved;
  const nav = (navigator.language || "cs").toLowerCase();
  if (nav.startsWith("de")) return "de";
  if (nav.startsWith("en")) return "en";
  return "cs";
}
let CURRENT_LANG = getLang();

function t(key){
  return (I18N[CURRENT_LANG] && I18N[CURRENT_LANG][key]) || (I18N.cs[key] || key);
}

function applyI18n(){
  document.documentElement.lang = CURRENT_LANG;
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    el.textContent = t(key);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el=>{
    const key = el.getAttribute("data-i18n-placeholder");
    el.setAttribute("placeholder", t(key));
  });
  document.querySelectorAll(".langbtn[data-lang]").forEach(btn=>{
    btn.classList.toggle("active", btn.getAttribute("data-lang") === CURRENT_LANG);
  });
}

function setLang(lang){
  if (!I18N[lang]) return;
  CURRENT_LANG = lang;
  try{ if (canUseLocal()) localStorage.setItem("lang", lang); }catch(e){}
  applyI18n();
  try{ if(typeof renderCustomers==='function'){ const el=document.getElementById('c-search'); renderCustomers(el?el.value:''); } }catch(e){}
  try{ if(typeof renderFixed==='function'){ const el=document.getElementById('f-search'); renderFixed(el?el.value:''); } }catch(e){}
}

document.addEventListener("click", (e)=>{
  const b = e.target.closest && e.target.closest(".langbtn[data-lang]");
  if(!b) return;
  e.preventDefault();
  setLang(b.getAttribute("data-lang"));
});

document.addEventListener("DOMContentLoaded", applyI18n);

// Storage abstraction
const MemDB = (()=>{ const store={}; return { getItem:k=>store.hasOwnProperty(k)?store[k]:null, setItem:(k,v)=>{store[k]=String(v)}, removeItem:k=>{delete store[k]} }; })();
function canUseLocal(){ try{ const k='__t'+Math.random(); localStorage.setItem(k,'1'); localStorage.removeItem(k); return true; }catch(e){ return false; } }
function canUseSession(){ try{ const k='__t'+Math.random(); sessionStorage.setItem(k,'1'); sessionStorage.removeItem(k); return true; }catch(e){ return false; } }
const Store = (()=>{
  if (typeof localStorage!=='undefined' && canUseLocal()) return localStorage;
  if (typeof sessionStorage!=='undefined' && canUseSession()) return sessionStorage;
  return MemDB;
})();

const LS_KEYS = { trustedDev: 'hdh_trusted_device_v1', customers: 'hdh-customers-v1' , lastMachine: 'hdh-last-machine-v1' };

const SECURITY = {
  // "Ošklivý seed" uložený uvnitř aplikace (nejde o skutečné zabezpečení – jen kosmetické znepříjemnění).
  seed: "HERMLE::krutotraktorus::seed::v1::9f3b8a2d-ugly",
  trustedKey: LS_KEYS.trustedDev
};

async function sha256Hex(s) {
  const enc = new TextEncoder().encode(s);
  const buf = await crypto.subtle.digest('SHA-256', enc);
  return Array.from(new Uint8Array(buf)).map(b=>b.toString(16).padStart(2,'0')).join('');
}

function todayKey() {
  const d = new Date(); // lokální čas zařízení
  const y = d.getFullYear();
  const m = String(d.getMonth()+1).padStart(2,'0');
  const day = String(d.getDate()).padStart(2,'0');
  return `${y}${m}${day}`;
}

function normalizeCode(s){
  return String(s||'').toUpperCase().replace(/[^A-Z0-9]/g,'');
}

async function getDailyCode() {
  // Deterministický 8-místný alfanumerický kód z (seed + datum).
  // Primárně použij WebCrypto (crypto.subtle). Když není dostupné (některé iOS režimy),
  // použij lehkou fallback funkci, aby odemčení nezůstalo "viset".
  try{
    const hex = await sha256Hex(`${SECURITY.seed}|${todayKey()}`);
    const bytes = new Uint8Array(hex.match(/../g).map(h=>parseInt(h,16)));
    const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // bez 0/O/1/I kvůli záměnám
    let out = "";
    for (let i=0; i<8; i++){
      out += alphabet[bytes[i] % alphabet.length];
    }
    return out;
  }catch(err){
    // Fallback: jednoduchý hash (není kryptografický, jen pro nouzovou kompatibilitu).
    const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    const s = `${SECURITY.seed}|${todayKey()}`;
    let h1 = 2166136261;
    for(let i=0;i<s.length;i++){
      h1 ^= s.charCodeAt(i);
      h1 = Math.imul(h1, 16777619) >>> 0;
    }
    let out="";
    let x=h1;
    for(let i=0;i<8;i++){
      x = (Math.imul(x ^ (x >>> 15), 2246822507) >>> 0);
      out += alphabet[x % alphabet.length];
    }
    return out;
  }
}

function uiShowApp(){ const lockEl=document.getElementById('lock'); const appEl=document.getElementById('app'); if(lockEl) lockEl.classList.add('hidden'); if(appEl) appEl.classList.remove('hidden'); }
function uiShowLock(){ const lockEl=document.getElementById('lock'); const appEl=document.getElementById('app'); if(appEl) appEl.classList.add('hidden'); if(lockEl) lockEl.classList.remove('hidden'); }

async function tryAutoUnlock(){
  const saved = Store.getItem(SECURITY.trustedKey);
  if (saved === '1') { uiShowApp(); return true; }
  return false;
}

async function unlockFlow(){
  try{

  const entered = normalizeCode(document.getElementById('pass').value);
  if(!entered) { toast('Zadejte kód'); return; }
  const daily = await getDailyCode();
  if (entered === daily) {
    if (document.getElementById('remember').checked) {
      Store.setItem(SECURITY.trustedKey, '1');
    }
    uiShowApp();
    computeAll();
  } else {
    toast('Neplatný kód');
  }
  }catch(e){
    console.error(e);
    toast('Chyba odemknutí');
  }
}
document.getElementById('unlockBtn').addEventListener('click', unlockFlow);

// Tajné menu: 5× klik na logo Hermle (po odemknutí)
(function secretDailyMenu(){
  let clicks = 0;
  let t = null;
  function reset(){ clicks = 0; if(t){ clearTimeout(t); t = null; } }
  async function hit(){
    if (document.getElementById('app').classList.contains('hidden')) return; // jen po odemknutí
    clicks++;
    if (t) clearTimeout(t);
    t = setTimeout(reset, 2000); // okno 2 s
    if (clicks >= 5){
      reset();
      const code = await getDailyCode();
      const dlg = document.getElementById('dailyDlg');
      document.getElementById('dailyShow').textContent = code;
      dlg.showModal();
    }
  }
  // Připojit na všechna loga v aplikaci (panely klientů/apod.)
  window.addEventListener('DOMContentLoaded', ()=>{
    document.querySelectorAll('#app .logo img[alt="Hermle"]').forEach(img=>{
      img.style.cursor = 'pointer';
      img.addEventListener('click', hit);
    });
  });
})();

// Copy helpers
async function copyText(txt){
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(txt);
      toast('Zkopírováno');
      return true;
    }
  } catch(e){}
  try {
    const ta = document.createElement('textarea');
    ta.value = txt;
    ta.setAttribute('readonly','');
    ta.style.position='fixed';
    ta.style.top='-1000px';
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand('copy');
    document.body.removeChild(ta);
    if (ok) { toast('Zkopírováno'); return true; }
  } catch(e){}
  try {
    const div = document.createElement('div');
    div.contentEditable = 'true';
    div.style.position='fixed'; div.style.top='-1000px';
    div.textContent = txt;
    document.body.appendChild(div);
    const range = document.createRange();
    range.selectNodeContents(div);
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
    const ok = document.execCommand('copy');
    sel.removeAllRanges();
    document.body.removeChild(div);
    if (ok) { toast('Zkopírováno'); return true; }
  } catch(e){}
  toast('Kopírování není podporováno');
  return false;
}

// Daily code dialog copy
document.getElementById('dailyCopy').addEventListener('click', async ()=>{
  const txt = document.getElementById('dailyShow').textContent || '';
  await copyText(txt);
});


// Tabs
const tabs = document.querySelectorAll('.tab');
function showTab(id){
  document.getElementById('panel-single').classList.toggle('hidden', id!=='single');
  document.getElementById('panel-range').classList.toggle('hidden', id!=='range');
  document.getElementById('panel-fixed').classList.toggle('hidden', id!=='fixed');
  document.getElementById('panel-clients').classList.toggle('hidden', id!=='clients');
  document.getElementById('panel-hotels').classList.toggle('hidden', id!=='hotels');
  // Prevent iOS from auto-focusing inputs when opening Hotels
  if(id==='hotels'){
    const hs = document.getElementById('h-search');
    try{ if(document.activeElement) document.activeElement.blur(); }catch(e){}
    try{ if(hs) hs.blur(); }catch(e){}
    setTimeout(()=>{
      try{ if(document.activeElement) document.activeElement.blur(); }catch(e){}
      try{ if(hs) hs.blur(); }catch(e){}
    }, 0);
  }

}
tabs.forEach(t => t.addEventListener('click', (e)=>{ 
  tabs.forEach(x=>x.classList.remove('active')); e.currentTarget.classList.add('active'); 
  showTab(e.currentTarget.dataset.tab);
}));

// Quick reuse: last used machine (icon button shown only when machine is empty)
(function initUseLastMachine(){
  const btn = document.getElementById('useLastMachineBtn');
  const input = document.getElementById('machine');
  const apply = ()=>{
    const lm = loadLastMachine();
    if(!lm || !lm.number) return;
    input.value = lm.number;
    try{ input.focus(); }catch(e){}
    updateLastMachineUI();
    toast(t("toast_filled_calc"));
  };
  if(btn) btn.addEventListener('click', apply);
  if(input){
    input.addEventListener('input', ()=>{ try{ updateLastMachineUI(); }catch(e){} });
    input.addEventListener('change', ()=>{ try{ updateLastMachineUI(); }catch(e){} });
  }
  try{ updateLastMachineUI(); }catch(e){}
})();

function toast(msg){ const el=document.getElementById('toast'); el.textContent=msg||'Hotovo'; el.classList.add('show'); setTimeout(()=>el.classList.remove('show'), 1400); }

// Calc core
function last4Digits(n){ return Math.abs(n) % 10000; }
function digitsSum4(n){ const d = last4Digits(n); return Math.floor(d/1000)%10 + Math.floor(d/100)%10 + Math.floor(d/10)%10 + d%10; }
function baseF(dateStr){ const d = new Date(dateStr); return (d.getMonth()+1) + d.getDate(); }
function computeCode(N, F, K, offset){ const C=N*F*K+offset; const Dsum=digitsSum4(C); const B=C+Dsum; return B; }

// Code formatting (UI: spaced, Copy: raw)
function onlyDigits(v){ return String(v ?? '').replace(/\D/g,''); }
function formatCodeUi(raw){
  const s = onlyDigits(raw);
  // Prefer 2–3–2 grouping for 7-digit codes (matches MP/PLC codes in this app)
  if (s.length === 7) return `${s.slice(0,2)} ${s.slice(2,5)} ${s.slice(5,7)}`;
  // Fallback: thousands grouping
  return s.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}
// Code formatting without spaces (for period table compact view)
function formatCodeUiNoSpace(raw){
  return onlyDigits(raw);
}
function setCode(el, value){
  if(!el) return;
  const raw = onlyDigits(value);
  el.dataset.raw = raw;
  el.textContent = formatCodeUi(raw);
}
function getCodeRaw(el){
  if(!el) return '';
  return onlyDigits(el.dataset.raw || el.textContent || '');
}

function computeAll(){
  const dateStr = document.getElementById('date').value;
  const N = parseInt(document.getElementById('machine').value,10);
  if(!dateStr || isNaN(N)){ toast('Zadejte datum i číslo stroje'); return; }
  // persist last used machine for quick reuse
  try{
    const prev = loadLastMachine();
    const obj = { number: N, ts: Date.now() };
    if(prev && prev.number===N){ if(prev.label) obj.label=prev.label; if(prev.customerName) obj.customerName=prev.customerName; }
    saveLastMachine(obj);
    updateLastMachineUI();
  }catch(e){}
  const F = baseF(dateStr);
  setCode(document.getElementById('mpAccess'), computeCode(N,F,11,1777));
  setCode(document.getElementById('mpAcceptance'), computeCode(N,F,12,2888));
  setCode(document.getElementById('plcAccess'), computeCode(N,F,13,3999));
}
document.getElementById('recalc').addEventListener('click', computeAll);
document.getElementById('todayBtn').addEventListener('click', ()=>{ const t=new Date(); const s=t.toISOString().slice(0,10); document.getElementById('date').value=s; computeAll(); });

// === AUTO DATUM PŘI STARTU ===
window.addEventListener('DOMContentLoaded', () => {
  const t = new Date();
  const s = t.toISOString().slice(0,10);
  document.getElementById('date').value = s;
  // pokus o automatický výpočet, jen pokud je vyplněno N
  const nVal = document.getElementById('machine').value;
  if(nVal) try{ computeAll(); }catch(e){}
});

// === AUTO PŘEPOČET BĚHEM PSANÍ ===
document.getElementById('date').addEventListener('input', ()=>{ try{ computeAll(); }catch(e){} });
document.getElementById('machine').addEventListener('input', (e)=>{
  try{ computeAll(); }catch(e){}
  // === AUTOMATICKÝ PŘENOS ČÍSLA STROJE DO OBDOBÍ ===
  const rM = document.getElementById('r-machine');
  if(rM) rM.value = e.target.value;
});


// Copy/share bindings
document.addEventListener('click', (e)=>{
  const trg = e.target.closest('[data-copy]'); 
  if(trg){
    const sel=trg.getAttribute('data-copy'); 
    const el=document.querySelector(sel); 
    if(el){ copyText(getCodeRaw(el)); }
  }
});
document.getElementById('copyAll').addEventListener('click', ()=>{ 
  const mp=getCodeRaw(mpAccess), ma=getCodeRaw(mpAcceptance), plc=getCodeRaw(plcAccess);
  const txt=`MP Access: ${mp}
MP Acceptance: ${ma}
PLC Access: ${plc}`; 
  copyText(txt);
});
document.getElementById('shareAll').addEventListener('click', async ()=>{ 
  const mp=getCodeRaw(mpAccess), ma=getCodeRaw(mpAcceptance), plc=getCodeRaw(plcAccess);
  const dateStr=date.value; const N=machine.value; 
  const txt=`Kódy pro N=${N}, datum ${dateStr}
MP Access: ${mp}
MP Acceptance: ${ma}
PLC Access: ${plc}`; 
  if(navigator.share){ try{ await navigator.share({ title:'HDH CODE', text: txt }); }catch(e){} } else { copyText(txt); }
});

// Range panel
function formatISO(d){ return d.toISOString().slice(0,10); }
function addDays(d,n){ const x=new Date(d); x.setDate(x.getDate()+n); return x; }
function formatDateShort(d){
  const days=["Ne","Po","Út","St","Čt","Pá","So"];
  const dd=String(d.getDate()).padStart(2,'0');
  const mm=String(d.getMonth()+1).padStart(2,'0');
  const yy=String(d.getFullYear()).slice(-2);
  return `${dd} / ${mm} / ${yy} ${days[d.getDay()]}`;
}
function getCurrentWeek(){
  const today=new Date();
  const day=(today.getDay()+6)%7; // 0=Mon ... 6=Sun
  const monday=addDays(today, -day);
  monday.setHours(0,0,0,0);
  const sunday=addDays(monday, 6);
  return { monday, sunday };
}
function setCurrentWeek(){
  const {monday, sunday}=getCurrentWeek();
  const fromEl=document.getElementById('r-from');
  const toEl=document.getElementById('r-to');
  if(fromEl && toEl){
    fromEl.value=formatISO(monday);
    toEl.value=formatISO(sunday);
  }
}

function fillRangeTable(){ 
  const N=parseInt(document.getElementById('r-machine').value,10); const from=document.getElementById('r-from').value; const to=document.getElementById('r-to').value; 
  if(isNaN(N)||!from||!to){ toast("Zadejte N i data"); return; } 
  const tBody=document.querySelector('#r-table tbody'); tBody.innerHTML="";
  const start=new Date(from); const end=new Date(to); if(end<start){ toast("Datum 'Do' dříve než 'Od'"); return; } 
  for(let d=new Date(start); d<=end; d=addDays(d,1)){ 
    const dateIso=formatISO(d); const F=baseF(dateIso);
    const dateUi=formatDateShort(d);
    const mp=computeCode(N,F,11,1777); const ma=computeCode(N,F,12,2888); const plc=computeCode(N,F,13,3999); 
    const tr=document.createElement('tr');
    const isWeekend = (d.getDay()===0 || d.getDay()===6);
    if(isWeekend) tr.classList.add('weekend'); 
    tr.innerHTML=`<td style="padding:6px 6px;border-bottom:1px solid var(--border);white-space:nowrap;font-size:14px">${dateUi}</td><td style="padding:6px 6px;border-bottom:1px solid var(--border)">${formatCodeUiNoSpace(mp)}</td><td style="padding:6px 6px;border-bottom:1px solid var(--border)">${formatCodeUiNoSpace(ma)}</td><td style="padding:6px 6px;border-bottom:1px solid var(--border)">${formatCodeUiNoSpace(plc)}</td>`; 
    tBody.appendChild(tr); 
  } 
}
function setWeek(delta){ 
  const fromEl=document.getElementById('r-from'); const toEl=document.getElementById('r-to'); 
  const from=new Date(fromEl.value); const nf=addDays(from,7*delta); const nt=addDays(new Date(toEl.value),7*delta); 
  fromEl.value=formatISO(nf); toEl.value=formatISO(nt); 
  fillRangeTable(); 
}
document.getElementById('r-gen').addEventListener('click', fillRangeTable);
document.addEventListener('DOMContentLoaded', setCurrentWeek);
document.getElementById('r-week-prev').addEventListener('click', ()=> setWeek(-1));
document.getElementById('r-week-next').addEventListener('click', ()=> setWeek(1));
document.getElementById('r-print').addEventListener('click', ()=>{ 
  const N=document.getElementById('r-machine').value; const from=document.getElementById('r-from').value; const to=document.getElementById('r-to').value; 
  const tableHTML=document.getElementById('r-table').outerHTML; 
  const w=window.open('', '_blank'); 
  w.document.write(`<!doctype html><html><head><meta charset="utf-8"><title>HDH CODE – export</title><style>body{font-family:Arial,sans-serif;padding:16px}h1{font-size:18px;margin:00 8px}p{margin:00 12px}table{width:100%;border-collapse:collapse}th,td{border:1px solid #000;padding:6px 8px;text-align:left}th{background:#f0f0f0}

    .c-card{ padding:12px; margin-bottom:10px; }
    .c-top{ display:flex; gap:12px; justify-content:space-between; align-items:flex-start; }
    .c-left{ min-width:0; flex:1; }
    .c-name{ font-weight:900; word-break:break-word; }
    .c-contact,.c-address,.c-note{ opacity:.9; font-size:.92rem; margin-top:2px; word-break:break-word; }
    .c-note{ opacity:.75; }
    .c-right{ display:flex; gap:8px; flex-shrink:0; align-items:center; }
    .c-iconbtn{ width:40px; height:36px; display:inline-flex; align-items:center; justify-content:center; border-radius:12px; border:1px solid var(--border); background:var(--bg); font-size:18px; text-decoration:none; color:inherit; padding:0; cursor:pointer; }
    .c-iconbtn svg{ width:22px; height:22px; display:block; }
    .c-iconbtn--disabled{ opacity:.35; }
    .c-machinebtn{ position:relative; }
    .c-machinebtn svg{ width:22px; height:22px; }
    .c-machinecount{ position:absolute; right:-4px; top:-4px; min-width:18px; height:18px; padding:0 4px; border-radius:999px; background:#111; color:#fff; font-size:11px; font-weight:900; display:flex; align-items:center; justify-content:center; }
    .c-machines{ margin-top:10px; }

/* --- Universal mobile overflow fix --- */
input:not([type="checkbox"]):not([type="radio"]), select, textarea, button {
    max-width: 100% !important;
    width: 100% !important;
    box-sizing: border-box;
}
.section, .card {
    max-width: 100%;
    overflow-x: hidden;
}
.row {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}


/* Rounded input beautify */
input:not([type="checkbox"]):not([type="radio"]), select, textarea {
    border-radius: 20px !important;
    padding: 12px 16px !important;
    border: 1px solid #e0e0e0 !important;
}
button {
    border-radius: 18px !important;
}


/* --- Rounded input fix A --- */
.card {
    border: none !important;
}

.card input[type="text"],
.card input[type="number"],
.card input[type="date"],
.card input[type="password"],
.card input[type="search"],
.card input {
    border-radius: 20px !important;
    border: 1px solid #d0d0d0 !important;
    padding: 12px 16px !important;
    background: #ffffff !important;
}


/* --- iOS rounded input fix --- */
input[type="date"],
input[type="number"],
input[type="text"],
input[type="password"],
input[type="search"] {
    -webkit-appearance: none !important;
    appearance: none !important;

    border-radius: 20px !important;
    border: 1px solid #d0d0d0 !important;
    padding: 14px 16px !important;
    background-color: #ffffff !important;

    width: 100% !important;
    box-sizing: border-box;
}


/* --- Language switch --- */
.langbar{display:flex; gap:6px; align-items:center}
.langbtn{
  border:1px solid #d0d0d0 !important;
  background:#fff !important;
  padding:6px 10px !important;
  border-radius:999px !important;
  font-weight:900 !important;
  min-width:auto !important;
}
.langbtn.active{
  background:#111 !important;
  color:#fff !important;
  border-color:#111 !important;
}


/* Ensure Import text matches Export exactly (iOS can style buttons differently) */
#f-import-btn, #c-import-btn{
  -webkit-appearance:none;
  appearance:none;
  font-family: inherit;
  font-weight: 900;
  text-align: center;
  justify-content: center;
  align-items: center;
}


/* FINAL: Import text same as Export (no bold, same size/font) */
#f-import-btn, #c-import-btn{
  font-weight: inherit;
  font-size: inherit;
  font-family: inherit;
}


    /* weekend highlighting */
    tr.weekend td { background: rgba(211, 37, 37, 0.08); }
    tr.weekend td:first-child { font-weight: 900; }


.icon-machine{width:22px;height:22px}
</style></head><body><h1>HDH CODE – hromadný export</h1><p>Stroj N: <b>${N}</b> | Období: <b>${from}</b> – <b>${to}</b></p>${tableHTML}<script>window.onload=()=>window.print();<\/script>
<!-- Popup Add Machine -->
<div id="popupAddMachine" class="modal" style="display:none;
 position:fixed; top:0; left:0; width:100%; height:100%;
 background:rgba(0,0,0,0.5); backdrop-filter:blur(3px); 
 justify-content:center; align-items:center; z-index:9999;">
  <div style="background:white; padding:20px; border-radius:10px; width:90%; max-width:400px;">
    <h2>Přidat stroj</h2>
    <p>Číslo stroje: <span id="popupMachineNumber"></span></p>

    <h3>K existujícímu zákazníkovi</h3>
    <div id="popupCustomerList"></div>

    <hr>

    <h3>Nový zákazník</h3>
    <input id="popupNewCustName" placeholder="Jméno zákazníka" style="width:100%; margin-bottom:10px;">
    <input id="popupNewCustPhone" placeholder="Telefon" inputmode="tel" autocomplete="tel" style="width:100%; margin-bottom:10px;">
    <button class="btn primary" id="popupCreateCustomer" style="width:100%;">Vytvořit zákazníka a přidat stroj</button>

    <button class="btn" id="popupClose" style="margin-top:10px; width:100%;">Zavřít</button>
  </div>
</div>





<div id="popupAddMachine" class="modal" style="display:none;
 position:fixed; top:0; left:0; width:100%; height:100%;
 background:rgba(0,0,0,0.5); backdrop-filter:blur(3px); 
 justify-content:center; align-items:center; z-index:9999;">
  <div style="background:white; padding:20px; border-radius:10px; width:90%; max-width:400px;">
    <h2>Přidat stroj</h2>
    <p>Číslo stroje: <span id="popupMachineNumber"></span></p>
    <h3>K existujícímu zákazníkovi</h3>
    <div id="popupCustomerList"></div>
    <hr>
    <h3>Nový zákazník</h3>
    <input id="popupNewCustName" placeholder="Jméno zákazníka" style="width:100%; margin-bottom:10px;">
    <input id="popupNewCustPhone" placeholder="Telefon" inputmode="tel" autocomplete="tel" style="width:100%; margin-bottom:10px;">
    <button class="btn primary" id="popupCreateCustomer" style="width:100%;">Vytvořit zákazníka a přidat stroj</button>
    <button class="btn" id="popupClose" style="margin-top:10px; width:100%;">Zavřít</button>
  </div>
</div>

</body></html>`); 
  w.document.close(); 
});

// Customers panel — safe storage and robust events
function loadCustomers(){ 
  try{ const raw=Store.getItem(LS_KEYS.customers); return raw? JSON.parse(raw) : []; }catch(e){ toast('Chyba čtení zákazníků'); return []; } 
}
function saveCustomers(list){ 
  try{ Store.setItem(LS_KEYS.customers, JSON.stringify(list)); return true; } 
  catch(e){ toast('Uložení selhalo'); return false; }
}
function uuid(){ return Math.random().toString(36).slice(2)+Date.now().toString(36); }

// Last used machine (for quick reuse in Výpočet)
function loadLastMachine(){
  try{ const raw = Store.getItem(LS_KEYS.lastMachine); return raw ? JSON.parse(raw) : null; }
  catch(e){ return null; }
}
function saveLastMachine(obj){
  try{ Store.setItem(LS_KEYS.lastMachine, JSON.stringify(obj)); return true; }
  catch(e){ return false; }
}
function updateLastMachineUI(){
  const btn = document.getElementById('useLastMachineBtn');
  const input = document.getElementById('machine');
  if(!btn || !input) return;
  const lm = loadLastMachine();
  const hasLM = !!(lm && lm.number);
  const empty = !String(input.value || '').trim();
  btn.style.display = (hasLM && empty) ? 'flex' : 'none';
}

(function ensureSeed(){
  try{
    if (Store.getItem(LS_KEYS.customers) === null) {
      const seed=[{id:uuid(),name:"ArianeGroup Vernon",note:"FR – RS1",machines:[{id:uuid(),label:"Hermle C42U",number:31997},{id:uuid(),label:"RS1 #2",number:42015}]},{id:uuid(),name:"Morava Cast Prostějov",note:"CZ – C32 + HS flex",machines:[{id:uuid(),label:"Hermle C32U",number:31888}]}];
      saveCustomers(seed);
    }
  }catch(e){}
})();

// UI state for customers (collapse/expand)
const customersUIState = {
  expandedCustomers: new Set(),
  expandedMachines: new Set(),
  openMenuCustomerId: null,
};

function normalizePhone(p){
  const s = String(p||'').trim();
  if(!s) return '';
  // keep leading +, remove spaces and common separators
  return s.replace(/[^\d+]/g,'');
}

// Formats phone numbers for display (adds spaces), while keeping the value human-readable.
// Example: +420123456789 -> +420123456789, 123456789 -> 123456789

function formatPhoneDisplay(value) {
  if (!value) return "";

  const hasPlus = value.trim().startsWith("+");
  let digits = value.replace(/\D/g, "");

  let prefix = "";
  if (hasPlus) {
    if (digits.length > 9) {
      prefix = "+" + digits.slice(0, digits.length - 9) + " ";
      digits = digits.slice(-9);
    } else {
      prefix = "+";
    }
  }

  digits = digits.slice(0, 9);

  const a = digits.slice(0, 3);
  const b = digits.slice(3, 6);
  const c = digits.slice(6, 9);

  let out = prefix;
  if (a) out += a;
  if (b) out += " " + b;
  if (c) out += " " + c;

  return out.trim();
}

function attachPhoneFormatter(inputEl){
  if(!inputEl) return;
  inputEl.addEventListener('input', ()=>{
    const formatted = formatPhoneDisplay(inputEl.value);
    inputEl.value = formatted;
  });
}

function escapeHtml(str){
  return String(str ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;',"'":'&#39;'}[ch]));
}

function machineIconSvg(){
  return `
  <svg viewBox="0 0 64 64" aria-hidden="true" focusable="false">
    <circle cx="32" cy="32" r="30" fill="none" stroke="#2f5cff" stroke-width="4"></circle>
    <rect x="14" y="18" width="36" height="28" rx="3" fill="none" stroke="#000" stroke-width="3"></rect>
    <rect x="26" y="12" width="12" height="6" fill="#000"></rect>
    <rect x="20" y="24" width="8" height="16" fill="#000"></rect>
    <rect x="36" y="24" width="8" height="16" fill="#000"></rect>
  </svg>`;
}

function buildMapHref(address, name=''){
  const q = [String(name||'').trim(), String(address||'').trim()].filter(Boolean).join(', ');
  return q ? `https://maps.google.com/?q=${encodeURIComponent(q)}` : '';
}

function renderCustomers(filter=""){
  const raw=(filter||"").trim();
  const q=raw.toLowerCase();
  const norm = (str)=>String(str||"").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"");
  const qn = norm(q);
  const list=loadCustomers();

  list.sort((a,b)=>String(a?.name||'').localeCompare(String(b?.name||''),'cs',{sensitivity:'base'}));

  const root=document.getElementById('c-list');
  root.innerHTML="";

  list.forEach(c=>{
    const nameN = norm(c.name);
    const noteN = norm(c.note||"");
    const contactN = norm(c.contactName||"");
    const addressN = norm(c.address||"");
    const phoneS = String(c.contactPhone||"");
    const matchCustomer = (!q)
      ? true
      : (qn.length===1 && /[a-z]/i.test(qn)
          ? nameN.startsWith(qn)
          : (nameN.includes(qn) || noteN.includes(qn) || contactN.includes(qn) || addressN.includes(qn) || phoneS.includes(q)));

    const machines=[...(c.machines||[])].sort((a,b)=>(Number(b.number)||0)-(Number(a.number)||0));
    const matchedMachines=machines.filter(m=>{
      const labN = norm(m.label||"");
      const numS = String(m.number||"");
      if(!q) return true;
      return (qn.length===1 && /[a-z]/i.test(qn))
        ? false
        : (labN.includes(qn) || numS.includes(q));
    });

    if(!q || matchCustomer || matchedMachines.length){
      const box=document.createElement('div');
      box.className="card c-card";

      const isOpen = customersUIState.expandedCustomers.has(c.id);
      const phoneNorm = normalizePhone(c.contactPhone);
      const mapHref = buildMapHref(c.address, c.name);
      const shownMachines = (q && !matchCustomer) ? matchedMachines : machines;

      const contactLine = (c.contactName || c.contactPhone)
        ? `<div class="c-contact">${c.contactName ? `<span>${escapeHtml(c.contactName)}</span>` : ``}${c.contactPhone ? `<span style="margin-left:8px"><a href="tel:${phoneNorm}" style="text-decoration:underline">${escapeHtml(c.contactPhone)}</a></span>` : ``}</div>`
        : ``;
      const addressLine = c.address ? `<div class="c-address">${escapeHtml(c.address)}</div>` : ``;
      const noteLine = c.note ? `<div class="c-note">${escapeHtml(c.note)}</div>` : ``;

      box.innerHTML = `
        <div class="c-top">
          <div class="c-left">
            <div class="c-name">${escapeHtml(c.name)}</div>
            ${contactLine}
            ${addressLine}
            ${noteLine}
          </div>
          <div class="c-right">
            ${c.contactPhone ? `<a class="c-iconbtn" href="tel:${phoneNorm}" title="${t('btn_call')}" aria-label="${t('btn_call')}">📞</a>` : `<button class="c-iconbtn c-iconbtn--disabled" type="button" disabled aria-label="${t('btn_call')}">📞</button>`}
            ${mapHref ? `<a class="c-iconbtn" href="${mapHref}" target="_blank" rel="noopener" title="${t('btn_map')}" aria-label="${t('btn_map')}">🗺️</a>` : `<button class="c-iconbtn c-iconbtn--disabled" type="button" disabled aria-label="${t('btn_map')}">🗺️</button>`}
            <button class="c-iconbtn" data-act="edit-c-btn" data-id="${c.id}" type="button" aria-label="${t('btn_edit')}" title="${t('btn_edit')}">✏️</button>
            <button class="c-iconbtn c-machinebtn" data-act="toggle-c" data-id="${c.id}" type="button" aria-label="${t('btn_machines')}" title="${t('btn_machines')}">${machineIconSvg()}<span class="c-machinecount">${machines.length}</span></button>
          </div>
        </div>`;

      if(isOpen){
        const machinesHtml = shownMachines.length
          ? shownMachines.map(m=>{
              return `
                <div style="margin-top:10px;padding-top:10px;border-top:1px dashed var(--border)">
                  <div style="display:flex;align-items:center;gap:10px">
                    <div data-act="use-m" data-cid="${c.id}" data-mid="${m.id}" role="button" tabindex="0"
                         style="flex:1;min-width:0;cursor:pointer;padding:10px;border:1px solid var(--border);border-radius:14px;background:#fff">
                      <div style="font-weight:900;font-size:1.15rem;line-height:1.1">N: ${escapeHtml(m.number||"")}</div>
                      <div style="opacity:.85;font-size:.92rem;word-break:break-word">${escapeHtml(m.label||"")}</div>
                    </div>
                    <button class="btn iconbtn" data-act="edit-m" data-cid="${c.id}" data-mid="${m.id}" type="button" aria-label="${t('btn_edit')}">✎</button>
                  </div>
                </div>`;
            }).join('')
          : `<div style="margin-top:10px;opacity:.75">${t("customers_no_machines")}</div>`;

        box.innerHTML += `<div class="c-machines">${machinesHtml}</div>`;
      }

      root.appendChild(box);
    }
  });
}
renderCustomers();
document.getElementById('c-search').addEventListener('input', (e)=>renderCustomers(e.target.value));

// (customer actions are opened as a dialog, no dropdown menu)

const clientsDlg=document.getElementById('clientsDlg'); let dlgSaveHandler=null; let dlgDeleteHandler=null;
// openDialog(title, bodyHTML, onSave, onDelete?)
function openDialog(title, innerHTML, onSave, onDelete=null){
  document.getElementById('dlg-title').textContent=title;
  document.getElementById('dlg-body').innerHTML=innerHTML;
  const save=document.getElementById('dlg-save');
  const del=document.getElementById('dlg-delete');
  if(dlgSaveHandler) save.removeEventListener('click', dlgSaveHandler);
  dlgSaveHandler=(ev)=>{ ev.preventDefault(); onSave(()=>clientsDlg.close()); };
  save.addEventListener('click', dlgSaveHandler, { once:true });

  // delete button is optional
  if(dlgDeleteHandler && del) del.removeEventListener('click', dlgDeleteHandler);
  if(del){
    if(typeof onDelete === 'function'){
      del.classList.remove('hidden');
      dlgDeleteHandler=(ev)=>{ ev.preventDefault(); onDelete(()=>clientsDlg.close()); };
      del.addEventListener('click', dlgDeleteHandler, { once:true });
    } else {
      del.classList.add('hidden');
      dlgDeleteHandler=null;
    }
  }
  clientsDlg.showModal();
}

// Add customer
document.getElementById('c-add').addEventListener('click', ()=>{
  openDialog(t("dlg_add_customer_title"), `<label>${t("label_name")}</label><input id="f-name"><label>${t("label_contact")}</label><input id="f-contact"><label>${t("label_phone")}</label><input id="f-phone" inputmode="tel" autocomplete="tel"><label>${t("label_address")}</label><input id="f-address"><label>${t("label_note")}</label><input id="f-note">`, (close)=>{
    const name=document.getElementById('f-name').value.trim();
    if(!name){ toast(t("err_enter_name")); return; }
    const list=loadCustomers();
    list.push({id:uuid(), name, contactName:(document.getElementById('f-contact').value||'').trim(), contactPhone:(document.getElementById('f-phone').value||'').trim(), address:(document.getElementById('f-address').value||'').trim(), note:(document.getElementById('f-note').value||'').trim(), machines:[]});
    if(saveCustomers(list)){ renderCustomers(document.getElementById('c-search').value); close(); toast(t("toast_saved")); }
  });
  // iOS shows phone keypad (practical), but it has no space. This formatter adds spaces automatically.
  attachPhoneFormatter(document.getElementById('f-phone'));
});

// Export customers
document.getElementById('c-export').addEventListener('click', ()=>{
  const data = JSON.stringify(loadCustomers(), null, 2);
  const blob = new Blob([data], {type:'application/json'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = 'customers.json';
  document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
});

// Import customers (mode: override/update)
let customersImportMode = 'override';

(function setupCustomersImportUI(){
  const btn = document.getElementById('c-import-btn');
  const fileInput = document.getElementById('c-import-file');
  const dlg = document.getElementById('importModeDlg');
  if(btn && dlg && fileInput){
    btn.addEventListener('click', (e)=>{
      // Prevent the <label for="..."> from opening the file picker immediately
      e.preventDefault();
      dlg.showModal();
    });

    dlg.addEventListener('click', (e)=>{
      const b = e.target.closest('button[data-mode]');
      if(!b) return;
      customersImportMode = b.getAttribute('data-mode') || 'override';
      dlg.close();
      // Open file picker after mode selection
      fileInput.value="";
      setTimeout(()=>fileInput.click(), 150);
    });
  }
})();

document.getElementById('c-import-file').addEventListener('change', (e)=>{
  const file = e.target.files && e.target.files[0];
  if(!file) return;

  const norm = (s)=>String(s||'').trim().toLowerCase();
  const reader = new FileReader();
  reader.onload = (ev)=>{
    try{
      const incomingRaw = JSON.parse(ev.target.result);
      if(!Array.isArray(incomingRaw)) throw new Error('Neplatný formát');

      const incoming = incomingRaw.map(c=>({
        id: c.id || uuid(),
        name: String(c.name||'').trim(),
        contactName: String(c.contactName||c.contact||'').trim(),
        contactPhone: String(c.contactPhone||c.phone||'').trim(),
        note: String(c.note||'').trim(),
        machines: Array.isArray(c.machines) ? c.machines.map(m=>({
          id: m.id || uuid(),
          label: String(m.label||'').trim(),
          number: m.number ? parseInt(m.number,10) : null
        })) : []
      })).filter(c=>c.name);

      if(customersImportMode === 'override'){
        if(saveCustomers(incoming)){
          renderCustomers(document.getElementById('c-search').value);
          toast('Import hotov (Override)');
        }
      }else{
        // UPDATE: merge by customer name + machine label (case-insensitive)
        const existing = loadCustomers();
        const byName = new Map(existing.map(c=>[norm(c.name), c]));

        incoming.forEach(inc=>{
          const key = norm(inc.name);
          const cur = byName.get(key);
          if(!cur){
            // new customer
            existing.push(inc);
            byName.set(key, inc);
            return;
          }

          // fill missing meta fields only (do not overwrite existing)
          if(!cur.contactName && inc.contactName) cur.contactName = inc.contactName;
          if(!cur.contactPhone && inc.contactPhone) cur.contactPhone = inc.contactPhone;
          if(!cur.address && inc.address) cur.address = inc.address;
          if(!cur.note && inc.note) cur.note = inc.note;

          // merge machines
          if(!Array.isArray(cur.machines)) cur.machines = [];
          const mByLabel = new Map(cur.machines.map(m=>[norm(m.label), m]));
          inc.machines.forEach(im=>{
            const mk = norm(im.label);
            if(mk && mByLabel.has(mk)) {
              const em = mByLabel.get(mk);
              // optionally fill number if missing
              if((em.number==null || Number.isNaN(em.number)) && im.number!=null && !Number.isNaN(im.number)) em.number = im.number;
              return;
            }
            // fallback: match by number if label empty
            if(!mk && im.number!=null){
              const existsByNum = cur.machines.some(em=>em.number===im.number);
              if(existsByNum) return;
            }
            cur.machines.push({
              id: im.id || uuid(),
              label: im.label,
              number: (im.number!=null && !Number.isNaN(im.number)) ? im.number : null
            });
            if(mk) mByLabel.set(mk, cur.machines[cur.machines.length-1]);
          });
  // iOS numeric/phone keyboard has no space key – format with spaces automatically
  setTimeout(()=>attachPhoneFormatter(document.getElementById('f-phone')), 0);
        });

        if(saveCustomers(existing)){
          renderCustomers(document.getElementById('c-search').value);
          toast('Import hotov (Update)');
        }
      }
    }catch(err){
      alert('Import selhal: ' + err.message);
    }
    e.target.value = '';
  };
  reader.readAsText(file);
});

// Delegated actions (robust)
document.getElementById('c-list').addEventListener('click',(e)=>{
  const trg = e.target.closest('[data-act]'); if(!trg) return;
  const act=trg.getAttribute('data-act');

  // Customer edit (opens as modal like machine edit)
  if(act==='edit-c-btn'){
    e.preventDefault();
    e.stopPropagation();
    const id = trg.getAttribute('data-id');
    const list = loadCustomers();
    const c = list.find(x=>x.id===id);
    if(!c) return;

    const body = `
      <label>${t("label_name")}</label>
      <input id="f-name" value="${escapeHtml(c.name)}">
      <label>${t("label_contact")}</label>
      <input id="f-contact" value="${escapeHtml(c.contactName||"")}">
      <label>${t("label_phone")}</label>
      <input id="f-phone" inputmode="tel" value="${escapeHtml(c.contactPhone||"")}">
      <label>${t("label_address")}</label>
      <input id="f-address" value="${escapeHtml(c.address||"")}">
      <label>${t("label_note")}</label>
      <input id="f-note" value="${escapeHtml(c.note||"")}">
      <div style="display:flex;justify-content:flex-end;margin-top:12px">
        <button id="dlg-add-machine" type="button" class="btn inline">${t("btn_add_machine_small")}</button>
      </div>
    `;

    openDialog(
      t("dlg_edit_customer_title"),
      body,
      (close)=>{
        c.name=document.getElementById('f-name').value.trim();
        c.contactName=(document.getElementById('f-contact').value||'').trim();
        c.contactPhone=(document.getElementById('f-phone').value||'').trim();
        c.address=(document.getElementById('f-address').value||'').trim();
        c.note=(document.getElementById('f-note').value||'').trim();
        if(saveCustomers(list)){ renderCustomers(document.getElementById('c-search').value); close(); toast(t("toast_saved")); }
      },
      (close)=>{
        if(!confirm(t("confirm_delete_customer"))) return;
        if(saveCustomers(list.filter(cc=>cc.id!==id))){ renderCustomers(document.getElementById('c-search').value); close(); toast(t("toast_deleted")); }
      }
    );

    // Hook "+ Stroj" button inside dialog body
    attachPhoneFormatter(document.getElementById('f-phone'));

    const addBtn = document.getElementById('dlg-add-machine');
    if(addBtn){
      addBtn.addEventListener('click', (ev)=>{
        ev.preventDefault();
        clientsDlg.close();
        // open add-machine dialog for this customer
        const fresh = loadCustomers();
        const cc = fresh.find(x=>x.id===id);
        if(!cc) return;
        openDialog(t("dlg_add_machine_title"),
          `<label>${t("label_machine_name")}</label><input id="f-label"><label>${t("label_machine_number_short")}</label><input id="f-number" type="number" inputmode="numeric">`,
          (close2)=>{
            cc.machines=cc.machines||[];
            cc.machines.push({id:uuid(), label:(document.getElementById('f-label').value||'').trim(), number: parseInt(document.getElementById('f-number').value||'0',10)});
            cc.machines.sort((a,b)=>(Number(b.number)||0)-(Number(a.number)||0));
            if(saveCustomers(fresh)){ renderCustomers(document.getElementById('c-search').value); close2(); toast(t("toast_saved")); }
          }
        );
      }, { once:true });
    }
    return;
  }

  // UI toggles (no data changes)
  if(act==='toggle-c'){
    const id=trg.getAttribute('data-id');
    if(customersUIState.expandedCustomers.has(id)) customersUIState.expandedCustomers.delete(id);
    else customersUIState.expandedCustomers.add(id);
    renderCustomers(document.getElementById('c-search').value);
    return;
  }
  if(act==='toggle-m'){
    const cid=trg.getAttribute('data-cid');
    const mid=trg.getAttribute('data-mid');
    const key=`${cid}::${mid}`;
    if(customersUIState.expandedMachines.has(key)) customersUIState.expandedMachines.delete(key);
    else customersUIState.expandedMachines.add(key);
    // ensure customer stays open
    customersUIState.expandedCustomers.add(cid);
    renderCustomers(document.getElementById('c-search').value);
    return;
  }
  const list=loadCustomers();
  if(act==='del-c'){ const id=trg.getAttribute('data-id'); if(!confirm(t("confirm_delete_customer"))) return; if(saveCustomers(list.filter(c=>c.id!==id))){ renderCustomers(document.getElementById('c-search').value); toast(t("toast_deleted")); } return; }
  if(act==='edit-c'){ const id=trg.getAttribute('data-id'); const c=list.find(x=>x.id===id);
    openDialog(t("dlg_edit_customer_title"), `<label>${t("label_name")}</label><input id="f-name" value="${escapeHtml(c.name)}"><label>${t("label_contact")}</label><input id="f-contact" value="${escapeHtml(c.contactName||"")}"><label>${t("label_phone")}</label><input id="f-phone" inputmode="tel" value="${escapeHtml(c.contactPhone||"")}"><label>${t("label_address")}</label><input id="f-address" value="${escapeHtml(c.address||"")}"><label>${t("label_note")}</label><input id="f-note" value="${escapeHtml(c.note||"")}">`, (close)=>{
      c.name=document.getElementById('f-name').value.trim(); c.contactName=(document.getElementById('f-contact').value||'').trim(); c.contactPhone=(document.getElementById('f-phone').value||'').trim(); c.address=(document.getElementById('f-address').value||'').trim(); c.note=document.getElementById('f-note').value.trim(); if(saveCustomers(list)){ renderCustomers(document.getElementById('c-search').value); close(); toast(t("toast_saved")); }
    });
    attachPhoneFormatter(document.getElementById('f-phone'));
    return; }
  if(act==='add-m'){ const id=trg.getAttribute('data-id'); const c=list.find(x=>x.id===id);
    openDialog(t("dlg_add_machine_title"), `<label>${t("label_machine_name")}</label><input id="f-label"><label>${t("label_machine_number_short")}</label><input id="f-number" type="number" inputmode="numeric">`, (close)=>{
      c.machines=c.machines||[]; c.machines.push({id:uuid(), label:(document.getElementById('f-label').value||'').trim(), number: parseInt(document.getElementById('f-number').value||'0',10)});
      c.machines.sort((a,b)=>(Number(b.number)||0)-(Number(a.number)||0));
      if(saveCustomers(list)){ renderCustomers(document.getElementById('c-search').value); close(); toast(t("toast_saved")); }
    }); return; }
  if(act==='del-m'){ const cid=trg.getAttribute('data-cid'); const mid=trg.getAttribute('data-mid'); const c=list.find(x=>x.id===cid); if(!confirm(t("confirm_delete_machine"))) return; c.machines=(c.machines||[]).filter(m=>m.id!==mid); if(saveCustomers(list)){ renderCustomers(document.getElementById('c-search').value); toast(t("toast_deleted")); } return; }
  if(act==='edit-m'){ const cid=trg.getAttribute('data-cid'); const mid=trg.getAttribute('data-mid'); const c=list.find(x=>x.id===cid); const m=(c.machines||[]).find(x=>x.id===mid);
    openDialog(
      t("dlg_edit_machine_title"),
      `<label>${t("label_machine_name")}</label><input id="f-label" value="${m.label||""}"><label>${t("label_machine_number_short")}</label><input id="f-number" type="number" inputmode="numeric" value="${m.number||""}">`,
      (close)=>{
        m.label=(document.getElementById('f-label').value||'').trim();
        m.number=parseInt(document.getElementById('f-number').value||'0',10);
        if(saveCustomers(list)){ renderCustomers(document.getElementById('c-search').value); close(); toast(t("toast_saved")); }
      },
      (close)=>{
        if(!confirm(t("confirm_delete_machine"))) return;
        c.machines=(c.machines||[]).filter(mm=>mm.id!==mid);
        if(saveCustomers(list)){ renderCustomers(document.getElementById('c-search').value); close(); toast(t("toast_deleted")); }
      }
    );
    return;
  }
  if(act==='use-m'){ const cid=trg.getAttribute('data-cid'); const mid=trg.getAttribute('data-mid'); const c=list.find(x=>x.id===cid); const m=(c.machines||[]).find(x=>x.id===mid);
    if(m&&m.number){
      document.getElementById('machine').value=m.number;
      try{ saveLastMachine({ number: m.number, label: m.label||'', customerName: (c&&c.name)||'', ts: Date.now() }); updateLastMachineUI(); }catch(e){}
      tabs.forEach(x=>x.classList.remove('active'));
      document.querySelector('.tab[data-tab="single"]').classList.add('active');
      showTab('single');
      toast(t("toast_filled_calc"));
    }
    return;
  }
});


// === HOTELS PANEL (A + 2: list by city, search, add/edit/save) ===
const LS_HOTELS = 'hdh-hotels';

function loadHotels(){
  try{ const raw = Store.getItem(LS_HOTELS); return raw ? JSON.parse(raw) : []; }
  catch(e){ toast('Chyba čtení hotelů'); return []; }
}

function saveHotels(list){
  try{ Store.setItem(LS_HOTELS, JSON.stringify(list)); return true; }
  catch(e){ toast('Uložení hotelů selhalo'); return false; }
}

function renderHotels(filter=""){
  const raw=(filter||"").trim();
  const q=raw.toLowerCase();
  const norm = (str)=>String(str||"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");
  const qn = norm(q);
  const list = loadHotels();
  // sort by city then hotel (ignore accents/case)
  list.sort((a,b)=>{
    const ac = String(a?.city||'');
    const bc = String(b?.city||'');
    const cc = ac.localeCompare(bc,'cs',{sensitivity:'base'});
    if(cc!==0) return cc;
    return String(a?.hotel||'').localeCompare(String(b?.hotel||''),'cs',{sensitivity:'base'});
  });

  const root = document.getElementById('h-list');
  if(!root) return;
  root.innerHTML = "";

  const groups = new Map();
  list.forEach(h=>{
    const cityN = norm(h.city);
    const hotelN = norm(h.hotel);
    const phoneS = String(h.phone||"");
    const contactN = norm(h.contact||"");
    const noteN = norm(h.note||"");

    const match = (!q)
      ? true
      : (qn.length===1 && /[a-z]/i.test(qn)
          ? (cityN.startsWith(qn) || hotelN.startsWith(qn))
          : (cityN.includes(qn) || hotelN.includes(qn) || phoneS.includes(q) || contactN.includes(qn) || noteN.includes(qn)));
    if(!match) return;

    const key = String(h.city||'').trim() || '—';
    if(!groups.has(key)) groups.set(key, []);
    groups.get(key).push(h);
  });

  Array.from(groups.keys()).sort((a,b)=>a.localeCompare(b,'cs',{sensitivity:'base'})).forEach(city=>{
    const hCity = document.createElement('div');
    hCity.style.fontWeight='900';
    hCity.style.margin='12px 4px 8px';
    hCity.style.opacity='.85';
    hCity.textContent = city;
    root.appendChild(hCity);

    const items = groups.get(city) || [];
    items.sort((a,b)=>String(a?.hotel||'').localeCompare(String(b?.hotel||''),'cs',{sensitivity:'base'}));
    items.forEach(h=>{
      const box = document.createElement('div');
      box.className = 'card';
      box.style.padding='12px';
      box.style.marginBottom='8px';

      const phoneNorm = normalizePhone(h.phone);
      const phoneHtml = h.phone ? `<a href="tel:${phoneNorm}" style="text-decoration:underline">${h.phone}</a>` : '';

      box.innerHTML = `
        <div style="display:flex;align-items:flex-start;gap:12px">
          <button class="btn iconbtn" data-act="edit-h" data-id="${h.id}" type="button" aria-label="Upravit">✎</button>
          <div style="min-width:0;flex:1">
            <div style="font-weight:900;word-break:break-word">${h.hotel||''}</div>
            ${(h.contact||h.phone) ? `<div style="opacity:.9;font-size:.92rem;margin-top:2px">
              ${h.contact ? `<span>${h.contact}</span>` : ``}
              ${h.phone ? `<span style="margin-left:8px">${phoneHtml}</span>` : ``}
            </div>` : ``}
            ${h.note ? `<div style="opacity:.75;font-size:.9rem;margin-top:2px;word-break:break-word">${h.note}</div>` : ``}
          </div>
        </div>`;
      root.appendChild(box);
    });
  });
}

renderHotels();
const hSearchEl = document.getElementById('h-search');
if(hSearchEl){ hSearchEl.addEventListener('input', (e)=>renderHotels(e.target.value)); }

const hotelsDlg = document.getElementById('hotelsDlg');
const hDlgBody = document.getElementById('h-dlg-body');
const hDlgTitle = document.getElementById('h-dlg-title');
const hDlgSave = document.getElementById('h-dlg-save');
const hDlgDelete = document.getElementById('h-dlg-delete');

let hDlgId = null;

function openHotelDialog(mode, item){
  hDlgId = item?.id || null;
  hDlgTitle.textContent = (mode==='add') ? t('btn_add_hotel') : t('dlg_hotel_title');
  hDlgBody.innerHTML = `
    <label>${t('label_city')}</label>
    <input id="h-city" value="${item?.city||''}" />
    <label>${t('label_hotel')}</label>
    <input id="h-hotel" value="${item?.hotel||''}" />
    <label>${t('label_phone')}</label>
    <input id="h-phone" inputmode="tel" autocomplete="tel" value="${item?.phone||''}" />
    <label>${t('label_contact')}</label>
    <input id="h-contact" value="${item?.contact||''}" />
    <label>${t('label_note')}</label>
    <input id="h-note" value="${item?.note||''}" />
  `;
  attachPhoneFormatter(document.getElementById('h-phone'));

  if(mode==='add') hDlgDelete.classList.add('hidden');
  else hDlgDelete.classList.remove('hidden');

  hotelsDlg.showModal();
}

const hAddBtn = document.getElementById('h-add');
if(hAddBtn){
  hAddBtn.addEventListener('click', ()=>openHotelDialog('add', null));
}

if(hDlgSave){
  hDlgSave.addEventListener('click', (ev)=>{
    ev.preventDefault();
    const city = (document.getElementById('h-city')?.value||'').trim();
    const hotel = (document.getElementById('h-hotel')?.value||'').trim();
    const phone = (document.getElementById('h-phone')?.value||'').trim();
    const contact = (document.getElementById('h-contact')?.value||'').trim();
    const note = (document.getElementById('h-note')?.value||'').trim();
    if(!city || !hotel){ toast(t('err_enter_name')); return; }

    const list = loadHotels();
    if(hDlgId){
      const it = list.find(x=>x.id===hDlgId);
      if(it){ it.city=city; it.hotel=hotel; it.phone=phone; it.contact=contact; it.note=note; }
    }else{
      list.push({ id: uuid(), city, hotel, phone, contact, note });
    }
    if(saveHotels(list)){
      hotelsDlg.close();
      renderHotels(document.getElementById('h-search')?.value||'');
      toast(t('toast_saved'));
    }
  });
}

if(hDlgDelete){
  hDlgDelete.addEventListener('click', (ev)=>{
    ev.preventDefault();
    if(!hDlgId) return;
    if(!confirm('Opravdu smazat?')) return;
    const list = loadHotels().filter(x=>x.id!==hDlgId);
    if(saveHotels(list)){
      hotelsDlg.close();
      renderHotels(document.getElementById('h-search')?.value||'');
      toast(t('toast_deleted'));
    }
  });
}

const hListRoot = document.getElementById('h-list');
if(hListRoot){
  hListRoot.addEventListener('click', (e)=>{
    const btn = e.target.closest('[data-act="edit-h"]');
    if(!btn) return;
    const id = btn.getAttribute('data-id');
    const list = loadHotels();
    const it = list.find(x=>x.id===id);
    if(!it) return;
    openHotelDialog('edit', it);
  });
}


// === FIXED CODES PANEL ===
const LS_FIXED = 'hdh-fixed-codes';

function loadFixed(){ 
  try{ const raw = Store.getItem(LS_FIXED); return raw ? JSON.parse(raw) : []; } 
  catch(e){ toast('Chyba čtení pevných kódů'); return []; }
}
function saveFixed(list){
  try{ Store.setItem(LS_FIXED, JSON.stringify(list)); return true; }
  catch(e){ toast('Uložení pevných kódů selhalo'); return false; }
}

function renderFixed(filter=""){
  const q = (filter||"").trim().toLowerCase();
  const list = loadFixed();

  const rootFixed = document.getElementById('f-list-fixed');
  const rootParam = document.getElementById('f-list-param');
  if(!rootFixed || !rootParam) return;
  rootFixed.innerHTML = "";
  rootParam.innerHTML = "";

  const matchItem = (k)=>{
    if(!q) return true;
    return (k.label||"").toLowerCase().includes(q)
      || (k.code||"").toLowerCase().includes(q)
      || (k.description||"").toLowerCase().includes(q)
      || (k.param||"").toLowerCase().includes(q);
  };

  const isParam = (k)=>{
    const t = String(k.type||"").toLowerCase();
    if(t==="param" || t==="parameter") return true;
    return !!(k.param && String(k.param).trim());
  };

  // stable, readable ordering inside sections
  const fixedList = list.filter(k=>!isParam(k)).sort((a,b)=>String(a.code||a.label||"").localeCompare(String(b.code||b.label||""),'cs',{sensitivity:'base'}));
  const paramList = list.filter(k=>isParam(k)).sort((a,b)=>String(a.param||"").localeCompare(String(b.param||""),'cs',{numeric:true,sensitivity:'base'}));

  const renderOne = (root, k, extraLine="")=>{
    const isP = isParam(k);
    const keyUi = isP ? String(k.param||"") : formatCodeUi(k.code||"");
    const box = document.createElement('div');
    box.className = "card";
    box.style.padding = '12px';
    box.style.marginBottom = '8px';
    box.innerHTML = `
      <div style="display:flex;align-items:center;gap:12px">
        <button class="btn iconbtn" data-act="edit-fixed-btn" data-id="${k.id}" type="button" aria-label="Upravit">✎</button>
        <div style="min-width:0;flex:1">
          <div style="font-weight:900;font-size:1.15rem;line-height:1.1;font-family:ui-monospace,Menlo,Consolas,monospace;letter-spacing:.06em;font-variant-numeric:tabular-nums">${keyUi}</div>
          ${extraLine}
          ${k.description ? `<div style="opacity:.75;font-size:.9rem;word-break:break-word">${k.description}</div>` : ``}
        </div>
      </div>`;
    root.appendChild(box);
  };

  fixedList.forEach(k=>{ if(matchItem(k)) renderOne(rootFixed, k); });
  paramList.forEach(k=>{ if(matchItem(k)) renderOne(rootParam, k); });
}

// inicializace vyhledávání
const fSearchEl = document.getElementById('f-search');
if(fSearchEl){
  fSearchEl.addEventListener('input', (e)=>renderFixed(e.target.value));
}

// mutual exclusive inputs (Code vs Parameter)
(function setupFixedDlgExclusivity(){
  const codeEl = document.getElementById('fk-code');
  const paramEl = document.getElementById('fk-param');
  if(!codeEl || !paramEl) return;

  const sync = ()=>{
    const hasCode = !!(codeEl.value||'').trim();
    const hasParam = !!(paramEl.value||'').trim();
    paramEl.disabled = hasCode;
    codeEl.disabled = hasParam;
  };

  codeEl.addEventListener('input', sync);
  paramEl.addEventListener('input', sync);

  // expose for dialog open
  window.__syncFixedDlg = sync;
  sync();
})();

// přidání nového kódu
const fAddBtn = document.getElementById('f-add');
if(fAddBtn){
  fAddBtn.addEventListener('click', ()=>{
    const dlg = document.getElementById('fDlg');
    document.getElementById('fDlg-title').textContent = "Přidat kód";
    dlg.dataset.id = "";
    document.getElementById('fk-label').value = "";
    document.getElementById('fk-code').value = "";
    document.getElementById('fk-desc').value = "";
    document.getElementById('fk-param').value = "";
    window.__syncFixedDlg && window.__syncFixedDlg();
    // hide extra actions (copy/delete) in add mode
    const copyBtn = document.getElementById('fDlg-copy');
    const delBtn  = document.getElementById('fDlg-delete');
    if(copyBtn) copyBtn.classList.add('hidden');
    if(delBtn)  delBtn.classList.add('hidden');
    dlg.showModal();
    const saveBtn = document.getElementById('fDlg-save');
    saveBtn.onclick = (ev)=>{
      ev.preventDefault();
      const code = document.getElementById('fk-code').value.trim();
      const desc = document.getElementById('fk-desc').value.trim();
      const param = (document.getElementById('fk-param').value||'').trim();
      const hasCode = !!code;
      const hasParam = !!param;
      if(!desc){ toast('Vyplňte popis'); return; }
      if((hasCode && hasParam) || (!hasCode && !hasParam)) { toast('Vyplňte buď kód nebo parametr'); return; }
      const list = loadFixed();
      list.push({ id: uuid(), label: '', code: hasCode ? code : '', param: hasParam ? param : '', description: desc, type: (hasParam ? 'param' : 'fixed') });
      if(saveFixed(list)){
        dlg.close();
        renderFixed(document.getElementById('f-search').value);
        toast('Uloženo');
      }
    };
  });
}

// delegované akce v seznamu pevných kódů
const fListRoot = document.getElementById('panel-fixed');
if(fListRoot){
  fListRoot.addEventListener('click', (e)=>{
    const btn = e.target.closest('[data-act]');
    if(!btn) return;
    const act = btn.getAttribute('data-act');
    const id = btn.getAttribute('data-id');
    const list = loadFixed();
    const item = list.find(x=>x.id===id);
    if(!item) return;

    if(act === 'edit-fixed-btn'){
      const dlg = document.getElementById('fDlg');
      dlg.dataset.id = id;
      document.getElementById('fDlg-title').textContent = "Upravit kód";
      document.getElementById('fk-label').value = item.label||"";
      document.getElementById('fk-code').value = item.code||"";
      document.getElementById('fk-desc').value = item.description||"";
      document.getElementById('fk-param').value = item.param||"";
      window.__syncFixedDlg && window.__syncFixedDlg();

      // show extra actions (copy/delete) in edit mode
      const copyBtn = document.getElementById('fDlg-copy');
      const delBtn  = document.getElementById('fDlg-delete');
      if(copyBtn) copyBtn.classList.remove('hidden');
      if(delBtn)  delBtn.classList.remove('hidden');

      // wire actions (use onclick to avoid double-binding)
      if(copyBtn){
        copyBtn.onclick = (ev)=>{
          ev.preventDefault();
          const code = (document.getElementById('fk-code').value||"").trim();
          const param = (document.getElementById('fk-param').value||"").trim();
          copyText(code || param);
        };
      }
      if(delBtn){
        delBtn.onclick = (ev)=>{
          ev.preventDefault();
          if(!confirm('Opravdu smazat kód?')) return;
          const nl = loadFixed().filter(x=>x.id!==id);
          if(saveFixed(nl)){
            dlg.close();
            renderFixed(document.getElementById('f-search').value);
            toast(t("toast_deleted"));
          }
        };
      }

      const saveBtn = document.getElementById('fDlg-save');
      saveBtn.onclick = (ev)=>{
        ev.preventDefault();
        // re-load to avoid stale reference
        const cur = loadFixed();
        const it = cur.find(x=>x.id===id);
        if(!it) { dlg.close(); renderFixed(document.getElementById('f-search').value); return; }
        const code = (document.getElementById('fk-code').value||'').trim();
        const param = (document.getElementById('fk-param').value||'').trim();
        const desc = (document.getElementById('fk-desc').value||'').trim();
        const hasCode = !!code;
        const hasParam = !!param;
        if(!desc){ toast('Vyplňte popis'); return; }
        if((hasCode && hasParam) || (!hasCode && !hasParam)) { toast('Vyplňte buď kód nebo parametr'); return; }
        it.label = '';
        it.code  = hasCode ? code : '';
        it.description = desc;
        it.param = hasParam ? param : '';
        it.type = (hasParam ? 'param' : 'fixed');
        if(saveFixed(cur)){
          dlg.close();
          renderFixed(document.getElementById('f-search').value);
          toast('Uloženo');
        }
      };

      dlg.showModal();
      return;
    }
  });
}

// při otevření tab "Pevné kódy" znovu překreslit
tabs.forEach(t=>{
  if(t.dataset.tab === 'fixed'){
    t.addEventListener('click', ()=>renderFixed(document.getElementById('f-search')?document.getElementById('f-search').value:""));
  }
});

// Export fixed codes
const fExportBtn = document.getElementById('f-export');
if(fExportBtn){
  fExportBtn.addEventListener('click', ()=>{
    const data = JSON.stringify(loadFixed(), null, 2);
    const blob = new Blob([data], {type:'application/json'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'fixed-codes.json';
    document.body.appendChild(a); a.click(); a.remove();
    URL.revokeObjectURL(url);
  });
}

// Import fixed codes (mode: override/update)
let fixedImportMode = 'override';

(function setupFixedImportUI(){
  const btn = document.getElementById('f-import-btn');
  const fileInput = document.getElementById('f-import-file');
  const dlg = document.getElementById('fixedImportModeDlg');
  if(btn && dlg && fileInput){
    btn.addEventListener('click', (e)=>{
      // Prevent the <label for="..."> from opening the file picker immediately
      e.preventDefault();
      dlg.showModal();
    });

    dlg.addEventListener('click', (e)=>{
      const b = e.target.closest('button[data-mode]');
      if(!b) return;
      fixedImportMode = b.getAttribute('data-mode') || 'override';
      dlg.close();
      // Open file picker after mode selection
      fileInput.value="";
      setTimeout(()=>fileInput.click(), 150);
    });
  }
})();

const fImportInput = document.getElementById('f-import-file');
if(fImportInput){
  fImportInput.addEventListener('change', (e)=>{
    const file = e.target.files && e.target.files[0];
    if(!file) return;

    const norm = (s)=>String(s||'').trim();
    const normKey = (s)=>String(s||'').trim().toLowerCase();

    const reader = new FileReader();
    reader.onload = (ev)=>{
      try{
        const raw = JSON.parse(ev.target.result);
        if(!Array.isArray(raw)) throw new Error('Neplatný formát');

        // Normalize + remove exact duplicates inside incoming
        const seen = new Set();
        const incoming = raw.map(k=>({
          id: k.id || uuid(),
          label: norm(k.label||k.name),
          code: norm(k.code),
          description: norm(k.description||k.desc)
        })).filter(k=>k.label && k.code).filter(k=>{
          const key = (k.label+'|'+k.code).toLowerCase();
          if(seen.has(key)) return false;
          seen.add(key);
          return true;
        });

        if(fixedImportMode === 'override'){
          if(!confirm('Import přepíše existující pevné kódy. Pokračovat?')) return;
          if(saveFixed(incoming)){
            renderFixed(document.getElementById('f-search')?document.getElementById('f-search').value:'');
            toast('Import hotov (Override)');
          }
        }else{
          // UPDATE: merge by label (case-insensitive), add only missing
          const existing = loadFixed();
          const byLabel = new Map(existing.map(k=>[normKey(k.label), k]));

          incoming.forEach(inc=>{
            const key = normKey(inc.label);
            if(!key) return;
            const cur = byLabel.get(key);
            if(!cur){
              existing.push(inc);
              byLabel.set(key, inc);
              return;
            }
            // do not overwrite existing; only fill missing fields
            if(!cur.code && inc.code) cur.code = inc.code;
            if(!cur.description && inc.description) cur.description = inc.description;
          });

          if(saveFixed(existing)){
            renderFixed(document.getElementById('f-search')?document.getElementById('f-search').value:'');
            toast('Import hotov (Update)');
          }
        }
      }catch(err){
        alert('Import selhal: ' + (err && err.message ? err.message : err));
      }finally{
        fImportInput.value = '';
      }
    };
    reader.readAsText(file);
  });
}

// Logout (device)

const logoutDlg=document.getElementById('logoutDlg');
document.getElementById('logoutBtn').addEventListener('click', ()=>{
  const cb = document.getElementById('forgetDev');
  if (cb) cb.checked = true; // default: forget this device
  logoutDlg.showModal();
});
document.getElementById('logoutConfirm').addEventListener('click', (e)=>{
  e.preventDefault();
  const forget = document.getElementById('forgetDev').checked;
  if (forget) { try{ Store.removeItem(SECURITY.trustedKey); }catch(e){} }
  logoutDlg.close();
  document.getElementById('pass').value = '';
  uiShowLock();
  toast('Odhlášeno');
});

// SW registration
if('serviceWorker' in navigator){ window.addEventListener('load', ()=> navigator.serviceWorker.register('./service-worker.js')); }

// Boot (až po načtení DOM kvůli iOS WebView)
window.addEventListener('DOMContentLoaded', async ()=>{
  try{
    if(!(await tryAutoUnlock())) uiShowLock();
    else { uiShowApp(); computeAll(); }
  }catch(e){
    console.error(e);
    uiShowLock();
  }
});
document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("addMachine");
    if (btn) btn.addEventListener("click", openAddMachinePopup);
});


// === Popup AddMachine full logic ===
function openAddMachinePopup() {
    const popup = document.getElementById("popupAddMachine");
    const numberInput = document.getElementById("machine");
    document.getElementById("popupMachineNumber").innerText = numberInput?.value || "";
    // reset new customer fields + format phone with spaces automatically
    const n = document.getElementById("popupNewCustName");
    if(n) n.value = "";
    const cn = document.getElementById("popupNewCustContact");
    if(cn) cn.value = "";
    const p = document.getElementById("popupNewCustPhone");
    if(p) p.value = "";
    const s = document.getElementById("popupCustomerSearch");
    if(s) s.value = "";
    attachPhoneFormatter(p);
    renderPopupCustomerList();
    popup.style.display = "flex";
}
function closeAddMachinePopup() {
    document.getElementById("popupAddMachine").style.display = "none";
}
document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("addMachine");
    if (btn) btn.addEventListener("click", openAddMachinePopup);
    document.getElementById("popupClose")?.addEventListener("click", closeAddMachinePopup);
    document.getElementById("popupCustomerSearch")?.addEventListener("input", renderPopupCustomerList);
});

function loadCustomersLS() {
    try { return loadCustomers(); }
    catch(e){ return []; }
}
function saveCustomersLS(list){
    // uloží přes stávající Store/LS_KEYS.customers + překreslí panel Zákazníci
    if (typeof saveCustomers === "function") {
        if (saveCustomers(list)) {
            const q = document.getElementById('c-search')?.value || "";
            if (typeof renderCustomers === "function") {
                renderCustomers(q);
            }
        }
    } else {
        // nouzově fallback na localStorage, kdyby saveCustomers nebyla k dispozici
        localStorage.setItem("customers", JSON.stringify(list));
    }
}

function renderPopupCustomerList(){
    const list = document.getElementById("popupCustomerList");
    if(!list) return;
    list.innerHTML = "";

    const q = (document.getElementById('popupCustomerSearch')?.value || "")
      .trim()
      .toLowerCase();

    let customers = loadCustomersLS();
    customers = customers
      .slice()
      .sort((a,b)=> String(a.name||"").localeCompare(String(b.name||""), 'cs'))
      .filter(c => !q || String(c.name||"").toLowerCase().includes(q));

    if(customers.length===0){
        const empty=document.createElement('div');
        empty.style.opacity='0.7';
        empty.style.fontSize='14px';
        empty.style.padding='8px 2px';
        empty.innerText = q ? 'Nenalezen žádný zákazník.' : 'Nejsou uložen žádní zákazníci.';
        list.appendChild(empty);
        return;
    }

    customers.forEach(c=>{
        const row=document.createElement("button");
        row.className="btn modal__listItem";
        row.innerText = c.name + " ("+(c.machines?.length||0)+" strojů)";
        row.onclick=()=>addMachineToExisting(c.id);
        list.appendChild(row);
    });
}

function addMachineToExisting(custId){
    let customers = loadCustomersLS();
    let c = customers.find(x=>x.id===custId);
    if(!c) return;
    let N = document.getElementById("machine")?.value || "";
    c.machines = c.machines || [];
    c.machines.push({
        id:"m"+Date.now(),
        label:"Stroj "+N,
        number: parseInt(N||'0',10),
        note:""
    });
    saveCustomersLS(customers);
    alert("Stroj přidán k zákazníkovi: " + c.name);
    closeAddMachinePopup();
}

document.addEventListener("DOMContentLoaded", ()=>{
    document.getElementById("popupCreateCustomer")?.addEventListener("click", ()=>{
        let name=document.getElementById("popupNewCustName")?.value.trim();
        if(!name){ alert("Zadej jméno zákazníka"); return; }
        let contactName=(document.getElementById("popupNewCustContact")?.value||"").trim();
        let phone=(document.getElementById("popupNewCustPhone")?.value||"").trim();
        let N=document.getElementById("machine")?.value||"";

        let customers=loadCustomersLS();
        let newCust={
            id:"c"+Date.now(),
            name,
            contactName,
            contactPhone: phone,
            address: "",
            note: "",
            machines:[
                {
                    id:"m"+Date.now(),
                    label:"Stroj "+N,
                    number: parseInt(N||'0',10),
                    note:""
                }
            ]
        };
        customers.push(newCust);
        saveCustomersLS(customers);
        alert("Zákazník vytvořen a stroj přidán.");
        closeAddMachinePopup();
    });
});




