import{c as R,u as T,b as B,r as j,j as e,X as V,L as P,a as Q,R as Z}from"./index-3oJ4dlfH.js";import{d as M,e as ee,g as J,H as se,S as te,F as ne,f as re,h as H,i as Y,j as G}from"./Footer-BbXXybJy.js";import{A as ie,b as n}from"./CodeExample-C9Z0t2xd.js";import{E as ae}from"./external-link-kuX6LjXr.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oe=R("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=R("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const le=R("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const de=R("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ce=R("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K=R("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const he=R("ListTree",[["path",{d:"M21 12h-8",key:"1bmf0i"}],["path",{d:"M21 6H8",key:"1pqkrb"}],["path",{d:"M21 18h-8",key:"1tm79t"}],["path",{d:"M3 6v4c0 1.1.9 2 2 2h3",key:"1ywdgy"}],["path",{d:"M3 10v6c0 1.1.9 2 2 2h3",key:"2wc746"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ue=R("PanelLeft",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xe=R("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pe=R("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),ge=(o,a)=>a?[o.title,o.description,...o.keywords??[]].join(" ").toLowerCase().includes(a):!0;function $({onNavigate:o}){const{darkMode:a}=T(),{pathname:c}=B(),[l,p]=j.useState(""),b=j.useRef(null),_=l.trim().toLowerCase(),A=j.useMemo(()=>_?M.map(h=>({...h,chapters:h.chapters.filter(f=>ge(f,_))})).filter(h=>h.chapters.length>0):M,[_]),[w,v]=j.useState({}),k=h=>_?!0:h.id in w?!w[h.id]:!0;j.useEffect(()=>{var h;(h=b.current)==null||h.scrollIntoView({block:"nearest"})},[c]);const S=a?"bg-zinc-900 border-zinc-800 text-zinc-200 placeholder-zinc-600 focus:border-zinc-600":"bg-white border-zinc-200 text-zinc-800 placeholder-zinc-400 focus:border-zinc-400";return e.jsxs("nav",{"aria-label":"Documentation",className:"flex h-full flex-col",children:[e.jsxs("div",{className:"relative mb-4 shrink-0",children:[e.jsx(ee,{className:`pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 ${a?"text-zinc-600":"text-zinc-400"}`}),e.jsx("input",{type:"search",value:l,onChange:h=>p(h.target.value),placeholder:"Filter chapters","aria-label":"Filter chapters",className:`w-full rounded-lg border py-2 pl-9 pr-8 text-sm outline-none transition ${S}`}),l&&e.jsx("button",{type:"button",onClick:()=>p(""),"aria-label":"Clear filter",className:`absolute right-2 top-1/2 -translate-y-1/2 rounded p-1 ${a?"text-zinc-500 hover:text-white":"text-zinc-400 hover:text-zinc-900"}`,children:e.jsx(V,{className:"h-3.5 w-3.5"})})]}),e.jsxs("div",{className:"docs-scroll min-h-0 flex-1 overflow-y-auto pb-10 pr-1",children:[A.length===0&&e.jsxs("p",{className:"px-2 py-6 text-sm text-zinc-500",children:["No chapter matches “",l,"”."]}),A.map(h=>{const f=k(h),C=h.icon;return e.jsxs("div",{className:"mb-1",children:[e.jsxs("button",{type:"button",onClick:()=>v(u=>({...u,[h.id]:!(h.id in u&&u[h.id])})),"aria-expanded":f,className:`flex w-full items-center gap-2 rounded-lg px-2 py-2 text-left transition ${a?"hover:bg-white/5":"hover:bg-zinc-100"}`,children:[e.jsx("span",{className:`rounded-md p-1 ${a?"bg-zinc-800 text-zinc-300":"bg-zinc-200 text-zinc-700"}`,children:e.jsx(C,{className:"h-3 w-3"})}),e.jsx("span",{className:`flex-1 text-[11px] font-semibold uppercase tracking-wider ${a?"text-zinc-400":"text-zinc-500"}`,children:h.title}),e.jsx(z,{className:`h-3.5 w-3.5 transition-transform ${f?"rotate-90":""} ${a?"text-zinc-600":"text-zinc-400"}`})]}),f&&e.jsx("ul",{className:`ml-[15px] space-y-0.5 border-l pl-3 ${a?"border-zinc-800":"border-zinc-200"}`,children:h.chapters.map(u=>{const y=c===u.path;return e.jsx("li",{children:e.jsxs(P,{ref:y?b:void 0,to:u.path,onClick:o,"aria-current":y?"page":void 0,className:`relative flex items-center gap-2 rounded-md px-2.5 py-1.5 text-[13px] leading-5 transition ${y?a?"bg-white/10 font-medium text-white":"bg-zinc-900/5 font-medium text-zinc-900":a?"text-zinc-400 hover:bg-white/5 hover:text-zinc-100":"text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900"}`,children:[y&&e.jsx("span",{"aria-hidden":!0,className:`absolute -left-[13px] top-1/2 h-4 w-0.5 -translate-y-1/2 rounded-full ${a?"bg-zinc-100":"bg-zinc-900"}`}),e.jsx("span",{className:"flex-1 truncate",children:u.title}),(u.quickStart||u.isNew)&&e.jsx("span",{className:`rounded-full border px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wide ${a?"border-zinc-700 text-zinc-400":"border-zinc-300 text-zinc-500"}`,children:u.quickStart?"Start":"New"})]})},u.id)})})]},h.id)})]})]})}function W({contentKey:o,className:a="",onNavigate:c}){const{darkMode:l}=T(),[p,b]=j.useState([]),[_,A]=j.useState("");return j.useEffect(()=>{const v=requestAnimationFrame(()=>{const k=Array.from(document.querySelectorAll(".docs-prose h2, .docs-prose h3")),S=new Set;b(k.map((h,f)=>{var y,E,U;const C=((E=(y=h.querySelector("span"))==null?void 0:y.textContent)==null?void 0:E.trim())||((U=h.textContent)==null?void 0:U.trim())||"";let u=h.id;if(!u){const L=C.toLowerCase().replace(/[^\w\s-]/g,"").trim().replace(/\s+/g,"-")||`section-${f}`;u=L;let F=2;for(;S.has(u);)u=`${L}-${F}`,F+=1;h.id=u,h.classList.add("scroll-mt-28")}return S.add(u),{id:u,text:C,level:h.tagName==="H3"?3:2}}))});return()=>cancelAnimationFrame(v)},[o]),j.useEffect(()=>{if(p.length===0)return;const w=p.map(k=>document.getElementById(k.id)).filter(k=>k!==null);if(w.length===0)return;const v=new IntersectionObserver(k=>{const S=k.filter(f=>f.isIntersecting).sort((f,C)=>f.boundingClientRect.top-C.boundingClientRect.top);if(S.length>0){A(S[0].target.id);return}const h=w.filter(f=>f.getBoundingClientRect().top<120);h.length>0&&A(h[h.length-1].id)},{rootMargin:"-96px 0px -70% 0px",threshold:0});return w.forEach(k=>v.observe(k)),()=>v.disconnect()},[p]),p.length===0?null:e.jsxs("nav",{"aria-label":"On this page",className:a,children:[e.jsx("p",{className:"mb-3 text-[11px] font-semibold uppercase tracking-wider text-zinc-500",children:"On this page"}),e.jsx("ul",{className:`space-y-0.5 border-l ${l?"border-zinc-800":"border-zinc-200"}`,children:p.map(w=>{const v=w.id===_;return e.jsx("li",{children:e.jsx("a",{href:`#${w.id}`,onClick:c,"aria-current":v?"location":void 0,className:`-ml-px block border-l py-1.5 text-[13px] leading-5 transition ${w.level===3?"pl-6":"pl-3"} ${v?l?"border-zinc-100 font-medium text-white":"border-zinc-900 font-medium text-zinc-900":l?"border-transparent text-zinc-500 hover:border-zinc-600 hover:text-zinc-300":"border-transparent text-zinc-500 hover:border-zinc-300 hover:text-zinc-800"}`,children:w.text})},w.id)})})]})}function je({previous:o,next:a}){const{darkMode:c}=T();if(!o&&!a)return null;const l=c?"border-zinc-800 bg-zinc-900/40 hover:border-zinc-700 hover:bg-zinc-900":"border-zinc-200 bg-white hover:border-zinc-300 hover:bg-zinc-50",p="text-zinc-500",b=c?"text-white":"text-zinc-900";return e.jsxs("nav",{"aria-label":"Chapter navigation",className:`mt-16 grid gap-4 border-t pt-8 sm:grid-cols-2 ${c?"border-zinc-800":"border-zinc-200"}`,children:[o?e.jsxs(P,{to:o.path,className:`group rounded-xl border p-4 transition ${l}`,children:[e.jsxs("span",{className:`flex items-center gap-1.5 text-xs font-medium ${p}`,children:[e.jsx(oe,{className:"h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5"}),"Previous"]}),e.jsx("span",{className:`mt-1.5 block font-semibold ${b}`,children:o.title})]}):e.jsx("span",{}),a&&e.jsxs(P,{to:a.path,className:`group rounded-xl border p-4 text-right transition sm:col-start-2 ${l}`,children:[e.jsxs("span",{className:`flex items-center justify-end gap-1.5 text-xs font-medium ${p}`,children:["Next",e.jsx(ie,{className:"h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"})]}),e.jsx("span",{className:`mt-1.5 block font-semibold ${b}`,children:a.title})]})]})}const I={luxid:"0.1.3",rust:"1.94"},me=o=>`https://github.com/luxid-dev/web/edit/main/src/docs/content/${o.content}.tsx`;function we(){const{darkMode:o}=T(),[a,c]=j.useState(0);return j.useEffect(()=>{const l=()=>{const p=document.body.scrollHeight-window.innerHeight;c(p>0?Math.min(1,window.scrollY/p):0)};return l(),window.addEventListener("scroll",l,{passive:!0}),window.addEventListener("resize",l),()=>{window.removeEventListener("scroll",l),window.removeEventListener("resize",l)}},[]),e.jsx("div",{"aria-hidden":!0,className:`fixed left-0 right-0 top-14 z-40 h-0.5 ${o?"bg-zinc-900":"bg-zinc-100"}`,children:e.jsx("div",{className:`h-full transition-[width] duration-150 ${o?"bg-zinc-100":"bg-zinc-900"}`,style:{width:`${a*100}%`}})})}function fe({children:o,currentDoc:a,currentSection:c}){const{darkMode:l}=T(),{searchOpen:p,setSearchOpen:b}=Q(),[_,A]=j.useState(!1),[w,v]=j.useState(!1),k=j.useRef(null),{previous:S,next:h}=J(a);j.useEffect(()=>{if(window.location.hash){const y=document.getElementById(window.location.hash.slice(1));if(y){y.scrollIntoView({behavior:"auto",block:"start"});return}}window.scrollTo({top:0,behavior:"auto"})},[a.id]),j.useEffect(()=>{A(!1),v(!1)},[a.id]),j.useEffect(()=>{const y=E=>{E.key==="Escape"&&(A(!1),v(!1))};return window.addEventListener("keydown",y),()=>window.removeEventListener("keydown",y)},[]),j.useEffect(()=>(document.body.style.overflow=_?"hidden":"",()=>{document.body.style.overflow=""}),[_]);const f=l?"bg-black text-zinc-100":"bg-white text-zinc-900",C="text-zinc-500",u=l?"border-zinc-800":"border-zinc-200";return e.jsxs("div",{className:`min-h-screen pt-14 ${f}`,children:[e.jsx(se,{onSearchClick:()=>b(!0)}),e.jsx(te,{isOpen:p,onClose:()=>b(!1)}),e.jsx(we,{}),e.jsxs("div",{className:`sticky top-14 z-30 flex items-center gap-2 border-b px-4 py-2.5 backdrop-blur-xl lg:hidden ${u} ${l?"bg-black/80":"bg-white/85"}`,children:[e.jsxs("button",{type:"button",onClick:()=>A(!0),className:`flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-sm ${l?"text-zinc-300 hover:bg-white/10":"text-zinc-700 hover:bg-zinc-100"}`,children:[e.jsx(ue,{className:"h-4 w-4"}),"Chapters"]}),e.jsx(z,{className:`h-3.5 w-3.5 ${C}`}),e.jsx("span",{className:"min-w-0 flex-1 truncate text-sm font-medium",children:a.title}),e.jsx("button",{type:"button",onClick:()=>v(y=>!y),"aria-expanded":w,className:`rounded-lg p-1.5 ${l?"text-zinc-300 hover:bg-white/10":"text-zinc-700 hover:bg-zinc-100"}`,"aria-label":"On this page",children:e.jsx(he,{className:"h-4 w-4"})})]}),w&&e.jsx("div",{className:`border-b px-4 py-4 lg:hidden ${u} ${l?"bg-zinc-950":"bg-zinc-50"}`,children:e.jsx(W,{contentKey:a.id,onNavigate:()=>v(!1)})}),_&&e.jsxs("div",{className:"fixed inset-0 z-50 lg:hidden",children:[e.jsx("div",{className:`absolute inset-0 ${l?"bg-black/70":"bg-zinc-900/30"} backdrop-blur-sm`,onClick:()=>A(!1)}),e.jsxs("div",{className:`absolute left-0 top-0 flex h-full w-[19rem] max-w-[85vw] flex-col border-r p-4 ${u} ${l?"bg-zinc-950":"bg-white"}`,children:[e.jsxs("div",{className:"mb-4 flex shrink-0 items-center justify-between",children:[e.jsx("span",{className:"text-sm font-semibold",children:"Documentation"}),e.jsx("button",{type:"button",onClick:()=>A(!1),"aria-label":"Close chapters",className:`rounded-lg p-1.5 ${l?"text-zinc-400 hover:bg-white/10":"text-zinc-600 hover:bg-zinc-100"}`,children:e.jsx(V,{className:"h-4 w-4"})})]}),e.jsx($,{onNavigate:()=>A(!1)})]})]}),e.jsx("div",{className:"mx-auto w-full max-w-[90rem] px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"lg:grid lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-10 xl:grid-cols-[15rem_minmax(0,1fr)_13rem] xl:gap-12",children:[e.jsx("aside",{className:"hidden lg:sticky lg:top-14 lg:block lg:h-[calc(100vh-3.5rem)] lg:py-8",children:e.jsx($,{})}),e.jsxs("main",{ref:k,className:"min-w-0 py-8 lg:py-12",children:[e.jsxs("nav",{"aria-label":"Breadcrumb",className:`mb-4 flex flex-wrap items-center gap-1.5 text-sm ${C}`,children:[e.jsx(P,{to:"/docs",className:`transition ${l?"hover:text-zinc-200":"hover:text-zinc-900"}`,children:"Docs"}),c&&e.jsxs(e.Fragment,{children:[e.jsx(z,{className:"h-3.5 w-3.5"}),e.jsx("span",{children:c.title})]}),e.jsx(z,{className:"h-3.5 w-3.5"}),e.jsx("span",{className:l?"text-zinc-300":"text-zinc-700",children:a.title})]}),e.jsxs("header",{className:"mb-8",children:[e.jsx("h1",{className:"text-3xl font-bold tracking-tight sm:text-4xl",children:a.title}),a.description&&e.jsx("p",{className:`mt-3 text-lg leading-8 ${l?"text-zinc-400":"text-zinc-600"}`,children:a.description}),e.jsxs("div",{className:`mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs ${C}`,children:[e.jsxs("span",{className:`rounded-full border px-2.5 py-1 font-medium ${u} ${l?"bg-zinc-900":"bg-zinc-50"}`,children:["Luxid v",I.luxid]}),e.jsxs("span",{className:`rounded-full border px-2.5 py-1 font-medium ${u} ${l?"bg-zinc-900":"bg-zinc-50"}`,children:["Rust ",I.rust,"+"]}),e.jsxs("a",{href:me(a),target:"_blank",rel:"noopener noreferrer",className:`flex items-center gap-1 transition ${l?"hover:text-zinc-200":"hover:text-zinc-900"}`,children:["Edit this page",e.jsx(ae,{className:"h-3 w-3"})]})]})]}),e.jsx("div",{className:"docs-prose max-w-none",children:o}),e.jsx(je,{previous:S,next:h}),e.jsxs("p",{className:`mt-10 text-xs ${C}`,children:["Luxid is pre-release software — APIs may change between minor versions. Found something out of date?"," ",e.jsx("a",{href:"https://github.com/luxid-dev/luxid/issues/new",target:"_blank",rel:"noopener noreferrer",className:`underline transition ${l?"hover:text-zinc-200":"hover:text-zinc-900"}`,children:"Open an issue"}),"."]})]}),e.jsx("aside",{className:"hidden xl:sticky xl:top-14 xl:block xl:h-[calc(100vh-3.5rem)] xl:overflow-y-auto xl:py-12",children:e.jsx(W,{contentKey:a.id,className:"docs-scroll"})})]})}),e.jsx(ne,{})]})}const X=o=>o.toLowerCase().replace(/[^\w\s-]/g,"").trim().replace(/\s+/g,"-"),q=()=>{const{darkMode:o}=T();return{darkMode:o,heading:o?"text-white":"text-zinc-900",body:o?"text-zinc-400":"text-zinc-600",strong:o?"text-zinc-200":"text-zinc-900",border:o?"border-zinc-800":"border-zinc-200",surface:o?"bg-zinc-900/50":"bg-zinc-50"}},N=o=>Z.Children.toArray(o).map(a=>typeof a=="string"||typeof a=="number"?String(a):"").join("");function r({children:o,id:a}){const{heading:c,border:l}=q(),p=a??X(N(o));return e.jsxs("h2",{id:p,className:`docs-heading group mb-4 mt-14 flex scroll-mt-28 items-center gap-2 border-t pt-8 text-2xl font-bold tracking-tight first:mt-0 first:border-0 first:pt-0 ${c} ${l}`,children:[e.jsx("span",{children:o}),e.jsx("a",{href:`#${p}`,"aria-label":`Link to ${N(o)}`,className:"docs-heading-anchor text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200",children:e.jsx(K,{className:"h-4 w-4"})})]})}function d({children:o,id:a}){const{heading:c}=q(),l=a??X(N(o));return e.jsxs("h3",{id:l,className:`docs-heading group mb-3 mt-10 flex scroll-mt-28 items-center gap-2 text-lg font-semibold tracking-tight ${c}`,children:[e.jsx("span",{children:o}),e.jsx("a",{href:`#${l}`,"aria-label":`Link to ${N(o)}`,className:"docs-heading-anchor text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200",children:e.jsx(K,{className:"h-3.5 w-3.5"})})]})}function t({children:o,className:a=""}){const{body:c}=q();return e.jsx("p",{className:`mb-4 leading-7 ${c} ${a}`,children:o})}function g({children:o}){const{darkMode:a}=T();return e.jsx("p",{className:`mb-8 text-lg leading-8 ${a?"text-zinc-300":"text-zinc-700"}`,children:o})}function D({href:o,children:a}){const{darkMode:c}=T(),l=/^https?:\/\//.test(o);return e.jsx("a",{href:o,...l?{target:"_blank",rel:"noreferrer noopener"}:{},className:`underline decoration-1 underline-offset-2 transition-colors ${c?"text-zinc-200 decoration-zinc-600 hover:decoration-zinc-300":"text-zinc-900 decoration-zinc-400 hover:decoration-zinc-700"}`,children:a})}function s({children:o}){const{darkMode:a}=T();return e.jsx("code",{className:`whitespace-nowrap rounded px-1.5 py-0.5 font-mono text-[0.85em] ${a?"bg-zinc-800/80":"bg-zinc-100"}`,style:{color:"var(--lx-code-soft)"},children:o})}function x({children:o}){const{body:a}=q();return e.jsx("ul",{className:`mb-5 ml-1 space-y-2 ${a}`,children:o})}function i({children:o}){const{darkMode:a}=T();return e.jsxs("li",{className:"flex gap-3 leading-7",children:[e.jsx("span",{className:`mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full ${a?"bg-zinc-600":"bg-zinc-400"}`}),e.jsx("span",{className:"flex-1",children:o})]})}function ye({children:o}){const{body:a}=q();return e.jsx("ol",{className:`mb-5 ml-1 space-y-2 ${a}`,children:o})}function O({number:o,children:a}){const{darkMode:c}=T();return e.jsxs("li",{className:"flex gap-3 leading-7",children:[e.jsx("span",{className:`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold tabular-nums ${c?"bg-zinc-800 text-zinc-400":"bg-zinc-100 text-zinc-600"}`,children:o}),e.jsx("span",{className:"flex-1",children:a})]})}const be={note:{icon:de,label:"Note"},tip:{icon:ce,label:"Tip"},warning:{icon:pe,label:"Careful"},danger:{icon:xe,label:"Security"},success:{icon:le,label:"Good to know"}};function ve({tone:o="note",title:a,children:c}){const{darkMode:l}=T(),p=be[o],b=p.icon;return e.jsx("div",{className:`my-6 rounded-xl border p-4 ${l?"border-zinc-800 bg-zinc-900/50":"border-zinc-200 bg-zinc-50"}`,role:"note",children:e.jsxs("div",{className:"flex gap-3",children:[e.jsx(b,{className:`mt-0.5 h-[18px] w-[18px] shrink-0 ${l?"text-zinc-400":"text-zinc-500"}`}),e.jsxs("div",{className:"min-w-0 flex-1",children:[e.jsx("p",{className:`mb-1 text-sm font-semibold ${l?"text-white":"text-zinc-900"}`,children:a??p.label}),e.jsx("div",{className:`text-sm leading-6 ${l?"text-zinc-300":"text-zinc-700"}`,children:c})]})]})})}function m({headers:o,rows:a}){const{darkMode:c}=T();return e.jsx("div",{className:`my-6 overflow-x-auto rounded-xl border ${c?"border-zinc-800":"border-zinc-200"}`,children:e.jsxs("table",{className:"w-full border-collapse text-left text-sm",children:[e.jsx("thead",{children:e.jsx("tr",{className:c?"bg-zinc-900/70":"bg-zinc-50",children:o.map(l=>e.jsx("th",{scope:"col",className:`whitespace-nowrap px-4 py-3 text-xs font-semibold uppercase tracking-wide ${c?"text-zinc-400":"text-zinc-500"}`,children:l},l))})}),e.jsx("tbody",{children:a.map((l,p)=>e.jsx("tr",{className:`border-t ${c?"border-zinc-800":"border-zinc-200"}`,children:l.map((b,_)=>e.jsx("td",{className:`px-4 py-3 align-top leading-6 ${_===0?c?"font-medium text-zinc-200":"font-medium text-zinc-900":c?"text-zinc-400":"text-zinc-600"}`,children:b},_))},p))})]})})}function _e(){return e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"What Luxid is"}),e.jsx(g,{children:"Luxid is a convention-over-configuration web framework for Rust. Its shape owes a debt to the convention-driven frameworks that came before it — Laravel and, more directly, AdonisJS — so if you have used either, much of this will feel familiar. If you have not, that is fine: this course assumes you have not."}),e.jsxs(t,{children:["The pitch is short: ",e.jsx("strong",{children:"Rust's performance and safety, without Rust's usual web boilerplate."})," You should be able to describe a resource and get a working, documented, tested API out the other side."]}),e.jsxs(t,{children:["Underneath, Luxid runs on ",e.jsx(D,{href:"https://salvo.rs",children:"salvo"}),", a fast HTTP library. You will not see salvo anywhere in your code. That is deliberate — the substrate is sealed off so the framework can present one consistent surface."]}),e.jsx(r,{children:"Who this is for"}),e.jsx(t,{children:"Someone who knows Rust reasonably well and wants to build a web service. You should be comfortable with:"}),e.jsxs(x,{children:[e.jsxs(i,{children:["structs, enums, traits, and ",e.jsx(s,{children:"impl"})," blocks"]},0),e.jsxs(i,{children:[e.jsxs(s,{children:["Result","<","T, E",">"]})," and the ",e.jsx(s,{children:"?"})," operator"]},1),e.jsxs(i,{children:[e.jsx(s,{children:"async fn"})," and ",e.jsx(s,{children:".await"})]},2)]}),e.jsxs(t,{children:["You do ",e.jsx("strong",{children:"not"})," need to know salvo, SeaORM, tokio internals, or any other framework. Each is introduced when it first matters."]}),e.jsx(r,{children:"The four ideas"}),e.jsx(t,{children:"Almost everything in Luxid follows from four decisions. Learn these now and the rest of the framework will feel predictable rather than arbitrary."}),e.jsx(d,{children:"1. One context, owned"}),e.jsx(t,{children:"Every controller action takes exactly one argument:"}),e.jsx(n,{language:"rust",code:`async fn index(ctx: HttpContext) -> Result<Response> {
    ctx.response.ok(json!({ "hello": "world" }))
}`}),e.jsxs(t,{children:[e.jsx(s,{children:"HttpContext"}),' carries everything the request needs — the request itself, a response builder, route parameters, who the caller is, your services, configuration, the session. There is no second signature to learn, no set of "extractors" to memorise, and no way to get the argument list wrong. (The database is not a field on it: queries reach an ambient connection, so ',e.jsx(s,{children:"Post::find(id).await?"})," needs no handle. Chapter 11.)"]}),e.jsxs(t,{children:["Frameworks that use extractors ask you to write ",e.jsxs(s,{children:["async fn index(State(db): State","<","Db",">",", Query(page): Query","<","Page",">",")"]})," and, when you get it slightly wrong, hand you a page of trait-bound errors. Luxid trades a little magic for signatures that cannot fail to compile in confusing ways."]}),e.jsx(d,{children:"2. Errors carry their own status code"}),e.jsx(t,{children:"There is one error type, and each of its variants already knows what HTTP response it should become:"}),e.jsx(n,{language:"rust",code:`async fn show(ctx: HttpContext) -> Result<Response> {
    let post = Post::find_or_fail(ctx.params.get::<i64>("id")?).await?;
    ctx.response.ok(post)
}`}),e.jsxs(t,{children:["If that row does not exist, the client gets a well-formed ",e.jsx(s,{children:"404"})," with a JSON body — and there is no error handling in the action at all. The ",e.jsx(s,{children:"?"})," did it. This is the single biggest reason Luxid controllers stay short."]}),e.jsx(d,{children:"3. Convention, but visible"}),e.jsxs(t,{children:["Luxid generates code for you: models, migrations, controllers, routes. What it generates is ",e.jsx("strong",{children:"ordinary code in your project"}),", which you can read, edit, and delete."]}),e.jsx(t,{children:"Some frameworks discover your routes by scanning the binary at startup. Luxid does not. Your routes are a function you can read:"}),e.jsx(n,{language:"rust",code:`pub fn register(r: &mut Router) {
    r.group("/api", |r| {
        r.get("/health", controllers::health_controller::HealthController::show);
        r.resource("/posts", controllers::posts_controller::PostsController);
    });
}`}),e.jsxs(t,{children:["When a route 404s, you can find out why by reading that file, or by running ",e.jsx(s,{children:"cargo luxid routes"}),". Nothing is hidden."]}),e.jsx(d,{children:"4. The mistakes should be loud"}),e.jsx(t,{children:"Luxid tries to turn quiet bugs into loud ones:"}),e.jsxs(x,{children:[e.jsxs(i,{children:["Reading a database relation you forgot to load is an ",e.jsx("strong",{children:"error"})," in development, naming the fix — so an N+1 query becomes a failing test rather than a slow production endpoint."]},0),e.jsxs(i,{children:["A service you forgot to register fails ",e.jsx("strong",{children:"at startup"}),", naming the type, rather than on the first request that needs it."]},1),e.jsx(i,{children:"A validation rule that needs the database runs in the same pass as the rest, so the client gets every problem at once rather than one per round trip."},2)]}),e.jsx(r,{children:"What a Luxid app looks like"}),e.jsx(n,{language:"text",code:`my-app/
├── luxid.toml            configuration
├── migration/            schema changes over time
└── src/
    ├── main.rs           four lines
    ├── app.rs            assembling the application
    ├── routes.rs         the routing table
    ├── controllers/      what happens per endpoint
    ├── models/           your behaviour on database rows
    ├── entities/         generated from the database schema
    ├── validators/       input rules
    ├── policies/         permission rules
    ├── services/         your own shared objects
    ├── middleware/       code that runs around requests
    ├── factories/        test data
    └── seeders/          development data`}),e.jsx(t,{children:"If you have worked in a convention-driven framework before, these directories will look familiar under different names. If you have not, each one gets its own chapter."}),e.jsx(r,{children:"What Luxid is not"}),e.jsx(t,{children:"Being honest about this saves you time later."}),e.jsxs(x,{children:[e.jsxs(i,{children:[e.jsx("strong",{children:"It is not stable."})," This is 0.1.x. The API will change."]},0),e.jsxs(i,{children:[e.jsx("strong",{children:"It is API-first."})," Luxid renders JSON. There is no template engine and no asset pipeline yet."]},1),e.jsxs(i,{children:[e.jsx("strong",{children:"It does not do background jobs, email, or caching yet."})," Those are planned."]},2),e.jsxs(i,{children:[e.jsx("strong",{children:"It has one data layer."})," Luxid uses SeaORM underneath. You can drop down to raw SeaORM whenever you need to, but you cannot swap in Diesel."]},3)]}),e.jsx(t,{children:"If you need server-rendered HTML today, or a job queue, Luxid is not ready for you yet. If you are building a JSON API, read on."})]})}function ke(){return e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"Rust"}),e.jsxs(g,{children:["Luxid needs ",e.jsx("strong",{children:"Rust 1.94 or newer"})," and uses edition 2024. If you do not have Rust:"]}),e.jsx(n,{language:"sh",code:"curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh"}),e.jsx(t,{children:"Check what you have:"}),e.jsx(n,{language:"sh",code:"rustc --version"}),e.jsx(t,{children:"If it prints something older than 1.94:"}),e.jsx(n,{language:"sh",code:"rustup update stable"}),e.jsxs(r,{children:["The ",e.jsx(s,{children:"luxid"})," command"]}),e.jsx(t,{children:"Luxid ships a command-line tool that creates projects and generates code:"}),e.jsx(n,{language:"sh",code:"cargo install luxid-cli"}),e.jsxs(t,{children:["That installs a binary called ",e.jsx(s,{children:"luxid"})," into ",e.jsx(s,{children:"~/.cargo/bin"}),". Verify it:"]}),e.jsx(n,{language:"sh",code:"luxid --help"}),e.jsxs(t,{children:["If the shell cannot find it, ",e.jsx(s,{children:"~/.cargo/bin"})," is not on your ",e.jsx(s,{children:"PATH"}),". Add it:"]}),e.jsx(n,{language:"sh",code:`# bash / zsh — in ~/.bashrc or ~/.zshrc
export PATH="$HOME/.cargo/bin:$PATH"

# fish — in ~/.config/fish/config.fish
fish_add_path ~/.cargo/bin`}),e.jsx(r,{children:"A database — or not"}),e.jsxs(t,{children:["Luxid defaults to ",e.jsx("strong",{children:"SQLite"}),", which needs nothing installed: the database is a file in your project directory. You can complete this entire course without setting up anything."]}),e.jsx(t,{children:"When you want Postgres later, it is one environment variable. Chapter 11 covers it."}),e.jsx(r,{children:"Two commands, two places"}),e.jsx(t,{children:"This trips people up, so it is worth stating early."}),e.jsxs(t,{children:[e.jsx("strong",{children:e.jsx(s,{children:"luxid"})})," — the tool you just installed. It creates projects and generates files. It only touches the filesystem."]}),e.jsx(n,{language:"sh",code:`luxid new my-app
luxid make:model Post -a`}),e.jsxs(t,{children:[e.jsx("strong",{children:e.jsx(s,{children:"cargo luxid"})})," — your ",e.jsx("em",{children:"application's own"})," command line. It runs migrations, prints routes, serves."]}),e.jsx(n,{language:"sh",code:`cargo luxid migrate
cargo luxid routes
cargo run                  # serve`}),e.jsxs(t,{children:["Why two? Because ",e.jsx(s,{children:"migrate"})," and ",e.jsx(s,{children:"routes"})," need to know about ",e.jsx("em",{children:"your"})," migrations and ",e.jsx("em",{children:"your"})," routes — and those are Rust types that live in your crate. No external program can see them. So those commands live inside your application's binary, wired up by one line in ",e.jsx(s,{children:"main.rs"}),"."]}),e.jsxs(t,{children:[e.jsx(s,{children:"cargo luxid"})," is a cargo alias that ",e.jsx(s,{children:"luxid new"})," writes into ",e.jsx(s,{children:".cargo/config.toml"}),". It expands to ",e.jsx(s,{children:"cargo run --"}),", so the two are interchangeable — chapter 21 has the details."]}),e.jsx(t,{children:"Scaffolding is different: creating files needs no knowledge of your code, so it lives in the standalone tool."}),e.jsx(r,{children:"Optional: a faster linker"}),e.jsxs(t,{children:["Rust spends a surprising amount of build time linking. If you install ",e.jsx(D,{href:"https://github.com/rui314/mold",children:"mold"}),", your rebuilds get noticeably faster:"]}),e.jsx(n,{language:"sh",code:`# Arch
sudo pacman -S mold
# Debian / Ubuntu
sudo apt install mold`}),e.jsxs(t,{children:["Every project ",e.jsx(s,{children:"luxid new"})," creates includes a ",e.jsx(s,{children:".cargo/config.toml"})," with the mold setting ",e.jsx("strong",{children:"commented out"}),". Uncomment it once mold is installed. It ships disabled because a project that requires mold to build is a project that fails on any machine without it — including your colleagues'."]}),e.jsx(r,{children:"Checking it works"}),e.jsx(n,{language:"sh",code:`luxid new hello
cd hello
cargo run`}),e.jsx(t,{children:"The first build takes several minutes — Luxid pulls in an HTTP stack and an ORM, and they compile once. Subsequent builds take seconds."}),e.jsx(t,{children:"When it finishes:"}),e.jsx(n,{language:"text",code:"luxid listening on http://127.0.0.1:3000"}),e.jsx(t,{children:"In another terminal:"}),e.jsx(n,{language:"sh",code:"curl localhost:3000/api/health"}),e.jsx(n,{language:"json",code:'{"status":"ok"}'}),e.jsx(t,{children:"That is a working Luxid application. The next chapter takes it apart."})]})}function Te(){return e.jsxs(e.Fragment,{children:[e.jsx(g,{children:"We will build one endpoint, understand every file involved, then add a second endpoint that takes input. Keep this project — later chapters build on it."}),e.jsx(n,{language:"sh",code:`luxid new blog
cd blog`}),e.jsx(r,{children:"The tour"}),e.jsx(t,{children:"A working application was created. Here are the pieces that matter, in the order a request touches them."}),e.jsx(d,{children:e.jsx(s,{children:"src/main.rs"})}),e.jsx(n,{language:"rust",code:`mod app;
mod config;
mod controllers;
// ... the rest of the module declarations

#[tokio::main]
async fn main() -> luxid::Result<()> {
    let _ = dotenvy::dotenv();

    luxid::cli::run::<migration::Migrator>(app::build().await?).await
}`}),e.jsx(t,{children:"Three lines of behaviour:"}),e.jsxs(ye,{children:[e.jsxs(O,{number:1,children:[e.jsx(s,{children:"dotenvy::dotenv()"})," loads a ",e.jsx(s,{children:".env"})," file if one exists. The ",e.jsx(s,{children:"let _ ="}),` means "it is fine if there isn't one".`]},0),e.jsxs(O,{number:2,children:[e.jsx(s,{children:"app::build()"})," assembles the application."]},1),e.jsxs(O,{number:3,children:[e.jsx(s,{children:"luxid::cli::run"})," looks at the command-line arguments. No arguments means serve; ",e.jsx(s,{children:"migrate"}),", ",e.jsx(s,{children:"routes"}),", ",e.jsx(s,{children:"openapi"})," and friends do those things instead."]},2)]}),e.jsxs(t,{children:[e.jsx(s,{children:"main.rs"})," rarely changes."]}),e.jsx(d,{children:e.jsx(s,{children:"src/app.rs"})}),e.jsx(n,{language:"rust",code:`use luxid::prelude::*;

pub async fn build() -> luxid::Result<App> {
    let config = Config::load("luxid.toml")?;

    luxid::set_strict_relations(
        config.get_or("database.strict_relations", cfg!(debug_assertions))?,
    );

    let url = config.get_or("database.url", "sqlite://./app.db?mode=rwc".to_owned())?;
    let db = Db::connect(url).await?;

    Ok(App::new()
        .config(config)
        .providers(providers(db))
        .middleware(WithDatabase)
        .routes(crate::routes::register))
}

fn providers(db: Db) -> Providers {
    Providers::new().singleton(move |_| db.clone())
}`}),e.jsx(t,{children:"This is the one file that knows how the whole application fits together: configuration is loaded, a database connection is opened, shared objects are registered, global middleware is attached, routes are wired in."}),e.jsx(t,{children:"Read it top to bottom whenever you forget how something is set up."}),e.jsxs(t,{children:[e.jsx(s,{children:"WithDatabase"})," is middleware that makes the database available to every request. Without it, queries fail with a message telling you it is missing."]}),e.jsx(d,{children:e.jsx(s,{children:"src/routes.rs"})}),e.jsx(n,{language:"rust",code:`use luxid::prelude::*;

use crate::controllers;

pub fn register(r: &mut Router) {
    r.group("/api", |r| {
        r.get("/health", controllers::health_controller::HealthController::show);

        // <luxid:routes>
    });
}`}),e.jsxs(t,{children:["The routing table, as plain code. ",e.jsx(s,{children:'r.group("/api", ...)'})," puts everything inside it under ",e.jsx(s,{children:"/api"}),"."]}),e.jsxs(t,{children:["That ",e.jsxs(s,{children:["// ","<","luxid:routes",">"]})," comment is a ",e.jsx("strong",{children:"marker"}),". When you run ",e.jsx(s,{children:"luxid make:model Post -c"}),", the generator inserts the new routes just above it. Leave it there — but the lines it writes are ordinary code you own and can rearrange."]}),e.jsx(d,{children:e.jsx(s,{children:"src/controllers/health_controller.rs"})}),e.jsx(n,{language:"rust",code:`use luxid::prelude::*;
use serde_json::json;

pub struct HealthController;

#[luxid::controller]
impl HealthController {
    #[openapi(summary = "Liveness probe", tag = "system")]
    async fn show(ctx: HttpContext) -> Result<Response> {
        ctx.response.ok(json!({ "status": "ok" }))
    }
}`}),e.jsx(t,{children:"The endpoint itself. Three things to notice:"}),e.jsxs(x,{children:[e.jsxs(i,{children:[e.jsx("strong",{children:e.jsx(s,{children:"pub struct HealthController;"})})," — an empty struct that exists only to group related actions and give them a name."]},0),e.jsxs(i,{children:[e.jsx("strong",{children:e.jsx(s,{children:"#[luxid::controller]"})})," — turns each ",e.jsx(s,{children:"async fn"})," in the block into something the router can accept. Without it, ",e.jsx(s,{children:"HealthController::show"})," would not exist as a route target."]},1),e.jsxs(i,{children:[e.jsx("strong",{children:e.jsx(s,{children:"#[openapi(...)]"})})," — optional documentation, covered in chapter 19. Delete it and everything still works."]},2)]}),e.jsx(d,{children:"The empty directories"}),e.jsxs(t,{children:[e.jsx(s,{children:"models/"}),", ",e.jsx(s,{children:"entities/"}),", ",e.jsx(s,{children:"validators/"}),", ",e.jsx(s,{children:"services/"}),", ",e.jsx(s,{children:"middleware/"}),", ",e.jsx(s,{children:"policies/"}),", ",e.jsx(s,{children:"factories/"}),", ",e.jsx(s,{children:"seeders/"})," each start with just a ",e.jsx(s,{children:"mod.rs"})," containing a marker. They fill up as you generate things. Each gets its own chapter."]}),e.jsx(d,{children:e.jsx(s,{children:"migration/"})}),e.jsx(t,{children:"A separate small crate holding your database changes. Chapter 11."}),e.jsx(d,{children:e.jsx(s,{children:"luxid.toml"})}),e.jsx(n,{language:"toml",code:`[app]
name = "blog"
per_page = 20

[database]
strict_relations = true`}),e.jsxs(t,{children:["Settings your application reads at startup and can read again from any action. Environment variables override these — ",e.jsx(s,{children:"app.name"})," is also ",e.jsx(s,{children:"APP_NAME"}),". Chapter 10."]}),e.jsx(r,{children:"Adding an endpoint"}),e.jsxs(t,{children:["Create ",e.jsx(s,{children:"src/controllers/greeting_controller.rs"}),":"]}),e.jsx(n,{language:"rust",code:`use luxid::prelude::*;
use serde_json::json;

pub struct GreetingController;

#[luxid::controller]
impl GreetingController {
    async fn hello(ctx: HttpContext) -> Result<Response> {
        ctx.response.ok(json!({ "message": "Hello from Luxid" }))
    }
}`}),e.jsxs(t,{children:["Rust needs to be told the file exists. In ",e.jsx(s,{children:"src/controllers/mod.rs"}),":"]}),e.jsx(n,{language:"rust",code:`pub mod greeting_controller;
pub mod health_controller;

// <luxid:modules>`}),e.jsxs(t,{children:["And register the route in ",e.jsx(s,{children:"src/routes.rs"}),", inside the group:"]}),e.jsx(n,{language:"rust",code:'r.get("/hello", controllers::greeting_controller::GreetingController::hello);'}),e.jsx(t,{children:"Run it:"}),e.jsx(n,{language:"sh",code:"cargo run"}),e.jsx(n,{language:"sh",code:"curl localhost:3000/api/hello"}),e.jsx(n,{language:"json",code:'{"message":"Hello from Luxid"}'}),e.jsxs(t,{children:[e.jsx("strong",{children:"Three steps for every new controller"}),': write the file, declare the module, register the route. Miss the second and you get "file not found in module tree"; miss the third and you get a 404.']}),e.jsx(r,{children:"Reading input"}),e.jsx(t,{children:"Change the action to greet by name:"}),e.jsx(n,{language:"rust",code:`async fn hello(ctx: HttpContext) -> Result<Response> {
    let name: String = ctx.request.input("name")?.unwrap_or_else(|| "world".to_owned());

    ctx.response.ok(json!({ "message": format!("Hello, {name}") }))
}`}),e.jsx(n,{language:"sh",code:"curl 'localhost:3000/api/hello?name=Ada'"}),e.jsx(n,{language:"json",code:'{"message":"Hello, Ada"}'}),e.jsx(t,{children:"Three things are happening in that one line:"}),e.jsxs(x,{children:[e.jsxs(i,{children:[e.jsx("strong",{children:e.jsx(s,{children:"input"})})," looks in the query string first, then the JSON body. ",e.jsx(s,{children:"?name=Ada"})," and ",e.jsxs(s,{children:["{",'"name":"Ada"',"}"]})," both work."]},0),e.jsxs(i,{children:[e.jsx("strong",{children:e.jsx(s,{children:"Option"})})," — the key might be absent, so you decide the default."]},1),e.jsxs(i,{children:[e.jsx("strong",{children:e.jsx(s,{children:"?"})})," — the value might be present but undecodable. Ask for a ",e.jsx(s,{children:"u32"})," and send ",e.jsx(s,{children:"?name=abc"})," and the client gets a ",e.jsx(s,{children:"400"})," explaining which field failed. You did not write that handling."]},2)]}),e.jsx(t,{children:"Try it:"}),e.jsx(n,{language:"sh",code:"curl 'localhost:3000/api/hello?name=Ada&name=Grace'   # first one wins"}),e.jsx(r,{children:"Seeing your routes"}),e.jsx(n,{language:"sh",code:"cargo luxid routes"}),e.jsx(n,{language:"text",code:`GET  /api/health  HealthController::show      [1 middleware]
GET  /api/hello   GreetingController::hello   [1 middleware]`}),e.jsx(t,{children:"Every registered route, what handles it, and how many middleware wrap it. When an endpoint 404s, this is the first thing to check — usually the route was never registered, or the path differs from what you are requesting."}),e.jsx(r,{children:"What you now know"}),e.jsxs(x,{children:[e.jsxs(i,{children:["How a request finds its way from ",e.jsx(s,{children:"routes.rs"})," to an action"]},0),e.jsx(i,{children:"The three steps for adding a controller"},1),e.jsxs(i,{children:["That ",e.jsx(s,{children:"ctx.request.input"})," reads from the query string or body, and that ",e.jsx(s,{children:"?"})," turns bad input into a proper error response"]},2),e.jsxs(i,{children:["That ",e.jsx(s,{children:"cargo luxid routes"}),' answers "why is this 404ing?"']},3)]})]})}function Ae(){return e.jsxs(e.Fragment,{children:[e.jsx(g,{children:"A route says: *this method and path go to this action.* Every route in a Luxid app is registered in one function, so the routing table is something you read rather than deduce."}),e.jsx(r,{children:"The five verbs"}),e.jsx(n,{language:"rust",code:`pub fn register(r: &mut Router) {
    r.get("/posts", PostsController::index);
    r.post("/posts", PostsController::store);
    r.put("/posts/{id}", PostsController::update);
    r.patch("/posts/{id}", PostsController::patch);
    r.delete("/posts/{id}", PostsController::destroy);
}`}),e.jsxs(t,{children:["The second argument is an action, referenced ",e.jsx("strong",{children:"without parentheses"}),". You are naming the action, not calling it."]}),e.jsx(r,{children:"Route parameters"}),e.jsx(t,{children:"Curly braces capture a path segment:"}),e.jsx(n,{language:"rust",code:'r.get("/posts/{id}", PostsController::show);'}),e.jsx(n,{language:"rust",code:`async fn show(ctx: HttpContext) -> Result<Response> {
    let id: i64 = ctx.params.get("id")?;
    // ...
}`}),e.jsxs(t,{children:[e.jsx(s,{children:"params.get"})," decodes into whatever type you ask for. ",e.jsx(s,{children:"/posts/abc"})," requested as an ",e.jsx(s,{children:"i64"})," produces a ",e.jsx(s,{children:"400"})," with a message naming the parameter — no handling needed in the action."]}),e.jsxs(t,{children:["Use ",e.jsx(s,{children:"try_get"})," when a parameter is genuinely optional:"]}),e.jsx(n,{language:"rust",code:'let id: Option<i64> = ctx.params.try_get("id")?;'}),e.jsx(t,{children:"You can capture more than one:"}),e.jsx(n,{language:"rust",code:'r.get("/teams/{team}/posts/{id}", PostsController::show);'}),e.jsx(r,{children:"Groups"}),e.jsx(t,{children:"A group applies a common prefix:"}),e.jsx(n,{language:"rust",code:`r.group("/api/v1", |r| {
    r.get("/posts", PostsController::index);      // /api/v1/posts
    r.get("/posts/{id}", PostsController::show);  // /api/v1/posts/{id}
});`}),e.jsx(t,{children:"Groups nest:"}),e.jsx(n,{language:"rust",code:`r.group("/api", |r| {
    r.group("/v1", |r| {
        r.get("/posts", PostsController::index);  // /api/v1/posts
    });

    r.group("/v2", |r| {
        r.get("/posts", v2::PostsController::index);  // /api/v2/posts
    });
});`}),e.jsx(t,{children:"Groups also carry middleware, which is their more important job — see chapter 8."}),e.jsx(r,{children:"Resource routes"}),e.jsx(t,{children:"Five routes for one resource is a common shape, so there is a shortcut:"}),e.jsx(n,{language:"rust",code:'r.resource("/posts", PostsController);'}),e.jsx(t,{children:"That single line registers, for a controller defining all five actions:"}),e.jsx(m,{headers:["Method","Path","Action"],rows:[[e.jsx("span",{children:"GET"},0),e.jsx("span",{children:e.jsx(s,{children:"/posts"})},1),e.jsx("span",{children:e.jsx(s,{children:"index"})},2)],[e.jsx("span",{children:"POST"},0),e.jsx("span",{children:e.jsx(s,{children:"/posts"})},1),e.jsx("span",{children:e.jsx(s,{children:"store"})},2)],[e.jsx("span",{children:"GET"},0),e.jsx("span",{children:e.jsxs(s,{children:["/posts/","{","id","}"]})},1),e.jsx("span",{children:e.jsx(s,{children:"show"})},2)],[e.jsx("span",{children:"PUT"},0),e.jsx("span",{children:e.jsxs(s,{children:["/posts/","{","id","}"]})},1),e.jsx("span",{children:e.jsx(s,{children:"update"})},2)],[e.jsx("span",{children:"DELETE"},0),e.jsx("span",{children:e.jsxs(s,{children:["/posts/","{","id","}"]})},1),e.jsx("span",{children:e.jsx(s,{children:"destroy"})},2)]]}),e.jsxs(t,{children:["Note the argument: ",e.jsx(s,{children:"PostsController"}),", the ",e.jsx("strong",{children:"struct value"}),", not an action."]}),e.jsxs(t,{children:[e.jsx("strong",{children:"Only the actions that exist are registered."})," A read-only controller:"]}),e.jsx(n,{language:"rust",code:`#[luxid::controller]
impl ReportsController {
    async fn index(ctx: HttpContext) -> Result<Response> { /* ... */ }
    async fn show(ctx: HttpContext) -> Result<Response> { /* ... */ }
}`}),e.jsx(n,{language:"rust",code:'r.resource("/reports", ReportsController);'}),e.jsxs(t,{children:["registers two routes, not five. You never get a ",e.jsx(s,{children:"DELETE"})," route pointing at an action that does not exist."]}),e.jsxs(t,{children:["Any ",e.jsx("em",{children:"other"})," action on the controller — say ",e.jsx(s,{children:"archive"})," — is not part of the resource convention and gets no route. Register it yourself if you want one:"]}),e.jsx(n,{language:"rust",code:`r.resource("/posts", PostsController);
r.post("/posts/{id}/archive", PostsController::archive);`}),e.jsxs(t,{children:["A controller with none of the five resource actions cannot be passed to ",e.jsx(s,{children:"resource"})," at all — that is a compile error, not a silently empty registration."]}),e.jsx(r,{children:"Reading the table"}),e.jsx(n,{language:"sh",code:"cargo luxid routes"}),e.jsx(n,{language:"text",code:`GET     /api/posts       PostsController::index    [1 middleware]
POST    /api/posts       PostsController::store    [1 middleware]
GET     /api/posts/{id}  PostsController::show     [1 middleware]
PUT     /api/posts/{id}  PostsController::update   [1 middleware]
DELETE  /api/posts/{id}  PostsController::destroy  [1 middleware]`}),e.jsx(t,{children:"Reach for this whenever an endpoint behaves unexpectedly. It answers:"}),e.jsxs(x,{children:[e.jsx(i,{children:"Is the route registered at all?"},0),e.jsx(i,{children:"Is the path what I think it is? (A missing or doubled prefix is common.)"},1),e.jsx(i,{children:"Is the right action handling it?"},2),e.jsx(i,{children:"How many middleware wrap it? (A route missing its guard shows up here.)"},3)]}),e.jsx(r,{children:"Order does not decide matching"}),e.jsxs(t,{children:["Unlike some frameworks, Luxid does not match routes in declaration order — the underlying router picks the most specific match. So ",e.jsxs(s,{children:["/posts/","{","id","}"]})," and ",e.jsx(s,{children:"/posts/featured"})," can coexist, and ",e.jsx(s,{children:"featured"})," will win for that exact path."]}),e.jsxs(t,{children:["One consequence worth knowing: a request to ",e.jsx(s,{children:"/posts/archive"})," where only ",e.jsxs(s,{children:["/posts/","{","id","}"]})," is registered ",e.jsx("em",{children:"does"})," match — and then fails when ",e.jsx(s,{children:"archive"})," cannot be read as an ",e.jsx(s,{children:"i64"}),", producing a ",e.jsx(s,{children:"400"}),". That is the correct behaviour, but it surprises people expecting a ",e.jsx(s,{children:"404"}),"."]}),e.jsx(r,{children:"A realistic routing file"}),e.jsx(n,{language:"rust",code:`use luxid::prelude::*;

use crate::controllers;

pub fn register(r: &mut Router) {
    r.group("/api", |r| {
        // Public
        r.get("/health", controllers::health_controller::HealthController::show);
        r.post("/register", controllers::auth_controller::AuthController::register);
        r.post("/login", controllers::auth_controller::AuthController::login);

        // Authenticated
        r.group("/", |r| {
            r.middleware(Auth::jwt());

            r.get("/me", controllers::me_controller::MeController::show);
            r.resource("/posts", controllers::posts_controller::PostsController);
        });

        // <luxid:routes>
    });
}`}),e.jsx(t,{children:"Public routes first, then a group carrying the guard. That grouping is the point of chapter 8."})]})}function Ce(){return e.jsxs(e.Fragment,{children:[e.jsx(g,{children:"A controller groups related actions. An action handles one endpoint."}),e.jsx(r,{children:"The shape"}),e.jsx(n,{language:"rust",code:`use luxid::prelude::*;
use serde_json::json;

pub struct PostsController;

#[luxid::controller]
impl PostsController {
    async fn index(ctx: HttpContext) -> Result<Response> {
        ctx.response.ok(json!({ "posts": [] }))
    }

    async fn show(ctx: HttpContext) -> Result<Response> {
        let id: i64 = ctx.params.get("id")?;
        ctx.response.ok(json!({ "id": id }))
    }
}`}),e.jsx(t,{children:"Every action has the same signature:"}),e.jsx(n,{language:"rust",code:"async fn name(ctx: HttpContext) -> Result<Response>"}),e.jsxs(t,{children:[e.jsx(s,{children:"async"})," because almost everything real is asynchronous. One ",e.jsx(s,{children:"HttpContext"})," in, a ",e.jsxs(s,{children:["Result","<","Response",">"]})," out. That is the whole contract."]}),e.jsxs(r,{children:["What ",e.jsx(s,{children:"#[luxid::controller]"})," does"]}),e.jsxs(t,{children:["For each action in the block, it generates a route handler and exposes it under the action's name. That is why ",e.jsx(s,{children:'r.get("/posts", PostsController::index)'})," works — ",e.jsx(s,{children:"PostsController::index"})," is something the macro created."]}),e.jsxs(t,{children:["It leaves everything else alone. Helper functions, associated constants, and methods taking ",e.jsx(s,{children:"&self"})," are untouched:"]}),e.jsx(n,{language:"rust",code:`#[luxid::controller]
impl PostsController {
    async fn index(ctx: HttpContext) -> Result<Response> {
        ctx.response.ok(json!({ "per_page": Self::per_page() }))
    }

    // Not an action: takes no context. Left exactly as written.
    fn per_page() -> u32 {
        20
    }
}`}),e.jsxs(t,{children:["The rule is mechanical: an ",e.jsx(s,{children:"async fn"})," whose single argument is an ",e.jsx(s,{children:"HttpContext"})," ",e.jsx("strong",{children:"by value"})," becomes an action. Everything else — including a helper taking ",e.jsx(s,{children:"&HttpContext"})," — is left alone, which is how actions share logic without accidentally acquiring a route:"]}),e.jsx(n,{language:"rust",code:`// An action.
async fn show(ctx: HttpContext) -> Result<Response> { /* ... */ }

// A helper. Same block, no route.
async fn find_owned(ctx: &HttpContext) -> Result<Post> { /* ... */ }`}),e.jsx(r,{children:"What is in the context"}),e.jsxs(t,{children:[e.jsx(s,{children:"HttpContext"})," carries eight things:"]}),e.jsx(m,{headers:["Field","What it is","Chapter"],rows:[[e.jsx("span",{children:e.jsx(s,{children:"ctx.request"})},0),e.jsx("span",{children:"The incoming request"},1),e.jsx("span",{children:"06"},2)],[e.jsx("span",{children:e.jsx(s,{children:"ctx.response"})},0),e.jsx("span",{children:"A response builder"},1),e.jsx("span",{children:"06"},2)],[e.jsx("span",{children:e.jsx(s,{children:"ctx.params"})},0),e.jsx("span",{children:"Route parameters"},1),e.jsx("span",{children:"04"},2)],[e.jsx("span",{children:e.jsx(s,{children:"ctx.auth"})},0),e.jsx("span",{children:"Who the request is"},1),e.jsx("span",{children:"16"},2)],[e.jsx("span",{children:e.jsx(s,{children:"ctx.session"})},0),e.jsx("span",{children:"Cookie-backed state"},1),e.jsx("span",{children:"17"},2)],[e.jsx("span",{children:e.jsx(s,{children:"ctx.services"})},0),e.jsx("span",{children:"Your registered services"},1),e.jsx("span",{children:"09"},2)],[e.jsx("span",{children:e.jsx(s,{children:"ctx.config"})},0),e.jsx("span",{children:"Configuration"},1),e.jsx("span",{children:"10"},2)],[e.jsx("span",{children:e.jsx(s,{children:"ctx.extensions"})},0),e.jsx("span",{children:"A typed bag middleware can write to"},1),e.jsx("span",{children:"08"},2)]]}),e.jsxs(t,{children:["There is deliberately no ",e.jsx(s,{children:"ctx.db"}),". Queries do not need one — the database is ",e.jsx("em",{children:"ambient"})," within a request, so ",e.jsx(s,{children:"Post::find(id).await?"})," just works. On the rare occasion you need the handle itself (to open a transaction), resolve it like any other service: ",e.jsxs(s,{children:["ctx.services.get::","<","Db",">","()?"]}),"."]}),e.jsx(t,{children:"An action uses two or three of these. They are all there so you never have to change a signature to reach one."}),e.jsx(r,{children:"The two styles"}),e.jsxs(t,{children:["Because ",e.jsx(s,{children:"HttpContext"})," is an ordinary struct, you can destructure it:"]}),e.jsx(n,{language:"rust",code:`async fn store(HttpContext { request, response, .. }: HttpContext) -> Result<Response> {
    let input: Value = request.body_json()?;
    response.created(input)
}`}),e.jsxs(t,{children:["That is the same type — it is a style choice, not a different mode. The ",e.jsx(s,{children:".."})," is required and is deliberately so: it means new fields can be added to ",e.jsx(s,{children:"HttpContext"})," in future versions without breaking your code."]}),e.jsx(t,{children:"Most people find the short signature easier to read, and destructure inside the body when they want short names:"}),e.jsx(n,{language:"rust",code:`async fn store(ctx: HttpContext) -> Result<Response> {
    let HttpContext { request, response, .. } = ctx;
    // ...
}`}),e.jsxs(t,{children:["Use whichever you prefer; the tutorial uses ",e.jsx(s,{children:"ctx: HttpContext"})," throughout."]}),e.jsx(r,{children:"One thing that catches everyone"}),e.jsx(t,{children:"This does not compile:"}),e.jsx(n,{language:"rust",code:'ctx.response.ok(json!({ "id": ctx.params.get::<i64>("id")? }))   // ✗'}),e.jsxs(t,{children:[e.jsx(s,{children:"ctx.response.ok(...)"})," ",e.jsx("strong",{children:"moves"})," the response out of ",e.jsx(s,{children:"ctx"})," before the argument is evaluated, so the argument cannot also use ",e.jsx(s,{children:"ctx"}),". Bind first:"]}),e.jsx(n,{language:"rust",code:`let id: i64 = ctx.params.get("id")?;                            // ✓
ctx.response.ok(json!({ "id": id }))`}),e.jsx(t,{children:"This is ordinary Rust move semantics rather than anything Luxid invented, but it is the error new users hit most often."}),e.jsx(r,{children:"Organising controllers"}),e.jsx(t,{children:"One controller per resource, named plurally, in a file named after it:"}),e.jsx(n,{language:"text",code:`src/controllers/
├── mod.rs
├── auth_controller.rs        AuthController
├── posts_controller.rs       PostsController
└── comments_controller.rs    CommentsController`}),e.jsxs(t,{children:[e.jsx(s,{children:"luxid make:model Post -c"})," produces exactly this and registers the routes. You can of course write them by hand."]}),e.jsx(r,{children:"Keeping actions short"}),e.jsx(t,{children:"An action should read like a summary of what the endpoint does. When it grows past a screen, the usual culprits and their homes:"}),e.jsx(m,{headers:["The action is doing...","Move it to","Chapter"],rows:[[e.jsx("span",{children:"checking input"},0),e.jsx("span",{children:"a validator"},1),e.jsx("span",{children:"15"},2)],[e.jsx("span",{children:"deciding permission"},0),e.jsx("span",{children:"a policy"},1),e.jsx("span",{children:"18"},2)],[e.jsx("span",{children:"reusable query filtering"},0),e.jsx("span",{children:"a scope"},1),e.jsx("span",{children:"14"},2)],[e.jsx("span",{children:"something on every request"},0),e.jsx("span",{children:"middleware"},1),e.jsx("span",{children:"08"},2)],[e.jsx("span",{children:"business logic used in several places"},0),e.jsx("span",{children:"a service"},1),e.jsx("span",{children:"09"},2)]]}),e.jsx(t,{children:"A well-factored action is often four lines:"}),e.jsx(n,{language:"rust",code:`async fn store(ctx: HttpContext) -> Result<Response> {
    let input = ctx.request.validate::<StorePost>().await?;
    let post = luxid::insert(posts::ActiveModel { /* ... */ }).await?;

    ctx.response.created(post)
}`})]})}function Re(){return e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"Reading input"}),e.jsxs(d,{children:[e.jsx(s,{children:"input"})," — query string or body"]}),e.jsx(g,{children:"The one you will use most:"}),e.jsx(n,{language:"rust",code:`let page: Option<u32> = ctx.request.input("page")?;
let page = page.unwrap_or(1);`}),e.jsx(t,{children:"Or in one line:"}),e.jsx(n,{language:"rust",code:'let page = ctx.request.input::<u32>("page")?.unwrap_or(1);'}),e.jsxs(t,{children:[e.jsx(s,{children:"input"})," checks the query string first, then falls back to the JSON body. So ",e.jsx(s,{children:"?page=2"})," and ",e.jsxs(s,{children:["{",'"page": 2',"}"]})," both work, and your action does not care which the client used."]}),e.jsx(t,{children:'Two layers of "might not work" are worth separating:'}),e.jsxs(x,{children:[e.jsxs(i,{children:[e.jsx("strong",{children:e.jsx(s,{children:"Option"})})," — the key was absent. Not an error; you decide the default."]},0),e.jsxs(i,{children:[e.jsx("strong",{children:e.jsx(s,{children:"?"})})," — the key was present but could not be read as the type you asked for. That *is* an error, and it becomes a ",e.jsx(s,{children:"400"})," naming the field."]},1)]}),e.jsxs(d,{children:[e.jsx(s,{children:"query"})," and ",e.jsx(s,{children:"query_all"})]}),e.jsx(t,{children:"When you specifically want the query string:"}),e.jsx(n,{language:"rust",code:`let search: Option<String> = ctx.request.query("q")?;
let tags: Vec<String> = ctx.request.query_all("tag")?;   // ?tag=a&tag=b`}),e.jsxs(t,{children:[e.jsx(s,{children:"query"})," takes the first value of a repeated key; ",e.jsx(s,{children:"query_all"})," takes them all."]}),e.jsxs(d,{children:[e.jsx(s,{children:"body_json"})," — the whole body"]}),e.jsx(n,{language:"rust",code:`#[derive(Deserialize)]
struct CreatePost {
    title: String,
    body: String,
}

let input: CreatePost = ctx.request.body_json()?;`}),e.jsxs(t,{children:["A body that will not deserialize produces a ",e.jsx(s,{children:"400"}),", not a ",e.jsx(s,{children:"422"}),". The distinction matters: ",e.jsx(s,{children:"422"}),' says "these fields are wrong", which implies the client can fix them one at a time. A body that is not valid JSON at all is a broken request.']}),e.jsxs(t,{children:["For anything user-facing, prefer ",e.jsx(s,{children:"validate"})," over ",e.jsx(s,{children:"body_json"})," — chapter 15."]}),e.jsx(d,{children:"Headers and cookies"}),e.jsx(n,{language:"rust",code:`let agent = ctx.request.header("user-agent");        // Option<&str>
let token = ctx.request.bearer_token();              // Option<&str>, strips "Bearer "
let session = ctx.request.cookie("luxid_session");   // Option<&str>`}),e.jsx(d,{children:"Everything else"}),e.jsx(n,{language:"rust",code:`ctx.request.method()      // &Method
ctx.request.path()        // &str
ctx.request.uri()         // &Uri
ctx.request.headers()     // &HeaderMap
ctx.request.body_bytes()  // &Bytes — raw, for uploads or signatures`}),e.jsx(r,{children:"Writing output"}),e.jsxs(t,{children:[e.jsx(s,{children:"ctx.response"})," is a builder. Methods come in two kinds."]}),e.jsxs(t,{children:[e.jsx("strong",{children:"Builders"})," return a ",e.jsx(s,{children:"Response"})," and can be chained:"]}),e.jsx(n,{language:"rust",code:'ctx.response.status(201).header("x-trace", trace_id)'}),e.jsxs(t,{children:[e.jsx("strong",{children:"Terminal methods"})," return ",e.jsxs(s,{children:["Result","<","Response",">"]})," and finish the action:"]}),e.jsx(n,{language:"rust",code:"ctx.response.ok(post)"}),e.jsx(t,{children:"So a typical action ends with exactly one terminal call, optionally after some builders."}),e.jsx(d,{children:"The terminal methods"}),e.jsx(n,{language:"rust",code:`ctx.response.ok(value)         // 200, JSON body
ctx.response.created(value)    // 201, JSON body
ctx.response.accepted(value)   // 202, JSON body
ctx.response.no_content()      // 204, no body
ctx.response.json(value)       // JSON body, whatever status is set
ctx.response.text("hello")     // text/plain
ctx.response.redirect("/here") // 303
ctx.response.bytes(data, "image/png")`}),e.jsxs(t,{children:["Anything implementing ",e.jsx(s,{children:"serde::Serialize"})," can be a body — your models, a ",e.jsx(s,{children:"Vec"}),", a ",e.jsx(s,{children:"serde_json::json!"})," literal, a tuple struct."]}),e.jsx(d,{children:"Setting a status yourself"}),e.jsx(n,{language:"rust",code:`ctx.response.status(418).json(json!({ "detail": "I'm a teapot" }))`}),e.jsxs(t,{children:["An out-of-range status becomes a ",e.jsx(s,{children:"500"})," rather than panicking, on the grounds that a programming error should not take the process down."]}),e.jsx(d,{children:"Headers and cookies"}),e.jsx(n,{language:"rust",code:`ctx.response
    .header("x-request-id", id)
    .cookie(Cookie::new("theme", "dark").max_age(86_400))
    .ok(body)`}),e.jsxs(t,{children:["Cookies default to ",e.jsx(s,{children:"HttpOnly"}),", ",e.jsx(s,{children:"SameSite=Lax"}),", ",e.jsx(s,{children:"Path=/"}),". Override deliberately:"]}),e.jsx(n,{language:"rust",code:`Cookie::new("theme", "dark")
    .http_only(false)          // readable from JavaScript
    .secure(true)              // HTTPS only — turn this on in production
    .same_site(SameSite::Strict)`}),e.jsx(r,{children:"A worked example"}),e.jsx(n,{language:"rust",code:`use luxid::prelude::*;
use serde::Deserialize;
use serde_json::json;

#[derive(Deserialize)]
struct Search {
    term: String,
}

pub struct SearchController;

#[luxid::controller]
impl SearchController {
    async fn index(ctx: HttpContext) -> Result<Response> {
        let page = ctx.request.input::<u32>("page")?.unwrap_or(1);
        let per_page = ctx.request.input::<u32>("per_page")?.unwrap_or(20).min(100);

        ctx.response
            .header("x-page", page.to_string())
            .ok(json!({ "page": page, "per_page": per_page, "results": [] }))
    }

    async fn store(ctx: HttpContext) -> Result<Response> {
        let search: Search = ctx.request.body_json()?;

        if search.term.trim().is_empty() {
            return Err(Error::BadRequest("a search term is required".into()));
        }

        ctx.response.created(json!({ "term": search.term }))
    }
}`}),e.jsxs(t,{children:["Two habits worth copying from that: clamping ",e.jsx(s,{children:"per_page"})," so a client cannot ask for a million rows, and returning early with an explicit error rather than nesting the happy path inside an ",e.jsx(s,{children:"if"}),"."]})]})}function Se(){return e.jsxs(e.Fragment,{children:[e.jsx(g,{children:"This chapter explains why Luxid controllers have almost no error handling in them, and what your clients see when something goes wrong."}),e.jsx(r,{children:"One error type"}),e.jsxs(t,{children:["Every action returns ",e.jsxs(s,{children:["Result","<","Response",">"]}),", where the error is ",e.jsx(s,{children:"luxid::Error"}),". Each variant already knows its HTTP status:"]}),e.jsx(m,{headers:["Variant","Status","Use it when"],rows:[[e.jsx("span",{children:e.jsx(s,{children:"Error::Validation(errors)"})},0),e.jsx("span",{children:"422"},1),e.jsx("span",{children:"Input failed its rules"},2)],[e.jsx("span",{children:e.jsxs(s,{children:["Error::NotFound ","{"," .. ","}"]})},0),e.jsx("span",{children:"404"},1),e.jsx("span",{children:"The thing does not exist"},2)],[e.jsx("span",{children:e.jsx(s,{children:"Error::Unauthorized"})},0),e.jsx("span",{children:"401"},1),e.jsx("span",{children:"Not signed in"},2)],[e.jsx("span",{children:e.jsx(s,{children:"Error::Forbidden"})},0),e.jsx("span",{children:"403"},1),e.jsx("span",{children:"Signed in, but not allowed"},2)],[e.jsx("span",{children:e.jsx(s,{children:"Error::Conflict(msg)"})},0),e.jsx("span",{children:"409"},1),e.jsx("span",{children:"Clashes with existing state"},2)],[e.jsx("span",{children:e.jsx(s,{children:"Error::TooManyRequests"})},0),e.jsx("span",{children:"429"},1),e.jsx("span",{children:"Rate limited"},2)],[e.jsx("span",{children:e.jsx(s,{children:"Error::BadRequest(msg)"})},0),e.jsx("span",{children:"400"},1),e.jsx("span",{children:"Malformed request"},2)],[e.jsx("span",{children:e.jsx(s,{children:"Error::Internal(err)"})},0),e.jsx("span",{children:"500"},1),e.jsx("span",{children:"Something broke"},2)],[e.jsx("span",{children:e.jsxs(s,{children:["Error::Http ","{"," .. ","}"]})},0),e.jsx("span",{children:"you choose"},1),e.jsx("span",{children:"Anything else"},2)]]}),e.jsxs(r,{children:["Why ",e.jsx(s,{children:"?"})," is enough"]}),e.jsxs(t,{children:["Because each variant carries its status, ",e.jsx(s,{children:"?"})," turns a failure into a correct HTTP response with no handling at the call site:"]}),e.jsx(n,{language:"rust",code:`async fn show(ctx: HttpContext) -> Result<Response> {
    let post = Post::find_or_fail(ctx.params.get::<i64>("id")?).await?;
    ctx.response.ok(post)
}`}),e.jsx(t,{children:"Two things there can fail, and both are handled:"}),e.jsxs(x,{children:[e.jsxs(i,{children:[e.jsx(s,{children:"params.get"})," on a non-numeric id → ",e.jsx(s,{children:"400"})]},0),e.jsxs(i,{children:[e.jsx(s,{children:"find_or_fail"})," on a missing row → ",e.jsx(s,{children:"404"})]},1)]}),e.jsx(t,{children:"Compare with what you would otherwise write:"}),e.jsx(n,{language:"rust",code:`// The same endpoint, without the error type doing any work
async fn show(ctx: HttpContext) -> Result<Response> {
    let raw = ctx.params.raw("id").ok_or_else(|| /* 400 */)?;
    let id: i64 = raw.parse().map_err(|_| /* 400 */)?;

    match Post::find(id).await {
        Ok(Some(post)) => ctx.response.ok(post),
        Ok(None) => Err(/* 404 */),
        Err(e) => Err(/* 500 */),
    }
}`}),e.jsx(t,{children:"Same behaviour, five times the code, and three chances to get a status wrong."}),e.jsx(r,{children:"What the client sees"}),e.jsxs(t,{children:["Errors render as ",e.jsx(D,{href:"https://www.rfc-editor.org/rfc/rfc7807",children:"RFC 7807"})," problem documents — a small standard for API errors, so clients and code generators already know the shape."]}),e.jsx(n,{language:"json",code:`{
  "type": "https://luxid.rs/errors/not-found",
  "title": "Post \`42\` not found",
  "status": 404,
  "resource": "Post",
  "id": "42"
}`}),e.jsxs(t,{children:["Validation failures add an ",e.jsx(s,{children:"errors"})," object keyed by field:"]}),e.jsx(n,{language:"json",code:`{
  "type": "https://luxid.rs/errors/validation",
  "title": "the given data was invalid",
  "status": 422,
  "errors": {
    "email": ["must be a valid email address"],
    "name": ["must be at least 2 characters"]
  }
}`}),e.jsxs(t,{children:["The ",e.jsx(s,{children:"Content-Type"})," is ",e.jsx(s,{children:"application/problem+json"}),", not ",e.jsx(s,{children:"application/json"}),", which lets a client tell an error apart from a successful body without reading it."]}),e.jsx(r,{children:"Internal errors are redacted"}),e.jsxs(t,{children:[e.jsx(s,{children:"Error::Internal"})," is the one variant whose message never reaches the client:"]}),e.jsx(n,{language:"rust",code:'Err(Error::internal(format!("could not reach {}", connection_string)))'}),e.jsx(t,{children:"The client gets:"}),e.jsx(n,{language:"json",code:'{ "type": "https://luxid.rs/errors/internal", "title": "internal server error", "status": 500 }'}),e.jsx(t,{children:"while the full message — connection string and all — goes to your logs. This is deliberate: internal errors routinely contain hostnames, credentials, and query fragments, and a framework that leaks them by default is a framework that leaks them in production."}),e.jsxs(t,{children:["Everything else uses the message you gave it, so put client-facing wording in the other variants and diagnostic detail in ",e.jsx(s,{children:"Internal"}),"."]}),e.jsx(r,{children:"Raising errors"}),e.jsx(n,{language:"rust",code:`// Simple cases
return Err(Error::Unauthorized);
return Err(Error::Forbidden);
return Err(Error::Conflict("that email is already registered".into()));

// A 404 that names what was missing
return Err(Error::not_found("Post", id));

// A 500 with a diagnostic message, without needing anyhow in scope
return Err(Error::internal("the payment gateway returned nothing"));

// Validation, built by hand
let mut errors = ValidationErrors::new();
errors.add("title", "is required");
return Err(Error::Validation(errors));

// Anything else
return Err(Error::Http {
    status: 402,
    code: "payment-required".into(),
    message: "your subscription has lapsed".into(),
    details: None,
});`}),e.jsx(r,{children:"Converting other errors"}),e.jsxs(t,{children:[e.jsx(s,{children:"?"})," works on any error type with a ",e.jsx(s,{children:"From"})," conversion into ",e.jsx(s,{children:"luxid::Error"}),". ",e.jsx(s,{children:"serde_json::Error"})," already converts to a ",e.jsx(s,{children:"400"}),". For your own types:"]}),e.jsx(n,{language:"rust",code:`impl From<PaymentError> for Error {
    fn from(err: PaymentError) -> Self {
        match err {
            PaymentError::CardDeclined => Error::Conflict("card declined".into()),
            PaymentError::Network(e) => Error::internal(format!("gateway: {e}")),
        }
    }
}`}),e.jsxs(t,{children:["Now ",e.jsx(s,{children:"charge_card().await?"}),` inside an action produces the right status automatically. This is where to encode "which of my failures is the client's fault" — once, rather than at every call site.`]}),e.jsx(r,{children:"Choosing the right one"}),e.jsx(t,{children:"A rule that resolves most cases:"}),e.jsxs(x,{children:[e.jsxs(i,{children:["Can the client fix it by changing a field? → ",e.jsx(s,{children:"Validation"})," (422)"]},0),e.jsxs(i,{children:["Can they fix it by changing the request some other way? → ",e.jsx(s,{children:"BadRequest"})," (400)"]},1),e.jsxs(i,{children:["Do they need to sign in? → ",e.jsx(s,{children:"Unauthorized"})," (401)"]},2),e.jsxs(i,{children:["Are they signed in but not permitted? → ",e.jsx(s,{children:"Forbidden"})," (403)"]},3),e.jsxs(i,{children:["Does the thing simply not exist? → ",e.jsx(s,{children:"NotFound"})," (404)"]},4),e.jsxs(i,{children:["Is it your fault? → ",e.jsx(s,{children:"Internal"})," (500)"]},5)]}),e.jsxs(t,{children:["The 401/403 distinction is worth getting right: ",e.jsx(s,{children:"401"}),' means "I do not know who you are", ',e.jsx(s,{children:"403"}),' means "I know, and no".']})]})}function Pe(){return e.jsxs(e.Fragment,{children:[e.jsx(g,{children:"Middleware is code that runs *around* a request: before the action, after it, or both. Logging, authentication, rate limiting, and timing are all middleware."}),e.jsx(r,{children:"Writing one"}),e.jsx(n,{language:"rust",code:`use luxid::prelude::*;
use std::time::Instant;

pub struct Timer;

#[luxid::middleware]
impl Timer {
    async fn handle(&self, ctx: HttpContext, next: Next) -> Result<Response> {
        let started = Instant::now();

        let response = next.run(ctx).await?;

        Ok(response.header("x-response-time", format!("{}ms", started.elapsed().as_millis())))
    }
}`}),e.jsx(t,{children:"The shape is always the same:"}),e.jsx(n,{language:"rust",code:"async fn handle(&self, ctx: HttpContext, next: Next) -> Result<Response>"}),e.jsxs(t,{children:[e.jsx(s,{children:"next"})," is the rest of the chain — the remaining middleware and, at the end, the action. Calling ",e.jsx(s,{children:"next.run(ctx)"})," continues; not calling it stops."]}),e.jsxs(t,{children:["Note the same ",e.jsx(s,{children:"HttpContext"})," type as controllers. There is one mental model for the whole framework."]}),e.jsx(r,{children:"Before, after, and instead"}),e.jsx(t,{children:'There is no separate "before" and "after" API, because ordinary code position is enough:'}),e.jsx(n,{language:"rust",code:`async fn handle(&self, ctx: HttpContext, next: Next) -> Result<Response> {
    // BEFORE — runs on the way in

    let response = next.run(ctx).await?;

    // AFTER — runs on the way out

    Ok(response)
}`}),e.jsxs(t,{children:["To reject a request outright, return without calling ",e.jsx(s,{children:"next"}),":"]}),e.jsx(n,{language:"rust",code:`pub struct BlockRobots;

#[luxid::middleware]
impl BlockRobots {
    async fn handle(&self, ctx: HttpContext, next: Next) -> Result<Response> {
        if ctx.request.header("user-agent").is_some_and(|ua| ua.contains("bot")) {
            return Err(Error::Forbidden);
        }

        next.run(ctx).await
    }
}`}),e.jsx(t,{children:"The action never runs."}),e.jsx(r,{children:"Attaching it"}),e.jsx(t,{children:"Three levels, from widest to narrowest."}),e.jsxs(t,{children:[e.jsx("strong",{children:"Global"})," — every route in the application:"]}),e.jsx(n,{language:"rust",code:`App::new()
    .middleware(Timer)
    .routes(routes::register)`}),e.jsxs(t,{children:[e.jsx("strong",{children:"Group"})," — every route inside it:"]}),e.jsx(n,{language:"rust",code:`r.group("/admin", |r| {
    r.middleware(Auth::jwt());

    r.get("/stats", AdminController::stats);
    r.get("/users", AdminController::users);
});`}),e.jsxs(t,{children:[e.jsx("strong",{children:"Route"})," — one endpoint:"]}),e.jsx(n,{language:"rust",code:'r.get("/me", MeController::show).middleware(Auth::jwt());'}),e.jsx(t,{children:"Or across a whole resource:"}),e.jsx(n,{language:"rust",code:'r.resource("/posts", PostsController).middleware(Auth::jwt());'}),e.jsxs(t,{children:["Several at once — ",e.jsx(s,{children:"middleware"})," returns the route, so the calls chain:"]}),e.jsx(n,{language:"rust",code:`r.get("/admin", AdminController::show)
    .middleware(Auth::jwt())
    .middleware(Role::admin());`}),e.jsxs(t,{children:["Middleware is attached by ",e.jsx("strong",{children:"value"}),", not by a string name, so a typo is a compile error rather than a route that silently runs unguarded."]}),e.jsx(r,{children:"Order"}),e.jsx(t,{children:"Middleware runs outermost first: global, then group, then route. On the way out it unwinds in reverse."}),e.jsxs(t,{children:["With ",e.jsx(s,{children:"Timer"})," global and ",e.jsx(s,{children:"Auth::jwt()"})," on a group:"]}),e.jsx(n,{language:"text",code:`→ Timer starts
  → Auth checks the token
    → the action runs
  ← Auth returns
← Timer adds its header`}),e.jsx(t,{children:"You can see the depth per route:"}),e.jsx(n,{language:"sh",code:"cargo luxid routes"}),e.jsx(n,{language:"text",code:`GET  /api/health  HealthController::show  [1 middleware]
GET  /api/me      MeController::show      [2 middleware]`}),e.jsx(t,{children:"If a route that should be guarded shows a lower number than its neighbours, that is your bug."}),e.jsx(r,{children:"Passing data to the action"}),e.jsxs(t,{children:["Middleware often computes something the action needs. ",e.jsx(s,{children:"ctx.extensions"})," is a typed bag for exactly that:"]}),e.jsx(n,{language:"rust",code:`#[derive(Debug, Clone)]
pub struct RequestId(pub String);

pub struct AssignRequestId;

#[luxid::middleware]
impl AssignRequestId {
    async fn handle(&self, mut ctx: HttpContext, next: Next) -> Result<Response> {
        let id = RequestId(luxid::session::new_id());   // a 256-bit random id
        ctx.extensions.insert(id.clone());

        Ok(next.run(ctx).await?.header("x-request-id", id.0))
    }
}`}),e.jsx(t,{children:"The action reads it back by type:"}),e.jsx(n,{language:"rust",code:`async fn show(ctx: HttpContext) -> Result<Response> {
    let id = ctx.extensions.get::<RequestId>().map(|r| r.0.clone());
    ctx.response.ok(json!({ "request_id": id }))
}`}),e.jsxs(t,{children:["Note ",e.jsx(s,{children:"mut ctx"})," in the middleware — writing to the context needs it."]}),e.jsx(r,{children:"Errors skip the after-part"}),e.jsxs(t,{children:["If anything downstream fails, the ",e.jsx(s,{children:"?"})," propagates and the code after ",e.jsx(s,{children:"next.run"})," does not execute:"]}),e.jsx(n,{language:"rust",code:`let response = next.run(ctx).await?;   // ← an error returns here
Ok(response.header("x-trace", "1"))    // ← never reached`}),e.jsxs(t,{children:["That is usually what you want. When you need cleanup regardless of outcome, match rather than use ",e.jsx(s,{children:"?"}),":"]}),e.jsx(n,{language:"rust",code:`let outcome = next.run(ctx).await;

// runs either way
metrics.record(started.elapsed());

outcome`}),e.jsx(r,{children:"Middleware with configuration"}),e.jsxs(t,{children:["Because ",e.jsx(s,{children:"handle"})," takes ",e.jsx(s,{children:"&self"}),", middleware can hold state:"]}),e.jsx(n,{language:"rust",code:`pub struct RequireHeader {
    name: &'static str,
}

impl RequireHeader {
    pub fn new(name: &'static str) -> Self {
        Self { name }
    }
}

#[luxid::middleware]
impl RequireHeader {
    async fn handle(&self, ctx: HttpContext, next: Next) -> Result<Response> {
        if ctx.request.header(self.name).is_none() {
            return Err(Error::BadRequest(format!("the \`{}\` header is required", self.name)));
        }

        next.run(ctx).await
    }
}`}),e.jsx(n,{language:"rust",code:`r.post("/webhook", WebhookController::receive)
    .middleware(RequireHeader::new("x-signature"));`}),e.jsxs(t,{children:["This is how the built-in guards work: ",e.jsx(s,{children:"Auth::jwt()"})," returns a configured value."]}),e.jsx(r,{children:"Built-in middleware"}),e.jsx(m,{headers:["","What it does","Chapter"],rows:[[e.jsx("span",{children:e.jsx(s,{children:"WithDatabase"})},0),e.jsx("span",{children:"Makes the database available. Every app needs it."},1),e.jsx("span",{children:"11"},2)],[e.jsx("span",{children:e.jsx(s,{children:"WithRollbackDatabase"})},0),e.jsx("span",{children:"As above, but rolls back after each request. Tests only."},1),e.jsx("span",{children:"20"},2)],[e.jsx("span",{children:e.jsx(s,{children:"Auth::jwt()"})},0),e.jsx("span",{children:"Requires a valid bearer token"},1),e.jsx("span",{children:"16"},2)],[e.jsx("span",{children:e.jsx(s,{children:"Auth::optional_jwt()"})},0),e.jsx("span",{children:"Reads a token if present, allows anonymous"},1),e.jsx("span",{children:"16"},2)],[e.jsx("span",{children:e.jsx(s,{children:"Auth::session()"})},0),e.jsx("span",{children:"Cookie-backed sessions"},1),e.jsx("span",{children:"17"},2)]]})]})}function qe(){return e.jsxs(e.Fragment,{children:[e.jsxs(g,{children:["A service is any object your application wants to share: a database handle, an HTTP client, a configuration struct, a mailer. The ",e.jsx("strong",{children:"container"})," is where you register them, and ",e.jsx(s,{children:"ctx.services"})," is how actions get them."]}),e.jsx(r,{children:"Why not just use globals?"}),e.jsxs(t,{children:["You could put a ",e.jsx(s,{children:"static"})," somewhere and reach for it. The container is better for three reasons that matter as soon as you write tests:"]}),e.jsxs(x,{children:[e.jsxs(i,{children:["You can ",e.jsx("strong",{children:"swap an implementation"})," — a fake mailer in tests, a real one in production — without changing the code that uses it."]},0),e.jsxs(i,{children:["Objects with ",e.jsx("strong",{children:"per-request"})," lifetimes work naturally."]},1),e.jsxs(i,{children:["Missing wiring fails ",e.jsx("strong",{children:"at startup"})," with a message naming the type, rather than on the first request that needs it."]},2)]}),e.jsx(r,{children:"Registering"}),e.jsxs(t,{children:["In ",e.jsx(s,{children:"src/app.rs"}),":"]}),e.jsx(n,{language:"rust",code:`fn providers(db: Db) -> Providers {
    Providers::new()
        .singleton(move |_| db.clone())
        .singleton(|_| Settings { per_page: 20 })
}`}),e.jsx(t,{children:"Each closure receives the container, so services can depend on each other:"}),e.jsx(n,{language:"rust",code:`Providers::new()
    .singleton(|_| Settings::from_env())
    .singleton(|c| {
        let settings = c.get::<Settings>().expect("Settings is registered");
        Mailer::new(&settings.smtp_url)
    })`}),e.jsx(r,{children:"Three lifetimes"}),e.jsx(n,{language:"rust",code:`Providers::new()
    .singleton(|_| Settings::from_env())   // once, for the whole app
    .scoped(|_| RequestId::new())          // once per request
    .transient(|_| Formatter::new())       // every time it is resolved`}),e.jsxs(t,{children:[e.jsx("strong",{children:e.jsx(s,{children:"singleton"})})," — built once at startup and shared. Use for connection pools, configuration, clients. Most services are singletons."]}),e.jsxs(t,{children:[e.jsx("strong",{children:e.jsx(s,{children:"scoped"})})," — built once per request, then shared for the rest of it. Use when a value should be consistent within one request but not across them — a request id, a per-request cache."]}),e.jsxs(t,{children:[e.jsx("strong",{children:e.jsx(s,{children:"transient"})})," — built fresh every time. Rare; use when the object is stateful and must not be shared."]}),e.jsx(r,{children:"Resolving"}),e.jsx(t,{children:"From any action or middleware:"}),e.jsx(n,{language:"rust",code:`async fn index(ctx: HttpContext) -> Result<Response> {
    let settings = ctx.services.get::<Settings>()?;

    ctx.response.ok(json!({ "per_page": settings.per_page }))
}`}),e.jsxs(t,{children:["You get an ",e.jsxs(s,{children:["Arc","<","Settings",">"]}),". The ",e.jsx(s,{children:"?"})," handles the case where nothing is registered, producing a redacted ",e.jsx(s,{children:"500"})," with the type name in your logs."]}),e.jsx(r,{children:"Swapping implementations"}),e.jsx(t,{children:"Register a trait rather than a concrete type and you can substitute freely:"}),e.jsx(n,{language:"rust",code:`pub trait Mailer: Send + Sync {
    fn send(&self, to: &str, body: &str) -> luxid::Result<()>;
}

pub struct Smtp { /* ... */ }
impl Mailer for Smtp { /* ... */ }

pub struct Collected {
    pub sent: std::sync::Mutex<Vec<String>>,
}
impl Mailer for Collected { /* records instead of sending */ }`}),e.jsx(n,{language:"rust",code:`// production
Providers::new().bind::<dyn Mailer, _>(|_| Arc::new(Smtp::new()))

// tests
Providers::new().bind::<dyn Mailer, _>(|_| Arc::new(Collected::default()))`}),e.jsxs(t,{children:["Resolve a bound trait with ",e.jsx(s,{children:"get_dyn"})," rather than ",e.jsx(s,{children:"get"}),":"]}),e.jsx(n,{language:"rust",code:`let mailer = ctx.services.get_dyn::<dyn Mailer>()?;
mailer.send(&user.email, "welcome")?;`}),e.jsx(t,{children:"The action is identical in both configurations. That is the whole point."}),e.jsx(r,{children:"Failing at startup, not at 3am"}),e.jsxs(t,{children:[e.jsx(s,{children:"App::run"})," resolves ",e.jsx("strong",{children:"every singleton before binding the port"}),". A missing dependency stops the process immediately:"]}),e.jsx(n,{language:"text",code:"error: no provider bound for `app::services::Mailer`.\n       Register it in `providers()`, e.g. `.singleton(|_| Mailer::new())`"}),e.jsx(t,{children:"Cyclic dependencies are caught too, and reported as the chain rather than a stack overflow:"}),e.jsx(n,{language:"text",code:"error: dependency cycle in providers: Pool → Repo → Pool"}),e.jsxs(t,{children:["Tests use ",e.jsx(s,{children:"App::into_service()"}),", which deliberately ",e.jsx("em",{children:"skips"})," this check so a test can bind only what it needs. ",e.jsx(s,{children:"App::try_into_service()"})," is the validating version when you want it."]}),e.jsx(r,{children:"A worked example"}),e.jsxs(t,{children:[e.jsx(s,{children:"src/services/mod.rs"}),":"]}),e.jsx(n,{language:"rust",code:`pub mod pricing;

// <luxid:modules>`}),e.jsxs(t,{children:[e.jsx(s,{children:"src/services/pricing.rs"}),":"]}),e.jsx(n,{language:"rust",code:`use luxid::prelude::*;

pub struct Pricing {
    tax_rate: f64,
}

impl Pricing {
    pub fn new(tax_rate: f64) -> Self {
        Self { tax_rate }
    }

    pub fn with_tax(&self, amount: f64) -> f64 {
        amount * (1.0 + self.tax_rate)
    }
}`}),e.jsxs(t,{children:["Register it in ",e.jsx(s,{children:"src/app.rs"}),":"]}),e.jsx(n,{language:"rust",code:`fn providers(db: Db, config: &Config) -> luxid::Result<Providers> {
    let tax_rate: f64 = config.get_or("pricing.tax_rate", 0.2)?;

    Ok(Providers::new()
        .singleton(move |_| db.clone())
        .singleton(move |_| crate::services::pricing::Pricing::new(tax_rate)))
}`}),e.jsx(t,{children:"Use it:"}),e.jsx(n,{language:"rust",code:`async fn quote(ctx: HttpContext) -> Result<Response> {
    let pricing = ctx.services.get::<crate::services::pricing::Pricing>()?;
    let amount = ctx.request.input::<f64>("amount")?.unwrap_or(0.0);

    ctx.response.ok(json!({ "total": pricing.with_tax(amount) }))
}`}),e.jsx(r,{children:"When not to use a service"}),e.jsx(t,{children:"Not everything needs registering. A pure function is simpler than a service and needs no wiring:"}),e.jsx(n,{language:"rust",code:"pub fn slugify(title: &str) -> String { /* ... */ }"}),e.jsx(t,{children:"Reach for the container when the thing holds state, owns a connection, or needs to be swapped in tests. Otherwise, write a function."})]})}function Ee(){return e.jsxs(e.Fragment,{children:[e.jsx(g,{children:"Configuration is anything that changes between your laptop and production: a database URL, a secret key, a page size."}),e.jsx(r,{children:"Two layers"}),e.jsxs(t,{children:["Luxid reads ",e.jsx(s,{children:"luxid.toml"}),", then lets ",e.jsx("strong",{children:"environment variables override it"}),". That split follows the usual convention:"]}),e.jsxs(x,{children:[e.jsxs(i,{children:[e.jsx("strong",{children:e.jsx(s,{children:"luxid.toml"})})," holds what is true for everyone. It is committed."]},0),e.jsxs(i,{children:[e.jsx("strong",{children:"The environment"})," holds what is true for this deployment. It is not."]},1)]}),e.jsx(n,{language:"toml",code:`# luxid.toml
[app]
name = "blog"
per_page = 20

[database]
strict_relations = true`}),e.jsx(n,{language:"sh",code:`# .env — not committed
DATABASE_URL=postgres://localhost/blog
APP_KEY=a-real-secret`}),e.jsx(r,{children:"Keys are forgiving"}),e.jsx(t,{children:"A nested TOML table flattens to a dotted key, and separators and case do not matter:"}),e.jsx(n,{language:"text",code:`[database]              →  database.strict_relations
strict_relations = true →  DATABASE_STRICT_RELATIONS
                        →  database_strict_relations`}),e.jsxs(t,{children:["All three spellings are ",e.jsx("strong",{children:"the same key"}),". So the environment override for ",e.jsx(s,{children:"app.per_page"})," is ",e.jsx(s,{children:"APP_PER_PAGE"}),", without you having to look up a mapping."]}),e.jsx(r,{children:"Reading it"}),e.jsx(t,{children:"Any action, middleware, or anything with a context:"}),e.jsx(n,{language:"rust",code:`async fn index(ctx: HttpContext) -> Result<Response> {
    let name: String = ctx.config.get("app.name")?;
    let per_page: u32 = ctx.config.get_or("app.per_page", 20)?;

    ctx.response.ok(json!({ "app": name, "per_page": per_page }))
}`}),e.jsx(m,{headers:["Method","Behaviour"],rows:[[e.jsx("span",{children:e.jsxs(s,{children:["get::","<","T",">","(key)"]})},0),e.jsx("span",{children:"Required. Missing is an error naming the environment variable."},1)],[e.jsx("span",{children:e.jsxs(s,{children:["try_get::","<","T",">","(key)"]})},0),e.jsxs("span",{children:["Optional. Returns ",e.jsxs(s,{children:["Option","<","T",">"]}),"."]},1)],[e.jsx("span",{children:e.jsx(s,{children:"get_or(key, default)"})},0),e.jsxs("span",{children:["Uses the default when ",e.jsx("strong",{children:"absent"}),"."]},1)],[e.jsx("span",{children:e.jsx(s,{children:"raw(key)"})},0),e.jsx("span",{children:"The unparsed string."},1)],[e.jsx("span",{children:e.jsx(s,{children:"has(key)"})},0),e.jsx("span",{children:"Whether it is set."},1)]]}),e.jsx(r,{children:"Absent and malformed are different"}),e.jsx(t,{children:"This is worth internalising:"}),e.jsx(n,{language:"rust",code:'let per_page: u32 = ctx.config.get_or("app.per_page", 20)?;'}),e.jsxs(x,{children:[e.jsxs(i,{children:["Key ",e.jsx("strong",{children:"absent"})," → you get ",e.jsx(s,{children:"20"}),"."]},0),e.jsxs(i,{children:["Key present but set to ",e.jsx(s,{children:'"twenty"'})," → ",e.jsx("strong",{children:"an error"}),", not ",e.jsx(s,{children:"20"}),"."]},1)]}),e.jsx(t,{children:'Silently falling back on a malformed value would hide a typo until someone wondered why their setting had no effect. The default covers "you did not say", not "you said something I could not read".'}),e.jsx(r,{children:"Missing keys tell you the fix"}),e.jsx(n,{language:"rust",code:'let key: String = ctx.config.get("app.key")?;'}),e.jsx(t,{children:"If it is not set, your logs get:"}),e.jsx(n,{language:"text",code:"configuration key `app.key` is not set. Add it to luxid.toml, or set `APP_KEY`."}),e.jsxs(t,{children:["The client gets a redacted ",e.jsx(s,{children:"500"})," — configuration keys can be revealing."]}),e.jsx(r,{children:"Where configuration is loaded"}),e.jsxs(t,{children:["In ",e.jsx(s,{children:"src/app.rs"}),":"]}),e.jsx(n,{language:"rust",code:`pub async fn build() -> luxid::Result<App> {
    let config = Config::load("luxid.toml")?;

    // ...

    Ok(App::new().config(config).routes(crate::routes::register))
}`}),e.jsxs(t,{children:[e.jsx(s,{children:"Config::load"})," reads the file if it exists — a missing file is ",e.jsx("strong",{children:"not"})," an error, since an application configured entirely by environment is perfectly ordinary — and then layers the environment over it."]}),e.jsx(r,{children:"Prefer a typed struct for real settings"}),e.jsxs(t,{children:[e.jsx(s,{children:"Config"})," is a string map with typed reads. That is fine for a handful of values, but for anything your application depends on, parse it ",e.jsx("strong",{children:"once at boot"})," into a struct and register that:"]}),e.jsx(n,{language:"rust",code:`pub struct Settings {
    pub per_page: u32,
    pub app_key: String,
}

impl Settings {
    pub fn load(config: &Config) -> luxid::Result<Self> {
        Ok(Self {
            per_page: config.get_or("app.per_page", 20)?,
            app_key: config.get("app.key")?,
        })
    }
}`}),e.jsx(n,{language:"rust",code:`let settings = Settings::load(&config)?;

Ok(App::new()
    .config(config)
    .providers(Providers::new().singleton(move |_| settings.clone()))
    .routes(crate::routes::register))`}),e.jsxs(t,{children:["Two things improve. A missing or malformed value now fails ",e.jsx("strong",{children:"at startup"})," rather than on whichever request first reads it. And actions get a real struct:"]}),e.jsx(n,{language:"rust",code:`let settings = ctx.services.get::<Settings>()?;
settings.per_page      // a u32, already validated`}),e.jsxs(t,{children:["Use ",e.jsx(s,{children:"ctx.config"})," for one-off reads and for building that struct. Use the struct for everything else."]}),e.jsx(r,{children:"Secrets"}),e.jsxs(t,{children:["Never put a secret in ",e.jsx(s,{children:"luxid.toml"})," — it is committed. Use the environment:"]}),e.jsx(n,{language:"sh",code:`# .env, gitignored
APP_KEY=...
DATABASE_URL=postgres://user:password@host/db`}),e.jsxs(t,{children:[e.jsx(s,{children:"luxid new"})," gitignores ",e.jsx(s,{children:".env"})," and writes a ",e.jsx(s,{children:".env.example"})," showing which variables exist without their values. Keep that habit: the example file is how the next person knows what to set."]})]})}function ze(){return e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"Connecting"}),e.jsxs(g,{children:["A generated app connects in ",e.jsx(s,{children:"src/app.rs"}),":"]}),e.jsx(n,{language:"rust",code:`let url = config.get_or("database.url", "sqlite://./app.db?mode=rwc".to_owned())?;
let db = Db::connect(url).await?;`}),e.jsxs(t,{children:["The default is SQLite in a file next to your code, so a fresh project runs with nothing installed. Point ",e.jsx(s,{children:"DATABASE_URL"})," at Postgres when you want one:"]}),e.jsx(n,{language:"sh",code:"DATABASE_URL=postgres://user:password@localhost/blog"}),e.jsx(t,{children:"Nothing else changes. Both are supported throughout."}),e.jsxs(t,{children:["The connection is registered as a singleton and made available to requests by the ",e.jsx(s,{children:"WithDatabase"})," middleware:"]}),e.jsx(n,{language:"rust",code:`Ok(App::new()
    .providers(Providers::new().singleton(move |_| db.clone()))
    .middleware(WithDatabase)
    .routes(crate::routes::register))`}),e.jsxs(t,{children:["If you forget ",e.jsx(s,{children:"WithDatabase"}),", queries fail with a message saying so. They do not silently use the wrong connection."]}),e.jsx(r,{children:"How queries find the connection"}),e.jsx(t,{children:"You will notice that queries do not take a database argument:"}),e.jsx(n,{language:"rust",code:"let posts = Post::query().all().await?;"}),e.jsxs(t,{children:["The connection is ",e.jsx("em",{children:"ambient"})," — the middleware puts it in scope for the duration of the request, and queries pick it up. This is what lets model code read like ",e.jsx(s,{children:"User::find(id)"})," instead of ",e.jsx(s,{children:"User::find(&db, id)"}),"."]}),e.jsx(t,{children:"Two consequences worth knowing:"}),e.jsxs(x,{children:[e.jsxs(i,{children:["Code outside a request needs its own scope: ",e.jsxs(s,{children:["db.scope(async ","{"," ... ","}",").await"]}),"."]},0),e.jsxs(i,{children:["A detached ",e.jsx(s,{children:"tokio::spawn"})," does ",e.jsx("strong",{children:"not"})," inherit the scope. Queries there fail with a message explaining exactly that, rather than quietly using a different connection."]},1)]}),e.jsx(r,{children:"What migrations are"}),e.jsx(t,{children:"A migration is a versioned, repeatable change to your database structure. You do not create tables by hand — you write a migration, commit it, and every environment applies the same ones in the same order."}),e.jsx(r,{children:"Creating one"}),e.jsx(n,{language:"sh",code:"luxid make:model Post -m"}),e.jsxs(t,{children:["That writes ",e.jsx(s,{children:"migration/src/m20260822_140530_create_posts.rs"}),":"]}),e.jsx(n,{language:"rust",code:`use sea_orm_migration::prelude::*;
use sea_orm_migration::schema::*;

#[derive(DeriveIden)]
enum Posts {
    Table,
    Id,
}

pub struct Migration;

impl MigrationName for Migration {
    fn name(&self) -> &str {
        "m20260822_140530_create_posts"
    }
}

#[async_trait::async_trait]
impl MigrationTrait for Migration {
    async fn up(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        manager
            .create_table(
                Table::create()
                    .table(Posts::Table)
                    .if_not_exists()
                    .col(pk_auto(Posts::Id))
                    // Add your columns here.
                    .to_owned(),
            )
            .await
    }

    async fn down(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        manager.drop_table(Table::drop().table(Posts::Table).to_owned()).await
    }
}`}),e.jsxs(t,{children:["Note there is ",e.jsxs("strong",{children:["no ",e.jsx(s,{children:"--fields"})," flag"]}),". The migration starts empty and you fill in the columns. Your database is the source of truth for your schema, and a field DSL would be a second, weaker one that cannot express every column type."]}),e.jsx(r,{children:"Filling it in"}),e.jsx(t,{children:"Add the column names to the enum, then the columns to the table:"}),e.jsx(n,{language:"rust",code:`#[derive(DeriveIden)]
enum Posts {
    Table,
    Id,
    Title,
    Body,
    Published,
}`}),e.jsx(n,{language:"rust",code:`.col(pk_auto(Posts::Id))
.col(string(Posts::Title))
.col(text(Posts::Body))
.col(boolean(Posts::Published))`}),e.jsx(t,{children:"Common column helpers:"}),e.jsx(m,{headers:["Helper","Column"],rows:[[e.jsx("span",{children:e.jsx(s,{children:"pk_auto(X)"})},0),e.jsx("span",{children:"auto-incrementing primary key"},1)],[e.jsxs("span",{children:[e.jsx(s,{children:"string(X)"})," / ",e.jsx(s,{children:"string_null(X)"})]},0),e.jsx("span",{children:"VARCHAR, required / nullable"},1)],[e.jsxs("span",{children:[e.jsx(s,{children:"text(X)"})," / ",e.jsx(s,{children:"text_null(X)"})]},0),e.jsx("span",{children:"TEXT"},1)],[e.jsxs("span",{children:[e.jsx(s,{children:"integer(X)"})," / ",e.jsx(s,{children:"big_integer(X)"})]},0),e.jsx("span",{children:"INTEGER / BIGINT"},1)],[e.jsx("span",{children:e.jsx(s,{children:"boolean(X)"})},0),e.jsx("span",{children:"BOOLEAN"},1)],[e.jsxs("span",{children:[e.jsx(s,{children:"timestamp(X)"})," / ",e.jsx(s,{children:"timestamp_null(X)"})]},0),e.jsx("span",{children:"TIMESTAMP"},1)],[e.jsxs("span",{children:[e.jsx(s,{children:"double(X)"})," / ",e.jsx(s,{children:"decimal(X)"})]},0),e.jsx("span",{children:"floating point / exact decimal"},1)]]}),e.jsxs(t,{children:["Every ",e.jsx(s,{children:"*_null"})," variant makes the column optional."]}),e.jsx(d,{children:"Foreign keys"}),e.jsx(n,{language:"rust",code:`#[derive(DeriveIden)]
enum Posts {
    Table,
    Id,
    UserId,
}`}),e.jsx(n,{language:"rust",code:`.col(big_integer(Posts::UserId))
.foreign_key(
    ForeignKey::create()
        .from(Posts::Table, Posts::UserId)
        .to(Users::Table, Users::Id)
        .on_delete(ForeignKeyAction::Cascade),
)`}),e.jsx(t,{children:"Referencing another table means declaring its identifier too:"}),e.jsx(n,{language:"rust",code:`#[derive(DeriveIden)]
enum Users {
    Table,
    Id,
}`}),e.jsx(r,{children:"Running them"}),e.jsx(n,{language:"sh",code:`cargo luxid migrate            # apply everything pending
cargo luxid migrate:status     # what has run
cargo luxid migrate:rollback   # undo the last one
cargo luxid migrate:fresh --force   # drop everything and rebuild`}),e.jsxs(t,{children:[e.jsx(s,{children:"migrate:fresh"})," requires ",e.jsx(s,{children:"--force"})," because it destroys data, and that should not follow from a mistyped command in the wrong shell."]}),e.jsxs(t,{children:[e.jsx(s,{children:"migrate:status"})," is worth checking when behaviour differs between machines:"]}),e.jsx(n,{language:"text",code:` applied  m20260822_140530_create_posts
 pending  m20260823_101500_add_published_to_posts`}),e.jsx(r,{children:"One migration per file"}),e.jsxs(t,{children:["SeaORM derives a migration's name from its ",e.jsx("strong",{children:"file name"}),", not its struct name. Two migrations in one file therefore share a name, and the second is silently treated as already applied — which is a data-loss-shaped trap."]}),e.jsxs(t,{children:[e.jsx(s,{children:"luxid make:model -m"})," writes one per file, correctly named. If you write one by hand, keep that rule, or implement ",e.jsx(s,{children:"MigrationName"})," explicitly as the generated ones do."]}),e.jsx(r,{children:"Changing an existing table"}),e.jsxs(t,{children:["There is no generator for this yet — write the file by hand in ",e.jsx(s,{children:"migration/src/"}),", named with a later timestamp, and register it in ",e.jsx(s,{children:"migration/src/lib.rs"}),":"]}),e.jsx(n,{language:"rust",code:`mod m20260822_140530_create_posts;
mod m20260823_101500_add_published_to_posts;   // ← add

// <luxid:migration-modules>

pub struct Migrator;

#[async_trait::async_trait]
impl MigratorTrait for Migrator {
    fn migrations() -> Vec<Box<dyn MigrationTrait>> {
        vec![
            Box::new(m20260822_140530_create_posts::Migration),
            Box::new(m20260823_101500_add_published_to_posts::Migration),   // ← add
            // <luxid:migrations>
        ]
    }
}`}),e.jsx(t,{children:"Order matters: they run top to bottom."}),e.jsx(r,{children:"Keeping code in step with the schema"}),e.jsx(t,{children:"After a migration, your Rust code needs to know about the new columns:"}),e.jsx(n,{language:"sh",code:"cargo luxid db:sync"}),e.jsxs(t,{children:["That reads the ",e.jsx("strong",{children:"live database"})," and refreshes the field lists in your entities and factories — but only what lies between the ",e.jsxs(s,{children:["// ","<","luxid:fields",">"]})," markers. Rules and overrides you wrote outside them survive."]}),e.jsx(n,{language:"text",code:`  updated src/entities/posts.rs
  updated src/factories/post_factory.rs
1 table(s) read, 2 file(s) changed`}),e.jsxs(t,{children:["Use ",e.jsx(s,{children:"--dry-run"})," to see what would change first. Running it twice changes nothing the second time."]}),e.jsx(t,{children:"The usual loop is therefore:"}),e.jsx(n,{language:"sh",code:`luxid make:model Post -a     # generate
# edit the migration to add columns
cargo luxid migrate         # apply
cargo luxid db:sync         # bring the code into step`}),e.jsx(r,{children:"Transactions"}),e.jsxs(t,{children:["The ",e.jsx(s,{children:"Db"})," handle itself is a service, so resolve it when you need one:"]}),e.jsx(n,{language:"rust",code:`let db = ctx.services.get::<Db>()?;

db.transaction(async || {
    let user = luxid::insert(new_user).await?;
    luxid::insert(new_profile(user.id)).await?;
    Ok(())
})
.await?;`}),e.jsxs(t,{children:["Commits on ",e.jsx(s,{children:"Ok"}),", rolls back on ",e.jsx(s,{children:"Err"}),". Every query inside joins the transaction automatically — there is no handle to thread through."]})]})}function Ne(){return e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"Two files per model"}),e.jsx(g,{children:"Luxid splits a model in two, and the split matters:"}),e.jsxs(x,{children:[e.jsxs(i,{children:[e.jsx("strong",{children:e.jsx(s,{children:"src/entities/posts.rs"})})," — the table's shape. Generated from the database by ",e.jsx(s,{children:"db:sync"}),". You do not hand-edit the field list."]},0),e.jsxs(i,{children:[e.jsx("strong",{children:e.jsx(s,{children:"src/models/post.rs"})})," — your behaviour: relations, scopes. Yours entirely."]},1)]}),e.jsx(t,{children:"Keeping them apart means resyncing after a migration can never destroy the code you wrote."}),e.jsx(r,{children:"The entity"}),e.jsx(n,{language:"rust",code:`use sea_orm::entity::prelude::*;

#[derive(Clone, Debug, PartialEq, DeriveEntityModel, serde::Serialize, luxid::Model)]
#[sea_orm(table_name = "posts")]
pub struct Model {
    // <luxid:fields>  refreshed by \`cargo luxid db:sync\`
    #[sea_orm(primary_key)]
    pub id: i64,
    pub title: String,
    pub published: bool,
    // </luxid:fields>
    #[sea_orm(ignore)]
    #[serde(flatten)]
    pub relations: luxid::Relations,
}

#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]
pub enum Relation {}

impl ActiveModelBehavior for ActiveModel {}`}),e.jsx(t,{children:"Three parts do real work:"}),e.jsxs(x,{children:[e.jsxs(i,{children:[e.jsx("strong",{children:e.jsx(s,{children:"luxid::Model"})})," gives you ",e.jsx(s,{children:"find"}),", ",e.jsx(s,{children:"query"}),", and typed columns."]},0),e.jsxs(i,{children:[e.jsx("strong",{children:"The markers"})," are what ",e.jsx(s,{children:"db:sync"})," rewrites. Nothing outside them is touched."]},1),e.jsxs(i,{children:[e.jsx("strong",{children:e.jsx(s,{children:"relations"})})," holds eager-loaded relations. It is not a column (",e.jsx(s,{children:"#[sea_orm(ignore)]"}),") and it serializes inline (",e.jsx(s,{children:"#[serde(flatten)]"}),"), so a post with its author loaded renders both together. Chapter 13."]},2)]}),e.jsx(r,{children:"The model"}),e.jsx(n,{language:"rust",code:`pub use crate::entities::posts::Model as Post;

#[luxid::model()]
impl Post {}`}),e.jsxs(t,{children:[e.jsx(s,{children:"Post"})," is an alias for the entity's ",e.jsx(s,{children:"Model"}),", so it has the columns as ordinary fields. The ",e.jsx(s,{children:"#[luxid::model()]"})," block is where relations and scopes go — chapters 13 and 14."]}),e.jsx(r,{children:"Finding rows"}),e.jsx(n,{language:"rust",code:`Post::find(id).await?           // Option<Post>
Post::find_or_fail(id).await?   // Post, or a 404
Post::all().await?              // Vec<Post>
Post::count_all().await?        // u64`}),e.jsxs(t,{children:["These come from the ",e.jsx(s,{children:"Record"})," trait, which ",e.jsx(s,{children:"#[derive(Model)]"})," implements for you. Like any Rust trait it has to be in scope to be called — ",e.jsx(s,{children:"use luxid::prelude::*;"})," brings it in, which is why every generated file starts with that line. If ",e.jsx(s,{children:"Post::find"})," does not resolve, a missing prelude import is the usual reason."]}),e.jsxs(t,{children:[e.jsx(s,{children:"find_or_fail"})," is the one you will use most, because it makes actions short:"]}),e.jsx(n,{language:"rust",code:`async fn show(ctx: HttpContext) -> Result<Response> {
    let post = Post::find_or_fail(ctx.params.get::<i64>("id")?).await?;
    ctx.response.ok(post)
}`}),e.jsxs(t,{children:["A missing row produces a ",e.jsx(s,{children:"404"})," naming the resource and id. No branching."]}),e.jsx(r,{children:"Querying"}),e.jsx(n,{language:"rust",code:`let posts = Post::query()
    .where_eq(Post::published, true)
    .order_by_desc(Post::id)
    .limit(10)
    .all()
    .await?;`}),e.jsx(d,{children:"Filtering"}),e.jsx(n,{language:"rust",code:`.where_eq(Post::published, true)
.where_ne(Post::status, "draft")
.where_gt(Post::views, 100)
.where_lt(Post::views, 1000)
.where_in(Post::status, ["published", "archived"])
.where_like(Post::title, "%rust%")
.where_null(Post::deleted_at)
.where_not_null(Post::published_at)`}),e.jsx(t,{children:"Chained conditions are combined with AND."}),e.jsx(d,{children:"Ordering and limiting"}),e.jsx(n,{language:"rust",code:`.order_by_asc(Post::title)
.order_by_desc(Post::id)
.limit(10)
.offset(20)`}),e.jsx(d,{children:"Finishing"}),e.jsx(n,{language:"rust",code:`.all().await?              // Vec<Post>
.first().await?            // Option<Post>
.first_or_fail().await?    // Post, or a 404
.count().await?            // u64
.exists().await?           // bool
.paginate(page, 20).await? // Paginated<Post>`}),e.jsx(t,{children:"Nothing runs until one of these is called."}),e.jsx(r,{children:"Typed columns catch mistakes at compile time"}),e.jsxs(t,{children:[e.jsx(s,{children:"Post::published"})," is not a string — it is a generated type that knows the column's Rust type:"]}),e.jsx(n,{language:"rust",code:`Post::query().where_eq(Post::published, true)      // ✓ compiles
Post::query().where_eq(Post::published, "yes")     // ✗ does not compile`}),e.jsxs(t,{children:["That second line is a compile error, not a runtime one. Compare with an untyped API, where ",e.jsx(s,{children:'"yes"'})," would be accepted and fail — or worse, silently match nothing — at run time."]}),e.jsxs(t,{children:["The entity's own ",e.jsx(s,{children:"Column"})," enum remains available as an escape hatch, accepting anything:"]}),e.jsx(n,{language:"rust",code:"Post::query().where_eq(posts::Column::Published, true)"}),e.jsx(t,{children:"Reach for it only when the typed form cannot express something."}),e.jsx(r,{children:"Pagination"}),e.jsx(n,{language:"rust",code:`let page = ctx.request.input::<u64>("page")?.unwrap_or(1);
let posts = Post::query().order_by_desc(Post::id).paginate(page, 20).await?;

ctx.response.ok(posts)`}),e.jsx(n,{language:"json",code:`{
  "data": [ /* ... */ ],
  "page": 1,
  "per_page": 20,
  "total": 57,
  "last_page": 3
}`}),e.jsxs(t,{children:["Pages are ",e.jsx("strong",{children:"1-based"}),", matching what people type in URLs. Nonsense input is clamped rather than fatal — ",e.jsx(s,{children:"paginate(0, 0)"})," gives you page 1 with one row per page — and asking for a page past the end returns an empty ",e.jsx(s,{children:"data"})," rather than an error."]}),e.jsx(t,{children:"In Rust:"}),e.jsx(n,{language:"rust",code:`posts.data        // Vec<Post>
posts.total       // u64
posts.last_page   // u64
posts.has_more()  // bool
posts.len()       // usize
posts.is_empty()  // bool`}),e.jsx(r,{children:"Writing rows"}),e.jsxs(t,{children:["Writes go through an ",e.jsx(s,{children:"ActiveModel"}),' — a version of the struct where each field is "set" or "unchanged".']}),e.jsx(d,{children:"Inserting"}),e.jsx(n,{language:"rust",code:`use sea_orm::ActiveValue::Set;

use crate::entities::posts;

let post = luxid::insert(posts::ActiveModel {
    title: Set("Hello".to_owned()),
    published: Set(false),
    ..Default::default()
})
.await?;`}),e.jsxs(t,{children:[e.jsx(s,{children:"..Default::default()"})," leaves everything else unset — including ",e.jsx(s,{children:"id"}),", which the database assigns. The returned value is the stored row, with its id."]}),e.jsx(d,{children:"Updating"}),e.jsx(n,{language:"rust",code:`use sea_orm::IntoActiveModel;

let post = Post::find_or_fail(id).await?;

let mut active = post.into_active_model();
active.title = Set("A better title".to_owned());

let post = luxid::update(active).await?;`}),e.jsxs(t,{children:["Only the fields you ",e.jsx(s,{children:"Set"})," are written."]}),e.jsx(d,{children:"Deleting"}),e.jsx(n,{language:"rust",code:`use crate::entities::posts::Entity as Posts;

let removed: bool = luxid::delete_by_id::<Posts>(id).await?;`}),e.jsx(t,{children:"Returns whether anything was removed — deleting a row that is already gone is not an error."}),e.jsx(d,{children:"Hooks run on writes"}),e.jsxs(t,{children:[e.jsx(s,{children:"insert"})," and ",e.jsx(s,{children:"update"})," run the model's lifecycle hooks (chapter 14). There is also ",e.jsx(s,{children:"luxid::insert_without_hooks"}),", named for what it costs you — for seeders and fixtures where hooks would be wrong. Never reach for it in application code: a hook that quietly does not fire is how an unhashed password reaches the database."]}),e.jsx(r,{children:"A complete controller"}),e.jsx(n,{language:"rust",code:`use luxid::prelude::*;
use sea_orm::ActiveValue::Set;
use serde_json::Value;

use crate::entities::posts;
use crate::models::post::Post;

pub struct PostsController;

#[luxid::controller]
impl PostsController {
    async fn index(ctx: HttpContext) -> Result<Response> {
        let page = ctx.request.input::<u64>("page")?.unwrap_or(1);

        let posts = Post::query()
            .where_eq(Post::published, true)
            .order_by_desc(Post::id)
            .paginate(page, 20)
            .await?;

        ctx.response.ok(posts)
    }

    async fn show(ctx: HttpContext) -> Result<Response> {
        ctx.response.ok(Post::find_or_fail(ctx.params.get::<i64>("id")?).await?)
    }

    async fn store(ctx: HttpContext) -> Result<Response> {
        let body: Value = ctx.request.body_json()?;
        let title = body.get("title").and_then(Value::as_str).unwrap_or_default();

        let post = luxid::insert(posts::ActiveModel {
            title: Set(title.to_owned()),
            published: Set(false),
            ..Default::default()
        })
        .await?;

        ctx.response.created(post)
    }

    async fn destroy(ctx: HttpContext) -> Result<Response> {
        let id: i64 = ctx.params.get("id")?;
        Post::find_or_fail(id).await?;

        luxid::delete_by_id::<posts::Entity>(id).await?;
        ctx.response.no_content()
    }
}`}),e.jsxs(t,{children:[e.jsx(s,{children:"store"})," reads the body by hand there, which chapter 15 replaces with something much better."]})]})}function Oe(){return e.jsxs(e.Fragment,{children:[e.jsx(g,{children:"Rows reference other rows: a post has an author, a user has many posts. This chapter covers declaring those links, loading them efficiently, and the mistake that makes web applications slow."}),e.jsx(r,{children:"The N+1 problem"}),e.jsx(t,{children:"Say you list twenty posts and show each author's name. The naive approach:"}),e.jsx(n,{language:"text",code:`SELECT * FROM posts LIMIT 20          -- 1 query
SELECT * FROM users WHERE id = 1      -- then one per post
SELECT * FROM users WHERE id = 2
... eighteen more`}),e.jsxs(t,{children:["Twenty-one queries for twenty posts. At a hundred posts it is a hundred and one. This is the ",e.jsx("strong",{children:"N+1 problem"}),", and it is the single most common cause of slow endpoints in every framework."]}),e.jsxs(t,{children:["The fix is to fetch all the authors in one query. Luxid calls that ",e.jsx("strong",{children:"eager loading"}),", and — importantly — it makes forgetting to do so an error rather than a slow page."]}),e.jsx(r,{children:"Declaring relations"}),e.jsxs(t,{children:["In ",e.jsx(s,{children:"src/models/post.rs"}),":"]}),e.jsx(n,{language:"rust",code:`pub use crate::entities::posts::Model as Post;

use crate::models::user::User;

#[luxid::model(belongs_to(author = User, fk = "user_id"))]
impl Post {}`}),e.jsxs(t,{children:["And the other direction, in ",e.jsx(s,{children:"src/models/user.rs"}),":"]}),e.jsx(n,{language:"rust",code:`pub use crate::entities::users::Model as User;

use crate::models::post::Post;

#[luxid::model(has_many(posts = Post, fk = "user_id"))]
impl User {}`}),e.jsxs(t,{children:["Read those as sentences: ",e.jsxs("em",{children:["a post belongs to an author, found via the ",e.jsx(s,{children:"user_id"})," column"]}),"; ",e.jsxs("em",{children:["a user has many posts, found via ",e.jsx(s,{children:"posts.user_id"})]}),"."]}),e.jsx(d,{children:"The three kinds"}),e.jsx(n,{language:"rust",code:`#[luxid::model(
    has_many(posts = Post, fk = "user_id"),        // one user → many posts
    has_one(profile = Profile, fk = "user_id"),    // one user → one profile
    belongs_to(team = Team),                       // this row holds team_id
)]
impl User {}`}),e.jsxs(t,{children:[e.jsx("strong",{children:e.jsx(s,{children:"has_many"})})," and ",e.jsx("strong",{children:e.jsx(s,{children:"has_one"})})," — the ",e.jsx("em",{children:"other"})," table holds the foreign key, so you must name it with ",e.jsx(s,{children:"fk"}),"."]}),e.jsxs(t,{children:[e.jsx("strong",{children:e.jsx(s,{children:"belongs_to"})})," — ",e.jsx("em",{children:"this"})," table holds it, and the name is inferred from the relation: ",e.jsx(s,{children:"belongs_to(team = Team)"})," looks for ",e.jsx(s,{children:"team_id"}),". Override when it differs:"]}),e.jsx(n,{language:"rust",code:'belongs_to(author = User, fk = "user_id")'}),e.jsxs(t,{children:["Both sides accept ",e.jsx(s,{children:"local_key"})," when the joined column is not ",e.jsx(s,{children:"id"}),"."]}),e.jsx(r,{children:"Loading and reading them"}),e.jsx(n,{language:"rust",code:`let posts = Post::query().with("author").paginate(1, 20).await?;

for post in &posts.data {
    let author = post.author()?;      // Option<&User>
}`}),e.jsx(n,{language:"rust",code:`let users = User::query().with("posts").all().await?;

for user in &users {
    let posts = user.posts()?;        // &[Post]
}`}),e.jsxs(t,{children:["Each relation generates a ",e.jsx("strong",{children:"method named after it"}),". That is why two relations pointing at the same model stay unambiguous:"]}),e.jsx(n,{language:"rust",code:`#[luxid::model(
    belongs_to(author = User, fk = "author_id"),
    belongs_to(editor = User, fk = "editor_id"),
)]
impl Post {}`}),e.jsx(n,{language:"rust",code:`post.author()?    // Option<&User>
post.editor()?    // Option<&User>`}),e.jsx(t,{children:"Load several at once:"}),e.jsx(n,{language:"rust",code:'Post::query().with("author").with("comments").all().await?'}),e.jsx(r,{children:"One query per relation, whatever the page size"}),e.jsxs(t,{children:[e.jsx(s,{children:'.with("author")'})," on twenty posts issues ",e.jsx("strong",{children:"one"})," query for the authors:"]}),e.jsx(n,{language:"text",code:`SELECT * FROM posts LIMIT 20
SELECT * FROM users WHERE id IN (1, 2, 3)`}),e.jsx(t,{children:"Two queries, not twenty-one. Duplicate keys are collapsed first, so a hundred posts by three authors fetch three rows."}),e.jsx(r,{children:"Relations serialize with the model"}),e.jsx(t,{children:"A loaded relation appears in the JSON alongside the columns:"}),e.jsx(n,{language:"rust",code:`let post = Post::query().with("author").first_or_fail().await?;
ctx.response.ok(post)`}),e.jsx(n,{language:"json",code:`{
  "id": 1,
  "title": "Hello",
  "user_id": 7,
  "author": { "id": 7, "name": "Ada" }
}`}),e.jsxs(t,{children:["A model with nothing loaded renders no relation keys at all — you never get ",e.jsx(s,{children:'"author": null'})," for a relation you simply did not ask for."]}),e.jsx(r,{children:"Forgetting to load is an error"}),e.jsx(t,{children:"This is the part that saves you."}),e.jsx(n,{language:"rust",code:`let posts = Post::query().all().await?;   // no .with("author")
let author = posts[0].author()?;          // ← Err`}),e.jsx(n,{language:"text",code:'the `author` relation of `Post` was not loaded.\nAdd `.with("author")` to the query, or call\n`luxid::set_strict_relations(false)` to read unloaded relations as empty.'}),e.jsxs(t,{children:["The message names the exact fix. And because it is an error rather than a silent extra query, ",e.jsx("strong",{children:"an N+1 becomes a failing test"})," instead of a production slowdown."]}),e.jsxs(t,{children:["This is on in development and off in release, controlled by ",e.jsx(s,{children:"luxid.toml"}),":"]}),e.jsx(n,{language:"toml",code:`[database]
strict_relations = true`}),e.jsx(t,{children:"Leave it on in tests. That is where it earns its keep."}),e.jsxs(t,{children:["A parent with no children is ",e.jsx("em",{children:"loaded and empty"}),", not unloaded — a user with zero posts gives you ",e.jsx(s,{children:"[]"}),", not an error. Only genuinely forgetting to load trips it."]}),e.jsx(r,{children:"A misspelled relation says what exists"}),e.jsx(n,{language:"rust",code:'Post::query().with("auther").all().await?'}),e.jsx(n,{language:"text",code:"`Post` has no relation `auther`. Declared relations: [author, comments]."}),e.jsx(r,{children:"Current limits"}),e.jsx(t,{children:"Two things to know before you design around this:"}),e.jsxs(t,{children:[e.jsx("strong",{children:"Eager paths are single-level."})," ",e.jsx(s,{children:'.with("posts.comments")'})," does not work yet — it reports the relation as undeclared. Load one level, then query the second."]}),e.jsxs(t,{children:[e.jsxs("strong",{children:[e.jsx(s,{children:".with()"})," needs a declared relation."]})," A model whose ",e.jsx(s,{children:"#[luxid::model()]"})," block declares none cannot be passed to ",e.jsx(s,{children:".with()"})," at all — that is a compile error, not a runtime surprise."]}),e.jsx(r,{children:"A worked example"}),e.jsx(n,{language:"rust",code:`// src/models/user.rs
pub use crate::entities::users::Model as User;

use crate::models::post::Post;

#[luxid::model(has_many(posts = Post, fk = "user_id"))]
impl User {}`}),e.jsx(n,{language:"rust",code:`// src/controllers/users_controller.rs
async fn show(ctx: HttpContext) -> Result<Response> {
    let id: i64 = ctx.params.get("id")?;

    let user = User::query()
        .where_eq(User::id, id)
        .with("posts")
        .first_or_fail()
        .await?;

    ctx.response.ok(user)
}`}),e.jsx(n,{language:"json",code:`{
  "id": 7,
  "name": "Ada",
  "posts": [
    { "id": 1, "title": "Hello", "user_id": 7 },
    { "id": 4, "title": "Again", "user_id": 7 }
  ]
}`}),e.jsx(t,{children:"Two queries, one endpoint, and the relation is impossible to forget without the tests telling you."})]})}function Me(){return e.jsxs(e.Fragment,{children:[e.jsxs(g,{children:["Two ways to put behaviour on a model: ",e.jsx("strong",{children:"scopes"})," name a reusable piece of a query, ",e.jsx("strong",{children:"hooks"})," run automatically around writes."]}),e.jsx(r,{children:"Scopes"}),e.jsxs(t,{children:["You will write ",e.jsx(s,{children:"where_eq(Post::published, true)"}),' in a dozen places, and one day change what "published" means. A scope names it once.']}),e.jsx(n,{language:"rust",code:`// src/models/post.rs
pub use crate::entities::posts::Model as Post;

use luxid::prelude::*;
use luxid::Query;

use crate::entities::posts;

#[luxid::model()]
impl Post {
    #[scope]
    fn published(query: Query<posts::Entity>) -> Query<posts::Entity> {
        query.where_eq(Post::published, true)
    }
}`}),e.jsx(t,{children:"A scope takes the query, returns the query. That is all."}),e.jsx(d,{children:"Two ways to call it"}),e.jsx(n,{language:"rust",code:"Post::published().all().await?"}),e.jsx(t,{children:"An associated function on the model that starts a query. Needs no import."}),e.jsx(n,{language:"rust",code:`use crate::models::post::PostScopes;

Post::query().where_eq(Post::user_id, id).published().all().await?`}),e.jsxs(t,{children:["Mid-chain, which needs the generated ",e.jsx(s,{children:"PostScopes"})," trait in scope. The trait is generated alongside the impl block, so it lives in the same module as your model — ",e.jsx(s,{children:"crate::models::post::PostScopes"}),", not in the entity module."]}),e.jsxs(t,{children:["That import is the one thing people get wrong. If ",e.jsx(s,{children:".published()"})," does not resolve, this is why."]}),e.jsx(d,{children:"Scopes take arguments"}),e.jsx(n,{language:"rust",code:`#[scope]
fn in_team(query: Query<posts::Entity>, team_id: i64) -> Query<posts::Entity> {
    query.where_eq(Post::team_id, team_id)
}

#[scope]
fn titled_like(query: Query<posts::Entity>, pattern: &str) -> Query<posts::Entity> {
    query.where_like(Post::title, pattern)
}`}),e.jsx(n,{language:"rust",code:`Post::in_team(3).all().await?;
Post::titled_like("%rust%").all().await?;`}),e.jsx(d,{children:"They compose"}),e.jsx(t,{children:"With everything else, in any order:"}),e.jsx(n,{language:"rust",code:`Post::published()
    .in_team(3)
    .with("author")
    .order_by_desc(Post::id)
    .paginate(1, 20)
    .await?`}),e.jsx(d,{children:"A scope may not share a name with a column"}),e.jsx(t,{children:"Both become associated items on the model, so this collides:"}),e.jsx(n,{language:"rust",code:`pub done: bool,          // gives you the column \`Todo::done\`

#[scope]
fn done(query: ...)      // ✗ duplicate definition`}),e.jsx(n,{language:"text",code:"error[E0592]: duplicate definitions with name `done`"}),e.jsxs(t,{children:["Name the scope for the ",e.jsx("em",{children:"filter"})," rather than the field — ",e.jsx(s,{children:"completed"}),", ",e.jsx(s,{children:"outstanding"}),", ",e.jsx(s,{children:"visible"})," — which usually reads better anyway."]}),e.jsx(d,{children:"Ordinary functions are untouched"}),e.jsxs(t,{children:["Anything in the block without ",e.jsx(s,{children:"#[scope]"})," stays exactly as written:"]}),e.jsx(n,{language:"rust",code:`#[luxid::model()]
impl Post {
    #[scope]
    fn published(query: Query<posts::Entity>) -> Query<posts::Entity> {
        query.where_eq(Post::published, true)
    }

    // Not a scope. A plain method.
    pub fn excerpt(&self) -> String {
        self.title.chars().take(40).collect()
    }
}`}),e.jsx(r,{children:"Hooks"}),e.jsx(t,{children:"A hook runs automatically when a row is written. The classic use is hashing a password so it can never be stored in plain text by accident."}),e.jsxs(t,{children:["Hooks are declared ",e.jsx("strong",{children:"on the derive"}),", and their functions live in a plain ",e.jsx(s,{children:"impl"}),":"]}),e.jsx(n,{language:"rust",code:`// src/entities/users.rs
use sea_orm::entity::prelude::*;

#[derive(Clone, Debug, PartialEq, DeriveEntityModel, serde::Serialize, luxid::Model)]
#[luxid(before_create = Self::hash_password)]
#[sea_orm(table_name = "users")]
pub struct Model {
    // <luxid:fields>
    #[sea_orm(primary_key)]
    pub id: i64,
    pub email: String,
    pub password: String,
    // </luxid:fields>
    #[sea_orm(ignore)]
    #[serde(flatten)]
    pub relations: luxid::Relations,
}

impl Model {
    async fn hash_password(active: &mut ActiveModel) -> luxid::Result<()> {
        if let sea_orm::ActiveValue::Set(password) = &active.password {
            active.password = sea_orm::ActiveValue::Set(luxid::Hash::make(password)?);
        }
        Ok(())
    }
}

#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]
pub enum Relation {}

impl ActiveModelBehavior for ActiveModel {}`}),e.jsx(t,{children:"Now no code path can insert an unhashed password. Not the controller, not a seeder, not a test."}),e.jsx(d,{children:"The six hook points"}),e.jsx(m,{headers:["Hook","Receives","When"],rows:[[e.jsx("span",{children:e.jsx(s,{children:"before_save"})},0),e.jsx("span",{children:e.jsx(s,{children:"&mut ActiveModel"})},1),e.jsx("span",{children:"before any write"},2)],[e.jsx("span",{children:e.jsx(s,{children:"before_create"})},0),e.jsx("span",{children:e.jsx(s,{children:"&mut ActiveModel"})},1),e.jsx("span",{children:"before an insert"},2)],[e.jsx("span",{children:e.jsx(s,{children:"before_update"})},0),e.jsx("span",{children:e.jsx(s,{children:"&mut ActiveModel"})},1),e.jsx("span",{children:"before an update"},2)],[e.jsx("span",{children:e.jsx(s,{children:"after_create"})},0),e.jsx("span",{children:e.jsx(s,{children:"&Model"})},1),e.jsx("span",{children:"after an insert"},2)],[e.jsx("span",{children:e.jsx(s,{children:"after_update"})},0),e.jsx("span",{children:e.jsx(s,{children:"&Model"})},1),e.jsx("span",{children:"after an update"},2)],[e.jsx("span",{children:e.jsx(s,{children:"after_save"})},0),e.jsx("span",{children:e.jsx(s,{children:"&Model"})},1),e.jsx("span",{children:"after any write"},2)]]}),e.jsx(t,{children:"Order on create:"}),e.jsx(n,{language:"text",code:"before_save → before_create → INSERT → after_create → after_save"}),e.jsx(t,{children:"Update mirrors it. Declare several at once:"}),e.jsx(n,{language:"rust",code:`#[luxid(
    before_save = Self::stamp,
    before_create = Self::hash_password,
    after_create = Self::send_welcome,
)]`}),e.jsxs(d,{children:[e.jsx(s,{children:"before"})," hooks can abort the write"]}),e.jsxs(t,{children:["Return an error and nothing is written, and no ",e.jsx(s,{children:"after"})," hook runs:"]}),e.jsx(n,{language:"rust",code:`async fn reject_reserved(active: &mut ActiveModel) -> luxid::Result<()> {
    if let sea_orm::ActiveValue::Set(name) = &active.name
        && name == "admin"
    {
        return Err(luxid::Error::Conflict("that name is reserved".into()));
    }
    Ok(())
}`}),e.jsx(d,{children:"Why hooks are declared on the derive"}),e.jsxs(t,{children:["It looks like it would be nicer to write ",e.jsx(s,{children:"#[before_save]"})," above the function, the way scopes work. There is a reason it does not."]}),e.jsxs(t,{children:[e.jsx(s,{children:"luxid::insert"})," and ",e.jsx(s,{children:"luxid::update"})," ",e.jsx("em",{children:"require"})," the hooks trait, so hooks always run on the ordinary write path. A hook that silently fails to fire is not an inconvenience — it is an unhashed password in your database. Requiring the trait means every model must implement it, which means the derive must generate it, which means the derive has to know which hooks exist."]}),e.jsx(t,{children:"The cost is the function name appearing twice. The benefit is that there is no way to write a model whose hooks quietly do not run."}),e.jsx(d,{children:"The escape hatch"}),e.jsx(n,{language:"rust",code:"luxid::insert_without_hooks(active).await?"}),e.jsx(t,{children:"Named for what it costs you. Use it in seeders and fixtures where hooks would be wrong — never in application code."}),e.jsx(r,{children:"Which to use"}),e.jsx(m,{headers:["You want","Use"],rows:[[e.jsx("span",{children:"A filter used in several places"},0),e.jsx("span",{children:"a scope"},1)],[e.jsx("span",{children:"Something derived on every save"},0),e.jsxs("span",{children:["a ",e.jsx(s,{children:"before"})," hook"]},1)],[e.jsx("span",{children:"Something to happen after a row exists"},0),e.jsxs("span",{children:["an ",e.jsx(s,{children:"after"})," hook"]},1)],[e.jsx("span",{children:"A computed value from an existing row"},0),e.jsx("span",{children:"a plain method"},1)]]})]})}function Ie(){return e.jsxs(e.Fragment,{children:[e.jsx(g,{children:"Never trust input. This chapter replaces the hand-rolled checking from chapter 12 with something declarative, and introduces the rules that make Luxid's validation unusual: ones that consult the database."}),e.jsx(r,{children:"A form request"}),e.jsx(t,{children:"A struct describing what the endpoint accepts, with the rules attached:"}),e.jsx(n,{language:"rust",code:`// src/validators/user.rs
use luxid::prelude::*;
use serde::Deserialize;

use crate::models::user::User;

#[derive(Debug, Deserialize, Validate, luxid::JsonSchema)]
pub struct StoreUser {
    #[validate(length(min = 2, max = 64))]
    pub name: String,

    #[validate(email, unique(User::email))]
    pub email: String,

    #[validate(length(min = 8))]
    pub password: String,
}`}),e.jsx(t,{children:"Use it in an action:"}),e.jsx(n,{language:"rust",code:`async fn store(ctx: HttpContext) -> Result<Response> {
    let input = ctx.request.validate::<StoreUser>().await?;

    // Past this line, \`input\` is valid. Nothing else to check.
    ctx.response.created(json!({ "name": input.name }))
}`}),e.jsxs(t,{children:["One line replaces the entire block of ",e.jsx(s,{children:"body.get(...).and_then(...)"})," from earlier. The ",e.jsx(s,{children:"?"})," turns any failure into a ",e.jsx(s,{children:"422"})," listing every problem."]}),e.jsxs(t,{children:["The ",e.jsx(s,{children:"luxid::JsonSchema"})," derive is optional and only needed if you want this type in your OpenAPI document (chapter 19)."]}),e.jsx(r,{children:"The rules"}),e.jsx(d,{children:"Length — strings"}),e.jsx(n,{language:"rust",code:`#[validate(length(min = 2))]
#[validate(length(max = 64))]
#[validate(length(min = 2, max = 64))]
#[validate(length(equal = 6))]`}),e.jsxs(t,{children:["Counted in ",e.jsx("strong",{children:"characters, not bytes"}),' — "café" is four characters, and a user counting them agrees.']}),e.jsx(d,{children:"Email"}),e.jsx(n,{language:"rust",code:"#[validate(email)]"}),e.jsx(t,{children:"A pragmatic shape check, not RFC 5322. Full compliance accepts addresses no mail system will deliver to and rejects nothing users actually type; every framework that tries ends up with a regex nobody can read. If an address must genuinely work, send a confirmation link."}),e.jsx(d,{children:"Range — numbers"}),e.jsx(n,{language:"rust",code:`#[validate(range(min = 18))]
#[validate(range(min = 18, max = 120))]`}),e.jsx(d,{children:"Custom"}),e.jsx(n,{language:"rust",code:`fn not_reserved(name: &String) -> bool {
    !matches!(name.as_str(), "admin" | "root")
}`}),e.jsx(n,{language:"rust",code:`#[validate(custom(function = not_reserved, message = "is reserved"))]
pub name: String,`}),e.jsxs(t,{children:["The function takes a reference to the field and returns ",e.jsx(s,{children:"bool"}),"."]}),e.jsx(d,{children:"Custom messages"}),e.jsx(t,{children:"Any rule accepts one:"}),e.jsx(n,{language:"rust",code:'#[validate(length(min = 8, message = "pick something longer"))]'}),e.jsx(r,{children:"Rules that hit the database"}),e.jsx(t,{children:"These are the ones no other Rust framework ships."}),e.jsx(d,{children:e.jsx(s,{children:"unique"})}),e.jsx(n,{language:"rust",code:`#[validate(email, unique(User::email))]
pub email: String,`}),e.jsxs(t,{children:["Fails with ",e.jsx("em",{children:'"has already been taken"'})," if a row already holds that value. For an update, exclude the row being edited:"]}),e.jsx(n,{language:"rust",code:`#[derive(Deserialize, Validate)]
pub struct UpdateUser {
    pub id: i64,

    #[validate(email, unique(User::email, except = "id"))]
    pub email: String,
}`}),e.jsxs(t,{children:[e.jsx(s,{children:"except"})," names a field ",e.jsx("strong",{children:"on this struct"})," holding the id to skip."]}),e.jsx(d,{children:e.jsx(s,{children:"exists"})}),e.jsx(n,{language:"rust",code:`#[validate(exists(Team::id))]
pub team_id: i64,`}),e.jsxs(t,{children:["Fails with ",e.jsx("em",{children:'"does not exist"'})," if nothing matches. Use it for foreign keys, so a bad reference becomes a clean ",e.jsx(s,{children:"422"})," rather than a database constraint error surfacing as a ",e.jsx(s,{children:"500"}),"."]}),e.jsx(r,{children:"How the two kinds interact"}),e.jsxs(t,{children:["Synchronous rules run first. Then the asynchronous ones run — ",e.jsx("strong",{children:"skipping any field that already failed"}),"."]}),e.jsx(t,{children:"That ordering matters. Send a malformed email and you get:"}),e.jsx(n,{language:"json",code:'{ "errors": { "email": ["must be a valid email address"] } }'}),e.jsx(t,{children:"not:"}),e.jsx(n,{language:"json",code:'{ "errors": { "email": ["must be a valid email address", "has already been taken"] } }'}),e.jsx(t,{children:"One mistake, one message. There is no point asking the database whether a malformed address is taken, and reporting both would be confusing."}),e.jsxs(t,{children:["Fields that passed their synchronous rules still get their database rules in the ",e.jsx("strong",{children:"same pass"}),", so a form with three database-backed rules costs one round of queries — not three requests to discover three problems."]}),e.jsx(r,{children:"Everything at once"}),e.jsx(n,{language:"rust",code:`#[derive(Deserialize, Validate)]
pub struct StoreUser {
    #[validate(length(min = 2, max = 64))]
    pub name: String,

    #[validate(email, unique(User::email))]
    pub email: String,

    #[validate(exists(Team::id))]
    pub team_id: i64,

    #[validate(range(min = 18, max = 120))]
    pub age: Option<i64>,
}`}),e.jsx(n,{language:"sh",code:`curl -X POST localhost:3000/api/users \\
  -d '{"name":"G","email":"nope","team_id":999,"age":5}'`}),e.jsx(n,{language:"json",code:`{
  "type": "https://luxid.rs/errors/validation",
  "title": "the given data was invalid",
  "status": 422,
  "errors": {
    "name": ["must be at least 2 characters"],
    "email": ["must be a valid email address"],
    "team_id": ["does not exist"],
    "age": ["must be at least 18"]
  }
}`}),e.jsx(t,{children:"Four problems, one response. A client can fix the whole form in one pass."}),e.jsx(r,{children:"Optional fields"}),e.jsxs(t,{children:["An ",e.jsx(s,{children:"Option"})," field is validated ",e.jsx("strong",{children:"only when present"}),":"]}),e.jsx(n,{language:"rust",code:`#[validate(range(min = 18, max = 120))]
pub age: Option<i64>,`}),e.jsxs(t,{children:["Absent → no rule applies. Present → the range applies. Presence itself is a different question: make the field non-",e.jsx(s,{children:"Option"})," and serde will reject a body that omits it."]}),e.jsx(r,{children:"Malformed bodies are a 400"}),e.jsx(n,{language:"sh",code:"curl -X POST localhost:3000/api/users -d 'not json at all'"}),e.jsxs(t,{children:["gives ",e.jsx(s,{children:"400"}),", not ",e.jsx(s,{children:"422"}),". A ",e.jsx(s,{children:"422"}),' says "these fields are wrong", which implies the client can fix them one at a time. A body that is not JSON is broken as a whole.']}),e.jsx(r,{children:"Where validators live"}),e.jsx(n,{language:"text",code:`src/validators/
├── mod.rs
├── user.rs      StoreUser, UpdateUser
└── post.rs      StorePost, UpdatePost`}),e.jsxs(t,{children:[e.jsx(s,{children:"luxid make:model User -a"})," generates the file with both structs and a commented-out example rule. Unlike entities and factories, validators are ",e.jsx("strong",{children:"not"})," touched by ",e.jsx(s,{children:"cargo luxid db:sync"})," — they carry no ",e.jsxs(s,{children:["<","luxid:fields",">"]})," markers, because what an endpoint accepts is a decision, not a reflection of the table."]}),e.jsx(r,{children:"Building errors by hand"}),e.jsx(t,{children:"Occasionally a rule does not fit the declarative form:"}),e.jsx(n,{language:"rust",code:`async fn store(ctx: HttpContext) -> Result<Response> {
    let input = ctx.request.validate::<StoreBooking>().await?;

    if input.ends_at <= input.starts_at {
        let mut errors = ValidationErrors::new();
        errors.add("ends_at", "must be after the start time");

        return Err(Error::Validation(errors));
    }

    // ...
}`}),e.jsx(t,{children:"The client sees the same shape either way."})]})}function He(){return e.jsxs(e.Fragment,{children:[e.jsx(g,{children:"Authentication answers *who is this?* Authorization — chapter 18 — answers *may they do this?* Keep them separate in your head; they are separate in the code."}),e.jsx(t,{children:"Luxid offers two mechanisms:"}),e.jsxs(x,{children:[e.jsxs(i,{children:[e.jsx("strong",{children:"JWT tokens"})," — for APIs, mobile clients, anything that can hold a token. This chapter."]},0),e.jsxs(i,{children:[e.jsx("strong",{children:"Sessions"})," — for browsers. Chapter 17."]},1)]}),e.jsx(r,{children:"Passwords"}),e.jsx(t,{children:"Never store a password. Store a hash."}),e.jsx(n,{language:"rust",code:`use luxid::prelude::*;

let hash = Hash::make("correct horse battery staple")?;   // store this
let ok = Hash::verify("correct horse battery staple", &hash);   // bool`}),e.jsxs(t,{children:[e.jsx(s,{children:"Hash::make"})," uses argon2id with a fresh random salt, so the same password hashes differently every time — which is the point. ",e.jsx(s,{children:"Hash::verify"})," handles the salt for you."]}),e.jsx(t,{children:"Two behaviours worth knowing:"}),e.jsxs(x,{children:[e.jsxs(i,{children:["A ",e.jsx("strong",{children:"corrupt stored hash"})," fails verification rather than erroring, so a mangled database row is indistinguishable from a wrong password."]},0),e.jsxs(i,{children:["Hashing is ",e.jsx("strong",{children:"deliberately slow"}),". That is what makes stolen hashes expensive to crack, and it is why you hash on registration and login rather than on every request."]},1)]}),e.jsx(t,{children:"The reliable way to never store plaintext is a hook (chapter 14), so no code path can bypass it."}),e.jsx(r,{children:"Tokens"}),e.jsx(t,{children:'A JSON Web Token says "the bearer is subject X" and is signed so it cannot be forged.'}),e.jsx(n,{language:"rust",code:`let jwt = Jwt::new(secret);

let identity = Identity::new("42").with_claim("role", "admin");
let token = jwt.sign(&identity)?;

let identity = jwt.verify(&token)?;
identity.subject();                       // "42"
identity.id::<i64>()?;                    // 42
identity.claim::<String>("role")?;        // Some("admin")`}),e.jsxs(t,{children:["A ",e.jsx("strong",{children:"subject"})," is who the token is for — usually a user id as a string. ",e.jsx("strong",{children:"Claims"})," are extra facts you attach."]}),e.jsx(t,{children:"Configure the signer once:"}),e.jsx(n,{language:"rust",code:`Providers::new()
    .singleton(move |_| Jwt::new(&secret).with_ttl(Duration::from_secs(3600)))`}),e.jsxs(t,{children:["The default lifetime is one hour — ",e.jsx(s,{children:"Jwt::DEFAULT_TTL"}),". Sessions, which are meant to survive a browser being closed, default to fourteen days instead; chapter 17."]}),e.jsxs(ve,{tone:"warning",children:["A token is ",e.jsx("strong",{children:"signed, not encrypted"}),". Anyone holding one can read its claims. Put identifiers and roles in there; never put anything secret."]}),e.jsx(r,{children:"Guarding routes"}),e.jsx(n,{language:"rust",code:`r.group("/api", |r| {
    r.post("/login", AuthController::login);          // public

    r.group("/", |r| {
        r.middleware(Auth::jwt());                     // everything below needs a token

        r.get("/me", MeController::show);
        r.resource("/posts", PostsController);
    });
});`}),e.jsxs(t,{children:[e.jsx(s,{children:"Auth::jwt()"})," reads the ",e.jsx(s,{children:"Authorization: Bearer …"})," header, verifies the token, and puts the identity on the context. No token, or a bad one, and the action never runs — the client gets a ",e.jsx(s,{children:"401"}),"."]}),e.jsx(t,{children:"For endpoints that render differently when signed in but allow anonymous access:"}),e.jsx(n,{language:"rust",code:'r.get("/feed", FeedController::index).middleware(Auth::optional_jwt());'}),e.jsx(r,{children:"Reading the user"}),e.jsx(n,{language:"rust",code:`async fn show(ctx: HttpContext) -> Result<Response> {
    let id: i64 = ctx.auth.id()?;                          // 401 if anonymous
    let role: Option<String> = ctx.auth.identity()?.claim("role")?;

    ctx.response.ok(json!({ "id": id, "role": role }))
}`}),e.jsx(m,{headers:["Method","Returns"],rows:[[e.jsx("span",{children:e.jsx(s,{children:"ctx.auth.check()"})},0),e.jsxs("span",{children:[e.jsx(s,{children:"bool"})," — is anyone signed in?"]},1)],[e.jsx("span",{children:e.jsxs(s,{children:["ctx.auth.id::","<","T",">","()"]})},0),e.jsxs("span",{children:["the subject, parsed. ",e.jsx(s,{children:"401"})," if anonymous"]},1)],[e.jsx("span",{children:e.jsx(s,{children:"ctx.auth.identity()"})},0),e.jsxs("span",{children:[e.jsx(s,{children:"&Identity"}),". ",e.jsx(s,{children:"401"})," if anonymous"]},1)],[e.jsx("span",{children:e.jsx(s,{children:"ctx.auth.try_identity()"})},0),e.jsxs("span",{children:[e.jsxs(s,{children:["Option","<","&Identity",">"]})," — never fails"]},1)]]}),e.jsxs(t,{children:["Use ",e.jsx(s,{children:"try_identity"})," behind ",e.jsx(s,{children:"optional_jwt"}),", and ",e.jsx(s,{children:"id"}),"/",e.jsx(s,{children:"identity"})," behind ",e.jsx(s,{children:"jwt"}),"."]}),e.jsxs(t,{children:[e.jsx(s,{children:"ctx.auth"})," carries the ",e.jsx("em",{children:"identity"}),", not the user row. To load the row:"]}),e.jsx(n,{language:"rust",code:"let user = User::find_or_fail(ctx.auth.id::<i64>()?).await?;"}),e.jsx(r,{children:"A login endpoint"}),e.jsx(n,{language:"rust",code:`use luxid::prelude::*;
use serde::Deserialize;
use serde_json::json;

use crate::models::user::User;

#[derive(Deserialize, Validate)]
pub struct Credentials {
    #[validate(email)]
    pub email: String,
    #[validate(length(min = 1))]
    pub password: String,
}

pub struct AuthController;

#[luxid::controller]
impl AuthController {
    async fn login(ctx: HttpContext) -> Result<Response> {
        let input = ctx.request.validate::<Credentials>().await?;

        let user = User::query()
            .where_eq(User::email, input.email)
            .first()
            .await?;

        // One branch for both failures: a wrong email and a wrong password must
        // be indistinguishable, or the endpoint tells attackers which addresses
        // are registered.
        let Some(user) = user.filter(|u| Hash::verify(&input.password, &u.password)) else {
            return Err(Error::Unauthorized);
        };

        let jwt = ctx.services.get::<Jwt>()?;
        let identity = Identity::new(user.id.to_string());

        ctx.response.ok(json!({ "token": jwt.sign(&identity)? }))
    }
}`}),e.jsx(t,{children:"That comment is the important part of the endpoint. It is easy to write"}),e.jsx(n,{language:"rust",code:`let user = User::query()... .first().await?.ok_or(Error::not_found("User", email))?;
if !Hash::verify(...) { return Err(Error::Unauthorized); }`}),e.jsx(t,{children:"and thereby tell anyone who asks which email addresses have accounts."}),e.jsx(r,{children:"Verification failures do not explain themselves"}),e.jsxs(t,{children:["Expired, forged, and malformed tokens all produce a byte-identical ",e.jsx(s,{children:"401"}),":"]}),e.jsx(n,{language:"json",code:'{ "type": "https://luxid.rs/errors/unauthorized", "title": "unauthenticated", "status": 401 }'}),e.jsx(t,{children:'Deliberately — a caller who can tell "expired" from "bad signature" can probe your signing key. If you need to distinguish them, do it in your logs.'}),e.jsx(r,{children:"Choosing a secret"}),e.jsx(n,{language:"sh",code:`# .env, never committed
APP_KEY=$(openssl rand -hex 32)`}),e.jsx(n,{language:"rust",code:'let secret: String = config.get("app.key")?;'}),e.jsx(t,{children:'Changing it invalidates every issued token, which is your emergency "log everyone out" switch.'}),e.jsx(r,{children:"Adding a guard of your own"}),e.jsxs(t,{children:[e.jsx(s,{children:"Auth::jwt()"})," is ordinary middleware, so an API-key or OAuth guard needs no framework release:"]}),e.jsx(n,{language:"rust",code:`pub struct ApiKey;

#[luxid::middleware]
impl ApiKey {
    async fn handle(&self, mut ctx: HttpContext, next: Next) -> Result<Response> {
        let presented = ctx.request.header("x-api-key").ok_or(Error::Unauthorized)?;
        let expected: String = ctx.config.get("app.api_key")?;

        if presented != expected {
            return Err(Error::Unauthorized);
        }

        ctx.auth.set(Identity::new("service"));
        next.run(ctx).await
    }
}`}),e.jsxs(t,{children:["Downstream actions read ",e.jsx(s,{children:"ctx.auth"})," exactly as they would behind the JWT guard."]})]})}function De(){return e.jsxs(e.Fragment,{children:[e.jsx(g,{children:"Tokens suit clients that can store one. Browsers are better served by a cookie, and that is what sessions are for."}),e.jsx(r,{children:"How it works"}),e.jsxs(t,{children:["The browser holds a cookie containing an ",e.jsx("strong",{children:"opaque id and nothing else"}),". The values live server-side in a store. So the client cannot read what is in the session, and cannot forge it."]}),e.jsx(n,{language:"text",code:`Browser                        Server
   │ ── request + cookie ────────▶ │
   │                               │ look up the id in the store
   │                               │ run the action with that session
   │ ◀───── response + cookie ──── │ save any changes`}),e.jsx(r,{children:"Setting it up"}),e.jsx(t,{children:"A store, registered like any service:"}),e.jsx(n,{language:"rust",code:`use std::sync::Arc;

Providers::new()
    .bind::<dyn SessionStore, _>(|_| Arc::new(MemoryStore::new()))`}),e.jsx(t,{children:"Then the middleware:"}),e.jsx(n,{language:"rust",code:`r.group("/", |r| {
    r.middleware(Auth::session());

    r.get("/cart", CartController::show);
    r.post("/login", AuthController::login);
});`}),e.jsxs(t,{children:["Note it goes on ",e.jsx("strong",{children:"public routes too"}),", including login — a session is how a user ",e.jsx("em",{children:"becomes"})," authenticated, so anonymous requests pass through rather than being rejected."]}),e.jsxs(t,{children:[e.jsx(s,{children:"MemoryStore"})," keeps sessions in the process. Sessions are lost on restart and are not shared between instances, so it suits a single process and tests. The ",e.jsx(s,{children:"SessionStore"})," trait is public for anything shared."]}),e.jsx(r,{children:"Reading and writing"}),e.jsx(n,{language:"rust",code:`async fn show(ctx: HttpContext) -> Result<Response> {
    let visits: u32 = ctx.session.get("visits")?.unwrap_or(0);
    ctx.session.put("visits", visits + 1)?;

    ctx.response.ok(json!({ "visits": visits }))
}`}),e.jsx(m,{headers:["Method",""],rows:[[e.jsx("span",{children:e.jsxs(s,{children:["get::","<","T",">","(key)"]})},0),e.jsx("span",{children:e.jsxs(s,{children:["Option","<","T",">"]})},1)],[e.jsx("span",{children:e.jsx(s,{children:"put(key, value)"})},0),e.jsxs("span",{children:["store anything ",e.jsx(s,{children:"Serialize"})]},1)],[e.jsx("span",{children:e.jsx(s,{children:"has(key)"})},0),e.jsx("span",{children:e.jsx(s,{children:"bool"})},1)],[e.jsx("span",{children:e.jsx(s,{children:"forget(key)"})},0),e.jsx("span",{children:"remove one value"},1)],[e.jsx("span",{children:e.jsx(s,{children:"flush()"})},0),e.jsx("span",{children:"remove all values, keep the session"},1)],[e.jsx("span",{children:e.jsx(s,{children:"destroy()"})},0),e.jsx("span",{children:"invalidate entirely"},1)],[e.jsx("span",{children:e.jsx(s,{children:"id()"})},0),e.jsx("span",{children:"the session id"},1)]]}),e.jsxs(t,{children:["Notice ",e.jsx(s,{children:"put"})," takes ",e.jsx(s,{children:"&self"}),", not ",e.jsx(s,{children:"&mut self"})," — the session is a shared handle, so you do not need ",e.jsx(s,{children:"mut ctx"}),"."]}),e.jsx(r,{children:"Logging in and out"}),e.jsx(n,{language:"rust",code:`async fn login(ctx: HttpContext) -> Result<Response> {
    let input = ctx.request.validate::<Credentials>().await?;
    let user = /* look up and verify, as in chapter 16 */;

    ctx.session.login(&Identity::new(user.id.to_string()))?;

    ctx.response.ok(json!({ "ok": true }))
}

async fn logout(ctx: HttpContext) -> Result<Response> {
    ctx.session.logout()?;
    ctx.response.no_content()
}`}),e.jsxs(t,{children:["On subsequent requests, ",e.jsx(s,{children:"Auth::session()"})," reads the session and populates ",e.jsx(s,{children:"ctx.auth"})," — so ",e.jsxs(s,{children:["ctx.auth.id::","<","i64",">","()?"]})," works exactly as it does behind the JWT guard. Your actions do not care which mechanism signed the user in."]}),e.jsxs(r,{children:["Why ",e.jsx(s,{children:"login"})," rotates the id"]}),e.jsxs(t,{children:[e.jsx(s,{children:"session.login()"})," does two things: it assigns a ",e.jsx("strong",{children:"new"})," session id, then records the subject."]}),e.jsxs(t,{children:["The rotation is not incidental. Without it, an attacker who plants a known session id in a victim's browser before they log in still holds a valid id ",e.jsx("em",{children:"afterwards"})," — a ",e.jsx("strong",{children:"session fixation"})," attack, and a complete account takeover."]}),e.jsxs(t,{children:["Rotate whenever privilege changes. ",e.jsx(s,{children:"login()"})," does it for you; ",e.jsx(s,{children:"regenerate()"})," is there if you change privileges some other way."]}),e.jsxs(t,{children:[e.jsx(s,{children:"logout()"})," destroys the store entry ",e.jsx("em",{children:"and"})," clears the cookie, so the old value is worthless even if it was captured."]}),e.jsx(r,{children:"Cookie settings"}),e.jsxs(t,{children:["Defaults are the safe ones: ",e.jsx(s,{children:"HttpOnly"})," (not readable from JavaScript), ",e.jsx(s,{children:"SameSite=Lax"}),", ",e.jsx(s,{children:"Path=/"}),", and a fourteen-day lifetime."]}),e.jsx(n,{language:"rust",code:`r.middleware(
    Auth::session()
        .secure(true)                          // HTTPS only — turn on in production
        .ttl(Duration::from_secs(60 * 60))     // one hour
        .cookie("my_app_session"),
);`}),e.jsxs(t,{children:["Turn on ",e.jsx(s,{children:"secure"})," in production. Without it the cookie travels over plain HTTP where anyone on the network can take it."]}),e.jsx(r,{children:"Failure modes"}),e.jsxs(t,{children:[e.jsx("strong",{children:"An unknown or expired cookie starts a fresh session"})," rather than failing. A stale cookie is ordinary — a restarted store, an expired entry — not an error."]}),e.jsxs(t,{children:[e.jsx("strong",{children:"Writing without the middleware is an error"}),", not a silent no-op:"]}),e.jsx(n,{language:"text",code:"no session is active on this route. Add `.middleware(Auth::session())`,\nand bind a `SessionStore` in `providers()`."}),e.jsx(t,{children:"A session write that vanished silently would be an extremely annoying bug to find."}),e.jsx(r,{children:"Sessions or tokens?"}),e.jsx(m,{headers:["","Sessions","Tokens"],rows:[[e.jsx("span",{children:"Client"},0),e.jsx("span",{children:"browsers"},1),e.jsx("span",{children:"anything"},2)],[e.jsx("span",{children:"Carried in"},0),e.jsx("span",{children:"a cookie"},1),e.jsx("span",{children:"a header"},2)],[e.jsx("span",{children:"State"},0),e.jsx("span",{children:"server-side"},1),e.jsx("span",{children:"in the token"},2)],[e.jsx("span",{children:"Revoking"},0),e.jsx("span",{children:"delete the entry"},1),e.jsx("span",{children:"wait for expiry, or keep a list"},2)],[e.jsx("span",{children:"Scaling"},0),e.jsx("span",{children:"needs a shared store"},1),e.jsx("span",{children:"stateless"},2)],[e.jsx("span",{children:"CSRF"},0),e.jsx("span",{children:"needs consideration"},1),e.jsx("span",{children:"not applicable"},2)]]}),e.jsxs(t,{children:["Building a browser app? Sessions. A mobile or third-party API? Tokens. Both? Register both guards and put them on different route groups — ",e.jsx(s,{children:"ctx.auth"})," reads the same either way."]})]})}function Ue(){return e.jsxs(e.Fragment,{children:[e.jsx(g,{children:"Authentication established *who*. Authorization decides *whether they may*."}),e.jsx(r,{children:"A policy is a function"}),e.jsx(t,{children:"No trait to implement, no registry to populate:"}),e.jsx(n,{language:"rust",code:`// src/policies/post_policy.rs
use luxid::prelude::*;

use crate::models::post::Post;

pub struct PostPolicy;

impl PostPolicy {
    pub fn view(_auth: &Auth, _post: &Post) -> bool {
        true
    }

    pub fn update(auth: &Auth, post: &Post) -> bool {
        auth.try_identity()
            .and_then(|identity| identity.id::<i64>().ok())
            .is_some_and(|id| id == post.user_id)
    }

    pub fn delete(auth: &Auth, post: &Post) -> bool {
        Self::update(auth, post)
    }
}`}),e.jsxs(t,{children:["The signature is always ",e.jsxs(s,{children:["(&Auth, &T) -",">"," bool"]}),". Anything matching it is a policy."]}),e.jsx(r,{children:"Enforcing it"}),e.jsx(n,{language:"rust",code:`async fn update(ctx: HttpContext) -> Result<Response> {
    let post = Post::find_or_fail(ctx.params.get::<i64>("id")?).await?;

    ctx.authorize(PostPolicy::update, &post)?;

    // Past this line, they are allowed.
}`}),e.jsxs(t,{children:["Denied means ",e.jsx(s,{children:"403"}),", through the ordinary error path. One line, no branching."]}),e.jsxs(t,{children:["Note the policy is passed ",e.jsx("strong",{children:"without parentheses"})," — you are naming the function, not calling it."]}),e.jsx(r,{children:"Asking without enforcing"}),e.jsx(n,{language:"rust",code:`async fn show(ctx: HttpContext) -> Result<Response> {
    let post = Post::find_or_fail(ctx.params.get::<i64>("id")?).await?;

    let can_edit = ctx.can(PostPolicy::update, &post);

    ctx.response.ok(json!({ "post": post, "can_edit": can_edit }))
}`}),e.jsxs(t,{children:[e.jsx(s,{children:"can"})," returns a ",e.jsx(s,{children:"bool"})," and never fails the request — for telling a client which buttons to render."]}),e.jsxs(t,{children:["Remember the move-order rule from chapter 05: bind ",e.jsx(s,{children:"can_edit"})," before ",e.jsx(s,{children:"ctx.response.ok(...)"}),", since that call consumes part of ",e.jsx(s,{children:"ctx"}),"."]}),e.jsx(r,{children:"Order matters: 404 before 403"}),e.jsx(t,{children:"Load the row first, authorize second:"}),e.jsx(n,{language:"rust",code:`let post = Post::find_or_fail(id).await?;   // 404 if it does not exist
ctx.authorize(PostPolicy::update, &post)?;  // 403 if it does but they may not`}),e.jsxs(t,{children:["Reversing that is not possible here — you need the row to decide — but the principle generalises: ",e.jsx("em",{children:"existence"})," is checked before ",e.jsx("em",{children:"permission"}),"."]}),e.jsxs(t,{children:["There is a subtlety worth naming. Returning ",e.jsx(s,{children:"403"})," for a row that exists tells the caller it exists. For most applications that is fine. For something where the mere existence of a record is sensitive, return a ",e.jsx(s,{children:"404"})," for both cases instead:"]}),e.jsx(n,{language:"rust",code:`let post = Post::find(id).await?;

let Some(post) = post.filter(|p| ctx.can(PostPolicy::view, p)) else {
    return Err(Error::not_found("Post", id));
};`}),e.jsx(t,{children:'Now "does not exist" and "not yours" are indistinguishable.'}),e.jsxs(r,{children:["Why ",e.jsx(s,{children:"bool"})," and not ",e.jsx(s,{children:"Result"})]}),e.jsxs(t,{children:["A policy answers a permission question. Returning ",e.jsx(s,{children:"Result"})," would invite putting ",e.jsx("em",{children:"other"})," failures in there — a missing row, a database error — and those are not permission decisions. A missing row is a ",e.jsx(s,{children:"404"})," and belongs before the check."]}),e.jsxs(t,{children:["Keeping policies to ",e.jsx(s,{children:"bool"})," means they stay pure, testable without a database, and obviously correct at a glance:"]}),e.jsx(n,{language:"rust",code:`#[test]
fn only_the_owner_may_update() {
    let mut auth = Auth::default();
    auth.set(Identity::new("1"));

    let mine = Post { id: 1, user_id: 1, /* ... */ };
    let theirs = Post { id: 2, user_id: 2, /* ... */ };

    assert!(PostPolicy::update(&auth, &mine));
    assert!(!PostPolicy::update(&auth, &theirs));
}`}),e.jsx(t,{children:"No HTTP, no database, no async."}),e.jsx(r,{children:"Roles"}),e.jsx(t,{children:"Policies read whatever is on the identity, so roles come from claims:"}),e.jsx(n,{language:"rust",code:`pub fn delete(auth: &Auth, post: &Post) -> bool {
    let Some(identity) = auth.try_identity() else {
        return false;
    };

    let is_admin = identity
        .claim::<String>("role")
        .ok()
        .flatten()
        .is_some_and(|role| role == "admin");

    is_admin || identity.id::<i64>().is_ok_and(|id| id == post.user_id)
}`}),e.jsx(t,{children:"Put the role in the token when you issue it:"}),e.jsx(n,{language:"rust",code:'let identity = Identity::new(user.id.to_string()).with_claim("role", user.role);'}),e.jsx(t,{children:"Claims travel in the token, so a role change does not take effect until the next token is issued. For roles that must revoke immediately, read the user row instead."}),e.jsx(r,{children:"Policies for a whole class of thing"}),e.jsx(t,{children:"Not every policy needs a model:"}),e.jsx(n,{language:"rust",code:`pub struct AdminPolicy;

impl AdminPolicy {
    pub fn access(auth: &Auth, _: &()) -> bool {
        auth.try_identity()
            .and_then(|i| i.claim::<String>("role").ok().flatten())
            .is_some_and(|role| role == "admin")
    }
}`}),e.jsx(n,{language:"rust",code:"ctx.authorize(AdminPolicy::access, &())?;"}),e.jsx(t,{children:"Though when it applies to every route in a section, middleware is tidier:"}),e.jsx(n,{language:"rust",code:`r.group("/admin", |r| {
    r.middleware(Auth::jwt());
    r.middleware(RequireRole::new("admin"));
    // ...
});`}),e.jsx(r,{children:"Where authorization goes"}),e.jsx(m,{headers:["Check","Where"],rows:[[e.jsx("span",{children:'"must be signed in"'},0),e.jsxs("span",{children:["middleware (",e.jsx(s,{children:"Auth::jwt()"}),")"]},1)],[e.jsx("span",{children:'"must have this role"'},0),e.jsx("span",{children:"middleware"},1)],[e.jsx("span",{children:'"must own *this row*"'},0),e.jsx("span",{children:"a policy, in the action"},1)]]}),e.jsx(t,{children:"The rule of thumb: if the check needs the specific record, it belongs in the action after you have loaded it. Otherwise it belongs in middleware, where it runs once and protects everything below."})]})}function Le(){return e.jsxs(e.Fragment,{children:[e.jsx(g,{children:"An OpenAPI document describes your API in a format tools understand: Swagger UI, Postman, client generators for a dozen languages. Luxid builds one from your code."}),e.jsx(r,{children:"Getting one"}),e.jsx(n,{language:"sh",code:`cargo luxid openapi > openapi.json
cargo luxid openapi --pretty --title "Blog API" --version 1.0.0`}),e.jsx(t,{children:"Every registered route appears, whether or not you documented it."}),e.jsx(r,{children:"Documenting an action"}),e.jsx(n,{language:"rust",code:`#[luxid::controller]
impl PostsController {
    #[openapi(summary = "List posts", tag = "posts", ok = PageOfPosts)]
    async fn index(ctx: HttpContext) -> Result<Response> { /* ... */ }

    #[openapi(tag = "posts", ok = PostView, errors = [404])]
    async fn show(ctx: HttpContext) -> Result<Response> { /* ... */ }

    #[openapi(body = StorePost, created = PostView, errors = [422, 409])]
    async fn store(ctx: HttpContext) -> Result<Response> { /* ... */ }

    #[openapi(no_content, errors = [404])]
    async fn destroy(ctx: HttpContext) -> Result<Response> { /* ... */ }
}`}),e.jsx(m,{headers:["Key","Meaning"],rows:[[e.jsx("span",{children:e.jsx(s,{children:'summary = "..."'})},0),e.jsx("span",{children:"One-line description"},1)],[e.jsx("span",{children:e.jsx(s,{children:'tag = "..."'})},0),e.jsx("span",{children:"Groups related endpoints"},1)],[e.jsx("span",{children:e.jsx(s,{children:"body = T"})},0),e.jsx("span",{children:"Request body schema"},1)],[e.jsx("span",{children:e.jsx(s,{children:"ok = T"})},0),e.jsx("span",{children:"200 with this schema"},1)],[e.jsx("span",{children:e.jsx(s,{children:"created = T"})},0),e.jsx("span",{children:"201"},1)],[e.jsx("span",{children:e.jsx(s,{children:"accepted = T"})},0),e.jsx("span",{children:"202"},1)],[e.jsx("span",{children:e.jsx(s,{children:"no_content"})},0),e.jsx("span",{children:"204, no body"},1)],[e.jsx("span",{children:e.jsx(s,{children:"errors = [422, 404]"})},0),e.jsx("span",{children:"Which failures this endpoint produces"},1)]]}),e.jsxs(r,{children:["Types need ",e.jsx(s,{children:"JsonSchema"})]}),e.jsxs(t,{children:["Any type named in ",e.jsx(s,{children:"body"}),", ",e.jsx(s,{children:"ok"}),", ",e.jsx(s,{children:"created"})," or ",e.jsx(s,{children:"accepted"})," must derive it:"]}),e.jsx(n,{language:"rust",code:`use luxid::JsonSchema;
use serde::Serialize;

#[derive(Serialize, JsonSchema)]
pub struct PostView {
    pub id: i64,
    pub title: String,
}`}),e.jsxs(t,{children:["Generated form requests already derive it. Note that a generated app declares ",e.jsx(s,{children:"schemars"})," directly in its ",e.jsx(s,{children:"Cargo.toml"})," — the derive emits ",e.jsx(s,{children:"schemars::"})," paths, so re-exporting it through ",e.jsx(s,{children:"luxid"})," is not enough for ",e.jsx(s,{children:"#[derive(..)]"})," to resolve. ",e.jsx(s,{children:"luxid new"})," sets this up for you."]}),e.jsx(r,{children:"What you get for free"}),e.jsxs(t,{children:[e.jsx("strong",{children:"Error schemas."})," You write ",e.jsx(s,{children:"errors = [422]"}),"; the document gets a ",e.jsx(s,{children:"application/problem+json"})," response referencing a shared ",e.jsx(s,{children:"Problem"})," component, with the field-error map described. You never write that shape."]}),e.jsxs(t,{children:[e.jsx("strong",{children:"Path parameters."})," ",e.jsxs(s,{children:["/posts/","{","id","}"]})," produces the ",e.jsx(s,{children:"id"})," parameter automatically, derived from the route pattern — so it can never disagree with the route."]}),e.jsxs(t,{children:[e.jsx("strong",{children:"Operation ids."})," Each operation is identified as ",e.jsx(s,{children:"PostsController::show"}),", which client generators turn into method names."]}),e.jsx(r,{children:"Undocumented actions still appear"}),e.jsx(t,{children:"An action with no attribute is present but bare:"}),e.jsx(n,{language:"json",code:`"/api/health": {
  "get": {
    "operationId": "HealthController::show",
    "responses": { "default": { "description": "Undocumented" } }
  }
}`}),e.jsx(t,{children:"Omitting it would make the document quietly lie about what your API exposes. A marked-undocumented endpoint is honest; a missing one is not."}),e.jsx(r,{children:"OpenAPI 3.1"}),e.jsxs(t,{children:["Luxid emits 3.1 rather than 3.0 because ",e.jsxs("strong",{children:["3.1 ",e.jsx("em",{children:"is"})," JSON Schema"]}),". Schemas generated by ",e.jsx(s,{children:"schemars"})," drop in unchanged rather than being translated into 3.0's near-miss dialect."]}),e.jsx(t,{children:"Most modern tooling handles 3.1. If yours does not, a converter is easier than degrading the schemas."}),e.jsx(r,{children:"Serving the document"}),e.jsx(n,{language:"rust",code:`pub struct DocsController;

#[luxid::controller]
impl DocsController {
    async fn openapi(ctx: HttpContext) -> Result<Response> {
        // Embedded at build time by \`cargo luxid openapi > openapi.json\`.
        ctx.response
            .header("content-type", "application/json")
            .text(include_str!("../../openapi.json"))
    }
}`}),e.jsx(t,{children:"Generating it in CI and committing the result also gives you a reviewable diff when your API surface changes — which is often exactly the review you want."}),e.jsx(r,{children:"Keeping it honest"}),e.jsx(t,{children:"The attribute restates types the body already mentions, so it can drift. Two habits help:"}),e.jsxs(x,{children:[e.jsxs(i,{children:[e.jsx("strong",{children:"Regenerate in CI"})," and fail if ",e.jsx(s,{children:"openapi.json"})," changed without being committed. A drifted document is worse than none."]},0),e.jsxs(i,{children:[e.jsx("strong",{children:"Document errors as you add them."})," When you add a ",e.jsx(s,{children:"Conflict"})," to an action, add ",e.jsx(s,{children:"409"})," to its ",e.jsx(s,{children:"errors"})," list in the same commit."]},1)]}),e.jsx(r,{children:"Why the route table, not a registry"}),e.jsxs(t,{children:["Some frameworks collect documentation into a global registry at startup, using linker tricks. Luxid walks the ",e.jsx("strong",{children:"route table"})," instead — the same explicit registration a request goes through."]}),e.jsxs(t,{children:["The practical consequence: a route missing from your document is a route missing from ",e.jsx(s,{children:"cargo luxid routes"}),". There is no third place where an endpoint might be hiding."]})]})}function Fe(){return e.jsxs(e.Fragment,{children:[e.jsxs(g,{children:["Luxid tests go through the ",e.jsx("strong",{children:"real"})," service: the same routing, middleware, container, and adapter that production uses. A passing test therefore means the endpoint works, not that a parallel code path works."]}),e.jsx(r,{children:"The shape"}),e.jsx(n,{language:"rust",code:`// tests/posts.rs
use luxid::prelude::*;
use luxid_testing::TestApp;
use serde_json::json;

#[luxid::test(db = crate::support::database)]
async fn the_index_is_paginated(db: Db) -> Result<()> {
    app(db)
        .get("/api/posts")
        .send()
        .await
        .assert_ok()
        .assert_json_count("data", 2)
        .assert_json_path("data.0.title", "First");

    Ok(())
}`}),e.jsxs(t,{children:[e.jsx(s,{children:"luxid new"})," already declares the harness in your ",e.jsx(s,{children:"Cargo.toml"}),". If you are adding Luxid to an existing project, add it yourself:"]}),e.jsx(n,{language:"toml",code:`[dev-dependencies]
luxid-testing = "0.1"`}),e.jsx(r,{children:"Each test gets a clean database"}),e.jsxs(t,{children:[e.jsx(s,{children:"#[luxid::test(db = ...)]"})," runs the body inside a ",e.jsx("strong",{children:"transaction that is rolled back afterwards"}),". Tests share one database, run in parallel, and need no truncation, no fixtures, and no ordering."]}),e.jsxs(t,{children:["The ",e.jsx(s,{children:"db = "})," argument names a function returning a ",e.jsx(s,{children:"Db"}),":"]}),e.jsx(n,{language:"rust",code:`// tests/support.rs — or a module in your test file
use luxid::prelude::*;

pub async fn database() -> Db {
    let db = Db::in_memory().await.expect("opens");
    db.migrate::<migration::Migrator>().await.expect("migrates");
    db
}`}),e.jsxs(t,{children:[e.jsx(s,{children:"Db::in_memory()"})," gives an isolated SQLite database. Running your real migrations against it means your tests exercise the real schema."]}),e.jsxs(t,{children:["Without a database argument, ",e.jsx(s,{children:"#[luxid::test]"})," is ",e.jsx(s,{children:"#[tokio::test]"})," plus ",e.jsx(s,{children:"Result"})," unwrapping."]}),e.jsx(r,{children:"Building the app under test"}),e.jsx(n,{language:"rust",code:`fn app(db: Db) -> TestApp {
    TestApp::new(
        App::new()
            .providers(
                Providers::new()
                    .singleton(move |_| db.clone())
                    .singleton(|_| Jwt::new(SECRET)),
            )
            .middleware(WithDatabase)
            .routes(crate::routes::register)
            .into_service(),
    )
}`}),e.jsxs(t,{children:["Note it registers ",e.jsx(s,{children:"crate::routes::register"})," — the ",e.jsx("strong",{children:"real"})," routing table. Tests that wire up their own routes test their own wiring rather than yours."]}),e.jsxs(t,{children:[e.jsx(s,{children:"into_service()"})," deliberately skips the boot-time check that every singleton resolves, so a test can bind only what it needs."]}),e.jsx(r,{children:"Making requests"}),e.jsx(n,{language:"rust",code:`app.get("/api/posts").send().await;

app.post("/api/posts")
    .json(json!({ "title": "Hello" }))
    .send()
    .await;

app.put("/api/posts/1").json(body).send().await;
app.delete("/api/posts/1").send().await;

app.get("/api/me").header("x-trace", "abc").send().await;
app.get("/api/me").bearer(token).send().await;`}),e.jsx(d,{children:"Acting as a user"}),e.jsx(n,{language:"rust",code:'app(db).get("/api/me").acting_as(SECRET, user.id).send().await.assert_ok();'}),e.jsxs(t,{children:[e.jsx(s,{children:"acting_as"})," signs a real token with your secret, so the request goes ",e.jsx("strong",{children:"through"})," the guard rather than around it. A test that bypassed the guard would not be testing the guard."]}),e.jsx(t,{children:"With claims:"}),e.jsx(n,{language:"rust",code:`app.get("/api/admin")
    .acting_as_with(SECRET, user.id, [("role".to_owned(), json!("admin"))])
    .send()
    .await;`}),e.jsx(t,{children:"And for sessions:"}),e.jsx(n,{language:"rust",code:'app.get("/api/cart").with_session(session_id).send().await;'}),e.jsx(r,{children:"Assertions"}),e.jsx(n,{language:"rust",code:`.assert_ok()                    // 200
.assert_created()               // 201
.assert_no_content()            // 204
.assert_unauthorized()          // 401
.assert_forbidden()             // 403
.assert_not_found()             // 404
.assert_status(418)

.assert_header("content-type", "application/json; charset=utf-8")

.assert_json_path("data.0.title", "First")
.assert_json_count("data", 3)
.assert_validation_message("email", "has already been taken")
.assert_validation_errors(&["email", "name"])`}),e.jsxs(t,{children:["They chain, and ",e.jsx("strong",{children:"every failure prints the response body"}),' — a failure that says only "expected 200, got 500" costs a debugging session the body would have saved.']}),e.jsxs(t,{children:[e.jsx(s,{children:"assert_validation_errors"})," asserts a ",e.jsx(s,{children:"422"})," naming ",e.jsx("strong",{children:"exactly"})," those fields; extra or missing fields both fail. That is usually what you want, since a rule firing that you did not expect is a bug."]}),e.jsx(t,{children:"For anything else, read the body:"}),e.jsx(n,{language:"rust",code:`let response = app.get("/api/posts").send().await;
let body = response.json();

assert_eq!(body["data"].as_array().unwrap().len(), 2);`}),e.jsxs(t,{children:["Note ",e.jsx(s,{children:"assert_json_path"})," reads from the ",e.jsx("strong",{children:"root"})," of the body. Validation errors live under ",e.jsx(s,{children:"errors"}),", so it is ",e.jsx(s,{children:"errors.email.0"})," — or just use ",e.jsx(s,{children:"assert_validation_message"}),", which exists so nobody gets that prefix wrong."]}),e.jsx(r,{children:"Factories"}),e.jsxs(t,{children:["A factory describes a ",e.jsx("em",{children:"typical"})," row so tests can override only what they care about:"]}),e.jsx(n,{language:"rust",code:`use luxid::prelude::*;
use sea_orm::ActiveValue::Set;

use crate::entities::users;

pub struct UserFactory;

impl Factory for UserFactory {
    type Active = users::ActiveModel;

    fn definition() -> Self::Active {
        let n = next_id();

        users::ActiveModel {
            name: Set(format!("User {n}")),
            email: Set(format!("user{n}@example.com")),
            role: Set("member".to_owned()),
            ..Default::default()
        }
    }
}`}),e.jsx(n,{language:"rust",code:`UserFactory::new().create_one().await?;                                  // one
UserFactory::new().count(3).create().await?;                             // three
UserFactory::new().state(|u| u.role = Set("admin".into())).create_one().await?;
UserFactory::new().count(2).make();                                      // no database`}),e.jsxs(t,{children:["Make each generated row ",e.jsx("strong",{children:"distinct"})," — a counter, a random suffix. Three identical rows break any test that asserts on a unique column."]}),e.jsxs(t,{children:["States apply in order, so a later one wins. ",e.jsx(s,{children:"create_one"})," ignores ",e.jsx(s,{children:"count"}),"."]}),e.jsxs(t,{children:[e.jsx(s,{children:"luxid make:model User -f"})," generates the file; ",e.jsx(s,{children:"cargo luxid db:sync"})," fills in the required columns from your schema."]}),e.jsx(r,{children:"What to test"}),e.jsx(t,{children:"Endpoints, mostly — the thing a client actually touches:"}),e.jsx(n,{language:"rust",code:`#[luxid::test(db = crate::support::database)]
async fn only_the_owner_may_update(db: Db) -> Result<()> {
    let owner = UserFactory::new().create_one().await?;
    let other = UserFactory::new().create_one().await?;
    let post = PostFactory::new()
        .state(move |p| p.user_id = Set(owner.id))
        .create_one()
        .await?;

    let app = app(db);

    app.put(&format!("/api/posts/{}", post.id))
        .acting_as(SECRET, owner.id)
        .json(json!({ "title": "Updated" }))
        .send()
        .await
        .assert_ok();

    app.put(&format!("/api/posts/{}", post.id))
        .acting_as(SECRET, other.id)
        .json(json!({ "title": "Hijacked" }))
        .send()
        .await
        .assert_forbidden();

    Ok(())
}`}),e.jsx(t,{children:"Policies, scopes, and pure helpers are worth unit-testing directly since they need no HTTP."}),e.jsx(r,{children:"Turn N+1s into failures"}),e.jsx(t,{children:"Leave strict relations on in tests:"}),e.jsx(n,{language:"toml",code:`[database]
strict_relations = true`}),e.jsxs(t,{children:["Then an endpoint that forgets ",e.jsx(s,{children:'.with("author")'})," fails its test rather than quietly issuing a query per row."]}),e.jsx(r,{children:"Running"}),e.jsx(n,{language:"sh",code:`cargo test                     # everything
cargo test --test posts        # one file
cargo test only_the_owner      # by name
cargo test -- --nocapture      # show println output`})]})}function $e(){return e.jsxs(e.Fragment,{children:[e.jsx(g,{children:"Two command lines, in two places. Chapter 02 explained why; this is the full list."}),e.jsxs(r,{children:[e.jsx(s,{children:"luxid"})," — the standalone tool"]}),e.jsxs(t,{children:["Installed with ",e.jsx(s,{children:"cargo install luxid-cli"}),". Creates files; knows nothing about your code."]}),e.jsx(d,{children:e.jsxs(s,{children:["luxid new ","<","name",">"]})}),e.jsx(t,{children:"Creates a project."}),e.jsx(n,{language:"sh",code:`luxid new blog
luxid new blog --luxid-path /path/to/luxid    # depend on a local checkout`}),e.jsxs(t,{children:[e.jsx(s,{children:"--luxid-path"})," is for working on the framework itself. Ordinary projects do not need it."]}),e.jsxs(t,{children:["The name becomes the crate name, normalised — ",e.jsx(s,{children:"my-app"})," gives a crate called ",e.jsx(s,{children:"my_app"}),"."]}),e.jsx(d,{children:e.jsxs(s,{children:["luxid make:model ","<","Name",">"]})}),e.jsx(t,{children:"Generates a model and, with flags, everything around it."}),e.jsx(n,{language:"sh",code:`luxid make:model Post          # model + entity
luxid make:model Post -m       # + migration
luxid make:model Post -mc      # + resource controller
luxid make:model Post -mfsc    # + factory + seeder + controller
luxid make:model Post -a       # everything`}),e.jsx(m,{headers:["Flag","Generates"],rows:[[e.jsx("span",{children:e.jsx(s,{children:"-m"})},0),e.jsx("span",{children:"migration"},1)],[e.jsx("span",{children:e.jsx(s,{children:"-f"})},0),e.jsx("span",{children:"factory"},1)],[e.jsx("span",{children:e.jsx(s,{children:"-s"})},0),e.jsx("span",{children:"seeder"},1)],[e.jsx("span",{children:e.jsx(s,{children:"-c"})},0),e.jsx("span",{children:"API resource controller, and registers its routes"},1)],[e.jsx("span",{children:e.jsx(s,{children:"-a"})},0),e.jsx("span",{children:"all of the above, plus a policy and form requests"},1)]]}),e.jsxs(t,{children:["Flags combine: ",e.jsx(s,{children:"-mfsc"})," is four of them."]}),e.jsxs(t,{children:[e.jsx(s,{children:"-a"})," is what you want most of the time. There is no standalone flag for policies or form requests — ",e.jsx(s,{children:"-a"})," produces them."]}),e.jsxs(t,{children:[e.jsx(s,{children:"-c"})," generates an ",e.jsx("strong",{children:"API"})," resource controller (",e.jsx(s,{children:"index show store update destroy"}),", no ",e.jsx(s,{children:"create"}),"/",e.jsx(s,{children:"edit"})," form actions) and adds one ",e.jsx(s,{children:"r.resource(...)"})," line to ",e.jsx(s,{children:"routes.rs"}),"."]}),e.jsxs(t,{children:["Names are normalised, so ",e.jsx(s,{children:"Post"}),", ",e.jsx(s,{children:"post"}),", and ",e.jsx(s,{children:"user_profile"})," all work. Plurals are derived — ",e.jsx(s,{children:"Category"})," becomes the table ",e.jsx(s,{children:"categories"}),". The rules are simple and will get irregular nouns wrong; when they do, the generated names are ordinary text you can rename before running the migration."]}),e.jsxs(t,{children:["Separately, the ",e.jsx("em",{children:"model"})," name that appears in 404s and diagnostics is derived by singularising the table name. Override it on the entity when that reads badly:"]}),e.jsx(n,{language:"rust",code:`#[derive(Clone, Debug, PartialEq, DeriveEntityModel, luxid::Model)]
#[luxid(name = "Person")]
#[sea_orm(table_name = "people")]
pub struct Model { /* ... */ }`}),e.jsxs(t,{children:["That changes ",e.jsxs(s,{children:["{",'"resource": "People"',"}"]})," to ",e.jsxs(s,{children:["{",'"resource": "Person"',"}"]})," in the problem document. It does not change the table."]}),e.jsxs(t,{children:[e.jsx("strong",{children:"Nothing is overwritten."})," If any target file exists, the command writes nothing at all and says which clashed — a half-applied generator is worse than one that declined."]}),e.jsxs(r,{children:[e.jsx(s,{children:"cargo luxid"})," — your application"]}),e.jsx(t,{children:"These need your routes, migrations, and services, so they live in your binary."}),e.jsxs(t,{children:[e.jsx(s,{children:"cargo luxid"})," is a cargo alias, written into ",e.jsx(s,{children:".cargo/config.toml"})," by ",e.jsx(s,{children:"luxid new"}),":"]}),e.jsx(n,{language:"toml",filename:".cargo/config.toml",code:`[alias]
luxid = "run --"`}),e.jsxs(t,{children:["Cargo expands it before dispatch, so ",e.jsx(s,{children:"cargo luxid migrate"})," and ",e.jsx(s,{children:"cargo run -- migrate"})," are the same command and either will do. Adding Luxid to a project that already existed? Copy those two lines across to get the shorter form."]}),e.jsx(d,{children:"Serving"}),e.jsx(n,{language:"sh",code:`cargo run              # serve (the default)
cargo luxid serve     # the same thing`}),e.jsxs(t,{children:["Address comes from ",e.jsx(s,{children:"LUXID_ADDR"}),", then ",e.jsx(s,{children:"PORT"}),", then ",e.jsx(s,{children:"127.0.0.1:3000"}),"."]}),e.jsx(d,{children:"Migrations"}),e.jsx(n,{language:"sh",code:`cargo luxid migrate                  # apply everything pending
cargo luxid migrate --steps 1        # apply at most one
cargo luxid migrate:rollback         # undo the last
cargo luxid migrate:rollback --steps 3
cargo luxid migrate:status           # what has run
cargo luxid migrate:fresh --force    # drop everything and rebuild`}),e.jsxs(t,{children:[e.jsx(s,{children:"migrate:fresh"})," requires ",e.jsx(s,{children:"--force"}),", because destroying every table should not follow from a mistyped command in the wrong shell."]}),e.jsx(d,{children:"Schema sync"}),e.jsx(n,{language:"sh",code:`cargo luxid db:sync
cargo luxid db:sync --dry-run`}),e.jsxs(t,{children:["Reads the live database and refreshes the field lists in your entities and factories — but only what lies between the ",e.jsxs(s,{children:["// ","<","luxid:fields",">"]})," markers. Anything outside them survives."]}),e.jsx(t,{children:"Run it after every migration."}),e.jsx(d,{children:"Inspecting"}),e.jsx(n,{language:"sh",code:"cargo luxid routes"}),e.jsx(n,{language:"text",code:`GET     /api/posts       PostsController::index    [1 middleware]
POST    /api/posts       PostsController::store    [1 middleware]
GET     /api/posts/{id}  PostsController::show     [1 middleware]`}),e.jsx(t,{children:"The first thing to check when an endpoint behaves unexpectedly."}),e.jsx(n,{language:"sh",code:`cargo luxid openapi
cargo luxid openapi --pretty --title "Blog API" --version 1.0.0`}),e.jsx(r,{children:"Cargo commands worth knowing"}),e.jsx(n,{language:"sh",code:`cargo test                  # the suite
cargo clippy --all-targets  # lints
cargo fmt --all             # formatting
cargo build --release       # an optimised binary`}),e.jsx(r,{children:"A typical session"}),e.jsx(n,{language:"sh",code:`luxid new blog && cd blog

luxid make:model Post -a
# edit migration/src/m..._create_posts.rs to add columns
cargo luxid migrate
cargo luxid db:sync

cargo luxid routes
cargo run`}),e.jsx(r,{children:"When something is not working"}),e.jsx(m,{headers:["Symptom","Check"],rows:[[e.jsx("span",{children:"404 on a route you added"},0),e.jsxs("span",{children:[e.jsx(s,{children:"cargo luxid routes"})," — is it registered?"]},1)],[e.jsx("span",{children:'"file not found for module"'},0),e.jsxs("span",{children:["You forgot ",e.jsx(s,{children:"pub mod ...;"})," in the parent ",e.jsx(s,{children:"mod.rs"})]},1)],[e.jsx("span",{children:'"no database connection is in scope"'},0),e.jsxs("span",{children:[e.jsx(s,{children:"WithDatabase"})," is missing from ",e.jsx(s,{children:"app.rs"})]},1)],[e.jsxs("span",{children:['"no provider bound for ',e.jsx(s,{children:"X"}),'"']},0),e.jsxs("span",{children:["Register it in ",e.jsx(s,{children:"providers()"})]},1)],[e.jsxs("span",{children:['"the ',e.jsx(s,{children:"x"}),' relation was not loaded"']},0),e.jsxs("span",{children:["Add ",e.jsx(s,{children:'.with("x")'})," to the query"]},1)],[e.jsx("span",{children:'"no session is active"'},0),e.jsxs("span",{children:["Add ",e.jsx(s,{children:".middleware(Auth::session())"})]},1)],[e.jsx("span",{children:"Column not found after a migration"},0),e.jsx("span",{children:e.jsx(s,{children:"cargo luxid db:sync"})},1)]]}),e.jsx(t,{children:"Luxid's error messages generally name the fix. When one does not, that is worth reporting as a bug."})]})}function We(){return e.jsxs(e.Fragment,{children:[e.jsx(g,{children:"A Luxid application compiles to one binary with no runtime, no interpreter, and no external process manager. Deploying it means copying that file to a machine and running it."}),e.jsx(r,{children:"What the framework costs"}),e.jsxs(t,{children:["Measured, not asserted. ",e.jsx(s,{children:"cargo bench -p luxid --bench overhead"})," serves byte-identical responses through four stacks and compares them against bare salvo underneath."]}),e.jsx(m,{headers:["Stack","µs/request","req/s/core","vs bare salvo"],rows:[[e.jsx("span",{children:"bare salvo"},0),e.jsx("span",{children:"2.38"},1),e.jsx("span",{children:"419,000"},2),e.jsx("span",{children:"—"},3)],[e.jsx("span",{children:"Luxid, no middleware"},0),e.jsx("span",{children:"3.36"},1),e.jsx("span",{children:"298,000"},2),e.jsx("span",{children:"+0.97 µs"},3)],[e.jsx("span",{children:"Luxid + 2 middleware + container"},0),e.jsx("span",{children:"4.72"},1),e.jsx("span",{children:"212,000"},2),e.jsx("span",{children:"+2.33 µs"},3)],[e.jsx("span",{children:"Luxid + JWT guard"},0),e.jsx("span",{children:"9.34"},1),e.jsx("span",{children:"107,000"},2),e.jsx("span",{children:"+6.95 µs"},3)],[e.jsx("span",{children:"Luxid, realistic stack"},0),e.jsx("span",{children:"12.59"},1),e.jsx("span",{children:"79,000"},2),e.jsx("span",{children:"+10.20 µs"},3)]]}),e.jsx(t,{children:"Reference hardware: Intel i7-4980HQ, a 2014 four-core laptop part, single-threaded."}),e.jsxs(t,{children:[e.jsx("strong",{children:"Read the differences, not the absolutes."})," Requests are driven in-process through salvo's test client, which charges every variant the same fixed cost. The absolute numbers are a latency floor, not a throughput claim for a networked server. Every variant sends an identical request — including the ",e.jsx(s,{children:"authorization"})," header the unauthenticated ones ignore — so no driver cost lands on one variant and not another."]}),e.jsx(r,{children:"Where the time goes"}),e.jsxs(x,{children:[e.jsxs(i,{children:[e.jsx("strong",{children:"The framework floor is about 1 µs per request."})," That buys context construction, the dispatch chain, and translating your ",e.jsx(s,{children:"Response"})," back into salvo's. It is the price of ",e.jsx(s,{children:"HttpContext"})," and of sealing salvo away."]},0),e.jsxs(i,{children:[e.jsx("strong",{children:"Each middleware layer costs roughly 0.7 µs"}),", container resolution included. That is the boxed future and the owned context, as designed."]},1),e.jsxs(i,{children:[e.jsx("strong",{children:"Authentication dominates a realistic stack."})," The JWT guard adds about 4.6 µs, of which 3.18 µs is signature verification with no HTTP involved at all. That cost belongs to ",e.jsx(s,{children:"jsonwebtoken"}),", not to Luxid, and you would pay it in any framework."]},2)]}),e.jsx(t,{children:"The practical reading: middleware is cheap enough to use freely, and the first thing worth optimising in a slow endpoint is almost never the framework."}),e.jsx(r,{children:"Measuring on your own machine"}),e.jsxs(t,{children:["Comparisons ",e.jsx("strong",{children:"within"})," one ",e.jsx(s,{children:"cargo bench"})," invocation are sound, because every variant runs back to back under the same conditions. Comparisons ",e.jsx("strong",{children:"across"})," invocations are not — background load drifts, and an early attempt to compare two crypto providers in separate runs produced a confident and completely reversed conclusion. If you need to compare two things, measure them in the same run."]}),e.jsx(t,{children:"Differences below roughly 100 ns are not resolvable on ordinary hardware."}),e.jsx(r,{children:"Building for production"}),e.jsx(n,{language:"sh",code:"cargo build --release"}),e.jsxs(t,{children:["The binary lands in ",e.jsxs(s,{children:["target/release/","<","crate-name",">"]})," and carries your routes, migrations, and configuration defaults with it. Nothing else needs to be on the target machine except the shared libraries your database driver links against."]}),e.jsx(r,{children:"Running it"}),e.jsx(n,{language:"sh",code:`./blog migrate    # apply pending migrations first
./blog serve      # then serve`}),e.jsx(t,{children:"Keep those two as separate steps. A process that migrates on boot will, on the day you run three replicas, try to migrate three times at once."}),e.jsxs(t,{children:["Address resolution is ",e.jsx(s,{children:"LUXID_ADDR"}),", then ",e.jsx(s,{children:"PORT"}),", then ",e.jsx(s,{children:"127.0.0.1:3000"}),"."]}),e.jsx(r,{children:"Binding inside a container"}),e.jsx(t,{children:"The default binds to loopback, which is right on a laptop and wrong in a container: nothing outside can reach it, and the symptom is a health check that times out against a process that is running perfectly."}),e.jsx(n,{language:"sh",code:"LUXID_ADDR=0.0.0.0:3000 ./blog serve"}),e.jsx(r,{children:"Configuration in production"}),e.jsxs(t,{children:[e.jsx(s,{children:"luxid.toml"})," is committed and holds what is true everywhere. The environment holds what is true for this deployment, and overrides the file. So a secret never needs to be written down in the repository:"]}),e.jsx(n,{language:"sh",code:`DATABASE_URL=postgres://user:password@host/db
APP_KEY=...
LUXID_ADDR=0.0.0.0:3000`}),e.jsx(t,{children:"A missing required key fails at startup with a message naming the environment variable to set, rather than at 3am on the first request that happens to read it."}),e.jsx(r,{children:"A container image"}),e.jsx(t,{children:"A two-stage build keeps the toolchain out of the shipped image:"}),e.jsx(n,{language:"text",code:`FROM rust:1.94 AS build
WORKDIR /src
COPY . .
RUN cargo build --release

FROM debian:bookworm-slim
RUN apt-get update && apt-get install -y ca-certificates libssl3 \\
    && rm -rf /var/lib/apt/lists/*
COPY --from=build /src/target/release/blog /usr/local/bin/blog
ENV LUXID_ADDR=0.0.0.0:3000
EXPOSE 3000
CMD ["blog", "serve"]`}),e.jsxs(t,{children:[e.jsx(s,{children:"ca-certificates"})," is needed for outbound TLS, and ",e.jsx(s,{children:"libssl3"})," for database drivers that link OpenSSL. Both are easy to leave out and produce errors that look nothing like their cause."]}),e.jsx(r,{children:"Before you ship"}),e.jsxs(x,{children:[e.jsxs(i,{children:[e.jsx(s,{children:"cargo test"})," — the suite, including the endpoint tests"]},0),e.jsxs(i,{children:[e.jsx(s,{children:"cargo clippy --all-targets"})," — lints"]},1),e.jsxs(i,{children:[e.jsx(s,{children:"cargo luxid routes"})," — confirm the route table is what you think it is"]},2),e.jsxs(i,{children:[e.jsx(s,{children:"cargo luxid migrate:status"})," — confirm the target database is up to date"]},3)]})]})}function Be(){return e.jsxs(e.Fragment,{children:[e.jsx(g,{children:"Everything so far, applied. We build a small API where people register, log in, and read their own profile. Roughly forty minutes."}),e.jsx(t,{children:"By the end you will have used: migrations, models, hooks, validation with a database rule, JWT authentication, guards, and tests."}),e.jsx(r,{children:"1. Create the project"}),e.jsx(n,{language:"sh",code:`luxid new authdemo
cd authdemo`}),e.jsx(t,{children:"Set a signing key. Copy the example file and edit it:"}),e.jsx(n,{language:"sh",code:"cp .env.example .env"}),e.jsx(n,{language:"sh",code:`# .env
DATABASE_URL=sqlite://./app.db?mode=rwc
APP_KEY=a-long-random-value-you-generate
LUXID_ADDR=127.0.0.1:3000`}),e.jsxs(t,{children:["Generate one with ",e.jsx(s,{children:"openssl rand -hex 32"}),". It never gets committed — ",e.jsx(s,{children:".env"})," is gitignored."]}),e.jsx(r,{children:"2. Scaffold the user"}),e.jsx(n,{language:"sh",code:"luxid make:model User -a"}),e.jsx(t,{children:"Eight files, all registered for you."}),e.jsx(t,{children:"One of them is a generic CRUD controller we do not want — this project writes its own auth controller instead. Remove it:"}),e.jsx(n,{language:"sh",code:"rm src/controllers/users_controller.rs"}),e.jsxs(t,{children:["and delete its line from ",e.jsx(s,{children:"src/controllers/mod.rs"}),", and its ",e.jsx(s,{children:'r.resource("/users", ...)'})," line from ",e.jsx(s,{children:"src/routes.rs"}),". (Leaving it there is not harmless: it references an ",e.jsx(s,{children:"UpdateUser"})," validator that step 5 replaces, so the project will not compile.)"]}),e.jsx(r,{children:"3. Describe the table"}),e.jsxs(t,{children:["Open ",e.jsxs(s,{children:["migration/src/m","<","timestamp",">","_create_users.rs"]})," and fill in the columns:"]}),e.jsx(n,{language:"rust",code:`use sea_orm_migration::prelude::*;
use sea_orm_migration::schema::*;

#[derive(DeriveIden)]
enum Users {
    Table,
    Id,
    Name,
    Email,
    Password,
}

pub struct Migration;

impl MigrationName for Migration {
    fn name(&self) -> &str {
        "m20260822_120000_create_users"      // keep whatever was generated
    }
}

#[async_trait::async_trait]
impl MigrationTrait for Migration {
    async fn up(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        manager
            .create_table(
                Table::create()
                    .table(Users::Table)
                    .if_not_exists()
                    .col(pk_auto(Users::Id))
                    .col(string(Users::Name))
                    .col(string_uniq(Users::Email))
                    .col(string(Users::Password))
                    .to_owned(),
            )
            .await
    }

    async fn down(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        manager.drop_table(Table::drop().table(Users::Table).to_owned()).await
    }
}`}),e.jsxs(t,{children:[e.jsx(s,{children:"string_uniq"})," adds a unique constraint. That is the database's guarantee; chapter 15's ",e.jsx(s,{children:"unique"})," rule is the ",e.jsx("em",{children:"friendly"})," version that produces a ",e.jsx(s,{children:"422"})," instead of a ",e.jsx(s,{children:"500"}),". You want both."]}),e.jsx(n,{language:"sh",code:`cargo luxid migrate
cargo luxid db:sync`}),e.jsxs(t,{children:[e.jsx(s,{children:"db:sync"})," fills the columns into ",e.jsx(s,{children:"src/entities/users.rs"})," and ",e.jsx(s,{children:"src/factories/user_factory.rs"}),"."]}),e.jsx(r,{children:"4. Never store a plaintext password"}),e.jsxs(t,{children:["Open ",e.jsx(s,{children:"src/entities/users.rs"}),". It now has your columns. Add a hook so hashing cannot be skipped:"]}),e.jsx(n,{language:"rust",code:`use sea_orm::entity::prelude::*;

#[derive(Clone, Debug, PartialEq, DeriveEntityModel, serde::Serialize, luxid::Model)]
#[luxid(before_create = Self::hash_password)]
#[sea_orm(table_name = "users")]
pub struct Model {
    // <luxid:fields>  refreshed by \`cargo luxid db:sync\`
    #[sea_orm(primary_key)]
    pub id: i64,
    pub name: String,
    pub email: String,
    #[serde(skip_serializing)]
    pub password: String,
    // </luxid:fields>
    #[sea_orm(ignore)]
    #[serde(flatten)]
    pub relations: luxid::Relations,
}

impl Model {
    async fn hash_password(active: &mut ActiveModel) -> luxid::Result<()> {
        if let sea_orm::ActiveValue::Set(password) = &active.password {
            active.password = sea_orm::ActiveValue::Set(luxid::Hash::make(password)?);
        }
        Ok(())
    }
}

#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]
pub enum Relation {}

impl ActiveModelBehavior for ActiveModel {}`}),e.jsx(t,{children:"Two lines are doing security work:"}),e.jsxs(x,{children:[e.jsxs(i,{children:[e.jsx("strong",{children:e.jsx(s,{children:"#[luxid(before_create = Self::hash_password)]"})})," — no code path can insert an unhashed password. Not a controller, not a seeder, not a test."]},0),e.jsxs(i,{children:[e.jsx("strong",{children:e.jsx(s,{children:"#[serde(skip_serializing)]"})})," on ",e.jsx(s,{children:"password"})," — the hash never appears in a JSON response, even if you return the whole user by accident."]},1)]}),e.jsxs(t,{children:[e.jsx(s,{children:"#[serde(skip_serializing)]"})," sits ",e.jsx("em",{children:"outside"})," the markers, so ",e.jsx(s,{children:"db:sync"})," will not remove it. That is what the markers are for."]}),e.jsx(r,{children:"5. Validation rules"}),e.jsxs(t,{children:[e.jsx(s,{children:"src/validators/user.rs"}),":"]}),e.jsx(n,{language:"rust",code:`use luxid::prelude::*;
use serde::Deserialize;

use crate::models::user::User;

#[derive(Debug, Deserialize, Validate, luxid::JsonSchema)]
pub struct StoreUser {
    #[validate(length(min = 2, max = 64))]
    pub name: String,

    #[validate(email, unique(User::email))]
    pub email: String,

    #[validate(length(min = 8))]
    pub password: String,
}

#[derive(Debug, Deserialize, Validate, luxid::JsonSchema)]
pub struct Credentials {
    #[validate(email)]
    pub email: String,

    #[validate(length(min = 1))]
    pub password: String,
}`}),e.jsxs(t,{children:[e.jsx(s,{children:"unique(User::email)"})," is the database-backed rule: registering with a taken address gives a ",e.jsx(s,{children:"422"})," saying ",e.jsx("em",{children:'"has already been taken"'}),", not a constraint violation."]}),e.jsxs(t,{children:["Note ",e.jsx(s,{children:"Credentials"})," does ",e.jsx("strong",{children:"not"})," check the password length. Login should not tell an attacker your password policy, and a legacy password shorter than the current minimum must still be able to log in."]}),e.jsx(r,{children:"6. The auth controller"}),e.jsxs(t,{children:["Create ",e.jsx(s,{children:"src/controllers/auth_controller.rs"}),":"]}),e.jsx(n,{language:"rust",code:`use luxid::prelude::*;
use sea_orm::ActiveValue::Set;
use serde_json::json;

use crate::entities::users;
use crate::models::user::User;
use crate::validators::user::{Credentials, StoreUser};

pub struct AuthController;

#[luxid::controller]
impl AuthController {
    #[openapi(summary = "Register", tag = "auth", errors = [422])]
    async fn register(ctx: HttpContext) -> Result<Response> {
        let input = ctx.request.validate::<StoreUser>().await?;

        // The hook hashes this on the way in.
        let user = luxid::insert(users::ActiveModel {
            name: Set(input.name),
            email: Set(input.email),
            password: Set(input.password),
            ..Default::default()
        })
        .await?;

        let jwt = ctx.services.get::<Jwt>()?;
        let token = jwt.sign(&Identity::new(user.id.to_string()))?;

        ctx.response.created(json!({ "token": token, "user": user }))
    }

    #[openapi(summary = "Log in", tag = "auth", errors = [401, 422])]
    async fn login(ctx: HttpContext) -> Result<Response> {
        let input = ctx.request.validate::<Credentials>().await?;

        let found = User::query()
            .where_eq(User::email, input.email)
            .first()
            .await?;

        // One branch for both failures. A wrong email and a wrong password must
        // be indistinguishable, or this endpoint tells attackers which
        // addresses are registered.
        let Some(user) = found.filter(|u| Hash::verify(&input.password, &u.password)) else {
            return Err(Error::Unauthorized);
        };

        let jwt = ctx.services.get::<Jwt>()?;
        let token = jwt.sign(&Identity::new(user.id.to_string()))?;

        ctx.response.ok(json!({ "token": token }))
    }

    #[openapi(summary = "The current user", tag = "auth", errors = [401])]
    async fn me(ctx: HttpContext) -> Result<Response> {
        let user = User::find_or_fail(ctx.auth.id::<i64>()?).await?;

        ctx.response.ok(user)
    }
}`}),e.jsxs(t,{children:["Declare the module in ",e.jsx(s,{children:"src/controllers/mod.rs"}),":"]}),e.jsx(n,{language:"rust",code:`pub mod auth_controller;
pub mod health_controller;

// <luxid:modules>`}),e.jsx(r,{children:"7. Register the signer"}),e.jsxs(t,{children:[e.jsx(s,{children:"src/app.rs"}),", in ",e.jsx(s,{children:"providers"}),":"]}),e.jsx(n,{language:"rust",code:`fn providers(db: Db, app_key: String) -> Providers {
    Providers::new()
        .singleton(move |_| db.clone())
        .singleton(move |_| Jwt::new(&app_key))
}`}),e.jsxs(t,{children:["and read the key in ",e.jsx(s,{children:"build"}),":"]}),e.jsx(n,{language:"rust",code:`pub async fn build() -> luxid::Result<App> {
    let config = Config::load("luxid.toml")?;

    luxid::set_strict_relations(
        config.get_or("database.strict_relations", cfg!(debug_assertions))?,
    );

    let app_key: String = config.get("app.key")?;
    let url = config.get_or("database.url", "sqlite://./app.db?mode=rwc".to_owned())?;
    let db = Db::connect(url).await?;

    Ok(App::new()
        .config(config)
        .providers(providers(db, app_key))
        .middleware(WithDatabase)
        .routes(crate::routes::register))
}`}),e.jsxs(t,{children:[e.jsx(s,{children:"config.get"})," rather than ",e.jsx(s,{children:"get_or"}),": an application with no signing key should refuse to start, not run with a guessable one."]}),e.jsx(r,{children:"8. Routes"}),e.jsxs(t,{children:[e.jsx(s,{children:"src/routes.rs"}),":"]}),e.jsx(n,{language:"rust",code:`use luxid::prelude::*;

use crate::controllers;

pub fn register(r: &mut Router) {
    r.group("/api", |r| {
        r.get("/health", controllers::health_controller::HealthController::show);

        r.post("/register", controllers::auth_controller::AuthController::register);
        r.post("/login", controllers::auth_controller::AuthController::login);

        r.group("/", |r| {
            r.middleware(Auth::jwt());

            r.get("/me", controllers::auth_controller::AuthController::me);
        });

        // <luxid:routes>
    });
}`}),e.jsx(t,{children:"Public routes above, guarded ones inside the group. Whether an endpoint needs a token is visible at a glance."}),e.jsx(r,{children:"9. Try it"}),e.jsx(n,{language:"sh",code:"cargo run"}),e.jsx(n,{language:"sh",code:`curl -X POST localhost:3000/api/register -H 'content-type: application/json' \\
  -d '{"name":"Ada","email":"ada@example.com","password":"hunter2hunter2"}'`}),e.jsx(n,{language:"json",code:'{"token":"eyJ0eXAi...","user":{"id":1,"name":"Ada","email":"ada@example.com"}}'}),e.jsxs(t,{children:["No ",e.jsx(s,{children:"password"})," field — ",e.jsx(s,{children:"skip_serializing"})," did that."]}),e.jsx(n,{language:"sh",code:`curl -X POST localhost:3000/api/register -H 'content-type: application/json' \\
  -d '{"name":"A","email":"nope","password":"short"}'`}),e.jsx(n,{language:"json",code:`{
  "type": "https://luxid.rs/errors/validation",
  "title": "the given data was invalid",
  "status": 422,
  "errors": {
    "name": ["must be at least 2 characters"],
    "email": ["must be a valid email address"],
    "password": ["must be at least 8 characters"]
  }
}`}),e.jsx(t,{children:"Three problems, one response."}),e.jsx(n,{language:"sh",code:`TOKEN=$(curl -s -X POST localhost:3000/api/login -H 'content-type: application/json' \\
  -d '{"email":"ada@example.com","password":"hunter2hunter2"}' | jq -r .token)

curl -H "authorization: Bearer $TOKEN" localhost:3000/api/me
curl localhost:3000/api/me     # 401`}),e.jsx(t,{children:"And confirm registering the same address twice:"}),e.jsx(n,{language:"json",code:'{ "errors": { "email": ["has already been taken"] } }'}),e.jsx(r,{children:"10. Tests"}),e.jsxs(t,{children:[e.jsx(s,{children:"tests/auth.rs"}),":"]}),e.jsx(n,{language:"rust",code:`use luxid::prelude::*;
use luxid_testing::TestApp;
use serde_json::json;

const SECRET: &str = "test-signing-key";

pub async fn database() -> Db {
    let db = Db::in_memory().await.expect("opens");
    db.migrate::<migration::Migrator>().await.expect("migrates");
    db
}

fn app(db: Db) -> TestApp {
    TestApp::new(
        App::new()
            .providers(
                Providers::new()
                    .singleton(move |_| db.clone())
                    .singleton(|_| Jwt::new(SECRET)),
            )
            .middleware(WithDatabase)
            .routes(authdemo::routes::register)
            .into_service(),
    )
}

fn registration() -> serde_json::Value {
    json!({ "name": "Ada", "email": "ada@example.com", "password": "hunter2hunter2" })
}

#[luxid::test(db = crate::database)]
async fn registering_returns_a_token_and_hides_the_password(db: Db) -> Result<()> {
    let response = app(db)
        .post("/api/register")
        .json(registration())
        .send()
        .await
        .assert_created()
        .assert_json_path("user.email", "ada@example.com");

    assert!(!response.body().contains("password"), "the hash must never be sent");
    assert!(response.json()["token"].is_string());

    Ok(())
}

#[luxid::test(db = crate::database)]
async fn the_stored_password_is_hashed(db: Db) -> Result<()> {
    app(db).post("/api/register").json(registration()).send().await.assert_created();

    let user = authdemo::models::user::User::query()
        .where_eq(authdemo::models::user::User::email, "ada@example.com")
        .first_or_fail()
        .await?;

    assert_ne!(user.password, "hunter2hunter2");
    assert!(Hash::verify("hunter2hunter2", &user.password));

    Ok(())
}

#[luxid::test(db = crate::database)]
async fn registering_twice_is_a_validation_error(db: Db) -> Result<()> {
    let app = app(db);

    app.post("/api/register").json(registration()).send().await.assert_created();

    app.post("/api/register")
        .json(registration())
        .send()
        .await
        .assert_validation_message("email", "has already been taken");

    Ok(())
}

#[luxid::test(db = crate::database)]
async fn logging_in_and_reading_the_profile(db: Db) -> Result<()> {
    let app = app(db);

    app.post("/api/register").json(registration()).send().await.assert_created();

    let login = app
        .post("/api/login")
        .json(json!({ "email": "ada@example.com", "password": "hunter2hunter2" }))
        .send()
        .await
        .assert_ok();

    let token = login.json()["token"].as_str().expect("a token").to_owned();

    app.get("/api/me")
        .bearer(token)
        .send()
        .await
        .assert_ok()
        .assert_json_path("email", "ada@example.com");

    Ok(())
}

#[luxid::test(db = crate::database)]
async fn a_wrong_password_and_an_unknown_email_look_the_same(db: Db) -> Result<()> {
    let app = app(db);

    app.post("/api/register").json(registration()).send().await.assert_created();

    let wrong = app
        .post("/api/login")
        .json(json!({ "email": "ada@example.com", "password": "wrongwrongwrong" }))
        .send()
        .await;

    let unknown = app
        .post("/api/login")
        .json(json!({ "email": "nobody@example.com", "password": "wrongwrongwrong" }))
        .send()
        .await;

    assert_eq!(wrong.status(), unknown.status());
    assert_eq!(wrong.json(), unknown.json());

    Ok(())
}

#[luxid::test(db = crate::database)]
async fn the_profile_needs_a_token(db: Db) -> Result<()> {
    app(db).get("/api/me").send().await.assert_unauthorized();
    Ok(())
}`}),e.jsxs(t,{children:["Tests reach your crate by name, so ",e.jsx(s,{children:"authdemo::routes::register"})," refers to a project created with ",e.jsx(s,{children:"luxid new authdemo"}),". For that to work, the crate needs a library target — add one alongside ",e.jsx(s,{children:"main.rs"}),":"]}),e.jsx(n,{language:"rust",code:`// src/lib.rs
pub mod app;
pub mod config;
pub mod controllers;
pub mod entities;
pub mod factories;
pub mod middleware;
pub mod models;
pub mod policies;
pub mod routes;
pub mod seeders;
pub mod services;
pub mod validators;`}),e.jsxs(t,{children:["and change ",e.jsx(s,{children:"src/main.rs"})," to use it:"]}),e.jsx(n,{language:"rust",code:`#[tokio::main]
async fn main() -> luxid::Result<()> {
    let _ = dotenvy::dotenv();

    luxid::cli::run::<migration::Migrator>(authdemo::app::build().await?).await
}`}),e.jsxs(t,{children:[e.jsx(s,{children:"luxid new"})," already put the test harness in your ",e.jsx(s,{children:"Cargo.toml"})," — confirm it is there:"]}),e.jsx(n,{language:"toml",code:`[dev-dependencies]
luxid-testing = "0.1"`}),e.jsx(n,{language:"sh",code:"cargo test"}),e.jsx(t,{children:"Six tests, each in its own rolled-back transaction, running in parallel."}),e.jsx(r,{children:"What you built"}),e.jsxs(x,{children:[e.jsx(i,{children:"Registration and login with argon2-hashed passwords, enforced by a hook"},0),e.jsxs(i,{children:["A ",e.jsx(s,{children:"422"})," listing every problem at once, including a database-backed uniqueness check"]},1),e.jsx(i,{children:"JWT issuing and a guarded route"},2),e.jsx(i,{children:"A login endpoint that does not leak which addresses are registered"},3),e.jsx(i,{children:"A test suite that leaves no rows behind"},4)]}),e.jsxs(t,{children:["The two habits worth keeping: ",e.jsx("strong",{children:"hash in a hook, not a controller"}),", and ",e.jsx("strong",{children:"make authentication failures indistinguishable"}),". Both are easy to get wrong by writing the obvious code."]})]})}function Ve(){return e.jsxs(e.Fragment,{children:[e.jsx(g,{children:"The second project adds what chapter 23 did not need: relations, ownership, scopes, filtering, and pagination. It continues from the auth app — same project, same users."}),e.jsx(t,{children:"Everything here assumes you finished chapter 23."}),e.jsx(r,{children:"1. Scaffold the todo"}),e.jsx(n,{language:"sh",code:"luxid make:model Todo -a"}),e.jsx(r,{children:"2. The table"}),e.jsxs(t,{children:[e.jsxs(s,{children:["migration/src/m","<","timestamp",">","_create_todos.rs"]}),":"]}),e.jsx(n,{language:"rust",code:`use sea_orm_migration::prelude::*;
use sea_orm_migration::schema::*;

#[derive(DeriveIden)]
enum Todos {
    Table,
    Id,
    UserId,
    Title,
    Notes,
    Done,
}

#[derive(DeriveIden)]
enum Users {
    Table,
    Id,
}

pub struct Migration;

impl MigrationName for Migration {
    fn name(&self) -> &str {
        "m20260822_130000_create_todos"      // keep whatever was generated
    }
}

#[async_trait::async_trait]
impl MigrationTrait for Migration {
    async fn up(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        manager
            .create_table(
                Table::create()
                    .table(Todos::Table)
                    .if_not_exists()
                    .col(pk_auto(Todos::Id))
                    .col(big_integer(Todos::UserId))
                    .col(string(Todos::Title))
                    .col(text_null(Todos::Notes))
                    .col(boolean(Todos::Done))
                    .foreign_key(
                        ForeignKey::create()
                            .from(Todos::Table, Todos::UserId)
                            .to(Users::Table, Users::Id)
                            .on_delete(ForeignKeyAction::Cascade),
                    )
                    .to_owned(),
            )
            .await
    }

    async fn down(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        manager.drop_table(Table::drop().table(Todos::Table).to_owned()).await
    }
}`}),e.jsxs(t,{children:[e.jsx(s,{children:"ForeignKeyAction::Cascade"})," means deleting a user deletes their todos. The alternative — orphaned rows pointing at a user that no longer exists — is worse."]}),e.jsxs(t,{children:["Note ",e.jsx(s,{children:"Users"})," is declared again here. Each migration is self-contained."]}),e.jsx(n,{language:"sh",code:`cargo luxid migrate
cargo luxid db:sync`}),e.jsx(r,{children:"3. Relations"}),e.jsxs(t,{children:[e.jsx(s,{children:"src/models/todo.rs"}),":"]}),e.jsx(n,{language:"rust",code:`pub use crate::entities::todos::Model as Todo;

use luxid::Query;
use luxid::prelude::*;

use crate::entities::todos;
use crate::models::user::User;

#[luxid::model(belongs_to(owner = User, fk = "user_id"))]
impl Todo {
    // Named \`completed\`, not \`done\`: a scope may not share a name with a
    // column, and \`Todo::done\` is one. See chapter 14.
    #[scope]
    fn completed(query: Query<todos::Entity>) -> Query<todos::Entity> {
        query.where_eq(Todo::done, true)
    }

    #[scope]
    fn outstanding(query: Query<todos::Entity>) -> Query<todos::Entity> {
        query.where_eq(Todo::done, false)
    }

    #[scope]
    fn owned_by(query: Query<todos::Entity>, user_id: i64) -> Query<todos::Entity> {
        query.where_eq(Todo::user_id, user_id)
    }
}`}),e.jsxs(t,{children:[e.jsx(s,{children:"owned_by"})," is the important one. Every query in this API filters by owner, and naming it once means no endpoint can forget — and if the ownership rule ever changes, it changes in one place."]}),e.jsxs(t,{children:["The other side, ",e.jsx(s,{children:"src/models/user.rs"}),":"]}),e.jsx(n,{language:"rust",code:`pub use crate::entities::users::Model as User;

use crate::models::todo::Todo;

#[luxid::model(has_many(todos = Todo, fk = "user_id"))]
impl User {}`}),e.jsx(r,{children:"4. The ownership policy"}),e.jsxs(t,{children:[e.jsx(s,{children:"src/policies/todo_policy.rs"}),":"]}),e.jsx(n,{language:"rust",code:`use luxid::prelude::*;

use crate::models::todo::Todo;

pub struct TodoPolicy;

impl TodoPolicy {
    pub fn owns(auth: &Auth, todo: &Todo) -> bool {
        auth.try_identity()
            .and_then(|identity| identity.id::<i64>().ok())
            .is_some_and(|id| id == todo.user_id)
    }
}`}),e.jsx(t,{children:"One rule, used by every endpoint that touches a specific todo."}),e.jsx(r,{children:"5. Validation"}),e.jsxs(t,{children:[e.jsx(s,{children:"src/validators/todo.rs"}),":"]}),e.jsx(n,{language:"rust",code:`use luxid::prelude::*;
use serde::Deserialize;

#[derive(Debug, Deserialize, Validate, luxid::JsonSchema)]
pub struct StoreTodo {
    #[validate(length(min = 1, max = 200))]
    pub title: String,

    #[validate(length(max = 2000))]
    pub notes: Option<String>,
}

#[derive(Debug, Deserialize, Validate, luxid::JsonSchema)]
pub struct UpdateTodo {
    #[validate(length(min = 1, max = 200))]
    pub title: Option<String>,

    #[validate(length(max = 2000))]
    pub notes: Option<String>,

    pub done: Option<bool>,
}`}),e.jsxs(t,{children:["Every field on ",e.jsx(s,{children:"UpdateTodo"})," is optional, so a client can send just ",e.jsxs(s,{children:["{",'"done": true',"}"]})," without resending the title. The rules still apply to whatever ",e.jsx("em",{children:"is"})," sent."]}),e.jsx(r,{children:"6. The controller"}),e.jsxs(t,{children:[e.jsx(s,{children:"src/controllers/todos_controller.rs"}),":"]}),e.jsx(n,{language:"rust",code:`use luxid::prelude::*;
use sea_orm::ActiveValue::Set;
use sea_orm::IntoActiveModel;

use crate::entities::todos;
use crate::models::todo::{Todo, TodoScopes};
use crate::policies::todo_policy::TodoPolicy;
use crate::validators::todo::{StoreTodo, UpdateTodo};

pub struct TodosController;

#[luxid::controller]
impl TodosController {
    #[openapi(summary = "List your todos", tag = "todos", errors = [401])]
    async fn index(ctx: HttpContext) -> Result<Response> {
        let user_id: i64 = ctx.auth.id()?;
        let page = ctx.request.input::<u64>("page")?.unwrap_or(1);
        let per_page = ctx.request.input::<u64>("per_page")?.unwrap_or(20).min(100);

        let mut query = Todo::owned_by(user_id);

        // ?status=done | pending — anything else means no filter.
        query = match ctx.request.input::<String>("status")?.as_deref() {
            Some("done") => query.completed(),
            Some("pending") => query.outstanding(),
            _ => query,
        };

        let todos = query.order_by_desc(Todo::id).paginate(page, per_page).await?;

        ctx.response.ok(todos)
    }

    #[openapi(summary = "One todo", tag = "todos", errors = [401, 404])]
    async fn show(ctx: HttpContext) -> Result<Response> {
        let todo = Self::find_owned(&ctx).await?;

        ctx.response.ok(todo)
    }

    #[openapi(summary = "Create a todo", tag = "todos", body = StoreTodo, errors = [401, 422])]
    async fn store(ctx: HttpContext) -> Result<Response> {
        let user_id: i64 = ctx.auth.id()?;
        let input = ctx.request.validate::<StoreTodo>().await?;

        let todo = luxid::insert(todos::ActiveModel {
            user_id: Set(user_id),
            title: Set(input.title),
            notes: Set(input.notes),
            done: Set(false),
            ..Default::default()
        })
        .await?;

        ctx.response.created(todo)
    }

    #[openapi(summary = "Update a todo", tag = "todos", body = UpdateTodo, errors = [401, 404, 422])]
    async fn update(ctx: HttpContext) -> Result<Response> {
        let todo = Self::find_owned(&ctx).await?;
        let input = ctx.request.validate::<UpdateTodo>().await?;

        let mut active = todo.into_active_model();

        if let Some(title) = input.title {
            active.title = Set(title);
        }
        if let Some(notes) = input.notes {
            active.notes = Set(Some(notes));
        }
        if let Some(done) = input.done {
            active.done = Set(done);
        }

        ctx.response.ok(luxid::update(active).await?)
    }

    #[openapi(summary = "Delete a todo", tag = "todos", no_content, errors = [401, 404])]
    async fn destroy(ctx: HttpContext) -> Result<Response> {
        let todo = Self::find_owned(&ctx).await?;

        luxid::delete_by_id::<todos::Entity>(todo.id).await?;

        ctx.response.no_content()
    }

    /// Load a todo the caller is allowed to see.
    ///
    /// Returns a 404 rather than a 403 for someone else's todo: replying "you
    /// may not touch this" would confirm that it exists.
    async fn find_owned(ctx: &HttpContext) -> Result<Todo> {
        let id: i64 = ctx.params.get("id")?;
        let todo = Todo::find(id).await?;

        let Some(todo) = todo.filter(|todo| ctx.can(TodoPolicy::owns, todo)) else {
            return Err(Error::not_found("Todo", id));
        };

        Ok(todo)
    }
}`}),e.jsx(t,{children:"Two things to notice."}),e.jsxs(t,{children:[e.jsxs("strong",{children:[e.jsx(s,{children:"find_owned"})," is not an action."]})," The controller macro only treats an ",e.jsx(s,{children:"async fn"})," as an action when its single argument is an ",e.jsx(s,{children:"HttpContext"})," ",e.jsx("em",{children:"by value"}),". This one takes ",e.jsx(s,{children:"&HttpContext"}),", so it stays an ordinary helper — which is how you share logic between actions."]}),e.jsxs(t,{children:[e.jsx("strong",{children:"404, not 403, for someone else's todo."})," Chapter 18 raised this: a ",e.jsx(s,{children:"403"})," on a row that exists confirms it exists. For a todo list that leaks nothing much; for anything sensitive it matters, and the habit is worth forming."]}),e.jsx(r,{children:"7. Routes"}),e.jsxs(t,{children:["Add to the guarded group in ",e.jsx(s,{children:"src/routes.rs"}),":"]}),e.jsx(n,{language:"rust",code:`r.group("/", |r| {
    r.middleware(Auth::jwt());

    r.get("/me", controllers::auth_controller::AuthController::me);
    r.resource("/todos", controllers::todos_controller::TodosController);
});`}),e.jsxs(t,{children:["One line for five routes. Declare the module in ",e.jsx(s,{children:"src/controllers/mod.rs"}),":"]}),e.jsx(n,{language:"rust",code:"pub mod todos_controller;"}),e.jsx(r,{children:"8. Try it"}),e.jsx(n,{language:"sh",code:"cargo run"}),e.jsx(n,{language:"sh",code:`TOKEN=$(curl -s -X POST localhost:3000/api/login -H 'content-type: application/json' \\
  -d '{"email":"ada@example.com","password":"hunter2hunter2"}' | jq -r .token)

AUTH="authorization: Bearer $TOKEN"

curl -X POST localhost:3000/api/todos -H "$AUTH" -H 'content-type: application/json' \\
  -d '{"title":"Write the docs"}'

curl -X POST localhost:3000/api/todos -H "$AUTH" -H 'content-type: application/json' \\
  -d '{"title":"Ship 0.2","notes":"after the docs"}'

curl -H "$AUTH" localhost:3000/api/todos`}),e.jsx(n,{language:"json",code:`{
  "data": [
    { "id": 2, "user_id": 1, "title": "Ship 0.2", "notes": "after the docs", "done": false },
    { "id": 1, "user_id": 1, "title": "Write the docs", "notes": null, "done": false }
  ],
  "page": 1,
  "per_page": 20,
  "total": 2,
  "last_page": 1
}`}),e.jsx(t,{children:"Mark one done and filter:"}),e.jsx(n,{language:"sh",code:`curl -X PUT localhost:3000/api/todos/1 -H "$AUTH" -H 'content-type: application/json' \\
  -d '{"done":true}'

curl -H "$AUTH" 'localhost:3000/api/todos?status=pending'
curl -H "$AUTH" 'localhost:3000/api/todos?status=done'`}),e.jsx(t,{children:"And confirm the guard:"}),e.jsx(n,{language:"sh",code:"curl localhost:3000/api/todos        # 401"}),e.jsx(r,{children:"9. Loading the owner"}),e.jsx(t,{children:"To include the owner in a response:"}),e.jsx(n,{language:"rust",code:`let todos = Todo::owned_by(user_id)
    .with("owner")
    .paginate(page, per_page)
    .await?;`}),e.jsx(n,{language:"json",code:'{ "id": 1, "title": "Write the docs", "owner": { "id": 1, "name": "Ada" } }'}),e.jsxs(t,{children:["One extra query for the whole page, not one per row. And if you forget the ",e.jsx(s,{children:'.with("owner")'})," but call ",e.jsx(s,{children:"todo.owner()?"}),", development tells you:"]}),e.jsx(n,{language:"text",code:'the `owner` relation of `Todo` was not loaded. Add `.with("owner")` to\nthe query, or call `luxid::set_strict_relations(false)` to read unloaded\nrelations as empty.'}),e.jsx(t,{children:"That is the N+1 protection from chapter 13 doing its job."}),e.jsx(r,{children:"10. Tests"}),e.jsxs(t,{children:[e.jsx(s,{children:"tests/todos.rs"}),":"]}),e.jsx(n,{language:"rust",code:`use luxid::prelude::*;
use luxid_testing::TestApp;
use sea_orm::ActiveValue::Set;
use serde_json::json;

use authdemo::entities::{todos, users};

const SECRET: &str = "test-signing-key";

pub async fn database() -> Db {
    let db = Db::in_memory().await.expect("opens");
    db.migrate::<migration::Migrator>().await.expect("migrates");
    db
}

fn app(db: Db) -> TestApp {
    TestApp::new(
        App::new()
            .providers(
                Providers::new()
                    .singleton(move |_| db.clone())
                    .singleton(|_| Jwt::new(SECRET)),
            )
            .middleware(WithDatabase)
            .routes(authdemo::routes::register)
            .into_service(),
    )
}

async fn a_user(email: &str) -> Result<users::Model> {
    luxid::insert(users::ActiveModel {
        name: Set("Test".to_owned()),
        email: Set(email.to_owned()),
        password: Set("hunter2hunter2".to_owned()),
        ..Default::default()
    })
    .await
}

async fn a_todo(user_id: i64, title: &str, done: bool) -> Result<todos::Model> {
    luxid::insert(todos::ActiveModel {
        user_id: Set(user_id),
        title: Set(title.to_owned()),
        notes: Set(None),
        done: Set(done),
        ..Default::default()
    })
    .await
}

#[luxid::test(db = crate::database)]
async fn listing_shows_only_your_own(db: Db) -> Result<()> {
    let mine = a_user("mine@example.com").await?;
    let theirs = a_user("theirs@example.com").await?;

    a_todo(mine.id, "Mine", false).await?;
    a_todo(theirs.id, "Theirs", false).await?;

    app(db)
        .get("/api/todos")
        .acting_as(SECRET, mine.id)
        .send()
        .await
        .assert_ok()
        .assert_json_count("data", 1)
        .assert_json_path("data.0.title", "Mine");

    Ok(())
}

#[luxid::test(db = crate::database)]
async fn the_status_filter_works(db: Db) -> Result<()> {
    let user = a_user("ada@example.com").await?;

    a_todo(user.id, "Done", true).await?;
    a_todo(user.id, "Pending", false).await?;

    let app = app(db);

    app.get("/api/todos?status=done")
        .acting_as(SECRET, user.id)
        .send()
        .await
        .assert_json_count("data", 1)
        .assert_json_path("data.0.title", "Done");

    app.get("/api/todos?status=pending")
        .acting_as(SECRET, user.id)
        .send()
        .await
        .assert_json_count("data", 1)
        .assert_json_path("data.0.title", "Pending");

    app.get("/api/todos")
        .acting_as(SECRET, user.id)
        .send()
        .await
        .assert_json_count("data", 2);

    Ok(())
}

#[luxid::test(db = crate::database)]
async fn creating_assigns_the_caller_as_owner(db: Db) -> Result<()> {
    let user = a_user("ada@example.com").await?;

    app(db)
        .post("/api/todos")
        .acting_as(SECRET, user.id)
        .json(json!({ "title": "Write the docs" }))
        .send()
        .await
        .assert_created()
        .assert_json_path("user_id", user.id)
        .assert_json_path("done", false);

    Ok(())
}

#[luxid::test(db = crate::database)]
async fn a_partial_update_leaves_the_rest_alone(db: Db) -> Result<()> {
    let user = a_user("ada@example.com").await?;
    let todo = a_todo(user.id, "Original", false).await?;

    app(db)
        .put(&format!("/api/todos/{}", todo.id))
        .acting_as(SECRET, user.id)
        .json(json!({ "done": true }))
        .send()
        .await
        .assert_ok()
        .assert_json_path("done", true)
        .assert_json_path("title", "Original");

    Ok(())
}

#[luxid::test(db = crate::database)]
async fn someone_elses_todo_is_invisible(db: Db) -> Result<()> {
    let mine = a_user("mine@example.com").await?;
    let theirs = a_user("theirs@example.com").await?;
    let todo = a_todo(theirs.id, "Theirs", false).await?;

    let app = app(db);
    let path = format!("/api/todos/{}", todo.id);

    // A 404, not a 403 — replying "forbidden" would confirm it exists.
    app.get(&path).acting_as(SECRET, mine.id).send().await.assert_not_found();

    app.put(&path)
        .acting_as(SECRET, mine.id)
        .json(json!({ "done": true }))
        .send()
        .await
        .assert_not_found();

    app.delete(&path).acting_as(SECRET, mine.id).send().await.assert_not_found();

    Ok(())
}

#[luxid::test(db = crate::database)]
async fn deleting_removes_it(db: Db) -> Result<()> {
    let user = a_user("ada@example.com").await?;
    let todo = a_todo(user.id, "Temporary", false).await?;

    let app = app(db);
    let path = format!("/api/todos/{}", todo.id);

    app.delete(&path).acting_as(SECRET, user.id).send().await.assert_no_content();
    app.get(&path).acting_as(SECRET, user.id).send().await.assert_not_found();

    Ok(())
}

#[luxid::test(db = crate::database)]
async fn a_title_is_required(db: Db) -> Result<()> {
    let user = a_user("ada@example.com").await?;

    app(db)
        .post("/api/todos")
        .acting_as(SECRET, user.id)
        .json(json!({ "title": "" }))
        .send()
        .await
        .assert_validation_errors(&["title"]);

    Ok(())
}

#[luxid::test(db = crate::database)]
async fn every_route_needs_a_token(db: Db) -> Result<()> {
    let app = app(db);

    app.get("/api/todos").send().await.assert_unauthorized();
    app.post("/api/todos").json(json!({ "title": "x" })).send().await.assert_unauthorized();
    app.get("/api/todos/1").send().await.assert_unauthorized();

    Ok(())
}`}),e.jsx(n,{language:"sh",code:"cargo test"}),e.jsxs(t,{children:["Note what the ownership tests assert: not just that the happy path works, but that ",e.jsx("strong",{children:"another user gets nothing"}),". Ownership bugs are the most common serious flaw in this kind of API, and they only show up in tests that use two users."]}),e.jsx(r,{children:"What you built"}),e.jsxs(x,{children:[e.jsxs(i,{children:["A resource with five routes from one ",e.jsx(s,{children:"r.resource(...)"})," line"]},0),e.jsx(i,{children:"Ownership enforced by a scope on lists and a policy on individual rows"},1),e.jsx(i,{children:"Partial updates that only touch what was sent"},2),e.jsx(i,{children:"Filtering via query parameters and named scopes"},3),e.jsx(i,{children:"A test suite that proves users cannot see each other's data"},4)]}),e.jsx(r,{children:"Where to go next"}),e.jsxs(x,{children:[e.jsxs(i,{children:[e.jsx("strong",{children:"Relations"}),": give todos a ",e.jsx(s,{children:"Category"}),", load with ",e.jsx(s,{children:".with()"})]},0),e.jsxs(i,{children:[e.jsx("strong",{children:"Sessions"}),": add ",e.jsx(s,{children:"Auth::session()"})," alongside the token guard for a browser client — ",e.jsx(s,{children:"ctx.auth"})," reads the same either way"]},1),e.jsxs(i,{children:[e.jsx("strong",{children:"OpenAPI"}),": ",e.jsx(s,{children:"cargo luxid openapi --pretty"})," and load it into Swagger UI"]},2),e.jsxs(i,{children:[e.jsx("strong",{children:"Postgres"}),": change ",e.jsx(s,{children:"DATABASE_URL"}),"; nothing else"]},3)]})]})}const Je=Object.freeze(Object.defineProperty({__proto__:null,AuthProjectContent:Be,AuthenticationContent:He,AuthorizationContent:Ue,CLIReferenceContent:$e,ConfigurationContent:Ee,ControllersContent:Ce,DeploymentContent:We,ErrorHandlingContent:Se,FirstAppContent:Te,InstallationContent:ke,IntroductionContent:_e,LUXID_VERSIONS:I,MiddlewareContent:Pe,MigrationsContent:ze,ModelsContent:Ne,OpenApiContent:Le,RelationshipsContent:Oe,RequestsContent:Re,RoutingContent:Ae,ScopesHooksContent:Me,ServicesContent:qe,SessionsContent:De,TestingContent:Fe,TodoProjectContent:Ve,ValidationContent:Ie,allDocs:re,defaultDoc:H,docsChapters:M,findDocByPath:Y,findSectionForDoc:G,getAdjacentDocs:J},Symbol.toStringTag,{value:"Module"})),Ye=o=>{const a=Je[o];return typeof a=="function"?a:void 0};function Ge({path:o}){return e.jsxs("div",{className:"py-6",children:[e.jsxs("p",{className:"mb-4 leading-7 text-zinc-500",children:["No chapter is published at ",e.jsx("code",{className:"font-mono",children:o})," yet."]}),e.jsx(P,{to:H.path,className:"font-medium underline underline-offset-2 hover:opacity-70",children:"Back to the introduction →"})]})}function es(){const{pathname:o}=B(),a=Y(o)??H,c=G(a),l=Ye(a.content);return e.jsx(fe,{currentDoc:a,currentSection:c,children:l?e.jsx(l,{}):e.jsx(Ge,{path:o})})}export{es as default};
