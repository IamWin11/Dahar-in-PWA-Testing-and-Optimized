if(!self.define){let e,i={};const a=(a,d)=>(a=new URL(a+".js",d).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let c={};const s=e=>a(e,r),f={module:{uri:r},exports:c,require:s};i[r]=Promise.all(d.map((e=>f[e]||s(e)))).then((e=>(n(...e),c)))}}define(["./workbox-3ca83693"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"0c6d5c02c271d349c05f.jpg",revision:null},{url:"109.bundle.js",revision:"d8c0845fff3322add1acab21eabeac5f"},{url:"465.bundle.js",revision:"4ccf048187b3bf29e3569643a23c8dd7"},{url:"608.bundle.js",revision:"c8ee22ce862687222c8aaa121fa1bff3"},{url:"7f58d24a7a53f5a1d09d.jpg",revision:null},{url:"app.webmanifest",revision:"1cb0c5fed7d6bec6195ce70509925bbc"},{url:"app~7bd12dde.bundle.js",revision:"0c004a5889b2101a5f45418355f4e273"},{url:"app~7bd12dde.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~ca0940c6.bundle.js",revision:"0db32be9e7a8a0eccad6cbebf44800b0"},{url:"app~ca0940c6.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~d1658f4b.bundle.js",revision:"d2c3ff3f99cfe9cc85905de46db80e1f"},{url:"app~e4317507.bundle.js",revision:"4907290d4df6bb2a72506493d8aac3dd"},{url:"app~e4317507.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"b69e39f50fa9e7dc0a88.jpg",revision:null},{url:"data/DATA.json",revision:"0760fae8cf2d2b172678847987d1d95c"},{url:"favicon.png",revision:"e5dcaff0e126bf3875a21eb19c9b9917"},{url:"icons/icon128.png",revision:"de21b47e0c08d3b61212b0452cf9d226"},{url:"icons/icon144.png",revision:"17d1bdef5b52f6d2df03281b8b5016b8"},{url:"icons/icon152.png",revision:"f6c4b375da733d1a551fe0a9eb6e4209"},{url:"icons/icon192.png",revision:"0f15a8a150c21ef44da1efd84d0cef70"},{url:"icons/icon384.png",revision:"a30aabc82e6f6466421e8ab2eb1ae4bb"},{url:"icons/icon512.png",revision:"4ed009d5500f8a4676c2e771bdaa4bc8"},{url:"icons/icon72.png",revision:"d18f935d72dae081aa31c9480a8622f3"},{url:"icons/icon96.png",revision:"532a166b3feb6437ad81e76dc9e83c5b"},{url:"images/heros/about-image.jpg",revision:"7dfe2df41c13febe85efda3cdb575e5e"},{url:"images/heros/hero-image_1.jpg",revision:"a2f444d9e2e43a5d0373b1a0d8cb2236"},{url:"images/heros/hero-large.jpg",revision:"3d44f22d53a2b5c0e172ecdec4a51f9b"},{url:"images/heros/hero-medium.jpg",revision:"b52141224ee2d749adc807589e951006"},{url:"images/heros/hero-small.jpg",revision:"d120e92ba4f1f2e026ab82597f2fd498"},{url:"index.html",revision:"c713a186096d2d4cb31360502c2f6b33"}],{}),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev/")),new e.StaleWhileRevalidate({cacheName:"Daharin-restaurant",plugins:[]}),"GET"),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev/images/medium/")),new e.StaleWhileRevalidate({cacheName:"Daharin-restaurant-image-api",plugins:[]}),"GET")}));
//# sourceMappingURL=sw.bundle.js.map