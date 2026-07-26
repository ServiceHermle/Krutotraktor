const CACHE_NAME="krut-secure-lockdown-v7-c49be0cc497c011c";
const ASSETS=["./index.html", "./secure-app-c49be0cc497c011c.bin", "./manifest.json", "./icon-192.png", "./icon-512.png", "./machine-icon.svg", "./whats-new.json", "./help.json", "./service-worker.js"];
self.addEventListener('install',event=>{self.skipWaiting();event.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(ASSETS)));});
self.addEventListener('activate',event=>{event.waitUntil((async()=>{for(const k of await caches.keys())if(k!==CACHE_NAME)await caches.delete(k);await self.clients.claim();})());});
self.addEventListener('fetch',event=>{
 if(event.request.method!=='GET')return;
 const url=new URL(event.request.url);if(url.origin!==self.location.origin)return;
 const critical=event.request.mode==='navigate'||url.pathname.endsWith('/index.html')||url.pathname.endsWith('/secure-app-c49be0cc497c011c.bin');
 if(critical){event.respondWith((async()=>{try{const r=await fetch(event.request,{cache:'no-store'});const c=await caches.open(CACHE_NAME);c.put(event.request,r.clone());return r;}catch(e){const c=await caches.open(CACHE_NAME);return (await c.match(event.request,{ignoreSearch:true}))||(await c.match('./index.html'))||Response.error();}})());return;}
 event.respondWith((async()=>{const c=await caches.open(CACHE_NAME);const hit=await c.match(event.request,{ignoreSearch:true});if(hit)return hit;try{const r=await fetch(event.request);c.put(event.request,r.clone());return r;}catch(e){return Response.error();}})());
});