if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let o={};const c=e=>s(e,t),l={module:{uri:t},exports:o,require:c};i[t]=Promise.all(n.map((e=>l[e]||c(e)))).then((e=>(r(...e),o)))}}define(["./workbox-9bc8a7af"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-59ac8bab.js",revision:null},{url:"assets/index-745f1c68.css",revision:null},{url:"index.html",revision:"3e3268c5be1489095c28b6304cbe2656"},{url:"registerSW.js",revision:"c0872a82a7ebb63a601f1b00f54f7a18"},{url:"favicon.ico",revision:"df7700616b500967e2c0f2c2a725d2d8"},{url:"manifest.webmanifest",revision:"a735822ec0a48a63af0db2c7c03023d1"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
