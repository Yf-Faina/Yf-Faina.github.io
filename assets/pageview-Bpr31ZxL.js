import{_ as r}from"./app-BofQRgQ0.js";var a={provider:"Waline",dark:'html[data-theme="dark"]',serverURL:"https://yf-faina-github-io.vercel.app/"};const o=async()=>{try{const{pageviewCount:e}=await r(()=>import("./app-BofQRgQ0.js").then(t=>t.P),__vite__mapDeps([]));return e({serverURL:a.serverURL})}catch{console.error("@waline/client is not installed!")}};export{o as updatePageview};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
