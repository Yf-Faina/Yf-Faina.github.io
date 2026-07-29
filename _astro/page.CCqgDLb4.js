const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/mermaid.core.BE-TwQaB.js","_astro/src.OgxTg4hg.js","_astro/chunk-Y2CYZVJY.DsF7k-Jl.js","_astro/preload-helper.CxFQXtKk.js","_astro/chunk-WYO6CB5R.BG7cUQ-p.js","_astro/chunk-ICXQ74PX.C_4mzxwC.js","_astro/dist.Bk8Utk0H.js","_astro/chunk-VAUOI2AC.BcCcQhTI.js","_astro/chunk-HOUHSVGY.DIzQgRop.js","_astro/chunk-Q4XR5HBZ.BJZDlJrt.js","_astro/chunk-7BUUIJ7U.CAhmNhj7.js","_astro/chunk-OGEWGWER.CcF16sY8.js","_astro/chunk-C7G6YPKG.CWwP4ykV.js","_astro/chunk-ZGVPDNZ5.D-qGJ1DK.js","_astro/rough.esm.CSKSodPl.js","_astro/chunk-52WLFC77.Bq7GEopq.js","_astro/line.DR6PCBve.js","_astro/path.BWPyau1x.js","_astro/array.BifhSqXX.js","_astro/chunk-FWX5IMBZ.Ck1TSXl7.js","_astro/chunk-ZIRB5QZD.Dh20_f-h.js","_astro/Swup.CJOS8qBX.js","_astro/Swup.modern.uW9-znq_.js","_astro/SwupA11yPlugin.D3caOrxh.js","_astro/index.modern.BCJ_Wl7K.js","_astro/SwupPreloadPlugin.Dvl2zbGp.js","_astro/SwupScrollPlugin.LMPN9caO.js","_astro/SwupHeadPlugin.2_fFR9JH.js","_astro/SwupScriptsPlugin.CpCXlV8Q.js","_astro/SwupFadeTheme.BzXlC2si.js"])))=>i.map(i=>d[i]);
import{t as e}from"./preload-helper.CxFQXtKk.js";function t(e){return JSON.parse(e,n)}function n(e,t){if(Array.isArray(t)&&t.length===2&&typeof t[1]==`string`){let e=t[0];if(t=t[1],e===`:regex:`){let e=t.match(/\/(.*?)\/([a-z]*)?$/i)||[];return new RegExp(e[1],e[2]||``)}if(e===`:function:`)return Function(`return (${t}).apply(this, arguments);`)}return t}function r(e,{timeoutFallback:t=1e3}={}){`requestIdleCallback`in window?window.requestIdleCallback(()=>e()):setTimeout(()=>e(),t)}function i(e){document.readyState===`complete`?setTimeout(()=>e(),0):window.addEventListener(`load`,()=>e())}function a(e,{delayAfterLoad:t=0}={}){i(()=>{t>0?setTimeout(()=>r(e),t):r(e)})}var o=(...e)=>console.log(`[astro-mermaid]`,...e),s=(...e)=>console.error(`[astro-mermaid]`,...e),c=()=>document.querySelectorAll(`pre.mermaid`).length>0,l=null;async function u(){return l||(o(`Loading mermaid.js...`),l=e(async()=>{let{default:e}=await import(`./mermaid.core.BE-TwQaB.js`);return{default:e}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20])).then(async({default:e})=>{let t=[];if(t&&t.length>0){o(`Registering`,t.length,`icon packs`);let n=t.map(e=>e.icons?{name:e.name,icons:e.icons}:{name:e.name,loader:()=>fetch(e.url).then(e=>e.json())});await e.registerIconPacks(n)}return e}).catch(e=>{throw s(`Failed to load mermaid:`,e),l=null,e}),l)}var d={startOnLoad:!1,theme:`default`},f={light:`default`,dark:`dark`};async function p(){o(`Initializing mermaid diagrams...`);let e=document.querySelectorAll(`pre.mermaid`);if(o(`Found`,e.length,`mermaid diagrams`),e.length===0)return;let t=await u(),n=d.theme;{let e=document.documentElement.getAttribute(`data-theme`),t=document.body.getAttribute(`data-theme`);n=f[e||t]||d.theme,o(`Using theme:`,n,`from`,e?`html`:`body`)}t.initialize({...d,theme:n,gitGraph:{mainBranchName:`main`,showCommitLabel:!0,showBranches:!0,rotateCommitLabel:!0}});for(let n of e){if(n.hasAttribute(`data-processed`))continue;n.hasAttribute(`data-diagram`)||n.setAttribute(`data-diagram`,n.textContent||``);let e=n.getAttribute(`data-diagram`)||``,r=`mermaid-`+Math.random().toString(36).slice(2,11);o(`Rendering diagram:`,r);try{let i=document.getElementById(r);i&&i.remove();let{svg:a}=await t.render(r,e);n.innerHTML=a,n.setAttribute(`data-processed`,`true`),o(`Successfully rendered diagram:`,r)}catch(e){s(`Mermaid rendering error for diagram:`,r,e);let t=document.createElement(`div`);t.style.cssText=`color: red; padding: 1rem; border: 1px solid red; border-radius: 0.5rem;`;let i=document.createElement(`strong`);i.textContent=`Error rendering diagram:`;let a=document.createElement(`span`);a.textContent=` `+(e.message||`Unknown error`),t.appendChild(i),t.appendChild(a),n.textContent=``,n.appendChild(t),n.setAttribute(`data-processed`,`true`)}}}c()?(o(`Mermaid diagrams detected on initial load`),p()):o(`No mermaid diagrams found on initial load`);{let e=new MutationObserver(e=>{for(let t of e)t.type===`attributes`&&t.attributeName===`data-theme`&&(document.querySelectorAll(`pre.mermaid[data-processed]`).forEach(e=>{e.removeAttribute(`data-processed`)}),p())});e.observe(document.documentElement,{attributes:!0,attributeFilter:[`data-theme`]}),e.observe(document.body,{attributes:!0,attributeFilter:[`data-theme`]})}document.addEventListener(`astro:after-swap`,()=>{o(`View transition detected`),c()&&p()});var m=document.createElement(`style`);m.textContent=`
            /* Prevent layout shifts by setting minimum height */
            pre.mermaid {
              display: flex;
              justify-content: center;
              align-items: center;
              margin: 2rem 0;
              padding: 1rem;
              background-color: transparent;
              border: none;
              overflow: auto;
              min-height: 200px; /* Prevent layout shift */
              position: relative;
            }
            
            /* Loading state with skeleton loader */
            pre.mermaid:not([data-processed]) {
              background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
              background-size: 200% 100%;
              animation: shimmer 1.5s infinite;
            }
            
            /* Dark mode skeleton loader */
            [data-theme="dark"] pre.mermaid:not([data-processed]) {
              background: linear-gradient(90deg, #2a2a2a 25%, #3a3a3a 50%, #2a2a2a 75%);
              background-size: 200% 100%;
            }
            
            @keyframes shimmer {
              0% {
                background-position: -200% 0;
              }
              100% {
                background-position: 200% 0;
              }
            }
            
            /* Show processed diagrams with smooth transition */
            pre.mermaid[data-processed] {
              animation: none;
              background: transparent;
              min-height: auto; /* Allow natural height after render */
            }
            
            /* Ensure responsive sizing for mermaid SVGs */
            pre.mermaid svg {
              max-width: 100%;
              height: auto;
            }
            
            /* Optional: Add subtle background for better visibility */
            @media (prefers-color-scheme: dark) {
              pre.mermaid[data-processed] {
                background-color: rgba(255, 255, 255, 0.02);
                border-radius: 0.5rem;
              }
            }
            
            @media (prefers-color-scheme: light) {
              pre.mermaid[data-processed] {
                background-color: rgba(0, 0, 0, 0.02);
                border-radius: 0.5rem;
              }
            }
            
            /* Respect user's color scheme preference */
            [data-theme="dark"] pre.mermaid[data-processed] {
              background-color: rgba(255, 255, 255, 0.02);
              border-radius: 0.5rem;
            }
            
            [data-theme="light"] pre.mermaid[data-processed] {
              background-color: rgba(0, 0, 0, 0.02);
              border-radius: 0.5rem;
            }
          `,document.head.appendChild(m);async function h(){let[n,r,i,a,o,s,c]=await Promise.all([e(()=>import(`./Swup.CJOS8qBX.js`).then(e=>e.default),__vite__mapDeps([21,22])),e(()=>import(`./SwupA11yPlugin.D3caOrxh.js`).then(e=>e.default),__vite__mapDeps([23,22,24])),e(()=>import(`./SwupPreloadPlugin.Dvl2zbGp.js`).then(e=>e.default),__vite__mapDeps([25,22,24])),e(()=>import(`./SwupScrollPlugin.LMPN9caO.js`).then(e=>e.default),__vite__mapDeps([26,22,24])),e(()=>import(`./SwupHeadPlugin.2_fFR9JH.js`).then(e=>e.default),__vite__mapDeps([27,24])),e(()=>import(`./SwupScriptsPlugin.CpCXlV8Q.js`).then(e=>e.default),__vite__mapDeps([28,24])),e(()=>import(`./SwupFadeTheme.BzXlC2si.js`).then(e=>e.default),__vite__mapDeps([29,24]))]),l=new n({ignoreVisit:(e,{el:t,event:n}={})=>t?.closest(`[data-no-swup]`),animationSelector:`[class*="transition-swup-"]`,containers:[`main`],cache:!0,native:!1,plugins:[new r(t(`{}`)),new i(t(`{"preloadHoveredLinks":true,"preloadVisibleLinks":false}`)),new a(t(`{}`)),new o(t(`{"awaitAssets":true}`)),new s(t(`{}`)),new c(t(`{"mainElement":"main"}`))]}),u=e=>document.dispatchEvent(new Event(e));l.hooks.before(`content:replace`,()=>u(`astro:before-swap`)),l.hooks.on(`content:replace`,()=>u(`astro:after-swap`)),l.hooks.on(`page:view`,()=>u(`astro:page-load`)),window.swup=l}a(h);