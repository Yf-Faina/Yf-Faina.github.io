import{_ as t}from"./app-CfHiactp.js";var a={provider:"Waline",dark:'html[data-theme="dark"]',serverURL:"https://waline111.vercel.app/"};const n=async()=>{try{const{pageviewCount:e}=await t(()=>import("./app-CfHiactp.js").then(r=>r.P),__vite__mapDeps([]));return e({serverURL:a.serverURL})}catch{console.error("@waline/client is not installed!")}};export{n as updatePageview};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
