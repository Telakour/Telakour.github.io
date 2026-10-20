import{f as Sc,u as Ui,j as e,r as d,X as lg,V as dg,l as cg,m as pg,o as ug,C as mg,k as hg,p as gg,A as fg,q as Ru,s as Pr,a as Da,c as Pa,b as bg,n as os,d as xg,e as vg}from"./index-CXjISvBS.js";import{a as kg,n as mi,b as mt,M as yg,c as wg,g as lc,d as Lu,u as ns,e as dc,f as Dd,h as _g,i as Sg,j as jg,k as Pu,w as Ng,r as Cg,m as Tg,l as Mg,p as Fd,o as Ag,q as Qe,s as Mm,t as Ig,v as Sn,x as Aa,y as sl,D as di,z as Eg,A as Uu,S as Du,B as Fu,C as ll,E as Rg,F as Lg,G as Pg,H as Ug,I as zd,J as Od,K as dl,L as Bd,N as $d,O as Hd,P as Dg,Q as Fg}from"./StableSpinePlayerFixed-BIp4XPmI.js";import{l as zg,a as cl,r as Wd}from"./BundledSpineResources-09Kt1NAK.js";import{a as Am,f as Im,r as Og,b as zu,d as jn,e as Ou,o as Bg,g as Bu,O as $g,h as Hg,i as Wg,j as Yg,k as jc,m as Em,n as Gg,p as Kg,q as Xg,s as qg,t as Vg,u as Jg,v as Qg,w as Zg,x as Rm,y as $u,z as Hu,A as Lm,B as ef,C as tf,D as Wu,E as nf,F as of,G as af,H as Yu,I as rf,J as Gu,K as Ku,L as sf,M as Yd,N as lf}from"./SpineResourceCatalog-DmTp_JM5.js";import{u as df,c as pl}from"./SpineWorkspaceContext-CTTNFn-f.js";import{I as cf,T as no,z as pf,B as uf,C as mf,A as Gd,u as Kd,E as Li,L as ul,t as ml,q as Lo,D as Xu,p as hf,F as gf,s as ff,G as bf}from"./studioCreatorHandoff-Cq0gokVp.js";import{p as xf}from"./unityWebglManifest-D0-XiWRp.js";import{l as vf,a as kf,r as cc,f as pc,b as yf,c as uc}from"./StudioResourceNames-BzoNIFOq.js";import"./SceneRenderer-DwSxL4ff.js";/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wf=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]],_f=Sc("ellipsis",wf);/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sf=[["path",{d:"M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2",key:"1fvzgz"}],["path",{d:"M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2",key:"1kc0my"}],["path",{d:"M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8",key:"10h0bg"}],["path",{d:"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",key:"1s1gnw"}]],jf=Sc("hand",Sf);/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nf=[["path",{d:"M13 21h8",key:"1jsn5i"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],Cf=Sc("pen-line",Nf);function qu(o,p,g){const f=o.worldWidth??o.worldSize,i=o.worldHeight??o.worldSize,r=Number.isFinite(p)?Math.max(1,p):f,S=Number.isFinite(g)?Math.max(1,g):i;return{...o,worldSize:Math.max(r,S),worldWidth:r,worldHeight:S,offsetXPercent:(o.offsetXPercent??0)*f/r,offsetYPercent:(o.offsetYPercent??0)*i/S}}function hi({label:o,value:p,min:g,max:f,onChange:i,precision:r=1}){const[S,_]=d.useState(String(p)),[M,L]=d.useState(!1);d.useEffect(()=>{if(!M){const N=10**r;_(String(Math.round(p*N)/N))}},[p,M,r]);const O=()=>{const N=Number(S.replace(",","."));i(Number.isFinite(N)&&S.trim()?Math.max(g,Math.min(f,N)):p),L(!1)};return e.jsxs("label",{className:"mirror-fold-number",children:[e.jsx("span",{children:o}),e.jsx("input",{type:"text",inputMode:"decimal",value:S,onFocus:()=>L(!0),onChange:N=>_(N.target.value),onBlur:O,onKeyDown:N=>{N.key==="Enter"&&N.currentTarget.blur()}})]})}function Tf({value:o,onChange:p,compare:g,onCompare:f,compactWhenDisabled:i=!1}){const{t:r}=Ui(),S=_=>p(mi({...o,..._}));return e.jsxs("div",{className:"mirror-fold-controls",children:[e.jsxs("div",{className:"mirror-fold-card",children:[e.jsxs("label",{className:"mirror-fold-enable",children:[e.jsx("span",{children:r("studio.effects.mirror")}),e.jsx("input",{type:"checkbox",checked:o.enabled,onChange:_=>S({enabled:_.target.checked})})]}),e.jsx("p",{children:r("studio.effects.description")}),o.enabled||!i?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mirror-fold-directions",role:"group","aria-label":r("studio.effects.direction"),children:["left","right","top","bottom"].map((_,M)=>e.jsxs("button",{type:"button",className:o.direction===_?"is-active":"","aria-pressed":o.direction===_,onClick:()=>S({direction:_}),children:[e.jsx("span",{"aria-hidden":"true",children:["▌→","←▐","▀↓","↑▄"][M]}),r(`studio.effects.${_}`)]},_))}),e.jsxs("label",{className:"mirror-fold-scope",children:[e.jsx("span",{children:r("studio.effects.scope")}),e.jsxs("select",{value:o.scope,onChange:_=>S({scope:_.target.value}),children:[e.jsx("option",{value:"all",children:r("studio.effects.all")}),e.jsx("option",{value:"models",children:r("studio.effects.models")})]})]})]}):null]}),o.enabled||!i?e.jsxs("div",{className:"mirror-fold-card",children:[e.jsx(hi,{label:r("studio.effects.position"),value:o.position,min:0,max:100,onChange:_=>S({position:_})}),e.jsx("input",{className:"mirror-fold-range",type:"range",min:0,max:100,step:.1,value:o.position,"aria-label":r("studio.effects.position"),onChange:_=>S({position:Number(_.target.value)})}),e.jsxs("div",{className:"mirror-fold-grid",children:[e.jsx(hi,{label:r("studio.effects.offset_x"),value:o.offsetX,min:-100,max:100,onChange:_=>S({offsetX:_})}),e.jsx(hi,{label:r("studio.effects.offset_y"),value:o.offsetY,min:-100,max:100,onChange:_=>S({offsetY:_})}),e.jsx(hi,{label:r("studio.effects.zoom"),value:o.zoom,min:10,max:400,onChange:_=>S({zoom:_})})]}),e.jsxs("div",{className:"mirror-fold-actions",children:[e.jsx("button",{type:"button",onClick:()=>S({position:50}),children:r("studio.effects.center")}),e.jsx("button",{type:"button",onClick:()=>p({...kg,enabled:o.enabled}),children:r("studio.effects.reset")})]})]}):null,e.jsx("button",{className:"mirror-fold-compare",type:"button","aria-pressed":g,onPointerDown:_=>{_.currentTarget.setPointerCapture(_.pointerId),f(!0)},onPointerUp:()=>f(!1),onPointerCancel:()=>f(!1),onLostPointerCapture:()=>f(!1),onBlur:()=>f(!1),onKeyDown:_=>{(_.key===" "||_.key==="Enter")&&(_.preventDefault(),f(!0))},onKeyUp:()=>f(!1),children:r("studio.effects.compare")}),e.jsx("p",{className:"mirror-fold-note",children:r("studio.effects.note")})]})}const Nc="trickcal.studio.effectPresets.v1";function Pm(o){try{const p=JSON.parse(o??"null");if((p==null?void 0:p.version)!==1||!Array.isArray(p.presets))return[];const g=new Set;return p.presets.filter(f=>{if(!f||typeof f!="object")return!1;const i=f;return typeof i.id!="string"||!i.id||g.has(i.id)||typeof i.name!="string"||!i.name.trim()?!1:(g.add(i.id),!0)}).map(f=>({id:f.id,name:f.name.trim().slice(0,80),effects:mt({...f.effects,targetModelIds:[]}),mirror:mi(f.mirror)}))}catch{return[]}}function Ia(){try{return Pm(window.localStorage.getItem(Nc))}catch{return[]}}function Mf(o){try{const p=JSON.stringify({version:1,presets:o}),g=Pm(p);return window.localStorage.setItem(Nc,JSON.stringify({version:1,presets:g})),!0}catch{return!1}}function Af({effects:o,mirror:p,onApply:g}){const{t:f}=Ui(),[i,r]=d.useState(Ia),[S,_]=d.useState(""),[M,L]=d.useState(""),[O,N]=d.useState(!1),[T,D]=d.useState(!1),[Y,q]=d.useState(!1);d.useEffect(()=>{const z=P=>{P instanceof StorageEvent&&P.key!==Nc&&P.key!==null||r(Ia())};return window.addEventListener("storage",z),window.addEventListener("studio-effect-presets-updated",z),()=>{window.removeEventListener("storage",z),window.removeEventListener("studio-effect-presets-updated",z)}},[]),d.useEffect(()=>{q(!1)},[o,p]);const $=i.find(z=>z.id===S),G=z=>{const P=Mf(z);return N(!P),q(P),P&&(r(z),window.dispatchEvent(new Event("studio-effect-presets-updated"))),P},I=()=>({effects:mt(o),mirror:mi(p)});return e.jsxs("details",{className:"meme-presets",children:[e.jsx("summary",{children:f("studio.meme.presets")}),e.jsxs("div",{className:"meme-effect-body",children:[e.jsx("p",{children:f("studio.meme.presets_note")}),e.jsxs("label",{className:"mirror-fold-scope",children:[e.jsx("span",{children:f("studio.meme.preset_choose")}),e.jsxs("select",{value:S,onChange:z=>{var de;const P=z.target.value;_(P),L(((de=i.find(Se=>Se.id===P))==null?void 0:de.name)??""),D(!1),q(!1)},children:[e.jsx("option",{value:"",children:f("studio.meme.preset_none")}),i.map(z=>e.jsx("option",{value:z.id,children:z.name},z.id))]})]}),e.jsxs("label",{className:"mirror-fold-scope",children:[e.jsx("span",{children:f("studio.meme.preset_name")}),e.jsx("input",{type:"text",maxLength:80,value:M,onChange:z=>{L(z.target.value),q(!1)}})]}),e.jsxs("div",{className:"meme-preset-actions",children:[e.jsx("button",{type:"button",disabled:!M.trim(),onClick:()=>{var P,de;const z=((de=(P=globalThis.crypto)==null?void 0:P.randomUUID)==null?void 0:de.call(P))??`preset-${Date.now()}-${Math.random().toString(36).slice(2)}`;G([...Ia(),{id:z,name:M.trim(),...I()}])&&_(z)},children:f("studio.meme.preset_save_new")}),e.jsx("button",{type:"button",disabled:!$,onClick:()=>{$&&(g($),q(!1))},children:f("studio.meme.preset_apply")}),e.jsx("button",{type:"button",disabled:!$,onClick:()=>{$&&G(Ia().map(z=>z.id===S?{...z,...I()}:z))},children:f("studio.meme.preset_update")}),e.jsx("button",{type:"button",disabled:!$||!M.trim(),onClick:()=>G(Ia().map(z=>z.id===S?{...z,name:M.trim()}:z)),children:f("studio.meme.preset_rename")}),e.jsx("button",{className:"meme-preset-delete",type:"button",disabled:!$,onClick:()=>{if(!T){D(!0);return}G(Ia().filter(z=>z.id!==S))&&(_(""),L(""),D(!1))},children:f(T?"studio.meme.preset_confirm_delete":"studio.meme.preset_delete")})]}),O?e.jsx("p",{role:"alert",children:f("studio.meme.preset_error")}):Y?e.jsx("p",{role:"status",children:f("studio.meme.preset_saved")}):null]})]})}const If={amount:"amount",speed:"frequency",width:"line_width",count:"copies",distance:"distance",opacity:"opacity",angle:"angle",x:"x",y:"y",radius:"radius",zoom:"magnification",layers:"clone_layers",size:"clone_size",shrink:"clone_shrink",twist:"clone_twist"};function Ef({id:o,value:p,onChange:g,readCurrentTime:f}){var O;const{t:i}=Ui(),[r,S]=d.useState(0),_=((O=p.keyframes)==null?void 0:O[o])??[],M=Object.entries(yg[o]),L=N=>g(mt({...p,keyframes:{...p.keyframes,[o]:N}}));return e.jsxs("details",{className:"meme-keyframes meme-timing",children:[e.jsxs("summary",{children:[i("studio.meme.keyframes")," ",_.length?`· ${_.length}`:""]}),e.jsxs("div",{children:[e.jsx("p",{children:i("studio.meme.keyframes_note")}),e.jsx(hi,{label:i("studio.meme.keyframe_time"),value:r,min:0,max:3600,precision:3,onChange:S}),f?e.jsx("button",{type:"button",onClick:()=>S(Math.round(Math.max(0,Math.min(3600,f()))*1e3)/1e3),children:i("studio.meme.keyframe_use_current")}):null,e.jsx("button",{className:"meme-keyframe-add",type:"button",disabled:_.length>=100&&!_.some(N=>N.time===r),onClick:()=>L([..._.filter(N=>N.time!==r),{time:r,values:Object.fromEntries(M.map(([N])=>[N,Number(p[o][N])]))}]),children:i("studio.meme.keyframe_add")}),_.map((N,T)=>e.jsxs("details",{className:"meme-keyframe-item",children:[e.jsx("summary",{children:i("studio.meme.keyframe_at",{time:N.time})}),e.jsxs("div",{children:[e.jsx(hi,{label:i("studio.meme.keyframe_time"),value:N.time,min:0,max:3600,precision:3,onChange:D=>L(_.map((Y,q)=>q===T?{...Y,time:D}:Y))}),e.jsxs("label",{className:"mirror-fold-scope",children:[e.jsx("span",{children:i("studio.meme.keyframe_easing")}),e.jsx("select",{value:N.easing??"linear",onChange:D=>L(_.map((Y,q)=>q===T?{...Y,easing:D.target.value}:Y)),children:wg.map(D=>e.jsx("option",{value:D,children:i(`studio.meme.easing_${D}`)},D))})]}),e.jsx("p",{children:i("studio.meme.keyframe_easing_note")}),M.map(([D,[Y,q]])=>e.jsx(hi,{label:i(`studio.meme.${o==="clones"&&D==="speed"?"rotation_speed":o==="clones"&&D==="radius"?"clone_spread":If[D]}`),value:N.values[D]??Number(p[o][D]),min:Y,max:q,onChange:$=>L(_.map((G,I)=>I===T?{...G,values:{...G.values,[D]:$}}:G))},D)),e.jsx("button",{className:"meme-keyframe-remove",type:"button",onClick:()=>L(_.filter((D,Y)=>Y!==T)),children:i("studio.meme.keyframe_remove")})]})]},`${T}-${N.time}`)),_.length?e.jsx("button",{type:"button",onClick:()=>L([]),children:i("studio.meme.keyframe_clear")}):null]})]})}function Rf({render:o,disabled:p}){const{t:g}=Ui(),f=d.useRef(null),i=d.useRef(null),r=d.useRef(null),S=d.useRef(null),_=d.useRef(!0),[M,L]=d.useState(!1),[O,N]=d.useState(!1),[T,D]=d.useState(null),[Y,q]=d.useState(""),[$,G]=d.useState(!1),[I,z]=d.useState({width:0,height:0}),P=()=>{var F;(F=r.current)==null||F.abort(),r.current=null,S.current&&URL.revokeObjectURL(S.current),S.current=null};d.useEffect(()=>(_.current=!0,()=>{_.current=!1,P()}),[]),d.useEffect(()=>{var F,oe,V;M&&!((F=f.current)!=null&&F.open)?(oe=f.current)==null||oe.showModal():!M&&((V=f.current)!=null&&V.open)&&f.current.close()},[M]);const de=()=>{var F,oe;P(),(F=f.current)==null||F.close(),D(null),L(!1),N(!1),z({width:0,height:0}),(oe=i.current)==null||oe.focus()},Se=async()=>{P(),D(null),z({width:0,height:0}),q(""),N(!0);const F=new AbortController;r.current=F;try{const oe=await o(F.signal);if(F.signal.aborted||!_.current)return;const V=URL.createObjectURL(oe);S.current=V,D(V)}catch(oe){!F.signal.aborted&&_.current&&q(oe instanceof Error?oe.message:g("studio.meme.output_error"))}finally{r.current===F&&_.current&&N(!1)}};return e.jsxs(e.Fragment,{children:[e.jsx("button",{ref:i,className:"meme-output-open",type:"button",disabled:p,onClick:()=>{L(!0),G(!1),Se()},children:g("studio.meme.output_preview")}),e.jsxs("dialog",{ref:f,className:"meme-output-dialog","aria-labelledby":"meme-output-title",onCancel:F=>{F.preventDefault(),de()},onClick:F=>{if(F.target===F.currentTarget){const oe=F.currentTarget.getBoundingClientRect();(F.clientX<oe.left||F.clientX>oe.right||F.clientY<oe.top||F.clientY>oe.bottom)&&de()}},children:[e.jsxs("header",{children:[e.jsxs("div",{children:[e.jsx("h2",{id:"meme-output-title",children:g("studio.meme.output_preview")}),e.jsx("p",{children:g("studio.meme.output_note")})]}),e.jsx("button",{type:"button",onClick:de,"aria-label":g("studio.meme.output_close"),children:"×"})]}),e.jsxs("div",{className:"meme-output-toolbar",children:[e.jsxs("div",{className:"meme-output-scale",children:[e.jsx("button",{type:"button","aria-pressed":!$,onClick:()=>G(!1),children:g("studio.meme.output_native")}),e.jsx("button",{type:"button","aria-pressed":$,onClick:()=>G(!0),children:g("studio.meme.output_fit")})]}),e.jsx("span",{children:I.width?`${I.width} × ${I.height}`:""}),e.jsx("button",{type:"button",disabled:O||p,onClick:()=>void Se(),children:g("studio.meme.output_refresh")})]}),e.jsx("div",{className:`meme-output-image${$?" is-fit":""}`,"aria-busy":O,tabIndex:0,role:"region","aria-label":g("studio.meme.output_alt"),children:O?e.jsx("p",{role:"status",children:g("studio.meme.output_loading")}):Y?e.jsx("p",{role:"alert",children:Y}):T?e.jsx("img",{src:T,alt:g("studio.meme.output_alt"),onLoad:F=>z({width:F.currentTarget.naturalWidth,height:F.currentTarget.naturalHeight})}):null})]})]})}function mc({value:o,onChange:p}){const{t:g}=Ui();return e.jsxs(e.Fragment,{children:[e.jsxs("label",{className:"mirror-fold-scope meme-playback-control",children:[e.jsx("span",{children:g("studio.meme.playback")}),e.jsx("select",{value:o.playback,onChange:f=>p({...o,playback:f.target.value}),children:["forward","reverse","pingpong"].map(f=>e.jsx("option",{value:f,children:g(`studio.meme.${f}`)},f))}),e.jsx("small",{children:g("studio.meme.playback_note")})]}),e.jsxs("label",{className:"meme-check",children:[e.jsx("input",{type:"checkbox",checked:o.loopSync===!0,onChange:f=>p({...o,loopSync:f.target.checked})}),e.jsx("span",{children:g("studio.meme.loop_sync")})]}),e.jsx("small",{children:g("studio.meme.loop_sync_note")})]})}function Lf({mirror:o,onMirrorChange:p,value:g,onChange:f,compare:i,onCompare:r,models:S=[],history:_,readCurrentTime:M,renderOutput:L,outputDisabled:O}){var rn,Ze;const{t:N}=Ui(),T=mt(g),[D,Y]=d.useState("deform"),[q,$]=d.useState("mirror"),[G,I]=d.useState("caption"),z=lc(T),P=z.find(k=>k.id===G)??z[0],de=(k,Q)=>f(mt({...T,[k]:{...T[k],...Q}})),Se=k=>f(dc(T,P.id,k)),F=(k,Q,J,ne,be)=>{const we=Number((k==="caption"?P:T[k])[Q]),Ie=lt=>k==="caption"?Se({[Q]:lt}):de(k,{[Q]:Q==="count"||Q==="layers"?Math.round(lt):lt}),st=Q==="count"||Q==="layers"?1:.1;return e.jsxs("div",{className:"meme-parameter",children:[e.jsx(hi,{label:N(`studio.meme.${J}`),value:we,min:ne,max:be,precision:Q==="start"||Q==="end"?3:1,onChange:Ie}),be<=400?e.jsx("input",{className:"meme-parameter-range",type:"range","aria-label":N(`studio.meme.${J}`),min:ne,max:be,step:st,value:we,style:{background:`linear-gradient(to right,#739e50 ${(we-ne)/(be-ne)*100}%,#dce6d4 0)`},onChange:lt=>Ie(Number(lt.target.value))}):null]})},oe=(k=T.lens)=>de("lens",{points:[...T.lens.points??[],{id:"new",enabled:!0,x:Math.min(100,k.x+8),y:k.y,radius:k.radius,zoom:k.zoom}]}),V=k=>{const Q=T.timing[k],J=(ne,be)=>f(mt({...T,timing:{...T.timing,[k]:{...Q,[ne]:be}}}));return e.jsxs("details",{className:"meme-timing",children:[e.jsx("summary",{children:N("studio.meme.timing")}),e.jsxs("div",{children:[e.jsx("p",{children:N("studio.meme.timing_note")}),[["start",0,3600],["duration",0,3600],["repeats",0,100],["gap",0,3600]].map(([ne,be,we])=>e.jsx(hi,{label:N(`studio.meme.timing_${ne}`),value:Q[ne],min:be,max:we,onChange:Ie=>J(ne,ne==="repeats"?Math.round(Ie):Ie)},ne))]})]})},ge=(k,Q)=>e.jsxs("section",{className:`meme-effect-card${T[k].enabled?" is-enabled":""}`,children:[e.jsxs("div",{className:"meme-effect-heading",children:[e.jsxs("button",{className:"meme-expand",type:"button","aria-expanded":q===k,onClick:()=>$(q===k?"":k),children:[e.jsx("span",{children:N(`studio.meme.${k}`)}),e.jsxs("span",{className:"meme-expand-hint",children:[N("studio.meme.parameters"),e.jsx("svg",{viewBox:"0 0 16 16","aria-hidden":"true",children:e.jsx("path",{d:"m4 6 4 4 4-4"})})]})]}),e.jsxs("label",{className:"meme-effect-toggle",children:[e.jsx("input",{"aria-label":N(`studio.meme.${k}`),type:"checkbox",checked:T[k].enabled,onChange:J=>{de(k,{enabled:J.target.checked}),J.target.checked&&$(k)}}),e.jsx("span",{className:"meme-toggle-track","aria-hidden":"true"}),e.jsx("span",{className:"meme-toggle-text",children:N(T[k].enabled?"studio.meme.on":"studio.meme.off")})]})]}),q===k?e.jsxs("div",{className:"meme-effect-body",children:[Q,k!=="caption"?e.jsxs(e.Fragment,{children:[V(k),e.jsx(Ef,{id:k,value:T,onChange:f,readCurrentTime:M})]}):null,e.jsx("button",{className:"meme-single-reset",type:"button",onClick:()=>f(mt({...T,[k]:{...Dd[k],enabled:T[k].enabled},captions:k==="caption"?[]:T.captions,keyframes:k==="caption"?T.keyframes:{...T.keyframes,[k]:[]},timing:k==="caption"?T.timing:{...T.timing,[k]:{...Dd.timing[k]}}})),children:N("studio.meme.reset_one")})]}):null]},k),Ye=Lu.filter(k=>T[k].enabled),Ve=T.order.filter(k=>T[k].enabled),ue=(k,Q)=>{const J=[...T.order],ne=Ve.indexOf(k),be=Ve[ne+Q];if(!be)return;const we=J.indexOf(k),Ie=J.indexOf(be);[J[we],J[Ie]]=[J[Ie],J[we]],f({...T,order:J})};return e.jsxs("div",{className:"meme-effects-panel",onKeyDown:k=>{if(!_||!(k.ctrlKey||k.metaKey)||k.altKey||k.target.closest('dialog,input,textarea,select,[contenteditable="true"]'))return;const J=k.key.toLowerCase();(J==="z"||J==="y")&&(k.preventDefault(),k.stopPropagation(),J==="y"||k.shiftKey?_.redo():_.undo())},children:[_?e.jsxs("div",{className:"meme-history-actions",children:[e.jsx("button",{type:"button",disabled:!_.canUndo,onClick:_.undo,children:N("studio.meme.undo")}),e.jsx("button",{type:"button",disabled:!_.canRedo,onClick:_.redo,children:N("studio.meme.redo")})]}):null,e.jsxs("div",{className:"meme-effect-overview",children:[e.jsx("span",{children:N("studio.meme.enabled_count",{count:Ye.length+Number(o.enabled)+Number(T.caption.enabled)+ +(T.playback!=="forward")})}),e.jsx("button",{type:"button",onClick:()=>{const k=mt(T);for(const Q of Lu)k[Q].enabled=!1;k.caption.enabled=!1,k.playback="forward",f(k),p({...o,enabled:!1})},children:N("studio.meme.disable_all")})]}),e.jsx("div",{className:"meme-category-tabs",role:"tablist",children:["deform","animate","decorate"].map(k=>e.jsx("button",{type:"button",role:"tab","aria-selected":D===k,className:D===k?"is-active":"",onClick:()=>{Y(k),$(k==="deform"?"mirror":k==="animate"?"motion":"outline")},children:N(`studio.meme.${k}`)},k))}),D==="deform"?e.jsxs(e.Fragment,{children:[e.jsxs("details",{className:"meme-mirror-details",open:!0,children:[e.jsx("summary",{children:N("studio.effects.mirror")}),e.jsx(Tf,{value:o,onChange:p,compare:i,onCompare:r,compactWhenDisabled:!0})]}),ge("squash",e.jsxs(e.Fragment,{children:[F("squash","amount","amount",0,60),F("squash","speed","frequency",.1,12)]})),ge("bulge",e.jsxs(e.Fragment,{children:[e.jsx("p",{children:N("studio.meme.bulge_note")}),e.jsxs("label",{className:"mirror-fold-scope",children:[e.jsx("span",{children:N("studio.meme.bulge_mode")}),e.jsx("select",{value:T.bulge.mode,onChange:k=>de("bulge",{mode:k.target.value}),children:["local","whole"].map(k=>e.jsx("option",{value:k,children:N(`studio.meme.bulge_${k}`)},k))})]}),e.jsxs("label",{className:"mirror-fold-scope",children:[e.jsx("span",{children:N("studio.meme.bulge_axis")}),e.jsx("select",{value:T.bulge.axis,onChange:k=>de("bulge",{axis:k.target.value}),children:["both","wide","tall"].map(k=>e.jsx("option",{value:k,children:N(`studio.meme.bulge_${k}`)},k))})]}),F("bulge","amount","amount",0,100),F("bulge","speed","frequency",0,4),F("bulge","x","x",0,100),F("bulge","y","y",0,100),T.bulge.mode==="local"?F("bulge","radius","radius",5,100):null]})),ge("lens",e.jsxs(e.Fragment,{children:[e.jsx("p",{children:N("studio.meme.lens_multi_note")}),e.jsx("strong",{children:N("studio.meme.lens_region",{number:1})}),e.jsxs("label",{className:"meme-check",children:[e.jsx("input",{type:"checkbox",checked:T.lens.primaryEnabled!==!1,onChange:k=>de("lens",{primaryEnabled:k.target.checked})}),N("studio.meme.lens_region_enabled")]}),F("lens","x","x",0,100),F("lens","y","y",0,100),F("lens","radius","radius",2,75),F("lens","zoom","magnification",25,300),(T.lens.points??[]).map((k,Q)=>e.jsxs("details",{className:"meme-lens-item",open:!0,children:[e.jsx("summary",{children:N("studio.meme.lens_region",{number:Q+2})}),e.jsxs("div",{children:[e.jsxs("label",{className:"meme-check",children:[e.jsx("input",{type:"checkbox",checked:k.enabled,onChange:J=>f(ns(T,k.id,{enabled:J.target.checked}))}),N("studio.meme.lens_region_enabled")]}),[["x","x",0,100],["y","y",0,100],["radius","radius",2,75],["zoom","magnification",25,300]].map(([J,ne,be,we])=>e.jsxs("div",{className:"meme-parameter",children:[e.jsx(hi,{label:N(`studio.meme.${ne}`),value:k[J],min:be,max:we,onChange:Ie=>f(ns(T,k.id,{[J]:Ie}))}),e.jsx("input",{className:"meme-parameter-range",type:"range","aria-label":N(`studio.meme.${ne}`),min:be,max:we,step:.1,value:k[J],style:{background:`linear-gradient(to right,#739e50 ${(k[J]-be)/(we-be)*100}%,#dce6d4 0)`},onChange:Ie=>f(ns(T,k.id,{[J]:Number(Ie.target.value)}))})]},J)),e.jsxs("div",{className:"meme-preset-actions",children:[e.jsx("button",{type:"button",onClick:()=>oe({...T.lens,...k}),children:N("studio.meme.lens_duplicate")}),e.jsx("button",{type:"button",onClick:()=>{var J;return de("lens",{points:(J=T.lens.points)==null?void 0:J.filter(ne=>ne.id!==k.id)})},children:N("studio.meme.lens_remove")})]})]})]},k.id)),e.jsx("button",{className:"meme-add-lens",type:"button",onClick:()=>oe(),children:N("studio.meme.lens_add")})]}))]}):D==="animate"?e.jsxs(e.Fragment,{children:[ge("motion",e.jsxs(e.Fragment,{children:[e.jsxs("label",{className:"mirror-fold-scope",children:[e.jsx("span",{children:N("studio.meme.motion_kind")}),e.jsx("select",{value:T.motion.kind,onChange:k=>de("motion",{kind:k.target.value}),children:["sway","shake","nod"].map(k=>e.jsx("option",{value:k,children:N(`studio.meme.${k}`)},k))})]}),F("motion","amount","amount",0,30),F("motion","speed","frequency",.1,12)]})),ge("ghost",e.jsxs(e.Fragment,{children:[e.jsx("p",{children:N("studio.meme.ghost_note")}),F("ghost","count","copies",1,8),F("ghost","distance","distance",0,40),F("ghost","opacity","opacity",0,90),F("ghost","angle","angle",-180,180)]})),ge("clones",e.jsxs(e.Fragment,{children:[e.jsx("p",{children:N("studio.meme.clones_note")}),e.jsxs("label",{className:"mirror-fold-scope",children:[e.jsx("span",{children:N("studio.meme.clones_kind")}),e.jsx("select",{value:T.clones.kind,onChange:k=>de("clones",{kind:k.target.value}),children:["line","ring","spiral"].map(k=>e.jsx("option",{value:k,children:N(`studio.meme.clones_${k}`)},k))})]}),F("clones","count","copies",2,12),T.clones.kind!=="line"?e.jsxs(e.Fragment,{children:[F("clones","layers","clone_layers",1,Math.min(6,Math.floor(64/T.clones.count))),F("clones","shrink","clone_shrink",40,90)]}):null,F("clones","size","clone_size",10,100),F("clones","radius","clone_spread",0,70),F("clones","speed","rotation_speed",-180,180),F("clones","angle","angle",-180,180),T.clones.kind==="spiral"?F("clones","twist","clone_twist",-90,90):null,F("clones","x","x",0,100),F("clones","y","y",0,100),e.jsxs("label",{className:"meme-check",children:[e.jsx("input",{type:"checkbox",checked:T.clones.keepOriginal,onChange:k=>de("clones",{keepOriginal:k.target.checked})}),N("studio.meme.clone_original")]})]})),e.jsx("div",{className:"meme-effect-card meme-effect-body",children:e.jsx(mc,{value:T,onChange:f})})]}):e.jsxs(e.Fragment,{children:[ge("outline",e.jsxs(e.Fragment,{children:[e.jsx("p",{children:N("studio.meme.outline_note")}),F("outline","width","line_width",.1,8),e.jsxs("label",{className:"mirror-fold-number",children:[e.jsx("span",{children:N("studio.meme.color")}),e.jsx("input",{type:"color",value:T.outline.color,onChange:k=>de("outline",{color:k.target.value})})]})]})),ge("caption",e.jsxs(e.Fragment,{children:[e.jsx("p",{children:N("studio.meme.caption_segments_note")}),e.jsxs("label",{className:"mirror-fold-scope",children:[e.jsx("span",{children:N("studio.meme.caption_segment")}),e.jsx("select",{value:P.id,onChange:k=>I(k.target.value),children:z.map((k,Q)=>e.jsxs("option",{value:k.id,children:[N("studio.meme.caption_number",{number:Q+1}),k.text?` · ${k.text.slice(0,14)}`:""]},k.id))})]}),e.jsxs("div",{className:"meme-preset-actions",children:[e.jsx("button",{type:"button",disabled:z.length>=31,onClick:()=>{const k=P.end>P.start?P.end:P.start+1,Q=P.end===0?dc(T,P.id,{end:k}):T,J=mt({...Q,captions:[...Q.captions??[],{...P,id:"new",enabled:!0,text:"",start:k,end:k+1}]});f(J),I(J.captions[J.captions.length-1].id)},children:N("studio.meme.caption_add")}),P.id!=="caption"?e.jsx("button",{type:"button",onClick:()=>{var k;f(mt({...T,captions:(k=T.captions)==null?void 0:k.filter(Q=>Q.id!==P.id)})),I("caption")},children:N("studio.meme.caption_remove")}):null]}),P.id!=="caption"?e.jsxs("label",{className:"meme-check",children:[e.jsx("input",{type:"checkbox",checked:P.enabled,onChange:k=>Se({enabled:k.target.checked})}),N("studio.meme.caption_segment_enabled")]}):null,e.jsx("textarea",{"aria-label":N("studio.meme.text"),value:P.text,rows:3,onChange:k=>Se({text:k.target.value})}),F("caption","x","x",0,100),F("caption","y","y",0,100),F("caption","size","text_size",1,50),F("caption","strokeWidth","line_width",0,5),e.jsxs("label",{className:"mirror-fold-number",children:[e.jsx("span",{children:N("studio.meme.color")}),e.jsx("input",{type:"color",value:P.color,onChange:k=>Se({color:k.target.value})})]}),e.jsxs("label",{className:"mirror-fold-number",children:[e.jsx("span",{children:N("studio.meme.stroke_color")}),e.jsx("input",{type:"color",value:P.stroke,onChange:k=>Se({stroke:k.target.value})})]}),e.jsxs("label",{className:"meme-check",children:[e.jsx("input",{type:"checkbox",checked:P.plate,onChange:k=>Se({plate:k.target.checked})}),N("studio.meme.plate")]}),F("caption","start","start",0,3600),F("caption","end","end",0,3600),P.end>0&&P.end<=P.start?e.jsx("p",{role:"alert",children:N("studio.meme.caption_time_invalid")}):null]}))]}),e.jsxs("div",{className:"meme-effect-card meme-effect-body",children:[e.jsxs("label",{className:"mirror-fold-scope",children:[e.jsx("span",{children:N("studio.meme.scope")}),e.jsxs("select",{value:T.scope,onChange:k=>f({...T,scope:k.target.value}),children:[e.jsx("option",{value:"models",children:N("studio.effects.models")}),e.jsx("option",{value:"all",children:N("studio.effects.all")})]})]}),e.jsx("p",{children:N("studio.meme.scope_note")})]}),T.scope==="models"?e.jsxs("details",{className:"meme-model-targets meme-timing",children:[e.jsx("summary",{children:N("studio.meme.target_models")}),e.jsxs("div",{children:[e.jsx("p",{children:N("studio.meme.target_note")}),e.jsxs("label",{className:"meme-check",children:[e.jsx("input",{type:"checkbox",checked:!((rn=T.targetModelIds)!=null&&rn.length),onChange:()=>f({...T,targetModelIds:[]})}),N("studio.meme.target_all")]}),S.map(k=>{var Q;return e.jsxs("label",{className:"meme-check",children:[e.jsx("input",{type:"checkbox",checked:((Q=T.targetModelIds)==null?void 0:Q.includes(k.id))??!1,onChange:J=>{var ne;return f({...T,targetModelIds:J.target.checked?[...T.targetModelIds??[],k.id]:(ne=T.targetModelIds)==null?void 0:ne.filter(be=>be!==k.id)})}}),e.jsx("span",{children:k.label})]},k.id)}),(Ze=T.targetModelIds)!=null&&Ze.some(k=>!S.some(Q=>Q.id===k))?e.jsx("p",{role:"status",children:N("studio.meme.target_missing")}):null]})]}):null,Ye.length>1?e.jsxs("details",{className:"meme-order",children:[e.jsx("summary",{children:N("studio.meme.order")}),Ve.map((k,Q)=>e.jsxs("div",{children:[e.jsx("span",{children:N(`studio.meme.${k}`)}),e.jsx("button",{type:"button","aria-label":N("studio.layers.move_up"),disabled:Q===0,onClick:()=>ue(k,-1),children:"↑"}),e.jsx("button",{type:"button","aria-label":N("studio.layers.move_down"),disabled:Q===Ve.length-1,onClick:()=>ue(k,1),children:"↓"})]},k))]}):null,e.jsx("button",{className:"meme-original",type:"button","aria-pressed":i,onPointerDown:k=>{k.currentTarget.setPointerCapture(k.pointerId),r(!0)},onPointerUp:()=>r(!1),onPointerCancel:()=>r(!1),onLostPointerCapture:()=>r(!1),onKeyDown:k=>{(k.key===" "||k.key==="Enter")&&(k.preventDefault(),r(!0))},onKeyUp:()=>r(!1),onBlur:()=>r(!1),children:N("studio.effects.compare")}),e.jsx(Af,{effects:T,mirror:o,onApply:k=>{f(mt({...k.effects,targetModelIds:T.targetModelIds})),p(k.mirror),r(!1)}}),L?e.jsx(Rf,{render:L,disabled:O}):null,e.jsx("button",{className:"meme-reset",type:"button",onClick:()=>f(mt(Dd)),children:N("studio.meme.reset")})]})}const Xd=o=>({effects:mt(o.effects),mirror:mi(o.mirror)});function Um(o,p,g=""){if(JSON.stringify(o)===JSON.stringify(p))return[];if(typeof o=="number"&&typeof p=="number")return[g];if(!o||!p||typeof o!="object"||typeof p!="object")return null;const f=o,i=p,r=Object.keys(f);if(r.length!==Object.keys(i).length||r.some(_=>!(_ in i)))return null;const S=[];for(const _ of r){const M=Um(f[_],i[_],`${g}.${_}`);if(M===null)return null;S.push(...M)}return S}function Pf(o,p=50){let g=Xd(o),f=[],i=[],r,S="",_=-1/0;const M=()=>{r=void 0,S="",_=-1/0};return{get present(){return g},get canUndo(){return f.length>0},get canRedo(){return i.length>0},update(L,O,N=Date.now()){var q;const T=Xd(L);if(JSON.stringify(g)===JSON.stringify(T))return!1;const D=((q=Um(g,T))==null?void 0:q.sort().join("|"))??"";return r===O||!!D&&D===S&&N-_<500||(f.push(g),f.length>p&&f.shift()),g=T,i=[],r=O,S=D,_=N,!0},undo(){return f.length?(i.push(g),g=f.pop(),M(),!0):!1},redo(){return i.length?(f.push(g),g=i.pop(),M(),!0):!1},replace(L){g=Xd(L),f=[],i=[],M()}}}function Uf(o){const p=d.useRef();p.current||(p.current=Pf(o()));const[,g]=d.useState(0),f=d.useRef(0),i=d.useRef(!1),r=d.useCallback(T=>{const D=p.current;D.update({...D.present,...T},f.current)&&g(Y=>Y+1),i.current||(i.current=!0,queueMicrotask(()=>{f.current++,i.current=!1}))},[]),S=d.useCallback(T=>r({effects:typeof T=="function"?T(p.current.present.effects):T}),[r]),_=d.useCallback(T=>r({mirror:typeof T=="function"?T(p.current.present.mirror):T}),[r]),M=d.useCallback(()=>{p.current.undo()&&g(T=>T+1)},[]),L=d.useCallback(()=>{p.current.redo()&&g(T=>T+1)},[]),O=d.useCallback(T=>{p.current.replace(T),g(D=>D+1)},[]),N=p.current;return{memeEffects:N.present.effects,mirrorFold:N.present.mirror,setMemeEffects:S,setMirrorFold:_,undo:M,redo:L,replace:O,canUndo:N.canUndo,canRedo:N.canRedo}}function Df(){const o=new Map,p=new Map;return{capture(g,f=0,i=f){p.set(g,i);let r=o.get(g);r||(r=document.createElement("canvas"),o.set(g,r)),(r.width!==g.width||r.height!==g.height)&&(r.width=g.width,r.height=g.height);const S=r.getContext("2d");S.clearRect(0,0,r.width,r.height),S.drawImage(g,0,0)},get(g){return o.get(g)},time(g){return p.get(g)??0},prune(g){for(const[f,i]of o)g.contains(f)||(i.width=i.height=0,o.delete(f),p.delete(f))},clear(){for(const g of o.values())g.width=g.height=0;o.clear(),p.clear()}}}function Vu({stageRef:o,capture:p,settings:g,effects:f,loopDuration:i,onEffectsChange:r,showGuide:S,compare:_,onPosition:M,label:L}){const O=d.useRef(null),{t:N}=Ui(),T=d.useRef(null),D=d.useRef({settings:g,effects:f,compare:_,loopDuration:i});D.current={settings:g,effects:f,compare:_,loopDuration:i};const Y=d.useRef(null);d.useEffect(()=>{const I=o.current,z=O.current,P=T.current;if(!I||!z||!P)return;const de=document.createElement("canvas"),Se=document.createElement("canvas"),F=de.getContext("2d"),oe=Se.getContext("2d"),V=z.getContext("2d"),ge=_g(),Ye=Sg();let Ve=0;const ue=()=>{const rn=I.querySelector(".focus-frame");if(!rn){Ve=requestAnimationFrame(ue);return}const Ze=rn.getBoundingClientRect(),k=I.getBoundingClientRect(),Q=Math.max(1,Math.round(Ze.width)),J=Math.max(1,Math.round(Ze.height));P.style.left=`${Ze.left-k.left}px`,P.style.top=`${Ze.top-k.top}px`,P.style.width=`${Ze.width}px`,P.style.height=`${Ze.height}px`,(z.width!==Q||z.height!==J)&&(z.width=de.width=Se.width=Q,z.height=de.height=Se.height=J),F.clearRect(0,0,Q,J),p.prune(I);const ne=D.current.settings,be=Ng(D.current.effects,D.current.loopDuration??0),we=I.querySelector(".stage-spine:not(.is-hidden) canvas"),Ie=we?p.time(we):0,st=Pu(Cg(be,Ie));for(const re of P.querySelectorAll(".meme-lens-guide")){const Be=st.find(Ge=>Ge.id===re.dataset.lensId);if(Be){const Ge=Math.min(Q,J)*Be.radius/50;re.style.width=re.style.height=`${Ge}px`,re.style.left=`${Be.x}%`,re.style.top=`${Be.y}%`}}for(const re of P.querySelectorAll(".meme-caption-guide")){const Be=lc(be).find(Ge=>Ge.id===re.dataset.lensId);re.style.visibility=Be&&Ie>=Be.start&&(!Be.end||Ie<Be.end)?"visible":"hidden"}for(const re of I.querySelectorAll(":scope > .stage-spine, :scope > .stage-background-layer")){const Be=re.classList.contains("stage-spine");if(re.classList.contains("is-hidden")||!Be&&I.classList.contains("is-solo"))continue;if(oe.setTransform(1,0,0,1,0,0),oe.clearRect(0,0,Q,J),oe.save(),Be){const nt=re.querySelector("canvas"),fn=nt&&p.get(nt),Nn=re.firstElementChild;if(!fn||!Nn){oe.restore();continue}const ht=re.getBoundingClientRect(),gi=getComputedStyle(Nn),[Fo,zo]=gi.transformOrigin.split(" ").map(parseFloat);if(oe.translate(ht.left-Ze.left,ht.top-Ze.top),oe.translate(Fo||0,zo||0),gi.transform!=="none"){const ve=new DOMMatrix(gi.transform);oe.transform(ve.a,ve.b,ve.c,ve.d,ve.e,ve.f)}oe.translate(-(Fo||0),-(zo||0)),oe.drawImage(fn,0,0,ht.width,ht.height)}else{const nt=getComputedStyle(re),[fn,Nn]=nt.transformOrigin.split(" ").map(parseFloat);if(oe.globalAlpha=Number(re.style.opacity||1),oe.translate(re.offsetLeft-(Ze.left-k.left),re.offsetTop-(Ze.top-k.top)),oe.translate(fn||0,Nn||0),nt.transform!=="none"){const ht=new DOMMatrix(nt.transform);oe.transform(ht.a,ht.b,ht.c,ht.d,ht.e,ht.f)}oe.translate(-(fn||0),-(Nn||0)),re instanceof HTMLImageElement&&re.complete&&re.naturalWidth||re instanceof HTMLCanvasElement?oe.drawImage(re,0,0,re.offsetWidth,re.offsetHeight):re.classList.contains("is-solid")&&(oe.fillStyle=nt.backgroundColor,oe.fillRect(0,0,re.offsetWidth,re.offsetHeight))}oe.restore();let Ge=Se;Be&&ne.enabled&&ne.scope==="models"&&(Ge=ge.draw(Ge,Q,J,ne)),Be&&be.scope==="models"&&Tg(be,re.dataset.modelLayerId)&&(Ge=Ye.draw(Ge,Q,J,be,Ie)),F.drawImage(Ge,0,0,Q,J)}V.clearRect(0,0,Q,J);let lt=de;ne.enabled&&ne.scope==="all"&&(lt=ge.draw(lt,Q,J,ne)),be.scope==="all"&&(lt=Ye.draw(lt,Q,J,be,Ie)),V.drawImage(lt,0,0,Q,J),Mg(V,Q,J,be,Ie),I.classList.add("has-mirror-preview"),Ve=requestAnimationFrame(ue)};return Ve=requestAnimationFrame(ue),()=>{cancelAnimationFrame(Ve),ge.dispose(),Ye.dispose(),p.clear(),de.width=Se.width=0,I.classList.remove("has-mirror-preview")}},[p,o]);const q=jg(100,100,g).vertical,$=[...Pu(f).map((I,z)=>({...I,kind:"lens",number:z+1})).filter(I=>f.lens.enabled&&I.enabled),...f.caption.enabled?lc(f).filter(I=>I.enabled).map((I,z)=>({...I,kind:"caption",radius:0,number:z+1})):[]],G=(I,z,P)=>{var Se,F;const de={x:Math.max(0,Math.min(100,z)),y:Math.max(0,Math.min(100,P))};I.kind==="lens"&&I.id==="primary"&&((F=(Se=f.keyframes)==null?void 0:Se.lens)!=null&&F.length)||r(I.kind==="lens"?ns(f,I.id,de):dc(f,I.id,de))};return e.jsxs("div",{ref:T,className:`mirror-fold-preview${_?" is-comparing":""}`,children:[e.jsx("canvas",{ref:O,"aria-hidden":"true"}),S&&g.enabled&&!_?e.jsx("button",{type:"button",className:`mirror-fold-divider ${q?"is-vertical":"is-horizontal"}`,style:q?{left:`${g.position}%`}:{top:`${g.position}%`},"aria-label":L,onPointerDown:I=>{I.preventDefault(),I.stopPropagation(),I.currentTarget.setPointerCapture(I.pointerId)},onPointerMove:I=>{if(!I.currentTarget.hasPointerCapture(I.pointerId))return;const z=T.current.getBoundingClientRect();M(100*(q?(I.clientX-z.left)/z.width:(I.clientY-z.top)/z.height))},onPointerUp:I=>{I.currentTarget.hasPointerCapture(I.pointerId)&&I.currentTarget.releasePointerCapture(I.pointerId)},onKeyDown:I=>{["ArrowLeft","ArrowUp","ArrowRight","ArrowDown"].includes(I.key)&&(I.preventDefault(),M(g.position+(["ArrowLeft","ArrowUp"].includes(I.key)?-1:1)*(I.shiftKey?10:1)))},children:e.jsx("span",{children:"↔"})}):null,S&&!_?$.map(I=>{var z,P,de,Se,F,oe;return e.jsxs("div",{className:`meme-${I.kind}-guide`,"data-lens-id":I.id,style:{left:`${I.x}%`,top:`${I.y}%`,pointerEvents:I.kind==="lens"&&I.id==="primary"&&((P=(z=f.keyframes)==null?void 0:z.lens)!=null&&P.length)?"none":void 0},tabIndex:I.kind==="lens"&&I.id==="primary"&&((Se=(de=f.keyframes)==null?void 0:de.lens)!=null&&Se.length)?-1:0,role:"group","aria-label":I.kind==="lens"?N("studio.meme.lens_region",{number:I.number}):N("studio.meme.caption_number",{number:I.number}),onKeyDown:V=>{if(!["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(V.key))return;V.preventDefault(),V.stopPropagation();const ge=V.shiftKey?5:.5;G(I,I.x+(V.key==="ArrowLeft"?-ge:V.key==="ArrowRight"?ge:0),I.y+(V.key==="ArrowUp"?-ge:V.key==="ArrowDown"?ge:0))},onPointerDown:V=>{V.preventDefault(),V.stopPropagation(),V.currentTarget.setPointerCapture(V.pointerId),Y.current={x:V.clientX,y:V.clientY,startX:I.x,startY:I.y}},onPointerMove:V=>{if(!V.currentTarget.hasPointerCapture(V.pointerId)||!Y.current)return;const ge=T.current.getBoundingClientRect(),Ye=Y.current;G(I,Ye.startX+100*(V.clientX-Ye.x)/ge.width,Ye.startY+100*(V.clientY-Ye.y)/ge.height)},onPointerUp:V=>{Y.current=null,V.currentTarget.hasPointerCapture(V.pointerId)&&V.currentTarget.releasePointerCapture(V.pointerId)},children:[e.jsx("span",{children:I.kind==="lens"?I.number:`✥${I.number}`}),I.kind==="lens"&&!(I.id==="primary"&&((oe=(F=f.keyframes)==null?void 0:F.lens)!=null&&oe.length))?e.jsx("button",{type:"button",className:"meme-lens-resize","aria-label":N("studio.meme.radius"),onPointerDown:V=>{V.preventDefault(),V.stopPropagation(),V.currentTarget.setPointerCapture(V.pointerId)},onPointerMove:V=>{if(!V.currentTarget.hasPointerCapture(V.pointerId))return;const ge=T.current.getBoundingClientRect(),Ye=ge.left+ge.width*I.x/100,Ve=ge.top+ge.height*I.y/100;r(ns(f,I.id,{radius:Math.min(75,Math.max(2,100*Math.hypot(V.clientX-Ye,V.clientY-Ve)/Math.min(ge.width,ge.height)))}))},onPointerUp:V=>{V.currentTarget.hasPointerCapture(V.pointerId)&&V.currentTarget.releasePointerCapture(V.pointerId)}}):null]},I.id)}):null]})}const Ff=""+new URL("Aside_Skill_Alice_1-DphJogbk.png",import.meta.url).href,zf=""+new URL("Aside_Skill_AmeliaR41_1-J3fZBJfD.png",import.meta.url).href,Of=""+new URL("Aside_Skill_Amelia_1-Cq5GN5nS.png",import.meta.url).href,Bf=""+new URL("Aside_Skill_Aragnia_1-B-XXf839.png",import.meta.url).href,$f=""+new URL("Aside_Skill_Arco_1-Gzwm8OkK.png",import.meta.url).href,Hf=""+new URL("Aside_Skill_Arnet_1-Cpg3BdVw.png",import.meta.url).href,Wf=""+new URL("Aside_Skill_Asana_1-DUFhLGKX.png",import.meta.url).href,Yf=""+new URL("Aside_Skill_AshurMagi_1-CMoF7GYU.png",import.meta.url).href,Gf=""+new URL("Aside_Skill_Ashur_1-BCZZpjSD.png",import.meta.url).href,Kf=""+new URL("Aside_Skill_Aurora_1-C_EciH18.png",import.meta.url).href,Xf=""+new URL("Aside_Skill_Aya_1-C_n9j0BN.png",import.meta.url).href,qf=""+new URL("Aside_Skill_Ayla_1-C6KYF3-Z.png",import.meta.url).href,Vf=""+new URL("Aside_Skill_Barong_1-CjLlfrcC.png",import.meta.url).href,Jf=""+new URL("Aside_Skill_Belita_1-CSK44eWj.png",import.meta.url).href,Qf=""+new URL("Aside_Skill_BeniBeni_1-CxbjfIYA.png",import.meta.url).href,Zf=""+new URL("Aside_Skill_Beni_1-Ls7XiWGX.png",import.meta.url).href,eb=""+new URL("Aside_Skill_BigWood_1-jxB-je4Q.png",import.meta.url).href,tb=""+new URL("Aside_Skill_Blanchet_1-aCCEZvRp.png",import.meta.url).href,nb=""+new URL("Aside_Skill_Butter_1-IIyq383n.png",import.meta.url).href,ib=""+new URL("Aside_Skill_Canna_1-Zx4-aVmI.png",import.meta.url).href,ob=""+new URL("Aside_Skill_Chloe_1-DuKtXnjC.png",import.meta.url).href,ab=""+new URL("Aside_Skill_DayaPureShine_1-B3oU9ph3.png",import.meta.url).href,rb=""+new URL("Aside_Skill_Daya_1-WdLB1Mza.png",import.meta.url).href,sb=""+new URL("Aside_Skill_Delia_1-Boj0tSA8.png",import.meta.url).href,lb=""+new URL("Aside_Skill_DianaYester_1-DBSiq9cM.png",import.meta.url).href,db=""+new URL("Aside_Skill_Diana_1-Bt53kGaG.png",import.meta.url).href,cb=""+new URL("Aside_Skill_EdRehab_1-CmpiE2RE.png",import.meta.url).href,pb=""+new URL("Aside_Skill_Ed_1-0h0fddlA.png",import.meta.url).href,ub=""+new URL("Aside_Skill_Eisia_1-CALyJdNC.png",import.meta.url).href,mb=""+new URL("Aside_Skill_Elena_1-YH3t8A6H.png",import.meta.url).href,hb=""+new URL("Aside_Skill_Epica_1-CsblRR7C.png",import.meta.url).href,gb=""+new URL("Aside_Skill_ErpinRoyale_1-QT2p7rVr.png",import.meta.url).href,fb=""+new URL("Aside_Skill_Erpin_1-COX0KkVY.png",import.meta.url).href,bb=""+new URL("Aside_Skill_Espi_1-B34VFHwV.png",import.meta.url).href,xb=""+new URL("Aside_Skill_Festa_1-B1vK7Hyf.png",import.meta.url).href,vb=""+new URL("Aside_Skill_Fricle_1-JV9A1RrG.png",import.meta.url).href,kb=""+new URL("Aside_Skill_Guin_1-DqnD-oD3.png",import.meta.url).href,yb=""+new URL("Aside_Skill_HaleySane_1-DMfYEsE2.png",import.meta.url).href,wb=""+new URL("Aside_Skill_Haley_1-SCNRU2KY.png",import.meta.url).href,_b=""+new URL("Aside_Skill_Heidi_1-Cr8FaAY0.png",import.meta.url).href,Sb=""+new URL("Aside_Skill_Hilde_1-DPZtuBDl.png",import.meta.url).href,jb=""+new URL("Aside_Skill_Inkle_1-CYiFuo-m.png",import.meta.url).href,Nb=""+new URL("Aside_Skill_Jade_1-cAc40BOu.png",import.meta.url).href,Cb=""+new URL("Aside_Skill_Joanne_1-CBUD9eVN.png",import.meta.url).href,Tb=""+new URL("Aside_Skill_Kathy_1-EfFKY_PW.png",import.meta.url).href,Mb=""+new URL("Aside_Skill_Kidian_1-ve1LAJkf.png",import.meta.url).href,Ab=""+new URL("Aside_Skill_Kishya_1-DPLElriF.png",import.meta.url).href,Ib=""+new URL("Aside_Skill_KommySwim_1-BZI7XPQT.png",import.meta.url).href,Eb=""+new URL("Aside_Skill_Kommy_1-KOGx16oz.png",import.meta.url).href,Rb=""+new URL("Aside_Skill_Kyarot_1-C8wzBssh.png",import.meta.url).href,Lb=""+new URL("Aside_Skill_Laika_1-CJ1Unkli.png",import.meta.url).href,Pb=""+new URL("Aside_Skill_Leets_1-D31vttH-.png",import.meta.url).href,Ub=""+new URL("Aside_Skill_LeviGraduate_1-DsJTcecV.png",import.meta.url).href,Db=""+new URL("Aside_Skill_Lion_1-BOuDFhwO.png",import.meta.url).href,Fb=""+new URL("Aside_Skill_MaestroMK2_1-CnK10ckX.png",import.meta.url).href,zb=""+new URL("Aside_Skill_Makasha_1-B4HtsdwI.png",import.meta.url).href,Ob=""+new URL("Aside_Skill_MayoCool_1-tjwV3lot.png",import.meta.url).href,Bb=""+new URL("Aside_Skill_Meluna_1-DfBMGU-g.png",import.meta.url).href,$b=""+new URL("Aside_Skill_Miro_1-DzElrNXl.png",import.meta.url).href,Hb=""+new URL("Aside_Skill_Momo_1-BgKT1kT1.png",import.meta.url).href,Wb=""+new URL("Aside_Skill_Mute_1-BMxLh13F.png",import.meta.url).href,Yb=""+new URL("Aside_Skill_Naia_1-YB8iNzHi.png",import.meta.url).href,Gb=""+new URL("Aside_Skill_NerRage_1-Cq55xtpf.png",import.meta.url).href,Kb=""+new URL("Aside_Skill_Ner_1-DkqsO9dh.png",import.meta.url).href,Xb=""+new URL("Aside_Skill_Neti_1-CmEkIJHI.png",import.meta.url).href,qb=""+new URL("Aside_Skill_Nicole_1-BQg8IUfl.png",import.meta.url).href,Vb=""+new URL("Aside_Skill_Opal_1-Ca4PQ3ty.png",import.meta.url).href,Jb=""+new URL("Aside_Skill_Orr_1-DQSHo5Cz.png",import.meta.url).href,Qb=""+new URL("Aside_Skill_Picora_1-CnBgxWHk.png",import.meta.url).href,Zb=""+new URL("Aside_Skill_Pira_1-DyMX7t9E.png",import.meta.url).href,ex=""+new URL("Aside_Skill_Polan_1-9l5P19QT.png",import.meta.url).href,tx=""+new URL("Aside_Skill_Posher_1-D9b1lOrT.png",import.meta.url).href,nx=""+new URL("Aside_Skill_Ran_1-X7hG7f9B.png",import.meta.url).href,ix=""+new URL("Aside_Skill_RenewaAwaken_1-Dd-zQ5Eg.png",import.meta.url).href,ox=""+new URL("Aside_Skill_Ricota_1-mZb3DT1d.png",import.meta.url).href,ax=""+new URL("Aside_Skill_RimChaos_1-DGgeYovt.png",import.meta.url).href,rx=""+new URL("Aside_Skill_Rim_1-B5HLH7Ua.png",import.meta.url).href,sx=""+new URL("Aside_Skill_Risty_1-WJr3ezB8.png",import.meta.url).href,lx=""+new URL("Aside_Skill_RohneMayor_1-Cl1Qc6o1.png",import.meta.url).href,dx=""+new URL("Aside_Skill_Rollett_1-DZ_7c-0L.png",import.meta.url).href,cx=""+new URL("Aside_Skill_Ronnie_1-Ddu8QP7c.png",import.meta.url).href,px=""+new URL("Aside_Skill_Rude_1-DD8UOwWQ.png",import.meta.url).href,ux=""+new URL("Aside_Skill_Rufo_1-CY-TGjjC.png",import.meta.url).href,mx=""+new URL("Aside_Skill_Scizor_1-BRj9b-VJ.png",import.meta.url).href,hx=""+new URL("Aside_Skill_Selline_1-Bsnx4q7E.png",import.meta.url).href,gx=""+new URL("Aside_Skill_ShadyTwisted_1-CVDOXnb1.png",import.meta.url).href,fx=""+new URL("Aside_Skill_Shady_1-CS9qNfzP.png",import.meta.url).href,bx=""+new URL("Aside_Skill_Shasha_1-CBzzBBNM.png",import.meta.url).href,xx=""+new URL("Aside_Skill_Sherum_1-j_aVTEkt.png",import.meta.url).href,vx=""+new URL("Aside_Skill_Shoupan_1-D7fZk-bC.png",import.meta.url).href,kx=""+new URL("Aside_Skill_Silphir_1-C-zuPfPp.png",import.meta.url).href,yx=""+new URL("Aside_Skill_Silvia_1-BPYyv45x.png",import.meta.url).href,wx=""+new URL("Aside_Skill_Sist_1-CKiCZ7Ic.png",import.meta.url).href,_x=""+new URL("Aside_Skill_Skea_1-CLmtWoou.png",import.meta.url).href,Sx=""+new URL("Aside_Skill_Snorky_1-DBktWCn0.png",import.meta.url).href,jx=""+new URL("Aside_Skill_Sparrot_1-BlEId3eB.png",import.meta.url).href,Nx=""+new URL("Aside_Skill_SpeakiMaid_1-C30eBkG8.png",import.meta.url).href,Cx=""+new URL("Aside_Skill_Suro_1-CWjYFMU5.png",import.meta.url).href,Tx=""+new URL("Aside_Skill_Sylla_1-BB4LidTD.png",import.meta.url).href,Mx=""+new URL("Aside_Skill_TigHero_1-DM4T-Qth.png",import.meta.url).href,Ax=""+new URL("Aside_Skill_Tig_1-BHHJgtqD.png",import.meta.url).href,Ix=""+new URL("Aside_Skill_UiMemory_1-BYf0Ag7p.png",import.meta.url).href,Ex=""+new URL("Aside_Skill_Ui_1-pn1gBYVM.png",import.meta.url).href,Rx=""+new URL("Aside_Skill_Uros_1-Dzzlu32n.png",import.meta.url).href,Lx=""+new URL("Aside_Skill_Vela_1-lJ5LNXJO.png",import.meta.url).href,Px=""+new URL("Aside_Skill_Velvet_1-CKmTufeG.png",import.meta.url).href,Ux=""+new URL("Aside_Skill_ViviDivine_1-BGcddKU1.png",import.meta.url).href,Dx=""+new URL("Aside_Skill_Vivi_1-DWJ-9OnI.png",import.meta.url).href,Fx=""+new URL("Aside_Skill_Yomi_1-DtEA6nuf.png",import.meta.url).href,zx=""+new URL("Aside_Skill_xXionx_1-C0gTL8iQ.png",import.meta.url).href,Ox=Object.assign({"/resources/images/aside-stage1/Aside_Skill_Alice_1.png":Ff,"/resources/images/aside-stage1/Aside_Skill_AmeliaR41_1.png":zf,"/resources/images/aside-stage1/Aside_Skill_Amelia_1.png":Of,"/resources/images/aside-stage1/Aside_Skill_Aragnia_1.png":Bf,"/resources/images/aside-stage1/Aside_Skill_Arco_1.png":$f,"/resources/images/aside-stage1/Aside_Skill_Arnet_1.png":Hf,"/resources/images/aside-stage1/Aside_Skill_Asana_1.png":Wf,"/resources/images/aside-stage1/Aside_Skill_AshurMagi_1.png":Yf,"/resources/images/aside-stage1/Aside_Skill_Ashur_1.png":Gf,"/resources/images/aside-stage1/Aside_Skill_Aurora_1.png":Kf,"/resources/images/aside-stage1/Aside_Skill_Aya_1.png":Xf,"/resources/images/aside-stage1/Aside_Skill_Ayla_1.png":qf,"/resources/images/aside-stage1/Aside_Skill_Barong_1.png":Vf,"/resources/images/aside-stage1/Aside_Skill_Belita_1.png":Jf,"/resources/images/aside-stage1/Aside_Skill_BeniBeni_1.png":Qf,"/resources/images/aside-stage1/Aside_Skill_Beni_1.png":Zf,"/resources/images/aside-stage1/Aside_Skill_BigWood_1.png":eb,"/resources/images/aside-stage1/Aside_Skill_Blanchet_1.png":tb,"/resources/images/aside-stage1/Aside_Skill_Butter_1.png":nb,"/resources/images/aside-stage1/Aside_Skill_Canna_1.png":ib,"/resources/images/aside-stage1/Aside_Skill_Chloe_1.png":ob,"/resources/images/aside-stage1/Aside_Skill_DayaPureShine_1.png":ab,"/resources/images/aside-stage1/Aside_Skill_Daya_1.png":rb,"/resources/images/aside-stage1/Aside_Skill_Delia_1.png":sb,"/resources/images/aside-stage1/Aside_Skill_DianaYester_1.png":lb,"/resources/images/aside-stage1/Aside_Skill_Diana_1.png":db,"/resources/images/aside-stage1/Aside_Skill_EdRehab_1.png":cb,"/resources/images/aside-stage1/Aside_Skill_Ed_1.png":pb,"/resources/images/aside-stage1/Aside_Skill_Eisia_1.png":ub,"/resources/images/aside-stage1/Aside_Skill_Elena_1.png":mb,"/resources/images/aside-stage1/Aside_Skill_Epica_1.png":hb,"/resources/images/aside-stage1/Aside_Skill_ErpinRoyale_1.png":gb,"/resources/images/aside-stage1/Aside_Skill_Erpin_1.png":fb,"/resources/images/aside-stage1/Aside_Skill_Espi_1.png":bb,"/resources/images/aside-stage1/Aside_Skill_Festa_1.png":xb,"/resources/images/aside-stage1/Aside_Skill_Fricle_1.png":vb,"/resources/images/aside-stage1/Aside_Skill_Guin_1.png":kb,"/resources/images/aside-stage1/Aside_Skill_HaleySane_1.png":yb,"/resources/images/aside-stage1/Aside_Skill_Haley_1.png":wb,"/resources/images/aside-stage1/Aside_Skill_Heidi_1.png":_b,"/resources/images/aside-stage1/Aside_Skill_Hilde_1.png":Sb,"/resources/images/aside-stage1/Aside_Skill_Inkle_1.png":jb,"/resources/images/aside-stage1/Aside_Skill_Jade_1.png":Nb,"/resources/images/aside-stage1/Aside_Skill_Joanne_1.png":Cb,"/resources/images/aside-stage1/Aside_Skill_Kathy_1.png":Tb,"/resources/images/aside-stage1/Aside_Skill_Kidian_1.png":Mb,"/resources/images/aside-stage1/Aside_Skill_Kishya_1.png":Ab,"/resources/images/aside-stage1/Aside_Skill_KommySwim_1.png":Ib,"/resources/images/aside-stage1/Aside_Skill_Kommy_1.png":Eb,"/resources/images/aside-stage1/Aside_Skill_Kyarot_1.png":Rb,"/resources/images/aside-stage1/Aside_Skill_Laika_1.png":Lb,"/resources/images/aside-stage1/Aside_Skill_Leets_1.png":Pb,"/resources/images/aside-stage1/Aside_Skill_LeviGraduate_1.png":Ub,"/resources/images/aside-stage1/Aside_Skill_Lion_1.png":Db,"/resources/images/aside-stage1/Aside_Skill_MaestroMK2_1.png":Fb,"/resources/images/aside-stage1/Aside_Skill_Makasha_1.png":zb,"/resources/images/aside-stage1/Aside_Skill_MayoCool_1.png":Ob,"/resources/images/aside-stage1/Aside_Skill_Meluna_1.png":Bb,"/resources/images/aside-stage1/Aside_Skill_Miro_1.png":$b,"/resources/images/aside-stage1/Aside_Skill_Momo_1.png":Hb,"/resources/images/aside-stage1/Aside_Skill_Mute_1.png":Wb,"/resources/images/aside-stage1/Aside_Skill_Naia_1.png":Yb,"/resources/images/aside-stage1/Aside_Skill_NerRage_1.png":Gb,"/resources/images/aside-stage1/Aside_Skill_Ner_1.png":Kb,"/resources/images/aside-stage1/Aside_Skill_Neti_1.png":Xb,"/resources/images/aside-stage1/Aside_Skill_Nicole_1.png":qb,"/resources/images/aside-stage1/Aside_Skill_Opal_1.png":Vb,"/resources/images/aside-stage1/Aside_Skill_Orr_1.png":Jb,"/resources/images/aside-stage1/Aside_Skill_Picora_1.png":Qb,"/resources/images/aside-stage1/Aside_Skill_Pira_1.png":Zb,"/resources/images/aside-stage1/Aside_Skill_Polan_1.png":ex,"/resources/images/aside-stage1/Aside_Skill_Posher_1.png":tx,"/resources/images/aside-stage1/Aside_Skill_Ran_1.png":nx,"/resources/images/aside-stage1/Aside_Skill_RenewaAwaken_1.png":ix,"/resources/images/aside-stage1/Aside_Skill_Ricota_1.png":ox,"/resources/images/aside-stage1/Aside_Skill_RimChaos_1.png":ax,"/resources/images/aside-stage1/Aside_Skill_Rim_1.png":rx,"/resources/images/aside-stage1/Aside_Skill_Risty_1.png":sx,"/resources/images/aside-stage1/Aside_Skill_RohneMayor_1.png":lx,"/resources/images/aside-stage1/Aside_Skill_Rollett_1.png":dx,"/resources/images/aside-stage1/Aside_Skill_Ronnie_1.png":cx,"/resources/images/aside-stage1/Aside_Skill_Rude_1.png":px,"/resources/images/aside-stage1/Aside_Skill_Rufo_1.png":ux,"/resources/images/aside-stage1/Aside_Skill_Scizor_1.png":mx,"/resources/images/aside-stage1/Aside_Skill_Selline_1.png":hx,"/resources/images/aside-stage1/Aside_Skill_ShadyTwisted_1.png":gx,"/resources/images/aside-stage1/Aside_Skill_Shady_1.png":fx,"/resources/images/aside-stage1/Aside_Skill_Shasha_1.png":bx,"/resources/images/aside-stage1/Aside_Skill_Sherum_1.png":xx,"/resources/images/aside-stage1/Aside_Skill_Shoupan_1.png":vx,"/resources/images/aside-stage1/Aside_Skill_Silphir_1.png":kx,"/resources/images/aside-stage1/Aside_Skill_Silvia_1.png":yx,"/resources/images/aside-stage1/Aside_Skill_Sist_1.png":wx,"/resources/images/aside-stage1/Aside_Skill_Skea_1.png":_x,"/resources/images/aside-stage1/Aside_Skill_Snorky_1.png":Sx,"/resources/images/aside-stage1/Aside_Skill_Sparrot_1.png":jx,"/resources/images/aside-stage1/Aside_Skill_SpeakiMaid_1.png":Nx,"/resources/images/aside-stage1/Aside_Skill_Suro_1.png":Cx,"/resources/images/aside-stage1/Aside_Skill_Sylla_1.png":Tx,"/resources/images/aside-stage1/Aside_Skill_TigHero_1.png":Mx,"/resources/images/aside-stage1/Aside_Skill_Tig_1.png":Ax,"/resources/images/aside-stage1/Aside_Skill_UiMemory_1.png":Ix,"/resources/images/aside-stage1/Aside_Skill_Ui_1.png":Ex,"/resources/images/aside-stage1/Aside_Skill_Uros_1.png":Rx,"/resources/images/aside-stage1/Aside_Skill_Vela_1.png":Lx,"/resources/images/aside-stage1/Aside_Skill_Velvet_1.png":Px,"/resources/images/aside-stage1/Aside_Skill_ViviDivine_1.png":Ux,"/resources/images/aside-stage1/Aside_Skill_Vivi_1.png":Dx,"/resources/images/aside-stage1/Aside_Skill_Yomi_1.png":Fx,"/resources/images/aside-stage1/Aside_Skill_xXionx_1.png":zx});function Dm(o){return o.trim().replace(/[^a-z0-9]/giu,"").toLowerCase()}function Bx(o){var g;return((g=(o.split("/").at(-1)??o).match(/^Aside_Skill_(.+)_1\.png$/iu))==null?void 0:g[1])??""}const Fm=new Map;for(const[o,p]of Object.entries(Ox)){const g=Bx(o);g&&Fm.set(Dm(g),p)}function Ju(o){const p=[o,o.replace(/aside$/iu,"")];for(const g of p){const f=Fm.get(Dm(g));if(f)return f}}const $x="/studio/skin-herohead/Alice.png?v=2233e08beac7",Hx="/studio/skin-herohead/AliceSister.png?v=4c9a84ba5152",Wx="/studio/skin-herohead/AliceSkin1.png?v=306322139d0d",Yx="/studio/skin-herohead/AliceSkin2.png?v=573cb8700bdd",Gx="/studio/skin-herohead/AliceSkin3.png?v=98519965f469",Kx="/studio/skin-herohead/AliceSkin4.png?v=8dde71cd3972",Xx="/studio/skin-herohead/Allet.png?v=4e0fc63d805f",qx="/studio/skin-herohead/Amelia.png?v=8556890b1f24",Vx="/studio/skin-herohead/AmeliaR41.png?v=4f2a931ed715",Jx="/studio/skin-herohead/AmeliaR41Skin1.png?v=613ffe2eb888",Qx="/studio/skin-herohead/AmeliaR41Skin2.png?v=ddf2d44bfbf4",Zx="/studio/skin-herohead/AmeliaSkin1.png?v=5e4c571988bb",e1="/studio/skin-herohead/AmeliaSkin2.png?v=178bc60c2180",t1="/studio/skin-herohead/AmeliaSkin3.png?v=7f467081248c",n1="/studio/skin-herohead/AmeliaSkin4.png?v=30b1a5a0f1a9",i1="/studio/skin-herohead/Aragnia.png?v=9e89328bdab0",o1="/studio/skin-herohead/AragniaSkin1.png?v=28d4ef5686e8",a1="/studio/skin-herohead/AragniaSkin2.png?v=f81a0c71c18c",r1="/studio/skin-herohead/Arco.png?v=5b6067e92f12",s1="/studio/skin-herohead/ArcoSkin1.png?v=97dbf92b42d2",l1="/studio/skin-herohead/ArcoSkin2.png?v=e6e2babf8dcf",d1="/studio/skin-herohead/Arnet.png?v=3e467c585edf",c1="/studio/skin-herohead/ArnetSkin1.png?v=4174789b6730",p1="/studio/skin-herohead/ArnetSkin2.png?v=5c2ba1303af6",u1="/studio/skin-herohead/Asana.png?v=c7d8360814ba",m1="/studio/skin-herohead/AsanaSkin1.png?v=a732ade6f514",h1="/studio/skin-herohead/AsanaSkin2.png?v=25ecf81d1a73",g1="/studio/skin-herohead/Ashur.png?v=5865b2952426",f1="/studio/skin-herohead/AshurMagi.png?v=e5d901c08e87",b1="/studio/skin-herohead/AshurMagiSkin1.png?v=827e5f5ec3b6",x1="/studio/skin-herohead/AshurSkin1.png?v=6ab0172af754",v1="/studio/skin-herohead/AshurSkin2.png?v=55ac2bb2e9de",k1="/studio/skin-herohead/Aurora.png?v=8e3a68c07d32",y1="/studio/skin-herohead/AuroraSkin1.png?v=06754e9cc7ca",w1="/studio/skin-herohead/Aya.png?v=ba3cbbdf6ad8",_1="/studio/skin-herohead/AyaSkin1.png?v=51374c55e806",S1="/studio/skin-herohead/AyaSkin2.png?v=7d81a063ab62",j1="/studio/skin-herohead/AyaSkin3.png?v=b08501821129",N1="/studio/skin-herohead/AyaSkin4.png?v=64504aa7b3d6",C1="/studio/skin-herohead/AyaSkin5.png?v=d0f8984f7e63",T1="/studio/skin-herohead/Ayla.png?v=750d05952fac",M1="/studio/skin-herohead/AylaSkin1.png?v=91d2a7f19f0e",A1="/studio/skin-herohead/AylaSkin2.png?v=40d79b3ae177",I1="/studio/skin-herohead/Bana.png?v=ae1d88a18df4",E1="/studio/skin-herohead/Barie.png?v=22f0c983c840",R1="/studio/skin-herohead/Barong.png?v=1785333a9b48",L1="/studio/skin-herohead/BarongSkin1.png?v=4cd64c38b747",P1="/studio/skin-herohead/BarongSkin2.png?v=42fcbb936dd5",U1="/studio/skin-herohead/BarongSkin3.png?v=262bde83a785",D1="/studio/skin-herohead/Belita.png?v=c8cccd9555bc",F1="/studio/skin-herohead/BelitaSkin1.png?v=382637ecbb8f",z1="/studio/skin-herohead/BelitaSkin3.png?v=17e66a50436c",O1="/studio/skin-herohead/Beni.png?v=3b7e38f50099",B1="/studio/skin-herohead/BeniBeni.png?v=6f230f08488a",$1="/studio/skin-herohead/BeniBeniSkin1.png?v=337b80a13200",H1="/studio/skin-herohead/BeniBeniSkin2.png?v=42517dd31d6a",W1="/studio/skin-herohead/BeniSkin1.png?v=8d2205b0ec29",Y1="/studio/skin-herohead/BigWood.png?v=31a53f97545b",G1="/studio/skin-herohead/BigWoodSkin1.png?v=33ce93f58ba0",K1="/studio/skin-herohead/Blanchet.png?v=b502d4afd65b",X1="/studio/skin-herohead/BlanchetSkin1.png?v=fd926aea124e",q1="/studio/skin-herohead/BlanchetSkin2.png?v=6a013af97172",V1="/studio/skin-herohead/BlanchetSkin3.png?v=9db46c5136e2",J1="/studio/skin-herohead/Butter.png?v=fd6449292df7",Q1="/studio/skin-herohead/ButterSkin1.png?v=f2eb0df7d183",Z1="/studio/skin-herohead/ButterSkin2.png?v=4ae88e4500a9",ev="/studio/skin-herohead/ButterSkin3.png?v=1fbf5de9987c",tv="/studio/skin-herohead/Canna.png?v=d2db2f41a7a3",nv="/studio/skin-herohead/CannaSkin1.png?v=123ba5502934",iv="/studio/skin-herohead/CannaSkin2.png?v=06314b471918",ov="/studio/skin-herohead/CannaSkin3.png?v=02d307773f2e",av="/studio/skin-herohead/CannaSkin4.png?v=e2472d74f4a2",rv="/studio/skin-herohead/Canta.png?v=c345673c6e26",sv="/studio/skin-herohead/Carren.png?v=f20c07bceb0d",lv="/studio/skin-herohead/Chloe.png?v=7138b1499212",dv="/studio/skin-herohead/Chloe.png?v=7138b1499212",cv="/studio/skin-herohead/ChloeSkin1.png?v=6fac0f2f18ff",pv="/studio/skin-herohead/ChloeSkin2.png?v=62a3e765b9e2",uv="/studio/skin-herohead/ChloeSkin3.png?v=874d41cc58b5",mv="/studio/skin-herohead/ChloeSkin4.png?v=eedd1a895966",hv="/studio/skin-herohead/ChloeSkin5.png?v=722b40c350b9",gv="/studio/skin-herohead/Chopi.png?v=51a7fd4e2b98",fv="/studio/skin-herohead/Cuee.png?v=048a608d52a3",bv="/studio/skin-herohead/Daya.png?v=b20584c9070d",xv="/studio/skin-herohead/DayaPureShine.png?v=e704cc1e00cd",vv="/studio/skin-herohead/DayaPureShine.png?v=e704cc1e00cd",kv="/studio/skin-herohead/DayaPureShineSkin1.png?v=f16d244c20a4",yv="/studio/skin-herohead/DayaPureShineSkin1.png?v=f16d244c20a4",wv="/studio/skin-herohead/DayaPureShineSkin2.png?v=845c6d08886a",_v="/studio/skin-herohead/DayaPureShineSkin2.png?v=845c6d08886a",Sv="/studio/skin-herohead/DayaPureShineSkin3.png?v=f7a9162dbbb8",jv="/studio/skin-herohead/DayaPureShineSkin3.png?v=f7a9162dbbb8",Nv="/studio/skin-herohead/DayaSkin1.png?v=0252801aff74",Cv="/studio/skin-herohead/DayaSkin2.png?v=31e0acbbec65",Tv="/studio/skin-herohead/DayaSkin3.png?v=b160334d440e",Mv="/studio/skin-herohead/Delia.png?v=8635d4114e56",Av="/studio/skin-herohead/DeliaSkin1.png?v=2c891e749a8b",Iv="/studio/skin-herohead/DeliaSkin2.png?v=449e1c00974e",Ev="/studio/skin-herohead/Diana.png?v=b7f49aea314a",Rv="/studio/skin-herohead/DianaSkin1.png?v=2f0b0866b19b",Lv="/studio/skin-herohead/DianaSkin2.png?v=ef130f16f1f2",Pv="/studio/skin-herohead/DianaSkin3.png?v=8e1fdc5e3352",Uv="/studio/skin-herohead/DianaSkin4.png?v=366945c53216",Dv="/studio/skin-herohead/DianaYester.png?v=fcc76263404f",Fv="/studio/skin-herohead/DianaYester.png?v=fcc76263404f",zv="/studio/skin-herohead/DianaYesterSkin1.png?v=3faca58a1f66",Ov="/studio/skin-herohead/DianaYesterSkin2.png?v=6363cbec0e59",Bv="/studio/skin-herohead/DianaYesterSkin1.png?v=3faca58a1f66",$v="/studio/skin-herohead/DianaYesterSkin2.png?v=6363cbec0e59",Hv="/studio/skin-herohead/DianaYesterSkin3.png?v=3fba4e46d950",Wv="/studio/skin-herohead/Ed.png?v=73489291fac6",Yv="/studio/skin-herohead/EdRehab.png?v=c6449ae487e3",Gv="/studio/skin-herohead/EdRehabSkin1.png?v=b88c3a2dc65b",Kv="/studio/skin-herohead/EdRehabSkin2.png?v=be3bb1f79932",Xv="/studio/skin-herohead/EdSkin1.png?v=25d7096c3082",qv="/studio/skin-herohead/EdSkin2.png?v=32eb2253ae8f",Vv="/studio/skin-herohead/EdSkin3.png?v=ddcfb0c5eab6",Jv="/studio/skin-herohead/EdSkin4.png?v=f51b1a079e9e",Qv="/studio/skin-herohead/Eisia.png?v=84f125391df9",Zv="/studio/skin-herohead/EisiaSkin1.png?v=1e2f2eb95b5c",e0="/studio/skin-herohead/EisiaSkin2.png?v=61535aae8c0c",t0="/studio/skin-herohead/EisiaSkin3.png?v=09960b1ff825",n0="/studio/skin-herohead/Elena.png?v=fd19aeb5cd38",i0="/studio/skin-herohead/ElenaSkin1.png?v=0a504d0ec839",o0="/studio/skin-herohead/ElenaSkin2.png?v=a3dcad94bad6",a0="/studio/skin-herohead/ElenaSkin3.png?v=b2691cdde083",r0="/studio/skin-herohead/Epica.png?v=999013c81c36",s0="/studio/skin-herohead/EpicaNPC.png?v=6415ccaa9d17",l0="/studio/skin-herohead/EpicaSkin1.png?v=c66ef44a972b",d0="/studio/skin-herohead/EpicaSkin2.png?v=fb905960cded",c0="/studio/skin-herohead/EpicaSkin3.png?v=943a6b1fd722",p0="/studio/skin-herohead/EpicaSkin4.png?v=8343483dfedd",u0="/studio/skin-herohead/Erpin.png?v=d8f1435ba463",m0="/studio/skin-herohead/ErpinRoyale.png?v=270ce4dc4307",h0="/studio/skin-herohead/ErpinRoyaleSkin1.png?v=d5648f2a98f5",g0="/studio/skin-herohead/ErpinRoyaleSkin2.png?v=60e136b74ec0",f0="/studio/skin-herohead/ErpinRoyale.png?v=270ce4dc4307",b0="/studio/skin-herohead/ErpinSkin1.png?v=2589eac0b934",x0="/studio/skin-herohead/ErpinSkin2.png?v=27f60d451081",v0="/studio/skin-herohead/ErpinSkin3.png?v=8eca71712aae",k0="/studio/skin-herohead/ErpinSkin4.png?v=7e80f8e06b6e",y0="/studio/skin-herohead/ErpinSkin5.png?v=2291e76b296e",w0="/studio/skin-herohead/Espi.png?v=ecf40b9a7e85",_0="/studio/skin-herohead/EspiSkin1.png?v=768326bd4514",S0="/studio/skin-herohead/Festa.png?v=243c2b08bbf4",j0="/studio/skin-herohead/FestaSkin1.png?v=8926cb318608",N0="/studio/skin-herohead/Fricle.png?v=a4d8ad12d1ad",C0="/studio/skin-herohead/FricleSkin1.png?v=a6c724b6eae6",T0="/studio/skin-herohead/FricleSkin2.png?v=917521f7cbad",M0="/studio/skin-herohead/FricleSkin3.png?v=10a474d13297",A0="/studio/skin-herohead/Gabia.png?v=e754e5744999",I0="/studio/skin-herohead/GabiaSkin1.png?v=8c01cad4550a",E0="/studio/skin-herohead/GabiaSkin2.png?v=3651a2fb4556",R0="/studio/skin-herohead/Guin.png?v=94bde4912972",L0="/studio/skin-herohead/GuinSkin1.png?v=a8785abe7815",P0="/studio/skin-herohead/GuinSkin2.png?v=5fd7ba359ba3",U0="/studio/skin-herohead/GuinSkin2.png?v=5fd7ba359ba3",D0="/studio/skin-herohead/GuinSkin3.png?v=871447d332ab",F0="/studio/skin-herohead/GuinSkin4.png?v=0456bee1f589",z0="/studio/skin-herohead/Haley.png?v=3e7b57b6c6d8",O0="/studio/skin-herohead/HaleySane.png?v=ae4790a01b97",B0="/studio/skin-herohead/HaleySaneSkin1.png?v=d4288f2737ee",$0="/studio/skin-herohead/HaleySaneSkin2.png?v=1dbd62f70b05",H0="/studio/skin-herohead/HaleySkin1.png?v=ac9c8721c5dc",W0="/studio/skin-herohead/HaleySkin2.png?v=10b9b56ed42b",Y0="/studio/skin-herohead/HaleySkin3.png?v=ff226b989b75",G0="/studio/skin-herohead/Heidi.png?v=b877463db48e",K0="/studio/skin-herohead/HeidiSkin1.png?v=8cb44b1979b1",X0="/studio/skin-herohead/Hilde.png?v=57ad069b6820",q0="/studio/skin-herohead/HildeSkin1.png?v=f48cd1407a05",V0="/studio/skin-herohead/HildeSkin2.png?v=4a1eaa4db941",J0="/studio/skin-herohead/HildeSkin3.png?v=c98201194fc9",Q0="/studio/skin-herohead/HildeSkin4.png?v=dbb0ecb84c73",Z0="/studio/skin-herohead/Ifrit.png?v=54e7d9afbcc4",ek="/studio/skin-herohead/IfritSkin1.png?v=8c18a64949ab",tk="/studio/skin-herohead/Inkle.png?v=da71ee956c72",nk="/studio/skin-herohead/InkleSkin1.png?v=d03dba4fd565",ik="/studio/skin-herohead/InkleSkin2.png?v=3497547d2abc",ok="/studio/skin-herohead/Jade.png?v=ad6f914a55c2",ak="/studio/skin-herohead/JadeSkin1.png?v=950f635f2aa9",rk="/studio/skin-herohead/Joanne.png?v=bf594372c21d",sk="/studio/skin-herohead/Joanne.png?v=bf594372c21d",lk="/studio/skin-herohead/JoanneSkin1.png?v=5cceddaa1fcf",dk="/studio/skin-herohead/JoanneSkin2.png?v=c61257ca1a91",ck="/studio/skin-herohead/JoanneSkin3.png?v=29dfa4905f34",pk="/studio/skin-herohead/JoanneSkin4.png?v=708f19284a59",uk="/studio/skin-herohead/JoanneSkin5.png?v=1d106c1261af",mk="/studio/skin-herohead/Jubee.png?v=4bb8490f535f",hk="/studio/skin-herohead/JubeeSkin1.png?v=0e280d94702d",gk="/studio/skin-herohead/Kathy.png?v=0768671b4727",fk="/studio/skin-herohead/KathySkin1.png?v=e275cf42b57b",bk="/studio/skin-herohead/KathySkin2.png?v=daa9d8b1f4c0",xk="/studio/skin-herohead/Kidian.png?v=b93a1dd58d6e",vk="/studio/skin-herohead/KidianSkin1.png?v=3c2d010d0613",kk="/studio/skin-herohead/KidianSkin2.png?v=2bbf9307e9f0",yk="/studio/skin-herohead/KidianSkin3.png?v=28818289e114",wk="/studio/skin-herohead/KidianSkin4.png?v=4bdbad8d2135",_k="/studio/skin-herohead/Kishya.png?v=b199ea7e3076",Sk="/studio/skin-herohead/KishyaSkin1.png?v=c441edbc0da8",jk="/studio/skin-herohead/Kommy.png?v=5c66ce7ea82d",Nk="/studio/skin-herohead/KommySkin1.png?v=ef9cebb039b0",Ck="/studio/skin-herohead/KommySkin2.png?v=8e3b5abe2313",Tk="/studio/skin-herohead/KommySwim.png?v=a17c4665aafe",Mk="/studio/skin-herohead/KommySwimSkin1.png?v=57d954bcbf87",Ak="/studio/skin-herohead/KommySwimSkin2.png?v=a7e7f55ebe08",Ik="/studio/skin-herohead/KommySwimSkin3.png?v=9f9afd44fb22",Ek="/studio/skin-herohead/Kyarot.png?v=ef25d79f39e7",Rk="/studio/skin-herohead/KyarotSkin1.png?v=8d0981a022d2",Lk="/studio/skin-herohead/KyarotSkin2.png?v=50754d725897",Pk="/studio/skin-herohead/KyarotSkin3.png?v=af644c4392d9",Uk="/studio/skin-herohead/Laika.png?v=6cf1a2802057",Dk="/studio/skin-herohead/LaikaSkin1.png?v=bc15e34ee436",Fk="/studio/skin-herohead/LaikaSkin2.png?v=1ae765168c44",zk="/studio/skin-herohead/LaikaSkin3.png?v=93d3f9b0a084",Ok="/studio/skin-herohead/Lazy.png?v=8f21fde05de6",Bk="/studio/skin-herohead/Leets.png?v=d0315e443d8b",$k="/studio/skin-herohead/LeetsSkin1.png?v=691a9eda5235",Hk="/studio/skin-herohead/LeetsSkin2.png?v=4192dd9f6c0a",Wk="/studio/skin-herohead/Lethe.png?v=85604480b2ea",Yk="/studio/skin-herohead/Levi.png?v=e7728f4bd03d",Gk="/studio/skin-herohead/LeviGraduate.png?v=f8e3107c9e30",Kk="/studio/skin-herohead/LeviGraduateSkin1.png?v=b66278928e51",Xk="/studio/skin-herohead/LeviSkin1.png?v=4cfc88d20af4",qk="/studio/skin-herohead/Lion.png?v=29e65cd5d647",Vk="/studio/skin-herohead/LionSkin1.png?v=e311e11e6994",Jk="/studio/skin-herohead/LionSkin2.png?v=89adf89aeb9f",Qk="/studio/skin-herohead/LionSkin4.png?v=481e498974ad",Zk="/studio/skin-herohead/MaestroMK2.png?v=676c1893124e",ey="/studio/skin-herohead/MaestroMK2Skin1.png?v=dda767d535d4",ty="/studio/skin-herohead/Mago.png?v=8aaade4f7954",ny="/studio/skin-herohead/MagoSkin1.png?v=fa8b4355076b",iy="/studio/skin-herohead/Maison.png?v=ea515ec8c10f",oy="/studio/skin-herohead/Makasha.png?v=2656c432ad46",ay="/studio/skin-herohead/MakashaSkin1.png?v=9d50ae51512b",ry="/studio/skin-herohead/MakashaSkin2.png?v=e4b86520f772",sy="/studio/skin-herohead/Marie.png?v=5c7fcb0d8da7",ly="/studio/skin-herohead/Mayo.png?v=75aedd88ad9d",dy="/studio/skin-herohead/MayoCool.png?v=19f72d65d40f",cy="/studio/skin-herohead/MayoCoolSkin1.png?v=cc5a450957a8",py="/studio/skin-herohead/MayoCoolSkin2.png?v=60206399389d",uy="/studio/skin-herohead/MayoCoolSkin3.png?v=f27d1e835c94",my="/studio/skin-herohead/MayoSkin1.png?v=febaad1ae310",hy="/studio/skin-herohead/Meluna.png?v=a1a278d72626",gy="/studio/skin-herohead/MelunaSkin1.png?v=f0bb4e2e4111",fy="/studio/skin-herohead/Miro.png?v=606cf5709acd",by="/studio/skin-herohead/MiroSkin1.png?v=fa0b6107ea8b",xy="/studio/skin-herohead/MiroSkin2.png?v=e04959c620b6",vy="/studio/skin-herohead/Momo.png?v=668f831aff21",ky="/studio/skin-herohead/MomoSkin1.png?v=e8955a5b404a",yy="/studio/skin-herohead/MomoSkin2.png?v=a9b28ce18dd9",wy="/studio/skin-herohead/MomoSkin3.png?v=6a513391d3c6",_y="/studio/skin-herohead/MomoSkin4.png?v=0bf9578fad5d",Sy="/studio/skin-herohead/Musk.png?v=e7b793165f1d",jy="/studio/skin-herohead/Mute.png?v=3ac2db609740",Ny="/studio/skin-herohead/MuteSkin1.png?v=e065a92b967d",Cy="/studio/skin-herohead/MuteSkin2.png?v=4770f35b15c7",Ty="/studio/skin-herohead/MuteSkin3.png?v=753e0faf2083",My="/studio/skin-herohead/Mynx.png?v=7bc57d3d1897",Ay="/studio/skin-herohead/Naia.png?v=f635d217f22f",Iy="/studio/skin-herohead/NaiaSkin1.png?v=deb0326d85f5",Ey="/studio/skin-herohead/NaiaSkin2.png?v=97eff0d3e399",Ry="/studio/skin-herohead/NaiaSkin3.png?v=a39372062a0d",Ly="/studio/skin-herohead/NaiaSkin5.png?v=b380d7791c65",Py="/studio/skin-herohead/Nata.png?v=8a4f2ce3804e",Uy="/studio/skin-herohead/Ner.png?v=1beac4857c02",Dy="/studio/skin-herohead/NerRage.png?v=43b821dac44c",Fy="/studio/skin-herohead/NerRageSkin1.png?v=6b33ca6930fc",zy="/studio/skin-herohead/NerRageSkin2.png?v=0ad2316d9586",Oy="/studio/skin-herohead/NerRage.png?v=43b821dac44c",By="/studio/skin-herohead/NerSkin1.png?v=c651bdb18d04",$y="/studio/skin-herohead/NerSkin2.png?v=7bf383479da6",Hy="/studio/skin-herohead/NerSkin3.png?v=19107703d018",Wy="/studio/skin-herohead/Neti.png?v=f729479f4194",Yy="/studio/skin-herohead/NetiSkin1.png?v=d25dc5e4c854",Gy="/studio/skin-herohead/NetiSkin2.png?v=90c74117a666",Ky="/studio/skin-herohead/Nicole.png?v=65c582fabf04",Xy="/studio/skin-herohead/NicoleSkin1.png?v=2251e3aa5c87",qy="/studio/skin-herohead/Opal.png?v=714f35dfa81c",Vy="/studio/skin-herohead/OpalSkin1.png?v=df61cfeb74b9",Jy="/studio/skin-herohead/OpalSkin2.png?v=af42f4e9bd24",Qy="/studio/skin-herohead/OpalSkin3.png?v=5a6f92529ac0",Zy="/studio/skin-herohead/OpalSkin4.png?v=5c6442beb577",ew="/studio/skin-herohead/Orr.png?v=61c462df3a3e",tw="/studio/skin-herohead/OrrSkin1.png?v=1f689d256fcd",nw="/studio/skin-herohead/OrrSkin2.png?v=df7176a4cf1d",iw="/studio/skin-herohead/Patula.png?v=bb41c8029d32",ow="/studio/skin-herohead/Picora.png?v=b51a9f23e70c",aw="/studio/skin-herohead/PicoraSkin1.png?v=f76f19a125bb",rw="/studio/skin-herohead/PicoraSkin2.png?v=c85f7c412979",sw="/studio/skin-herohead/PicoraSkin3.png?v=ef9dae81f345",lw="/studio/skin-herohead/Pira.png?v=60d682ba6f78",dw="/studio/skin-herohead/PiraSkin1.png?v=789d78713af6",cw="/studio/skin-herohead/PiraSkin2.png?v=15fdb4d6a1fd",pw="/studio/skin-herohead/Polan.png?v=394ef3da4405",uw="/studio/skin-herohead/PolanSkin1.png?v=25bd022e7efb",mw="/studio/skin-herohead/PolanSkin2.png?v=2467bfe513a5",hw="/studio/skin-herohead/PolanSkin3.png?v=bc1e4513a71d",gw="/studio/skin-herohead/Posher.png?v=f4f05c362e7b",fw="/studio/skin-herohead/PosherSkin1.png?v=9da83462aa8d",bw="/studio/skin-herohead/PosherSkin2.png?v=6b86d23dc664",xw="/studio/skin-herohead/PosherSkin3.png?v=381ec31338bf",vw="/studio/skin-herohead/PosherSkin4.png?v=40dff8851ea1",kw="/studio/skin-herohead/Ran.png?v=c37a502bc566",yw="/studio/skin-herohead/RanSkin1.png?v=42e7c3f145e7",ww="/studio/skin-herohead/RanSkin2.png?v=5cab5408a43f",_w="/studio/skin-herohead/RanSkin3.png?v=d0779000ec4d",Sw="/studio/skin-herohead/Renewa.png?v=58b8249413c1",jw="/studio/skin-herohead/RenewaAwaken.png?v=62721f55fbec",Nw="/studio/skin-herohead/RenewaAwakenSkin1.png?v=a379a8855e2e",Cw="/studio/skin-herohead/RenewaAwakenSkin2.png?v=2f822f972fdd",Tw="/studio/skin-herohead/Renewa.png?v=58b8249413c1",Mw="/studio/skin-herohead/Ricota.png?v=abaf6ebd51d3",Aw="/studio/skin-herohead/RicotaSkin1.png?v=8ed48113ad2f",Iw="/studio/skin-herohead/RicotaSkin2.png?v=31dead16cf7c",Ew="/studio/skin-herohead/Rim.png?v=8a95ac9f5a00",Rw="/studio/skin-herohead/RimChaos.png?v=ed2d780f6f76",Lw="/studio/skin-herohead/RimChaosSkin1.png?v=85a5592c2447",Pw="/studio/skin-herohead/RimChaosSkin2.png?v=43b50e07be3b",Uw="/studio/skin-herohead/RimChaosSkin3.png?v=014d7a129ea9",Dw="/studio/skin-herohead/RimChaosSkin4.png?v=0fcad53a75dc",Fw="/studio/skin-herohead/RimSkin1.png?v=123e00504dfb",zw="/studio/skin-herohead/RimSkin2.png?v=5822f12acf32",Ow="/studio/skin-herohead/RimSkin3.png?v=c50e86a64690",Bw="/studio/skin-herohead/Risty.png?v=1bd09cf86553",$w="/studio/skin-herohead/RistySkin1.png?v=44bdbdca60a0",Hw="/studio/skin-herohead/RistySkin2.png?v=f6eb3571bf28",Ww="/studio/skin-herohead/RistySkin3.png?v=d37039dfdb3e",Yw="/studio/skin-herohead/Rohne.png?v=7a51fe2dccef",Gw="/studio/skin-herohead/RohneMayor.png?v=1f81838a5a3d",Kw="/studio/skin-herohead/RohneMayorSkin1.png?v=6155c65a6f1c",Xw="/studio/skin-herohead/RohneMayorSkin2.png?v=1c655b70d0e0",qw="/studio/skin-herohead/RohneSkin1.png?v=50baebd31b88",Vw="/studio/skin-herohead/RohneSkin2.png?v=cfec58187721",Jw="/studio/skin-herohead/Rollett.png?v=6a91fb904b28",Qw="/studio/skin-herohead/RollettSkin1.png?v=4a3a12b200e8",Zw="/studio/skin-herohead/RollettSkin2.png?v=751001255d1e",e_="/studio/skin-herohead/RollettSkin3.png?v=a9c6e33f3c1f",t_="/studio/skin-herohead/Ronnie.png?v=5a382a31d0da",n_="/studio/skin-herohead/RonnieSkin1.png?v=908152ef1962",i_="/studio/skin-herohead/Rude.png?v=a059ad2d7d39",o_="/studio/skin-herohead/RudeSkin1.png?v=5c76a269fa03",a_="/studio/skin-herohead/RudeSkin3.png?v=cff37d99c493",r_="/studio/skin-herohead/Rufo.png?v=8f4359df013a",s_="/studio/skin-herohead/RufoSkin1.png?v=2a2a82f84bdb",l_="/studio/skin-herohead/RufoSkin2.png?v=33f6e6af58e2",d_="/studio/skin-herohead/Sari.png?v=096a7c4d6eaf",c_="/studio/skin-herohead/Goldy.png?v=db4b6d09a275",p_="/studio/skin-herohead/Goldy.png?v=db4b6d09a275",u_="/studio/skin-herohead/Scizor.png?v=3f19efbdc882",m_="/studio/skin-herohead/ScizorSkin1.png?v=322b5d2fefe9",h_="/studio/skin-herohead/ScizorSkin2.png?v=e91dabc1fdc5",g_="/studio/skin-herohead/Selline.png?v=47420d7b781e",f_="/studio/skin-herohead/SellineSkin1.png?v=d81730092356",b_="/studio/skin-herohead/SellineSkin2.png?v=8bc88b162cb8",x_="/studio/skin-herohead/SellineSkin3.png?v=66ce1a6a0460",v_="/studio/skin-herohead/SellineSkin4.png?v=ad2acd60b980",k_="/studio/skin-herohead/Shady.png?v=1161d32b66dc",y_="/studio/skin-herohead/ShadySkin1.png?v=27f64c6f0725",w_="/studio/skin-herohead/ShadySkin2.png?v=3965a0450474",__="/studio/skin-herohead/ShadySkin3.png?v=b2af7fe89726",S_="/studio/skin-herohead/ShadyTwisted.png?v=2387254941d4",j_="/studio/skin-herohead/ShadyTwistedSkin1.png?v=817c0858ac41",N_="/studio/skin-herohead/ShadyTwistedSkin2.png?v=09c3c1fef554",C_="/studio/skin-herohead/Shasha.png?v=13e0dc0c7066",T_="/studio/skin-herohead/ShashaSkin1.png?v=3e7bbb2b17a1",M_="/studio/skin-herohead/ShashaSkin2.png?v=e2d47a52d89c",A_="/studio/skin-herohead/ShashaSkin3.png?v=2304ccab4b69",I_="/studio/skin-herohead/Sherum.png?v=596bf0cb11fd",E_="/studio/skin-herohead/SherumSkin1.png?v=ed1b0af212f6",R_="/studio/skin-herohead/SherumSkin2.png?v=a719dc58be7d",L_="/studio/skin-herohead/SherumSkin3.png?v=e4eb625164ca",P_="/studio/skin-herohead/Shoupan.png?v=ba95c38ba0be",U_="/studio/skin-herohead/ShoupanSkin1.png?v=18a71f5cfca9",D_="/studio/skin-herohead/ShoupanSkin2.png?v=2ca968ae73c7",F_="/studio/skin-herohead/ShoupanSkin3.png?v=92bafefeb049",z_="/studio/skin-herohead/Silphir.png?v=fd5b656ca3be",O_="/studio/skin-herohead/SilphirSkin1.png?v=6ef86005ea9f",B_="/studio/skin-herohead/SilphirSkin2.png?v=38490cbabe7d",$_="/studio/skin-herohead/Silvia.png?v=27f177306c2f",H_="/studio/skin-herohead/SilviaSkin1.png?v=eef11c9c9b72",W_="/studio/skin-herohead/SilviaSkin2.png?v=0d735b5975c6",Y_="/studio/skin-herohead/SilviaSkin3.png?v=ccf5e83a092e",G_="/studio/skin-herohead/Sist.png?v=54f6d4a61b0c",K_="/studio/skin-herohead/SistSkin1.png?v=b17cc738c908",X_="/studio/skin-herohead/SistSkin2.png?v=4ad1b0b2bb0e",q_="/studio/skin-herohead/SistSkin3.png?v=5677af65fc60",V_="/studio/skin-herohead/Skea.png?v=e2baf20ed555",J_="/studio/skin-herohead/SkeaSkin1.png?v=2996f4ed9d7a",Q_="/studio/skin-herohead/Snorky.png?v=5c2dc7fd61dd",Z_="/studio/skin-herohead/SnorkySkin1.png?v=5fb6ebe64aa7",e2="/studio/skin-herohead/SnorkySkin2.png?v=b68b165907b5",t2="/studio/skin-herohead/Sparrot.png?v=f437e6c18620",n2="/studio/skin-herohead/SparrotSkin1.png?v=2cf505cb9064",i2="/studio/skin-herohead/Speaki.png?v=4de5b1b3c93a",o2="/studio/skin-herohead/SpeakiMaid.png?v=5ecd3c3bce18",a2="/studio/skin-herohead/SpeakiMaidSkin1.png?v=00c71f7f79f2",r2="/studio/skin-herohead/SpeakiMaidSkin2.png?v=68c0a6149c03",s2="/studio/skin-herohead/SpeakiMaidSkin3.png?v=63e18b6a7bdb",l2="/studio/skin-herohead/SpeakiSkin1.png?v=f797251cf7ef",d2="/studio/skin-herohead/Suro.png?v=215b46db8be2",c2="/studio/skin-herohead/SuroSkin1.png?v=c009e77a4691",p2="/studio/skin-herohead/SuroSkin2.png?v=20d12d7eb903",u2="/studio/skin-herohead/SuroSkin3.png?v=183374d9e80e",m2="/studio/skin-herohead/Sylla.png?v=add41654a00a",h2="/studio/skin-herohead/SyllaSkin1.png?v=80cdacc23da7",g2="/studio/skin-herohead/SyllaSkin2.png?v=a70b88e09802",f2="/studio/skin-herohead/SyllaSkin3.png?v=d5d4271d271b",b2="/studio/skin-herohead/Taida.png?v=77ff7ef1b34c",x2="/studio/skin-herohead/Tig.png?v=b86820c03c9f",v2="/studio/skin-herohead/TigHero.png?v=75d5ed20fad1",k2="/studio/skin-herohead/TigHeroSkin1.png?v=5a971459fb86",y2="/studio/skin-herohead/TigHeroSkin2.png?v=7d1673426398",w2="/studio/skin-herohead/TigSkin1.png?v=9af23510af6d",_2="/studio/skin-herohead/TigSkin2.png?v=409fcbf54e14",S2="/studio/skin-herohead/TigSkin3.png?v=844211d1b7dc",j2="/studio/skin-herohead/Ui.png?v=41202b93de4d",N2="/studio/skin-herohead/UiMemory.png?v=86b9c08bd7ed",C2="/studio/skin-herohead/UiMemory.png?v=86b9c08bd7ed",T2="/studio/skin-herohead/UiMemorySkin1.png?v=51bb73980929",M2="/studio/skin-herohead/UiMemorySkin1.png?v=51bb73980929",A2="/studio/skin-herohead/UiMemorySkin2.png?v=9a7ec75d76ec",I2="/studio/skin-herohead/UiSkin1.png?v=d37aa6edda99",E2="/studio/skin-herohead/UiSkin2.png?v=8451589b9175",R2="/studio/skin-herohead/UiSkin3.png?v=0ba5a96a4507",L2="/studio/skin-herohead/UiSkin4.png?v=87fa15de5447",P2="/studio/skin-herohead/UiSkin5.png?v=d409f227d005",U2="/studio/skin-herohead/Uros.png?v=0a22138acde2",D2="/studio/skin-herohead/UrosSkin1.png?v=38abe39528bc",F2="/studio/skin-herohead/UrosSkin2.png?v=12e9f1c51ce5",z2="/studio/skin-herohead/UrosSkin3.png?v=3cc08fd35e02",O2="/studio/skin-herohead/Vela.png?v=17f99ec03f46",B2="/studio/skin-herohead/VelaSkin1.png?v=04381049a886",$2="/studio/skin-herohead/VelaSkin2.png?v=d913fdf611ed",H2="/studio/skin-herohead/VelaSkin3.png?v=c843bb7aad78",W2="/studio/skin-herohead/Velvet.png?v=00e770ec388b",Y2="/studio/skin-herohead/VelvetSkin1.png?v=6b33f4260d8b",G2="/studio/skin-herohead/VelvetSkin2.png?v=c926d6350799",K2="/studio/skin-herohead/Veroo.png?v=1c234aeac9d6",X2="/studio/skin-herohead/Vivi.png?v=9691c72cea7e",q2="/studio/skin-herohead/ViviDivine.png?v=1a878a961dec",V2="/studio/skin-herohead/ViviDivineSkin1.png?v=f2242a83d163",J2="/studio/skin-herohead/ViviDivineSkin2.png?v=62c64b4fdeb3",Q2="/studio/skin-herohead/ViviSkin1.png?v=09354b53a6b1",Z2="/studio/skin-herohead/ViviSkin2.png?v=965fa762273b",eS="/studio/skin-herohead/ViviSkin3.png?v=091a86650c50",tS="/studio/skin-herohead/ViviSkin4.png?v=3835f74a99a4",nS="/studio/skin-herohead/ViviSkin5.png?v=92944d525c02",iS="/studio/skin-herohead/xXionx.png?v=94082aa49f53",oS="/studio/skin-herohead/xXionxSkin1.png?v=85f6e3c75b44",aS="/studio/skin-herohead/xXionxSkin2.png?v=2bf577f29921",rS="/studio/skin-herohead/xXionxSkin3.png?v=fe58e88d4df5",sS="/studio/skin-herohead/xXionxSkin4.png?v=5cc4edd603d9",lS="/studio/skin-herohead/xXionxSkin5.png?v=99dccb272bc4",dS="/studio/skin-herohead/Yomi.png?v=6e6102b2a602",cS="/studio/skin-herohead/YomiSkin1.png?v=08b9bc39529a",pS="/studio/skin-herohead/YomiSkin2.png?v=44e04faa2c6e",uS="/studio/skin-herohead/Yumimi.png?v=d0b716eeb3b6",mS={Alice:$x,AliceSister:Hx,AliceSkin1:Wx,AliceSkin2:Yx,AliceSkin3:Gx,AliceSkin4:Kx,Allet:Xx,Amelia:qx,AmeliaR41:Vx,AmeliaR41Skin1:Jx,AmeliaR41Skin2:Qx,AmeliaSkin1:Zx,AmeliaSkin2:e1,AmeliaSkin3:t1,AmeliaSkin4:n1,Aragnia:i1,AragniaSkin1:o1,AragniaSkin2:a1,Arco:r1,ArcoSkin1:s1,ArcoSkin2:l1,Arnet:d1,ArnetSkin1:c1,ArnetSkin2:p1,Asana:u1,AsanaSkin1:m1,AsanaSkin2:h1,Ashur:g1,AshurMagi:f1,AshurMagiSkin1:b1,AshurSkin1:x1,AshurSkin2:v1,Aurora:k1,AuroraSkin1:y1,Aya:w1,AyaSkin1:_1,AyaSkin2:S1,AyaSkin3:j1,AyaSkin4:N1,AyaSkin5:C1,Ayla:T1,AylaSkin1:M1,AylaSkin2:A1,Bana:I1,Barie:E1,Barong:R1,BarongSkin1:L1,BarongSkin2:P1,BarongSkin3:U1,Belita:D1,BelitaSkin1:F1,BelitaSkin3:z1,Beni:O1,BeniBeni:B1,BeniBeniSkin1:$1,BeniBeniSkin2:H1,BeniSkin1:W1,BigWood:Y1,BigWoodSkin1:G1,Blanchet:K1,BlanchetSkin1:X1,BlanchetSkin2:q1,BlanchetSkin3:V1,Butter:J1,ButterSkin1:Q1,ButterSkin2:Z1,ButterSkin3:ev,Canna:tv,CannaSkin1:nv,CannaSkin2:iv,CannaSkin3:ov,CannaSkin4:av,Canta:rv,Carren:sv,Chloe:lv,Chloe_SebaOff:dv,ChloeSkin1:cv,ChloeSkin2:pv,ChloeSkin3:uv,ChloeSkin4:mv,ChloeSkin5:hv,Chopi:gv,Cuee:fv,Daya:bv,DayaPureshine:xv,DayaPureShine:vv,DayaPureshineSkin1:kv,DayaPureShineSkin1:yv,DayaPureshineSkin2:wv,DayaPureShineSkin2:_v,DayaPureshineSkin3:Sv,DayaPureShineSkin3:jv,DayaSkin1:Nv,DayaSkin2:Cv,DayaSkin3:Tv,Delia:Mv,DeliaSkin1:Av,DeliaSkin2:Iv,Diana:Ev,DianaSkin1:Rv,DianaSkin2:Lv,DianaSkin3:Pv,DianaSkin4:Uv,DianaYester:Dv,DianaYester_Npc_Skin1:Fv,DianaYester_Skin1:zv,DianaYester_Skin2:Ov,DianaYesterSkin1:Bv,DianaYesterSkin2:$v,DianaYesterSkin3:Hv,Ed:Wv,EdRehab:Yv,EdRehabSkin1:Gv,EdRehabSkin2:Kv,EdSkin1:Xv,EdSkin2:qv,EdSkin3:Vv,EdSkin4:Jv,Eisia:Qv,EisiaSkin1:Zv,EisiaSkin2:e0,EisiaSkin3:t0,Elena:n0,ElenaSkin1:i0,ElenaSkin2:o0,ElenaSkin3:a0,Epica:r0,EpicaNPC:s0,EpicaSkin1:l0,EpicaSkin2:d0,EpicaSkin3:c0,EpicaSkin4:p0,Erpin:u0,ErpinRoyale:m0,ErpinRoyaleSkin1:h0,ErpinRoyaleSkin2:g0,ErpinRoyaleStoryBattle:f0,ErpinSkin1:b0,ErpinSkin2:x0,ErpinSkin3:v0,ErpinSkin4:k0,ErpinSkin5:y0,Espi:w0,EspiSkin1:_0,Festa:S0,FestaSkin1:j0,Fricle:N0,FricleSkin1:C0,FricleSkin2:T0,FricleSkin3:M0,Gabia:A0,GabiaSkin1:I0,GabiaSkin2:E0,Guin:R0,GuinSkin1:L0,Guinskin2:P0,GuinSkin2:U0,GuinSkin3:D0,GuinSkin4:F0,Haley:z0,HaleySane:O0,HaleySaneSkin1:B0,HaleySaneSkin2:$0,HaleySkin1:H0,HaleySkin2:W0,HaleySkin3:Y0,Heidi:G0,HeidiSkin1:K0,Hilde:X0,HildeSkin1:q0,HildeSkin2:V0,HildeSkin3:J0,HildeSkin4:Q0,Ifrit:Z0,IfritSkin1:ek,Inkle:tk,InkleSkin1:nk,InkleSkin2:ik,Jade:ok,JadeSkin1:ak,Joanne:rk,Joanne_White:sk,JoanneSkin1:lk,JoanneSkin2:dk,JoanneSkin3:ck,JoanneSkin4:pk,JoanneSkin5:uk,Jubee:mk,JubeeSkin1:hk,Kathy:gk,KathySkin1:fk,KathySkin2:bk,Kidian:xk,KidianSkin1:vk,KidianSkin2:kk,KidianSkin3:yk,KidianSkin4:wk,Kishya:_k,KishyaSkin1:Sk,Kommy:jk,KommySkin1:Nk,KommySkin2:Ck,KommySwim:Tk,KommySwimSkin1:Mk,KommySwimSkin2:Ak,KommySwimSkin3:Ik,Kyarot:Ek,KyarotSkin1:Rk,KyarotSkin2:Lk,KyarotSkin3:Pk,Laika:Uk,LaikaSkin1:Dk,LaikaSkin2:Fk,LaikaSkin3:zk,Lazy:Ok,Leets:Bk,LeetsSkin1:$k,LeetsSkin2:Hk,Lethe:Wk,Levi:Yk,LeviGraduate:Gk,LeviGraduateSkin1:Kk,LeviSkin1:Xk,Lion:qk,LionSkin1:Vk,LionSkin2:Jk,LionSkin4:Qk,MaestroMK2:Zk,MaestroMK2Skin1:ey,Mago:ty,MagoSkin1:ny,Maison:iy,Makasha:oy,MakashaSkin1:ay,MakashaSkin2:ry,Marie:sy,Mayo:ly,MayoCool:dy,MayoCoolSkin1:cy,MayoCoolSkin2:py,MayoCoolSkin3:uy,MayoSkin1:my,Meluna:hy,MelunaSkin1:gy,Miro:fy,MiroSkin1:by,MiroSkin2:xy,Momo:vy,MomoSkin1:ky,MomoSkin2:yy,MomoSkin3:wy,MomoSkin4:_y,Musk:Sy,Mute:jy,MuteSkin1:Ny,MuteSkin2:Cy,MuteSkin3:Ty,Mynx:My,Naia:Ay,NaiaSkin1:Iy,NaiaSkin2:Ey,NaiaSkin3:Ry,NaiaSkin5:Ly,Nata:Py,Ner:Uy,NerRage:Dy,NerRageSkin1:Fy,NerRageSkin2:zy,NerRageStoryBattle:Oy,NerSkin1:By,NerSkin2:$y,NerSkin3:Hy,Neti:Wy,NetiSkin1:Yy,NetiSkin2:Gy,Nicole:Ky,NicoleSkin1:Xy,Opal:qy,OpalSkin1:Vy,OpalSkin2:Jy,OpalSkin3:Qy,OpalSkin4:Zy,Orr:ew,OrrSkin1:tw,OrrSkin2:nw,Patula:iw,Picora:ow,PicoraSkin1:aw,PicoraSkin2:rw,PicoraSkin3:sw,Pira:lw,PiraSkin1:dw,PiraSkin2:cw,Polan:pw,PolanSkin1:uw,PolanSkin2:mw,PolanSkin3:hw,Posher:gw,PosherSkin1:fw,PosherSkin2:bw,PosherSkin3:xw,PosherSkin4:vw,Ran:kw,RanSkin1:yw,RanSkin2:ww,RanSkin3:_w,Renewa:Sw,RenewaAwaken:jw,RenewaAwakenSkin1:Nw,RenewaAwakenSkin2:Cw,RenewaNPC:Tw,Ricota:Mw,RicotaSkin1:Aw,RicotaSkin2:Iw,Rim:Ew,RimChaos:Rw,RimChaosSkin1:Lw,RimChaosSkin2:Pw,RimChaosSkin3:Uw,RimChaosSkin4:Dw,RimSkin1:Fw,RimSkin2:zw,RimSkin3:Ow,Risty:Bw,RistySkin1:$w,RistySkin2:Hw,RistySkin3:Ww,Rohne:Yw,RohneMayor:Gw,RohneMayorSkin1:Kw,RohneMayorSkin2:Xw,RohneSkin1:qw,RohneSkin2:Vw,Rollett:Jw,RollettSkin1:Qw,RollettSkin2:Zw,RollettSkin3:e_,Ronnie:t_,RonnieSkin1:n_,Rude:i_,RudeSkin1:o_,RudeSkin3:a_,Rufo:r_,RufoSkin1:s_,RufoSkin2:l_,Sari:d_,ScarecrowNaia:c_,ScarecrowRude:p_,Scizor:u_,ScizorSkin1:m_,ScizorSkin2:h_,Selline:g_,SellineSkin1:f_,SellineSkin2:b_,SellineSkin3:x_,SellineSkin4:v_,Shady:k_,ShadySkin1:y_,ShadySkin2:w_,ShadySkin3:__,ShadyTwisted:S_,ShadyTwistedSkin1:j_,ShadyTwistedSkin2:N_,Shasha:C_,ShashaSkin1:T_,ShashaSkin2:M_,ShashaSkin3:A_,Sherum:I_,SherumSkin1:E_,SherumSkin2:R_,SherumSkin3:L_,Shoupan:P_,ShoupanSkin1:U_,ShoupanSkin2:D_,ShoupanSkin3:F_,Silphir:z_,SilphirSkin1:O_,SilphirSkin2:B_,Silvia:$_,SilviaSkin1:H_,SilviaSkin2:W_,SilviaSkin3:Y_,Sist:G_,SistSkin1:K_,SistSkin2:X_,SistSkin3:q_,Skea:V_,SkeaSkin1:J_,Snorky:Q_,SnorkySkin1:Z_,SnorkySkin2:e2,Sparrot:t2,SparrotSkin1:n2,Speaki:i2,SpeakiMaid:o2,SpeakiMaidSkin1:a2,SpeakiMaidSkin2:r2,SpeakiMaidSkin3:s2,SpeakiSkin1:l2,Suro:d2,SuroSkin1:c2,SuroSkin2:p2,SuroSkin3:u2,Sylla:m2,SyllaSkin1:h2,SyllaSkin2:g2,SyllaSkin3:f2,Taida:b2,Tig:x2,TigHero:v2,TigHeroSkin1:k2,TigHeroSkin2:y2,TigSkin1:w2,TigSkin2:_2,TigSkin3:S2,Ui:j2,UiMemory:N2,UIMemory:C2,UiMemorySkin1:T2,UIMemorySkin1:M2,UiMemorySkin2:A2,UiSkin1:I2,UiSkin2:E2,UiSkin3:R2,UiSkin4:L2,UiSkin5:P2,Uros:U2,UrosSkin1:D2,UrosSkin2:F2,UrosSkin3:z2,Vela:O2,VelaSkin1:B2,VelaSkin2:$2,VelaSkin3:H2,Velvet:W2,VelvetSkin1:Y2,VelvetSkin2:G2,Veroo:K2,Vivi:X2,ViviDivine:q2,ViviDivineSkin1:V2,ViviDivineSkin2:J2,ViviSkin1:Q2,ViviSkin2:Z2,ViviSkin3:eS,ViviSkin4:tS,ViviSkin5:nS,xXionx:iS,xXionxSkin1:oS,xXionxSkin2:aS,xXionxSkin3:rS,xXionxSkin4:sS,xXionxSkin5:lS,Yomi:dS,YomiSkin1:cS,YomiSkin2:pS,Yumimi:uS},hS=new Map(Object.entries(mS).map(([o,p])=>[o.toLowerCase(),p]));function gS(o,p){if(!(p!=="normal"&&p!=="battle"))return hS.get(o.toLowerCase())}const fS="trickcal-spine-studio-assets",bS=1,El="assets";function xS(){return new Promise((o,p)=>{if(typeof indexedDB>"u"){p(new Error("当前浏览器不支持本地素材缓存。"));return}const g=indexedDB.open(fS,bS);g.onupgradeneeded=()=>{const f=g.result;f.objectStoreNames.contains(El)||f.createObjectStore(El,{keyPath:"id"})},g.onsuccess=()=>o(g.result),g.onerror=()=>p(g.error??new Error("本地素材缓存打开失败。"))})}async function zm(o,p){const g=await xS();return new Promise((f,i)=>{const r=g.transaction(El,o),S=r.objectStore(El),_=p(S);let M;_&&(_.onsuccess=()=>{M=_.result},_.onerror=()=>i(_.error??new Error("本地素材缓存读写失败。"))),r.oncomplete=()=>{g.close(),f(M)},r.onerror=()=>{g.close(),i(r.error??new Error("本地素材缓存事务失败。"))}})}function Qu(o){const p=typeof crypto<"u"&&"randomUUID"in crypto?crypto.randomUUID():`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;return`${o}:${p}`}async function Zu(o){await zm("readwrite",p=>p.put(o))}async function Ur(o){return zm("readonly",p=>p.get(o))}function ao(o){return String(o??"").toLowerCase().replace(/[^a-z0-9]/gu,"")}function Om(o,p,g){const f=new Set([o,p].map(ao).filter(Boolean)),i=g.find(r=>f.has(ao(r)));return i||(g.find(r=>{const S=ao(r);return S!=="default"&&!S.endsWith("levelup")})??null)}function vS(o){if(o.modelType!=="aside")return[...o.skinNames];const p=Om(o.resourceCode,o.baseFileName,o.skinNames);if(!p)return[...o.skinNames];const g=ao(p),f=o.skinNames.filter(S=>{const _=ao(S);return _!==g&&_.startsWith(g)&&_.endsWith("levelup")}),i=o.skinNames.filter(S=>{const _=ao(S);return S!==p&&!f.includes(S)&&_!=="default"}),r=o.skinNames.filter(S=>ao(S)==="default");return[p,...f,...i,...r]}function em(o){const p=!!(o.currentSkinName&&o.skinNames.includes(o.currentSkinName));if(o.miniBaseCode){if(o.allowAnyMiniSkin&&p)return o.currentSkinName??null;const g=Am(o.miniBaseCode,o.skinNames);return o.currentSkinName&&g.includes(o.currentSkinName)?o.currentSkinName:Im(o.miniBaseCode,o.skinNames)??Fd(o.skinNames)}if(o.modelType==="aside"){const g=ao(o.currentSkinName);return p&&g!=="default"&&g!=="normal"?o.currentSkinName??null:Om(o.resourceCode,o.baseFileName,o.skinNames)??Fd(o.skinNames)}return Fd(o.skinNames,o.currentSkinName)}const kS="2b45acc3b3f2386a",yS=kS;function Ll(o,p){return Og.find(g=>g.resourceCode===o&&g.folderName===p.replace(/\\/gu,"/"))??null}function hc(o,p){const g=p.replace(/\\/gu,"/");if(o==="DummyPosterM48"&&g==="其余/家具/dummyposterm48_spine")return"internal";const f=Ll(o,g);return f?f.kind:"furniture"}const wS={"zh-CN":{furniture:"动态家具",poster:"动态海报",authorityPoster:"权能海报",internal:"未确认资源"},"ko-KR":{furniture:"움직이는 가구",poster:"움직이는 포스터",authorityPoster:"권능 포스터",internal:"미확인 리소스"},"ja-JP":{furniture:"動く家具",poster:"動くポスター",authorityPoster:"権能ポスター",internal:"未確認リソース"},"en-US":{furniture:"Animated Furniture",poster:"Animated Posters",authorityPoster:"Authority Posters",internal:"Unverified Resources"}};function hl(o,p){return wS[p][o]}const Bm=""+new URL("entry-gallery-CaxGzmL3.png",import.meta.url).href,$m=""+new URL("entry-restaurant-CuIDicHr.png",import.meta.url).href,Hm=""+new URL("entry-studio-ycaPtwf4.png",import.meta.url).href,qd=""+new URL("ui-mode-classic-suro-9Oo5Z28-.png",import.meta.url).href,tm=""+new URL("ui-mode-modern-uros-jZTdguCg.png",import.meta.url).href;function _S({canCreateLocalCopy:o,interactionMode:p,interactionSettingsOpen:g,interactionSoundEnabled:f,interactionFxEnabled:i,interactionVoiceLanguage:r,localCustomEntries:S,onEditLocalCopy:_,onToggleInteractionMode:M,onCloseInteractionSettings:L,onToggleInteractionSound:O,onToggleInteractionFx:N,onChangeInteractionVoiceLanguage:T,onAnnotateScreenshot:D,onPreviewLocalCustom:Y,onEditLocalCustom:q,onDeleteLocalCustom:$}){const{tf:G}=Ui();return e.jsxs("div",{className:"studio-creator-actions","aria-label":G("studio.creator.local_edit","Creator 本地编辑"),children:[e.jsxs("button",{className:"primary-button creator-local-copy-button",type:"button",disabled:!o,title:o?G("studio.creator.edit_local_copy.tip","用当前骨架、atlas 和贴图创建本地副本，不会修改原始资源"):G("studio.creator.edit_local_copy.disabled_tip","当前资源路径不可浏览，暂时不能创建本地副本"),"aria-label":G("studio.creator.edit_local_copy","编辑本地副本"),onClick:_,children:[e.jsx(Cf,{size:15,"aria-hidden":"true"}),e.jsx("span",{children:G("studio.creator.edit_local_copy","编辑本地副本")})]}),e.jsxs("div",{className:"studio-interaction-control",children:[e.jsxs("button",{className:p?"secondary-button studio-interaction-toggle is-active":"secondary-button studio-interaction-toggle",type:"button","aria-pressed":p,"aria-expanded":p&&g,title:p?G("studio.creator.interaction_mode_on_tip","关闭互动模式，恢复拖动模型调整位置"):G("studio.creator.interaction_mode_off_tip","开启互动模式，点击或拖拽角色触发互动"),"aria-label":G("studio.creator.interaction_mode","互动模式"),onClick:M,children:[e.jsx(jf,{size:15,"aria-hidden":"true"}),e.jsx("span",{children:G("studio.creator.interaction_mode","互动模式")})]}),p&&g?e.jsxs("div",{className:"studio-interaction-settings",role:"dialog","aria-label":G("studio.creator.interaction_settings","互动设置"),children:[e.jsxs("header",{children:[e.jsx("strong",{children:G("studio.creator.interaction_settings","互动设置")}),e.jsx("button",{className:"studio-interaction-settings-close",type:"button",onClick:L,"aria-label":G("studio.creator.interaction_close","关闭"),title:G("studio.creator.interaction_close","关闭"),children:e.jsx(lg,{size:15,"aria-hidden":"true"})})]}),e.jsxs("button",{className:"studio-interaction-setting-row",type:"button",role:"switch","aria-checked":f,onClick:O,children:[e.jsxs("span",{className:"studio-interaction-setting-label",children:[f?e.jsx(dg,{size:17,"aria-hidden":"true"}):e.jsx(cg,{size:17,"aria-hidden":"true"}),e.jsx("span",{children:G("studio.creator.interaction_sound","互动声音")})]}),e.jsx("span",{className:f?"studio-interaction-switch is-on":"studio-interaction-switch","aria-hidden":"true",children:e.jsx("span",{})})]}),e.jsxs("div",{className:"studio-interaction-voice-language",role:"group","aria-label":G("studio.creator.interaction_voice_language","语音语言"),children:[e.jsxs("span",{className:"studio-interaction-setting-label",children:[e.jsx(pg,{size:17,"aria-hidden":"true"}),e.jsx("span",{children:G("studio.creator.interaction_voice_language","语音语言")})]}),e.jsxs("div",{className:"studio-interaction-language-options",children:[e.jsx("button",{className:r==="ko"?"is-active":"",type:"button","aria-pressed":r==="ko",onClick:()=>T("ko"),children:G("studio.creator.interaction_voice_ko","韩语")}),e.jsx("button",{className:r==="ja"?"is-active":"",type:"button","aria-pressed":r==="ja",onClick:()=>T("ja"),children:G("studio.creator.interaction_voice_ja","日语")})]})]}),e.jsxs("button",{className:"studio-interaction-setting-row",type:"button",role:"switch","aria-checked":i,onClick:N,children:[e.jsxs("span",{className:"studio-interaction-setting-label",children:[e.jsx(ug,{size:17,"aria-hidden":"true"}),e.jsx("span",{children:G("studio.creator.interaction_fx","互动特效")})]}),e.jsx("span",{className:i?"studio-interaction-switch is-on":"studio-interaction-switch","aria-hidden":"true",children:e.jsx("span",{})})]}),e.jsxs("button",{className:"studio-interaction-settings-done",type:"button",onClick:L,children:[e.jsx(mg,{size:15,"aria-hidden":"true"}),e.jsx("span",{children:G("studio.creator.interaction_done","完成")})]})]}):null]}),e.jsxs("button",{className:"secondary-button creator-handoff-button",type:"button",title:G("studio.creator.annotate_screenshot.tip","把当前静态预览截图送到 Creator 批注，只生成覆盖图或 PNG，不会修改原始资源。"),"aria-label":G("studio.creator.annotate_screenshot","截图批注"),onClick:D,children:[e.jsx(cf,{size:15,"aria-hidden":"true"}),e.jsx("span",{children:G("studio.creator.annotate_screenshot","截图批注")})]}),S.length>0?e.jsxs("details",{className:"studio-local-custom-menu",children:[e.jsxs("summary",{children:[e.jsx(_f,{size:15,"aria-hidden":"true"}),e.jsx("span",{children:G("studio.creator.local_versions","本地版本")}),e.jsx("strong",{children:S.length})]}),e.jsx("div",{className:"studio-local-custom-popover",children:S.slice(0,8).map(I=>e.jsxs("article",{className:"studio-local-custom-entry",children:[e.jsx("button",{type:"button",className:"studio-local-custom-preview",onClick:()=>Y(I),title:G("studio.creator.open_preview","打开预览图"),children:e.jsx("img",{src:I.previewUrl,alt:I.name})}),e.jsxs("div",{children:[e.jsx("strong",{title:I.name,children:I.name}),e.jsxs("span",{children:[I.status," · ",I.updatedAt.slice(0,10)]})]}),e.jsxs("div",{className:"creator-overlay-actions",children:[e.jsx("button",{className:"secondary-button",type:"button",onClick:()=>q(I),children:G("studio.creator.continue_edit","继续编辑")}),e.jsx("button",{className:"secondary-button",type:"button",onClick:()=>$(I),"aria-label":G("studio.creator.delete_local_version","删除 {name}",{name:I.name}),children:e.jsx(no,{size:14,"aria-hidden":"true"})})]})]},I.customId))})]}):null]})}const SS=""+new URL("tool-canvas-CqT8yOzT.png",import.meta.url).href,jS=""+new URL("tool-export-DEyHJPWw.png",import.meta.url).href,NS=""+new URL("tool-import-5eXdEvqa.png",import.meta.url).href,CS=""+new URL("tool-layers-DimYBNz4.png",import.meta.url).href,TS=""+new URL("tool-look-WsBnz5Rd.png",import.meta.url).href,MS=""+new URL("tool-motion-D_k0kt4L.png",import.meta.url).href,AS=""+new URL("tool-parts-Rd2z96K-.png",import.meta.url).href,IS=""+new URL("tool-settings-C_Mg_uQF.png",import.meta.url).href,ES="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2048%2048'%3e%3crect%20x='5'%20y='7'%20width='38'%20height='34'%20rx='9'%20fill='%23e3edd7'%20stroke='%23506e46'%20stroke-width='2'/%3e%3cpath%20d='M24%2010v28'%20stroke='%23506e46'%20stroke-width='2'%20stroke-dasharray='3%203'/%3e%3cpath%20d='m10%2018%2010-5v22l-10-5zm28%200-10-5v22l10-5z'%20fill='%2386af64'%20stroke='%23506e46'%20stroke-width='1.5'/%3e%3c/svg%3e",RS=`\uFEFF\r
/* ============ v7 无素材基线：不引用任何游戏素材，chrome 全部为中性样式 ============\r
   布局 / 功能 / 真实数据与 v6 一致；此稿仅作素材重新分配的底板。 */\r
:root{\r
  --acc:#57a03f; --acc-deep:#3c7a2e; --acc-soft:#eaf3df;\r
  --ink:#3f4438; --ink2:#71776a; --ink3:#9aa092;\r
  --line:#d9ddcc; --card:#ffffff;\r
  --sh:0 3px 14px rgba(60,66,40,.10);\r
}\r
*{box-sizing:border-box;-webkit-tap-highlight-color:transparent;}\r
html,body{margin:0;height:100%;overflow:hidden;}\r
body{font-family:"Microsoft YaHei","Noto Sans SC",system-ui,sans-serif;color:var(--ink);background:#eef0e6;}\r
button{font-family:inherit;color:inherit;cursor:pointer;background:none;border:none;padding:0;}
:where(.studio-v12-exact) button{font-size:13.3333px;font-weight:400;}
input{font-family:inherit;color:inherit;}
.hidden{display:none!important;}\r
::-webkit-scrollbar{width:9px;height:9px;}\r
::-webkit-scrollbar-thumb{background:#c6cbb6;border-radius:99px;border:2px solid transparent;background-clip:content-box;}\r
::-webkit-scrollbar-track{background:transparent;}\r
.rip{position:relative;overflow:hidden;}\r
.ripple{position:absolute;border-radius:50%;background:#9db98a;opacity:.25;transform:scale(0);animation:rip .5s ease-out forwards;pointer-events:none;}\r
@keyframes rip{to{transform:scale(2.7);opacity:0;}}\r
@keyframes pop{from{transform:translateY(10px) scale(.96);opacity:0;}to{transform:none;opacity:1;}}\r
\r
/* 面板 / 弹窗（素材槽位：面板框 / 大弹窗框 / 小弹窗框） */\r
.paper,.popA,.popB{background:var(--card);border:1.5px solid var(--line);border-radius:16px;box-shadow:var(--sh);}\r
.popA{border-radius:20px;}\r
/* 主按钮（槽位：主按钮） */\r
.g-btn{\r
  position:relative;display:flex;align-items:center;justify-content:center;gap:8px;\r
  background:var(--acc);border-radius:14px;color:#fff;font-weight:700;\r
  box-shadow:0 2px 6px rgba(60,110,40,.3);transition:.15s;\r
}\r
.g-btn:hover{background:#61ad48;transform:translateY(-1px);}\r
.g-btn:active{transform:translateY(1px);}\r
.g-btn svg{width:16px;height:16px;stroke:#fff;stroke-width:2.4;fill:none;}\r
/* 次按钮（槽位：次按钮） */\r
.w-btn{\r
  display:flex;align-items:center;justify-content:center;gap:6px;\r
  background:#fff;border:1.5px solid var(--line);border-radius:12px;\r
  color:var(--ink);font-weight:600;font-size:12.5px;min-height:38px;padding:0 12px;\r
  transition:.14s;\r
}\r
.w-btn:hover{border-color:var(--acc);color:var(--acc-deep);}\r
.w-btn:active{transform:translateY(1px);}\r
/* 页签（槽位：页签未选/选中） */\r
.seg{display:flex;gap:6px;background:#fff;border:1.5px solid var(--line);border-radius:99px;padding:4px;}\r
.seg button{height:32px;border-radius:99px;padding:0 14px;font-size:12.5px;font-weight:600;color:var(--ink2);transition:.15s;white-space:nowrap;}\r
.seg button:hover{color:var(--acc-deep);background:var(--acc-soft);}\r
.seg button.on{background:var(--acc);color:#fff;}\r
.seg button.dis{opacity:.38;}\r
.gtitle{display:flex;align-items:center;gap:8px;font-size:11px;font-weight:700;color:var(--ink2);letter-spacing:.08em;}\r
.gtitle::before{content:"";width:7px;height:7px;border-radius:50%;background:var(--acc);}\r
.gtitle::after{content:"";flex:1;height:1px;background:var(--line);}\r
.gcard{background:#fafbf6;border:1px solid var(--line);border-radius:12px;padding:11px 12px;display:flex;flex-direction:column;gap:9px;}\r
.note{font-size:10.5px;color:var(--ink2);line-height:1.6;}\r
.warn{color:#a8681e;}\r
.rrow{display:flex;gap:8px;}\r
.rrow>*{flex:1;}\r
.frow{display:flex;align-items:center;gap:8px;font-size:12.5px;font-weight:600;}\r
.frow>span{flex:0 0 82px;color:var(--ink2);font-size:11.5px;}\r
/* 名牌横幅（槽位：深绿名牌） */\r
.banner{display:inline-flex;align-items:center;justify-content:center;gap:8px;background:var(--acc-deep);color:#fff;font-weight:700;border-radius:10px;padding:6px 16px;}\r
.tray{display:inline-flex;align-items:center;justify-content:center;background:var(--acc-soft);border-radius:9px;color:var(--acc-deep);font-weight:700;min-height:30px;padding:0 12px;}\r
.stitch{border:1.5px dashed var(--line);border-radius:12px;}\r
.boxline{border:2px solid var(--acc);border-radius:12px;}\r
\r
/* 舞台（槽位：背景纹理） */\r
#stage{position:fixed;inset:0;background:#e7ebd9;}\r
#stage.solid-bg{background:var(--stage-bg,#fff);}\r
#stage.checker-bg{background:repeating-conic-gradient(#dde2d0 0% 25%, #f4f6ec 0% 50%) 50% 50%/26px 26px;}\r
#exportFrame{\r
  position:absolute;left:50%;top:52%;transform:translate(-50%,-50%);z-index:1;\r
  aspect-ratio:var(--f-ar,1/1);height:min(70vh,calc(70vw / (var(--f-w,1)/var(--f-h,1))));\r
  border:2px dashed #b9c0a6;border-radius:14px;pointer-events:none;transition:.3s;\r
}\r
#exportFrame::after{\r
  content:attr(data-label);position:absolute;top:-30px;right:0;font-size:11px;font-weight:600;color:#fff;\r
  background:var(--acc-deep);border-radius:8px;padding:3px 10px;\r
}\r
#stageChars{position:absolute;inset:0;z-index:2;}\r
.stage-char{position:absolute;left:50%;top:52%;display:flex;flex-direction:column;align-items:center;pointer-events:auto;}\r
.sc-anim{position:relative;transform-box:border-box;}\r
.sc-ring{border-radius:50%;overflow:hidden;border:4px solid #fff;box-shadow:0 0 0 1.5px var(--line),0 10px 24px rgba(60,66,40,.18);background:#f4f6ec;}\r
.sc-ring img{width:100%;height:100%;object-fit:cover;display:block;}\r
.sc-shadow{width:62%;height:14px;border-radius:50%;background:rgba(60,66,40,.16);filter:blur(3px);margin-top:10px;}\r
.sc-sel{position:absolute;inset:-12px;border:2px dashed var(--acc);border-radius:20px;pointer-events:none;}\r
.sc-acc{position:absolute;}\r
.sc-star{position:absolute;font-size:26px;color:#e9b64c;animation:starPop 1.15s linear infinite;}\r
@keyframes starPop{0%{opacity:0;transform:scale(.4) rotate(0);}40%{opacity:1;}100%{opacity:0;transform:scale(1.25) rotate(120deg);}}\r
.sc-bubble{\r
  position:absolute;top:-48px;left:50%;transform:translateX(-50%);white-space:nowrap;\r
  background:#fff;border:1.5px solid var(--line);border-radius:99px;padding:4px 14px;\r
  font-size:12px;font-weight:700;color:var(--ink);box-shadow:var(--sh);\r
}\r
.stage-photo{position:relative;display:flex;align-items:center;justify-content:center;}\r
.stage-photo .ph-frame{background:#fff;border:1.5px solid var(--line);border-radius:14px;box-shadow:var(--sh);width:100%;aspect-ratio:4/3;position:relative;}\r
.stage-photo .ph-inner{position:absolute;inset:10px 10px 34px;border:1.5px dashed var(--line);border-radius:10px;background:#f0f2e7;}\r
.stage-photo .ph-cap{position:absolute;bottom:8px;left:0;right:0;text-align:center;font-size:12px;font-weight:600;color:var(--ink2);}\r
.paused-all .sc-anim,.paused-all .sc-star{animation-play-state:paused!important;}\r
\r
/* 顶栏 */\r
.topbar{position:fixed;top:12px;left:14px;right:14px;z-index:40;display:flex;align-items:flex-start;gap:10px;pointer-events:none;flex-wrap:nowrap;}\r
.topbar>*{pointer-events:auto;}\r
.brand{display:flex;align-items:center;gap:9px;padding:6px 14px 6px 6px;}\r
.brand i{width:34px;height:34px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:var(--acc);color:#fff;font-style:normal;font-weight:700;font-size:15px;}\r
.brand b{font-size:13px;}\r
.brand small{display:block;font-size:8.5px;color:var(--ink3);letter-spacing:.15em;font-weight:600;}\r
.char-capsule{display:flex;align-items:center;gap:10px;padding:5px 14px 5px 5px;transition:.15s;}\r
.char-capsule:hover{border-color:var(--acc);}\r
.char-ava{position:relative;width:44px;height:44px;flex:0 0 auto;}\r
.char-ava img,.char-ava .avatar-fallback{width:44px;height:44px;border-radius:50%;object-fit:cover;display:block;border:2px solid #fff;box-shadow:0 0 0 1.5px var(--acc);}\r
.avatar-fallback{display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:16px;}\r
.char-capsule .cc{display:flex;flex-direction:column;align-items:flex-start;line-height:1.25;}\r
.char-capsule .cc b{font-size:14.5px;display:flex;align-items:center;gap:6px;white-space:nowrap;}\r
.char-capsule .cc b svg{width:13px;height:13px;stroke:var(--acc);stroke-width:3;fill:none;}\r
.char-capsule .cc small{font-size:9.5px;color:var(--ink2);font-weight:600;white-space:nowrap;}\r
.top-sp{flex:1;}\r
.btn-export{height:52px;padding:0 20px;font-size:14px;min-width:180px;}\r
.btn-export .fill{position:absolute;inset:0;background:rgba(255,255,255,.25);transform-origin:left;transform:scaleX(0);}\r
.mini-fab{position:relative;width:52px;display:flex;flex-direction:column;align-items:center;gap:3px;}\r
.mini-fab i{\r
  width:42px;height:42px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-style:normal;font-size:15px;\r
  background:#fff;border:1.5px solid var(--line);color:var(--ink);font-weight:700;transition:.15s;box-shadow:var(--sh);\r
}\r
.mini-fab span{font-size:9.5px;font-weight:600;color:var(--ink2);background:#fff;border:1px solid var(--line);border-radius:99px;padding:1px 8px;white-space:nowrap;}\r
.mini-fab:hover i{border-color:var(--acc);color:var(--acc-deep);transform:translateY(-2px);}\r
.mini-fab:active i{transform:translateY(1px);}\r
@media (max-width:1300px){.mini-fab span{display:none;}.mini-fab{width:46px;}.brand small{display:none;}.btn-export{min-width:160px;}}\r
@media (max-width:1120px){.brand{display:none;}.char-capsule .cc small{display:none;}.seg button{padding:0 10px;font-size:12px;}.btn-export{min-width:140px;font-size:13px;}}\r
@media (max-width:940px){.char-capsule .cc{display:none;}#exportLabel{display:none;}.btn-export{min-width:88px;height:46px;}.seg{gap:3px;}.topbar{gap:7px;}}\r
\r
/* 工具轨（上下锚定防裁切；槽位：工具轨按钮 ×6） */\r
.rail{position:fixed;left:14px;top:84px;bottom:108px;z-index:40;display:flex;flex-direction:column;gap:8px;justify-content:center;pointer-events:none;min-height:0;}\r
.rail button{position:relative;display:flex;align-items:center;gap:7px;transition:.15s;pointer-events:auto;flex:0 1 auto;min-height:0;}\r
.rail button i{\r
  width:50px;height:50px;border-radius:14px;display:flex;align-items:center;justify-content:center;font-style:normal;flex:0 0 auto;\r
  background:#fff;border:1.5px solid var(--line);font-size:16px;font-weight:700;color:var(--ink2);box-shadow:var(--sh);transition:.15s;\r
}\r
.rail button span{font-size:12px;font-weight:600;color:var(--ink);background:#fff;border:1px solid var(--line);border-radius:99px;padding:3px 11px;}\r
.rail button:hover{transform:translateX(2px);}\r
.rail button:hover i{border-color:var(--acc);color:var(--acc-deep);}\r
.rail button.on i{background:var(--acc);border-color:var(--acc);color:#fff;}\r
.rail button.on span{background:var(--acc-soft);border-color:var(--acc);color:var(--acc-deep);}\r
@media (max-height:740px){.rail{gap:5px;}.rail button i{width:42px;height:42px;}.rail button span{font-size:11px;padding:2px 9px;}}\r
.tool-panel{position:fixed;left:176px;top:50%;transform:translateY(-50%);z-index:39;width:356px;max-height:min(80vh,calc(100vh - 40px));display:flex;flex-direction:column;overflow:hidden;animation:slideIn .22s cubic-bezier(.3,1.3,.5,1);padding:12px;}\r
@keyframes slideIn{from{transform:translate(-14px,-50%);opacity:0;}to{transform:translate(0,-50%);opacity:1;}}\r
.tp-head{display:flex;align-items:center;gap:8px;padding:2px 4px 8px;font-weight:700;font-size:14px;}\r
.tp-head small{font-weight:500;color:var(--ink3);font-size:10px;}\r
.tp-head .x{margin-left:auto;width:28px;height:28px;border-radius:50%;background:#f2f4ea;color:var(--ink2);font-weight:700;display:flex;align-items:center;justify-content:center;}\r
.tp-head .x:hover{background:var(--acc-soft);color:var(--acc-deep);}\r
.tp-body{flex:1;overflow-y:auto;padding:0 2px 4px;display:flex;flex-direction:column;gap:9px;}\r
\r
.mgrid{display:grid;grid-template-columns:1fr 1fr;gap:7px;}\r
.mcard{position:relative;background:#fff;border:1.5px solid var(--line);border-radius:11px;padding:9px 11px;display:flex;flex-direction:column;gap:2px;align-items:flex-start;transition:.14s;}\r
.mcard:hover{border-color:var(--acc);}\r
.mcard.on{border-color:var(--acc);background:var(--acc-soft);}\r
.mcard.on b{color:var(--acc-deep);}\r
.mcard b{font-size:12.5px;}\r
.mcard small{font-size:9.5px;color:var(--ink3);}\r
.studio-v12-exact .tool-panel .mgrid{grid-template-columns:repeat(2,minmax(0,1fr));}\r
.studio-v12-exact .tool-panel .mcard{min-width:0;max-width:100%;}\r
.studio-v12-exact .tool-panel .mcard b{\r
  min-width:0;max-width:100%;white-space:normal;overflow-wrap:anywhere;line-height:1.45;\r
}\r
.skgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:7px;}\r
.skcard{background:#fff;border:1.5px solid var(--line);border-radius:11px;padding:9px 6px 7px;display:flex;flex-direction:column;align-items:center;gap:5px;transition:.14s;}\r
.skcard:hover{border-color:var(--acc);}\r
.skcard.on{border-color:var(--acc);background:var(--acc-soft);}\r
.skcard.on b{color:var(--acc-deep);}\r
.skdot{width:28px;height:28px;border-radius:50%;border:1.5px solid var(--line);}\r
.skcard b{font-size:9.5px;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}\r
.part-item{display:flex;align-items:center;gap:10px;background:#fff;border:1.5px solid var(--line);border-radius:11px;padding:8px 10px;font-size:12.5px;transition:.14s;}\r
.part-item.is-off{opacity:.55;background:#f4f5ee;}\r
.pthumb{width:32px;height:32px;border-radius:9px;background:var(--acc-soft);color:var(--acc-deep);font-weight:700;font-size:13px;flex:0 0 auto;display:flex;align-items:center;justify-content:center;overflow:hidden;}\r
.part-item .pname{flex:1;min-width:0;}\r
.part-item .pname b{font-size:12px;display:block;}\r
.part-item .pname small{font-size:9px;color:var(--ink3);}\r
.pact{height:26px;border-radius:8px;background:#f2f4ea;font-size:10.5px;font-weight:600;color:var(--ink2);padding:0 9px;}\r
.pact:hover{background:var(--acc-soft);color:var(--acc-deep);}\r
.toggle{width:40px;height:22px;border-radius:99px;background:#cfd4c0;position:relative;transition:.18s;flex:0 0 auto;}\r
.toggle::after{content:"";position:absolute;top:2px;left:2px;width:18px;height:18px;border-radius:50%;background:#fff;box-shadow:0 1px 3px rgba(0,0,0,.25);transition:.18s;}\r
.toggle.on{background:var(--acc);}\r
.toggle.on::after{left:20px;}\r
.layer-item{display:flex;align-items:center;gap:9px;background:#fff;border:1.5px solid var(--line);border-radius:11px;padding:7px 10px;font-size:12.5px;transition:.14s;}\r
.layer-item.on{border-color:var(--acc);background:var(--acc-soft);}\r
.layer-item img.lav,.layer-item .avatar-fallback{width:28px;height:28px;border-radius:50%;object-fit:cover;border:1.5px solid #fff;box-shadow:0 0 0 1px var(--acc);}\r
.layer-item .avatar-fallback{font-size:11px;}\r
.layer-item .ln{flex:1;min-width:0;line-height:1.2;}\r
.layer-item .ln b{font-size:12px;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}\r
.layer-item .ln small{font-size:9px;color:var(--ink3);}\r
.lop{width:26px;height:26px;border-radius:8px;background:#f2f4ea;font-size:10.5px;color:var(--ink2);display:flex;align-items:center;justify-content:center;font-weight:600;}\r
.lop:hover{background:var(--acc-soft);color:var(--acc-deep);}\r
.lop.off{opacity:.45;}\r
input[type="range"]{flex:1;accent-color:var(--acc);height:5px;}\r
.slider-row{display:flex;align-items:center;gap:9px;flex:1;}\r
.slider-row b{font-size:11.5px;width:36px;text-align:right;font-variant-numeric:tabular-nums;color:var(--acc-deep);}\r
.swatches{display:flex;gap:8px;flex:1;}\r
.swatch{width:28px;height:28px;border-radius:9px;border:1.5px solid var(--line);transition:.13s;}\r
.swatch:hover{transform:translateY(-2px);}\r
.swatch.on{border-color:var(--acc);box-shadow:0 0 0 1.5px var(--acc);}\r
.swatch.checker{background:repeating-conic-gradient(#dde2d0 0% 25%, #fff 0% 50%) 0 0/10px 10px;}\r
.swatch.pattern{background:#e7ebd9;}\r
.preset{height:30px;border-radius:99px;background:#fff;border:1.5px solid var(--line);padding:0 12px;font-size:11.5px;font-weight:600;color:var(--ink2);transition:.14s;white-space:nowrap;}\r
.preset:hover{border-color:var(--acc);color:var(--acc-deep);}\r
.preset.on{background:var(--acc);border-color:var(--acc);color:#fff;}\r
.preset-row{display:flex;gap:7px;flex-wrap:wrap;}\r
details.fold{background:#fafbf6;border:1px solid var(--line);border-radius:12px;padding:0 12px;}\r
details.fold summary{list-style:none;min-height:40px;display:flex;align-items:center;gap:8px;font-weight:700;font-size:12.5px;cursor:pointer;}\r
details.fold summary::-webkit-details-marker{display:none;}\r
details.fold summary::after{content:"▾";margin-left:auto;color:var(--ink3);transition:transform .2s;}\r
details.fold[open] summary::after{transform:rotate(180deg);}\r
details.fold .fb{padding:2px 0 12px;display:flex;flex-direction:column;gap:8px;}\r
.quality-tag{display:flex;align-items:center;gap:7px;background:#fff;border:1.5px dashed var(--line);border-radius:10px;padding:7px 10px;font-size:11.5px;font-weight:600;color:var(--ink2);}\r
.quality-tag b{color:var(--acc-deep);}\r
.dropdown{position:relative;flex:1;}\r
.drop-btn{width:100%;min-height:35px;background:#fff;border:1.5px solid var(--line);border-radius:10px;display:flex;align-items:center;gap:6px;padding:0 11px;font-size:12px;font-weight:600;transition:.14s;text-align:left;}\r
.drop-btn em{font-style:normal;margin-left:auto;color:var(--ink3);font-size:10px;transition:.2s;}\r
.dropdown.open .drop-btn{border-color:var(--acc);}\r
.dropdown.open .drop-btn em{transform:rotate(180deg);}\r
.drop-list{position:absolute;left:0;right:0;top:calc(100% + 6px);z-index:80;background:#fff;border:1.5px solid var(--line);border-radius:11px;box-shadow:var(--sh);padding:5px;display:flex;flex-direction:column;gap:2px;animation:pop .18s cubic-bezier(.3,1.4,.5,1);}\r
.drop-list button{min-height:32px;border-radius:8px;text-align:left;padding:4px 10px;font-size:11.5px;font-weight:500;display:flex;flex-direction:column;justify-content:center;}\r
.drop-list button:hover{background:#f2f4ea;}\r
.drop-list button.on{background:var(--acc-soft);color:var(--acc-deep);}\r
.drop-list small{font-size:9px;color:var(--ink3);}\r
.stepper{display:flex;align-items:center;background:#fff;border:1.5px solid var(--line);border-radius:10px;overflow:hidden;flex:1;}\r
.stepper button{width:32px;height:34px;color:var(--ink2);font-size:15px;font-weight:700;}\r
.stepper button:hover{background:#f2f4ea;}\r
.stepper b{flex:1;text-align:center;font-size:12.5px;font-variant-numeric:tabular-nums;}\r
\r
/* 底部播放胶囊（槽位：进度轨 / 进度填充 / 令牌） */\r
.transport{position:fixed;left:50%;bottom:16px;transform:translateX(-50%);z-index:40;display:flex;align-items:center;gap:9px;padding:8px 10px;}\r
.t-chip{position:relative;min-height:42px;padding:2px 10px;display:flex;flex-direction:column;align-items:flex-start;justify-content:center;transition:.14s;background:#fafbf6;border:1.5px solid var(--line);border-radius:11px;}\r
.t-chip:hover{border-color:var(--acc);}\r
.t-chip .k{font-size:8.5px;color:var(--ink3);line-height:1.1;font-weight:600;}\r
.t-chip b{font-size:12.5px;max-width:130px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}\r
.t-ico{width:42px;height:42px;border-radius:50%;display:flex;align-items:center;justify-content:center;gap:2px;background:#fff;border:1.5px solid var(--line);color:var(--ink2);font-weight:700;transition:.14s;}\r
.t-ico:hover{border-color:var(--acc);color:var(--acc-deep);transform:translateY(-1px);}\r
.t-ico svg{width:15px;height:15px;fill:currentColor;}\r
.t-ico small{font-size:9.5px;font-weight:700;}\r
.t-main{width:50px;height:50px;background:var(--acc);border-color:var(--acc);color:#fff;}\r
.t-main:hover{color:#fff;}\r
.t-main svg{width:18px;height:18px;}\r
.pline{position:relative;width:170px;height:10px;border-radius:99px;background:#e0e4d2;overflow:hidden;}\r
.pline i{position:absolute;inset:0;border-radius:99px;transform-origin:left;background:var(--acc);animation:sweep var(--mdur,2.4s) linear infinite;}\r
.pline.paused i{animation-play-state:paused;}\r
@keyframes sweep{from{transform:scaleX(0);}to{transform:scaleX(1);}}\r
\r
/* 轨道编排 */\r
.timeline{position:fixed;left:50%;bottom:92px;transform:translateX(-50%);z-index:41;width:min(720px,80vw);padding:12px;display:flex;flex-direction:column;gap:8px;animation:pop .22s cubic-bezier(.3,1.3,.5,1);}\r
.tl-head{display:flex;align-items:center;gap:9px;font-weight:700;font-size:13px;padding:0 4px;}\r
.tl-head small{color:var(--ink3);font-size:10px;font-weight:500;}\r
.tl-head .x{margin-left:auto;width:26px;height:26px;border-radius:50%;background:#f2f4ea;color:var(--ink2);font-weight:700;}\r
.tl-track{display:flex;align-items:center;gap:8px;}\r
.tl-track .tname{flex:0 0 76px;font-size:10.5px;font-weight:700;color:#fff;background:var(--acc-deep);border-radius:8px;text-align:center;padding:5px 0;}\r
.tl-lane{flex:1;height:32px;border-radius:10px;background:#f0f2e7;border:1.5px dashed var(--line);display:flex;align-items:center;gap:5px;padding:0 5px;overflow-x:auto;}\r
.tl-clip{flex:0 0 auto;height:23px;border-radius:7px;padding:0 11px;font-size:10.5px;font-weight:700;color:#fff;display:flex;align-items:center;background:var(--acc);}\r
.tl-clip.alt{background:#4f97cf;}\r
.tl-actions{display:flex;gap:8px;}\r
\r
/* 右下：队列 / 导出记录 */\r
.dock-br{position:fixed;right:16px;bottom:16px;z-index:38;display:flex;flex-direction:column;gap:8px;width:318px;}\r
.queue-box{padding:12px;display:flex;flex-direction:column;gap:8px;animation:pop .25s cubic-bezier(.3,1.4,.5,1);}\r
.queue-top{display:flex;align-items:center;gap:8px;font-size:12.5px;font-weight:700;}\r
.queue-top .pct{margin-left:auto;color:var(--acc-deep);font-variant-numeric:tabular-nums;}\r
.qbar{position:relative;height:10px;border-radius:99px;background:#e0e4d2;overflow:hidden;}\r
.qbar i{position:absolute;inset:0 auto 0 0;width:0%;border-radius:99px;background:var(--acc);transition:width .3s;}\r
.qmeta{display:flex;gap:12px;font-size:10.5px;color:var(--ink2);font-weight:600;font-variant-numeric:tabular-nums;}\r
.qmeta b{color:var(--ink);}\r
.qtasks{display:flex;flex-direction:column;gap:3px;max-height:150px;overflow-y:auto;}\r
.qtask{display:flex;align-items:center;gap:7px;font-size:11px;font-weight:500;padding:4px 7px;border-radius:8px;}\r
.qtask .st{width:16px;height:16px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:9px;flex:0 0 auto;background:#eceee2;color:var(--ink3);}\r
.qtask.done .st{background:var(--acc);color:#fff;}\r
.qtask.running{background:#f4f6ec;}\r
.qtask.running .st{color:var(--acc-deep);animation:spin 1s linear infinite;}\r
.qtask.failed .st{background:#e08b8b;color:#fff;}\r
.qtask .badge{margin-left:auto;font-size:9px;color:#8a6414;background:#f7ecc9;border-radius:6px;padding:1.5px 7px;font-weight:700;}\r
.qtask .tsz{margin-left:auto;font-size:9px;color:var(--ink3);}\r
@keyframes spin{to{transform:rotate(360deg);}}\r
.qact{display:flex;gap:6px;}\r
.qact .w-btn{min-height:32px;font-size:11px;flex:1;}\r
.log-item{display:flex;align-items:center;gap:9px;padding:8px 10px;font-size:11.5px;animation:pop .25s cubic-bezier(.3,1.4,.5,1);background:#fff;border:1.5px solid var(--line);border-radius:12px;box-shadow:var(--sh);}\r
.log-item .gif{width:30px;height:30px;flex:0 0 auto;border-radius:8px;background:var(--acc-soft);color:var(--acc-deep);font-size:8.5px;font-weight:700;display:flex;align-items:center;justify-content:center;}\r
.log-item .lc{flex:1;min-width:0;line-height:1.25;}\r
.log-item .lc b{display:block;font-size:11px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}\r
.log-item .lc small{color:var(--ink3);font-size:9px;}\r
\r
/* 全屏角色选择 */\r
.roster{position:fixed;inset:0;z-index:90;display:flex;align-items:center;justify-content:center;opacity:0;pointer-events:none;transition:.25s;}\r
.roster.on{opacity:1;pointer-events:auto;}\r
.roster-scrim{position:absolute;inset:0;background:rgba(50,56,38,.42);backdrop-filter:blur(6px);}\r
.roster-card{position:relative;width:min(1190px,94vw);height:min(790px,90vh);display:flex;flex-direction:column;overflow:hidden;transform:translateY(16px) scale(.98);transition:.25s cubic-bezier(.3,1.2,.4,1);padding:16px;}\r
.roster.on .roster-card{transform:none;}\r
.roster-head{display:flex;align-items:center;gap:14px;padding:0 4px 6px;}\r
.roster-title{display:flex;flex-direction:column;gap:3px;}\r
.roster-title .banner{font-size:15px;}\r
.roster-title small{font-size:10px;color:var(--ink2);font-weight:600;padding-left:2px;}\r
.roster-search{margin-left:auto;flex:0 1 380px;display:flex;align-items:center;gap:9px;height:42px;background:#fff;border:1.5px solid var(--line);border-radius:99px;padding:0 16px;transition:.2s;}\r
.roster-search:focus-within{border-color:var(--acc);}\r
.roster-search svg{width:15px;height:15px;stroke:var(--ink3);stroke-width:2.4;fill:none;}\r
.roster-search input{border:none;outline:none;background:none;flex:1;font-size:13px;font-weight:500;min-width:0;}\r
.roster-x{width:38px;height:38px;border-radius:50%;background:#f2f4ea;color:var(--ink2);font-size:14px;font-weight:700;display:flex;align-items:center;justify-content:center;transition:.14s;}\r
.roster-x:hover{background:var(--acc-soft);color:var(--acc-deep);}\r
.roster-tabs{display:flex;gap:6px;padding:6px 4px 4px;flex-wrap:wrap;}\r
.rtab{height:34px;border-radius:99px;background:#fff;border:1.5px solid var(--line);padding:0 13px;font-size:12px;font-weight:600;color:var(--ink2);display:flex;align-items:center;gap:6px;transition:.14s;}\r
.rtab b{font-size:9.5px;color:var(--ink3);font-weight:700;}\r
.rtab:hover{border-color:var(--acc);color:var(--acc-deep);}\r
.rtab.on{background:var(--acc);border-color:var(--acc);color:#fff;}\r
.rtab.on b{color:#eaf8e2;}\r
.recent-row{display:flex;align-items:center;gap:8px;padding:7px 6px 3px;font-size:11px;font-weight:600;color:var(--ink2);}\r
.recent-row .rc{display:flex;align-items:center;gap:6px;background:#fff;border:1.5px solid var(--line);border-radius:99px;padding:3px 12px 3px 4px;font-size:11.5px;font-weight:600;transition:.14s;}\r
.recent-row .rc:hover{border-color:var(--acc);}\r
.recent-row .rc img,.recent-row .rc .avatar-fallback{width:22px;height:22px;border-radius:50%;object-fit:cover;font-size:10px;}\r
.roster-grid{flex:1;overflow-y:auto;padding:10px 4px 16px;display:grid;grid-template-columns:repeat(auto-fill,minmax(126px,1fr));gap:11px;align-content:start;}\r
.rcard{position:relative;background:#fff;border:1.5px solid var(--line);border-radius:14px;padding:12px 6px 9px;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;gap:6px;min-height:140px;transition:transform .15s,border-color .15s;opacity:0;animation:cardIn .4s forwards;}\r
.rcard>*{flex:0 0 auto;}\r
@keyframes cardIn{from{opacity:0;transform:translateY(10px);}to{opacity:1;transform:none;}}\r
.rcard:hover{transform:translateY(-4px);border-color:var(--acc);}\r
.rcard.on{border-color:var(--acc);background:var(--acc-soft);box-shadow:0 0 0 1.5px var(--acc);}\r
.rcard .sel-star{position:absolute;top:-9px;right:-6px;width:24px;height:24px;border-radius:50%;background:var(--acc);color:#fff;font-size:12px;font-weight:700;display:flex;align-items:center;justify-content:center;box-shadow:var(--sh);z-index:2;}\r
.rcard img.rav,.rcard .avatar-fallback{width:64px;height:64px;border-radius:50%;object-fit:cover;border:2px solid #fff;box-shadow:0 0 0 1.5px var(--acc);}
.rcard.is-scene-resource{min-height:154px;padding:8px 6px 9px;gap:5px;}
.rcard.is-scene-resource img.rav{width:100%;height:78px;aspect-ratio:16 / 9;border-radius:8px;object-fit:contain;background:#f4f7ed;border:1px solid var(--line);box-shadow:none;}
.rcard.is-dynamic-avatar-resource img.rav{width:88px;height:88px;border-radius:8px;object-fit:contain;background:#f4f7ed;border:0;box-shadow:none;}\r
.rcard.is-border-resource img.rav{width:88px;height:88px;border-radius:0;object-fit:contain;background:transparent;border:0;box-shadow:none;}\r
.rcard .avatar-fallback{font-size:23px;}
.roster-card{font-family:var(--trickcal-ui-font);letter-spacing:0;}\r
.rcard b.nm{font-size:11px;font-weight:700;width:fit-content;max-width:100%;display:block;white-space:normal;overflow-wrap:anywhere;word-break:normal;text-align:center;line-height:16px;background:var(--acc-soft);color:var(--acc-deep);border-radius:8px;padding:4px 6px;}\r
.rcard.is-scene-resource .avatar-fallback{width:100%;height:78px;border-radius:8px;}\r
.rcard.is-collection-poster img.rav{height:112px;aspect-ratio:auto;}\r
.rcard:is(.is-dynamic-avatar-resource,.is-border-resource) .avatar-fallback{width:88px;height:88px;border-radius:8px;}\r
.resource-code{display:block;width:100%;min-width:0;font-family:Consolas,monospace;font-size:10px;line-height:16px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:var(--ink2);}\r
.rbadges{display:flex;width:100%;min-width:0;justify-content:center;gap:3px;flex-wrap:wrap;margin-top:auto;}\r
.rb{min-width:0;max-width:100%;font-size:10px;line-height:16px;white-space:normal;overflow-wrap:anywhere;word-break:normal;border-radius:6px;padding:2px 6px;font-weight:600;background:#f2f4ea;color:var(--ink2);}\r
.rcard .avatar-fallback{color:var(--ink2);background:#f4f7ed;}\r
.rb.dim{opacity:.35;}\r
.rmore{border:2px dashed var(--line);border-radius:14px;min-height:140px;display:flex;align-items:center;justify-content:center;color:var(--ink2);font-size:12px;font-weight:600;padding:12px;text-align:center;line-height:1.55;background:#fafbf6;}\r
.roster-empty{grid-column:1/-1;text-align:center;color:var(--ink2);padding:50px 0;font-size:13px;font-weight:600;}\r
\r
/* 弹层 / 抽屉 / toast */\r
.mini-pop{position:fixed;z-index:70;width:256px;padding:12px;display:flex;flex-direction:column;gap:9px;animation:pop .2s cubic-bezier(.3,1.4,.5,1);}\r
.mini-pop .frow>span{flex-basis:70px;}\r
.drawer{position:fixed;top:0;right:-392px;bottom:0;width:368px;z-index:120;background:#f7f8f1;border-left:1.5px solid var(--line);box-shadow:-6px 0 24px rgba(50,56,38,.18);transition:right .3s cubic-bezier(.3,1,.4,1);display:flex;flex-direction:column;}\r
.drawer.open{right:0;}\r
.drawer-head{display:flex;align-items:center;gap:8px;padding:18px 20px 10px;font-weight:700;font-size:15px;}\r
.drawer-head .x{margin-left:auto;width:30px;height:30px;border-radius:50%;background:#eceee2;color:var(--ink2);font-weight:700;}\r
.drawer-body{flex:1;overflow-y:auto;padding:6px 18px 20px;display:flex;flex-direction:column;gap:11px;font-size:12.5px;}\r
.scrim2{position:fixed;inset:0;background:rgba(50,56,38,.3);z-index:110;opacity:0;pointer-events:none;transition:.25s;}\r
.scrim2.on{opacity:1;pointer-events:auto;}\r
.toasts{position:fixed;left:50%;bottom:96px;transform:translateX(-50%);z-index:200;display:flex;flex-direction:column;gap:8px;align-items:center;}\r
.toast{background:#fff;border:1.5px solid var(--line);border-radius:99px;color:var(--ink);padding:9px 18px;font-size:12.5px;font-weight:600;box-shadow:var(--sh);animation:pop .3s cubic-bezier(.3,1.4,.5,1);display:flex;gap:8px;align-items:center;white-space:nowrap;}\r
.toast.ok::before{content:"✓";color:var(--acc);font-weight:700;}\r
.info-fab{position:fixed;left:16px;bottom:16px;z-index:41;height:36px;border-radius:99px;background:#fff;border:1.5px solid var(--line);padding:0 15px;font-size:11.5px;font-weight:600;color:var(--ink2);display:flex;align-items:center;gap:6px;transition:.15s;}\r
.info-fab:hover{border-color:var(--acc);color:var(--acc-deep);}\r
.info-modal{position:fixed;z-index:130;left:50%;top:50%;transform:translate(-50%,-50%) scale(.97);width:min(720px,92vw);max-height:82vh;overflow-y:auto;padding:20px 24px;opacity:0;pointer-events:none;transition:.25s;font-size:13px;line-height:1.75;}\r
.info-modal.on{opacity:1;pointer-events:auto;transform:translate(-50%,-50%) scale(1);}\r
.info-modal h2{margin:0 0 8px;font-size:16px;}\r
.info-modal h3{margin:15px 0 4px;font-size:13px;color:var(--acc-deep);}\r
.info-modal ul{margin:4px 0;padding-left:18px;}\r
.info-modal li{margin:3px 0;}\r
.info-modal .muted{color:var(--ink2);font-size:12px;}\r
.info-modal code{background:#f0f2e7;border-radius:6px;padding:0 5px;font-size:11px;}\r
\r
/* 舞台动画（与 v5/v6 相同） */\r
.anim-idle{animation:aIdle 2.4s ease-in-out infinite;}\r
@keyframes aIdle{0%,100%{transform:translateY(0) rotate(0);}50%{transform:translateY(-10px) rotate(1.2deg);}}\r
.anim-breathe{animation:aBreathe 3s ease-in-out infinite;}\r
@keyframes aBreathe{0%,100%{transform:scale(1);}50%{transform:scale(1.04);}}\r
.anim-angry{animation:aAngry .38s ease-in-out infinite;}\r
@keyframes aAngry{0%,100%{transform:translateX(0);}25%{transform:translateX(-5px) rotate(-1deg);}75%{transform:translateX(5px) rotate(1deg);}}\r
.anim-sad{animation:aSad 3.4s ease-in-out infinite;}\r
@keyframes aSad{0%,100%{transform:translateY(0) rotate(-2.5deg);}50%{transform:translateY(6px) rotate(-4deg);}}\r
.anim-victory{animation:aVict 1.15s cubic-bezier(.3,1.2,.4,1) infinite;}\r
@keyframes aVict{0%,100%{transform:translateY(0) scale(1,1);}18%{transform:translateY(3px) scale(1.05,.94);}45%{transform:translateY(-36px) scale(.97,1.04) rotate(3deg);}70%{transform:translateY(0) scale(1.03,.97);}}\r
.anim-attack{animation:aAtk .9s ease-in-out infinite;}\r
@keyframes aAtk{0%,100%{transform:translateX(0);}30%{transform:translateX(-8px) rotate(-2deg);}55%{transform:translateX(20px) rotate(2.5deg);}75%{transform:translateX(0);}}\r
.anim-skill{animation:aSkill 1.6s ease-in-out infinite;}\r
@keyframes aSkill{0%,100%{transform:rotate(0) translateY(0);}25%{transform:rotate(-4deg) translateY(-5px);}50%{transform:rotate(0) translateY(-18px) scale(1.05);}75%{transform:rotate(4deg) translateY(-5px);}}\r
.anim-wobble{animation:aWob 1.8s ease-in-out infinite;}\r
@keyframes aWob{0%,100%{transform:rotate(-4deg);}50%{transform:rotate(4deg);}}\r
.anim-walk{animation:aWalk .55s ease-in-out infinite;}\r
@keyframes aWalk{0%,100%{transform:translateY(0) rotate(-2deg);}50%{transform:translateY(-8px) rotate(2deg);}}\r
.anim-jump{animation:aJump .9s cubic-bezier(.3,1.2,.4,1) infinite;}\r
@keyframes aJump{0%,100%{transform:translateY(0) scale(1,1);}20%{transform:translateY(4px) scale(1.06,.92);}55%{transform:translateY(-40px) scale(.95,1.06);}85%{transform:translateY(0) scale(1.03,.97);}}\r
.anim-glow{animation:aGlow 1.4s ease-in-out infinite;}\r
@keyframes aGlow{0%,100%{transform:scale(1);filter:none;}50%{transform:scale(1.05);filter:drop-shadow(0 0 14px rgba(233,182,76,.8));}}\r
.spawn-pop{animation:aSpawn .5s cubic-bezier(.3,1.5,.4,1);}\r
@keyframes aSpawn{0%{transform:scale(0);}70%{transform:scale(1.1);}100%{transform:scale(1);}}\r
\r
/* Spine Studio v8: 旅途工坊候选视觉，仅覆盖示意稿样式，不改功能脚本。 */
:root{
  --acc:#5b9f45;
  --acc-deep:#39722f;
  --acc-soft:#eaf4df;
  --ink:#3f4638;
  --ink2:#6f7767;
  --ink3:#99a08f;
  --line:#d9decf;
  --card:#fffdf8;
  --cream:#f7f4e9;
  --stage:#e9eedf;
  --gold:#e6b850;
  --sh:0 8px 24px rgba(62,76,48,.10),0 2px 6px rgba(62,76,48,.06);
}

body{background:var(--stage);}
button:focus-visible,input:focus-visible,summary:focus-visible{outline:3px solid rgba(91,159,69,.28);outline-offset:2px;}

/* 舞台：柔和的旅行手账底纹，保持角色为视觉核心 */
#stage{
  background-color:var(--stage);
  background-image:
    radial-gradient(circle at 12% 18%,rgba(255,255,255,.62) 0 2px,transparent 2.5px),
    radial-gradient(circle at 82% 74%,rgba(255,255,255,.5) 0 2px,transparent 2.5px),
    linear-gradient(135deg,rgba(255,255,255,.17) 25%,transparent 25% 75%,rgba(255,255,255,.17) 75%);
  background-size:38px 38px,52px 52px,88px 88px;
}
#stage::before{
  content:"";position:absolute;inset:76px 20px 88px;pointer-events:none;
  border-radius:30px;
  background:radial-gradient(ellipse at center,rgba(255,255,255,.5),rgba(255,255,255,0) 63%);
}
#exportFrame{
  top:52%;border:1.5px dashed #aeb99d;border-radius:22px;
  box-shadow:inset 0 0 0 1px rgba(255,255,255,.52),0 0 0 5px rgba(255,255,255,.18);
}
#exportFrame::after{
  top:-31px;right:10px;background:#456f3c;border:1px solid rgba(255,255,255,.6);
  border-radius:999px;padding:4px 12px;box-shadow:0 4px 12px rgba(57,114,47,.16);
}

/* 顶部：收成一条完整的工坊栏，减弱漂浮卡片感 */
.topbar{
  top:10px;left:12px;right:12px;height:60px;padding:6px 8px;align-items:center;gap:7px;
  background:var(--card);border:1px solid rgba(185,194,171,.9);border-radius:18px;
  box-shadow:0 8px 26px rgba(61,74,48,.11);pointer-events:auto;
}
.topbar::after{content:"";position:absolute;left:18px;right:18px;bottom:-1px;height:2px;border-radius:99px;background:linear-gradient(90deg,transparent,var(--acc-soft),transparent);pointer-events:none;}
.brand{height:46px;padding:3px 12px 3px 3px;border:0;box-shadow:none;background:transparent;border-radius:13px;}
.brand i{width:38px;height:38px;background:linear-gradient(145deg,#6eb355,#4b8b3a);box-shadow:inset 0 0 0 2px rgba(255,255,255,.42),0 3px 8px rgba(63,118,48,.2);}
.brand b{font-size:13px;letter-spacing:.01em;}
.brand small{font-size:8px;color:#8b927f;}
.char-capsule{height:46px;min-width:188px;padding:3px 13px 3px 4px;border:1px solid #dfe5d4;box-shadow:none;background:#f7f9f1;border-radius:13px;}
.char-capsule:hover{background:#f1f7e9;border-color:#9fbe8d;transform:none;}
.char-ava,.char-ava img,.char-ava .avatar-fallback{width:38px;height:38px;}
.char-capsule .cc b{font-size:13.5px;}
.char-capsule .cc small{font-size:9px;}
.seg{height:42px;padding:4px;gap:2px;border:0;background:#eef2e7;box-shadow:inset 0 0 0 1px #dfe4d6;}
.seg button{height:34px;padding:0 14px;border-radius:99px;font-size:12px;}
.seg button.on{background:var(--card);color:var(--acc-deep);box-shadow:0 2px 7px rgba(59,78,48,.12),inset 0 0 0 1px #b9cfa9;}
.top-sp{min-width:8px;}
.mini-fab{width:40px;height:42px;gap:0;flex:0 0 40px;justify-content:center;}
.mini-fab i{width:38px;height:38px;border:1px solid #dce2d2;border-radius:12px;background:#f7f9f2;box-shadow:none;font-size:14px;}
.mini-fab span{
  display:block!important;position:absolute;top:48px;left:50%;transform:translate(-50%,-3px);
  padding:4px 9px;border-radius:8px;background:#42513a;color:#fff;border:0;box-shadow:0 4px 12px rgba(38,49,32,.18);
  opacity:0;visibility:hidden;transition:.14s;pointer-events:none;font-size:10px;
}
.mini-fab:hover span{opacity:1;visibility:visible;transform:translate(-50%,0);}
.mini-fab:hover i{transform:none;background:var(--acc-soft);border-color:#adc99d;}
.btn-export{height:44px;min-width:168px;padding:0 18px;border-radius:13px;box-shadow:0 5px 13px rgba(61,126,46,.22);}
.btn-export:hover{transform:none;box-shadow:0 6px 16px rgba(61,126,46,.27);}

/* 左轨：六个功能形成一个整体，不再是图标+凸出标签 */
.rail{
  left:12px;top:50%;bottom:auto;transform:translateY(-50%);width:72px;padding:7px;gap:3px;
  justify-content:center;background:var(--card);border:1px solid rgba(190,198,177,.95);
  border-radius:20px;box-shadow:var(--sh);pointer-events:auto;
}
.rail button{width:58px;height:55px;min-height:55px;flex:0 0 55px;gap:2px;justify-content:center;flex-direction:column;border-radius:14px;}
.rail button i{width:auto;height:25px;border:0;border-radius:0;background:transparent;box-shadow:none;font-size:15px;color:#75806a;}
.rail button span{padding:0;border:0;border-radius:0;background:transparent;font-size:10.5px;color:#68725f;line-height:16px;}
.rail button:hover{transform:none;background:#f2f6eb;}
.rail button:hover i{border:0;color:var(--acc-deep);}
.rail button.on{background:var(--acc-soft);box-shadow:inset 0 0 0 1px #b9d2a9;}
.rail button.on i{background:transparent;border:0;color:var(--acc-deep);}
.rail button.on span{background:transparent;border:0;color:var(--acc-deep);font-weight:800;}

/* 工具面板：固定在安全区内，标题与内容更像一体化编辑面板 */
.tool-panel{
  left:94px;top:80px;bottom:88px;transform:none;width:360px;max-height:none;padding:0;
  border-radius:19px;background:var(--card);box-shadow:0 14px 38px rgba(55,68,43,.15);
  animation:v8PanelIn .2s ease-out;
}
@keyframes v8PanelIn{from{transform:translateX(-10px);opacity:0;}to{transform:none;opacity:1;}}
.tp-head{min-height:52px;padding:10px 12px 9px 16px;border-bottom:1px solid #e5e9dd;font-size:14px;background:#f8faf4;}
.tp-head::before{content:"";width:4px;height:18px;border-radius:99px;background:var(--acc);box-shadow:0 5px 0 -1px var(--gold);}
.tp-head small{font-size:9.5px;}
.tp-head .x{width:30px;height:30px;background:#edf1e7;}
.tp-body{padding:11px 12px 14px;gap:10px;scrollbar-gutter:stable;}
.gcard{background:#f8f9f4;border:1px solid #e1e5da;border-radius:13px;padding:10px 11px;gap:8px;}
.gtitle{font-size:10px;letter-spacing:.06em;}
.gtitle::before{width:5px;height:5px;}
.gtitle::after{background:#e1e5da;}
.w-btn{min-height:36px;border-color:#dce2d4;border-radius:10px;background:#fffdf9;box-shadow:0 1px 0 rgba(78,91,62,.03);}
.w-btn:hover{background:#f3f8ec;transform:none;}
.mgrid{gap:6px;}
.mcard,.skcard,.part-item,.layer-item{border-color:#dfe4d8;border-radius:10px;box-shadow:none;}
.mcard:hover,.skcard:hover,.part-item:hover,.layer-item:hover{background:#fbfcf8;}
.mcard.on,.skcard.on,.layer-item.on{box-shadow:inset 3px 0 0 var(--acc);}
.frow>span{flex-basis:78px;}
.dropdown .drop-list{box-shadow:0 10px 24px rgba(55,68,43,.16);}
details.fold{background:#f8f9f4;border-color:#e0e5d8;}

/* 打开工具时给预览让出空间，避免角色被挡 */
@supports selector(body:has(*)){
  body:has(#toolHost .tool-panel) #exportFrame{left:58%;}
  body:has(#toolHost .tool-panel) .stage-char{left:58%;}
}

/* 播放台：统一成一条完整控制台，主次更清楚 */
.transport{
  bottom:12px;min-width:650px;min-height:66px;padding:8px 11px;gap:7px;
  background:var(--card);border:1px solid #cfd7c6;border-radius:20px;
  box-shadow:0 12px 30px rgba(55,68,43,.14);
}
.transport::before{content:"";position:absolute;left:24px;right:24px;top:-1px;height:3px;border-radius:99px;background:linear-gradient(90deg,transparent,#cfe2c0 20%,var(--acc) 50%,#cfe2c0 80%,transparent);}
.t-chip{min-height:44px;border:0;background:#f2f5ec;border-radius:11px;padding:3px 10px;}
.t-chip:hover{background:#edf4e6;}
.t-chip .k{font-size:8px;}
.t-chip b{font-size:12px;}
.t-ico{width:40px;height:40px;border:1px solid #d8dfd0;background:#fafbf7;box-shadow:none;}
.t-ico:hover{transform:none;background:#f0f5e9;}
.t-main{width:48px;height:48px;background:var(--acc);border-color:var(--acc);box-shadow:0 5px 12px rgba(62,128,47,.23);}
.pline{width:154px;height:8px;background:#dfe4d7;box-shadow:inset 0 1px 2px rgba(57,75,45,.08);}
.pline i{background:linear-gradient(90deg,#79b85f,var(--acc));}
.timeline{bottom:89px;width:min(720px,calc(100vw - 220px));border-radius:18px;box-shadow:0 14px 34px rgba(55,68,43,.16);}

/* 角色库：保持高信息密度，用连续页签代替散开的胶囊 */
.roster-scrim{background:rgba(52,61,44,.46);backdrop-filter:blur(3px);}
.roster-card{width:min(1160px,94vw);height:min(760px,90vh);padding:14px 16px 16px;border-radius:22px;background:var(--card);}
.roster-head{flex:0 0 auto;min-height:56px;padding:0 4px 8px;}\r
.roster-title .banner{background:transparent;color:var(--ink);padding:0;font-size:16px;justify-content:flex-start;}
.roster-title .banner::before{content:"";width:8px;height:22px;border-radius:99px;background:var(--acc);}
.roster-search{height:40px;background:#f8faf4;border-radius:12px;}
.roster-tabs{gap:2px;padding:5px 4px;background:#eef2e8;border-radius:13px;flex-wrap:nowrap;overflow-x:auto;}
.rtab{height:32px;flex:1;justify-content:center;border:0;background:transparent;border-radius:10px;padding:0 10px;}
.rtab:hover{background:#f8faf4;}
.rtab.on{background:var(--card);color:var(--acc-deep);box-shadow:0 2px 7px rgba(55,68,43,.1),inset 0 0 0 1px #bfd2b2;}
.rtab.on b{color:var(--acc);}
.recent-row{padding:8px 6px 2px;}
.roster-grid{min-height:0;grid-template-columns:repeat(auto-fill,minmax(132px,1fr));grid-auto-rows:max-content;gap:9px;padding-top:9px;}\r
.rcard{min-width:0;min-height:140px;height:auto;padding:12px 6px 9px;border-radius:14px;}\r
.rcard:hover{transform:translateY(-2px);}
.rcard.on{box-shadow:inset 0 0 0 2px var(--acc);}
.rcard img.rav,.rcard .avatar-fallback{width:60px;height:60px;}

/* 其余浮层统一实体纸张质感，层级明确 */
.paper,.popA,.popB{background:var(--card);border-color:#d5dccb;}
.drawer{background:#f7f8f2;border-left-color:#d3dacb;}
.scrim2{background:rgba(50,58,43,.36);}
.queue-box,.log-item,.mini-pop,.info-modal{background:var(--card);}
.dock-br{right:14px;bottom:90px;}
.toasts{bottom:91px;}
.toast{border-radius:12px;}
.info-fab{left:14px;bottom:12px;height:30px;background:#f8faf4;border-color:#dce2d4;opacity:.78;}
.info-fab:hover{opacity:1;}

/* 窄桌面收纳：保功能、不挤压 */
@media (max-width:1300px){
  .topbar{gap:5px;}
  .brand{padding-right:8px;}
  .char-capsule{min-width:158px;}
  .seg button{padding:0 10px;}
  .btn-export{min-width:142px;padding:0 13px;}
  .transport{min-width:610px;}
  .pline{width:130px;}
}
@media (max-width:1120px){
  .brand{display:none;}
  .char-capsule{min-width:135px;}
  .btn-export{min-width:112px;}
  .tool-panel{width:338px;}
  .transport{min-width:570px;}
  .t-chip b{max-width:105px;}
  .pline{width:105px;}
}
@media (max-width:940px){
  .topbar{height:56px;}
  .char-capsule{min-width:52px;width:52px;padding:3px;}
  .seg button{padding:0 8px;}
  .btn-export{min-width:54px;width:54px;padding:0;}
  .btn-export svg{margin:0;}
  .tool-panel{left:88px;width:320px;top:74px;}
  .rail{width:66px;}
  .rail button{width:52px;}
  .transport{min-width:0;width:calc(100vw - 180px);}
  .pline{flex:1;min-width:70px;}
  .t-chip{max-width:116px;}
}
@media (max-height:740px){
  .rail{padding:5px;gap:1px;}
  .rail button{height:48px;min-height:48px;flex-basis:48px;}
  .tool-panel{top:76px;bottom:82px;}
  .transport{min-height:60px;}
}
@media (prefers-reduced-motion:reduce){
  *,*::before,*::after{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important;scroll-behavior:auto!important;}
}
\r
\r
\r
/* v12：桌面真实页美术与功能完整候选。仅作用于独立示意稿。 */

body{
  font-family:"Microsoft YaHei UI","Microsoft YaHei","Noto Sans SC","PingFang SC",system-ui,sans-serif;
  letter-spacing:0;
}

/* 顶栏品牌：使用项目现有正式绿色字标，不再显示“教”字人形占位图。 */
.topbar{
  height:66px;
  padding:6px 9px;
  gap:8px;
  border-radius:19px;
}
.brand{
  position:relative;
  width:160px;
  height:52px;
  flex:0 0 160px;
  padding:4px 8px;
  overflow:hidden;
}
.brand i{
  width:144px;
  height:36px;
  flex:0 0 144px;
  border:0;
  border-radius:0;
  background:var(--v12-brand-logo) center/contain no-repeat!important;
  box-shadow:none;
  color:transparent;
  font-size:0;
  filter:drop-shadow(0 2px 2px rgba(64,105,44,.14));
}
.brand span{display:none;}
.brand::after{
  content:"SPINE STUDIO";
  position:absolute;
  left:54px;
  right:8px;
  bottom:2px;
  color:#72806a;
  font-size:7.5px;
  font-weight:800;
  letter-spacing:.18em;
  text-align:center;
}

.char-capsule{
  width:210px;
  min-width:210px;
  max-width:210px;
  height:52px;
  flex:0 0 210px;
  padding:4px 12px 4px 4px;
}
.char-capsule .cc{min-width:0;max-width:148px;overflow:hidden;}
.char-capsule .cc b,.char-capsule .cc small{
  display:block;
  width:100%;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
}
.char-capsule .cc b{display:flex;font-size:13.5px;}
.char-capsule .cc small{font-size:10px;line-height:13px;}
.char-ava,.char-ava img,.char-ava .avatar-fallback{width:42px;height:42px;}

.seg{height:44px;flex:0 0 auto;}
.seg button{min-width:46px;padding:0 11px;font-size:12px;}
.seg button.on{
  background:#e8f4df;
  color:#39742d;
  box-shadow:inset 0 0 0 1px #8fbd79;
}

.topbar .mini-fab.route-gallery,
.topbar .mini-fab.route-restaurant,
.topbar .mini-fab.utility-import,
.topbar .mini-fab.route-creator{
  position:relative;
  width:56px;
  height:52px;
  flex:0 0 56px;
  gap:1px;
  border-radius:12px;
  outline:none;
}
.topbar .mini-fab.route-gallery i,
.topbar .mini-fab.route-restaurant i,
.topbar .mini-fab.utility-import i,
.topbar .mini-fab.route-creator i{
  width:42px;
  height:34px;
  flex:0 0 34px;
  overflow:hidden;
  border:0;
  border-radius:10px;
  background:#f7f8f2!important;
  box-shadow:none;
  filter:none;
}
.topbar .mini-fab.route-gallery i,
.topbar .mini-fab.route-restaurant i{background-image:none!important;}
.topbar .mini-fab.route-gallery i img,
.topbar .mini-fab.route-restaurant i img{
  display:block;
  width:42px;
  height:34px;
  object-fit:contain;
  object-position:center;
}
.topbar .mini-fab.utility-import i{
  display:grid;
  place-items:center;
}
.topbar .mini-fab.route-creator i{
  display:grid;
  place-items:center;
}
.topbar .mini-fab.route-creator i svg{width:27px;height:27px;overflow:visible;}
.topbar .mini-fab.route-creator i .v12-pencil{fill:#f2a94d;stroke:#7b5631;stroke-width:1.45;}
.topbar .mini-fab.route-creator i .v12-star{fill:#83cf50;stroke:#4b8c31;stroke-width:1.25;}
.topbar .mini-fab.route-creator.is-open{
  background:#eef7e8;
  box-shadow:inset 0 0 0 1px #a7c993;
}
.topbar .mini-fab.route-creator.is-open::after{display:none;}
.topbar .mini-fab:focus-visible{
  outline:none;
  box-shadow:inset 0 0 0 1px rgba(91,159,69,.42);
}
.topbar .mini-fab.route-gallery span,
.topbar .mini-fab.route-restaurant span,
.topbar .mini-fab.utility-import span,
.topbar .mini-fab.route-creator span{
  font-size:11px;
  line-height:14px;
  font-weight:700;
  letter-spacing:0;
  color:#545e4c;
}

.btn-export{
  min-width:174px;
  height:46px;
  border:1px solid #83b86d;
  border-image:none;
  border-radius:14px;
  background:linear-gradient(180deg,#72bd54,#56a23e);
  color:#fff;
  text-shadow:0 1px rgba(40,78,29,.25);
  box-shadow:0 5px 13px rgba(61,126,46,.22),inset 0 1px rgba(255,255,255,.34);
}
.btn-export:hover{background:linear-gradient(180deg,#7ac45d,#5aa943);filter:none;}
.btn-export svg{stroke:#fff;}

/* 左轨：已核实官方图用于外观/导出；其余采用同风格清晰功能图标，不再错用角色插画。 */
.rail{
  width:90px;
  padding:8px 7px;
  gap:3px;
  border-radius:22px;
  background:rgba(255,254,249,.96);
  border:1px solid #d7decf;
  box-shadow:0 12px 30px rgba(56,70,44,.12);
}
.rail button{
  position:relative;
  width:76px;
  height:68px;
  min-height:68px;
  flex:0 0 68px;
  gap:1px;
  border-radius:15px;
  overflow:visible;
}
.rail button i{
  width:47px;
  height:46px;
  display:block;
  border:0;
  border-radius:13px;
  background-color:transparent!important;
  background-position:center!important;
  background-size:contain!important;
  background-repeat:no-repeat!important;
  box-shadow:none;
  color:transparent;
  filter:drop-shadow(0 2px 2px rgba(61,48,42,.15));
  transition:transform .18s ease,filter .18s ease;
}
.rail button[data-tool="motion"] i{background-image:var(--v12-tool-motion)!important;}
.rail button[data-tool="look"] i{background-image:var(--v12-tool-look)!important;}
.rail button[data-tool="parts"] i{background-image:var(--v12-tool-parts)!important;}
.rail button[data-tool="layers"] i{background-image:var(--v12-tool-layers)!important;}
.rail button[data-tool="canvas"] i{background-image:var(--v12-tool-canvas)!important;}
.rail button[data-tool="export"] i{background-image:var(--v12-tool-export)!important;}
.rail button[data-tool="look"] i{
  background-size:auto 50px!important;
  background-position:center -2px!important;
}
.rail button[data-tool="export"] i{background-size:58px 57px!important;}
.rail button i svg{display:none!important;}
.rail button span{
  font-size:11px;
  line-height:14px;
  font-weight:800;
  color:#5d6757;
}
.rail button:hover{background:#f3f7ee;}
.rail button:hover i{transform:none;filter:drop-shadow(0 3px 3px rgba(61,48,42,.2));}
.rail button.on{
  background:#eef6e9;
  box-shadow:none;
}
.rail button.on::before{
  content:"";
  position:absolute;
  left:-7px;
  top:16px;
  bottom:16px;
  width:4px;
  border-radius:0 5px 5px 0;
  background:#5b9f45;
}
.rail button.on i{
  transform:none;
  filter:drop-shadow(0 3px 4px rgba(54,93,40,.22)) saturate(1.06);
}
.rail button.on span{color:#39752e;}
.rail button:focus-visible{
  outline:none;
  box-shadow:inset 0 0 0 1px rgba(91,159,69,.48);
}

/* 工具面板：紧凑游戏纸张感；长功能内部滚动，短功能不留大块空白。 */
.tool-panel{
  left:110px;
  top:78px;
  width:368px;
  height:auto;
  max-height:calc(100vh - 175px);
  border:1px solid #d5dccb;
  border-image:none;
  border-radius:18px;
  background:linear-gradient(180deg,#fffefa,#fffdf8);
  box-shadow:0 16px 38px rgba(53,65,43,.15);
  overflow:hidden;
}
.tp-head{
  min-height:48px;
  padding:0 12px;
  gap:7px;
  border-bottom:1px solid #e3e7dc;
  background:linear-gradient(180deg,#f9fbf5,#f4f7ef);
  font-size:14px;
  font-weight:800;
}
.tp-head::before{
  content:"";
  width:4px;
  height:21px;
  flex:0 0 4px;
  border-radius:99px;
  background:#60a749;
  box-shadow:0 0 0 3px rgba(96,167,73,.09);
}
.tp-head small{font-size:10px;font-weight:600;color:#86907f;}
.tp-head .x{width:29px;height:29px;background:#eef2e9;}
.tp-body{padding:10px 11px 12px;gap:8px;scrollbar-gutter:stable;}
.tool-panel .roster-search{width:100%;max-width:none;margin:0;}
.tool-panel[data-tool="motion"] .tp-body,
.tool-panel[data-tool="look"] .tp-body,
.tool-panel[data-tool="export"] .tp-body{flex:0 1 auto;}
.tool-panel[data-tool="parts"],.tool-panel[data-tool="layers"]{
  height:min(680px,calc(100vh - 175px));
}
.tool-panel[data-tool="canvas"]{height:min(620px,calc(100vh - 175px));}
.tool-panel[data-tool="export"]{height:auto!important;}

.gcard,.v12-section{
  border:1px solid #e0e5da;
  border-radius:14px;
  background:#fbfcf8;
  box-shadow:none;
}
.gtitle{font-size:11px;letter-spacing:.02em;color:#697461;}
.w-btn,.preset,.lop,.pact{
  border-color:#d9e0d2;
  background:linear-gradient(180deg,#fff,#f6f8f2);
}
.w-btn:hover,.preset:hover,.lop:hover,.pact:hover{border-color:#a9c49a;background:#f0f6ea;}
.note{font-size:10px;line-height:1.55;color:#7c8576;}

.v12-toolbar,.v12-inline-actions,.v12-compact-grid,.v12-align-grid{
  display:grid;
  gap:6px;
}
.v12-toolbar{grid-template-columns:1fr 1fr;}
.v12-inline-actions{grid-template-columns:repeat(3,1fr);}
.v12-compact-grid{grid-template-columns:repeat(2,minmax(0,1fr));}
.v12-align-grid{grid-template-columns:repeat(3,1fr);}
.studio-v12-exact .tool-panel[data-tool="export"] .compact-actions{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:5px;}
.studio-v12-exact .tool-panel[data-tool="export"] .compact-actions .w-btn{min-width:0;min-height:32px;padding:0 7px;font-size:10.5px;}
.v12-chip-row{display:flex;gap:5px;flex-wrap:wrap;}
.v12-chip{
  min-height:29px;
  padding:0 10px;
  border:1px solid #d9e0d2;
  border-radius:9px;
  background:#fff;
  color:#66705f;
  font-size:10.5px;
  font-weight:700;
}
.v12-chip.on{border-color:#89b973;background:#eaf5e3;color:#39752d;box-shadow:inset 0 0 0 1px #fff;}
.v12-field{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:8px;
  min-width:0;
  font-size:10.5px;
  color:#606a59;
}
.v12-field input[type="number"],.v12-field input[type="text"]{
  width:82px;
  height:30px;
  padding:0 8px;
  border:1px solid #d7dfd0;
  border-radius:9px;
  background:#fff;
  outline:none;
}
.v12-field input:focus{border-color:#76ab61;box-shadow:0 0 0 2px rgba(91,159,69,.10);}
.v12-section{padding:8px 9px;}
.v12-section>summary{
  cursor:pointer;
  list-style:none;
  display:flex;
  align-items:center;
  min-height:25px;
  font-size:11px;
  font-weight:800;
  color:#596451;
}
.v12-section>summary::-webkit-details-marker{display:none;}
.v12-section>summary::after{content:"▾";margin-left:auto;color:#899281;transition:.15s;}
.v12-section:not([open])>summary::after{transform:rotate(-90deg);}
.v12-section .v12-section-body{display:flex;flex-direction:column;gap:7px;padding-top:8px;}
.v12-subtle{font-size:9.5px;color:#899184;line-height:1.45;}
.v12-switch{display:flex;align-items:center;gap:7px;font-size:10.5px;font-weight:700;color:#5f6958;}
.v12-switch input{accent-color:#5b9f45;}

.part-item,.layer-item{border-radius:12px;min-height:48px;}
.part-item.is-selected,.layer-item.on{
  border-color:#87b671;
  background:#edf6e7;
  box-shadow:inset 0 0 0 1px #fff;
}
.v12-part-list{display:flex;flex-direction:column;gap:6px;}
.v12-part-list .part-item{cursor:pointer;}
.v12-property-card{display:flex;flex-direction:column;gap:7px;}
.v12-layer-badge{
  width:34px;
  height:34px;
  flex:0 0 34px;
  border-radius:11px;
  overflow:hidden;
  display:grid;
  place-items:center;
  background:#eef3e8;
}
.v12-layer-badge img,.v12-layer-badge .avatar-fallback{width:34px;height:34px;}
.v12-layer-badge.is-image{color:#3c78a1;background:#dcecf7;font-weight:900;}
.v12-layer-ops{display:flex;gap:3px;}
.v12-layer-ops button{width:25px;height:25px;border-radius:7px;background:#f2f5ed;font-size:10px;font-weight:800;color:#66705f;}
.v12-layer-ops button.on{background:#e5f3de;color:#39752d;}
.v12-editing-banner{
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:7px 9px;
  border:1px solid #dfe5d8;
  border-radius:12px;
  background:#f8faf5;
}

/* 取景框更像编辑器边界，不使用不匹配的九宫格素材。 */
#exportFrame{
  border:1px dashed rgba(133,151,119,.58);
  border-radius:24px;
  box-shadow:inset 0 0 0 1px rgba(255,255,255,.52),0 0 0 1px rgba(103,125,88,.04);
  transition:opacity .16s ease,border-color .16s ease;
}
#exportFrame.v12-hidden{opacity:0;pointer-events:none;}
#exportFrame.v12-locked{border-style:solid;border-color:rgba(86,141,67,.7);}

/* 播放台固定宽度；动作名变化不再改变任何坐标。 */
.transport{
  width:680px;
  min-width:680px;
  max-width:680px;
  min-height:66px;
  gap:7px;
  padding:8px 10px;
  border-radius:20px;
}
.transport .t-ico:not(.t-main){
  width:40px;
  height:40px;
  flex:0 0 40px;
  border:1px solid #d4decf;
  border-radius:12px;
  background:linear-gradient(180deg,#fff,#f3f7ee);
  color:#53654b;
  box-shadow:0 2px 5px rgba(62,77,50,.08);
  filter:none;
}
.t-main{width:48px;height:48px;flex:0 0 48px;}
#chipMotion{width:96px;min-width:96px;max-width:96px;flex:0 0 96px;}
#chipLook{width:144px;min-width:144px;max-width:144px;flex:0 0 144px;}
#btnInteract{width:70px;min-width:70px;max-width:70px;flex:0 0 70px;}
.t-chip{overflow:hidden;}
.t-chip .k,.t-chip b{display:block;width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
.t-chip .k{font-size:9px;}
.t-chip b{max-width:none;font-size:12.5px;}
.pline.v12-seek{
  position:relative;
  width:130px;
  height:38px;
  flex:0 0 130px;
  margin:0 2px;
  display:flex;
  align-items:flex-start;
  padding-top:7px;
  background:none!important;
  box-shadow:none!important;
}
.pline.v12-seek::before,.pline.v12-seek::after{content:none!important;animation:none!important;}
.pline.v12-seek input[type="range"]{
  -webkit-appearance:none;
  appearance:none;
  width:100%;
  height:6px;
  margin:6px 0 0;
  border-radius:99px;
  background:linear-gradient(90deg,#62a94a 0 var(--seek,0%),#d9e1d3 var(--seek,0%) 100%);
  outline:none;
  cursor:pointer;
}
.pline.v12-seek input[type="range"]::-webkit-slider-thumb{
  -webkit-appearance:none;
  appearance:none;
  width:17px;
  height:17px;
  border:3px solid #fff;
  border-radius:50%;
  background:#5da644;
  box-shadow:0 1px 4px rgba(54,91,43,.28),0 0 0 1px #77ae63;
}
.pline.v12-seek small{
  position:absolute;
  left:0;
  right:0;
  bottom:0;
  text-align:center;
  font-size:8.5px;
  color:#818a79;
  white-space:nowrap;
}

/* 轨道：参数完整但默认保持一屏可读，位置始终以中心锚点展开。 */
.timeline{
  bottom:89px;
  width:min(780px,calc(100vw - 220px));
  min-width:650px;
  min-height:250px;
  max-height:62vh;
  padding:11px 12px 12px;
  gap:8px;
  border:1px solid #d5dccb;
  border-radius:18px;
  background:#fffdf8!important;
  box-shadow:0 16px 38px rgba(53,65,43,.17);
  animation:v12TimelineIn .18s ease-out;
  resize:both;
  overflow:auto;
}
@keyframes v12TimelineIn{from{transform:translate(-50%,7px);opacity:0;}to{transform:translate(-50%,0);opacity:1;}}
.timeline.is-dragged{transform:none;animation:none;}
.tl-head{min-height:31px;cursor:move;}
.v12-timeline-head-actions{margin-left:auto;display:flex;gap:4px;}
.v12-timeline-head-actions button{width:28px;height:28px;border-radius:9px;background:#eef2e9;font-size:11px;font-weight:800;color:#65705e;}
.v12-timeline-toolbar{display:flex;gap:6px;align-items:center;flex-wrap:wrap;}
.v12-timeline-toolbar .w-btn{min-height:31px;padding:0 10px;}
.v12-clip-list{display:flex;flex-direction:column;gap:6px;}
.v12-clip-row{
  display:grid;
  grid-template-columns:76px minmax(125px,1fr) 72px 72px 64px 52px 86px;
  gap:5px;
  align-items:end;
  padding:7px;
  border:1px solid #e0e5da;
  border-radius:12px;
  background:#fafbf7;
}
.v12-clip-row label{display:flex;flex-direction:column;gap:3px;font-size:8.5px;color:#858d7d;}
.v12-clip-row input,.v12-clip-row select{
  min-width:0;
  width:100%;
  height:28px;
  border:1px solid #d6ded0;
  border-radius:8px;
  background:#fff;
  padding:0 6px;
  font:600 10px inherit;
  color:#566050;
}
.v12-track-name{height:28px;border-radius:8px;background:#e8f4e1;color:#39752d;font-size:10px;font-weight:800;}
.v12-clip-ops{display:flex;gap:3px;}
.v12-clip-ops button{width:25px;height:28px;border-radius:8px;background:#eef2e9;color:#5d6856;font-size:10px;font-weight:800;}
.v12-transition-row{display:flex;align-items:center;gap:7px;padding:6px 8px;border-radius:11px;background:#f1f5ec;font-size:10px;color:#64705c;}
.v12-transition-row input{width:64px;height:28px;border:1px solid #d5ddcf;border-radius:8px;padding:0 6px;}

/* 角色选择：连续分类条，选中项不再凸起。 */
.roster-tabs{flex:0 0 auto;gap:2px;padding:5px 4px;background:#eef2e8;border-radius:13px;flex-wrap:nowrap;overflow-x:auto;}\r
.rtab{min-height:34px;height:auto;flex:0 0 auto;white-space:nowrap;justify-content:center;border:0;background:transparent;border-radius:8px;padding:6px 12px;box-shadow:none;}\r
.rtab:hover{background:#f7f9f3;}
.rtab.on{
  background:#e5f2dd;
  color:#39752d;
  box-shadow:inset 0 0 0 1px #a8c997;
}
.rtab.on b{color:#579541;}

.rcard.on{
  border-color:#85b66f;
  background:#f1f7ed;
  box-shadow:none;
}
.rcard.on::after{content:none;}
.rcard .sel-star{
  width:24px;
  height:24px;
  top:7px;
  right:7px;
  display:flex;
  align-items:center;
  justify-content:center;
  border:2px solid #fff;
  border-radius:50%;
  background:#59a43f;
  box-shadow:0 2px 5px rgba(48,88,35,.22);
  color:#fff;
  font-size:13px;
  font-weight:900;
}

/* Creator 和设置补充项。 */
.mini-pop{border:1px solid #d6dece;border-radius:17px;background:#fffdf8;box-shadow:0 15px 36px rgba(53,65,43,.16);}
.v12-creator-overlay{display:flex;flex-direction:column;gap:7px;margin-top:8px;padding-top:8px;border-top:1px solid #e2e6dc;}
.v12-creator-overlay .v12-field input[type="range"]{width:125px;accent-color:#5b9f45;}
.v12-creator-overlay input[type="range"]{
  -webkit-appearance:none;
  appearance:none;
  height:6px;
  border-radius:99px;
  background:linear-gradient(90deg,#63aa4b 0 65%,#d9e1d3 65% 100%);
  outline:none;
}
.v12-creator-overlay input[type="range"]::-webkit-slider-thumb{
  -webkit-appearance:none;
  appearance:none;
  width:16px;
  height:16px;
  border:3px solid #fff;
  border-radius:50%;
  background:#5da644;
  box-shadow:0 1px 4px rgba(54,91,43,.25),0 0 0 1px #77ae63;
}
.v12-theme-grid{display:grid;grid-template-columns:1fr 1fr;gap:6px;}
.v12-theme-choice{min-height:46px;padding:7px;border:1px solid #dbe2d4;border-radius:11px;background:#fff;text-align:left;}
.v12-theme-choice b,.v12-theme-choice small{display:block;}
.v12-theme-choice b{font-size:11px;}
.v12-theme-choice small{margin-top:2px;font-size:9px;color:#858e7f;}
.v12-theme-choice.on{border-color:#83b46d;background:#eaf5e3;color:#39752d;}

@media (max-width:1120px){
  .brand{display:none;}
  .char-capsule{width:190px;min-width:190px;max-width:190px;flex-basis:190px;}
  .char-capsule .cc{max-width:128px;}
  .topbar .mini-fab.route-gallery,
  .topbar .mini-fab.route-restaurant,
  .topbar .mini-fab.utility-import,
  .topbar .mini-fab.route-creator{width:52px;flex-basis:52px;}
  .btn-export{min-width:146px;}
  .rail{width:84px;}
  .rail button{width:70px;}
  .tool-panel{left:102px;width:346px;}
  .transport{width:640px;min-width:640px;max-width:640px;}
  #chipLook{width:124px;min-width:124px;max-width:124px;flex-basis:124px;}
  .pline.v12-seek{width:112px;flex-basis:112px;}
  .v12-clip-row{grid-template-columns:68px minmax(110px,1fr) 64px 64px 58px 48px 82px;}
}

@media (max-height:740px){
  .rail{width:80px;padding:6px;gap:1px;}
  .rail button{width:68px;height:57px;min-height:57px;flex-basis:57px;}
  .rail button i{width:39px;height:38px;}
  .rail button span{font-size:10px;line-height:12px;}
  .tool-panel{left:98px;top:72px;max-height:calc(100vh - 158px);}
  .tool-panel[data-tool="parts"],.tool-panel[data-tool="layers"],.tool-panel[data-tool="canvas"]{height:calc(100vh - 158px);}
  .timeline{min-height:225px;max-height:58vh;}
}

@media (prefers-reduced-motion:reduce){
  .rail button i,.timeline{animation:none!important;transition:none!important;}
}

/* v12 visual unification: one warm game-editor language, no mixed sticker set. */
:root{
  --v12-ink:#3f4939;
  --v12-muted:#7c8575;
  --v12-line:#d8decf;
  --v12-line-soft:#e7eadf;
  --v12-paper:#fffdf8;
  --v12-paper-soft:#f6f7f0;
  --v12-leaf:#5ea447;
  --v12-leaf-deep:#3f7f31;
  --v12-leaf-soft:#eaf4e4;
  --v12-gold:#e7bd63;
}

body{
  color:var(--v12-ink);
  -webkit-font-smoothing:antialiased;
  text-rendering:optimizeLegibility;
}

#stage{
  background-color:#edf2e7;
  background-image:
    radial-gradient(ellipse at 50% 42%,rgba(255,255,250,.92) 0,rgba(255,255,250,.42) 37%,rgba(255,255,255,0) 68%),
    radial-gradient(circle at 9% 17%,rgba(222,238,207,.72),transparent 31%),
    radial-gradient(circle at 88% 81%,rgba(236,224,190,.24),transparent 26%);
  background-size:auto;
}
#stage::before{
  inset:78px 26px 92px;
  border-radius:34px;
  background:radial-gradient(ellipse at center,rgba(255,255,252,.38),rgba(255,255,255,0) 66%);
}
#stage::after{
  content:"";
  position:absolute;
  inset:0;
  background:var(--v12-stage-pattern) 0 0/96px 96px repeat;
  opacity:.055!important;
  filter:saturate(.45);
  pointer-events:none;
}

#exportFrame{
  border:1px solid rgba(125,145,111,.54);
  border-radius:23px;
  box-shadow:
    inset 0 0 0 1px rgba(255,255,255,.8),
    0 0 0 1px rgba(104,125,90,.045),
    0 12px 44px rgba(68,83,55,.035);
}
#exportFrame::before{
  content:"";
  position:absolute;
  inset:-2px;
  pointer-events:none;
  border-radius:25px;
  background:
    linear-gradient(var(--v12-leaf),var(--v12-leaf)) 0 0/18px 2px no-repeat,
    linear-gradient(var(--v12-leaf),var(--v12-leaf)) 0 0/2px 18px no-repeat,
    linear-gradient(var(--v12-leaf),var(--v12-leaf)) 100% 0/18px 2px no-repeat,
    linear-gradient(var(--v12-leaf),var(--v12-leaf)) 100% 0/2px 18px no-repeat,
    linear-gradient(var(--v12-leaf),var(--v12-leaf)) 0 100%/18px 2px no-repeat,
    linear-gradient(var(--v12-leaf),var(--v12-leaf)) 0 100%/2px 18px no-repeat,
    linear-gradient(var(--v12-leaf),var(--v12-leaf)) 100% 100%/18px 2px no-repeat,
    linear-gradient(var(--v12-leaf),var(--v12-leaf)) 100% 100%/2px 18px no-repeat;
  opacity:.42;
}
#exportFrame::after{
  left:50%;
  right:auto;
  top:-31px;
  transform:translateX(-50%);
  padding:5px 12px;
  border:1px solid rgba(255,255,255,.84);
  border-radius:999px;
  background:#4e7d42;
  box-shadow:0 4px 12px rgba(57,93,45,.14);
  color:#fff;
  font-size:10px;
  font-weight:800;
  letter-spacing:.01em;
}

.topbar{
  top:10px;
  left:12px;
  right:12px;
  height:68px;
  padding:7px 9px;
  align-items:center;
  gap:8px;
  border:1px solid #d5dccb;
  border-radius:18px;
  background:var(--v12-paper);
  box-shadow:0 10px 28px rgba(57,70,47,.12),inset 0 1px rgba(255,255,255,.9);
}
.topbar::after{
  left:22px;
  right:22px;
  bottom:-1px;
  height:1px;
  background:linear-gradient(90deg,transparent,rgba(93,164,71,.36),transparent);
}
.brand{
  width:152px;
  height:52px;
  flex:0 0 152px;
  padding:5px 8px;
  background:transparent;
}
.brand i{
  width:136px;
  height:35px;
  flex-basis:136px;
  filter:drop-shadow(0 2px 2px rgba(64,105,44,.12));
}
.brand::after{display:none;}

.char-capsule{
  width:206px;
  min-width:206px;
  max-width:206px;
  height:52px;
  flex-basis:206px;
  padding:4px 12px 4px 4px;
  border:1px solid #dce2d4;
  border-radius:14px;
  background:#faf9f3;
  box-shadow:inset 0 1px rgba(255,255,255,.9);
}
.char-capsule:hover{
  border-color:#a8c397;
  background:#f4f8ef;
  box-shadow:inset 0 1px rgba(255,255,255,.95);
}
.char-ava{
  border-color:#a8c996;
  background:#eef5e8;
  box-shadow:0 2px 6px rgba(65,92,52,.11),inset 0 0 0 2px #fff;
}
.char-capsule .cc b{font-size:13px;color:#354230;}
.char-capsule .cc small{font-size:9.5px;color:#7d8577;}

.seg{
  height:44px;
  padding:4px;
  gap:1px;
  border:1px solid #e0e4d8;
  border-radius:14px;
  background:#f0f2ea;
  box-shadow:none;
}
.seg button{
  min-width:45px;
  height:34px;
  padding:0 10px;
  border-radius:10px;
  color:#606a5a;
  font-size:11.5px;
}
.seg button.on{
  border:0;
  background:#fffdf8;
  color:var(--v12-leaf-deep);
  box-shadow:0 2px 7px rgba(57,78,46,.10),inset 0 0 0 1px #a9c998;
}

.v12-route-cluster{
  height:52px;
  flex:0 0 auto;
  display:flex;
  align-items:center;
  gap:2px;
  padding:3px;
  border:1px solid #e1e5da;
  border-radius:15px;
  background:#f5f6ef;
  box-shadow:inset 0 1px rgba(255,255,255,.84);
}
.topbar .v12-route-cluster .mini-fab{
  position:relative;
  width:52px;
  height:44px;
  flex:0 0 52px;
  gap:0;
  justify-content:flex-start;
  padding-top:1px;
  border-radius:11px;
  background:transparent;
  transition:background .15s ease,box-shadow .15s ease;
}
.topbar .v12-route-cluster .mini-fab:hover{
  background:#fffdf8;
  box-shadow:0 2px 7px rgba(58,72,47,.08);
}
.topbar .v12-route-cluster .mini-fab i{
  width:34px;
  height:29px;
  flex:0 0 29px;
  border:0;
  border-radius:0;
  overflow:visible;
  background:transparent!important;
  box-shadow:none;
}
.topbar .v12-route-cluster .mini-fab i img{
  width:34px;
  height:29px;
  object-fit:contain;
  filter:drop-shadow(0 1px 1px rgba(55,64,44,.13));
}
.topbar .v12-route-cluster .route-restaurant i img{width:35px;height:30px;}
.topbar .v12-route-cluster .route-creator i img{width:33px;height:30px;}
.topbar .v12-route-cluster .mini-fab span{
  position:static;
  display:block!important;
  transform:none!important;
  padding:0;
  border:0;
  background:transparent;
  box-shadow:none;
  color:#5d6657;
  font-size:9.5px;
  line-height:12px;
  font-weight:700;
  opacity:1;
  visibility:visible;
}
.topbar .v12-route-cluster .mini-fab.is-open{
  background:#fffdf8;
  box-shadow:inset 0 0 0 1px #afd09e,0 2px 7px rgba(58,72,47,.08);
}
.topbar .v12-route-cluster .mini-fab.is-open::after{
  content:"";
  display:block!important;
  position:absolute;
  left:17px;
  right:17px;
  bottom:1px;
  height:2px;
  border-radius:99px;
  background:var(--v12-leaf);
}
.v12-import-icon{width:28px;height:28px;overflow:visible;}
.v12-import-folder{fill:#f1c46e;stroke:#8d6a32;stroke-width:1.15;}
.v12-import-arrow{fill:none;stroke:#4c8e3b;stroke-width:2.4;stroke-linecap:round;stroke-linejoin:round;}

.btn-export{
  min-width:168px;
  height:46px;
  margin-left:2px;
  padding:0 18px;
  border:1px solid #7fb36b;
  border-radius:14px;
  background:linear-gradient(180deg,#6db651,#57a141);
  box-shadow:0 5px 13px rgba(61,126,46,.20),inset 0 1px rgba(255,255,255,.36);
  font-size:13px;
  font-weight:800;
}
.btn-export:hover{
  background:linear-gradient(180deg,#75bd59,#5aa846);
  box-shadow:0 6px 15px rgba(61,126,46,.24),inset 0 1px rgba(255,255,255,.42);
}

.topbar .mini-fab.utility-settings{
  width:48px;
  height:48px;
  flex:0 0 48px;
  margin-left:0;
  border-radius:14px;
  overflow:hidden;
}
.topbar .mini-fab.utility-settings i{
  width:44px;
  height:44px;
  display:grid;
  place-items:center;
  border:1px solid #dce2d4;
  border-radius:13px;
  background:#f4f6ef;
  box-shadow:none;
}
.topbar .mini-fab.utility-settings:hover i{
  border-color:#abc79b;
  background:#edf5e7;
}
.topbar .mini-fab.utility-settings .ripple{display:none!important;}
.v12-settings-icon{width:25px;height:25px;overflow:visible;}
.v12-settings-icon path{fill:#66725f;}
.v12-settings-icon circle{fill:#f9fbf5;stroke:#6aa154;stroke-width:1.7;}

.rail{
  left:13px;
  width:88px;
  padding:8px 7px;
  gap:2px;
  border:1px solid #d5dccb;
  border-radius:21px;
  background:var(--v12-paper);
  box-shadow:0 13px 31px rgba(56,70,44,.12),inset 0 1px rgba(255,255,255,.9);
}
.rail button{
  width:72px;
  height:66px;
  min-height:66px;
  flex:0 0 66px;
  gap:0;
  border-radius:14px;
  overflow:visible;
  transition:background .15s ease,color .15s ease;
}
.rail button i{
  width:54px;
  height:49px;
  flex:0 0 49px;
  border:0;
  border-radius:0;
  background-size:54px 49px!important;
  background-position:center!important;
  filter:drop-shadow(0 2px 2px rgba(57,47,42,.15));
  transform:none!important;
  transition:filter .15s ease!important;
}
.rail button[data-tool="look"] i,
.rail button[data-tool="export"] i{
  background-size:54px 49px!important;
  background-position:center!important;
}
.rail button span{
  font-size:10.5px;
  line-height:13px;
  font-weight:800;
  color:#626b5b;
}
.rail button:hover{background:#f4f7ef;}
.rail button:hover i{filter:drop-shadow(0 3px 3px rgba(57,47,42,.19)) saturate(1.04);}
.rail button.on{
  background:linear-gradient(90deg,#edf6e8,#f8faf5);
  box-shadow:inset 0 0 0 1px #c6dbb8;
}
.rail button.on::before{
  left:-8px;
  top:14px;
  bottom:14px;
  width:3px;
  border-radius:0 4px 4px 0;
  background:var(--v12-leaf);
}
.rail button.on span{color:var(--v12-leaf-deep);}

.tool-panel{
  left:112px;
  top:82px;
  width:368px;
  border-color:#d4dccb;
  border-radius:20px;
  background:var(--v12-paper);
  box-shadow:0 18px 42px rgba(51,64,41,.16),inset 0 1px rgba(255,255,255,.9);
}
.tp-head{
  min-height:50px;
  padding:0 13px;
  border-bottom:1px solid var(--v12-line-soft);
  background:linear-gradient(180deg,#fafbf6,#f4f6ef);
  color:#475140;
  font-size:13.5px;
}
.tp-head::before{
  width:5px;
  height:23px;
  border-radius:99px;
  background:linear-gradient(180deg,var(--v12-leaf) 0 68%,var(--v12-gold) 68% 100%);
  box-shadow:none;
}
.tp-head .x{border:1px solid #dde3d7;background:#f1f3ed;}
.tp-body{padding:11px 12px 13px;gap:8px;}
.gcard,.v12-section{
  border-color:#e0e5da;
  background:#fbfbf7;
}
.w-btn,.preset,.lop,.pact{
  border-color:#d8dfd1;
  background:linear-gradient(180deg,#fffefa,#f5f7f1);
  color:#566050;
}

.transport{
  width:680px;
  min-width:680px;
  max-width:680px;
  min-height:66px;
  padding:8px 10px;
  gap:7px;
  border:1px solid #d3dac9;
  border-radius:19px;
  background:var(--v12-paper);
  box-shadow:0 12px 28px rgba(53,66,43,.14),inset 0 1px rgba(255,255,255,.92);
}
.transport .t-chip{
  border:1px solid #e0e4d8;
  border-radius:12px;
  background:#f5f6ef;
  box-shadow:none;
}
.transport .t-chip:hover{border-color:#b9cfad;background:#f0f6eb;}
.transport .t-ico:not(.t-main){
  border-color:#d8dfd2;
  background:linear-gradient(180deg,#fffefa,#f2f5ee);
  box-shadow:0 2px 5px rgba(62,77,50,.07);
}
.transport .t-ico:not(.t-main):hover{border-color:#abc59c;background:#eef5e9;}
.transport .t-main{
  border:3px solid #fff;
  background:linear-gradient(180deg,#69b14f,#559d40);
  box-shadow:0 0 0 1px #83b971,0 4px 11px rgba(57,111,43,.24);
}
#btnTimeline.on,#btnTimeline:focus{
  border-color:#8fb97c;
  background:#eaf4e4;
  box-shadow:inset 0 0 0 1px #fff;
}
.pline.v12-seek small{font-size:9.5px;color:#747e6d;}

.timeline{
  bottom:89px;
  width:min(820px,calc(100vw - 226px));
  min-width:690px;
  min-height:238px;
  max-height:62vh;
  padding:0;
  gap:0;
  border:1px solid #ccd5c5;
  border-radius:20px;
  background:var(--v12-paper)!important;
  box-shadow:0 21px 52px rgba(49,61,40,.20),0 3px 9px rgba(49,61,40,.07);
  overflow:auto;
}
.tl-head{
  min-height:48px;
  padding:8px 11px 8px 15px;
  display:flex;
  align-items:center;
  gap:7px;
  border-bottom:1px solid #e1e6da;
  background:linear-gradient(180deg,#fafbf6,#f3f6ef);
  cursor:move;
}
.tl-head::before{
  content:"";
  width:5px;
  height:25px;
  flex:0 0 5px;
  border-radius:99px;
  background:linear-gradient(180deg,var(--v12-leaf) 0 68%,var(--v12-gold) 68% 100%);
}
.tl-head b{font-size:13px;color:#46513f;}
.tl-head small{font-size:9.5px;color:#848d7e;}
.v12-timeline-head-actions{gap:5px;}
.v12-timeline-head-actions button{
  width:31px;
  height:31px;
  border:1px solid #dde3d7;
  border-radius:10px;
  background:#f0f3ec;
  color:#64705d;
  font-size:11px;
}
.v12-timeline-head-actions button:hover{border-color:#aac49c;background:#eaf3e4;}
.v12-timeline-toolbar{
  display:flex;
  flex-wrap:nowrap;
  align-items:center;
  gap:5px;
  padding:8px 11px;
  border-bottom:1px solid #e7eadf;
  background:#fbfbf7;
}
.v12-timeline-toolbar .w-btn{
  min-height:31px;
  padding:0 10px;
  border-radius:9px;
  font-size:10.5px;
  white-space:nowrap;
}
#v12TlAddCurrent{border-color:#aacb99;background:#edf6e8;color:#3f7e32;}
#v12TlPreview{
  margin-left:auto;
  border-color:#75aa61;
  background:linear-gradient(180deg,#6caf51,#579d43);
  color:#fff;
  box-shadow:0 2px 6px rgba(61,116,46,.16);
}
#v12TlPreview.tl-preview-on{background:#e9b959;border-color:#d3a84e;color:#fff;}
.v12-clip-list{
  gap:7px;
  padding:9px 11px 4px;
  background:var(--v12-paper);
}
.v12-clip-row{
  grid-template-columns:84px minmax(150px,1fr) 70px 70px 66px 50px 80px;
  gap:6px;
  align-items:end;
  padding:8px;
  border:1px solid #dfe5da;
  border-radius:13px;
  background:#fafbf7;
  box-shadow:inset 0 1px rgba(255,255,255,.92);
}
.v12-clip-row:nth-child(2){background:#fbfaf5;}
.v12-clip-row label{gap:3px;font-size:9px;color:#7c8576;}
.v12-clip-row input,.v12-clip-row select{
  height:30px;
  border-color:#d6ded0;
  border-radius:9px;
  background:#fffefa;
  font-size:10.5px;
}
.v12-clip-row input:focus,.v12-clip-row select:focus{
  border-color:#80ae6d;
  box-shadow:0 0 0 2px rgba(91,159,69,.10);
  outline:none;
}
.v12-track-name{
  height:30px;
  padding:0 8px 0 20px;
  position:relative;
  border:1px solid #bcd4ae;
  border-radius:9px;
  background:#eaf4e4;
  color:#3e7a32;
  font-size:10.5px;
  font-weight:800;
}
.v12-track-name::before{
  content:"";
  position:absolute;
  left:8px;
  top:50%;
  width:7px;
  height:7px;
  transform:translateY(-50%);
  border:2px solid #fff;
  border-radius:50%;
  background:var(--v12-leaf);
  box-shadow:0 0 0 1px #7fad6d;
}
.v12-track-name.off{border-color:#d6dcd0;background:#f0f2ed;color:#92998d;}
.v12-track-name.off::before{background:#aeb6a8;box-shadow:0 0 0 1px #929b8d;}
.v12-clip-ops{gap:3px;}
.v12-clip-ops button{
  width:25px;
  height:30px;
  border:1px solid #dce2d6;
  border-radius:8px;
  background:#f0f3ec;
}
.v12-transition-row{
  margin:5px 11px 10px;
  padding:7px 9px;
  border:1px solid #e1e6db;
  border-radius:11px;
  background:#f3f5ef;
  font-size:10px;
}
.v12-transition-row .v12-subtle{margin-left:auto;}

.roster-card,.drawer,.mini-pop{
  border-color:#d3dbc9;
  background:var(--v12-paper);
  box-shadow:0 20px 52px rgba(48,61,39,.20);
}
.roster-tabs{border:1px solid #e1e5da;background:#f3f5ee;}
\r
/* Resource categories: a strong primary selection, with lighter nested filters. */\r
.studio-v12-exact .v12-roster .roster-tabs-primary{\r
  gap:5px;padding:6px;margin-bottom:8px;\r
  border-color:#d5dfcb;background:#edf2e7;border-radius:12px;\r
  scrollbar-width:thin;\r
}\r
.studio-v12-exact .v12-roster .roster-tabs-primary .rtab{\r
  min-height:38px;padding:7px 15px;font-size:14px;font-weight:800;\r
  color:#526148;border-radius:8px;line-height:1.35;\r
}\r
.studio-v12-exact .v12-roster .roster-tabs-primary .rtab:hover{background:#e2ead9;color:#35542b;}\r
.studio-v12-exact .v12-roster .roster-tabs-primary .rtab.on{\r
  background:#4f7838;color:#fff;border-color:transparent;\r
  box-shadow:inset 0 1px 0 #ffffff26,0 2px 4px #354b2620;\r
}\r
.studio-v12-exact .v12-roster :is(.roster-tabs-secondary,.roster-tabs-tertiary){\r
  flex-wrap:wrap;gap:7px;padding:10px 12px;\r
  max-height:136px;overflow:auto;align-content:flex-start;\r
  border:1px solid #dce4d2;border-left:3px solid #9bb884;\r
  background:#f7f8f2;border-radius:0 11px 11px 0;scrollbar-width:thin;\r
}\r
.studio-v12-exact .v12-roster :is(.roster-tabs-secondary,.roster-tabs-tertiary) .rtab{\r
  min-height:34px;padding:6px 12px;border:1px solid #dde4d5;\r
  background:#fffefa;color:#5c6852;font-size:13px;font-weight:700;\r
  border-radius:7px;line-height:1.4;\r
}\r
.studio-v12-exact .v12-roster :is(.roster-tabs-secondary,.roster-tabs-tertiary) .rtab:hover{\r
  border-color:#a3bb8d;background:#f0f5e9;color:#36582a;\r
}\r
.studio-v12-exact .v12-roster :is(.roster-tabs-secondary,.roster-tabs-tertiary) .rtab.on{\r
  border-color:#82a66a;background:#e5f0dc;color:#345b25;\r
  box-shadow:inset 0 0 0 1px #9fbe8733;\r
}\r
.studio-v12-exact .v12-roster .roster-tabs-tertiary{\r
  margin-top:7px;margin-left:12px;max-height:102px;\r
  border-left-color:#c3cfb7;background:#fcfcf8;\r
}\r
.studio-v12-exact .v12-roster .roster-tabs .rtab:focus-visible{\r
  outline:2px solid #557e3d;outline-offset:2px;\r
}\r
.rtab.on{
  background:#fffdf8;
  color:var(--v12-leaf-deep);
  box-shadow:inset 0 0 0 1px #abc99c,0 2px 5px rgba(55,71,45,.07);
}
.rcard.on{border-color:#92b87e;background:#f2f7ee;box-shadow:inset 0 0 0 1px #fff;}

.info-fab{
  border-color:#d7ded0;
  background:rgba(255,253,248,.94);
  color:#7a8373;
  box-shadow:0 4px 12px rgba(55,68,44,.07);
}

@media (max-width:1160px){
  .topbar{gap:6px;}
  .brand{width:140px;flex-basis:140px;}
  .brand i{width:124px;flex-basis:124px;}
  .char-capsule{width:190px;min-width:190px;max-width:190px;flex-basis:190px;}
  .char-capsule .cc{max-width:128px;}
  .topbar .v12-route-cluster .mini-fab{width:49px;flex-basis:49px;}
  .btn-export{min-width:156px;padding:0 14px;}
  .topbar .mini-fab.utility-settings{width:44px;flex-basis:44px;}
  .topbar .mini-fab.utility-settings i{width:42px;height:42px;}
}

@media (max-width:1080px){
  .brand{display:none;}
  .topbar .v12-route-cluster .mini-fab{width:48px;flex-basis:48px;}
  .btn-export{min-width:148px;}
  .tool-panel{left:104px;width:350px;}
  .rail{width:82px;}
  .rail button{width:68px;}
  .timeline{min-width:650px;width:calc(100vw - 204px);}
}

@media (max-height:740px){
  .rail{width:82px;padding:6px;gap:1px;}
  .rail button{width:68px;height:57px;min-height:57px;flex-basis:57px;}
  .rail button i{width:43px;height:39px;flex-basis:39px;background-size:43px 39px!important;}
  .rail button[data-tool="look"] i,.rail button[data-tool="export"] i{background-size:43px 39px!important;}
  .tool-panel{left:104px;top:80px;max-height:calc(100vh - 164px);}
  .tool-panel[data-tool="parts"],.tool-panel[data-tool="layers"],.tool-panel[data-tool="canvas"]{height:calc(100vh - 164px);}
  .timeline{min-height:226px;max-height:58vh;}
}

/* v12 direct polish: keep the current layout and behaviour, unify its finish. */
:root{
  --v12-paper:#fffefa;
  --v12-paper-soft:#f6f8f1;
  --v12-line:#d9e1d3;
  --v12-line-soft:#e8ece3;
  --v12-leaf:#5da746;
  --v12-leaf-deep:#397b2d;
  --v12-leaf-wash:#edf6e8;
  --v12-gold:#e2b75c;
  --v12-ink:#394535;
  --v12-muted:#788271;
}

.topbar{
  top:10px;
  left:14px;
  right:14px;
  height:64px;
  padding:6px 8px;
  gap:7px;
  border:1px solid #d8dfd1;
  border-radius:17px;
  background:rgba(255,254,250,.98);
  box-shadow:0 7px 20px rgba(54,70,44,.10),inset 0 1px rgba(255,255,255,.94);
}
.topbar::after{left:28px;right:28px;height:1px;opacity:.72;}
.brand{width:150px;height:50px;flex-basis:150px;padding:5px 8px;}
.brand i{width:134px;height:34px;flex-basis:134px;filter:none;}
.char-capsule{
  width:204px;min-width:204px;max-width:204px;height:50px;flex-basis:204px;
  border-color:#dce3d6;border-radius:14px;background:#fbfaf5;
}
.char-capsule:hover{border-color:#9fbe90;background:#f5f8f1;}
.char-ava,.char-ava img,.char-ava .avatar-fallback{width:40px;height:40px;}
.seg{height:42px;padding:3px;border-color:#e0e5db;border-radius:13px;background:#f1f3ec;}
.seg button{height:34px;min-width:44px;padding:0 10px;border-radius:10px;}
.seg button.on{background:#fffefa;box-shadow:inset 0 0 0 1px #a7c698;}

.v12-route-cluster{
  height:50px;
  padding:0;
  gap:3px;
  border:0;
  border-radius:0;
  background:transparent;
  box-shadow:none;
}
.topbar .v12-route-cluster .mini-fab{
  width:54px;height:48px;flex-basis:54px;padding:1px 0 0;gap:0;
  border-radius:11px;overflow:visible;
}
.topbar .v12-route-cluster .mini-fab:hover{background:#f1f7ed;box-shadow:none;}
.topbar .v12-route-cluster .mini-fab i{
  width:36px;height:31px;flex-basis:31px;overflow:visible!important;
}
.topbar .v12-route-cluster .mini-fab i img{
  width:36px;height:31px;max-width:36px;max-height:31px;
  object-fit:contain;object-position:center;filter:none;
}
.topbar .v12-route-cluster .route-gallery i img{width:34px;height:31px;}
.topbar .v12-route-cluster .route-restaurant i img{width:36px;height:31px;}
.topbar .v12-route-cluster .route-creator i img{width:35px;height:31px;}
.topbar .v12-route-cluster .utility-import i{display:grid;place-items:center;}
.v12-import-img{display:block;width:35px;height:29px;object-fit:contain;filter:none;}
.topbar .v12-route-cluster .mini-fab span{
  color:#596353;font-size:10px;line-height:12px;font-weight:700;
}
.topbar .v12-route-cluster .mini-fab.is-open{
  background:transparent;
  box-shadow:none;
}
.topbar .v12-route-cluster .mini-fab.is-open span{color:var(--v12-leaf-deep);}
.topbar .v12-route-cluster .mini-fab.is-open::after{
  left:18px;right:18px;bottom:0;height:3px;border-radius:99px;background:var(--v12-leaf);
}

.btn-export{
  min-width:158px;height:44px;margin-left:2px;padding:0 16px;
  border-color:#79ad66;border-radius:13px;
  background:linear-gradient(180deg,#6eb752,#56a140);
  box-shadow:0 4px 10px rgba(57,116,43,.18),inset 0 1px rgba(255,255,255,.34);
}
.btn-export:hover{box-shadow:0 5px 12px rgba(57,116,43,.21),inset 0 1px rgba(255,255,255,.38);}

.topbar .mini-fab.utility-settings{
  width:44px;height:44px;flex-basis:44px;margin:0;border-radius:13px;
  overflow:hidden;border:1px solid #dce3d6;background:#f6f8f2;
  box-shadow:none!important;filter:none!important;
}
.topbar .mini-fab.utility-settings::before,
.topbar .mini-fab.utility-settings::after{content:none!important;display:none!important;}
.topbar .mini-fab.utility-settings i{
  width:42px;height:42px;display:grid;place-items:center;
  overflow:visible;border:0;border-radius:12px;
  background:transparent;box-shadow:none!important;filter:none!important;
}
.topbar .mini-fab.utility-settings:hover{border-color:#9fbe90;background:#edf5e8;}
.topbar .mini-fab.utility-settings:active{background:#e8f2e2;}
.topbar .mini-fab.utility-settings i .v12-settings-img{
  display:block;width:30px;height:30px;max-width:30px;max-height:30px;
  object-fit:contain;filter:none!important;
}

.rail{
  left:14px;top:50%;bottom:auto;width:80px;height:auto;padding:6px 5px;gap:2px;
  transform:translateY(-50%)!important;
  border:1px solid #d8dfd2;border-radius:19px;background:rgba(255,254,250,.98);
  box-shadow:0 8px 20px rgba(54,69,44,.09),inset 0 1px rgba(255,255,255,.9);
}
.rail button{
  width:68px;height:59px;min-height:59px;flex-basis:59px;gap:0;
  border-radius:12px;overflow:visible;transform:none!important;
}
.rail button i{
  width:42px;height:40px;flex-basis:40px;
  background-size:contain!important;background-position:center!important;
  filter:none!important;transform:none!important;
}
.rail button[data-tool="look"] i{width:41px;height:39px;flex-basis:39px;background-size:contain!important;}
.rail button[data-tool="layers"] i{width:46px;background-size:contain!important;}
.rail button span{font-size:11px;line-height:14px;font-weight:800;color:#606a59;}
.rail button:hover{background:#f2f7ee;}
.rail button.on{
  background:#eef6ea;
  box-shadow:none;
}
.rail button.on::before{left:-6px;top:13px;bottom:13px;width:3px;background:var(--v12-leaf);}
.rail button.on span{color:var(--v12-leaf-deep);}

.tool-panel{
  left:104px;top:82px;width:356px;
  border:1px solid #d6ded0;border-radius:17px;background:var(--v12-paper);
  box-shadow:0 13px 32px rgba(51,65,41,.13);
  animation:v12PanelQuietIn .14s ease-out;
}
@keyframes v12PanelQuietIn{from{opacity:0;}to{opacity:1;}}
.tp-head{
  min-height:47px;padding:0 12px;
  border-bottom:1px solid var(--v12-line-soft);
  background:linear-gradient(180deg,#fafbf7,#f5f7f1);
}
.tp-head::before{width:4px;height:21px;background:linear-gradient(180deg,var(--v12-leaf) 0 72%,var(--v12-gold) 72%);}
.tp-head .x{border:1px solid #dde4d8;border-radius:9px;background:#f0f3ed;}
.tp-body{padding:10px 11px 12px;gap:8px;}
.gcard,.v12-section{border-color:#e1e6dc;border-radius:12px;background:#fbfcf8;}
.w-btn,.preset,.lop,.pact{border-color:#d9e0d4;border-radius:9px;background:#fffefa;box-shadow:none;}
.w-btn:hover,.preset:hover,.lop:hover,.pact:hover{border-color:#a9c49b;background:#f0f6ec;}
.v12-chip{border-color:#d9e1d4;border-radius:8px;background:#fffefa;}
.v12-chip.on{border-color:#96bb84;background:#edf6e8;box-shadow:none;}

.transport{
  bottom:12px;width:680px;min-width:680px;max-width:680px;min-height:62px;
  padding:7px 9px;gap:6px;border:1px solid #d4dcd0;border-radius:17px;
  background:rgba(255,254,250,.98);
  box-shadow:0 8px 21px rgba(52,66,42,.12),inset 0 1px rgba(255,255,255,.94);
}
.transport::before{display:none;}
#chipMotion{width:96px;min-width:96px;max-width:96px;flex-basis:96px;}
#chipLook{width:144px;min-width:144px;max-width:144px;flex-basis:144px;}
#btnInteract{width:70px;min-width:70px;max-width:70px;flex-basis:70px;}
.transport .t-chip{min-height:42px;border:1px solid #e1e5dc;border-radius:10px;background:#f4f6f0;}
.transport .t-ico:not(.t-main){width:40px;height:40px;flex-basis:40px;border-radius:10px;box-shadow:none;}
.transport .t-main{width:48px;height:48px;flex-basis:48px;box-shadow:0 0 0 1px #81b66e,0 3px 8px rgba(57,111,43,.19);}
.pline.v12-seek{width:130px;flex-basis:130px;margin:0 1px;}

.timeline{
  bottom:86px;width:min(760px,calc(100vw - 198px));min-width:680px;
  min-height:188px;max-height:min(50vh,430px);padding:0;gap:0;
  border:1px solid #d1dacb;border-radius:17px;background:var(--v12-paper)!important;
  box-shadow:0 14px 36px rgba(49,62,40,.16),0 2px 7px rgba(49,62,40,.05);
  animation:none!important;resize:both;overflow:auto;
}
.timeline:not(.is-dragged){left:50%;top:auto;right:auto;transform:translateX(-50%);}
.tl-head{
  min-height:42px;padding:7px 10px 7px 13px;gap:7px;
  border-bottom:1px solid #e2e7dd;background:linear-gradient(180deg,#fafbf7,#f4f7f1);
}
.tl-head::before{width:4px;height:22px;flex-basis:4px;background:linear-gradient(180deg,var(--v12-leaf) 0 72%,var(--v12-gold) 72%);}
.tl-head b{font-size:12.5px;}.tl-head small{font-size:9px;}
.v12-timeline-head-actions button{width:28px;height:28px;border-radius:9px;box-shadow:none;}
.v12-timeline-toolbar{padding:6px 9px;gap:5px;background:#fbfcf8;}
.v12-timeline-toolbar .w-btn{min-height:29px;padding:0 9px;font-size:10px;}
.v12-clip-list{padding:7px 9px 3px;gap:5px;}
.v12-clip-row{
  grid-template-columns:78px minmax(145px,1fr) 66px 66px 60px 46px 76px;
  gap:5px;padding:6px;border-radius:11px;background:#fafbf7;
}
.v12-clip-row label{font-size:8.5px;}
.v12-clip-row input,.v12-clip-row select{height:28px;border-radius:8px;}
.v12-track-name{height:28px;border-radius:8px;}
.v12-clip-ops button{height:28px;border-radius:7px;}
.v12-transition-row{margin:4px 9px 8px;padding:6px 8px;border-radius:10px;}

@media (max-width:1160px){
  .brand{width:136px;flex-basis:136px;}.brand i{width:120px;flex-basis:120px;}
  .char-capsule{width:188px;min-width:188px;max-width:188px;flex-basis:188px;}
  .topbar .v12-route-cluster .mini-fab{width:51px;flex-basis:51px;}
  .btn-export{min-width:146px;padding:0 13px;}
}
@media (max-width:1080px){
  .brand{display:none;}
  .tool-panel{left:100px;width:348px;}
  .timeline{min-width:640px;width:calc(100vw - 184px);}
}
@media (max-height:740px){
  .rail{top:50%;bottom:auto;width:74px;height:auto;max-height:calc(100vh - 164px);padding:5px 4px;transform:translateY(-50%)!important;}
  .rail button{width:64px;height:52px;min-height:52px;flex-basis:52px;}
  .rail button i{width:38px;height:34px;flex-basis:34px;background-size:contain!important;}
  .rail button[data-tool="look"] i{width:36px;height:33px;flex-basis:33px;}
  .rail button[data-tool="layers"] i{width:42px;}
  .tool-panel{left:96px;top:78px;max-height:calc(100vh - 158px);}
  .transport{bottom:9px;min-height:58px;}
  .timeline{bottom:78px;max-height:52vh;}
}

@supports selector(body:has(*)){
  body:has(#toolHost .tool-panel) #exportFrame{
    left:50%!important;
    height:min(70vh,calc(70vw / (var(--f-w,1)/var(--f-h,1))))!important;
  }
  body:has(#toolHost .tool-panel) .stage-char{left:50%!important;}
}

/* 2026-07-29：在同一 V12 内按正式 Studio 结构收尾。 */
.brand{
  width:190px;
  flex-basis:190px;
  gap:7px;
  padding:4px 7px;
}
.brand .v12-brand-avatar{
  width:40px;
  height:40px;
  flex:0 0 40px;
  border:1px solid #a7c697;
  border-radius:50%;
  background:var(--v12-brand-avatar) center/cover no-repeat;
  box-shadow:0 2px 6px rgba(70,91,58,.12),inset 0 0 0 2px #fff;
}
.brand i{
  width:128px;
  height:33px;
  flex-basis:128px;
  background-size:contain!important;
}

/* 取景尺寸已在画布工具中显示，舞台不再重复悬浮说明。 */
#exportFrame::after{content:none!important;display:none!important;}

/* 互动设置保留真实开关；删掉重复的操作说明句。 */
.mini-pop .note{display:none!important;}

/* 官方相机有较厚白描边，稍向上提以完整露出轮廓。 */
.rail button[data-tool="export"] i{
  position:relative;
  top:-2px;
  background-position:center top!important;
}

/* 轨道编排：同步正式 JourneyStudioPage 的轨道/泳道/片段/连接/编辑器结构。 */
.timeline{
  width:680px;
  min-width:680px;
  min-height:318px;
  max-height:min(62vh,560px);
  bottom:86px;
  border-radius:17px;
  overflow:auto;
  resize:both;
}
.timeline .tl-head{
  min-height:42px;
  padding:6px 9px 6px 12px;
}
.v12-composition-drag{
  min-width:0;
  display:flex;
  align-items:baseline;
  gap:8px;
}
.v12-composition-drag b{font-size:12.5px;}
.v12-composition-drag small{color:#7e8877;font-size:9px;font-weight:700;}
.v12-timeline-head-actions button svg{
  width:14px;
  height:14px;
  fill:none;
  stroke:currentColor;
  stroke-width:1.8;
  stroke-linecap:round;
  stroke-linejoin:round;
}
.v12-composition-toolbar{
  display:flex;
  align-items:center;
  gap:5px;
  min-height:41px;
  padding:6px 8px;
  border-bottom:1px solid #e3e8de;
  background:#fbfcf8;
}
.v12-composition-toolbar .w-btn{
  min-height:29px;
  padding:0 9px;
  border-radius:8px;
  font-size:10px;
}
.v12-composition-preview{
  min-height:29px;
  display:inline-flex;
  align-items:center;
  gap:6px;
  padding:0 9px;
  border:1px solid #a9c89a;
  border-radius:999px;
  background:#edf6e8;
  color:#39772e;
  font-size:10px;
  font-weight:800;
  white-space:nowrap;
}
.v12-composition-preview input{width:13px;height:13px;margin:0;accent-color:#5da746;}
.v12-composition-timeline{
  --v12-track-label:108px;
  display:grid;
  gap:3px;
  margin:7px 8px 0;
  padding:6px;
  border:1px solid #d5decf;
  border-radius:10px;
  background:#f0f5eb;
  box-shadow:inset 0 1px 3px rgba(54,70,44,.08);
}
.v12-composition-track{
  min-width:0;
  display:grid;
  grid-template-columns:var(--v12-track-label) minmax(0,1fr);
  gap:1px;
}
.v12-composition-track.is-hidden-track{opacity:.5;}
.v12-composition-track-label{
  min-height:42px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:4px;
  padding:0 5px 0 8px;
  border:1px solid #d8e0d3;
  border-radius:7px 0 0 7px;
  background:#f8faf5;
}
.v12-composition-track-title{
  min-width:0;
  display:flex;
  align-items:baseline;
  gap:4px;
  overflow:hidden;
  white-space:nowrap;
}
.v12-composition-track-title strong{color:#397b2d;font-size:11px;}
.v12-composition-track-title small{
  overflow:hidden;
  color:#7a8473;
  font-size:8.5px;
  text-overflow:ellipsis;
}
.v12-composition-track-actions{display:inline-flex;gap:2px;}
.v12-composition-track-actions button{
  width:20px;
  height:22px;
  display:grid;
  place-items:center;
  padding:0;
  border:1px solid #d4decf;
  border-radius:6px;
  background:#fffefa;
  color:#5e6c58;
}
.v12-composition-track-actions button:disabled{opacity:.34;cursor:not-allowed;}
.v12-composition-track-actions svg{
  width:12px;
  height:12px;
  fill:none;
  stroke:currentColor;
  stroke-width:1.8;
  stroke-linecap:round;
  stroke-linejoin:round;
}
.v12-composition-lane{
  position:relative;
  min-height:42px;
  overflow:hidden;
  border:1px solid #d8e0d3;
  border-radius:0 7px 7px 0;
  background:
    linear-gradient(180deg,transparent 49%,rgba(77,121,63,.08) 50%,transparent 51%),
    repeating-linear-gradient(90deg,rgba(77,121,63,.08) 0,rgba(77,121,63,.08) 1px,transparent 1px,transparent 10%),
    #fbfcf8;
}
.v12-composition-playhead{
  position:absolute;
  z-index:8;
  top:0;
  bottom:0;
  width:2px;
  border-radius:99px;
  background:#458b36;
  box-shadow:0 0 0 2px rgba(255,255,255,.72),0 0 8px rgba(70,139,54,.22);
  pointer-events:none;
}
.v12-composition-playhead::before{
  content:"";
  position:absolute;
  top:1px;
  left:50%;
  width:7px;
  height:7px;
  border-radius:50%;
  background:inherit;
  transform:translateX(-50%);
}
.v12-composition-clip{
  position:absolute;
  z-index:3;
  top:4px;
  bottom:4px;
  min-width:42px;
  display:flex;
  align-items:center;
  gap:5px;
  overflow:hidden;
  padding:3px 13px;
  border:1px solid #8fbc7a;
  border-radius:7px;
  background:linear-gradient(180deg,#dff1d4,#c7e5b7);
  color:#2f6426;
  box-shadow:inset 0 1px rgba(255,255,255,.55),0 1px 2px rgba(54,92,43,.12);
  cursor:grab;
  touch-action:none;
  user-select:none;
}
.v12-composition-clip.is-selected{outline:2px solid #4e913d;outline-offset:1px;}
.v12-composition-clip-name{
  min-width:0;
  flex:1 1 auto;
  overflow:hidden;
  font-size:10px;
  font-weight:900;
  text-overflow:ellipsis;
  white-space:nowrap;
}
.v12-composition-clip small{
  flex:0 0 auto;
  max-width:86px;
  overflow:hidden;
  font-size:8px;
  font-weight:800;
  opacity:.75;
  text-overflow:ellipsis;
  white-space:nowrap;
}
.v12-composition-resize{
  position:absolute;
  z-index:2;
  top:4px;
  bottom:4px;
  width:7px;
  border-radius:99px;
  background:rgba(255,255,255,.7);
  cursor:ew-resize;
  touch-action:none;
}
.v12-composition-resize.is-start{left:3px;}
.v12-composition-resize.is-end{right:3px;}
.v12-composition-link{
  position:absolute;
  z-index:5;
  top:6px;
  bottom:6px;
  min-width:45px;
  display:flex;
  align-items:center;
  justify-content:center;
  gap:3px;
  overflow:hidden;
  padding:0 6px;
  border:1px solid #c29b43;
  border-radius:5px;
  background:repeating-linear-gradient(135deg,#fff7df 0,#fff7df 4px,#f0d18c 4px,#f0d18c 8px);
  color:#70561d;
  box-shadow:0 1px 2px rgba(97,74,24,.14);
  touch-action:none;
}
@media (pointer:coarse){
  .v12-composition-resize{width:17px;padding-inline:5px;background-clip:content-box;}
}
.v12-composition-link.is-selected{outline:2px solid #bb8e2f;outline-offset:1px;}
.v12-composition-link span{font-size:8px;font-weight:900;}
.v12-composition-link small{font-size:7px;font-weight:800;}
.v12-composition-empty{
  position:absolute;
  inset:0;
  display:grid;
  place-items:center;
  color:#a0a99a;
  font-size:9px;
  pointer-events:none;
}
.v12-composition-ruler{
  display:grid;
  grid-template-columns:var(--v12-track-label) minmax(0,1fr);
  gap:1px;
  min-height:23px;
  align-items:center;
  color:#7d8677;
  font-size:8.5px;
  font-weight:800;
}
.v12-composition-ruler>span{padding-left:8px;}
.v12-composition-ruler>div{display:grid;grid-template-columns:repeat(3,1fr);padding:0 3px;}
.v12-composition-ruler>div span:nth-child(2){text-align:center;}
.v12-composition-ruler>div span:nth-child(3){text-align:right;}
.v12-composition-editor{
  display:grid;
  grid-template-columns:minmax(132px,1.4fr) minmax(88px,.8fr) repeat(3,58px) 64px 56px 50px;
  gap:5px;
  align-items:end;
  margin:6px 8px 8px;
  padding:7px;
  border:1px solid #dce3d7;
  border-radius:9px;
  background:#f8faf5;
}
.v12-composition-editor.is-link{grid-template-columns:minmax(180px,1.5fr) 76px 88px auto;}
.v12-composition-editor label{min-width:0;display:grid;gap:3px;color:#7d8677;font-size:8.5px;font-weight:800;}
.v12-composition-editor label>span{white-space:nowrap;}
.v12-composition-editor select,.v12-composition-editor input[type="number"]{
  width:100%;
  height:28px;
  min-width:0;
  border:1px solid #d7dfd2;
  border-radius:7px;
  padding:0 7px;
  background:#fffefa;
  color:#46513f;
  font-size:9.5px;
  font-weight:800;
}
.v12-composition-editor strong{
  min-height:28px;
  display:flex;
  align-items:center;
  overflow:hidden;
  color:#46513f;
  font-size:9.5px;
  text-overflow:ellipsis;
  white-space:nowrap;
}
.v12-composition-loop{
  min-height:28px;
  display:flex!important;
  align-items:center;
  justify-content:center;
  gap:5px!important;
  padding:0 7px;
  border:1px solid #a8c899;
  border-radius:999px;
  background:#edf6e8;
  color:#39772e!important;
}
.v12-composition-loop input{width:13px;height:13px;margin:0;accent-color:#5da746;}
.v12-composition-order{display:flex;gap:3px;}
.v12-composition-order button{
  width:26px;
  height:28px;
  border:1px solid #d7dfd2;
  border-radius:7px;
  background:#fffefa;
  color:#5e6a57;
}
.v12-composition-editor .w-btn{min-height:28px;padding:0 7px;border-radius:7px;font-size:9px;}
.v12-composition-editor .is-danger{border-color:#e3c8cc;color:#8a3d49;background:#fff8f8;}
.v12-composition-editor-note{align-self:end;min-height:28px;display:flex;align-items:center;color:#7d8677;font-size:9px;}

@media (max-width:1160px){
  .brand{width:170px;flex-basis:170px;gap:5px;}
  .brand .v12-brand-avatar{width:36px;height:36px;flex-basis:36px;}
  .brand i{width:117px;flex-basis:117px;}
}
@media (max-width:1080px){.brand{display:none;}}
@media (max-height:740px){
  .timeline{bottom:78px;min-height:300px;max-height:58vh;}
  .v12-composition-track-label,.v12-composition-lane{min-height:38px;}
  .v12-composition-editor{margin-top:5px;margin-bottom:6px;padding-block:5px;}
}

/* 2026-07-29：保留官方图标完整轮廓，避免安全边缘被旧槽位裁切。 */
.brand{
  overflow:visible;
}
.brand .v12-brand-avatar{
  background-color:#fff;
  background-size:36px 36px;
  background-position:center;
  box-shadow:0 2px 6px rgba(70,91,58,.12);
}
.rail button[data-tool="export"] i{
  top:0;
  background-size:42px auto!important;
  background-position:center!important;
}

/* 候选稿校对、实现来源与迁移备注不进入实际操作界面。 */
.note,
#infoFab,
#infoModal{
  display:none!important;
}
\r
:root{
  --v12-brand-logo:url('/home/portal/title-logo-full.png');
  --v12-brand-avatar:url('/home/portal/brand-avatar.png');
  --v12-tool-motion:url('./assets/v12/tool-motion.png');
  --v12-tool-look:url('./assets/v12/tool-look.png');
  --v12-tool-parts:url('./assets/v12/tool-parts.png');
  --v12-tool-layers:url('./assets/v12/tool-layers.png');
  --v12-tool-canvas:url('./assets/v12/tool-canvas.png');
  --v12-tool-export:url('./assets/v12/tool-export.png');
}

/* React 实装只负责消除经典页同名选择器的影响；视觉数值沿用 V12 原稿。 */
body.studio-v12-exact-active .studio-v12-exact .topbar{
  position:fixed;
  top:10px;
  left:14px;
  right:14px;
  width:auto;
  height:64px;
  min-height:64px;
  z-index:40;
  display:flex;
  grid-template-columns:none;
  align-items:center;
  gap:7px;
  padding:6px 8px;
  border:1px solid #d8dfd1;
  border-radius:17px;
  background:rgba(255,254,250,.98);
  backdrop-filter:none;
  box-shadow:0 7px 20px rgba(54,70,44,.10),inset 0 1px rgba(255,255,255,.94);
}
body.studio-v12-exact-active .studio-v12-exact .brand{
  width:190px;
  height:50px;
  min-height:50px;
  flex:0 0 190px;
  display:flex;
  justify-self:auto;
  justify-content:flex-start;
  gap:7px;
  padding:4px 7px;
  border-radius:0;
  background:transparent;
}

/* Keep the V12 header controls reachable on compact desktop widths. */
@media (max-width:1100px){
  body.studio-v12-exact-active .studio-v12-exact .brand{display:none;}
}
@media (max-width:900px){
  body.studio-v12-exact-active .studio-v12-exact .topbar{
    gap:3px;
    padding-left:5px;
    padding-right:5px;
  }
}

/* V12 entry buttons remain usable while their own full-screen surfaces are open. */
body.studio-v12-exact-active .studio-v12-exact .v12-roster{
  top:74px;
}
body.studio-v12-exact-active .studio-v12-exact .v12-creator-scrim,
body.studio-v12-exact-active .studio-v12-exact .v12-creator-drawer{
  top:74px;
}
body.studio-v12-exact-active .studio-v12-exact .transport{
  display:flex;
  flex-wrap:nowrap;
  align-items:center;
  justify-content:center;
}
body.studio-v12-exact-active .studio-v12-exact .timeline{
  display:flex;
  grid-template-columns:none;
  flex-direction:column;
  align-items:stretch;
  gap:0;
  color:var(--v12-ink);
}
body.studio-v12-exact-active .studio-v12-exact .timeline .v12-composition-editor label{
  display:grid;
  align-items:initial;
}
body.studio-v12-exact-active .studio-v12-exact .timeline .v12-composition-preview{
  display:flex;
  align-items:center;
}
body.studio-v12-exact-active .studio-v12-exact .stepper input{
  width:64px;
  min-width:0;
  height:34px;
  border:0;
  border-left:1px solid var(--line);
  border-right:1px solid var(--line);
  outline:0;
  background:#fff;
  text-align:center;
  font-size:12.5px;
  font-weight:700;
}
body.studio-v12-exact-active .studio-v12-exact .modern-v12-background-grid{
  display:grid;
  grid-template-columns:repeat(2,minmax(0,1fr));
  gap:7px;
  max-height:250px;
  overflow:auto;
}
body.studio-v12-exact-active .studio-v12-exact .modern-v12-background-card{
  min-width:0;
  padding:6px;
  border:1px solid #dfe4d8;
  border-radius:11px;
  background:#fff;
  text-align:left;
}
body.studio-v12-exact-active .studio-v12-exact .modern-v12-background-card.is-active{
  border-color:var(--v12-leaf);
  background:var(--v12-leaf-wash);
  box-shadow:inset 3px 0 0 var(--v12-leaf);
}
body.studio-v12-exact-active .studio-v12-exact .modern-v12-background-card img{
  width:100%;
  aspect-ratio:16/9;
  display:block;
  object-fit:cover;
  border-radius:7px;
}
body.studio-v12-exact-active .studio-v12-exact .modern-v12-background-card strong{
  display:block;
  margin-top:4px;
  overflow:hidden;
  color:#596353;
  font-size:9.5px;
  text-overflow:ellipsis;
  white-space:nowrap;
}
body.studio-v12-exact-active .studio-v12-exact .tool-panel[data-tool="parts"] .v12-part-list{
  max-height:310px;
  flex:0 0 auto;
  overflow-y:auto;
  overscroll-behavior:contain;
}
body.studio-v12-exact-active .studio-v12-exact .tool-panel{
  isolation:isolate;
  backface-visibility:hidden;
}
body.studio-v12-exact-active .studio-v12-exact .tool-panel>.tp-head,
body.studio-v12-exact-active .studio-v12-exact .tool-panel>.tp-body{
  position:relative;
  z-index:1;
  opacity:1;
  visibility:visible;
}
body.studio-v12-exact-active .studio-v12-exact .tool-panel>.tp-body{
  min-height:0;
  background:var(--v12-paper);
}
body.studio-v12-exact-active .studio-v12-exact .v12-layer-list{
  display:flex;
  flex-direction:column;
  gap:6px;
}
body.studio-v12-exact-active .studio-v12-exact .layer-item{
  min-height:48px;
  display:flex;
  align-items:center;
  justify-content:flex-start;
  gap:9px;
  padding:7px 10px;
  border-radius:12px;
}
body.studio-v12-exact-active .studio-v12-exact .layer-item:hover{
  transform:none;
}
body.studio-v12-exact-active .studio-v12-exact .v12-layer-ops button svg{
  display:block;
  margin:auto;
}
body.studio-v12-exact-active .studio-v12-exact .v12-field select{
  width:100%;
  min-width:0;
  height:30px;
  padding:0 8px;
  border:1px solid #d7dfd0;
  border-radius:9px;
  outline:0;
  background:#fff;
  color:#596353;
  font:inherit;
}
body.studio-v12-exact-active .studio-v12-exact .v12-ui-mode-row{
  align-items:center;
}
body.studio-v12-exact-active .studio-v12-exact .v12-ui-mode-choices{
  flex:1;
  flex-wrap:nowrap;
  gap:5px;
}
body.studio-v12-exact-active .studio-v12-exact .v12-ui-mode-choice{
  min-width:0;
  height:34px;
  display:inline-flex;
  align-items:center;
  gap:5px;
  padding:3px 8px 3px 3px;
  border-radius:10px;
}
body.studio-v12-exact-active .studio-v12-exact .v12-ui-mode-choice img{
  width:27px;
  height:27px;
  flex:0 0 27px;
  border:1px solid #d2ddcb;
  border-radius:8px;
  object-fit:cover;
}
body.studio-v12-exact-active .studio-v12-exact .v12-ui-mode-choice span{
  min-width:0;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
}
body.studio-v12-exact-active .studio-v12-exact .tool-panel[data-tool="export"] .v12-compact-grid>.v12-field{
  flex-direction:column;
  align-items:stretch;
  gap:4px;
}
body.studio-v12-exact-active .studio-v12-exact>.queue-box{
  position:fixed;
  right:16px;
  bottom:88px;
  z-index:70;
  width:280px;
}
body.studio-v12-exact-active .studio-v12-exact .timeline>.v12-composition-editor-note{
  align-self:stretch;
  justify-content:center;
  margin:6px 10px;
}

/* 中文布局保持原尺寸；仅为日/韩较长词组分配空间并截断兜底。 */
html[data-locale="ja-JP"] body.studio-v12-exact-active .studio-v12-exact .topbar .utility-import,
html[data-locale="ko-KR"] body.studio-v12-exact-active .studio-v12-exact .topbar .utility-import{
  width:78px;
  flex-basis:78px;
}
html[data-locale="ja-JP"] body.studio-v12-exact-active .studio-v12-exact .topbar .utility-import span,
html[data-locale="ko-KR"] body.studio-v12-exact-active .studio-v12-exact .topbar .utility-import span{
  width:100%;
  overflow:hidden;
  font-size:9px;
  text-overflow:ellipsis;
  white-space:nowrap;
}
html[data-locale="ja-JP"] body.studio-v12-exact-active .studio-v12-exact .btn-export,
html[data-locale="ko-KR"] body.studio-v12-exact-active .studio-v12-exact .btn-export{
  min-width:176px;
  max-width:190px;
  flex:0 1 184px;
}
html[data-locale="ja-JP"] body.studio-v12-exact-active .studio-v12-exact .btn-export span,
html[data-locale="ko-KR"] body.studio-v12-exact-active .studio-v12-exact .btn-export span{
  min-width:0;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
}

/* 2026-07-30：补齐 V12 正式 DOM 契约，保持原稿尺寸和官方素材。 */
body.studio-v12-exact-active .studio-v12-exact .brand{
  width:210px;
  flex:0 0 210px;
}
body.studio-v12-exact-active .studio-v12-exact .brand .v12-brand-avatar{
  position:relative;
  width:38px;
  height:38px;
  flex:0 0 38px;
  display:block!important;
  overflow:hidden;
  border:1px solid #a7c697;
  border-radius:50%;
  background:#fff;
}
body.studio-v12-exact-active .studio-v12-exact .brand .v12-brand-avatar img{
  position:absolute;
  top:1px;
  left:1px;
  width:36px;
  height:36px;
  max-width:none;
  max-height:none;
  object-fit:contain;
  transform:none;
}
body.studio-v12-exact-active .studio-v12-exact .brand>i{
  width:148px;
  height:42px;
  flex:0 0 148px;
  background-image:var(--v12-brand-logo)!important;
  background-position:-24px center!important;
  background-size:198px 58px!important;
  background-repeat:no-repeat!important;
}
body.studio-v12-exact-active .studio-v12-exact .brand::after{
  content:none!important;
  display:none!important;
}

body.studio-v12-exact-active .studio-v12-exact .rail{
  left:13px;
  width:88px;
  padding:8px 7px;
  gap:2px;
  border-radius:21px;
}
body.studio-v12-exact-active .studio-v12-exact .rail button{
  width:72px;
  height:66px;
  min-height:66px;
  flex:0 0 66px;
  border-radius:14px;
}
body.studio-v12-exact-active .studio-v12-exact .rail button i{
  width:54px;
  height:49px;
  flex:0 0 49px;
  display:grid;
  place-items:center;
  background:none!important;
}
body.studio-v12-exact-active .studio-v12-exact .rail button i img{
  width:54px;
  height:49px;
  max-width:none;
  max-height:none;
  display:block;
  object-fit:contain;
  filter:drop-shadow(0 2px 2px rgba(57,47,42,.15));
}
body.studio-v12-exact-active .studio-v12-exact .rail button[data-tool="look"] i,
body.studio-v12-exact-active .studio-v12-exact .rail button[data-tool="layers"] i,
body.studio-v12-exact-active .studio-v12-exact .rail button[data-tool="export"] i{
  width:54px;
  height:49px;
  flex-basis:49px;
  top:auto;
}
body.studio-v12-exact-active .studio-v12-exact .rail button:hover i img{
  filter:drop-shadow(0 3px 3px rgba(57,47,42,.19)) saturate(1.04);
}

body.studio-v12-exact-active .studio-v12-exact #chipMotion,
body.studio-v12-exact-active .studio-v12-exact #chipLook,
body.studio-v12-exact-active .studio-v12-exact #btnInteract{
  min-width:0;
  overflow:hidden;
}
body.studio-v12-exact-active .studio-v12-exact #chipMotion{width:96px;max-width:96px;flex:0 0 96px;}
body.studio-v12-exact-active .studio-v12-exact #chipLook{width:144px;max-width:144px;flex:0 0 144px;}
body.studio-v12-exact-active .studio-v12-exact #btnInteract{width:70px;max-width:70px;flex:0 0 70px;}
body.studio-v12-exact-active .studio-v12-exact #chipMotion b,
body.studio-v12-exact-active .studio-v12-exact #chipLook b{
  min-width:0;
  display:block;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
}
body.studio-v12-exact-active .studio-v12-exact .v12-interaction-anchor{
  position:relative;
  width:70px;
  height:42px;
  flex:0 0 70px;
}
body.studio-v12-exact-active .studio-v12-exact .v12-interaction-pop{
  position:absolute;
  right:0;
  bottom:calc(100% + 14px);
  left:auto;
  width:256px;
  z-index:72;
  background:#fffdf8;
}
body.studio-v12-exact-active .studio-v12-exact .v12-interaction-pop .frow{
  min-height:31px;
  justify-content:space-between;
}
body.studio-v12-exact-active .studio-v12-exact .v12-interaction-pop .toggle:disabled{
  opacity:.42;
  cursor:not-allowed;
}

body.studio-v12-exact-active .studio-v12-exact .timeline{
  width:min(760px,calc(100vw - 240px));
  min-width:660px;
}
body.studio-v12-exact-active .studio-v12-exact .v12-composition-timeline{
  --v12-track-label:140px;
}
body.studio-v12-exact-active .studio-v12-exact .v12-composition-track-title small{
  max-width:66px;
}
body.studio-v12-exact-active .studio-v12-exact .v12-composition-track-actions button,
body.studio-v12-exact-active .studio-v12-exact .v12-composition-order button{
  display:grid;
  place-items:center;
  line-height:0;
}
body.studio-v12-exact-active .studio-v12-exact .v12-composition-track-actions button.is-danger{
  border-color:#e6d1d2;
  color:#934b52;
  background:#fffafa;
}

@media (max-height:680px){
  body.studio-v12-exact-active .studio-v12-exact .rail{width:80px;padding:6px 5px;}
  body.studio-v12-exact-active .studio-v12-exact .rail button{width:68px;height:55px;min-height:55px;flex-basis:55px;}
  body.studio-v12-exact-active .studio-v12-exact .rail button i,
  body.studio-v12-exact-active .studio-v12-exact .rail button[data-tool="look"] i,
  body.studio-v12-exact-active .studio-v12-exact .rail button[data-tool="layers"] i,
  body.studio-v12-exact-active .studio-v12-exact .rail button[data-tool="export"] i{width:43px;height:38px;flex-basis:38px;}
  body.studio-v12-exact-active .studio-v12-exact .rail button i img{width:43px;height:38px;}
}

/* 2026-08-02：V12 桌面端精确排版与状态收尾。 */
body.studio-v12-exact-active .studio-v12-exact .tool-panel[data-tool="layers"] .v12-editing-banner{
  margin-bottom:8px;
}
body.studio-v12-exact-active .studio-v12-exact .tool-panel[data-tool="layers"] .v12-layer-list{
  margin-bottom:10px;
}
body.studio-v12-exact-active .studio-v12-exact .tool-panel[data-tool="layers"] .v12-layer-list + .v12-toolbar{
  margin-top:2px;
}
body.studio-v12-exact-active .studio-v12-exact .v12-chip{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  line-height:1.1;
}
body.studio-v12-exact-active .studio-v12-exact .v12-composition-loop{
  align-self:end;
  align-items:center!important;
}
body.studio-v12-exact-active .studio-v12-exact .v12-composition-loop span{
  display:flex;
  align-items:center;
  line-height:1;
}
body.studio-v12-exact-active .studio-v12-exact .transport{
  width:700px;
  min-width:700px;
  max-width:700px;
}
body.studio-v12-exact-active .studio-v12-exact .pline.v12-seek{
  width:146px;
  flex-basis:146px;
  box-sizing:border-box;
  padding-right:8px;
  padding-left:8px;
  overflow:visible;
}
body.studio-v12-exact-active .studio-v12-exact .pline.v12-seek input[type="range"]{
  width:100%;
  min-width:0;
}
body.studio-v12-exact-active .studio-v12-exact .modern-v12-canvas-size-grid .v12-field{
  display:grid;
  grid-template-columns:42px minmax(0,1fr);
  gap:6px;
}
body.studio-v12-exact-active .studio-v12-exact .modern-v12-canvas-size-grid .v12-field input{
  width:100%!important;
  min-width:0;
  box-sizing:border-box;
}
body.studio-v12-exact-active .studio-v12-exact .tool-panel[data-tool="export"]{
  height:min(520px,calc(100vh - 175px))!important;
}
body.studio-v12-exact-active .studio-v12-exact .tool-panel[data-tool="export"] .tp-body{
  flex:1 1 auto;
  min-height:0;
  overflow-y:auto;
}
/* The export body scrolls; its content must not shrink and clip playback controls. */\r
body.studio-v12-exact-active .studio-v12-exact .tool-panel[data-tool="export"]>.tp-head,\r
body.studio-v12-exact-active .studio-v12-exact .tool-panel[data-tool="export"]>.tp-body>*{\r
  flex-shrink:0;\r
}\r
body.studio-v12-exact-active .studio-v12-exact>.queue-box{
  animation:v12QueueEnter .18s ease-out both;
}
body.studio-v12-exact-active .studio-v12-exact>.queue-box.is-complete{
  pointer-events:none;
  animation:v12QueueComplete .9s ease forwards;
}
@keyframes v12QueueEnter{
  from{opacity:0;transform:translateY(7px) scale(.985);}
  to{opacity:1;transform:translateY(0) scale(1);}
}
@keyframes v12QueueComplete{
  0%,58%{opacity:1;transform:translateY(0) scale(1);}
  100%{opacity:0;transform:translateY(5px) scale(.99);}
}
body.studio-v12-exact-active .studio-v12-exact .brand{
  width:210px;
  flex-basis:210px;
}
body.studio-v12-exact-active .studio-v12-exact .brand .v12-brand-avatar img{
  top:0;
  left:0;
  width:100%;
  height:100%;
  max-width:none;
  max-height:none;
  object-fit:cover;
  transform:none;
}
body.studio-v12-exact-active .studio-v12-exact .brand>i{
  width:151px;
  height:44px;
  flex:0 0 151px;
  background-position:-27px -13px!important;
  background-size:204px 65px!important;
}

/* English top-bar labels need more room than the CJK controls. */
html[data-locale="en-US"] body.studio-v12-exact-active .studio-v12-exact .top-sp{
  min-width:0;
}
html[data-locale="en-US"] body.studio-v12-exact-active .studio-v12-exact .v12-route-cluster{
  gap:3px;
}
html[data-locale="en-US"] body.studio-v12-exact-active .studio-v12-exact .topbar .v12-route-cluster .route-gallery{
  width:62px;
  flex-basis:62px;
}
html[data-locale="en-US"] body.studio-v12-exact-active .studio-v12-exact .topbar .v12-route-cluster .route-restaurant{
  width:82px;
  flex-basis:82px;
}
html[data-locale="en-US"] body.studio-v12-exact-active .studio-v12-exact .topbar .v12-route-cluster .route-creator{
  width:64px;
  flex-basis:64px;
}
html[data-locale="en-US"] body.studio-v12-exact-active .studio-v12-exact .topbar .v12-route-cluster .utility-import{
  width:88px;
  flex-basis:88px;
}
html[data-locale="en-US"] body.studio-v12-exact-active .studio-v12-exact .topbar .v12-route-cluster .mini-fab{
  height:50px;
  padding-top:0;
}
html[data-locale="en-US"] body.studio-v12-exact-active .studio-v12-exact .topbar .v12-route-cluster .mini-fab i,
html[data-locale="en-US"] body.studio-v12-exact-active .studio-v12-exact .topbar .v12-route-cluster .mini-fab i img{
  height:28px;
  max-height:28px;
  flex-basis:28px;
}
html[data-locale="en-US"] body.studio-v12-exact-active .studio-v12-exact .topbar .v12-route-cluster .mini-fab span{
  width:100%;
  min-width:0;
  min-height:20px;
  display:flex!important;
  align-items:center;
  justify-content:center;
  overflow:hidden;
  white-space:normal;
  text-align:center;
  font-size:9px;
  line-height:10px;
}
html[data-locale="en-US"] body.studio-v12-exact-active .studio-v12-exact .btn-export{
  min-width:198px;
  max-width:218px;
  flex:0 1 208px;
  padding-right:14px;
  padding-left:14px;
}
html[data-locale="en-US"] body.studio-v12-exact-active .studio-v12-exact .btn-export span{
  min-width:0;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
}

/* Keep the existing language fonts and let longer labels grow vertically. */\r
html[data-locale="en-US"] body.studio-v12-exact-active .studio-v12-exact .roster-grid{
  grid-template-columns:repeat(auto-fill,minmax(144px,1fr));
}
html[data-locale="ko-KR"] body.studio-v12-exact-active .studio-v12-exact .roster-card :is(.nm,.rb){\r
  word-break:keep-all;\r
}\r
html:is([data-locale="zh-CN"],[data-locale="ja-JP"]) body.studio-v12-exact-active .studio-v12-exact .roster-card :is(.nm,.rb){\r
  line-break:strict;\r
}

@media (max-width:1160px){\r
  html:is([data-locale="ko-KR"],[data-locale="ja-JP"]) body.studio-v12-exact-active .studio-v12-exact .top-sp{\r
    min-width:0;\r
  }\r
  html:is([data-locale="ko-KR"],[data-locale="ja-JP"]) body.studio-v12-exact-active .studio-v12-exact .topbar .utility-import{\r
    width:54px;\r
    flex-basis:54px;\r
  }\r
  html:is([data-locale="ko-KR"],[data-locale="ja-JP"]) body.studio-v12-exact-active .studio-v12-exact .topbar .utility-import i,\r
  html:is([data-locale="ko-KR"],[data-locale="ja-JP"]) body.studio-v12-exact-active .studio-v12-exact .topbar .utility-import i img{\r
    height:28px;\r
    max-height:28px;\r
    flex-basis:28px;\r
  }\r
  html:is([data-locale="ko-KR"],[data-locale="ja-JP"]) body.studio-v12-exact-active .studio-v12-exact .topbar .utility-import span{\r
    overflow:visible;\r
    white-space:normal;\r
    line-height:10px;\r
  }\r
  html:is([data-locale="ko-KR"],[data-locale="ja-JP"]) body.studio-v12-exact-active .studio-v12-exact .btn-export{\r
    min-width:150px;\r
    max-width:160px;\r
    flex-basis:160px;\r
    padding-inline:10px;\r
  }\r
  html:is([data-locale="ko-KR"],[data-locale="ja-JP"]) body.studio-v12-exact-active .studio-v12-exact .btn-export span{\r
    overflow:visible;\r
    white-space:normal;\r
    line-height:16px;\r
    text-align:center;\r
  }\r
}\r
\r
@media (max-width:1350px){
  html[data-locale="en-US"] body.studio-v12-exact-active .studio-v12-exact .topbar .v12-route-cluster .mini-fab{
    width:48px;
    flex-basis:48px;
    justify-content:center;
  }
  html[data-locale="en-US"] body.studio-v12-exact-active .studio-v12-exact .topbar .v12-route-cluster .mini-fab i,
  html[data-locale="en-US"] body.studio-v12-exact-active .studio-v12-exact .topbar .v12-route-cluster .mini-fab i img{
    height:31px;
    max-height:31px;
    flex-basis:31px;
  }
  html[data-locale="en-US"] body.studio-v12-exact-active .studio-v12-exact .topbar .v12-route-cluster .mini-fab span{
    display:none!important;
  }
  html[data-locale="en-US"] body.studio-v12-exact-active .studio-v12-exact .btn-export{
    min-width:198px;
    max-width:218px;
    flex-basis:208px;
    padding-right:10px;
    padding-left:10px;
    font-size:11.5px;
  }
  html[data-locale="en-US"] body.studio-v12-exact-active .studio-v12-exact .btn-export span{
    overflow:visible;
    text-overflow:clip;
    white-space:normal;
    line-height:12px;
    text-align:center;
  }
}

@media (max-width:1160px){\r
  html[data-locale="en-US"] body.studio-v12-exact-active .studio-v12-exact .topbar{\r
    gap:6px;\r
  }\r
  html[data-locale="en-US"] body.studio-v12-exact-active .studio-v12-exact .seg button{\r
    padding-inline:6px;\r
  }\r
  html[data-locale="en-US"] body.studio-v12-exact-active .studio-v12-exact .btn-export{\r
    min-width:150px;\r
    max-width:160px;\r
    flex-basis:160px;\r
  }\r
}\r
\r
@media (max-width:900px){\r
  html[data-locale] body.studio-v12-exact-active .studio-v12-exact .char-capsule{\r
    width:52px;
    min-width:52px;
    max-width:52px;
    flex-basis:52px;
    padding:4px;
  }
  html[data-locale] body.studio-v12-exact-active .studio-v12-exact .char-capsule .cc{\r
    display:none;
  }
  html[data-locale="en-US"] body.studio-v12-exact-active .studio-v12-exact .btn-export{
    width:50px;
    min-width:50px;
    max-width:50px;
    flex:0 0 50px;
    padding:0;
  }
  html[data-locale="en-US"] body.studio-v12-exact-active .studio-v12-exact .btn-export span{
    display:none;
  }
}
`,LS=[{id:"motion",labelKey:"studio.choice.motion",fallback:"动作",icon:MS},{id:"look",labelKey:"studio.modern.look",fallback:"外观",icon:TS},{id:"parts",labelKey:"studio.parts.title",fallback:"部件",icon:AS},{id:"layers",labelKey:"studio.layers.title",fallback:"图层",icon:CS},{id:"canvas",labelKey:"studio.canvas.title",fallback:"画布",icon:SS},{id:"effects",labelKey:"studio.effects.title",fallback:"画面效果",icon:ES},{id:"export",labelKey:"studio.export.title",fallback:"导出",icon:jS}];function PS({translate:o,className:p,brandLogoSrc:g,brandAvatarSrc:f,selectedName:i,selectedMeta:r,selectedAvatarUrl:S,modelTabs:_,activeTool:M,activeToolTitle:L,activeToolMeta:O,libraryOpen:N,isPlaying:T,progress:D,currentTimeLabel:Y,durationLabel:q,motionLabel:$,lookLabel:G,interactionEnabled:I,interactionOpen:z,interactionAvailable:P,interactionSoundEnabled:de,interactionFxEnabled:Se,interactionVoiceLanguage:F,compositionOpen:oe,compositionCount:V,canOpenCharacterPages:ge,isExporting:Ye,stage:Ve,toolPanel:ue,roster:rn,timeline:Ze,settings:k,creator:Q,queue:J,toasts:ne,onBrand:be,onToggleLibrary:we,onToggleTool:Ie,onCloseTool:st,onGallery:lt,onRestaurant:re,onCreator:Be,onImport:Ge,onCurrentExport:nt,onSettings:fn,onTogglePlaying:Nn,onPreviousMotion:ht,onNextMotion:gi,onProgress:Fo,onToggleComposition:zo,onToggleInteractionPanel:ve,onCloseInteractionPanel:Cn,onToggleInteractionMode:so,onToggleInteractionSound:Tn,onToggleInteractionFx:Ul,onChangeInteractionVoiceLanguage:Mn}){const as=[i||o("studio.library.title","选择角色"),r].filter(Boolean).join(" "),An=Ye?o("studio.export.exporting","正在导出"):o("studio.export.current_gif","导出当前 GIF"),Ha=d.useRef(null),rs=d.useRef(null),Wa=d.useRef(null);return d.useEffect(()=>{const Ee=document.createElement("style");return Ee.dataset.studioV12Exact="true",Ee.textContent=RS,document.head.appendChild(Ee),document.body.classList.add("studio-v12-exact-active"),()=>{document.body.classList.remove("studio-v12-exact-active"),Ee.remove()}},[]),d.useLayoutEffect(()=>{var Ee;(Ee=Ha.current)==null||Ee.scrollTo({top:0,behavior:"auto"})},[M]),d.useEffect(()=>{if(!z)return;const Ee=Ga=>{var In,En;const fi=Ga.target;fi&&((In=rs.current)!=null&&In.contains(fi)||(En=Wa.current)!=null&&En.contains(fi))||Cn()},Ya=Ga=>{Ga.key==="Escape"&&Cn()};return document.addEventListener("pointerdown",Ee),document.addEventListener("keydown",Ya),()=>{document.removeEventListener("pointerdown",Ee),document.removeEventListener("keydown",Ya)}},[z,Cn]),e.jsxs("main",{className:`${p} studio-v12-exact`,"data-studio-layout":"v12-exact",style:{"--v12-brand-logo":`url("${g}")`},children:[e.jsx("div",{id:"stage",children:e.jsx("div",{id:"stageChars",children:Ve})}),e.jsxs("header",{className:"topbar",children:[e.jsxs("button",{className:"brand paper",type:"button",onClick:be,"aria-label":o("studio.brand.title","教主的旅途"),children:[e.jsx("span",{className:"v12-brand-avatar","aria-hidden":"true",children:e.jsx("img",{src:f,alt:""})}),e.jsx("i",{"aria-hidden":"true"}),e.jsxs("span",{children:[e.jsx("b",{children:o("studio.brand.title","教主的旅途")}),e.jsx("small",{children:"SPINE STUDIO"})]})]}),e.jsxs("button",{className:N?"char-capsule paper is-open":"char-capsule paper",type:"button","aria-label":as,title:as,"aria-expanded":N,onClick:we,children:[e.jsx("span",{className:"char-ava",children:S?e.jsx("img",{src:S,alt:""}):e.jsx("b",{children:i.slice(0,1)||"?"})}),e.jsxs("span",{className:"cc",children:[e.jsxs("b",{children:[i||o("studio.library.title","选择角色"),e.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{d:"m7 10 5 5 5-5"})})]}),e.jsx("small",{children:r})]})]}),e.jsx("div",{className:"seg",role:"group","aria-label":o("studio.model.type","模型类型"),children:_.map(Ee=>e.jsx("button",{className:Ee.active?"on":"",type:"button",disabled:Ee.disabled,title:Ee.title,onClick:Ee.onSelect,children:Ee.label},Ee.id))}),e.jsx("span",{className:"top-sp"}),e.jsxs("div",{className:"v12-route-cluster",children:[e.jsxs("button",{className:"mini-fab route-gallery",type:"button",disabled:!ge,onClick:lt,title:o("studio.nav.gallery","图鉴"),"aria-label":o("studio.nav.gallery","图鉴"),children:[e.jsx("i",{children:e.jsx("img",{src:Bm,alt:""})}),e.jsx("span",{children:o("studio.nav.gallery","图鉴")})]}),e.jsxs("button",{className:"mini-fab route-restaurant",type:"button",disabled:!ge,onClick:re,title:o("studio.nav.restaurant","宴会厅"),"aria-label":o("studio.nav.restaurant","宴会厅"),children:[e.jsx("i",{children:e.jsx("img",{src:$m,alt:""})}),e.jsx("span",{children:o("studio.nav.restaurant","宴会厅")})]}),e.jsxs("button",{className:"mini-fab route-creator",type:"button",onClick:Be,title:"Creator","aria-label":"Creator",children:[e.jsx("i",{children:e.jsx("img",{src:Hm,alt:""})}),e.jsx("span",{children:"Creator"})]}),e.jsxs("button",{className:"mini-fab utility-import",type:"button",onClick:Ge,title:o("studio.action.import","导入"),"aria-label":o("studio.action.import","导入"),children:[e.jsx("i",{children:e.jsx("img",{src:NS,alt:""})}),e.jsx("span",{children:o("studio.action.import","导入")})]})]}),e.jsxs("button",{className:"g-btn btn-export",type:"button","aria-label":An,title:An,disabled:Ye,onClick:nt,children:[e.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[e.jsx("path",{d:"M12 3v12M7 10l5 5 5-5"}),e.jsx("path",{d:"M5 19h14"})]}),e.jsx("span",{children:An})]}),e.jsxs("button",{className:"mini-fab utility-settings",type:"button",onClick:fn,"aria-label":o("studio.action.settings","设置"),children:[e.jsx("i",{children:e.jsx("img",{className:"v12-settings-img",src:IS,alt:""})}),e.jsx("span",{children:o("studio.action.settings","设置")})]})]}),e.jsx("nav",{className:"rail","aria-label":o("studio.panel.tabs_label","Studio 工具"),children:LS.map(Ee=>e.jsxs("button",{"data-tool":Ee.id,className:M===Ee.id?"on":"",type:"button","aria-expanded":M===Ee.id,onClick:()=>Ie(Ee.id),children:[e.jsx("i",{"aria-hidden":"true",children:e.jsx("img",{src:Ee.icon,alt:""})}),e.jsx("span",{children:o(Ee.labelKey,Ee.fallback)})]},Ee.id))}),M?e.jsxs("aside",{className:"tool-panel paper","data-tool":M,"aria-label":L,children:[e.jsxs("div",{className:"tp-head",children:[e.jsx("b",{children:L}),O?e.jsx("small",{children:O}):null,e.jsx("button",{className:"x",type:"button",onClick:st,"aria-label":o("studio.settings.close","关闭"),children:"✕"})]}),e.jsx("div",{ref:Ha,className:"tp-body",children:ue})]}):null,e.jsxs("section",{className:"transport paper","aria-label":o("studio.player.label","播放控制"),children:[e.jsxs("button",{id:"chipMotion",className:"t-chip",type:"button",onClick:()=>Ie("motion"),children:[e.jsx("span",{className:"k",children:o("studio.choice.motion","动作")}),e.jsx("b",{title:$,children:$})]}),e.jsxs("button",{id:"btnTimeline",className:oe?"t-ico on":"t-ico",type:"button",onClick:zo,title:o("studio.composition.title","轨道编排"),children:[e.jsx("small",{children:o("studio.composition.trigger_short","轨")}),e.jsx("small",{children:V})]}),e.jsx("button",{className:"t-ico",type:"button",onClick:ht,"aria-label":o("studio.player.previous","上一个动作"),children:e.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{d:"M6.5 5.25h2.75v13.5H6.5zM18 6.4v11.2L10 12z"})})}),e.jsx("button",{className:"t-ico t-main",type:"button",onClick:Nn,"aria-label":T?o("studio.player.pause","暂停"):o("studio.player.play","播放"),children:T?e.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{d:"M7 5.25h3.8v13.5H7zM13.2 5.25H17v13.5h-3.8z"})}):e.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{d:"M8 5.75v12.5L18.2 12z"})})}),e.jsx("button",{className:"t-ico",type:"button",onClick:gi,"aria-label":o("studio.player.next","下一个动作"),children:e.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{d:"M14.75 5.25h2.75v13.5h-2.75zM6 6.4 14 12 6 17.6z"})})}),e.jsxs("div",{className:"pline v12-seek",children:[e.jsx("input",{type:"range",min:0,max:100,value:D,style:{"--seek":`${D}%`},onChange:Ee=>Fo(Number(Ee.target.value)),"aria-label":o("studio.player.progress","播放进度")}),e.jsxs("small",{children:[Y," / ",q]})]}),e.jsxs("button",{id:"chipLook",className:"t-chip",type:"button",onClick:()=>Ie("look"),children:[e.jsx("span",{className:"k",children:o("studio.modern.look_skin","外观 / skin")}),e.jsx("b",{title:G,children:G})]}),e.jsxs("div",{className:"v12-interaction-anchor",children:[e.jsxs("button",{ref:rs,id:"btnInteract",className:z||I?"t-chip on":"t-chip",type:"button","aria-expanded":z,"aria-controls":"v12InteractionPopover",onClick:ve,children:[e.jsx("span",{className:"k",children:o("studio.creator.interaction_mode","互动模式")}),e.jsx("b",{children:I?o("studio.modern.on","开"):o("studio.modern.off","关")})]}),z?e.jsxs("div",{ref:Wa,id:"v12InteractionPopover",className:"mini-pop popB v12-interaction-pop",role:"dialog","aria-label":o("studio.creator.interaction_settings","互动设置"),children:[e.jsx("div",{className:"gtitle",children:o("studio.creator.interaction_settings","互动设置")}),e.jsxs("div",{className:"frow",children:[e.jsx("span",{children:o("studio.creator.interaction_mode","互动模式")}),e.jsx("button",{className:I?"toggle on":"toggle",type:"button",disabled:!P,"aria-pressed":I,onClick:so})]}),e.jsxs("div",{className:"frow",children:[e.jsx("span",{children:o("studio.creator.interaction_sound","互动声音")}),e.jsx("button",{className:de?"toggle on":"toggle",type:"button","aria-pressed":de,onClick:Tn})]}),e.jsxs("div",{className:"frow",children:[e.jsx("span",{children:o("studio.creator.interaction_fx","互动特效")}),e.jsx("button",{className:Se?"toggle on":"toggle",type:"button","aria-pressed":Se,onClick:Ul})]}),e.jsxs("div",{className:"frow",children:[e.jsx("span",{children:o("studio.creator.interaction_voice_language","语音语言")}),e.jsxs("div",{className:"preset-row",children:[e.jsx("button",{className:F==="ko"?"preset on":"preset",type:"button",onClick:()=>Mn("ko"),children:o("studio.creator.interaction_voice_ko","韩语")}),e.jsx("button",{className:F==="ja"?"preset on":"preset",type:"button",onClick:()=>Mn("ja"),children:o("studio.creator.interaction_voice_ja","日语")})]})]})]}):null]})]}),Ze,J,rn,k,Q,ne]})}const US=192,DS=["Dragon","Elf","Every","Fairy","Furry","Ghost","Screen","Soul","White","Witch","fairy"],FS=JSON.parse('[{"id":"dragon-cave-afternoon","group":"Dragon","label":"cave · afternoon","fileName":"Dragon_cave_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/dragon-cave-afternoon.webp"},{"id":"dragon-coralbeach-afternoon","group":"Dragon","label":"coralbeach · afternoon","fileName":"Dragon_coralbeach_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/dragon-coralbeach-afternoon.webp"},{"id":"dragon-diamondforecourt-afternoon","group":"Dragon","label":"diamondforecourt · afternoon","fileName":"Dragon_diamondforecourt_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/dragon-diamondforecourt-afternoon.webp"},{"id":"dragon-diamondpalace-afternoon","group":"Dragon","label":"diamondpalace · afternoon","fileName":"Dragon_diamondpalace_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/dragon-diamondpalace-afternoon.webp"},{"id":"dragon-gym-afternoon","group":"Dragon","label":"gym · afternoon","fileName":"Dragon_gym_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/dragon-gym-afternoon.webp"},{"id":"dragon-hut-afternoon","group":"Dragon","label":"hut · afternoon","fileName":"Dragon_hut_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/dragon-hut-afternoon.webp"},{"id":"dragon-library-afternoon","group":"Dragon","label":"library · afternoon","fileName":"Dragon_library_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/dragon-library-afternoon.webp"},{"id":"dragon-opalroom-afternoon","group":"Dragon","label":"opalroom · afternoon","fileName":"Dragon_opalroom_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/dragon-opalroom-afternoon.webp"},{"id":"dragon-plaza-afternoon","group":"Dragon","label":"plaza · afternoon","fileName":"Dragon_plaza_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/dragon-plaza-afternoon.webp"},{"id":"dragon-training-afternoon","group":"Dragon","label":"training · afternoon","fileName":"Dragon_training_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/dragon-training-afternoon.webp"},{"id":"dragon-vivicave-afternoon","group":"Dragon","label":"vivicave · afternoon","fileName":"Dragon_vivicave_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/dragon-vivicave-afternoon.webp"},{"id":"elf-apartment-afternoon","group":"Elf","label":"apartment · afternoon","fileName":"Elf_apartment_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/elf-apartment-afternoon.webp"},{"id":"elf-arcade-afternoon","group":"Elf","label":"arcade · afternoon","fileName":"Elf_arcade_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/elf-arcade-afternoon.webp"},{"id":"elf-auction-afternoon","group":"Elf","label":"auction · afternoon","fileName":"Elf_auction_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/elf-auction-afternoon.webp"},{"id":"elf-breadcrumb-afternoon","group":"Elf","label":"BreadCrumb · afternoon","fileName":"Elf_BreadCrumb_afternoon.png","mimeType":"image/png","width":1593,"height":1019,"previewUrl":"/studio-backgrounds/thumbs/elf-breadcrumb-afternoon.webp"},{"id":"elf-breadcrumb-hangarb1","group":"Elf","label":"BreadCrumb · hangarB1","fileName":"Elf_BreadCrumb_hangarB1.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/elf-breadcrumb-hangarb1.webp"},{"id":"elf-breadcrumb-thunderstorm","group":"Elf","label":"BreadCrumb · Thunderstorm","fileName":"Elf_BreadCrumb_Thunderstorm.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/elf-breadcrumb-thunderstorm.webp"},{"id":"elf-broadcast-afternoon","group":"Elf","label":"Broadcast · afternoon","fileName":"Elf_Broadcast_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/elf-broadcast-afternoon.webp"},{"id":"elf-cafestreet-afternoon","group":"Elf","label":"cafestreet · afternoon","fileName":"Elf_cafestreet_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/elf-cafestreet-afternoon.webp"},{"id":"elf-camp-afternoon","group":"Elf","label":"camp · afternoon","fileName":"Elf_camp_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/elf-camp-afternoon.webp"},{"id":"elf-camp-night","group":"Elf","label":"camp · night","fileName":"Elf_camp_night.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/elf-camp-night.webp"},{"id":"elf-chineserestaurant-afternoon","group":"Elf","label":"chineserestaurant · afternoon","fileName":"Elf_chineserestaurant_afternoon.png","mimeType":"image/png","width":1593,"height":1019,"previewUrl":"/studio-backgrounds/thumbs/elf-chineserestaurant-afternoon.webp"},{"id":"elf-city-night","group":"Elf","label":"city · night","fileName":"Elf_city_night.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/elf-city-night.webp"},{"id":"elf-cityhall-afternoon","group":"Elf","label":"cityhall · afternoon","fileName":"Elf_cityhall_afternoon.png","mimeType":"image/png","width":2048,"height":1311,"previewUrl":"/studio-backgrounds/thumbs/elf-cityhall-afternoon.webp"},{"id":"elf-cityhall-night","group":"Elf","label":"cityhall · night","fileName":"Elf_cityhall_night.png","mimeType":"image/png","width":1593,"height":1019,"previewUrl":"/studio-backgrounds/thumbs/elf-cityhall-night.webp"},{"id":"elf-container-afternoon","group":"Elf","label":"container · afternoon","fileName":"Elf_container_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/elf-container-afternoon.webp"},{"id":"elf-conveniencestore-night","group":"Elf","label":"conveniencestore · night","fileName":"Elf_conveniencestore_night.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/elf-conveniencestore-night.webp"},{"id":"elf-deck-sky","group":"Elf","label":"deck · sky","fileName":"Elf_deck_sky.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/elf-deck-sky.webp"},{"id":"elf-factoryarea-afternoon","group":"Elf","label":"factoryarea · afternoon","fileName":"Elf_factoryarea_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/elf-factoryarea-afternoon.webp"},{"id":"elf-forest-afternoon","group":"Elf","label":"forest · afternoon","fileName":"Elf_forest_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/elf-forest-afternoon.webp"},{"id":"elf-forest-night","group":"Elf","label":"forest · night","fileName":"Elf_forest_night.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/elf-forest-night.webp"},{"id":"elf-frostnova-afternoon","group":"Elf","label":"Frostnova · afternoon","fileName":"Elf_Frostnova_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/elf-frostnova-afternoon.webp"},{"id":"elf-frostnovalaboratory-afternoon","group":"Elf","label":"Frostnovalaboratory · afternoon","fileName":"Elf_Frostnovalaboratory_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/elf-frostnovalaboratory-afternoon.webp"},{"id":"elf-frostnovaroom-afternoon","group":"Elf","label":"Frostnovaroom · afternoon","fileName":"Elf_Frostnovaroom_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/elf-frostnovaroom-afternoon.webp"},{"id":"elf-gym-afternoon","group":"Elf","label":"gym · afternoon","fileName":"Elf_gym_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/elf-gym-afternoon.webp"},{"id":"elf-hangar-afternoon","group":"Elf","label":"hangar · afternoon","fileName":"Elf_hangar_afternoon.png","mimeType":"image/png","width":1593,"height":1021,"previewUrl":"/studio-backgrounds/thumbs/elf-hangar-afternoon.webp"},{"id":"elf-hangarb1-afternoon","group":"Elf","label":"HangarB1 · afternoon","fileName":"Elf_HangarB1_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/elf-hangarb1-afternoon.webp"},{"id":"elf-highway-afternoon","group":"Elf","label":"highway · afternoon","fileName":"Elf_highway_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/elf-highway-afternoon.webp"},{"id":"elf-hospital-afternoon","group":"Elf","label":"hospital · afternoon","fileName":"Elf_hospital_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/elf-hospital-afternoon.webp"},{"id":"elf-hospitalhallway-afternoon","group":"Elf","label":"hospitalhallway · afternoon","fileName":"Elf_hospitalhallway_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/elf-hospitalhallway-afternoon.webp"},{"id":"elf-hospitalroom-afternoon","group":"Elf","label":"hospitalroom · afternoon","fileName":"Elf_hospitalroom_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/elf-hospitalroom-afternoon.webp"},{"id":"elf-hospitalroom-night","group":"Elf","label":"hospitalroom · night","fileName":"Elf_hospitalroom_night.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/elf-hospitalroom-night.webp"},{"id":"elf-hydropowerplant-afternoon","group":"Elf","label":"hydropowerplant · afternoon","fileName":"Elf_hydropowerplant_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/elf-hydropowerplant-afternoon.webp"},{"id":"elf-lab-afternoon","group":"Elf","label":"lab · afternoon","fileName":"Elf_lab_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/elf-lab-afternoon.webp"},{"id":"elf-laboratory-right","group":"Elf","label":"laboratory · right","fileName":"Elf_laboratory_right.png","mimeType":"image/png","width":1593,"height":1019,"previewUrl":"/studio-backgrounds/thumbs/elf-laboratory-right.webp"},{"id":"elf-lorneoffice-afternoon","group":"Elf","label":"lorneoffice · afternoon","fileName":"Elf_lorneoffice_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/elf-lorneoffice-afternoon.webp"},{"id":"elf-lorneoffice-night","group":"Elf","label":"lorneoffice · night","fileName":"Elf_lorneoffice_night.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/elf-lorneoffice-night.webp"},{"id":"elf-monatium-afternoon","group":"Elf","label":"monatium · afternoon","fileName":"Elf_monatium_afternoon.png","mimeType":"image/png","width":1593,"height":1019,"previewUrl":"/studio-backgrounds/thumbs/elf-monatium-afternoon.webp"},{"id":"elf-monatium-fire","group":"Elf","label":"monatium · fire","fileName":"Elf_monatium_fire.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/elf-monatium-fire.webp"},{"id":"elf-monatium-night","group":"Elf","label":"monatium · night","fileName":"Elf_monatium_night.png","mimeType":"image/png","width":1593,"height":1019,"previewUrl":"/studio-backgrounds/thumbs/elf-monatium-night.webp"},{"id":"elf-monatium-ruins","group":"Elf","label":"monatium · ruins","fileName":"Elf_monatium_ruins.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/elf-monatium-ruins.webp"},{"id":"elf-monatiumbackstreet-afternoon","group":"Elf","label":"monatiumbackstreet · afternoon","fileName":"Elf_monatiumbackstreet_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/elf-monatiumbackstreet-afternoon.webp"},{"id":"elf-monatiumbackstreet-night","group":"Elf","label":"monatiumbackstreet · night","fileName":"Elf_monatiumbackstreet_night.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/elf-monatiumbackstreet-night.webp"},{"id":"elf-muteai-afternoon","group":"Elf","label":"MuteAI · afternoon","fileName":"Elf_MuteAI_afternoon.png","mimeType":"image/png","width":2048,"height":1311,"previewUrl":"/studio-backgrounds/thumbs/elf-muteai-afternoon.webp"},{"id":"elf-office-afternoon","group":"Elf","label":"office · afternoon","fileName":"Elf_office_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/elf-office-afternoon.webp"},{"id":"elf-pcroom-night","group":"Elf","label":"pcroom · night","fileName":"Elf_pcroom_night.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/elf-pcroom-night.webp"},{"id":"elf-prison-afternoon","group":"Elf","label":"prison · afternoon","fileName":"Elf_prison_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/elf-prison-afternoon.webp"},{"id":"elf-r41mayorroom-afternoon","group":"Elf","label":"R41mayorroom · afternoon","fileName":"Elf_R41mayorroom_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/elf-r41mayorroom-afternoon.webp"},{"id":"elf-r41portal-broken","group":"Elf","label":"R41portal · broken","fileName":"Elf_R41portal_broken.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/elf-r41portal-broken.webp"},{"id":"elf-r41portal-fine","group":"Elf","label":"R41portal · fine","fileName":"Elf_R41portal_fine.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/elf-r41portal-fine.webp"},{"id":"elf-renewahouse-afternoon","group":"Elf","label":"renewahouse · afternoon","fileName":"Elf_renewahouse_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/elf-renewahouse-afternoon.webp"},{"id":"elf-ristyroom-night","group":"Elf","label":"ristyroom · night","fileName":"Elf_ristyroom_night.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/elf-ristyroom-night.webp"},{"id":"elf-sf-afternoon","group":"Elf","label":"sf · afternoon","fileName":"Elf_sf_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/elf-sf-afternoon.webp"},{"id":"elf-situationroom-night","group":"Elf","label":"situationroom · night","fileName":"Elf_situationroom_night.png","mimeType":"image/png","width":1593,"height":1019,"previewUrl":"/studio-backgrounds/thumbs/elf-situationroom-night.webp"},{"id":"elf-space-afternoon","group":"Elf","label":"space · afternoon","fileName":"Elf_space_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/elf-space-afternoon.webp"},{"id":"elf-spaceship-afternoon","group":"Elf","label":"spaceship · afternoon","fileName":"Elf_spaceship_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/elf-spaceship-afternoon.webp"},{"id":"elf-stadium-afternoon","group":"Elf","label":"stadium · afternoon","fileName":"Elf_stadium_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/elf-stadium-afternoon.webp"},{"id":"elf-stage-afternoon","group":"Elf","label":"stage · afternoon","fileName":"Elf_stage_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/elf-stage-afternoon.webp"},{"id":"elf-thermalpowerplant-afternoon","group":"Elf","label":"thermalpowerplant · afternoon","fileName":"Elf_thermalpowerplant_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/elf-thermalpowerplant-afternoon.webp"},{"id":"elf-thermalpowerplant-night","group":"Elf","label":"thermalpowerplant · night","fileName":"Elf_thermalpowerplant_night.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/elf-thermalpowerplant-night.webp"},{"id":"elf-undergroundroom-afternoon","group":"Elf","label":"undergroundroom · afternoon","fileName":"Elf_undergroundroom_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/elf-undergroundroom-afternoon.webp"},{"id":"elf-undergstage-afternoon","group":"Elf","label":"undergstage · afternoon","fileName":"Elf_undergstage_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/elf-undergstage-afternoon.webp"},{"id":"elf-waitingroom-afternoon","group":"Elf","label":"waitingroom · afternoon","fileName":"Elf_waitingroom_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/elf-waitingroom-afternoon.webp"},{"id":"elf-wheelhouse-afternoon","group":"Elf","label":"wheelhouse · afternoon","fileName":"Elf_wheelhouse_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/elf-wheelhouse-afternoon.webp"},{"id":"elf-workroom-afternoon","group":"Elf","label":"workroom · afternoon","fileName":"Elf_workroom_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/elf-workroom-afternoon.webp"},{"id":"elf-xionroom-afternoon","group":"Elf","label":"xionroom · afternoon","fileName":"Elf_xionroom_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/elf-xionroom-afternoon.webp"},{"id":"every-sky-afternoon","group":"Every","label":"sky · afternoon","fileName":"Every_sky_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/every-sky-afternoon.webp"},{"id":"fairy-aprilfoolsday-afternoon","group":"Fairy","label":"aprilfoolsday · afternoon","fileName":"Fairy_aprilfoolsday_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/fairy-aprilfoolsday-afternoon.webp"},{"id":"fairy-archives-afternoon","group":"Fairy","label":"Archives · afternoon","fileName":"Fairy_Archives_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/fairy-archives-afternoon.webp"},{"id":"fairy-armorworld-ruins","group":"Fairy","label":"armorworld · ruins","fileName":"Fairy_armorworld_ruins.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/fairy-armorworld-ruins.webp"},{"id":"fairy-bakery-afternoon","group":"Fairy","label":"bakery · afternoon","fileName":"Fairy_bakery_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/fairy-bakery-afternoon.webp"},{"id":"fairy-bakery-fire","group":"Fairy","label":"bakery · fire","fileName":"Fairy_bakery_fire.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/fairy-bakery-fire.webp"},{"id":"fairy-bakery-night","group":"Fairy","label":"bakery · night","fileName":"Fairy_bakery_night.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/fairy-bakery-night.webp"},{"id":"fairy-bakery-ruins","group":"Fairy","label":"bakery · ruins","fileName":"Fairy_bakery_ruins.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/fairy-bakery-ruins.webp"},{"id":"fairy-basicbakery-afternoon","group":"Fairy","label":"basicbakery · afternoon","fileName":"Fairy_basicbakery_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/fairy-basicbakery-afternoon.webp"},{"id":"fairy-cave-ruins","group":"Fairy","label":"cave · ruins","fileName":"Fairy_cave_ruins.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/fairy-cave-ruins.webp"},{"id":"fairy-cellar-fire","group":"Fairy","label":"cellar · fire","fileName":"Fairy_cellar_fire.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/fairy-cellar-fire.webp"},{"id":"fairy-cinema-afternoon","group":"Fairy","label":"cinema · afternoon","fileName":"Fairy_cinema_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/fairy-cinema-afternoon.webp"},{"id":"fairy-corridor-ruins","group":"Fairy","label":"corridor · ruins","fileName":"Fairy_corridor_ruins.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/fairy-corridor-ruins.webp"},{"id":"fairy-forest-afternoon","group":"Fairy","label":"forest · afternoon","fileName":"Fairy_forest_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/fairy-forest-afternoon.webp"},{"id":"fairy-forest-night","group":"Fairy","label":"forest · night","fileName":"Fairy_forest_night.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/fairy-forest-night.webp"},{"id":"fairy-guestroom2-afternoon","group":"Fairy","label":"Guestroom2 · afternoon","fileName":"Fairy_Guestroom2_afternoon.png","mimeType":"image/png","width":1593,"height":1019,"previewUrl":"/studio-backgrounds/thumbs/fairy-guestroom2-afternoon.webp"},{"id":"fairy-guestroom2-night","group":"Fairy","label":"Guestroom2 · night","fileName":"Fairy_Guestroom2_night.png","mimeType":"image/png","width":1593,"height":1019,"previewUrl":"/studio-backgrounds/thumbs/fairy-guestroom2-night.webp"},{"id":"fairy-guestroom-afternoon","group":"Fairy","label":"Guestroom · afternoon","fileName":"Fairy_Guestroom_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/fairy-guestroom-afternoon.webp"},{"id":"fairy-guestroom-night","group":"fairy","label":"Guestroom · night","fileName":"fairy_Guestroom_night.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/fairy-guestroom-night.webp"},{"id":"fairy-house-afternoon","group":"Fairy","label":"house · afternoon","fileName":"Fairy_house_afternoon.png","mimeType":"image/png","width":2048,"height":1311,"previewUrl":"/studio-backgrounds/thumbs/fairy-house-afternoon.webp"},{"id":"fairy-innercourt-night","group":"Fairy","label":"innercourt · night","fileName":"Fairy_innercourt_night.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/fairy-innercourt-night.webp"},{"id":"fairy-innercourt-oneyear","group":"Fairy","label":"innercourt · oneyear","fileName":"Fairy_innercourt_oneyear.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/fairy-innercourt-oneyear.webp"},{"id":"fairy-innercourt-ruins","group":"Fairy","label":"innercourt · ruins","fileName":"Fairy_innercourt_ruins.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/fairy-innercourt-ruins.webp"},{"id":"fairy-kingdom-1st","group":"Fairy","label":"kingdom · 1st","fileName":"Fairy_kingdom_1st.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/fairy-kingdom-1st.webp"},{"id":"fairy-kingdom-afternoon","group":"Fairy","label":"kingdom · afternoon","fileName":"Fairy_kingdom_afternoon.png","mimeType":"image/png","width":1593,"height":1019,"previewUrl":"/studio-backgrounds/thumbs/fairy-kingdom-afternoon.webp"},{"id":"fairy-kingdom-fire","group":"Fairy","label":"kingdom · fire","fileName":"Fairy_kingdom_fire.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/fairy-kingdom-fire.webp"},{"id":"fairy-kingdom-monstrosity","group":"Fairy","label":"kingdom · monstrosity","fileName":"Fairy_kingdom_monstrosity.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/fairy-kingdom-monstrosity.webp"},{"id":"fairy-kingdom-night","group":"Fairy","label":"kingdom · night","fileName":"Fairy_kingdom_night.png","mimeType":"image/png","width":1593,"height":1019,"previewUrl":"/studio-backgrounds/thumbs/fairy-kingdom-night.webp"},{"id":"fairy-kingdom-ruins","group":"Fairy","label":"kingdom · ruins","fileName":"Fairy_kingdom_ruins.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/fairy-kingdom-ruins.webp"},{"id":"fairy-kingdom-ruinsfire","group":"Fairy","label":"kingdom · ruinsfire","fileName":"Fairy_kingdom_ruinsfire.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/fairy-kingdom-ruinsfire.webp"},{"id":"fairy-kingdom-snow","group":"Fairy","label":"kingdom · snow","fileName":"Fairy_kingdom_snow.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/fairy-kingdom-snow.webp"},{"id":"fairy-marihouse-afternoon","group":"Fairy","label":"marihouse · afternoon","fileName":"Fairy_marihouse_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/fairy-marihouse-afternoon.webp"},{"id":"fairy-mayohouse-afternoon","group":"Fairy","label":"mayohouse · afternoon","fileName":"Fairy_mayohouse_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/fairy-mayohouse-afternoon.webp"},{"id":"fairy-moon-night","group":"Fairy","label":"moon · night","fileName":"Fairy_moon_night.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/fairy-moon-night.webp"},{"id":"fairy-officehouse-afternoon","group":"Fairy","label":"officehouse · afternoon","fileName":"Fairy_officehouse_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/fairy-officehouse-afternoon.webp"},{"id":"fairy-officehouse-night","group":"Fairy","label":"officehouse · night","fileName":"Fairy_officehouse_night.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/fairy-officehouse-night.webp"},{"id":"fairy-prison-night","group":"Fairy","label":"prison · night","fileName":"Fairy_prison_night.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/fairy-prison-night.webp"},{"id":"fairy-restarea-ruins","group":"Fairy","label":"restarea · ruins","fileName":"Fairy_restarea_ruins.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/fairy-restarea-ruins.webp"},{"id":"fairy-restaurant-afternoon","group":"Fairy","label":"restaurant · afternoon","fileName":"Fairy_restaurant_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/fairy-restaurant-afternoon.webp"},{"id":"fairy-ricotarestaurant-night","group":"Fairy","label":"ricotarestaurant · night","fileName":"Fairy_ricotarestaurant_night.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/fairy-ricotarestaurant-night.webp"},{"id":"fairy-sign-fire","group":"Fairy","label":"sign · fire","fileName":"Fairy_sign_fire.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/fairy-sign-fire.webp"},{"id":"fairy-soloend-afternoon","group":"Fairy","label":"soloend · afternoon","fileName":"Fairy_soloend_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/fairy-soloend-afternoon.webp"},{"id":"fairy-soloend-gray","group":"Fairy","label":"soloend · gray","fileName":"Fairy_soloend_gray.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/fairy-soloend-gray.webp"},{"id":"fairy-square-afternoon","group":"Fairy","label":"square · afternoon","fileName":"Fairy_square_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/fairy-square-afternoon.webp"},{"id":"fairy-storage-ruins","group":"Fairy","label":"storage · ruins","fileName":"Fairy_storage_ruins.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/fairy-storage-ruins.webp"},{"id":"fairy-street-fire","group":"Fairy","label":"street · fire","fileName":"Fairy_street_fire.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/fairy-street-fire.webp"},{"id":"fairy-tailorshop-afternoon","group":"Fairy","label":"tailorshop · afternoon","fileName":"Fairy_tailorshop_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/fairy-tailorshop-afternoon.webp"},{"id":"fairy-temple-afternoon","group":"Fairy","label":"temple · afternoon","fileName":"Fairy_temple_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/fairy-temple-afternoon.webp"},{"id":"fairy-temple-fire","group":"Fairy","label":"temple · fire","fileName":"Fairy_temple_fire.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/fairy-temple-fire.webp"},{"id":"fairy-temple-gate","group":"Fairy","label":"temple · gate","fileName":"Fairy_temple_gate.png","mimeType":"image/png","width":1593,"height":1019,"previewUrl":"/studio-backgrounds/thumbs/fairy-temple-gate.webp"},{"id":"fairy-temple-night","group":"Fairy","label":"temple · night","fileName":"Fairy_temple_night.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/fairy-temple-night.webp"},{"id":"fairy-theater-afternoon","group":"Fairy","label":"theater · afternoon","fileName":"Fairy_theater_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/fairy-theater-afternoon.webp"},{"id":"fairy-throne2-ruins","group":"Fairy","label":"throne2 · ruins","fileName":"Fairy_throne2_ruins.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/fairy-throne2-ruins.webp"},{"id":"fairy-throne-ruins","group":"Fairy","label":"throne · ruins","fileName":"Fairy_throne_ruins.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/fairy-throne-ruins.webp"},{"id":"fairy-treeroom-fire","group":"Fairy","label":"treeroom · fire","fileName":"Fairy_treeroom_fire.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/fairy-treeroom-fire.webp"},{"id":"fairy-wilderness-afternoon","group":"Fairy","label":"wilderness · afternoon","fileName":"Fairy_wilderness_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/fairy-wilderness-afternoon.webp"},{"id":"fairy-wilderness-prairie","group":"Fairy","label":"wilderness · prairie","fileName":"Fairy_wilderness_prairie.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/fairy-wilderness-prairie.webp"},{"id":"furry-brokenaltar-afternoon","group":"Furry","label":"brokenaltar · afternoon","fileName":"Furry_brokenaltar_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/furry-brokenaltar-afternoon.webp"},{"id":"furry-brokenaltar-nobook","group":"Furry","label":"brokenaltar · nobook","fileName":"Furry_brokenaltar_nobook.png","mimeType":"image/png","width":2048,"height":1311,"previewUrl":"/studio-backgrounds/thumbs/furry-brokenaltar-nobook.webp"},{"id":"furry-butterhouse-afternoon","group":"Furry","label":"butterhouse · afternoon","fileName":"Furry_butterhouse_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/furry-butterhouse-afternoon.webp"},{"id":"furry-forest-afternoon","group":"Furry","label":"forest · afternoon","fileName":"Furry_forest_afternoon.png","mimeType":"image/png","width":1593,"height":1019,"previewUrl":"/studio-backgrounds/thumbs/furry-forest-afternoon.webp"},{"id":"furry-forest-fire","group":"Furry","label":"forest · fire","fileName":"Furry_forest_fire.png","mimeType":"image/png","width":1593,"height":1019,"previewUrl":"/studio-backgrounds/thumbs/furry-forest-fire.webp"},{"id":"furry-forest-night","group":"Furry","label":"forest · night","fileName":"Furry_forest_night.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/furry-forest-night.webp"},{"id":"furry-forest-sunset","group":"Furry","label":"forest · sunset","fileName":"Furry_forest_sunset.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/furry-forest-sunset.webp"},{"id":"furry-forge-afternoon","group":"Furry","label":"forge · afternoon","fileName":"Furry_forge_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/furry-forge-afternoon.webp"},{"id":"furry-garden-afternoon","group":"Furry","label":"garden · afternoon","fileName":"Furry_garden_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/furry-garden-afternoon.webp"},{"id":"furry-house-afternoon","group":"Furry","label":"house · afternoon","fileName":"Furry_house_afternoon.png","mimeType":"image/png","width":1593,"height":1019,"previewUrl":"/studio-backgrounds/thumbs/furry-house-afternoon.webp"},{"id":"furry-kommyhouse-afternoon","group":"Furry","label":"kommyhouse · afternoon","fileName":"Furry_kommyhouse_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/furry-kommyhouse-afternoon.webp"},{"id":"furry-magohouse-afternoon","group":"Furry","label":"magohouse · afternoon","fileName":"Furry_magohouse_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/furry-magohouse-afternoon.webp"},{"id":"furry-oldtown-night","group":"Furry","label":"oldtown · night","fileName":"Furry_oldtown_night.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/furry-oldtown-night.webp"},{"id":"furry-pirateship-afternoon","group":"Furry","label":"pirateship · afternoon","fileName":"Furry_pirateship_afternoon.png","mimeType":"image/png","width":1593,"height":1019,"previewUrl":"/studio-backgrounds/thumbs/furry-pirateship-afternoon.webp"},{"id":"furry-pirateship-prison","group":"Furry","label":"pirateship · prison","fileName":"Furry_pirateship_prison.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/furry-pirateship-prison.webp"},{"id":"furry-town-afternoon","group":"Furry","label":"town · afternoon","fileName":"Furry_town_afternoon.png","mimeType":"image/png","width":1593,"height":1019,"previewUrl":"/studio-backgrounds/thumbs/furry-town-afternoon.webp"},{"id":"furry-town-night","group":"Furry","label":"town · night","fileName":"Furry_town_night.png","mimeType":"image/png","width":1593,"height":1019,"previewUrl":"/studio-backgrounds/thumbs/furry-town-night.webp"},{"id":"ghost-dimension-afternoon","group":"Ghost","label":"dimension · afternoon","fileName":"Ghost_dimension_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/ghost-dimension-afternoon.webp"},{"id":"ghost-rimhouse-afternoon","group":"Ghost","label":"rimhouse · afternoon","fileName":"Ghost_rimhouse_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/ghost-rimhouse-afternoon.webp"},{"id":"ghost-rimhouse-night","group":"Ghost","label":"rimhouse · night","fileName":"Ghost_rimhouse_night.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/ghost-rimhouse-night.webp"},{"id":"ghost-sellinehouse-afternoon","group":"Ghost","label":"sellinehouse · afternoon","fileName":"Ghost_sellinehouse_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/ghost-sellinehouse-afternoon.webp"},{"id":"ghost-tarothouse-afternoon","group":"Ghost","label":"tarothouse · afternoon","fileName":"Ghost_tarothouse_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/ghost-tarothouse-afternoon.webp"},{"id":"ghost-town-afternoon","group":"Ghost","label":"town · afternoon","fileName":"Ghost_town_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/ghost-town-afternoon.webp"},{"id":"ghost-town-night","group":"Ghost","label":"town · night","fileName":"Ghost_town_night.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/ghost-town-night.webp"},{"id":"screen-screen-screen","group":"Screen","label":"screen · screen","fileName":"Screen_screen_screen.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/screen-screen-screen.webp"},{"id":"soul-cave-afternoon","group":"Soul","label":"cave · afternoon","fileName":"Soul_cave_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/soul-cave-afternoon.webp"},{"id":"soul-cave-night","group":"Soul","label":"cave · night","fileName":"Soul_cave_night.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/soul-cave-night.webp"},{"id":"soul-cavelake-afternoon","group":"Soul","label":"cavelake · afternoon","fileName":"Soul_cavelake_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/soul-cavelake-afternoon.webp"},{"id":"soul-container-afternoon","group":"Soul","label":"container · afternoon","fileName":"Soul_container_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/soul-container-afternoon.webp"},{"id":"soul-faraway-afternoon","group":"Soul","label":"faraway · afternoon","fileName":"Soul_faraway_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/soul-faraway-afternoon.webp"},{"id":"soul-furrysoullake-afternoon","group":"Soul","label":"furrysoullake · afternoon","fileName":"Soul_furrysoullake_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/soul-furrysoullake-afternoon.webp"},{"id":"soul-garden-afternoon","group":"Soul","label":"garden · afternoon","fileName":"Soul_garden_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/soul-garden-afternoon.webp"},{"id":"soul-lavacave-afternoon","group":"Soul","label":"lavacave · afternoon","fileName":"Soul_lavacave_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/soul-lavacave-afternoon.webp"},{"id":"soul-sea-afternoon","group":"Soul","label":"sea · afternoon","fileName":"Soul_sea_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/soul-sea-afternoon.webp"},{"id":"soul-soullake-afternoon","group":"Soul","label":"soullake · afternoon","fileName":"Soul_soullake_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/soul-soullake-afternoon.webp"},{"id":"soul-soullake-daytime","group":"Soul","label":"soullake · daytime","fileName":"Soul_soullake_daytime.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/soul-soullake-daytime.webp"},{"id":"soul-soullake-rain","group":"Soul","label":"soullake · rain","fileName":"Soul_soullake_rain.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/soul-soullake-rain.webp"},{"id":"soul-soullakein-afternoon","group":"Soul","label":"soullakein · afternoon","fileName":"Soul_soullakein_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/soul-soullakein-afternoon.webp"},{"id":"soul-soullakesnow-snow","group":"Soul","label":"soullakesnow · snow","fileName":"Soul_soullakesnow_snow.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/soul-soullakesnow-snow.webp"},{"id":"soul-soulmountain-afternoon","group":"Soul","label":"soulmountain · afternoon","fileName":"Soul_soulmountain_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/soul-soulmountain-afternoon.webp"},{"id":"soul-soulmountain-night","group":"Soul","label":"soulmountain · night","fileName":"Soul_soulmountain_night.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/soul-soulmountain-night.webp"},{"id":"soul-soulmountaintop-afternoon","group":"Soul","label":"soulmountaintop · afternoon","fileName":"Soul_soulmountaintop_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/soul-soulmountaintop-afternoon.webp"},{"id":"soul-spa-afternoon","group":"Soul","label":"spa · afternoon","fileName":"Soul_spa_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/soul-spa-afternoon.webp"},{"id":"soul-tomb-afternoon","group":"Soul","label":"tomb · afternoon","fileName":"Soul_tomb_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/soul-tomb-afternoon.webp"},{"id":"soul-volcanika-afternoon","group":"Soul","label":"volcanika · afternoon","fileName":"Soul_volcanika_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/soul-volcanika-afternoon.webp"},{"id":"soul-volcanikaseashore-afternoon","group":"Soul","label":"volcanikaseashore · afternoon","fileName":"Soul_volcanikaseashore_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/soul-volcanikaseashore-afternoon.webp"},{"id":"white-white-white","group":"White","label":"white · white","fileName":"White_white_white.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/white-white-white.webp"},{"id":"witch-beasthall-afternoon","group":"Witch","label":"BeastHall · afternoon","fileName":"Witch_BeastHall_afternoon.png","mimeType":"image/png","width":1593,"height":1019,"previewUrl":"/studio-backgrounds/thumbs/witch-beasthall-afternoon.webp"},{"id":"witch-castle-afternoon","group":"Witch","label":"Castle · afternoon","fileName":"Witch_Castle_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/witch-castle-afternoon.webp"},{"id":"witch-corridor-ruins","group":"Witch","label":"corridor · ruins","fileName":"Witch_corridor_ruins.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/witch-corridor-ruins.webp"},{"id":"witch-hall-afternoon","group":"Witch","label":"hall · afternoon","fileName":"Witch_hall_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/witch-hall-afternoon.webp"},{"id":"witch-library-afternoon","group":"Witch","label":"library · afternoon","fileName":"Witch_library_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/witch-library-afternoon.webp"},{"id":"witch-makashahouse-afternoon","group":"Witch","label":"Makashahouse · afternoon","fileName":"Witch_Makashahouse_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/witch-makashahouse-afternoon.webp"},{"id":"witch-room-ruins","group":"Witch","label":"room · ruins","fileName":"Witch_room_ruins.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/witch-room-ruins.webp"},{"id":"witch-sherumhouse-afternoon","group":"Witch","label":"sherumhouse · afternoon","fileName":"Witch_sherumhouse_afternoon.png","mimeType":"image/png","width":1593,"height":1019,"previewUrl":"/studio-backgrounds/thumbs/witch-sherumhouse-afternoon.webp"},{"id":"witch-shop-afternoon","group":"Witch","label":"shop · afternoon","fileName":"Witch_shop_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/witch-shop-afternoon.webp"},{"id":"witch-throne-ruins","group":"Witch","label":"throne · ruins","fileName":"Witch_throne_ruins.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/witch-throne-ruins.webp"},{"id":"witch-town-afternoon","group":"Witch","label":"town · afternoon","fileName":"Witch_town_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/witch-town-afternoon.webp"},{"id":"witch-ufc-afternoon","group":"Witch","label":"ufc · afternoon","fileName":"Witch_ufc_afternoon.png","mimeType":"image/png","width":1593,"height":1020,"previewUrl":"/studio-backgrounds/thumbs/witch-ufc-afternoon.webp"}]'),zS={count:US,groups:DS,backgrounds:FS},Cc=zS,gc="builtin-background:",OS="v1";function Wm(o){return o.trim().replace(/\/+$/u,"")}function BS(o){return`${"./".replace(/\/?$/u,"/")}${o.replace(/^\/+/,"")}`}const Ym=Cc.backgrounds,nm=Cc.groups,Vd=Cc.count,$S=Wm("https://assets.927927927.xyz/studio-backgrounds/full".trim()?"https://assets.927927927.xyz/studio-backgrounds/full":""),Gm=$S,HS=new Map(Ym.map(o=>[o.id,o]));function WS(o){return`${gc}${o}`}function gl(o){return o!=null&&o.startsWith(gc)?HS.get(o.slice(gc.length))??null:null}function fc(o){return BS(o.previewUrl)}function YS(o,p=Gm){const g=Wm(p);return g?`${g}/${encodeURIComponent(o.fileName)}`:fc(o)}function GS(o){const p=o.indexOf("#"),g=p>=0?o.slice(p):"",f=p>=0?o.slice(0,p):o,i=f.includes("?")?"&":"?";return`${f}${i}studio-cors=${OS}${g}`}async function KS(o,p=Gm){const g=YS(o,p),f=GS(g),i=await fetch(f,{credentials:"omit",mode:"cors"});if(!i.ok)throw new Error(`内置背景原图读取失败（HTTP ${i.status}）。`);const r=await i.blob();if(r.size<=0)throw new Error("内置背景原图读取失败（文件为空）。");return r}const bc="trickcal.studio.exportQueue.v1",Km="trickcal.studio.scene.v2",Xm="trickcal.studio.uiMode.v1",im="trickcal-studio-project",om=1,Xr=1,qr=4096,Vr=1,am=24,rm=2048,sm=3072,lm=450,XS=900,xc=.1,vc=60,Cl=3,Jr=.1,Qr=10,Zr=0,es=60,qm=10,qS=500,Vm=2e3,Ba=1,$a=5e3,ci=1,eo=8192,Jm=0,Qm=100,Fa=1,za=2e3,Zm=0,eh=100,Dr=10,Fr=20,VS=3,li="model-layer-1",dm=`official-resource-display-${$g}-collection-${yS}`,to="background-layer-1",Jd=4,cm=8,pi=60,kc=7,Vt=.05,Qd=.15,JS=.1,yc=320,wc=220;function zr(o,p){return`${o}::${p}`}function Zd(){try{const o=window.localStorage.getItem(bc);if(!o)return null;const p=JSON.parse(o);return p.version===1?p:null}catch{return null}}function Ea(o){try{if(!o){window.localStorage.removeItem(bc);return}window.localStorage.setItem(bc,JSON.stringify(o))}catch{}}function Or(){try{const o=window.localStorage.getItem(Km);if(!o)return null;const p=JSON.parse(o);return p.version===2?p:null}catch{return null}}function pm(o){try{window.localStorage.setItem(Km,JSON.stringify(o))}catch{}}function QS(){if(typeof window>"u")return"classic";try{return window.localStorage.getItem(Xm)==="modern"?"modern":"classic"}catch{return"classic"}}function ZS(o){try{window.localStorage.setItem(Xm,o)}catch{}}function um(o,p){return p===void 0?o:`${o}:frame:${String(p+1).padStart(4,"0")}`}function Tl(o,p,g={}){return{id:o,resourceId:p.id,animationName:g.animationName??p.motion,skinName:g.skinName??p.skin,transform:qe(g.transform),visible:g.visible??!0,locked:g.locked??!1,playbackSpeed:Bt(g.playbackSpeed),timeOffset:an(g.timeOffset),targetLockAspectRatio:g.targetLockAspectRatio??!0,attachmentVisibility:g.attachmentVisibility??{},attachmentReplacements:g.attachmentReplacements??{},attachmentAdjustments:g.attachmentAdjustments??{}}}function fl({id:o,resource:p,selectedMotion:g,selectedSkin:f,modelTransform:i,visible:r,locked:S,playbackSpeed:_,timeOffset:M,targetLockAspectRatio:L,attachmentVisibility:O,attachmentReplacements:N,attachmentAdjustments:T}){return Tl(o,p,{animationName:g,skinName:f,transform:i,visible:r,locked:S,playbackSpeed:_,timeOffset:M,targetLockAspectRatio:L,attachmentVisibility:O,attachmentReplacements:N,attachmentAdjustments:T})}function Pi(o){return xe(o,100,Jm,Qm)}function on(o,p={}){var r,S;const g=((r=p.fileName)==null?void 0:r.toLowerCase())??"",f=((S=p.mimeType)==null?void 0:S.toLowerCase())??"",i=p.mode==="upload"&&(f==="image/gif"||g.endsWith(".gif"))?"dynamic":"static";return{id:o,name:p.name??"图片层",mode:p.mode??"transparent",color:p.color??"#090d0f",image:p.image??null,assetId:p.assetId??null,fileName:p.fileName??null,mimeType:p.mimeType??null,transform:qe(p.transform),visible:p.visible??!0,locked:p.locked??!1,opacity:Pi(p.opacity),fitMode:p.fitMode??"contain",width:Number.isFinite(p.width)?Sn(p.width):null,height:Number.isFinite(p.height)?Sn(p.height):null,naturalWidth:Number.isFinite(p.naturalWidth)?Sn(p.naturalWidth):null,naturalHeight:Number.isFinite(p.naturalHeight)?Sn(p.naturalHeight):null,lockAspectRatio:p.lockAspectRatio??!0,playbackMode:p.playbackMode??i,playbackSpeed:Bt(p.playbackSpeed),timeOffset:an(p.timeOffset),followTimeline:p.followTimeline??!0}}function Do(o){return`${o.type}:${o.id}`}const mm=new Set(["图片层","Image layer","이미지 레이어","画像レイヤー"]);function hm(o){const p=o.trim();return mm.has(p)?!0:[...mm].some(g=>p===`${g} 1`||/^.+\s+\d+$/.test(p)&&p.startsWith(`${g} `))}function gm(o,p){return o.length!==p.length?!1:o.every((g,f)=>{var i,r;return g.type===((i=p[f])==null?void 0:i.type)&&g.id===((r=p[f])==null?void 0:r.id)})}function Po(o,p,g){const f=new Set(p.map(_=>_.id)),i=new Set(g.map(_=>_.id)),r=new Set,S=[];return o.forEach(_=>{const M=_.type==="background"&&f.has(_.id)||_.type==="model"&&i.has(_.id),L=Do(_);M&&!r.has(L)&&(S.push(_),r.add(L))}),p.forEach(_=>{const M={type:"background",id:_.id},L=Do(M);if(!r.has(L)){const O=S.findIndex(N=>N.type==="model");O>=0?S.splice(O,0,M):S.push(M),r.add(L)}}),g.forEach(_=>{const M={type:"model",id:_.id},L=Do(M);r.has(L)||(S.push(M),r.add(L))}),S}function Ra(o){return o.visible?o.mode==="upload"&&o.image?"image":o.mode==="solid"?"solid":"transparent":"transparent"}function ui(o){var f,i;if(o.mode!=="upload")return!1;const p=((f=o.fileName)==null?void 0:f.toLowerCase())??"";return(((i=o.mimeType)==null?void 0:i.toLowerCase())??"")==="image/gif"||p.endsWith(".gif")}function ec(o){var f;if(!o)return!1;const p=((f=o.fileName)==null?void 0:f.trim().toLowerCase())??"",g=o.src.trim().toLowerCase();return p.endsWith(".gif")||g.startsWith("data:image/gif")}function bl(o){return ui(o)&&o.playbackMode==="dynamic"&&o.followTimeline!==!1}function Br(o){return new Promise((p,g)=>{const f=new Image;f.decoding="async",f.onload=()=>{p({width:Math.max(1,Math.round(f.naturalWidth||f.width||1)),height:Math.max(1,Math.round(f.naturalHeight||f.height||1))})},f.onerror=()=>g(new Error("Image layer size could not be read.")),f.src=o})}function fm(o){return new Promise((p,g)=>{const f=new FileReader;f.onload=()=>p(String(f.result??"")),f.onerror=()=>g(f.error??new Error("PNG data URL could not be created.")),f.readAsDataURL(o)})}function bm({layer:o,playbackTime:p,onDuration:g,className:f,style:i,onPointerDown:r,onNaturalSize:S}){const _=d.useRef(null),M=ui(o),L=d.useMemo(()=>o.image?Mm({assetId:o.assetId,src:o.image,fileName:o.fileName}):"",[o.assetId,o.fileName,o.image]),[O,N]=d.useState(null),[T,D]=d.useState(!1);return d.useEffect(()=>{if(!M||!o.image||!L){N(null),D(!1);return}let Y=!1;return D(!1),Lg({src:o.image,cacheKey:L}).then(q=>{Y||(N(q),g==null||g(q.durationMs/1e3),S==null||S(q.width,q.height))}).catch(()=>{Y||(N(null),D(!0))}),()=>{Y=!0}},[L,M,o.image]),d.useEffect(()=>{if(!M||!O||!_.current)return;const Y=_.current;Y.width!==O.width&&(Y.width=O.width),Y.height!==O.height&&(Y.height=O.height);const q=Y.getContext("2d");if(!q)return;let $=0;const G=o.playbackMode==="dynamic",I=z=>{const P=G?Pg(O,p&&o.followTimeline!==!1?p():z/1e3,o.playbackSpeed,o.timeOffset):O.frames[0];q.clearRect(0,0,Y.width,Y.height),q.drawImage(P.canvas,0,0),G&&($=window.requestAnimationFrame(I))};return I(window.performance.now()),()=>{$&&window.cancelAnimationFrame($)}},[O,M,o.followTimeline,o.playbackMode,o.playbackSpeed,o.timeOffset,p]),o.image?M&&!T?e.jsx("canvas",{ref:_,className:f,style:i,onPointerDown:Y=>r==null?void 0:r(Y),"aria-hidden":"true"}):e.jsx("img",{className:f,src:o.image,alt:"",draggable:!1,style:i,onPointerDown:Y=>r==null?void 0:r(Y),onLoad:Y=>{const q=Y.currentTarget;S==null||S(Math.max(1,Math.round(q.naturalWidth||q.width||1)),Math.max(1,Math.round(q.naturalHeight||q.height||1)))}}):null}const xm=[{id:"all"},{id:"apostle"},{id:"battle"},{id:"aside"},{id:"mini"},{id:"npc"},{id:"pet"},{id:"monster"},{id:"furniture"},{id:"other"}],xl=[{id:"all"},{id:"summon"},{id:"nonBattleSummon"},{id:"miniGame"},{id:"aprilFools"},{id:"altar"},{id:"mainStory"},{id:"mainCg"},{id:"eventCg"},{id:"eventLobby"},{id:"eventHighlight"},{id:"eventComponent"},{id:"storyModel"},{id:"passBorder"},{id:"nameplate"},{id:"dynamicAvatar"},{id:"uncategorized"}],vm=[{id:"apostle"},{id:"battle"},{id:"aside"},{id:"mini"}],ej=[{id:"aurora"},{id:"frost"},{id:"lotus"},{id:"ember"}],ro=new Intl.Collator("zh-Hans",{numeric:!0,sensitivity:"base"}),tj=new Set(["Crepe","Goldy","Youngchun"].map(os)),nj=new Set(["JubeeSkin1","MomoSkin3","RohneSkin2","RollettSkin2","SistSkin2","SllyaSkin2"].map(os)),Ml={apostle:"normal",battle:"battle",aside:"aside",mini:"mini"},km={normal:"apostle",battle:"battle",aside:"aside",mini:"mini",other:"apostle"},Ua=xg(vg),ym={"zh-CN":"埃尔芬（旧）","ko-KR":"에르핀(旧)","ja-JP":"エルフィン(旧)","en-US":"Erpin (Legacy)"};function E(o){const p=o.currentTarget,g=p.getBoundingClientRect();p.style.setProperty("--ripple-x",`${o.clientX-g.left}px`),p.style.setProperty("--ripple-y",`${o.clientY-g.top}px`),p.classList.remove("ripple-active"),window.requestAnimationFrame(()=>p.classList.add("ripple-active"))}function ij(o,p,g){return g<p?p:Math.min(Math.max(o,p),g)}function oj(o,p,g=window.innerWidth,f=window.innerHeight){const S=o==="motion"?680:420,_=Math.max(240,g-24),M=Math.min(S,_),L=ij(p.left+p.width/2-M/2,12,g-12-M),O=Math.min(Math.floor(f*.6),480),N=Math.max(0,p.top-12-10),T=Math.max(0,f-p.bottom-12-10),D=Math.min(260,O),Y=T<D&&N>T?"up":"down",$=Math.max(140,Math.min(O,(Y==="up"?N:T)||O));return Y==="up"?{left:L,width:M,maxHeight:$,placement:Y,bottom:Math.max(12,f-p.top+10)}:{left:L,width:M,maxHeight:$,placement:Y,top:Math.min(p.bottom+10,f-12-$)}}function tc(o){return os(o).replace(/Aside$/u,"").replace(/Skin\d+$/u,"").replace(/_Skin\d+$/iu,"").replace(/_Npc_Skin\d+$/iu,"").replace(/NPC$/u,"")}function aj(o){const p=Rm(o),g=[p,tc(p),tc(o.resourceCode),tc(o.baseFileName)].filter(Boolean);return g.find(f=>Da[f])??g.find(f=>Pa(f,Ua))??p}function rj(o){const p=jc(o);return p==="normal"?"apostle":p==="battle"?"battle":p==="aside"?"aside":p==="mini"?"mini":p==="npc"?"npc":p==="pet"?"pet":p==="monster"?"monster":p==="furniture"?"furniture":"other"}function vl(o=600){return new Promise(p=>{const g=window;if(typeof g.requestIdleCallback=="function"){g.requestIdleCallback(()=>p(),{timeout:o});return}window.setTimeout(p,90)})}function sj(o,p,g){const f=o.resourceCategory??"",i=new Set([p,g,f,o.resourceCode,o.label]);return p==="apostle"&&i.add("normal"),(o.resourceCode.includes("Skin")||f.includes("皮肤"))&&i.add("skin"),g==="aprilFools"&&i.add("aprilFools"),(g==="summon"||g==="nonBattleSummon")&&i.add("summon"),[...i].filter(Boolean)}function lj(o){return o.category==="pet"?"Idle_1":o.category==="battle"?"Attack_1":o.tags.includes("skin")?"Idle_2":"Idle_1"}function Pl(o){return o.category==="other"&&["mainStory","mainCg","eventCg","eventLobby","eventHighlight","eventComponent"].includes(o.otherSubcategory)}function Oa(o){return!!Ll(o.code,o.identity.folderName)||Pl(o)||o.category==="other"&&["dynamicAvatar","passBorder","nameplate","altar"].includes(o.otherSubcategory)}function Kn(o,p,g){return Oa(o)?p:o.avatarUrl??p??g}function $r(o,p=o.motion){var r,S,_;const g=Ll(o.code,o.identity.folderName);if(g){const M=g.viewport.width/g.viewport.height;return{viewportWidth:g.viewport.width,viewportHeight:g.viewport.height,thumbnailWidth:Math.round(M<1?336*M:480),thumbnailHeight:Math.round(M<1?336:480/M),thumbnailTimeOffset:g.previewTime,padding:1.04,contentCamera:g.camera??void 0}}const f=jn(o.code,o.identity.folderName),i=Oa(o)?(f==null?void 0:f.display)??Em((f==null?void 0:f.profileFolder)??o.identity.folderName,((r=f==null?void 0:f.layers.find(M=>M.folderName===f.profileFolder))==null?void 0:r.resourceCode)??o.code):null;if(i){const M=rf(i,p),L=M.width/M.height,O=Math.round(L<1?336:480/L),N=Math.round(L<1?336*L:480);return{viewportWidth:M.width,viewportHeight:M.height,thumbnailWidth:o.otherSubcategory==="dynamicAvatar"?256:N,thumbnailHeight:o.otherSubcategory==="dynamicAvatar"?256:O,padding:1.04,thumbnailTimeOffset:((S=i.cameras[p])==null?void 0:S.time)??((_=i.cameras[i.animation??""])==null?void 0:_.time)??1,display:i,animationName:p}}if(Pl(o)){const M=o.otherSubcategory==="mainStory";return{viewportWidth:M?812:480,viewportHeight:M?1136:270,thumbnailWidth:M?240:480,thumbnailHeight:M?336:270,padding:1,officialRectTransform:M?{pivotX:.5,pivotY:.5,referenceScale:1}:void 0}}return o.otherSubcategory==="dynamicAvatar"||o.otherSubcategory==="passBorder"?{viewportWidth:o.otherSubcategory==="dynamicAvatar"?253:768,viewportHeight:o.otherSubcategory==="dynamicAvatar"?255:768,thumbnailWidth:256,thumbnailHeight:256,padding:o.otherSubcategory==="dynamicAvatar"?1:1.08,thumbnailTimeOffset:o.otherSubcategory==="dynamicAvatar"?.35:void 0,cameraZoomMultiplier:o.otherSubcategory==="dynamicAvatar"?.75:void 0,officialRectTransform:o.otherSubcategory==="dynamicAvatar"?{pivotX:.49999997,pivotY:.49607843,referenceScale:1}:void 0}:o.otherSubcategory==="altar"?{viewportWidth:1024,viewportHeight:768,thumbnailWidth:320,thumbnailHeight:240,padding:1.08}:{viewportWidth:800,viewportHeight:800,thumbnailWidth:256,thumbnailHeight:256,padding:di.padding}}function nc(o,p,g){if(o.contentCamera){const S=o.contentCamera;return{positionX:S.x,positionY:S.y,zoom:Math.max(S.width/Math.max(1,p),S.height/Math.max(1,g))}}if(o.display)return sf(o.display,o.animationName,p,g);const f=o.officialRectTransform;if(!f)return;const i=Math.max(1,p),r=Math.max(1,g);return{positionX:(.5-f.pivotX)*o.viewportWidth*Yd,positionY:(.5-f.pivotY)*o.viewportHeight*Yd,zoom:Math.max(o.viewportWidth/i,o.viewportHeight/r)*Yd*f.referenceScale*(o.cameraZoomMultiplier??1)}}function wm(o){return Ll(o.code,o.identity.folderName)?"is-scene-resource is-collection-poster":Pl(o)?"is-scene-resource":o.otherSubcategory==="dynamicAvatar"?"is-dynamic-avatar-resource":o.otherSubcategory==="passBorder"?"is-border-resource":""}function dj(o){const p=lf(o.resourceCode,o.folderName);return p||(jc(o)==="furniture"?"":"Normal")}function _m(o,p,g="zh-CN"){if(!o.isComplete)return null;const f=Yg(o,p),i=jc(o);if(i==="ignored")return null;const r=rj(o),S=r==="other"?Em(o.folderName,o.resourceCode):null,_=Gg(o),M=r==="other"?Kg(o.resourceCode,o.folderName):void 0,L=((M==null?void 0:M.usage)==="component"||Xg(o.resourceCode,o.folderName)==="component")&&["eventLobby","eventHighlight"].includes((M==null?void 0:M.displayCategory)??_)&&!jn(o.resourceCode,o.folderName)?"eventComponent":_==="eventCg"&&/^CG_(?:Chap\d+|S\d+_Chap)/iu.test(o.resourceCode)?"mainCg":(M==null?void 0:M.displayCategory)??_,O=qg(o),N=Vg(o),T=Jg(o),D=Qg(o),Y=Zg(o),q=T==="normal"||T==="battle"||T==="aside"||T==="mini",$=q?aj(o):Rm(o)||o.resourceCode,G=Y?$u:$,I=Y?Hu:G,z=q?Da[I]??Da[o.resourceCode]:void 0,P=q?Y?Pa($u,Ua)??Pa(I,Ua):Pa(G,Ua)??Pa(o.resourceCode,Ua):void 0,de=T==="aside"?Ju(G)??Ju(o.resourceCode):void 0,Se=sj(o,r,i),F=T==="normal"&&r==="apostle"&&!!Da[I],oe=Lm(f),V=ef(o),ge=q?null:tf(o,p,i),Ye=q?`character:${G}`:ge??(V?`${i}:${V}`:`resource:${oe}`),Ve=Y?ym[g]:(P==null?void 0:P.chineseName)??(z==null?void 0:z.displayName)??o.label??o.resourceCode,rn=(!q&&(!M||M.usage==="component"||M.displayCategory!==M.category||["mainStory","mainCg"].includes(M.displayCategory)||M.officialLocales.some(st=>st===g))?Wu(o.resourceCode,g,o.folderName):null)??pc(o.resourceCode,Ve,g),Ze=o.resourceCode==="Theme_Aurora_EventVelvet"?"Velvet":o.resourceCode==="Theme_Aurora_EventAurora"?"Aurora":null,k=st=>{var lt,re;return pc(st,((lt=Pa(st,Ua))==null?void 0:lt.chineseName)??((re=Da[st])==null?void 0:re.displayName)??st,g)},J=(jn(o.resourceCode,o.folderName)?Wu(o.resourceCode,g,o.folderName):null)??(Ze?k(Ze):Y?ym[g]:T==="aside"?cc(o.resourceCode,rn,g):o.resourceCode==="Aurora_Lobby"?`${k("Aurora")}${{"zh-CN":"活动大厅","ko-KR":" 이벤트 로비","ja-JP":"イベントロビー","en-US":" Event Lobby"}[g]}`:rn),ne=D.isExternalSkin?yf(D.characterCode,D.externalSkinLabel,g):D.externalSkinLabel,be={id:oe,identity:f,entry:o,source:p,code:o.resourceCode,baseCode:G,contentCode:I,groupId:Ye,name:J,englishName:(P==null?void 0:P.englishName)??G,category:r,studioKind:i,otherSubcategory:L,miniGameFolderKey:O,miniGameFolderLabel:N,modelType:T,variantLabel:D.isExternalSkin?ne:"Base",externalSkinKey:D.externalSkinCode,externalSkinLabel:ne,isExternalSkin:D.isExternalSkin,tags:Se,searchAliases:Y?uc(o.resourceCode,Ve).concat(["埃尔芬（旧）","埃尔芬(旧)","ErpinOld","Old Erpin",Hu]):uc(o.resourceCode,Ve),status:"complete",avatarUrl:de??(P==null?void 0:P.assetUrl),avatarFileName:de?`${G}-aside-stage1.png`:P==null?void 0:P.fileName,hasCharacterPages:F,motion:"Idle_1",skin:dj(o)},we=nf(o.resourceCode,o.folderName),Ie=(S==null?void 0:S.animation)??(we==null?void 0:we.animation)??of(o.resourceCode,o.folderName)??af(o.resourceCode)??(q?lj(be):"");return{...be,motion:Ie,skin:(S==null?void 0:S.skin)??(we==null?void 0:we.skin)??be.skin}}function cj(o="zh-CN"){return bg.map(p=>{var r,S;const g=pc(p.code,p.primaryName,o),f={source:"bundled",resourceCode:p.code,resourceGroup:p.code,resourceCategory:"正常使徒",folderName:`正常使徒/${p.code.toLowerCase()}`,baseFileName:p.code};return{id:Lm(f),identity:f,entry:{resourceCode:p.code,resourceGroup:p.code,resourceCategory:"正常使徒",folderName:`正常使徒/${p.code.toLowerCase()}`,baseFileName:p.code,label:p.code,textureFileNames:[],isComplete:!1,textureHandles:[]},source:"bundled",code:p.code,baseCode:p.code,contentCode:p.code,groupId:`character:${p.code}`,name:g,englishName:p.englishName,category:"apostle",studioKind:"normal",otherSubcategory:"uncategorized",miniGameFolderKey:null,miniGameFolderLabel:null,modelType:"normal",variantLabel:p.code,externalSkinKey:p.code,externalSkinLabel:"Base",isExternalSkin:!1,tags:["apostle","normal","fallback"],searchAliases:uc(p.code,p.primaryName),status:"partial",avatarUrl:(r=p.avatar)==null?void 0:r.assetUrl,avatarFileName:(S=p.avatar)==null?void 0:S.fileName,hasCharacterPages:!0,motion:"Idle_1",skin:"Normal"}})}function Sm(o,p,g,f,i="all"){return p==="all"?!0:p==="apostle"?o.category==="apostle":p==="furniture"?o.category==="furniture"&&(i==="all"||hc(o.code,o.identity.folderName)===i):p==="other"?o.category!=="other"||g!=="all"&&o.otherSubcategory!==g?!1:g==="miniGame"&&f!=="all"?o.miniGameFolderKey===f:!0:o.category===p||o.tags.includes(p)}function jm(o,p){return p?[o.code,o.baseCode,o.contentCode,o.name,o.englishName,o.identity.folderName,o.entry.label,o.source,o.searchAliases.join(" "),o.tags.join(" ")].join(" ").toLowerCase().includes(p):!0}function Hr(o){return[...new Set(o.filter(Boolean))]}function gn(o,p,g){let f=o;return typeof p=="number"&&(f=Math.max(p,f)),typeof g=="number"&&(f=Math.min(g,f)),f}function xe(o,p,g,f,i=!0){const r=Number.isFinite(o)?Number(o):p,S=i?Math.round(r):r;return gn(S,g,f)}function Oe(o,p=Qe.width){return xe(o,p,Xr,qr)}function Wr(o,p=Qe.fps){return xe(o,p,Vr)}function La(o){return o instanceof Error&&o.name==="AbortError"}function is(o,p=100){return xe(o,p,qm,Vm)}function kl(o){return xe(o,Cl,xc,vc,!1)}function Bt(o){return xe(o,1,Jr,Qr,!1)}function an(o){return xe(o,0,Zr,es,!1)}function Nm(o){return xe(o,0,0,kc)}function pj(o,p=0){return xe(o,p,0,pi,!1)}function Al(o,p=2){return xe(o,p,Vt,pi,!1)}function xt(o){return Math.round(o*20)/20}function Yr(o,p,g,f,i){if(typeof window>"u")return{x:o,y:p,width:g,height:f};const r=12,S=Math.max(yc,Math.min(g,window.innerWidth-r*2)),_=Math.max(wc,Math.min(f,window.innerHeight-r*2)),M=(i==null?void 0:i.left)??0,L=(i==null?void 0:i.top)??0,O=r-M,N=r-L,T=Math.max(O,window.innerWidth-S-r-M),D=Math.max(N,window.innerHeight-_-r-L);return{x:Math.round(gn(o,O,T)),y:Math.round(gn(p,N,D)),width:Math.round(S),height:Math.round(_)}}function yl(){return`clip-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`}function uj(o,p){return`link:${o}:${p}`}function Gr(o,p){return/^track_\d+$/i.test(o)?4:xt(Al(p>0?p:2,2))}function Il(o){return Math.max(0,o.startTime)+Math.max(Vt,o.duration)}function mj(o){const p=Number.isFinite(o.mixDuration)&&o.mixDuration?Math.max(0,o.mixDuration):0;return p<=0?0:xt(Math.min(p,Math.max(Vt,o.duration)))}function hj(o){const p=[],g=new Map;for(const f of o){const i=g.get(f.track)??[];i.push(f),g.set(f.track,i)}for(const[f,i]of g){const r=[...i].sort((S,_)=>S.startTime-_.startTime||S.id.localeCompare(_.id));for(let S=1;S<r.length;S+=1){const _=r[S-1],M=r[S],L=Il(_),O=xt(Math.max(0,L-M.startTime)),N=O>0,T=Math.abs(M.startTime-L),D=N?Math.min(O,Math.max(Vt,M.duration)):mj(M);D<=0||!N&&T>JS||p.push({id:uj(_.id,M.id),track:f,mode:N?"overlap":"adjacent",previousClipId:_.id,nextClipId:M.id,previousAnimationName:_.animationName,nextAnimationName:M.animationName,startTime:M.startTime,duration:D})}}return p}function Cm(){return[{index:0,label:"",hidden:!1},{index:1,label:"",hidden:!1},{index:2,label:"",hidden:!1}]}function ic(o,p){return o.index===0?p("studio.composition.track.main","主轨道"):o.index===1&&(!o.label||o.label==="叠加轨道")?p("studio.composition.track.overlay","叠加轨道"):o.index===2&&(!o.label||o.label==="链接轨道")?p("studio.composition.track.link","链接轨道"):!o.label||o.label===`轨道 ${o.index}`?p("studio.composition.track.numbered","轨道 {index}",{index:o.index}):o.label}function qe(o){return{x:xe(o==null?void 0:o.x,0,-2e3,2e3),y:xe(o==null?void 0:o.y,0,-2e3,2e3),scale:is(o==null?void 0:o.scale),rotation:xe(o==null?void 0:o.rotation,0,-180,180),scaleX:xe(o==null?void 0:o.scaleX,100,Ba,$a),scaleY:xe(o==null?void 0:o.scaleY,100,Ba,$a),flipX:(o==null?void 0:o.flipX)===!0,flipY:(o==null?void 0:o.flipY)===!0}}function th(o){return xe(o==null?void 0:o.scaleX,100,Ba,$a)}function nh(o){return xe(o==null?void 0:o.scaleY,100,Ba,$a)}function io(o){return(o==null?void 0:o.flipX)===!0}function oo(o){return(o==null?void 0:o.flipY)===!0}function oc(o){return(io(o)?-1:1)*th(o)}function ac(o){return(oo(o)?-1:1)*nh(o)}function wl(o,p,g){const f=is(o.scale)/100,i=th(o)/100,r=nh(o)/100;return{width:Math.max(ci,Math.round(p*f*i)),height:Math.max(ci,Math.round(g*f*r))}}function _l(o){return{x:xe(o==null?void 0:o.x,0,-1e3,1e3),y:xe(o==null?void 0:o.y,0,-1e3,1e3),scale:xe(o==null?void 0:o.scale,100,Fa,za),rotation:xe(o==null?void 0:o.rotation,0,-360,360)}}function Kr(o){return{x:xe(o==null?void 0:o.x,0,-1e3,1e3),y:xe(o==null?void 0:o.y,0,-1e3,1e3),scale:xe(o==null?void 0:o.scale,100,Fa,za),rotation:xe(o==null?void 0:o.rotation,0,-360,360),opacity:xe(o==null?void 0:o.opacity,100,Zm,eh)}}function Sl(o,p){return p??"expand"}function jl(o){return Number.isFinite(o)?String(o):""}function Nl(o){const p=Math.max(0,Math.floor(o)),g=Math.floor(p/60),f=p%60;return`${String(g).padStart(2,"0")}:${String(f).padStart(2,"0")}`}function se({value:o,onCommit:p,min:g,max:f,fallback:i,integer:r=!1,className:S,onBlur:_,onFocus:M,onKeyDown:L,...O}){const[N,T]=d.useState(()=>jl(o)),[D,Y]=d.useState(!1);d.useEffect(()=>{D||T(jl(o))},[D,o]);const q=()=>{const $=Number(N.trim().replace(",",".")),G=i??o,I=Number.isFinite($)?$:G,z=r?Math.round(I):I,P=gn(z,g,f);T(jl(P)),p(P)};return e.jsx("input",{...O,type:"text",inputMode:r?"numeric":"decimal",className:["number-input",S].filter(Boolean).join(" "),value:N,onChange:$=>T($.target.value),onFocus:$=>{Y(!0),M==null||M($)},onBlur:$=>{Y(!1),q(),_==null||_($)},onKeyDown:$=>{$.key==="Enter"&&(q(),$.currentTarget.blur()),$.key==="Escape"&&(T(jl(o)),$.currentTarget.blur()),L==null||L($)}})}function ih(o,p){const g={normal:0,battle:1,aside:2,mini:3,other:4},f=o.groupId===p.groupId?jn(o.code,o.identity.folderName):null,i=f?+(o.identity.folderName!==f.profileFolder)-+(p.identity.folderName!==f.profileFolder):0;return g[o.modelType]-g[p.modelType]||i||(o.groupId===p.groupId?Gu(o.entry,o.source)-Gu(p.entry,p.source):0)||(o.modelType==="other"&&p.modelType==="other"?Ku(o.code,o.identity.folderName)-Ku(p.code,p.identity.folderName):0)||Number(o.isExternalSkin)-Number(p.isExternalSkin)||ro.compare(o.code,p.code)||ro.compare(o.identity.folderName,p.identity.folderName)}function Tm(o,p){var f,i;if(o.groupId!==(p==null?void 0:p.groupId))return!1;const g=(f=jn(o.code,o.identity.folderName))==null?void 0:f.state;return!g||g===((i=jn(p.code,p.identity.folderName))==null?void 0:i.state)}function gj(o){return o.studioKind==="mini"&&/^Minimi$/iu.test(o.code)}function Rl(o){return/国际服|international|intl/iu.test(o.identity.folderName)}function _c(o,p){return p!=null&&p.isExternalSkin&&p.externalSkinKey?p.externalSkinKey:o.baseCode}function rc(o,p,g){if(!o)return;const i=(o.miniProxyResourceIds??(o.miniProxyResourceId?[o.miniProxyResourceId]:[])).map(S=>g.get(S)).filter(S=>!!S);if(i.length===0)return;const r=os(_c(o,p));return nj.has(r)?i.find(Rl)??i[0]:i.find(S=>!Rl(S))??i[0]}function fj(o){const p=new Map,g=o.filter(gj).sort((r,S)=>Number(Rl(r))-Number(Rl(S))||ro.compare(r.identity.folderName,S.identity.folderName)),f=g[0]??o.find(r=>r.studioKind==="mini"),i=g.length>0?g:f?[f]:[];return o.forEach(r=>{const S=p.get(r.groupId)??[];S.push(r),p.set(r.groupId,S)}),[...p.entries()].map(([r,S])=>{const _=[...S].sort(ih),M=_.find($=>$.modelType==="normal")??_[0],L=Da[M.contentCode],O=_.filter($=>$.modelType==="normal"),N=_.filter($=>$.modelType==="battle"),T=_.filter($=>$.modelType==="aside"),D=_.filter($=>$.modelType==="mini"),Y=_.filter($=>$.modelType==="other"),q=!!f&&M.baseCode!==(f==null?void 0:f.baseCode)&&(O.length>0||tj.has(os(M.baseCode)))&&D.length===0;return{id:r,characterCode:M.baseCode,baseCode:M.baseCode,displayName:M.name,englishName:M.englishName,avatarUrl:M.avatarUrl,avatarFileName:M.avatarFileName,hasCharacterPages:!!L,resources:_,normal:O,battle:N,aside:T,mini:D,other:Y,miniProxyResourceId:q?f==null?void 0:f.id:void 0,miniProxyResourceIds:q?i.map($=>$.id):void 0,miniProxyLabel:q?"Minimi":void 0}}).sort((r,S)=>{var N,T;const _=r.hasCharacterPages&&r.resources.some(D=>D.modelType!=="other"),M=S.hasCharacterPages&&S.resources.some(D=>D.modelType!=="other");if(_!==M)return Number(M)-Number(_);if(_&&M)return Yu(r.characterCode)-Yu(S.characterCode)||ro.compare(r.characterCode,S.characterCode);const L=(N=r.resources[0])==null?void 0:N.category,O=(T=S.resources[0])==null?void 0:T.category;return L==="furniture"&&O==="furniture"?ro.compare(r.characterCode,S.characterCode):ro.compare(r.displayName,S.displayName)})}function ts(o,p){if(!o)return[];const g=Ml[p];return o[g]}function bj(o,p){const g=p==="apostle"||p==="battle"||p==="aside"||p==="mini"?p:void 0;return(g?ts(o,g):[])[0]??o.normal[0]??o.battle[0]??o.aside[0]??o.mini[0]??o.other[0]??o.resources[0]}function Uo(o,p,g,f="gif"){return[o.code,p&&p!=="Normal"?p:null,g].filter(Boolean).join("_").replace(/[\\/:*?"<>|]+/g,"_")+`.${f}`}function sc(o,p,g,f){return Uo(o,p,`${g}_frame${String(f+1).padStart(4,"0")}`,"png")}function xj(o,p){const g=URL.createObjectURL(o),f=document.createElement("a");f.href=g,f.download=p,document.body.append(f),f.click(),f.remove(),window.setTimeout(()=>URL.revokeObjectURL(g),6e4)}async function vj(o,p,g){const i=await(await o.getFileHandle(p,{create:!0})).createWritable();await i.write(g),await i.close()}function Mj(){var ku,yu,wu,_u,Su,ju,Nu,Cu,Tu,Mu,Au,Iu,Eu;const o=hg(),p=gg(),{locale:g,setLocale:f,t:i,tf:r}=Ui(),{workspace:S,pickRootDirectory:_,clearWorkspace:M}=df(),L=d.useRef(null),O=d.useRef(null),N=d.useCallback(()=>{var n;const t=(n=O.current)==null?void 0:n.getPlaybackSnapshot();return(t==null?void 0:t.recordingTime)??(t==null?void 0:t.currentTime)??0},[]),T=d.useRef(null),D=d.useRef(null),Y=d.useRef(null),q=d.useRef(null),$=d.useRef(null),G=d.useRef(!1),I=d.useRef(null),z=d.useRef([]),P=d.useRef(new Map),de=d.useRef(null),Se=d.useRef(null),F=d.useRef(null),oe=d.useRef(new Set),V=d.useRef(null),ge=d.useRef(!1),Ye=d.useRef(!1),Ve=d.useRef(null),[ue,rn]=d.useState(null),[Ze,k]=d.useState(0),[Q,J]=d.useState(null),[ne,be]=d.useState("all"),[we,Ie]=d.useState("all"),[st,lt]=d.useState("all"),[re,Be]=d.useState("all"),[Ge,nt]=d.useState(null),[fn,Nn]=d.useState(""),[ht,gi]=d.useState(QS),[Fo,zo]=d.useState(()=>typeof window>"u"?!0:window.matchMedia("(min-width: 861px)").matches),[ve,Cn]=d.useState(null),[so,Tn]=d.useState(!1),[Ul,Mn]=d.useState(!1),[as,An]=d.useState(!1),[Ha,rs]=d.useState("aurora"),[Wa,Ee]=d.useState("day"),[Ya,Ga]=d.useState(!1),[fi,In]=d.useState(!1),[En,oh]=d.useState("export"),ss=Uf(()=>{var t,n;return{mirror:mi((t=Or())==null?void 0:t.mirrorFold),effects:mt((n=Or())==null?void 0:n.memeEffects)}}),{mirrorFold:Xn,setMirrorFold:Dl,memeEffects:it,setMemeEffects:Ka}=ss,[ls,ah]=d.useState(!1),Oo=Xn.enabled||Ag(it),Xa=d.useMemo(Df,[]),Fl=d.useRef(new Map),[gt,Bo]=d.useState(null),[ds,zl]=d.useState("apostle"),[K,qn]=d.useState(null),[je,Rt]=d.useState(null),[bn,cs]=d.useState(null),[te,qa]=d.useState("Idle_1"),[ye,lo]=d.useState("Normal"),[$e,Ol]=d.useState([]),[co,Bl]=d.useState([]),[rh,$l]=d.useState(null),[sh,Hl]=d.useState(null),[Va,Wl]=d.useState(!0),[ps,$o]=d.useState(0),[Me,po]=d.useState(1),[H,bi]=d.useState(Qe.width),[W,xi]=d.useState(Qe.height),[us,Tc]=d.useState(!0),[Le,Ho]=d.useState(!1),[_e,Yl]=d.useState("model"),[Te,uo]=d.useState({x:0,y:0,scale:100,rotation:0}),[Lt,Wo]=d.useState(!0),[dt,ms]=d.useState({x:0,y:0,scale:100,rotation:0}),[ct,Yo]=d.useState("#090d0f"),[ot,sn]=d.useState("transparent"),[xn,Go]=d.useState(null),[vt,mo]=d.useState(null),[vi,Ko]=d.useState(null),[ki,Xo]=d.useState(null),[Vn,qo]=d.useState(100),[Jn,ho]=d.useState(!0),[Rn,hs]=d.useState(!1),[kt,Ja]=d.useState("contain"),[$t,Vo]=d.useState(null),[Ht,Jo]=d.useState(null),[ln,Qo]=d.useState(null),[dn,Zo]=d.useState(null),[cn,Qa]=d.useState(!0),[vn,Za]=d.useState("static"),[Ln,ea]=d.useState(1),[Pn,ta]=d.useState(0),[Qn,na]=d.useState(!0),[gs,Mc]=d.useState(""),[go,fs]=d.useState("all"),[bs,Ac]=d.useState(!1),[fo,er]=d.useState(!1),[yt,tr]=d.useState(!1),[wt,nr]=d.useState(!1),[ir,Gl]=d.useState(!1),[lh,or]=d.useState(!1),[ar,Kl]=d.useState(!0),[rr,Xl]=d.useState(!0),[ia,xs]=d.useState("ko"),[dh,Ic]=d.useState({}),[vs,ks]=d.useState(!1),[Di,ch]=d.useState({width:Qe.width,height:Qe.height}),[Ec,Fi]=d.useState(()=>i("studio.stage.drag_hint_model"));d.useEffect(()=>{Fi(i(_e==="model"?"studio.stage.drag_hint_model":"studio.stage.drag_hint_background"))},[_e,g,i]);const[zi,bo]=d.useState({status:"loading"}),[ph,sr]=d.useState(null),[ys,lr]=d.useState(null),Rc=d.useRef(null);d.useEffect(()=>{Rc.current=ys},[ys]);const[Pt,uh]=d.useState(null),Jt=d.useRef(!1),Oi=d.useRef(!1),oa=d.useRef(null),ql=d.useRef(null),Vl=d.useRef(new Map),dr=d.useRef(null),cr=d.useRef(new Map),Jl=d.useRef(new Map),ws=d.useRef(new Set),Lc=d.useRef(null),Ql=d.useRef(null),[Fe,He]=d.useState({statusText:"",countText:"0 / 0",hintText:"",percent:0,failed:0,remain:0,eta:"--",paused:!1}),[Pc,Uc]=d.useState([]),[Ke,Bi]=d.useState(null),[Dc,Zl]=d.useState([]),[mh,ed]=d.useState(""),[pn,td]=d.useState({}),[Fc,_s]=d.useState(()=>new Set),[Ss,zc]=d.useState(!1),[Ut,hh]=d.useState(!1),[gh,js]=d.useState(!1),Zn=d.useRef(!1),ei=d.useRef(null);d.useEffect(()=>()=>{var t;(t=ei.current)==null||t.abort()},[]);const Ns=d.useRef(null),aa=t=>{Zn.current=t,t||(Ns.current=null),hh(t)};d.useEffect(()=>{if(Ut||Fe.failed>0||Fe.remain>0){js(!0);return}if(Fe.percent>=100){js(!0);const n=window.setTimeout(()=>js(!1),900);return()=>window.clearTimeout(n)}js(!1)},[Ut,Fe.failed,Fe.percent,Fe.remain]);const pr=t=>{const n=new AbortController;return Ns.current=n,aa(!0),{...t,signal:n.signal}},ur=t=>La(t)?(He(n=>({...n,statusText:i("studio.queue.cancelled"),hintText:i("studio.queue.cancelled"),paused:!1})),y(i("studio.queue.cancelled")),!0):!1;d.useEffect(()=>()=>{var t;(t=Ns.current)==null||t.abort()},[]);const[nd,fh]=d.useState("ffmpeg"),[Cs,Oc]=d.useState("chat"),[ft,bh]=d.useState("animationBounds"),[ra,id]=d.useState(()=>{var t;return((t=Or())==null?void 0:t.trimTransparent)===!0}),[ie,$i]=d.useState(null),od=d.useRef(null),[Un,ad]=d.useState(null),[kn,Bc]=d.useState("forever"),[Hi,$c]=d.useState("primary"),[sa,Hc]=d.useState(Cl),[mr,Wc]=d.useState("currentFrame"),[Dt,Wi]=d.useState(15),[Ne,hr]=d.useState(null),[yi,Dn]=d.useState(!1),[Fn,xo]=d.useState(null),[la,vo]=d.useState(!1),[Ts,Yc]=d.useState(cm),[wi,Ms]=d.useState(()=>Cm()),[pt,zn]=d.useState([]),[da,un]=d.useState(null),[ca,Wt]=d.useState(null),[_t,Gc]=d.useState([]),[We,ti]=d.useState({}),[ce,On]=d.useState({}),[Ft,ko]=d.useState({}),[fe,yn]=d.useState([]),[U,gr]=d.useState(li),[rd,Kc]=d.useState({}),[Ce,Yt]=d.useState([]),[De,fr]=d.useState(to),[Xc,Bn]=d.useState([]),bt=d.useRef([]),sd=d.useRef(null),br=d.useRef(null),St=d.useRef(U),$n=d.useRef([]),yo=d.useRef(De),pa=d.useRef(new Map),ld=d.useRef(!1),dd=d.useRef(!1),[As,Is]=d.useState(""),[wo,Es]=d.useState("all"),[jt,ni]=d.useState(!1),[et,ua]=d.useState(null),[Gt,ma]=d.useState(null),[zt,_o]=d.useState(null),Yi=d.useRef(null),_i=d.useRef(null),cd=d.useRef(null),xr=d.useRef(null),So=d.useRef(null),Si=d.useRef(null),ha=d.useRef(null),pd=d.useRef(null),ud=d.useRef(null),Rs=d.useRef(null),md=d.useRef(0),qc=d.useRef(0);d.useEffect(()=>{ZS(ht),ht==="classic"&&(Cn(null),Tn(!1),Mn(!1))},[ht]),d.useEffect(()=>{const t=window.matchMedia("(min-width: 861px)"),n=()=>zo(t.matches);return n(),t.addEventListener("change",n),()=>t.removeEventListener("change",n)},[]);const Nt=ht==="modern"&&Fo,Vc=d.useMemo(()=>{const t=gs.trim().toLowerCase();return Ym.filter(n=>go!=="all"&&n.group!==go?!1:t?`${n.group} ${n.label} ${n.fileName}`.toLowerCase().includes(t):!0)},[go,gs]);d.useEffect(()=>{if(En!=="export")return;const t=window,n=()=>{Fu().catch(()=>{})};if(typeof t.requestIdleCallback=="function"){const l=t.requestIdleCallback(n,{timeout:4e3});return()=>{var s;return(s=t.cancelIdleCallback)==null?void 0:s.call(t,l)}}const a=window.setTimeout(n,1500);return()=>window.clearTimeout(a)},[En]),Te.x,Te.y,Te.scale,Te.rotation;const xh=dt.x,vh=dt.y;dt.scale,dt.rotation;const ga=Jn?ot==="upload"&&xn?"image":ot==="solid"?"solid":"transparent":"transparent",ze=d.useCallback((t,n)=>{const a=l=>qe({...l,...n});if(t==="model"){uo(a);return}ms(a)},[]),Ot=d.useCallback(t=>ze("model",{x:t}),[ze]),Kt=d.useCallback(t=>ze("model",{y:t}),[ze]),jo=d.useCallback(t=>ze("model",{scale:t}),[ze]),vr=d.useCallback(t=>ze("model",{rotation:t}),[ze]),hd=d.useCallback((t,n)=>ze("model",{scaleX:t,scaleY:n}),[ze]),Gi=d.useCallback(t=>ze("background",{x:t}),[ze]),Ki=d.useCallback(t=>ze("background",{y:t}),[ze]),ji=d.useCallback(t=>ze("background",{scale:t}),[ze]),kr=d.useCallback(t=>ze("background",{rotation:t}),[ze]),Jc=d.useCallback(()=>{ed(r("studio.local_custom.status.loading","正在读取本地自定义版本...")),pf().then(t=>{Zl(t.entries),ed(t.entries.length?r("studio.local_custom.status.found","已找到 {count} 个本地自定义版本。",{count:t.entries.length}):r("studio.local_custom.status.empty","还没有本地自定义版本。"))}).catch(t=>{Zl([]),ed(t instanceof Error?t.message:r("studio.local_custom.status.manifest_failed","本地自定义清单读取失败。"))})},[r]);d.useEffect(()=>{Jc()},[Jc]);const y=d.useCallback(t=>{const n=Date.now()+Math.random();Uc(l=>[...l,{id:n,message:t}]);const a=window.setTimeout(()=>{Uc(l=>l.filter(s=>s.id!==n))},2600);z.current.push(a)},[]);d.useEffect(()=>{if(!new URLSearchParams(p.search).has("creatorOverlay"))return;const t=uf();if(!t){y(r("studio.toast.creator_overlay_missing","No Creator overlay preview data found."));return}if(mf(),!t.ok){y(r("studio.toast.creator_overlay_read_failed","Creator overlay read failed: {error}",{error:t.error}));return}Bi({payload:t.payload,visible:!0,opacity:1}),y(r("studio.toast.creator_overlay_loaded","Creator temporary static overlay loaded."))},[p.search,y,r]);const ii=d.useCallback((t,n=!0)=>{oh(t),n&&window.requestAnimationFrame(()=>{var a,l,s;(a=ql.current)==null||a.scrollTo({top:0}),(s=(l=ql.current)==null?void 0:l.querySelector(".panel-page.is-active"))==null||s.scrollTo({top:0})})},[]),Ls=d.useCallback(t=>t==="motion"?T.current:window.matchMedia("(max-width: 860px)").matches?q.current:t==="externalSkin"?D.current:Y.current,[]),Qc=d.useCallback(()=>{if(!je){cs(null);return}const t=Ls(je);if(!t){cs(null);return}cs(oj(je,t.getBoundingClientRect()))},[je,Ls]),fa=d.useCallback(t=>{Rt(null),Dn(!1),t!=="library"&&ii(t==="parts"?"layers":t),Bo(n=>n===t?null:t)},[ii]),gd=d.useCallback(t=>{if(window.matchMedia("(max-width: 860px)").matches){if(Bo(null),t==="motion"&&yi){Dn(!1),Rt(null);return}Dn(!1)}Rt(a=>a===t?null:t)},[yi]),kh=d.useCallback(t=>{Rt(null),Tn(!1),Mn(!1),An(!1),t==="canvas"&&ii("canvas"),(t==="layers"||t==="parts")&&ii("layers"),t==="export"&&ii("export"),Cn(n=>n===t?null:t)},[ii]),yh=d.useCallback(()=>{Bo(null),Dn(!1),Rt(t=>t==="externalSkin"||t==="internalSkin"?null:"externalSkin")},[]);d.useEffect(()=>{var l,s;if(!je){cs(null);return}const t=()=>Qc(),n=c=>{var u;const m=c.target;m instanceof Node&&((u=$.current)!=null&&u.contains(m))||t()};t();const a=window.requestAnimationFrame(t);return window.addEventListener("resize",t),window.addEventListener("scroll",n,!0),(l=window.visualViewport)==null||l.addEventListener("resize",t),(s=window.visualViewport)==null||s.addEventListener("scroll",t),()=>{var c,m;window.cancelAnimationFrame(a),window.removeEventListener("resize",t),window.removeEventListener("scroll",n,!0),(c=window.visualViewport)==null||c.removeEventListener("resize",t),(m=window.visualViewport)==null||m.removeEventListener("scroll",t)}},[je,Qc]),d.useEffect(()=>{if(!je)return;const t=a=>{a.key==="Escape"&&Rt(null)},n=a=>{var s,c;const l=a.target;l instanceof Node&&((s=$.current)!=null&&s.contains(l)||(c=Ls(je))!=null&&c.contains(l)||Rt(null))};return document.addEventListener("keydown",t),document.addEventListener("pointerdown",n,!0),()=>{document.removeEventListener("keydown",t),document.removeEventListener("pointerdown",n,!0)}},[je,Ls]),d.useEffect(()=>{Rt(null)},[Ge,U]),d.useEffect(()=>{vo(!1),Yc(cm),Ms(Cm()),zn([]),un(null),Wt(null),So.current=null},[Ge,U]),d.useEffect(()=>{if(je!=="motion"){G.current=!1;return}if(!bn||G.current)return;const t=window.requestAnimationFrame(()=>{var l,s;const n=(l=$.current)==null?void 0:l.querySelector(".choice-grid"),a=(s=$.current)==null?void 0:s.querySelector("[data-motion-choice].is-active");if(a&&n){G.current=!0;const c=a.getBoundingClientRect(),m=n.getBoundingClientRect();n.scrollTop+=c.top-m.top-(m.height-c.height)/2}});return()=>window.cancelAnimationFrame(t)},[$e,bn,je,te]),d.useEffect(()=>{if(!Nt||ve!=="motion")return;const t=window.requestAnimationFrame(()=>{var l;const n=(l=I.current)==null?void 0:l.querySelector("[data-modern-motion].is-active"),a=I.current;if(n&&a){const s=n.getBoundingClientRect(),c=a.getBoundingClientRect(),m=a.scrollTop+s.top-c.top-(a.clientHeight-s.height)/2;a.scrollTo({top:Math.max(0,m),behavior:"auto"})}});return()=>window.cancelAnimationFrame(t)},[$e,ve,te,Nt]);const Hn=d.useCallback(t=>{const n=URL.createObjectURL(t);return oe.current.add(n),n},[]),yr=d.useCallback(async t=>{const n=await KS(t);return Hn(n)},[Hn]);d.useEffect(()=>{let t=!1;return Promise.allSettled([vf(g),kf(g)]).then(()=>{t||k(n=>n+1)}),()=>{t=!0}},[g]),d.useEffect(()=>{let t=!1;return zg().then(n=>{t||(rn(n),J(null))}).catch(n=>{t||(rn(null),J(n instanceof Error?n.message:r("studio.error.manifest_failed","Bundled Spine manifest failed to load.")))}),()=>{t=!0}},[]),d.useEffect(()=>(td({}),ws.current.clear(),()=>{z.current.forEach(t=>window.clearTimeout(t)),dr.current!==null&&window.clearTimeout(dr.current),cr.current.forEach(t=>URL.revokeObjectURL(t)),cr.current.clear(),Jl.current.clear(),oe.current.forEach(t=>URL.revokeObjectURL(t)),oe.current.clear()}),[]);const Ct=d.useMemo(()=>{const t=(ue==null?void 0:ue.entries.map(l=>_m(l,"bundled",g)).filter(l=>!!l))??[],a=[...S.entries.map(l=>_m(l,"workspace",g)).filter(l=>!!l),...t];return a.length>0?a:cj(g)},[ue,g,Ze,i,S.entries]),No=d.useMemo(()=>fj(Ct),[Ct]),me=d.useMemo(()=>new Map(Ct.map(t=>[t.id,t])),[Ct]),oi=d.useMemo(()=>new Map(No.map(t=>[t.id,t])),[No]),Zc=d.useCallback(t=>{var j;const n=me.get(t);if(!n)return;const a=zu(n.code,n.identity.folderName,n.skin),l=br.current;a!==null?(br.current={previous:(l==null?void 0:l.previous)??Me,applied:a},po(a)):l&&(Me===l.applied&&po(l.previous),br.current=null);const s=jn(n.code,n.identity.folderName),c=Oa(n)?$r(n):null,m=sd.current;c?sd.current={width:(m==null?void 0:m.width)??H,height:(m==null?void 0:m.height)??W,layerEditingEnabled:(m==null?void 0:m.layerEditingEnabled)??Le,restoreLayerEditing:!!(m!=null&&m.restoreLayerEditing||s!=null&&s.state),appliedWidth:Oe(c.viewportWidth),appliedHeight:Oe(c.viewportHeight)}:m&&(!c&&H===m.appliedWidth&&W===m.appliedHeight&&(bi(m.width),xi(m.height)),m.restoreLayerEditing&&Le&&Ho(m.layerEditingEnabled),sd.current=null),c&&(bi(Oe(c.viewportWidth)),xi(Oe(c.viewportHeight)));const u=oi.get(n.groupId),v=s&&Ou(s,s.width,s.height),w=Ce.filter(A=>{var R;return!((R=A.assetId)!=null&&R.startsWith("official-scene:"))}),b=v?[on("official-scene-background",{name:v.fileName,mode:"upload",image:v.src,assetId:v.assetId,fileName:v.fileName,mimeType:"image/png",fitMode:"contain",width:s.width,height:s.height,naturalWidth:v.naturalWidth??void 0,naturalHeight:v.naturalHeight??void 0,lockAspectRatio:!1,locked:!0})]:[];Yt([...w,...b]),!v&&(vt!=null&&vt.startsWith("official-scene:"))&&(fr(((j=w[0])==null?void 0:j.id)??to),mo(null),Go(null),sn("transparent"));const C=s&&u?s.layers.map((A,R)=>{const ee=[...me.values()].find(ae=>ae.code.toLowerCase()===A.resourceCode.toLowerCase()&&(!A.folderName||ae.identity.folderName===A.folderName));return ee?Tl(R===0?li:`model-layer-composition-${R+1}`,ee,{animationName:A.animationName??ee.motion,skinName:A.skinName??ee.skin,transform:A.transform??{x:0,y:0,scale:100,rotation:0},visible:!0,locked:!1,playbackSpeed:Me,timeOffset:0,targetLockAspectRatio:!0}):null}).filter(A=>!!A):[];if(C.length>1){Ho(!0),yn(C),gr(C[0].id),Bn([...[...w,...b].map(A=>({type:"background",id:A.id})),...C.map(A=>({type:"model",id:A.id}))]),nt(C[0].resourceId);return}const x=bt.current[0]?me.get(bt.current[0].resourceId):void 0;if(x!=null&&x.groupId.startsWith("composition:")){const A=Tl(li,n,{animationName:n.motion,skinName:n.skin,transform:{x:0,y:0,scale:100,rotation:0},visible:!0,locked:!1,playbackSpeed:Me,timeOffset:0,targetLockAspectRatio:!0});yn([A]),gr(li),Bn([...w.map(R=>({type:"background",id:R.id})),{type:"model",id:li}])}nt(n.id)},[vt,Ce,W,H,oi,Le,Me,me]),Ps=d.useMemo(()=>{const t=new Map;return Ct.forEach(n=>{n.otherSubcategory==="miniGame"&&n.miniGameFolderKey&&t.set(n.miniGameFolderKey,n.miniGameFolderKey)}),[...t.entries()].map(([n,a])=>({id:n,label:a})).sort((n,a)=>n.label.localeCompare(a.label,"zh-Hans"))},[Ct]);d.useEffect(()=>{re!=="all"&&!Ps.some(t=>t.id===re)&&Be("all")},[re,Ps]),d.useEffect(()=>{if(Ct.length===0)return;const t=Zd(),n=Or();if(V.current=n,!Ge&&t&&me.has(t.resourceId)){nt(t.resourceId);return}if(!Ge&&(n!=null&&n.resourceId)&&me.has(n.resourceId)){nt(n.resourceId);return}if(Ge&&me.has(Ge))return;const a=Ct.find(l=>l.code==="OrrAside")??Ct.find(l=>l.code==="AmeliaR41"&&l.category==="apostle")??Ct.find(l=>l.hasCharacterPages)??Ct[0];nt(a.id)},[Ge,me,Ct]);const h=d.useMemo(()=>(Ge?me.get(Ge):void 0)??Ct[0],[Ge,me,Ct]);d.useEffect(()=>{$i(null),ad(null),ft==="faceFollow"&&ni(!0)},[h==null?void 0:h.id]);const Xt=ys===(h==null?void 0:h.id)?ph:null,wr=!!(h&&(dh[h.id]??h.modelType==="normal")),ai=ir&&wr,fd=d.useCallback(()=>{if(!h||!wr){Gl(!1),Fi(i("studio.stage.drag_hint_model")),y(r("studio.toast.interaction_unsupported","当前骨架没有可用互动骨骼。"));return}const t=!ir;t?(vo(!1),or(!0)):or(!1),Gl(t),Fi(t?r("studio.stage.interaction_hint","互动模式：点击或拖拽角色触发互动"):i("studio.stage.drag_hint_model")),y(t?r("studio.toast.interaction_on","互动模式已开启"):r("studio.toast.interaction_off","互动模式已关闭"))},[h,wr,y,ir,i,r]);d.useEffect(()=>{!la||!ir||(Gl(!1),or(!1),Fi(i("studio.stage.drag_hint_model")))},[la,ir,i]),d.useEffect(()=>{ai||or(!1)},[ai]);const mn=fe.length>1,wh=Ce.length>1,ba=d.useMemo(()=>fe.find(t=>t.id===U)??fe[0]??null,[U,fe]),Us=d.useMemo(()=>Ce.find(t=>t.id===De)??Ce[0]??null,[De,Ce]),at=d.useMemo(()=>Po(Xc,Ce,fe),[Ce,Xc,fe]),bd=d.useMemo(()=>Ce.some(bl),[Ce]),xa=mn||bd,_h=d.useMemo(()=>{const t=Po([],Ce,fe);return!gm(at,t)},[Ce,fe,at]),Tt=mn||wh||_h||bd,Sh=d.useMemo(()=>fe.map(t=>`${t.id}:${t.resourceId}`).join("|"),[fe]);d.useEffect(()=>{bt.current=fe},[fe]),d.useEffect(()=>{$n.current=Ce},[Ce]),d.useEffect(()=>{const t=Ce.filter(n=>n.mode==="upload"&&n.image&&ui(n)).map(n=>Mm({assetId:n.assetId,src:n.image||"",fileName:n.fileName}));Ig(t)},[Ce]),d.useEffect(()=>{St.current=U},[U]),d.useEffect(()=>{yo.current=De},[De]),d.useEffect(()=>{Bn(t=>gm(t,at)?t:at)},[at]),d.useEffect(()=>{_i.current=Gt},[Gt]),d.useEffect(()=>{Yi.current=et},[et]),d.useEffect(()=>{!h||fe.length>0||(yn([fl({id:li,resource:h,selectedMotion:te,selectedSkin:ye,modelTransform:Te,visible:!yt,locked:wt,playbackSpeed:Me,timeOffset:0,targetLockAspectRatio:Lt,attachmentVisibility:We,attachmentReplacements:ce,attachmentAdjustments:Ft})]),gr(li))},[h,Ft,ce,We,yt,fe.length,wt,Lt,Te,Me,te,ye]),d.useEffect(()=>{if(Ce.length>0)return;const t=on(to,{name:r("studio.layers.image_layer_name","图片层 1"),mode:ot,color:ct,image:xn,assetId:vt,fileName:vi,mimeType:ki,transform:dt,visible:Jn,locked:Rn,opacity:Vn,fitMode:kt,width:$t,height:Ht,naturalWidth:ln,naturalHeight:dn,lockAspectRatio:cn,playbackMode:vn,playbackSpeed:Ln,timeOffset:Pn,followTimeline:Qn});Yt([t]),fr(t.id)},[vt,ct,vi,Qn,kt,Ht,xn,Ce.length,Rn,cn,ki,dn,ln,ot,Vn,vn,Ln,Pn,dt,$t,Jn,r]),d.useEffect(()=>{dd.current||Ye.current||Yt(t=>t.map(n=>n.id===De?on(n.id,{...n,mode:ot,color:ct,image:xn,assetId:vt,fileName:vi,mimeType:ki,transform:dt,visible:Jn,locked:Rn,opacity:Vn,fitMode:kt,width:$t,height:Ht,naturalWidth:ln,naturalHeight:dn,lockAspectRatio:cn,playbackMode:vn,playbackSpeed:Ln,timeOffset:Pn,followTimeline:Qn}):n))},[De,vt,ct,vi,Qn,kt,Ht,xn,Rn,cn,ki,dn,ln,ot,Vn,vn,Ln,Pn,dt,$t,Jn]),d.useEffect(()=>{!h||ld.current||Ye.current||yn(t=>{if(t.length===0)return t;const n=U||t[0].id;return t.map(a=>a.id===n?fl({id:a.id,resource:h,selectedMotion:te,selectedSkin:ye,modelTransform:Te,visible:!yt,locked:wt,playbackSpeed:t.length>1?a.playbackSpeed:Me,timeOffset:a.timeOffset,targetLockAspectRatio:Lt,attachmentVisibility:We,attachmentReplacements:ce,attachmentAdjustments:Ft}):a)})},[U,h,Ft,ce,We,yt,wt,Lt,Te,Me,te,ye]);const pe=d.useMemo(()=>{const t=h?oi.get(h.groupId):void 0;return K&&(h==null?void 0:h.id)===K.resourceId?oi.get(K.groupId)??t:t},[h,oi,K]);d.useMemo(()=>Ct.find(t=>t.code==="AmeliaR41"&&t.hasCharacterPages)??Ct.find(t=>t.hasCharacterPages),[Ct]);const Ds=fn.trim().toLowerCase(),Xi=d.useMemo(()=>{const t=No.filter(n=>n.resources.some(a=>Sm(a,ne,we,re,st)&&jm(a,Ds))).flatMap(n=>{const a=n.resources.filter(c=>Sm(c,ne,we,re,st)&&jm(c,Ds)),l=bj(n,ne),s=new Map;for(const c of a){const m=jn(c.code,c.identity.folderName);m!=null&&m.state&&(!s.has(m.state)||c.identity.folderName===m.profileFolder)&&s.set(m.state,c)}return s.size?[...s.values()].sort((c,m)=>{var u,v;return+(((u=jn(c.code))==null?void 0:u.state)==="After")-+(((v=jn(m.code))==null?void 0:v.state)==="After")}):l&&a.includes(l)?l:a[0]}).filter(n=>!!n);return ne==="furniture"?t.sort((n,a)=>ro.compare(n.code,a.code)||ro.compare(n.identity.folderName,a.identity.folderName)):ne==="other"?t.sort((n,a)=>xl.findIndex(s=>s.id===n.otherSubcategory)-xl.findIndex(s=>s.id===a.otherSubcategory)||ih(n,a)):t},[ne,re,we,st,Ds,No]),Co=Xi;d.useMemo(()=>No.filter(t=>t.hasCharacterPages).length,[No]);const Ni=rh===(h==null?void 0:h.id)&&$e.length>0,Pe=sh===(h==null?void 0:h.id)&&co.length>0,xd=d.useMemo(()=>{if(!Ni)return Hr([te]);const t=Hr($e);return t.includes(te)?t:Hr([...t,te])},[$e,Ni,te]),Mt=d.useMemo(()=>Hr(Ni?$e.length>0?$e:[te]:[te]),[$e,Ni,te]),ep=d.useMemo(()=>{if(pe&&(h==null?void 0:h.modelType)==="other"){const n=pe.other.length>0?pe.other:pe.resources;return h.source==="bundled"&&h.studioKind==="altar"?n.slice(0,1):n}const t=ts(pe,ds);return t.length>0?t:h?[h]:[]},[pe,ds,h]),To=d.useMemo(()=>ep.map(t=>({id:`resource:${t.id}`,label:t.externalSkinLabel,displayLabel:t.modelType==="aside"&&t.externalSkinLabel==="Base"?cc(t.baseCode,t.externalSkinLabel,g):void 0,resourceId:t.id,avatarUrl:gS(t.code,t.modelType)})),[ep,g,Ze]),tp=d.useMemo(()=>Pe&&K&&(h==null?void 0:h.id)===K.resourceId?Am(K.baseCode,co):[],[h==null?void 0:h.id,co,Pe,K]),Fs=d.useMemo(()=>{const t=Pe&&K&&(h==null?void 0:h.id)===K.resourceId&&!K.showAll?tp:Pe?co:[],n=h?vS({modelType:h.modelType,resourceCode:h.code,baseFileName:h.entry.baseFileName,skinNames:t}):t;return(h?Bg(h.code,h.identity.folderName,n):n).map(l=>({id:`skin:${l}`,skinName:l,label:h?Bu(h.code,h.identity.folderName,l,g):l}))},[h,co,Pe,K,tp,g]),np=d.useCallback(()=>{zc(!0),dr.current!==null&&window.clearTimeout(dr.current),dr.current=window.setTimeout(()=>{zc(!1)},180)},[]),ip=d.useCallback((t,n)=>{if(n){Vl.current.set(t,n);return}Vl.current.delete(t)},[]);d.useEffect(()=>{var t;(t=oa.current)==null||t.scrollTo({top:0})},[ne,re,we,st,Ds]),d.useEffect(()=>{var c,m,u;if(!so||!Nt)return;let t=!1,n=0;const a=()=>{window.cancelAnimationFrame(n),n=window.requestAnimationFrame(()=>{var v,w;(w=(v=oa.current)==null?void 0:v.closest(".roster-card"))==null||w.querySelectorAll(".roster-tabs .rtab.on").forEach(b=>b.scrollIntoView({block:"nearest",inline:"nearest"}))})};a();const l=(c=oa.current)==null?void 0:c.closest(".roster-card"),s=l&&typeof ResizeObserver<"u"?new ResizeObserver(a):null;return l&&(s==null||s.observe(l)),window.addEventListener("resize",a),(m=document.fonts)==null||m.addEventListener("loadingdone",a),(u=document.fonts)==null||u.ready.then(()=>{t||a()}),()=>{var v;t=!0,window.cancelAnimationFrame(n),s==null||s.disconnect(),window.removeEventListener("resize",a),(v=document.fonts)==null||v.removeEventListener("loadingdone",a)}},[so,Nt,ne,we,re,g]),d.useEffect(()=>{_s(new Set)},[Xi]),d.useEffect(()=>{const t=oa.current;if(!t||Co.length===0){_s(new Set);return}if(typeof IntersectionObserver>"u"){_s(new Set(Co.map(a=>a.id)));return}const n=new IntersectionObserver(a=>{_s(l=>{const s=new Set(l);return a.forEach(c=>{const m=c.target.dataset.resourceId;m&&(c.isIntersecting?s.add(m):s.delete(m))}),s})},{root:t,rootMargin:"160px 0px",threshold:.01});return Co.forEach(a=>{const l=Vl.current.get(a.id);l&&n.observe(l)}),()=>n.disconnect()},[so,Nt,Co]),d.useEffect(()=>{if(Ss||zi.status!=="ready")return;if(Lc.current!==dm){Lc.current=dm,ws.current.clear(),cr.current.forEach(m=>URL.revokeObjectURL(m)),cr.current.clear(),Jl.current.clear(),td({});return}const t=ve==="look"?To.map(m=>m.resourceId?me.get(m.resourceId):void 0).filter(m=>!!m):[],n=[...t,...Co].filter((m,u,v)=>v.findIndex(w=>w.id===m.id)===u),a=new Set(t.map(m=>m.id)),l=n.filter(m=>{var u;return(a.has(m.id)||Fc.has(m.id))&&(Oa(m)||!m.avatarUrl&&!((u=oi.get(m.groupId))!=null&&u.avatarUrl))&&m.status==="complete"&&!pn[m.id]&&!ws.current.has(m.id)}).slice(0,4);if(l.length===0)return;let s=!1;return(async()=>{for(const m of l){if(s)return;try{if(await vl(),s)return;const u=$r(m),v=jn(m.code,m.identity.folderName),w=oi.get(m.groupId),b=v&&w?v.layers.map(R=>({definition:R,resource:[...me.values()].find(ee=>ee.code.toLowerCase()===R.resourceCode.toLowerCase()&&(!R.folderName||ee.identity.folderName===R.folderName))})).filter(R=>!!R.resource):[];let C,x;if(b.length>1){const R=Ou(v,u.thumbnailWidth,u.thumbnailHeight),ee=await Promise.all(b.map(async({definition:ae,resource:X},he)=>{const Je=X.source==="bundled"?await cl(X.entry,{characterCode:X.baseCode,resourceRoot:ue==null?void 0:ue.resourceRoot,initialAnimationName:(ae.animationName??X.motion)||void 0}):await pl(X.entry,{characterCode:X.baseCode,initialAnimationName:(ae.animationName??X.motion)||void 0});return{id:`thumbnail-layer-${he+1}`,descriptor:Je,resourceCode:X.code,animationName:(ae.animationName??X.motion)||void 0,skinName:ae.skinName??X.skin,transform:ae.transform?{...ae.transform,x:ae.transform.x*u.thumbnailWidth/u.viewportWidth,y:ae.transform.y*u.thumbnailHeight/u.viewportHeight}:{x:0,y:0,scale:100,rotation:0},visible:!0,locked:!0,playbackSpeed:1,timeOffset:0,targetLockAspectRatio:!0}}));C=await ll({timestamp:u.thumbnailTimeOffset??1,loop:!0,scene:{version:1,width:u.thumbnailWidth,height:u.thumbnailHeight,fps:15,backgroundMode:R?"image":"transparent",backgroundImage:R,layerOrder:ee.map(ae=>({type:"model",id:ae.id})),modelLayers:ee},viewSettings:{...di,mode:"fixed",viewportWidth:u.thumbnailWidth,viewportHeight:u.thumbnailHeight,padding:u.padding,cameraAdjustments:{...di.cameraAdjustments,fixedCamera:nc(u,u.thumbnailWidth,u.thumbnailHeight)}},exportOptions:{...Qe,width:u.thumbnailWidth,height:u.thumbnailHeight,backgroundMode:"transparent",thumbnailTimeOffset:u.thumbnailTimeOffset,framingMode:"current",repeat:0}})}else{const R=m.source==="bundled"?await cl(m.entry,{characterCode:m.baseCode,resourceRoot:ue==null?void 0:ue.resourceRoot,initialAnimationName:m.motion||void 0,initialSkinName:m.skin}):await pl(m.entry,{characterCode:m.baseCode,initialAnimationName:m.motion||void 0,initialSkinName:m.skin}),ee=await Rg({descriptor:R,viewSettings:{...di,mode:"fixed",viewportWidth:u.thumbnailWidth,viewportHeight:u.thumbnailHeight,padding:u.padding,cameraAdjustments:{...di.cameraAdjustments,fixedCamera:nc(u,u.thumbnailWidth,u.thumbnailHeight)}},exportOptions:{...Qe,width:u.thumbnailWidth,height:u.thumbnailHeight,backgroundMode:"transparent",thumbnailTimeOffset:u.thumbnailTimeOffset,framingMode:"current",repeat:0}});C=ee.blob,x=ee.skinName}if(s)return;const j=URL.createObjectURL(C),A=`${m.id}|${x??""}`;cr.current.set(A,j),Jl.current.set(m.id,A),td(R=>({...R,[m.id]:j}))}catch(u){console.warn("Studio thumbnail failed",m.code,u),ws.current.add(m.id)}}})(),()=>{s=!0}},[ue==null?void 0:ue.resourceRoot,To,pn,oi,Ss,ve,zi.status,me,Co,Fc]),d.useEffect(()=>{if(!h)return;const t=bt.current.find(n=>n.id===U&&n.resourceId===h.id);qa((t==null?void 0:t.animationName)??h.motion),lo((t==null?void 0:t.skinName)??h.skin),Ol([]),Bl([]),$l(null),Hl(null),hr(null),$o(0),Gc([]),ti((t==null?void 0:t.attachmentVisibility)??{}),On((t==null?void 0:t.attachmentReplacements)??{}),ko((t==null?void 0:t.attachmentAdjustments)??{}),t?(uo(qe(t.transform)),Wo(t.targetLockAspectRatio),tr(!t.visible),nr(t.locked)):(uo({x:0,y:0,scale:100,rotation:0}),Wo(!0),tr(!1),nr(!1),ti({}),On({}),ko({})),Is(""),Es("all"),ni(!1),_i.current!==U&&(Yi.current=null,_i.current=null,ua(null),ma(null),_o(null)),zl(K&&h.id===K.resourceId?"mini":km[h.modelType]),Rc.current!==h.id&&(bo({status:"loading"}),sr(null),lr(null))},[U,h==null?void 0:h.id,K==null?void 0:K.resourceId]),d.useEffect(()=>{var c,m;if(!h||ge.current)return;const t=V.current??Or();if(!t){ge.current=!0;return}if(t.resourceId&&t.resourceId!==h.id){ue&&!me.has(t.resourceId)&&(ge.current=!0);return}ge.current=!0;let n=!1;bi(Oe(t.canvasWidth)),ss.replace({mirror:mi(t.mirrorFold),effects:mt(t.memeEffects)}),id(t.trimTransparent===!0),xi(Oe(t.canvasHeight,Qe.height)),Wi(Wr(t.fps)),po(Bt(t.playbackSpeed)),uo(qe(t.modelTransform)),Wo(t.modelTargetLockAspectRatio??!0);const a=((c=t.backgroundLayers)!=null&&c.length?t.backgroundLayers:[{id:to,name:r("studio.layers.image_layer_name","图片层 1"),mode:t.backgroundMode,color:t.backgroundColor,assetId:t.backgroundAssetId,transform:t.backgroundTransform,visible:!0,locked:!1,opacity:100,fitMode:"contain",width:null,height:null,naturalWidth:null,naturalHeight:null,lockAspectRatio:!0,playbackMode:"static",playbackSpeed:1,timeOffset:0,followTimeline:!0}]).map((u,v)=>on(u.id||`background-layer-${v+1}`,{name:u.name??r("studio.layers.image_layer_name","图片层 {index}",{index:v+1}),mode:u.mode,color:u.color,assetId:u.assetId??null,fileName:u.fileName??null,mimeType:u.mimeType??null,transform:u.transform,visible:u.visible,locked:u.locked,opacity:u.opacity,fitMode:u.fitMode,width:u.width,height:u.height,naturalWidth:u.naturalWidth,naturalHeight:u.naturalHeight,lockAspectRatio:u.lockAspectRatio,playbackMode:u.playbackMode,playbackSpeed:u.playbackSpeed,timeOffset:u.timeOffset,followTimeline:u.followTimeline})),l=t.activeBackgroundLayerId&&a.some(u=>u.id===t.activeBackgroundLayerId)?t.activeBackgroundLayerId:((m=a[0])==null?void 0:m.id)??to,s=a.find(u=>u.id===l)??a[0]??on(to);return Yt(a),fr(l),Bn(t.layerOrder??[]),Yo(s.color),sn(s.mode==="upload"&&!s.assetId?"transparent":s.mode),ms(qe(s.transform)),mo(s.assetId),Ko(s.fileName),Xo(s.mimeType),qo(s.opacity),Ja(s.fitMode),Vo(s.width),Jo(s.height),Qo(s.naturalWidth),Zo(s.naturalHeight),Qa(s.lockAspectRatio),Za(s.playbackMode),ho(s.visible),hs(s.locked),ea(s.playbackSpeed),ta(s.timeOffset),na(s.followTimeline),ti(t.attachmentVisibility??{}),ko(Object.fromEntries(Object.entries(t.attachmentAdjustments??{}).map(([u,v])=>[u,Kr(v)]))),(async()=>{const u=await Promise.all(a.map(async x=>{if(x.mode!=="upload"||!x.assetId)return[x.id,null,x.fileName,x.mimeType];const j=Hg(x.assetId);if(j)return[x.id,j.src,x.fileName,x.mimeType];const A=gl(x.assetId);if(A){const ee=await yr(A).catch(()=>null);return[x.id,ee,x.fileName??A.fileName,x.mimeType??A.mimeType]}const R=await Ur(x.assetId).catch(()=>{});return R!=null&&R.blob?[x.id,Hn(R.blob),x.fileName??R.fileName??null,x.mimeType??R.mimeType??null]:[x.id,null,x.fileName,x.mimeType]})),v=await Promise.all(Object.entries(t.attachmentReplacements??{}).map(async([x,j])=>{if(!j.assetId)return null;const A=await Ur(j.assetId).catch(()=>{});return A!=null&&A.blob?[x,{...j,src:Hn(A.blob),fileName:j.fileName??A.fileName,transform:_l(j.transform)}]:null}));if(n)return;const w=new Map;u.forEach(([x,j,A,R])=>{w.set(x,{image:j,fileName:A,mimeType:R})}),Yt(x=>x.map(j=>{const A=w.get(j.id);return A!=null&&A.image?{...j,image:A.image,fileName:A.fileName??j.fileName,mimeType:A.mimeType??j.mimeType,mode:"upload"}:j}));const b=w.get(s.id);b!=null&&b.image&&(mo(s.assetId??null),Go(b.image),Ko(b.fileName??s.fileName),Xo(b.mimeType??s.mimeType),sn("upload"));const C={};v.forEach(x=>{x&&(C[x[0]]=x[1])}),On(C)})(),()=>{n=!0}},[h,ue,Hn,yr,me,r]);const zs=d.useCallback(()=>h?{version:2,mirrorFold:Xn,memeEffects:it,trimTransparent:ra,resourceId:h.id,canvasWidth:H,canvasHeight:W,fps:Dt,playbackSpeed:Me,backgroundMode:ot,backgroundColor:ct,backgroundAssetId:vt,backgroundLayers:Ce.map(t=>({id:t.id,name:t.name,mode:t.mode,color:t.color,assetId:t.assetId,fileName:t.fileName,mimeType:t.mimeType,transform:t.transform,visible:t.visible,locked:t.locked,opacity:t.opacity,fitMode:t.fitMode,width:t.width,height:t.height,naturalWidth:t.naturalWidth,naturalHeight:t.naturalHeight,lockAspectRatio:t.lockAspectRatio,playbackMode:t.playbackMode,playbackSpeed:t.playbackSpeed,timeOffset:t.timeOffset,followTimeline:t.followTimeline})),activeBackgroundLayerId:De,layerOrder:at,modelTransform:Te,modelTargetLockAspectRatio:Lt,backgroundTransform:dt,attachmentVisibility:We,attachmentReplacements:Object.fromEntries(Object.entries(ce).map(([t,n])=>[t,{assetId:n.assetId,fileName:n.fileName,transform:n.transform,fitMode:n.fitMode,overflowMode:n.overflowMode,replacementMode:n.replacementMode,hideOriginal:n.hideOriginal,naturalWidth:n.naturalWidth,naturalHeight:n.naturalHeight}])),attachmentAdjustments:Object.fromEntries(Object.entries(Ft).map(([t,n])=>[t,Kr(n)])),updatedAt:Date.now()}:null,[h,Ft,ce,We,vt,De,ct,Ce,ot,dt,W,H,Dt,Te,Lt,at,Xn,it,ra,Me]);d.useCallback(()=>{const t=zs();if(!t){y(r("studio.toast.scene_save_wait","当前资源还没准备好，稍后再保存。"));return}pm(t),y(r("studio.toast.scene_saved","浏览器草稿已保存。"))},[zs,y,r]),d.useEffect(()=>{if(!ge.current||Ye.current)return;const t=zs();t&&pm(t)},[zs]),d.useEffect(()=>{!K||(h==null?void 0:h.id)===K.resourceId||qn(null)},[h==null?void 0:h.id,K]),d.useEffect(()=>{if(!K||(h==null?void 0:h.id)!==K.resourceId||!Pe)return;const t=Im(K.baseCode,co),n=`${K.baseCode}:${h.id}`;if(t){Ql.current=null,lo(a=>a===t?a:t);return}Ql.current!==n&&(Ql.current=n,y(i("studio.toast.mini_skin_missing",{label:K.label})))},[h==null?void 0:h.id,co,Pe,K,y]),d.useEffect(()=>{let t=!1;if(!h||h.status!=="complete"){sr(null),lr(null),bo({status:"missing",message:(h==null?void 0:h.status)==="partial"?i("studio.stage.load_missing_message"):void 0});return}return sr(null),lr(null),bo({status:"loading"}),(h.source==="bundled"?cl(h.entry,{characterCode:h.baseCode,resourceRoot:ue==null?void 0:ue.resourceRoot,initialAnimationName:h.motion}):pl(h.entry,{characterCode:h.baseCode,initialAnimationName:h.motion})).then(a=>{t||(sr(a),lr(h.id),bo({status:"ready",source:h.source,message:h.identity.folderName}))}).catch(a=>{t||(sr(null),lr(null),bo({status:"error",source:h.source,message:a instanceof Error?a.message:i("studio.stage.load_failed_message")}))}),()=>{t=!0}},[h,ue==null?void 0:ue.resourceRoot]),d.useEffect(()=>{let t=!1;return(async()=>{const a=await Promise.all(fe.map(async l=>{if(l.id===U&&Xt)return[l.id,Xt];const s=me.get(l.resourceId);if(!s||s.status!=="complete")return[l.id,null];try{const c=s.source==="bundled"?await cl(s.entry,{characterCode:s.baseCode,resourceRoot:ue==null?void 0:ue.resourceRoot,initialAnimationName:s.motion||void 0}):await pl(s.entry,{characterCode:s.baseCode,initialAnimationName:s.motion||void 0});return[l.id,c]}catch{return[l.id,null]}}));t||Kc(Object.fromEntries(a))})(),()=>{t=!0}},[U,ue==null?void 0:ue.resourceRoot,Xt,Sh,me]);const vd=d.useCallback(()=>{var b;const t=(b=L.current)==null?void 0:b.getBoundingClientRect();if(!(t!=null&&t.width)||!t.height)return;const n=t.height<324,a=Math.max(1,t.width-(n?12:48)),l=Math.max(1,t.height-(n?8:64)),s=Nt?Math.min(a,window.innerWidth*.7):a,c=Nt?Math.min(l,window.innerHeight*.7):l,m=Math.min(s/H,c/W),u=Math.max(1,Math.min(H,W)),v=Math.max(1,360/u),w=Math.min(m,v);ch({width:Math.max(1,Math.round(H*w)),height:Math.max(1,Math.round(W*w))})},[W,H,Nt]);d.useEffect(()=>{vd();const t=L.current;if(!t||typeof ResizeObserver>"u")return;const n=new ResizeObserver(vd);return n.observe(t),()=>n.disconnect()},[vd]);const hn=d.useCallback((t,n)=>{const a={modelX:[-2e3,2e3],modelY:[-2e3,2e3],backgroundX:[-2e3,2e3],backgroundY:[-2e3,2e3]};let[l,s]=a[t];return fo&&(t==="modelX"||t==="modelY")&&(l=Math.max(l,t==="modelX"?-86:-58),s=Math.min(s,t==="modelX"?86:58)),xe(n,0,l,s)},[fo]),kd=d.useCallback((t,n)=>{t==="modelX"&&Ot(hn("modelX",n)),t==="modelY"&&Kt(hn("modelY",n)),t==="modelScale"&&jo(is(n)),t==="modelRotation"&&vr(xe(n,0,-180,180)),t==="backgroundX"&&Gi(hn("backgroundX",n)),t==="backgroundY"&&Ki(hn("backgroundY",n)),t==="backgroundScale"&&ji(is(n)),t==="backgroundRotation"&&kr(xe(n,0,-180,180)),t==="backgroundOpacity"&&qo(Pi(n))},[hn,kr,ji,Gi,Ki,vr,jo,Ot,Kt]),Os=d.useMemo(()=>wl(Te,H,W),[W,H,Te]),Ci=d.useCallback(t=>{const n=t.lockAspectRatio??Lt;Wo(n);const a=wl(Te,H,W),l=a.width>0&&a.height>0?a.width/a.height:H/Math.max(1,W);let s=t.width===void 0?a.width:xe(t.width,a.width,ci,eo,!0),c=t.height===void 0?a.height:xe(t.height,a.height,ci,eo,!0);n&&(t.width!==void 0&&t.height===void 0?c=xe(s/Math.max(1e-4,l),a.height,ci,eo,!0):t.height!==void 0&&t.width===void 0&&(s=xe(c*l,a.width,ci,eo,!0)));const m=is(Te.scale)/100,u=Math.max(1,H*m),v=Math.max(1,W*m);hd(xe(s/u*100,100,Ba,$a),xe(c/v*100,100,Ba,$a))},[W,H,Lt,Te,hd]),Bs=d.useCallback(t=>{const n=wl(Te,H,W),a=n.width>0&&n.height>0?n.width/n.height:H/Math.max(1,W),l=H/Math.max(1,W);let s=H,c=W;t==="contain"?a>l?c=s/Math.max(1e-4,a):s=c*a:a>l?s=c*a:c=s/Math.max(1e-4,a),Ci({width:s,height:c})},[W,H,Te,Ci]),$s=d.useCallback((t,n,a)=>{if(n.button!==0||!Le)return;if(t==="model"&&_e!==t){y(t==="model"?i("studio.toast.select_model_layer"):r("studio.toast.select_image_layer","已选中图片层。"));return}const l=a??(t==="background"?yo.current:St.current),s=t==="model"?bt.current.find(tt=>tt.id===l):null,c=t==="background"?$n.current.find(tt=>tt.id===l):null;if(t==="model"&&!s||t==="background"&&(!c||!c.visible))return;const m=t==="model"?l===St.current?wt:!!(s!=null&&s.locked):l===yo.current?Rn:!!(c!=null&&c.locked);if(t==="model"&&m){y(i("studio.toast.model_locked"));return}if(t==="background"&&m){y(r("studio.toast.background_locked","背景层已锁定。"));return}n.preventDefault(),n.stopPropagation();const u=n.clientX,v=n.clientY,w=t==="model"?l:null,b=t==="background"?l:null,C=qe(w===St.current?Te:(s==null?void 0:s.transform)??Te),x=qe(b===yo.current?dt:(c==null?void 0:c.transform)??dt),j=C.x,A=C.y,R=x.x,ee=x.y;let ae=null,X=null,he=null;const Je=tt=>{if(!w)return;const Xe=qe({...C,x:tt.x,y:tt.y});yn(Ae=>Ae.map(Re=>Re.id===w?{...Re,transform:Xe}:Re)),St.current===w&&uo(Xe)},ke=tt=>{if(!b)return;const Xe=qe({...x,x:tt.x,y:tt.y});Yt(Ae=>Ae.map(Re=>Re.id===b?{...Re,transform:Xe}:Re)),yo.current===b&&ms(Xe)},Ei=tt=>{const Xe=tt.clientX-u,Ae=tt.clientY-v;X={x:t==="model"?hn("modelX",j+Xe):hn("backgroundX",R+Xe),y:t==="model"?hn("modelY",A+Ae):hn("backgroundY",ee+Ae)},ae===null&&(ae=window.requestAnimationFrame(()=>{if(ae=null,!!X){if(t==="model"){he=X,X=null,Je(he);return}he=X,X=null,ke(he)}}))},B=()=>{window.removeEventListener("pointermove",Ei),ae!==null&&(window.cancelAnimationFrame(ae),ae=null),X?t==="model"?(he=X,Je(he)):(he=X,ke(he)):he&&(t==="model"?Je(he):ke(he)),Fi(i(t==="model"?"studio.stage.drag_hint_model":"studio.stage.drag_hint_background")),y(i(t==="model"?"studio.toast.model_moved":"studio.toast.background_moved"))};window.addEventListener("pointermove",Ei),window.addEventListener("pointerup",B,{once:!0})},[xh,vh,_e,Rn,dt,U,hn,Le,fo,wt,Te,y]),_r=d.useCallback((t,n,a=!1)=>{const l=Oe(t),s=Oe(n,Qe.height);bi(l),xi(s),a||y(i("studio.toast.stage_size_applied",{width:l,height:s}))},[y,i]),op=()=>{Ot(0),Kt(0),jo(100),vr(0),hd(100,100),ze("model",{flipX:!1,flipY:!1}),Wo(!0),Gi(0),Ki(0),ji(100),kr(0),ze("background",{flipX:!1,flipY:!1}),Yo("#090d0f"),sn("transparent"),mo(null),Go(null),Ko(null),Xo(null),qo(100),ho(!0),hs(!1),ea(1),ta(0),na(!0);const t=on(to,{name:r("studio.layers.image_layer_name","图片层 1"),mode:"transparent",color:"#090d0f",transform:{x:0,y:0,scale:100,rotation:0},visible:!0,locked:!1,opacity:100,fitMode:"contain",playbackMode:"static",playbackSpeed:1,timeOffset:0,followTimeline:!0});Yt([t]),fr(t.id),Bn(n=>Po(n.filter(a=>a.type!=="background"),[t],bt.current)),er(!1),_r(Qe.width,Qe.height,!0),y(i("studio.toast.stage_reset"))},Hs=(t,n=!1)=>{const a=h!=null&&h.hasCharacterPages?h:null,l=i(t==="gallery"?"studio.nav.gallery":"studio.nav.restaurant");if(!a){y(i("studio.toast.resource_route_blocked",{routeName:l}));return}xf(t==="gallery"?"civilopedia":"restaurant",a.contentCode),o(t==="gallery"?`/character/${a.contentCode}`:`/restaurant/${a.contentCode}`)},jh=()=>{Rt(null),ii("export"),window.requestAnimationFrame(()=>{var t;(t=L.current)==null||t.scrollIntoView({block:"start",behavior:"smooth"})})},va=t=>{if(h&&["mainCg","eventCg"].includes(h.otherSubcategory)&&!mn&&!Le&&!xn&&Ce.length<=1){const n=$r(h,te);if(H===n.viewportWidth&&W===n.viewportHeight){const a=$r(h,t);bi(Oe(a.viewportWidth)),xi(Oe(a.viewportHeight))}}qa(t),$o(0),Rt(null),Nt||y(i("studio.toast.motion_changed",{motion:t}))},ap=t=>{if(t.resourceId){qn(null),nt(t.resourceId),lo("Normal"),Rt(null),Nt||y(i("studio.toast.external_skin_changed",{skin:t.displayLabel??Ao(t.label)}));return}},rp=t=>{var a;lo(t);const n=h?zu(h.code,h.identity.folderName,t):null;n!==null&&(br.current={previous:((a=br.current)==null?void 0:a.previous)??Me,applied:n},po(n)),Rt(null),Nt||y(i("studio.toast.internal_skin_changed",{skin:t}))},qi=d.useCallback((t,n={})=>{const a=me.get(t.resourceId);a&&(ld.current=!0,St.current=t.id,gr(t.id),Yl("model"),nt(a.id),qn(null),qa(t.animationName||a.motion),lo(t.skinName||a.skin),uo(qe(t.transform)),Wo(t.targetLockAspectRatio),tr(!t.visible),nr(t.locked),ti(t.attachmentVisibility??{}),On(t.attachmentReplacements??{}),ko(t.attachmentAdjustments??{}),hr(null),$o(0),n.clearAttachmentSelection!==!1&&(Yi.current=null,_i.current=null,ua(null),ma(null),_o(null)),window.setTimeout(()=>{ld.current=!1},0))},[me]),Wn=d.useCallback((t,n)=>{const a=bt.current.find(l=>l.id===t);a&&qi(a,n)},[qi]),Ti=d.useCallback(t=>{dd.current=!0,yo.current=t.id,fr(t.id),Yl("background"),sn(t.mode),Yo(t.color),Go(t.image),mo(t.assetId),Ko(t.fileName),Xo(t.mimeType),ms(qe(t.transform)),ho(t.visible),hs(t.locked),qo(Pi(t.opacity)),Ja(t.fitMode),Vo(t.width),Jo(t.height),Qo(t.naturalWidth),Zo(t.naturalHeight),Qa(t.lockAspectRatio),Za(t.playbackMode),ea(Bt(t.playbackSpeed)),ta(an(t.timeOffset)),na(t.followTimeline),window.setTimeout(()=>{dd.current=!1},0)},[]),ka=d.useCallback(t=>{const n=$n.current.find(a=>a.id===t);n&&Ti(n)},[Ti]),sp=d.useCallback(async()=>{const t=fe.map(c=>{const u=c.id===U&&h?fl({id:c.id,resource:h,selectedMotion:te,selectedSkin:ye,modelTransform:Te,visible:!yt,locked:wt,playbackSpeed:fe.length>1?c.playbackSpeed:Me,timeOffset:c.timeOffset,targetLockAspectRatio:Lt,attachmentVisibility:We,attachmentReplacements:ce,attachmentAdjustments:Ft}):c,v=qe(u.transform),w=wl(v,H,W),b=me.get(u.resourceId);return{currentLayer:u,resource:b,projectLayer:{id:u.id,resourceId:u.resourceId,resourceCode:(b==null?void 0:b.code)??u.resourceId,displayName:(b==null?void 0:b.name)??u.resourceId,animationName:u.animationName,skinName:u.skinName,visible:u.visible,locked:u.locked,playbackSpeed:Bt(u.playbackSpeed),timeOffset:an(u.timeOffset),targetLockAspectRatio:u.targetLockAspectRatio,transform:{...v,targetWidth:w.width,targetHeight:w.height},attachmentVisibility:u.attachmentVisibility,attachmentReplacements:Object.fromEntries(Object.entries(u.attachmentReplacements).map(([C,x])=>[C,{assetId:x.assetId??null,fileName:x.fileName??null,mimeType:null,transform:x.transform?_l(x.transform):void 0,fitMode:x.fitMode,overflowMode:x.overflowMode,replacementMode:x.replacementMode,hideOriginal:x.hideOriginal,naturalWidth:x.naturalWidth,naturalHeight:x.naturalHeight}])),attachmentAdjustments:Object.fromEntries(Object.entries(u.attachmentAdjustments).map(([C,x])=>[C,Kr(x)]))}}}),n=Ce.map(c=>{const m=c.id===De,u=on(c.id,m?{...c,mode:ot,color:ct,image:xn,assetId:vt,fileName:vi,mimeType:ki,transform:dt,visible:Jn,locked:Rn,opacity:Vn,fitMode:kt,width:$t,height:Ht,naturalWidth:ln,naturalHeight:dn,lockAspectRatio:cn,playbackMode:vn,playbackSpeed:Ln,timeOffset:Pn,followTimeline:Qn}:c),v=qe(u.transform);return{currentLayer:u,projectLayer:{id:u.id,name:u.name,mode:u.mode,assetId:u.assetId,fileName:u.fileName,mimeType:u.mimeType,visible:u.visible,locked:u.locked,opacity:Pi(u.opacity),fitMode:u.fitMode,width:u.width,height:u.height,naturalWidth:u.naturalWidth,naturalHeight:u.naturalHeight,lockAspectRatio:u.lockAspectRatio,playbackMode:u.playbackMode,playbackSpeed:Bt(u.playbackSpeed),timeOffset:an(u.timeOffset),followTimeline:u.followTimeline,transform:v,color:u.color}}}),a=new Set;n.forEach(({currentLayer:c})=>{c.assetId&&a.add(c.assetId)}),t.forEach(({currentLayer:c})=>{Object.values(c.attachmentReplacements).forEach(m=>{m.assetId&&a.add(m.assetId)})});const l=new Map;await Promise.all(Array.from(a).map(async c=>{try{const m=await Ur(c);m&&l.set(c,{fileName:m.fileName??null,mimeType:m.mimeType??m.blob.type??null})}catch{}}));const s=[];return n.forEach(({currentLayer:c,projectLayer:m})=>{if(!c.assetId)return;const u=l.get(c.assetId);m.fileName=(u==null?void 0:u.fileName)??m.fileName,m.mimeType=(u==null?void 0:u.mimeType)??m.mimeType,s.push({assetId:c.assetId,kind:"imageLayer",fileName:m.fileName,mimeType:m.mimeType,usage:{type:"imageLayer",imageLayerId:c.id}})}),t.forEach(({currentLayer:c,projectLayer:m})=>{Object.entries(c.attachmentReplacements).forEach(([u,v])=>{if(!v.assetId)return;const w=l.get(v.assetId),b=m.attachmentReplacements[u];b&&(b.fileName=(w==null?void 0:w.fileName)??b.fileName??v.fileName??null,b.mimeType=(w==null?void 0:w.mimeType)??b.mimeType??null),s.push({assetId:v.assetId,kind:"attachmentReplacement",fileName:(b==null?void 0:b.fileName)??v.fileName??null,mimeType:(b==null?void 0:b.mimeType)??null,usage:{type:"attachmentReplacement",modelLayerId:c.id,partId:u}})})}),{schema:im,mirrorFold:Xn,memeEffects:it,trimTransparent:ra,version:om,savedAt:new Date().toISOString(),app:{name:"journey-of-the-priest",studioVersion:1},canvas:{width:H,height:W,fps:Dt,playbackSpeed:Me,backgroundMode:ot,backgroundColor:ct},modelLayers:t.map(({projectLayer:c})=>c),imageLayers:n.map(({projectLayer:c})=>c),layerOrder:at.map(c=>({type:c.type==="background"?"image":"model",id:c.id})),activeModelLayerId:U??null,activeImageLayerId:De??null,assets:s}},[De,U,h,Ft,ce,We,vt,ct,vi,kt,Qn,Ht,xn,Rn,cn,ki,ot,dn,ln,Vn,vn,Ln,Pn,dt,Jn,$t,Ce,W,H,Dt,yt,fe,wt,Lt,Te,at,Xn,it,Me,me,te,ye,ra]),lp=d.useCallback(async()=>{try{const t=await sp(),n=JSON.stringify(t,null,2),a=new Blob([n],{type:"application/json"}),l=URL.createObjectURL(a),s=document.createElement("a");s.href=l,s.download=`trickcal-studio-${t.savedAt.replace(/[:.]/g,"-")}.studio.json`,document.body.appendChild(s),s.click(),s.remove(),window.setTimeout(()=>URL.revokeObjectURL(l),0),y(r("studio.toast.project_exported","Studio 工程文件已导出。"))}catch(t){y(t instanceof Error?t.message:r("studio.toast.project_export_failed","Studio 工程文件导出失败。"))}},[sp,y,r]),dp=d.useCallback(async t=>{var a,l,s,c,m,u,v;const n=[];try{const w=JSON.parse(await t.text());if(w.schema!==im||w.version!==om)throw new Error(r("studio.toast.project_invalid","这不是可识别的 Studio 工程文件。"));const b=Array.isArray(w.assets)?w.assets:[],C=new Map;b.forEach(B=>{var tt,Xe;B.kind==="imageLayer"&&((tt=B.usage)==null?void 0:tt.type)==="imageLayer"&&C.set(`image:${B.usage.imageLayerId}`,B),B.kind==="attachmentReplacement"&&((Xe=B.usage)==null?void 0:Xe.type)==="attachmentReplacement"&&C.set(`replacement:${B.usage.modelLayerId}:${B.usage.partId}`,B)}),Ye.current=!0;const x=async(B,tt)=>{const Xe=await Promise.all(Object.entries(tt??{}).map(async([Ae,Re])=>{const Et=C.get(`replacement:${B}:${Ae}`),nn=Re.assetId??(Et==null?void 0:Et.assetId)??null;let Gn=Re.fileName??(Et==null?void 0:Et.fileName)??null,si="";if(nn)try{const Ri=await Ur(nn);Ri?(si=Hn(Ri.blob),Gn=Ri.fileName??Gn):n.push(r("studio.project_missing.attachment_replacement","{fileName}（模型层 {modelLayerId} / 贴图 {partId}）",{fileName:Gn??nn,modelLayerId:B,partId:Ae}))}catch{n.push(r("studio.project_missing.attachment_replacement","{fileName}（模型层 {modelLayerId} / 贴图 {partId}）",{fileName:Gn??nn,modelLayerId:B,partId:Ae}))}return[Ae,{src:si,assetId:nn??void 0,fileName:Gn??void 0,transform:Re.transform?_l(Re.transform):void 0,fitMode:Re.fitMode,overflowMode:Re.overflowMode,replacementMode:Re.replacementMode,hideOriginal:Re.hideOriginal,naturalWidth:Re.naturalWidth,naturalHeight:Re.naturalHeight}]}));return Object.fromEntries(Xe)},j=Array.isArray(w.modelLayers)?w.modelLayers:[],A=await Promise.all(j.map(async(B,tt)=>{const Xe=typeof B.resourceId=="string"?B.resourceId:"",Ae=me.get(Xe),Re=typeof B.id=="string"&&B.id?B.id:`model-layer-${tt+1}`,Et=await x(Re,B.attachmentReplacements),nn={id:Re,resourceId:Xe,animationName:typeof B.animationName=="string"?B.animationName:(Ae==null?void 0:Ae.motion)??"",skinName:typeof B.skinName=="string"?B.skinName:(Ae==null?void 0:Ae.skin)??"Normal",transform:qe(B.transform),visible:B.visible!==!1,locked:B.locked===!0,playbackSpeed:Bt(B.playbackSpeed),timeOffset:an(B.timeOffset),targetLockAspectRatio:B.targetLockAspectRatio!==!1,attachmentVisibility:B.attachmentVisibility??{},attachmentReplacements:Et,attachmentAdjustments:Object.fromEntries(Object.entries(B.attachmentAdjustments??{}).map(([Gn,si])=>[Gn,Kr(si)]))};return Ae||n.push(r("studio.project_missing.model_resource","{name}（模型层 {modelLayerId} / resourceId: {resourceId}）",{name:B.displayName??B.resourceCode??Xe,modelLayerId:Re,resourceId:Xe||r("studio.project_missing.empty_resource_id","缺失")})),Ae?Tl(Re,Ae,nn):nn})),R=Array.isArray(w.imageLayers)?w.imageLayers:[],ee=await Promise.all(R.map(async(B,tt)=>{const Xe=typeof B.id=="string"&&B.id?B.id:`background-layer-${tt+1}`,Ae=C.get(`image:${Xe}`),Re=B.assetId??(Ae==null?void 0:Ae.assetId)??null;let Et=B.fileName??(Ae==null?void 0:Ae.fileName)??null,nn=B.mimeType??(Ae==null?void 0:Ae.mimeType)??null,Gn=null;if(Re){const si=gl(Re);if(si){Et=Et??si.fileName,nn=nn??si.mimeType;try{Gn=await yr(si)}catch{n.push(`内置背景原图无法安全读取：${Et??si.label}`)}}else try{const Ri=await Ur(Re);Ri?(Gn=Hn(Ri.blob),Et=Ri.fileName??Et,nn=Ri.mimeType??Ri.blob.type??nn):n.push(r("studio.project_missing.image_layer","{fileName}（图片/GIF 层 {layerName}）",{fileName:Et??Re,layerName:B.name??Xe}))}catch{n.push(r("studio.project_missing.image_layer","{fileName}（图片/GIF 层 {layerName}）",{fileName:Et??Re,layerName:B.name??Xe}))}}return on(Xe,{name:B.name,mode:B.mode??"transparent",color:B.color??ct,image:Gn,assetId:Re,fileName:Et,mimeType:nn,transform:B.transform,visible:B.visible!==!1,locked:B.locked===!0,opacity:B.opacity,fitMode:B.fitMode,width:B.width,height:B.height,naturalWidth:B.naturalWidth,naturalHeight:B.naturalHeight,lockAspectRatio:B.lockAspectRatio!==!1,playbackMode:B.playbackMode,playbackSpeed:B.playbackSpeed,timeOffset:B.timeOffset,followTimeline:B.followTimeline!==!1})})),ae=A.length>0?A:bt.current,X=ee.length>0?ee:[on(to,{color:((a=w.canvas)==null?void 0:a.backgroundColor)??ct})],he=Array.isArray(w.layerOrder)?w.layerOrder.map(B=>({type:B.type==="image"?"background":"model",id:B.id})):[],Je=Po(he,X,ae),ke=ae.find(B=>B.id===w.activeModelLayerId&&me.has(B.resourceId))??ae.find(B=>me.has(B.resourceId))??ae[0],Ei=X.find(B=>B.id===w.activeImageLayerId)??X[0];if(bi(Oe((l=w.canvas)==null?void 0:l.width)),ss.replace({mirror:mi(w.mirrorFold),effects:mt(w.memeEffects)}),id(w.trimTransparent===!0),xi(Oe((s=w.canvas)==null?void 0:s.height,Qe.height)),Wi(Wr((c=w.canvas)==null?void 0:c.fps)),po(Bt((m=w.canvas)==null?void 0:m.playbackSpeed)),sn(((u=w.canvas)==null?void 0:u.backgroundMode)??"transparent"),Yo(((v=w.canvas)==null?void 0:v.backgroundColor)??"#090d0f"),yn(ae),Yt(X),Bn(Je),Kc({}),ge.current=!0,ke&&me.has(ke.resourceId)?qi(ke,{clearAttachmentSelection:!0}):ke&&(St.current=ke.id,gr(ke.id),Yl("model")),Ei&&Ti(Ei),n.length>0){const B=[r("studio.project_missing.alert_title","Studio 工程已导入，但以下资源或本地素材需要重新选择："),...n.slice(0,20),n.length>20?r("studio.project_missing.alert_more","还有 {count} 项未列出。",{count:n.length-20}):""].filter(Boolean).join(`
`);window.alert(B),y(r("studio.toast.project_imported_with_missing","工程已导入，但有缺失素材需要重新选择。"))}else y(r("studio.toast.project_imported","Studio 工程文件已导入。"))}catch(w){y(w instanceof Error?w.message:r("studio.toast.project_import_failed","Studio 工程文件导入失败。"))}finally{window.setTimeout(()=>{Ye.current=!1},0)}},[Ti,qi,ct,Hn,yr,bt,me,y,r]),cp=d.useCallback(t=>{var a;const n=(a=t.target.files)==null?void 0:a[0];t.target.value="",n&&dp(n)},[dp]),pp=d.useCallback(()=>{if(!h){y(i("studio.toast.wait_skeleton"));return}if(bt.current.length>=Dr){y(r("studio.toast.model_layer_limit","已达到 {count} 个模型层上限。",{count:Dr}));return}const t=bt.current.length+1,n=fl({id:`model-layer-${Date.now()}`,resource:h,selectedMotion:te,selectedSkin:ye,modelTransform:qe({...Te,x:Te.x+36*(t-1)}),visible:!0,locked:!1,playbackSpeed:Me,timeOffset:0,targetLockAspectRatio:Lt,attachmentVisibility:We,attachmentReplacements:ce,attachmentAdjustments:Ft});yn(a=>[...a,n]),Bn(a=>[...Po(a,$n.current,bt.current),{type:"model",id:n.id}]),Ho(!0),qi(n),y(r("studio.toast.model_layer_added","已添加模型层 {index}",{index:t}))},[h,qi,Ft,ce,We,Te,Lt,Me,te,ye,y,i,r]),up=d.useCallback(t=>{const n=bt.current;if(n.length<=1||t===li){y(r("studio.toast.model_layer_keep_default","默认模型层不能删除。"));return}const a=n.findIndex(c=>c.id===t),l=n.filter(c=>c.id!==t),s=l[Math.max(0,Math.min(a,l.length-1))]??l[0];yn(l),Bn(c=>c.filter(m=>!(m.type==="model"&&m.id===t))),U===t&&s&&qi(s),y(r("studio.toast.model_layer_removed","已删除模型层。"))},[U,qi,y,r]),mp=d.useCallback(t=>{yn(n=>n.map(a=>a.id===t?{...a,visible:!a.visible}:a)),t===U&&tr(n=>!n)},[U]),hp=d.useCallback(t=>{yn(n=>n.map(a=>a.id===t?{...a,locked:!a.locked}:a)),t===U&&nr(n=>!n)},[U]),Ws=d.useCallback(t=>{yn(n=>n.map(a=>a.id===U?{...a,playbackSpeed:t.playbackSpeed===void 0?a.playbackSpeed:Bt(t.playbackSpeed),timeOffset:t.timeOffset===void 0?a.timeOffset:an(t.timeOffset)}:a))},[U]),gp=d.useCallback(()=>{if($n.current.length>=Fr){y(r("studio.toast.image_layer_limit","已达到 {count} 个图片层上限。",{count:Fr}));return}const t=$n.current.length+1,n=on(`background-layer-${Date.now()}`,{name:r("studio.layers.image_layer_name","图片层 {index}",{index:t}),mode:"transparent",color:ct,transform:{x:0,y:0,scale:100,rotation:0},visible:!0,locked:!1,opacity:100,width:null,height:null,naturalWidth:null,naturalHeight:null,lockAspectRatio:!0,playbackSpeed:1,timeOffset:0,followTimeline:!0});Yt(a=>[...a,n]),Bn(a=>{const l=Po(a,$n.current,bt.current),s=l.findIndex(u=>u.type==="model"),c=[...l],m={type:"background",id:n.id};return s>=0?c.splice(s,0,m):c.push(m),c}),Ho(!0),Ti(n),y(r("studio.toast.image_layer_added","已添加图片层 {index}",{index:t}))},[Ti,ct,y,r]),fp=d.useCallback(t=>{var c;const n=$n.current,a=n.findIndex(m=>m.id===t);if(a<0)return;if(n.length<=1){const m=on(t,{name:(c=n[a])==null?void 0:c.name,mode:"transparent",color:"#090d0f",transform:{x:0,y:0,scale:100,rotation:0},visible:!0,locked:!1,opacity:100,fitMode:"contain",width:null,height:null,naturalWidth:null,naturalHeight:null,lockAspectRatio:!0,playbackMode:"static",playbackSpeed:1,timeOffset:0,followTimeline:!0});Yt([m]),Ti(m),y(r("studio.toast.image_layer_reset","已清空默认图片层。"));return}const l=n.filter(m=>m.id!==t),s=l[Math.max(0,Math.min(a,l.length-1))]??l[0];Yt(l),Bn(m=>m.filter(u=>!(u.type==="background"&&u.id===t))),De===t&&s&&Ti(s),y(r("studio.toast.image_layer_removed","已删除图片层。"))},[De,Ti,y,r]),yd=d.useCallback(t=>{Yt(n=>n.map(a=>a.id===t?{...a,visible:!a.visible}:a)),t===De&&ho(n=>!n)},[De]),wd=d.useCallback(t=>{Yt(n=>n.map(a=>a.id===t?{...a,locked:!a.locked}:a)),t===De&&hs(n=>!n)},[De]),Yn=d.useCallback(t=>{Yt(n=>n.map(a=>a.id===De?{...a,playbackSpeed:t.playbackSpeed===void 0?a.playbackSpeed:Bt(t.playbackSpeed),fitMode:t.fitMode??a.fitMode,width:t.width===void 0?a.width:t.width,height:t.height===void 0?a.height:t.height,naturalWidth:t.naturalWidth===void 0?a.naturalWidth:t.naturalWidth,naturalHeight:t.naturalHeight===void 0?a.naturalHeight:t.naturalHeight,lockAspectRatio:t.lockAspectRatio===void 0?a.lockAspectRatio:t.lockAspectRatio,playbackMode:t.playbackMode??a.playbackMode,timeOffset:t.timeOffset===void 0?a.timeOffset:an(t.timeOffset),followTimeline:t.followTimeline===void 0?a.followTimeline:t.followTimeline}:a)),t.playbackSpeed!==void 0&&ea(Bt(t.playbackSpeed)),t.fitMode!==void 0&&Ja(t.fitMode),t.width!==void 0&&Vo(t.width),t.height!==void 0&&Jo(t.height),t.naturalWidth!==void 0&&Qo(t.naturalWidth),t.naturalHeight!==void 0&&Zo(t.naturalHeight),t.lockAspectRatio!==void 0&&Qa(t.lockAspectRatio),t.playbackMode!==void 0&&Za(t.playbackMode),t.timeOffset!==void 0&&ta(an(t.timeOffset)),t.followTimeline!==void 0&&na(t.followTimeline)},[De]),Vi=d.useCallback(t=>{const n=Aa({stageWidth:H,stageHeight:W,sourceWidth:ln??$t??H,sourceHeight:dn??Ht??W,fitMode:t});Yn({fitMode:t,width:n.width,height:n.height}),ji(100)},[Ht,dn,ln,$t,W,H,ji,Yn]),ya=d.useCallback(t=>{const n=Sn($t,ln??H),a=Sn(Ht,dn??W),l=t.lockAspectRatio??cn,s=n>0&&a>0?n/a:1;let c=t.width===void 0?n:Sn(t.width,n),m=t.height===void 0?a:Sn(t.height,a);l&&t.width!==void 0&&t.height===void 0?m=Sn(c/s,a):l&&t.height!==void 0&&t.width===void 0&&(c=Sn(m*s,n)),Yn({width:c,height:m,lockAspectRatio:l})},[Ht,cn,dn,ln,$t,W,H,Yn]),Ji=d.useCallback((t,n)=>{Bn(a=>{const l=Po(a,$n.current,bt.current),s=l.findIndex(u=>u.type===t.type&&u.id===t.id);if(s<0)return l;const c=n==="up"?s+1:s-1;if(c<0||c>=l.length)return l;const m=[...l];return[m[s],m[c]]=[m[c],m[s]],m})},[]),bp=d.useCallback((t,n,a)=>{const l=Sn(n),s=Sn(a);Yt(c=>c.map(m=>{if(m.id!==t||m.naturalWidth===l&&m.naturalHeight===s)return m;const v=m.width===null||m.height===null?Aa({stageWidth:H,stageHeight:W,sourceWidth:l,sourceHeight:s,fitMode:m.fitMode}):null;return on(m.id,{...m,naturalWidth:l,naturalHeight:s,width:(v==null?void 0:v.width)??m.width,height:(v==null?void 0:v.height)??m.height})})),yo.current===t&&(Qo(l),Zo(s),Vo(c=>c??Aa({stageWidth:H,stageHeight:W,sourceWidth:l,sourceHeight:s,fitMode:kt}).width),Jo(c=>c??Aa({stageWidth:H,stageHeight:W,sourceWidth:l,sourceHeight:s,fitMode:kt}).height))},[kt,W,H]),xp=d.useCallback(t=>{const n=qc.current,a=n>0&&Math.abs(n-t.duration)>.001?{...t,duration:n,currentTime:Math.max(0,Math.min(n,t.currentTime))}:t;hr(s=>s&&s.animationName===a.animationName&&s.skinName===a.skinName&&Math.abs(s.duration-a.duration)<.001&&Math.abs(s.currentTime-a.currentTime)<.08?s:a);const l=a.duration>0?Math.max(0,Math.min(100,a.currentTime/a.duration*100)):0;$o(s=>Math.abs(s-l)<.25?s:l)},[]);d.useEffect(()=>{od.current=ie},[ie]);const vp=d.useCallback(t=>{var m;const n=Math.max(0,Math.min(100,t));$o(n);const a=md.current||((Ne==null?void 0:Ne.duration)??0);if(a<=0)return;const l=n>=99.999,s=Math.min(1/60,Math.max(.001,a*.001)),c=l?Math.max(0,a-s):a*n/100;l&&Wl(!1),(m=O.current)==null||m.seekToPlaybackTime(c),hr(u=>u&&{...u,currentTime:c})},[Ne==null?void 0:Ne.duration]),wa=d.useMemo(()=>[...pt].sort((t,n)=>t.track-n.track||t.startTime-n.startTime),[pt]),Ys=d.useMemo(()=>hj(wa),[wa]),kp=d.useMemo(()=>new Set(wi.filter(t=>!t.hidden).map(t=>t.index)),[wi]),Sr=d.useMemo(()=>wa.filter(t=>kp.has(t.track)),[wa,kp]),_a=d.useMemo(()=>pt.reduce((t,n)=>Math.max(t,Il(n)),0),[pt]),Ue=d.useMemo(()=>gn(Math.max(Jd,Ts,_a,pt.length===0?(Ne==null?void 0:Ne.duration)??0:0),Jd,pi),[pt.length,_a,Ts,Ne==null?void 0:Ne.duration]),At=d.useMemo(()=>{if(!la||Sr.length===0)return null;const t=Sr.some(n=>n.track===0);return{version:1,clips:t?Sr:Sr.map(n=>n.track>0&&n.loop?{...n,duration:pi}:n),durationMode:t?"clips":"fallbackAnimation"}},[Sr,la]),jr=d.useMemo(()=>{const t=((At==null?void 0:At.clips)??[]).filter(n=>n.track>0&&/^track_\d+$/i.test(n.animationName));return t.length===0?null:{version:1,durationMode:"fallbackAnimation",clips:t.map(n=>({...n,duration:pi}))}},[At]),Mi=(At==null?void 0:At.durationMode)==="clips"?_a:0;qc.current=Mi;const Nr=Mi>0?Mi:(Ne==null?void 0:Ne.duration)??0;md.current=Nr;const le=d.useMemo(()=>pt.find(t=>t.id===da)??null,[pt,da]),rt=d.useMemo(()=>Ys.find(t=>t.id===ca)??null,[Ys,ca]);d.useEffect(()=>{md.current=Nr},[Nr]),d.useEffect(()=>{var a,l;if(Mi<=0)return;const t=((l=(a=O.current)==null?void 0:a.getPlaybackSnapshot())==null?void 0:l.currentTime)??(Ne==null?void 0:Ne.currentTime)??0;hr(s=>s&&Math.abs(s.duration-Mi)>.001?{...s,duration:Mi,currentTime:Math.max(0,Math.min(Mi,s.currentTime))}:s);const n=Math.max(0,Math.min(100,t/Mi*100));$o(s=>Math.abs(s-n)<.25?s:n)},[Mi,Ne==null?void 0:Ne.currentTime]),d.useEffect(()=>{_a<=Ts||Yc(gn(xt(_a),Jd,pi))},[_a,Ts]),d.useEffect(()=>{!ca||rt||Wt(null)},[rt,ca]);const Qt=d.useCallback((t,n)=>{zn(a=>a.map(l=>{if(l.id!==t)return l;const s={...l,...n};return{...s,track:Nm(s.track),startTime:xt(pj(s.startTime)),duration:xt(Al(s.duration,l.duration)),mixDuration:s.mixDuration===void 0?void 0:xt(xe(s.mixDuration,0,0,5,!1)),timeScale:s.timeScale===void 0?void 0:xe(s.timeScale,1,.01,10,!1)}})),Wt(null)},[]),Gs=d.useCallback((t,n)=>{zn(a=>a.map(l=>l.id===t?{...l,mixDuration:xt(gn(n,0,Math.min(5,Math.max(Vt,l.duration))))}:l))},[]),_d=d.useCallback((t,n)=>{const a=$e.includes(te)?te:sl($e),l=t&&$e.includes(t)?t:a;if(!l){y(r("studio.composition.toast.no_animation","当前骨架没有可用动作。"));return}const s=yl(),c=Nm(n??(le==null?void 0:le.track)??0),m=Gr(l,(Ne==null?void 0:Ne.duration)??0);zn(u=>{const v=u.reduce((b,C)=>C.track===c?Math.max(b,Il(C)):b,0),w={id:s,track:c,animationName:l,startTime:xt(v),duration:m,loop:!0,mixDuration:c===0?Qd:0};return[...u,w]}),un(s),Wt(null),vo(!0),Dn(!0)},[$e,Ne==null?void 0:Ne.duration,le==null?void 0:le.track,te,y,r]),yp=d.useCallback(()=>{const t=$e.find(c=>c.toLowerCase()==="track_1")??$e.find(c=>/^track_\d+$/i.test(c));if(!t){y(r("studio.composition.toast.no_overlay","当前骨架没有可识别的附加轨道动作。"));return}const n=(te&&te!==t&&$e.includes(te)?te:$e.find(c=>c==="Idle_1"||c==="Idle"))??sl($e)??t,a=Gr(n,(Ne==null?void 0:Ne.duration)??0),l=yl(),s=[{id:yl(),track:0,animationName:n,startTime:0,duration:a,loop:!0},{id:l,track:1,animationName:t,startTime:0,duration:Gr(t,4),loop:!0}];zn(s),un(l),Wt(null),vo(!0),Dn(!0),y(r("studio.composition.toast.overlay_detected","已识别附加轨道：{animation}",{animation:t}))},[$e,Ne==null?void 0:Ne.duration,te,y,r]),Ks=d.useCallback(t=>{zn(n=>n.filter(a=>a.id!==t)),un(n=>n===t?null:n),Wt(null)},[]),wp=d.useCallback(()=>{Ms(t=>{const n=new Set(t.map(l=>l.index));let a=0;for(;n.has(a)&&a<=kc;)a+=1;return a>kc?(y(r("studio.composition.toast.track_limit","最多支持 8 条轨道。")),t):[...t,{index:a,label:"",hidden:!1}].sort((l,s)=>l.index-s.index)})},[y,r]),_p=d.useCallback(t=>{Ms(n=>n.map(a=>a.index===t?{...a,hidden:!a.hidden}:a))},[]),Sp=d.useCallback(t=>{if(t===0){y(r("studio.composition.toast.main_track_locked","主轨道不能删除。"));return}Ms(n=>n.filter(a=>a.index!==t)),zn(n=>n.filter(a=>a.track!==t)),Wt(null),un(n=>{const a=pt.find(l=>l.id===n);return(a==null?void 0:a.track)===t?null:n})},[pt,y,r]),jp=d.useCallback(t=>{zn(n=>{const a=n.filter(c=>c.track===t).sort((c,m)=>c.startTime-m.startTime||c.id.localeCompare(m.id));let l=0;const s=new Map;for(const c of a)s.set(c.id,xt(l)),l+=Math.max(Vt,c.duration);return n.map(c=>c.track===t&&s.has(c.id)?{...c,startTime:s.get(c.id)??c.startTime}:c)})},[]),Xs=d.useCallback((t,n)=>{zn(a=>{const l=a.find(b=>b.id===t);if(!l)return a;const s=a.filter(b=>b.track===l.track).sort((b,C)=>b.startTime-C.startTime||b.id.localeCompare(C.id)),c=s.findIndex(b=>b.id===t),m=c+n;if(c<0||m<0||m>=s.length)return a;const u=[...s];[u[c],u[m]]=[u[m],u[c]];let v=0;const w=new Map;for(const b of u)w.set(b.id,xt(v)),v+=Math.max(Vt,b.duration);return a.map(b=>b.track===l.track&&w.has(b.id)?{...b,startTime:w.get(b.id)??b.startTime}:b)})},[]),Sa=d.useCallback((t,n,a)=>{t.preventDefault(),t.stopPropagation(),un(n.id),Wt(null);try{t.currentTarget.setPointerCapture(t.pointerId)}catch{}So.current={id:n.id,mode:a,pointerId:t.pointerId,captureTarget:t.currentTarget,originClientX:t.clientX,originStartTime:n.startTime,originDuration:n.duration,timelineDuration:Ue}},[Ue]),Np=d.useCallback((t,n)=>{t.preventDefault(),t.stopPropagation(),un(null),Wt(n.id);try{t.currentTarget.setPointerCapture(t.pointerId)}catch{}So.current={id:n.nextClipId,mode:"link-resize",pointerId:t.pointerId,captureTarget:t.currentTarget,originClientX:t.clientX,originStartTime:n.startTime,originDuration:n.duration,timelineDuration:Ue}},[Ue]),Nh=d.useCallback(t=>{var c,m;if((c=t.target)!=null&&c.closest(".composition-drawer-actions"))return;const n=xr.current;if(!n)return;t.preventDefault(),t.stopPropagation();const a=n.getBoundingClientRect(),l=((m=n.parentElement)==null?void 0:m.getBoundingClientRect())??null,s=Fn??{x:a.left-((l==null?void 0:l.left)??0),y:a.top-((l==null?void 0:l.top)??0),width:a.width,height:a.height};pd.current={originClientX:t.clientX,originClientY:t.clientY,originX:s.x,originY:s.y,width:a.width,height:a.height},xo(Yr(s.x,s.y,a.width,a.height,l))},[Fn]),Cp=d.useCallback((t,n)=>{var m;const a=xr.current;if(!a)return;t.preventDefault(),t.stopPropagation();const l=a.getBoundingClientRect(),s=((m=a.parentElement)==null?void 0:m.getBoundingClientRect())??null,c=Fn??{x:l.left-((s==null?void 0:s.left)??0),y:l.top-((s==null?void 0:s.top)??0),width:l.width,height:l.height};ud.current={originClientX:t.clientX,originClientY:t.clientY,originWidth:l.width,originHeight:l.height,x:c.x,y:c.y,direction:n},xo(Yr(c.x,c.y,l.width,l.height,s))},[Fn]);d.useEffect(()=>{const t=m=>{const u=So.current,v=cd.current;if(!u||!v)return;const w=v.getBoundingClientRect(),b=w.width>0?(m-u.originClientX)/w.width*u.timelineDuration:0;zn(C=>C.map(x=>{if(x.id!==u.id)return x;if(u.mode==="link-resize")return{...x,mixDuration:xt(gn(u.originDuration+b,0,Math.min(5,Math.max(Vt,x.duration))))};if(u.mode==="resize-start"){const A=u.originStartTime+Math.max(Vt,u.originDuration),R=xt(gn(u.originStartTime+b,0,Math.max(0,A-Vt)));return{...x,startTime:R,duration:xt(Al(A-R,x.duration))}}if(u.mode==="resize-end")return{...x,duration:xt(Al(u.originDuration+b,x.duration))};const j=Math.max(0,u.timelineDuration-Math.max(Vt,x.duration));return{...x,startTime:xt(gn(u.originStartTime+b,0,j))}}))},n=()=>{Si.current=null;const m=ha.current;ha.current=null,m!==null&&t(m)},a=m=>{const u=So.current;!u||u.pointerId!==m.pointerId||(m.preventDefault(),ha.current=m.clientX,Si.current===null&&(Si.current=window.requestAnimationFrame(n)))},l=(m,u)=>{const v=So.current;if(!(!v||v.pointerId!==m.pointerId)){Si.current!==null&&(window.cancelAnimationFrame(Si.current),Si.current=null),u?(ha.current=m.clientX,n()):ha.current=null;try{v.captureTarget.hasPointerCapture(v.pointerId)&&v.captureTarget.releasePointerCapture(v.pointerId)}catch{}So.current=null}},s=m=>l(m,!0),c=m=>l(m,!1);return window.addEventListener("pointermove",a,{passive:!1}),window.addEventListener("pointerup",s),window.addEventListener("pointercancel",c),()=>{window.removeEventListener("pointermove",a),window.removeEventListener("pointerup",s),window.removeEventListener("pointercancel",c),Si.current!==null&&(window.cancelAnimationFrame(Si.current),Si.current=null),ha.current=null}},[]),d.useEffect(()=>{const t=l=>{var v;const s=pd.current,c=xr.current,m=((v=c==null?void 0:c.parentElement)==null?void 0:v.getBoundingClientRect())??null;if(s){xo(Yr(s.originX+l.clientX-s.originClientX,s.originY+l.clientY-s.originClientY,s.width,s.height,m));return}const u=ud.current;if(u){const w=l.clientX-u.originClientX,b=l.clientY-u.originClientY,C=u.direction.includes("w"),x=u.direction.includes("e"),j=u.direction.includes("n"),A=u.direction.includes("s");let R=u.x,ee=u.y,ae=u.originWidth,X=u.originHeight;x&&(ae=u.originWidth+w),C&&(ae=u.originWidth-w,R=u.x+w,ae<yc&&(ae=yc,R=u.x+u.originWidth-ae)),A&&(X=u.originHeight+b),j&&(X=u.originHeight-b,ee=u.y+b,X<wc&&(X=wc,ee=u.y+u.originHeight-X)),xo(Yr(R,ee,ae,X,m))}},n=()=>{pd.current=null,ud.current=null},a=()=>{const l=xr.current;xo(s=>{var u;if(!s||!l)return s;const c=l.getBoundingClientRect(),m=((u=l.parentElement)==null?void 0:u.getBoundingClientRect())??null;return Yr(s.x,s.y,s.width,c.height,m)})};return window.addEventListener("pointermove",t),window.addEventListener("pointerup",n),window.addEventListener("pointercancel",n),window.addEventListener("resize",a),()=>{window.removeEventListener("pointermove",t),window.removeEventListener("pointerup",n),window.removeEventListener("pointercancel",n),window.removeEventListener("resize",a)}},[]),d.useEffect(()=>{if(!yi)return;const t=n=>{const a=n.target;if(a!=null&&a.closest("input, textarea, select, [contenteditable='true']"))return;const l=pt.find(u=>u.id===da)??null,s=n.ctrlKey||n.metaKey,c=n.key.toLowerCase(),m=u=>{const v=yl(),w=wi.some(x=>x.index===u.track)?u.track:0,b=Math.max(0,pi-u.duration),C={...u,id:v,track:w,startTime:xt(gn(u.startTime+.15,0,b))};zn(x=>[...x,C]),un(v),Wt(null),vo(!0)};if(s&&c==="c"&&l){n.preventDefault(),Rs.current={...l},y(r("studio.composition.toast.clip_copied","已复制片段：{animation}",{animation:l.animationName}));return}if(s&&c==="v"&&Rs.current){n.preventDefault(),m(Rs.current);return}if(s&&c==="d"&&l){n.preventDefault(),Rs.current={...l},m(l);return}if((n.key==="Delete"||n.key==="Backspace")&&l){n.preventDefault(),Ks(l.id);return}if((n.key==="ArrowLeft"||n.key==="ArrowRight")&&l){n.preventDefault();const u=n.shiftKey?.5:.05,v=n.key==="ArrowLeft"?-1:1,w=Math.max(0,pi-l.duration);Qt(l.id,{startTime:xt(gn(l.startTime+u*v,0,w))});return}n.key==="Escape"&&(n.preventDefault(),un(null),Wt(null))};return window.addEventListener("keydown",t),()=>window.removeEventListener("keydown",t)},[pt,wi,yi,Ks,da,y,r,Qt]);const Tp=d.useCallback((t,n)=>{if(t!==St.current)return;Gc(n);const a=new Set(n.map(c=>c.id));ti(c=>Object.fromEntries(Object.entries(c).filter(([m])=>a.has(m)))),On(c=>Object.fromEntries(Object.entries(c).filter(([m])=>a.has(m)))),ko(c=>Object.fromEntries(Object.entries(c).filter(([m])=>a.has(m))));const l=Yi.current,s=_i.current===t&&!!(l&&a.has(l));s||(Yi.current=null,_i.current=null),ua(c=>s?c:null),ma(c=>s?c:null),_o(c=>c&&c.layerId===t&&a.has(c.partId)?c:null)},[]),Sd=d.useCallback((t,n)=>{ti(a=>{const l={...a};return n?delete l[t.id]:l[t.id]=!1,l}),n||_o(a=>(a==null?void 0:a.layerId)===U&&a.partId===t.id?null:a),y(n?r("studio.toast.part_shown","Part shown: {part}",{part:t.attachmentName}):r("studio.toast.part_hidden","Part hidden: {part}",{part:t.attachmentName}))},[U,y,r]),jd=d.useCallback((t,n)=>{if(!n)return;const a=Qu("part"),l=Hn(n),s=ce[t.id];On(c=>{var m,u,v,w,b,C,x;return{...c,[t.id]:{src:l,assetId:a,fileName:n.name,transform:((m=c[t.id])==null?void 0:m.transform)??{x:0,y:0,scale:100,rotation:0},fitMode:((u=c[t.id])==null?void 0:u.fitMode)??"contain",overflowMode:Sl(t,(v=c[t.id])==null?void 0:v.overflowMode),replacementMode:((w=c[t.id])==null?void 0:w.replacementMode)??(s==null?void 0:s.replacementMode)??"overlayFree",hideOriginal:((b=c[t.id])==null?void 0:b.hideOriginal)??(s==null?void 0:s.hideOriginal)??!1,naturalWidth:((C=c[t.id])==null?void 0:C.naturalWidth)??(s==null?void 0:s.naturalWidth)??null,naturalHeight:((x=c[t.id])==null?void 0:x.naturalHeight)??(s==null?void 0:s.naturalHeight)??null}}}),Br(l).then(c=>{On(m=>{const u=m[t.id];return!u||u.assetId!==a?m:{...m,[t.id]:{...u,naturalWidth:c.width,naturalHeight:c.height}}})}).catch(()=>{}),ti(c=>{const m={...c};return delete m[t.id],m}),_i.current=U,Yi.current=t.id,ma(U),ua(t.id),y(r("studio.toast.part_replaced","Part replaced: {part}",{part:t.attachmentName})),Zu({id:a,blob:n,fileName:n.name,mimeType:n.type,updatedAt:Date.now()}).catch(()=>{y(r("studio.toast.asset_cache_failed","图片已导入，但本地持久保存失败。"))})},[U,ce,Hn,y,r]),Mp=d.useCallback(t=>{On(n=>{const a={...n};return delete a[t.id],a}),y(r("studio.toast.part_replacement_cleared","Part replacement cleared: {part}",{part:t.attachmentName}))},[y,r]),ri=d.useCallback((t,n)=>{On(a=>{const l=a[t.id];if(!l)return a;const s=_l({...l.transform,...n.transform});return{...a,[t.id]:{...l,...n,overflowMode:Sl(t,n.overflowMode??l.overflowMode),transform:s}}})},[]),qs=d.useCallback((t,n)=>{ko(a=>({...a,[t.id]:Kr({...a[t.id],...n})}))},[]),Ap=d.useCallback(t=>{ko(n=>{const a={...n};return delete a[t.id],a}),y(r("studio.toast.part_adjustment_cleared","Original part adjustment reset: {part}",{part:t.attachmentName}))},[y,r]),Qi=d.useCallback((t,n,a=null,l=!1)=>{const s=zr(t,n);l&&(Se.current=s,Is(""),Es("all"),window.matchMedia("(max-width: 860px)").matches&&(ii("layers",!1),Bo("parts"))),_i.current=t,Yi.current=n,ma(t),ua(n),_o(a)},[ii]),Vs=d.useCallback(t=>{var u,v,w;if(!t.boneLocalPoint||!t.worldUnitsPerScreenPixel)return y(r("studio.toast.face_follow_unavailable","这个部件暂时无法用于脸部取景，请点击脸部的其他位置。")),!1;const n=Math.max(((u=t.screenBounds)==null?void 0:u.width)??0,((v=t.screenBounds)==null?void 0:v.height)??0,72),a=Math.max(1,n*t.worldUnitsPerScreenPixel*1.55),l=t.boneWorldTransform,s=l?l.a*l.d-l.b*l.c:0,c=l&&Math.abs(s)>1e-6?[[-a/2,-a/2],[a/2,-a/2],[a/2,a/2],[-a/2,a/2]].map(([b,C])=>({x:t.boneLocalPoint.x+(l.d*b-l.b*C)/s,y:t.boneLocalPoint.y+(-l.c*b+l.a*C)/s})):void 0,m={slotIndex:t.part.slotIndex,slotName:t.part.slotName,boneName:t.boneName,localX:t.boneLocalPoint.x,localY:t.boneLocalPoint.y,attachmentPointX:t.attachmentPointX,attachmentPointY:t.attachmentPointY,worldSize:a,worldWidth:a,worldHeight:a,localRegionCorners:c,localRegionReferenceSize:c?a:void 0,offsetXPercent:0,offsetYPercent:0};return $i(m),ad(((w=O.current)==null?void 0:w.getTrackedAnimationCenterScreen(m,Dt,Me))??null),ni(!1),y(r("studio.toast.face_follow_bound","已圈定脸部；每个动作会使用固定镜头导出。")),!0},[Dt,Me,y,r]),ja=d.useCallback((t,n,a={})=>{var m;const l=new Map(bt.current.map(u=>[u.id,u])),s=at.filter(u=>u.type==="model").map(u=>l.get(u.id)).filter(u=>!!u),c=s.length>0?s:bt.current;for(let u=c.length-1;u>=0;u-=1){const v=c[u],w=v.id===St.current,b=w?!yt:v.visible,C=w?wt:v.locked;if(!b||!a.includeLocked&&C)continue;const x=((m=pa.current.get(v.id))==null?void 0:m.hitTestAttachment(t,n))??null;if(x)return{...x,layerId:v.id}}return null},[yt,wt,at]);d.useCallback((t,n=U)=>{if(!jt){const l=ja(t.clientX,t.clientY);if(!l)return;if(t.preventDefault(),t.stopPropagation(),l.layerId!==St.current){Wn(l.layerId);return}$s("model",t,l.layerId);return}if(t.button!==0)return;t.preventDefault(),t.stopPropagation();const a=ja(t.clientX,t.clientY);if(!a){y(r("studio.toast.part_pick_miss","没有点到可定位的贴图部件"));return}ft==="faceFollow"&&Vs(a)||(a.layerId!==St.current&&Wn(a.layerId,{clearAttachmentSelection:!1}),Qi(a.layerId,a.partId,a,!0),y(r("studio.toast.part_picked","已定位部件：{part}",{part:a.part.attachmentName})))},[U,$s,Vs,ft,ja,jt,Qi,Wn,y,r]);const Ip=d.useCallback((t,n=U)=>{if(t.button!==0)return;const a=t.clientX,l=t.clientY,s=ja(a,l,{includeLocked:!jt});if(!s)return;t.preventDefault(),t.stopPropagation();const c=s.layerId||n,m=bt.current.find(X=>X.id===c);if(!m)return;const u=c===St.current?wt:m.locked,v=qe(c===St.current?Te:m.transform);let w=!1,b=!1,C=null,x=null;const j=X=>{const he=qe({...v,x:X.x,y:X.y});yn(Je=>Je.map(ke=>ke.id===c?{...ke,transform:he}:ke)),St.current===c&&uo(he)},A=X=>{const he=X.clientX-a,Je=X.clientY-l;Math.hypot(he,Je)<VS||(w=!0,!(jt||u||!Le||_e!=="model")&&(b=!0,x={x:hn("modelX",v.x+he),y:hn("modelY",v.y+Je)},C===null&&(C=window.requestAnimationFrame(()=>{if(C=null,!x)return;const ke=x;x=null,j(ke)}))))},R=()=>{window.removeEventListener("pointermove",A),window.removeEventListener("pointerup",ee),window.removeEventListener("pointercancel",ae),C!==null&&(window.cancelAnimationFrame(C),C=null)},ee=X=>{if(R(),b&&x){j(x),x=null,Fi(i("studio.stage.drag_hint_model")),y(i("studio.toast.model_moved"));return}if(!w){if(jt){const he=ja(X.clientX,X.clientY,{includeLocked:!1});if(!he){y(r("studio.toast.part_pick_miss","没有点到可定位的贴图部件"));return}if(ft==="faceFollow"&&Vs(he))return;he.layerId!==St.current&&Wn(he.layerId,{clearAttachmentSelection:!1}),X.pointerType==="touch"&&(F.current={x:X.clientX,y:X.clientY,expires:performance.now()+700}),Qi(he.layerId,he.partId,he,!0),y(r("studio.toast.part_picked","已定位部件：{part}",{part:he.part.attachmentName}));return}Wn(c)}},ae=()=>{R()};window.addEventListener("pointermove",A),window.addEventListener("pointerup",ee),window.addEventListener("pointercancel",ae)},[_e,U,hn,Vs,ft,ja,jt,Le,wt,Te,Qi,Wn,y,i,r]),Ep=d.useCallback(t=>{if(!ie||!Un||t.button!==0)return;t.preventDefault(),t.stopPropagation();const n=t.clientX,a=t.clientY,l=ie.offsetXPercent??0,s=ie.offsetYPercent??0,c=ie.worldWidth??ie.worldSize,m=ie.worldHeight??ie.worldSize,u=c/Math.max(1e-4,Un.worldUnitsPerScreenPixel),v=m/Math.max(1e-4,Un.worldUnitsPerScreenPixel),w=C=>{const x=C.clientX-n,j=C.clientY-a;$i(A=>A&&{...A,offsetXPercent:l+x/Math.max(1,u)*100,offsetYPercent:s-j/Math.max(1,v)*100})},b=()=>{window.removeEventListener("pointermove",w),window.removeEventListener("pointerup",b),window.removeEventListener("pointercancel",b)};window.addEventListener("pointermove",w),window.addEventListener("pointerup",b),window.addEventListener("pointercancel",b)},[Un,ie]),Rp=d.useCallback(t=>{if(!ie||!Un||t.button!==0)return;t.preventDefault(),t.stopPropagation();const n=t.clientX,a=t.clientY,l=ie.worldWidth??ie.worldSize,s=ie.worldHeight??ie.worldSize,c=Math.max(1e-4,Un.worldUnitsPerScreenPixel),m=l/c,u=s/c,v=b=>{const C=m+2*(b.clientX-n),x=u+2*(b.clientY-a),j=Math.max(1,C*c),A=Math.max(1,x*c);$i(R=>R&&qu(R,j,A))},w=()=>{window.removeEventListener("pointermove",v),window.removeEventListener("pointerup",w),window.removeEventListener("pointercancel",w)};window.addEventListener("pointermove",v),window.addEventListener("pointerup",w),window.addEventListener("pointercancel",w)},[Un,ie]),Js=d.useCallback((t,n)=>{$i(a=>a&&{...a,offsetXPercent:(a.offsetXPercent??0)+t,offsetYPercent:(a.offsetYPercent??0)-n})},[]),Lp=d.useCallback((t,n)=>{const a=Number.isFinite(n)?n:0;$i(l=>l&&{...l,...t==="x"?{offsetXPercent:a}:{offsetYPercent:-a}})},[]),Na=d.useCallback((t,n)=>{$i(a=>{if(!a)return a;const l=a.worldWidth??a.worldSize,s=a.worldHeight??a.worldSize,c=t!=="height"?Math.max(1,l*n):l,m=t!=="width"?Math.max(1,s*n):s;return qu(a,c,m)})},[]);d.useEffect(()=>{if(!jt)return;const t=n=>{n.key==="Escape"&&ni(!1)};return window.addEventListener("keydown",t),()=>window.removeEventListener("keydown",t)},[jt]);const qt=Le?Te:{x:0,y:0,scale:100,rotation:0},Cr=Le?dt:{x:0,y:0,scale:100,rotation:0},Qs=fe.length>1?me.get(fe[0].resourceId):void 0,Ca=Qs&&jn(Qs.code,Qs.identity.folderName)?Qs:h,wn=Ca&&Oa(Ca)?$r(Ca,Ni&&$e.includes(te)?te:Ca.motion):null,Pp=!!(wn!=null&&wn.officialRectTransform||wn!=null&&wn.display),Nd=wn?nc(wn,H,W):void 0,It=d.useMemo(()=>({mode:di.mode,viewportWidth:H,viewportHeight:W,anchorX:di.anchorX,anchorY:di.anchorY,padding:Pp?(wn==null?void 0:wn.padding)??di.padding:di.padding,cameraAdjustments:{offsetX:-qt.x,offsetY:qt.y,zoomMultiplier:qt.scale/100,fixedCamera:Nd}}),[wn,W,H,qt.scale,qt.x,qt.y,Nd,Pp]),Cd=d.useMemo(()=>new Map(fe.map(t=>[t.id,Le?qe(t.id===U?Te:t.transform):{x:0,y:0,scale:100,rotation:0}])),[U,Le,fe,Te]),Up=d.useMemo(()=>new Map(fe.map(t=>{const n=Cd.get(t.id)??{x:0,y:0,scale:100},a=mn?{offsetX:0,offsetY:0,screenOffsetX:n.x,screenOffsetY:n.y,zoomMultiplier:n.scale/100,fixedCamera:Nd}:{...It.cameraAdjustments,offsetX:-n.x,offsetY:n.y,zoomMultiplier:n.scale/100};return[t.id,{...It,cameraAdjustments:a}]})),[mn,fe,Cd,It]),Dp=t=>Cd.get(t.id)??{x:0,y:0,scale:100,rotation:0},Fp=t=>Up.get(t.id)??It,Ch=JSON.stringify({enabled:ft==="faceFollow"&&!!ie,layout:Nt,activeModelLayerId:U,resource:h==null?void 0:h.id,selectedMotion:te,selectedSkin:ye,descriptor:ys,status:zi.status,view:Up.get(U),composition:At,visibility:We,adjustments:Ft,tracking:ie?{...ie,offsetXPercent:0,offsetYPercent:0}:null});d.useEffect(()=>{if(ft!=="faceFollow"||!od.current)return;let t=0,n=0,a=0;const l=()=>{var v;const m=od.current;if(!m)return;const u=((v=O.current)==null?void 0:v.getTrackedAnimationCenterScreen(m))??null;if(!u&&a++<12){t=window.setTimeout(l,100);return}ad(w=>(w==null?void 0:w.x)===(u==null?void 0:u.x)&&(w==null?void 0:w.y)===(u==null?void 0:u.y)&&(w==null?void 0:w.worldUnitsPerScreenPixel)===(u==null?void 0:u.worldUnitsPerScreenPixel)?w:u)},s=()=>{window.clearTimeout(t),window.cancelAnimationFrame(n),t=window.setTimeout(()=>{n=window.requestAnimationFrame(l)},80)},c=new ResizeObserver(s);return L.current&&c.observe(L.current),s(),()=>{c.disconnect(),window.clearTimeout(t),window.cancelAnimationFrame(n)}},[Ch]);const Mo=()=>({mirrorFold:Xn.enabled?mi(Xn):void 0,memeEffects:Dg(it)?mt(Tt?it:Fg(it,U)):void 0,width:Oe(H),height:Oe(W,Qe.height),fps:Wr(Dt),repeat:kn==="forever"?0:kn==="three"?2:-1,backgroundMode:ga,backgroundColor:ct,backgroundImage:ga==="image"&&xn?{src:xn,assetId:vt,transform:Cr,opacity:Pi(Vn)/100,fitMode:kt,width:$t,height:Ht,naturalWidth:ln,naturalHeight:dn,lockAspectRatio:cn,mediaType:ki??void 0,fileName:vi??void 0,playbackMode:vn,playbackSpeed:Ln,timeOffset:Pn,followTimeline:Qn}:void 0,attachmentVisibility:We,attachmentReplacements:ce,attachmentAdjustments:Ft,framingMode:ft==="animationBounds"?"animationBounds":ft==="visiblePixels"?"visiblePixels":ft==="faceFollow"?"faceFollow":"current",faceTracking:ft==="faceFollow"?ie??void 0:void 0,trimMode:ft==="animationBounds"&&ra&&ga==="transparent"?"visibleBounds":Qe.trimMode,overlaySizingMode:"keepCharacterSize",transparentCompatibilityMode:Cs,renderTransform:{rotationDegrees:qt.rotation,pivotX:Oe(H)/2+qt.x,pivotY:Oe(W,Qe.height)/2+qt.y,scaleX:oc(qt)/100,scaleY:ac(qt)/100},playbackSpeed:Me}),Ta=t=>t.framingMode!=="faceFollow"?!0:t.faceTracking?yt?(y(r("studio.toast.face_follow_target_hidden","脸部固定取景的目标模型层当前已隐藏，请先显示该模型。")),!1):!0:(ni(!0),y(r("studio.toast.face_follow_required","请先在预览中圈定脸部，再开始导出。")),!1),Ma=(t=Mo(),n=te,a=ye)=>{const l=Oe(t.width),s=Oe(t.height,Qe.height),c=[],m=Ce.map(v=>{const w=v.id===De,b=on(v.id,w?{...v,mode:ot,color:ct,image:xn,assetId:vt,fileName:vi,mimeType:ki,transform:dt,visible:Jn,locked:Rn,opacity:Vn,fitMode:kt,width:$t,height:Ht,naturalWidth:ln,naturalHeight:dn,lockAspectRatio:cn,playbackMode:vn,playbackSpeed:Ln,timeOffset:Pn,followTimeline:Qn}:v),C=Le?qe(b.transform):{x:0,y:0,scale:100,rotation:0},x=Ra(b);return{id:b.id,mode:x,color:b.color,backgroundImage:x==="image"&&b.image?{src:b.image,assetId:b.assetId,transform:C,opacity:Pi(b.opacity)/100,fitMode:b.fitMode,width:b.width,height:b.height,naturalWidth:b.naturalWidth,naturalHeight:b.naturalHeight,lockAspectRatio:b.lockAspectRatio,mediaType:b.mimeType??void 0,fileName:b.fileName??void 0,playbackMode:b.playbackMode,playbackSpeed:Bt(b.playbackSpeed),timeOffset:an(b.timeOffset),followTimeline:b.followTimeline}:void 0,transform:C,visible:b.visible,locked:b.locked,opacity:Pi(b.opacity)/100,fitMode:b.fitMode,width:b.width,height:b.height,naturalWidth:b.naturalWidth,naturalHeight:b.naturalHeight,lockAspectRatio:b.lockAspectRatio,playbackMode:b.playbackMode,playbackSpeed:Bt(b.playbackSpeed),timeOffset:an(b.timeOffset),followTimeline:b.followTimeline,dynamic:bl(b)}});let u=!1;return fe.forEach(v=>{const w=v.id===U,b=me.get(w?(h==null?void 0:h.id)??v.resourceId:v.resourceId),C=w?Xt:rd[v.id];if(!b||!C){(w?!yt:v.visible)&&(u=!0);return}const x=Le?qe(w?Te:v.transform):{x:0,y:0,scale:100,rotation:0};c.push({id:v.id,descriptor:C,resourceCode:b.code,animationName:w?n:v.animationName,skinName:w?a:v.skinName,transform:x,visible:w?!yt:v.visible,locked:w?wt:v.locked,playbackSpeed:mn?Bt(Me*v.playbackSpeed):Me,timeOffset:mn?an(v.timeOffset):0,targetLockAspectRatio:w?Lt:v.targetLockAspectRatio,attachmentVisibility:w?We:v.attachmentVisibility,attachmentReplacements:w?ce:v.attachmentReplacements,attachmentAdjustments:w?Ft:v.attachmentAdjustments})}),u||c.length===0?null:{version:1,width:l,height:s,fps:Dt,faceTrackingLayerId:t.framingMode==="faceFollow"?U:void 0,backgroundMode:t.backgroundMode,backgroundColor:t.backgroundColor,backgroundImage:t.backgroundImage,backgroundLayers:m,layerOrder:at,modelLayers:c}},Zs=t=>{const n=Oe(t.width),a=Oe(t.height,Qe.height),l=Math.max(n,a);return l>sm?window.confirm(r("studio.export.gif_huge_confirm","GIF 导出尺寸为 {width} x {height}，会非常慢并占用大量内存。确认继续在本机导出？",{width:n,height:a}))?(y(r("studio.toast.gif_huge_warning","正在本机导出 {width} x {height} GIF，可能非常慢并占用大量内存。",{width:n,height:a})),!0):(y(r("studio.toast.gif_huge_cancelled","已取消超高分辨率 GIF 导出。")),!1):(l>rm&&y(r("studio.toast.gif_large_warning","GIF 导出尺寸为 {width} x {height}，可能较慢并占用较高内存。",{width:n,height:a})),!0)},Th=(t,n)=>{const a=Oe(t.width),l=Oe(t.height,Qe.height),s=Math.max(a,l),c=n.frameCount/Math.max(n.fps,1),m=[],u=[],v=c.toFixed(1);s>sm?u.push(r("studio.export.confirm_size","Size {width} x {height}",{width:a,height:l})):s>rm&&m.push(r("studio.export.confirm_size","Size {width} x {height}",{width:a,height:l})),n.frameCount>XS?u.push(r("studio.export.confirm_frames","{frames} frames, about {seconds} seconds",{frames:n.frameCount,seconds:v})):n.frameCount>lm&&m.push(r("studio.export.confirm_frames","{frames} frames, about {seconds} seconds",{frames:n.frameCount,seconds:v})),n.mode==="sharedLoop"&&n.frameCount>lm&&u.length===0&&u.push(r("studio.export.confirm_shared_loop","Shared full loop: {frames} frames, about {seconds} seconds",{frames:n.frameCount,seconds:v}));const w=$n.current.filter(C=>C.visible&&bl(C)).length;w>0&&m.push(r("studio.export.dynamic_gif_layers_warning","{count} dynamic GIF image layer(s)",{count:w}));const b=r("studio.toast.multi_gif_warning","Heavy GIF export: {items}. It may be slower.",{items:m.join(", ")});if(u.length>0){if(!window.confirm(r("studio.export.multi_gif_confirm","Multi-model GIF will be composed locally: {items}. It may be slow and memory heavy. Continue?",{items:u.join(", ")})))return y(r("studio.toast.multi_gif_cancelled","Multi-model GIF export cancelled.")),!1;m.length>0&&y(b)}else m.length>0&&y(b);return n.mode==="sharedLoop"?y(r("studio.toast.shared_loop_mode","Shared full loop mode: {frames} frames, about {seconds} seconds.",{frames:n.frameCount,seconds:v})):fe.length>1&&y(r("studio.toast.multi_gif_timeline_mode","Multi-model GIF uses {mode}: {frames} frames.",{mode:Eo(n.mode),frames:n.frameCount})),!0},Td=()=>nd==="preview"?"gifenc":"ffmpeg",Ai=async(t,n)=>{if(Pt){await vj(Pt,n,t);return}xj(t,n)},zp=(t,n,a,l=Mo(),s)=>h?{version:1,kind:t,resourceId:h.id,resourceIdentity:h.identity,skinName:Pe?ye:void 0,tasks:n,completedTaskIds:[],failedTaskIds:[],pendingTaskIds:n.map(c=>c.id),options:l,viewSettings:It,animationComposition:s??void 0,pngMode:a,directoryName:Pt==null?void 0:Pt.name,updatedAt:Date.now()}:null,Md=(t,n,a)=>{t&&Ea({...t,completedTaskIds:[...n],failedTaskIds:[...a],pendingTaskIds:t.tasks.map(l=>l.id).filter(l=>!n.has(l)&&!a.has(l)),directoryName:(Pt==null?void 0:Pt.name)??t.directoryName,updatedAt:Date.now()})},Ad=async t=>{t==="ffmpeg"&&await Fu()},Op=async t=>{try{return await Od(t)}catch(n){if(La(n)||t.encoder!=="ffmpeg")throw n;return await dl(),Od(t)}},Bp=async t=>{try{return await zd(t)}catch(n){if(La(n)||t.encoder!=="ffmpeg")throw n;return await dl(),zd(t)}},Mh=async()=>{if(Zn.current||ei.current)return;if(!h||!Xt){y(i("studio.toast.wait_skeleton"));return}const t=Mo();if(!Ta(t))return;const n=Tt?Ma(t):null;let a;if(Tt){if(!n){y(r("studio.toast.wait_model_layers","请等待所有可见模型层加载完成后再导出。"));return}if(xa){Zn.current=!0;try{a=await Ug({scene:n,exportOptions:t,timeline:{mode:Hi,primaryLayerId:U,customDuration:kl(sa)}})}catch(m){Zn.current=!1,y(m instanceof Error?m.message:i("studio.toast.gif_failed"));return}if(!Th(t,a)){Zn.current=!1;return}}else if(!Zs(t))return}else if(!Zs(t))return;const l=Td(),s=pr(t),c=!n&&At?At:null;He(m=>({...m,statusText:i("studio.queue.current"),countText:"0 / 1",hintText:i("studio.queue.prepare_export",{animation:c?"composition":te}),percent:0,failed:0,remain:1,eta:"--",paused:!1}));try{await Ad(l);const m=v=>{const w=v.frameIndex??0,b=v.frameCount??1;He(C=>({...C,hintText:v.message,percent:Math.min(99,Math.round(w/Math.max(b,1)*100))}))};if(Tt&&!n)throw new Error(r("studio.toast.wait_model_layers","请等待所有可见模型层加载完成后再导出。"));const u=n?await zd({scene:n,loop:kn!=="once",viewSettings:It,exportOptions:s,encoder:l,timeline:xa?{mode:Hi,primaryLayerId:U,customDuration:kl(sa)}:void 0,timelinePlan:a,onProgress:m}):await Od({descriptor:Xt,animationName:te||void 0,skinName:Pe?ye:void 0,loop:kn!=="once",animationComposition:c,viewSettings:It,exportOptions:s,encoder:l,onProgress:m});await Ai(u,Uo(h,Pe?ye:void 0,c?"composition":te)),He(v=>({...v,countText:"1 / 1",hintText:i("studio.queue.exported_size",{size:(u.size/1024).toFixed(1)}),percent:100,remain:0,eta:"00:00"})),y(i("studio.toast.current_gif_done"))}catch(m){if(ur(m))return;He(u=>({...u,statusText:i("studio.queue.export_failed"),failed:u.failed+1,hintText:m instanceof Error?m.message:i("studio.toast.gif_failed")})),y(m instanceof Error?m.message:i("studio.toast.gif_failed"))}finally{aa(!1)}},Ah=async()=>{var w;if(Zn.current||ei.current)return;if(!h||!Xt){y(i("studio.toast.wait_skeleton"));return}const t=new Set(((jr==null?void 0:jr.clips)??[]).map(b=>b.animationName)),n=$e.filter(b=>b.trim()&&!t.has(b));if(n.length===0){y(i("studio.toast.no_batch_animations"));return}const a=Mo();if(!Ta(a)||!Zs(a))return;const l=Td(),s=n.map(b=>({id:um(b),animationName:b})),c=zp("gifBatch",s,void 0,a,jr),m=new Set,u=new Set;Ea(c),Jt.current=!1,Oi.current=!0;const v=pr(a);He(b=>({...b,statusText:i("studio.queue.batch_export"),countText:`0 / ${n.length}`,hintText:i("studio.queue.prepare_batch"),percent:0,failed:0,remain:n.length,eta:"--",paused:!1}));try{await Ad(l);let b=0;for(let C=0;C<n.length;C+=1){for(;Jt.current;){if((w=v.signal)!=null&&w.aborted)throw new DOMException("导出已取消。","AbortError");await new Promise(A=>window.setTimeout(A,250))}const x=s[C],j=x.animationName;He(A=>({...A,countText:`${C} / ${n.length}`,hintText:i("studio.queue.exporting_animation",{animation:j}),remain:n.length-C}));try{const A=ae=>{const X=ae.frameIndex??0,he=ae.frameCount??1,Je=X/Math.max(he,1);He(ke=>({...ke,hintText:`${j} · ${ae.message}`,percent:Math.round((C+Je)/n.length*100)}))},R=Tt?Ma(v,j):null;if(Tt&&!R)throw new Error(r("studio.toast.wait_model_layers","请等待所有可见模型层加载完成后再导出。"));const ee=R?await Bp({scene:R,loop:kn!=="once",viewSettings:It,exportOptions:v,encoder:l,timeline:{mode:"primary",primaryLayerId:U},onProgress:A}):await Op({descriptor:Xt,animationName:j,skinName:Pe?ye:void 0,loop:kn!=="once",animationComposition:jr,viewSettings:It,exportOptions:v,encoder:l,onProgress:A});await Ai(ee,Uo(h,Pe?ye:void 0,j)),m.add(x.id)}catch(A){if(La(A))throw A;u.add(x.id),y(A instanceof Error?A.message:i("studio.toast.batch_failed"))}if(b+=1,l==="ffmpeg"&&b>=am&&C+1<n.length){try{await dl()}catch{}b=0}Md(c,m,u),He(A=>({...A,countText:`${C+1} / ${n.length}`,percent:Math.round((C+1)/n.length*100),failed:u.size,remain:n.length-C-1,eta:C+1===n.length?"00:00":A.eta}))}u.size===0&&Ea(null),He(C=>({...C,statusText:u.size>0?i("studio.queue.batch_failed"):i("studio.queue.batch_done"),hintText:u.size>0?r("studio.queue.batch_partial_failed","Batch finished with failed tasks. Use retry failed."):i("studio.queue.batch_done_hint"),percent:100,remain:0,paused:!1})),y(u.size>0?i("studio.toast.batch_failed"):i("studio.toast.batch_done"))}catch(b){if(ur(b))return;He(C=>({...C,statusText:i("studio.queue.batch_failed"),failed:C.failed+1,hintText:b instanceof Error?b.message:i("studio.toast.batch_failed")})),y(b instanceof Error?b.message:i("studio.toast.batch_failed"))}finally{Oi.current=!1,aa(!1)}},$p=()=>new Promise(t=>{window.requestAnimationFrame(()=>window.requestAnimationFrame(()=>t()))}),Hp=(t,n,a,l)=>n?ll({scene:n,timestamp:a,loop:!1,viewSettings:It,exportOptions:t}):Hd({descriptor:Xt,animationName:l,skinName:Pe?ye:void 0,timestamp:a,loop:!1,viewSettings:It,exportOptions:t}),Ih=async t=>{if(Zn.current||ei.current)throw new Error(i("studio.meme.output_busy"));if(!h||!Xt||!O.current)throw new Error(i("studio.toast.wait_preview"));if(t.aborted)throw new DOMException("Aborted","AbortError");const n=new AbortController;ei.current=n;const a=()=>n.abort();t.addEventListener("abort",a,{once:!0});try{const l={...Mo(),signal:n.signal};if(!Ta(l))throw new Error(i("studio.toast.face_follow_required"));const s=Tt?Ma(l):null;if(Tt&&!s)throw new Error(i("studio.toast.wait_model_layers"));const c=O.current.getPlaybackSnapshot(),m=s&&it.playback!=="forward"?(c==null?void 0:c.recordingTime)??(c==null?void 0:c.currentTime)??0:(c==null?void 0:c.currentTime)??0;return await Hp(l,s,m,((c==null?void 0:c.animationName)??te)||void 0)}finally{t.removeEventListener("abort",a),ei.current===n&&(ei.current=null)}},Eh=async()=>{if(Zn.current||ei.current)return;const t=O.current,n=Xt;if(!h||!t||!n){y(i("studio.toast.wait_preview"));return}const a=Mo();if(Ta(a))try{const l=pr(a),s=Tt?Ma(l):null;if(Tt&&!s)throw new Error(r("studio.toast.wait_model_layers","请等待所有可见模型层加载完成后再导出。"));if(mr==="currentAllFrames"){Pt||y(r("studio.toast.png_many_downloads","This will download many PNG files. Choosing a folder is recommended."));let w=0;const b=j=>{const A=j.frameIndex??0,R=j.frameCount??1;He(ee=>({...ee,statusText:i("studio.queue.png_batch"),countText:`${A} / ${R}`,hintText:j.message,percent:Math.round(A/Math.max(R,1)*100),remain:Math.max(0,R-A),failed:0}))},C=async j=>{await Ai(j.blob,sc(h,Pe?ye:void 0,te,j.frameIndex)),w+=1,Pt||await vl(120)};await(s?Bd({scene:s,loop:!1,viewSettings:It,exportOptions:l,timeline:{mode:"primary",primaryLayerId:U},onProgress:b,onFrame:C}):$d({descriptor:n,animationName:te||void 0,skinName:Pe?ye:void 0,loop:!1,viewSettings:It,exportOptions:l,onProgress:b,onFrame:C})),He(j=>({...j,statusText:i("studio.queue.png_done"),countText:`${w} / ${w}`,hintText:i("studio.queue.png_done_hint"),percent:100,failed:0,remain:0,eta:"00:00",paused:!1})),y(i("studio.toast.current_png_done"));return}const c=t.getPlaybackSnapshot(),m=mr==="currentFrame"?s&&it.playback!=="forward"?(c==null?void 0:c.recordingTime)??(c==null?void 0:c.currentTime)??0:(c==null?void 0:c.currentTime)??0:0,u=((c==null?void 0:c.animationName)??te)||void 0,v=await Hp(l,s,m,u);await Ai(v,Uo(h,Pe?ye:void 0,u,"png")),He(w=>({...w,statusText:i("studio.queue.png_current"),countText:"1 / 1",hintText:i("studio.queue.png_current_done",{size:(v.size/1024).toFixed(1)}),percent:100,failed:0,remain:0,eta:"00:00",paused:!1})),y(i("studio.toast.current_png_done"))}catch(l){if(ur(l))return;y(l instanceof Error?l.message:i("studio.toast.png_failed"))}finally{aa(!1)}},Rh=async()=>{var w,b;if(Zn.current||ei.current)return;const t=Xt;if(!h||!t){y(i("studio.toast.wait_preview"));return}const n=$e.filter(C=>C.trim());if(n.length===0){y(i("studio.toast.no_png_animations"));return}const a=mr==="allFrames"?"allFrames":"allFirst";a==="allFrames"&&!Pt&&y(r("studio.toast.png_many_downloads","This will download many PNG files. Choosing a folder is recommended."));const l=Mo();if(!Ta(l))return;const s=n.map(C=>({id:um(C),animationName:C})),c=zp("pngBatch",s,a),m=new Set,u=new Set;Ea(c),Jt.current=!1,Oi.current=!0;const v=pr(l);He(C=>({...C,statusText:i("studio.queue.png_batch"),countText:`0 / ${n.length}`,hintText:i("studio.queue.prepare_png_batch"),percent:0,failed:0,remain:n.length,eta:"--",paused:!1}));try{for(let C=0;C<n.length;C+=1){for(;Jt.current;){if((w=v.signal)!=null&&w.aborted)throw new DOMException("导出已取消。","AbortError");await new Promise(A=>window.setTimeout(A,250))}const x=s[C],j=x.animationName;try{const A=Tt?Ma(v,j):null;if(Tt&&!A)throw new Error(r("studio.toast.wait_model_layers","请等待所有可见模型层加载完成后再导出。"));if(a==="allFrames"){let R=0;const ee=X=>{const he=X.frameIndex??0,Je=X.frameCount??1;He(ke=>({...ke,hintText:`${j} · ${X.message}`,percent:Math.round((C+he/Math.max(Je,1))/n.length*100)}))},ae=async X=>{await Ai(X.blob,sc(h,Pe?ye:void 0,j,X.frameIndex)),R+=1,Pt||await vl(120)};A?await Bd({scene:A,loop:!1,viewSettings:It,exportOptions:v,timeline:{mode:"primary",primaryLayerId:U},onProgress:ee,onFrame:ae}):await $d({descriptor:t,animationName:j,skinName:Pe?ye:void 0,loop:!1,viewSettings:It,exportOptions:v,onProgress:ee,onFrame:ae}),He(X=>({...X,hintText:i("studio.queue.png_captured",{animation:`${j} (${R})`})}))}else{const R=A?await ll({scene:A,timestamp:0,loop:!1,viewSettings:It,exportOptions:v}):await Hd({descriptor:t,animationName:j,skinName:Pe?ye:void 0,loop:!1,viewSettings:It,exportOptions:v});await Ai(R,Uo(h,Pe?ye:void 0,j,"png"))}m.add(x.id)}catch(A){if(La(A))throw A;u.add(x.id),y(A instanceof Error?A.message:i("studio.toast.batch_png_failed"))}Md(c,m,u),He(A=>({...A,countText:`${C+1} / ${n.length}`,hintText:i("studio.queue.png_captured",{animation:j}),percent:Math.round((C+1)/n.length*100),failed:u.size,remain:n.length-C-1,eta:C+1===n.length?"00:00":A.eta}))}(b=O.current)==null||b.playAnimation(te,kn!=="once"),u.size===0&&Ea(null),He(C=>({...C,statusText:u.size>0?i("studio.queue.png_failed"):i("studio.queue.png_done"),hintText:u.size>0?r("studio.queue.batch_partial_failed","Batch finished with failed tasks. Use retry failed."):i("studio.queue.png_done_hint"),percent:100,remain:0,paused:!1})),y(u.size>0?i("studio.toast.batch_png_failed"):i("studio.toast.batch_png_done"))}catch(C){if(ur(C))return;He(x=>({...x,statusText:i("studio.queue.png_failed"),failed:x.failed+1,hintText:C instanceof Error?C.message:i("studio.toast.batch_png_failed")})),y(C instanceof Error?C.message:i("studio.toast.batch_png_failed"))}finally{Oi.current=!1,aa(!1)}},Wp=async t=>{var w;if(Zn.current||ei.current)return;const n=Xt,a=Zd();if(!a||!h||!n){y(i("studio.toast.no_queue_to_continue"));return}if(a.resourceId!==h.id){nt(a.resourceId),y(r("studio.toast.queue_resource_selected","Restored the queued resource. Run continue again after it loads."));return}if(a.directoryName&&!Pt){y(r("studio.toast.queue_needs_directory","Select the export folder again before continuing this queue."));return}const l=t==="failed"?a.failedTaskIds:a.pendingTaskIds,s=a.tasks.filter(b=>l.includes(b.id));if(s.length===0){y(i(t==="failed"?"studio.toast.no_failed_tasks":"studio.toast.no_queue_to_continue"));return}if(a.kind==="gifBatch"&&!Zs(a.options)||!Ta(a.options))return;const c=Td(),m=new Set(a.completedTaskIds),u=new Set(t==="failed"?[]:a.failedTaskIds);Jt.current=!1,Oi.current=!0;const v=pr({...a.options});He(b=>({...b,statusText:a.kind==="gifBatch"?i("studio.queue.batch_export"):i("studio.queue.png_batch"),countText:`0 / ${s.length}`,hintText:i("studio.queue.continued"),percent:0,failed:u.size,remain:s.length,eta:"--",paused:!1}));try{a.kind==="gifBatch"&&await Ad(c);let b=0;for(let x=0;x<s.length;x+=1){for(;Jt.current;){if((w=v.signal)!=null&&w.aborted)throw new DOMException("导出已取消。","AbortError");await new Promise(A=>window.setTimeout(A,250))}const j=s[x];try{const A=Tt?Ma(v,j.animationName,a.skinName??ye):null;if(Tt&&!A)throw new Error(r("studio.toast.wait_model_layers","请等待所有可见模型层加载完成后再导出。"));if(a.kind==="gifBatch"){const R=A?await Bp({scene:A,loop:kn!=="once",viewSettings:a.viewSettings,exportOptions:v,encoder:c,timeline:{mode:"primary",primaryLayerId:U}}):await Op({descriptor:n,animationName:j.animationName,skinName:a.skinName,loop:kn!=="once",animationComposition:a.animationComposition,viewSettings:a.viewSettings,exportOptions:v,encoder:c});await Ai(R,Uo(h,a.skinName,j.animationName))}else if(a.pngMode==="allFrames"){const R=async ee=>{await Ai(ee.blob,sc(h,a.skinName,j.animationName,ee.frameIndex)),Pt||await vl(120)};A?await Bd({scene:A,loop:!1,viewSettings:a.viewSettings,exportOptions:v,timeline:{mode:"primary",primaryLayerId:U},onFrame:R}):await $d({descriptor:n,animationName:j.animationName,skinName:a.skinName,loop:!1,viewSettings:a.viewSettings,exportOptions:v,onFrame:R})}else{const R=A?await ll({scene:A,timestamp:0,loop:!1,viewSettings:a.viewSettings,exportOptions:v}):await Hd({descriptor:n,animationName:j.animationName,skinName:a.skinName,loop:!1,viewSettings:a.viewSettings,exportOptions:v});await Ai(R,Uo(h,a.skinName,j.animationName,"png"))}m.add(j.id),u.delete(j.id)}catch(A){if(La(A))throw A;u.add(j.id),y(A instanceof Error?A.message:i("studio.toast.batch_failed"))}if(a.kind==="gifBatch"&&c==="ffmpeg"&&(b+=1,b>=am&&x+1<s.length)){try{await dl()}catch{}b=0}Md(a,m,u),He(A=>({...A,countText:`${x+1} / ${s.length}`,hintText:j.animationName,percent:Math.round((x+1)/s.length*100),failed:u.size,remain:s.length-x-1,eta:x+1===s.length?"00:00":A.eta}))}const C=a.tasks.map(x=>x.id).filter(x=>!m.has(x)&&!u.has(x));u.size===0&&C.length===0&&Ea(null),y(u.size>0?i("studio.toast.batch_failed"):i("studio.toast.batch_done"))}catch(b){ur(b)||y(b instanceof Error?b.message:i("studio.toast.batch_failed"))}finally{Oi.current=!1,aa(!1)}},Lh=async()=>{const t=window;if(typeof t.showDirectoryPicker!="function"){y(i("studio.toast.directory_unsupported"));return}try{const n=await t.showDirectoryPicker({mode:"readwrite"});uh(n),y(i("studio.toast.directory_selected",{directory:n.name}))}catch(n){if(n instanceof DOMException&&n.name==="AbortError")return;y(n instanceof Error?n.message:i("studio.toast.directory_failed"))}},ut=t=>{if(t==="cancel"){const n=Ns.current;if(!n||n.signal.aborted)return;Jt.current=!1,n.abort(),He(a=>({...a,statusText:i("studio.queue.cancelling"),hintText:i("studio.queue.cancelling"),paused:!1}));return}if(t==="current"){Mh();return}if(t==="batch"){Ah();return}if(t==="pngCurrent"){Eh();return}if(t==="pngBatch"){Rh();return}if(t==="resume"){if(Oi.current){Jt.current=!1,He(n=>({...n,paused:!1,statusText:i("studio.queue.batch_export"),hintText:i("studio.queue.continued")})),y(i("studio.toast.queue_continued"));return}Wp("pending");return}if(t==="pause"){if(!Oi.current){y(i("studio.toast.no_running_queue"));return}Jt.current=!Jt.current,He(n=>({...n,paused:Jt.current,statusText:Jt.current?i("studio.queue.paused"):i("studio.queue.batch_export"),hintText:Jt.current?i("studio.queue.pause_after_current"):i("studio.queue.continued")})),y(Jt.current?i("studio.toast.queue_paused"):i("studio.toast.queue_continued"));return}if(t==="retry"){const n=Zd();if(Fe.failed===0&&(!n||n.failedTaskIds.length===0)){y(i("studio.toast.no_failed_tasks"));return}Wp("failed");return}if(t==="copy"){const n=`quality=${nd}; fps=${Dt}; speed=${Me}; size=${H}x${W}; transparent=${Cs}; crop=${ft}; loop=${kn}; timeline=${Hi}; customDuration=${sa}; background=${ga}`;if(navigator.clipboard){navigator.clipboard.writeText(n).then(()=>y(i("studio.toast.config_copied")),()=>y(n));return}y(n);return}if(t==="open"||t==="folder"){if(t==="folder"){Lh();return}y(Pt?i("studio.toast.open_directory",{directory:Pt.name}):i("studio.toast.open_directory_unavailable"))}},Yp=()=>{y(r("studio.toast.temporary_spine_import","请选择包含 .json/.skel.bytes、.atlas.txt 和贴图的本地目录；它只会加入当前 Studio 会话，不写入项目 resources，也不会上传。")),In(!0),_()},Gp=async t=>{if(!t)return;const n=Qu("background"),a=Hn(t),l=t.type.toLowerCase()==="image/gif"||t.name.toLowerCase().endsWith(".gif"),s=await Br(a).catch(()=>null),c=s?Aa({stageWidth:H,stageHeight:W,sourceWidth:s.width,sourceHeight:s.height,fitMode:"contain"}):{width:H,height:W};if(mo(n),Go(a),Ko(t.name),Xo(t.type||null),Ja("contain"),Qo((s==null?void 0:s.width)??null),Zo((s==null?void 0:s.height)??null),Vo(c.width),Jo(c.height),Qa(!0),ji(100),Za(l?"dynamic":"static"),ea(1),ta(0),na(!0),ho(!0),sn("upload"),Fi(i("studio.stage.drag_hint_background")),y(r("studio.toast.image_layer_loaded","图片层素材已导入。")),l&&t.size>8*1024*1024&&y(r("studio.toast.gif_image_layer_large","GIF 图片层较大，首次本地解码可能会比较慢。")),l){const m=$n.current.filter(u=>u.id!==De&&u.mode==="upload"&&ui(u)).length+1;m>1&&y(r("studio.toast.gif_image_layer_many","Current scene has {count} GIF image layers. Preview and export may use more local CPU and memory.",{count:m}))}Zu({id:n,blob:t,fileName:t.name,mimeType:t.type,updatedAt:Date.now()}).catch(()=>{y(r("studio.toast.asset_cache_failed","图片已导入，但本地持久保存失败。"))})},Kp=async t=>{let n,a;try{n=await yr(t),a=await Br(n)}catch(m){y(m instanceof Error?m.message:"内置背景原图读取失败，未切换当前背景。");return}const l=(a==null?void 0:a.width)??t.width,s=(a==null?void 0:a.height)??t.height,c=Aa({stageWidth:H,stageHeight:W,sourceWidth:l,sourceHeight:s,fitMode:"cover"});mo(WS(t.id)),Go(n),Ko(t.fileName),Xo(t.mimeType),Ja("cover"),Qo(l),Zo(s),Vo(c.width),Jo(c.height),Qa(!0),ji(100),Za("static"),ea(1),ta(0),na(!0),ho(!0),sn("upload"),Fi(i("studio.stage.drag_hint_background")),y(`已选择内置背景：${t.label}`)},Zi=t=>t.id!==De?t:on(t.id,{...t,mode:ot,color:ct,image:xn,assetId:vt,fileName:vi,mimeType:ki,transform:dt,visible:Jn,locked:Rn,opacity:Vn,fitMode:kt,width:$t,height:Ht,naturalWidth:ln,naturalHeight:dn,lockAspectRatio:cn,playbackMode:vn,playbackSpeed:Ln,timeOffset:Pn,followTimeline:Qn}),Ph=Ce.some(t=>{const n=Zi(t);return Ra(n)!=="transparent"}),Tr=(()=>{if(!Oo&&it.playback==="forward")return;const t=fe.filter(n=>n.id===U?!yt:n.visible).map(n=>{var a,l;return{id:n.id,duration:(((l=(a=pa.current.get(n.id))==null?void 0:a.getPlaybackSnapshot())==null?void 0:l.duration)||(n.id===U?Nr:0))/Math.max(.001,Me*(mn?n.playbackSpeed:1))}});for(const n of Ce){const a=Zi(n);if(a.visible&&bl(a)){const l=Fl.current.get(n.id);l&&t.push({id:n.id,duration:l/Math.max(.001,a.playbackSpeed)})}}return{...Eg(t,U,Tt?Hi:"primary",Dt,sa),scene:Tt}})(),Xp=Tr?Tr.frameCount/Tr.fps*(Tt?1:Me):0,qp={"--model-x":`${qt.x}px`,"--model-y":`${qt.y}px`,"--model-scale":String(qt.scale/100),"--model-rotation":`${qt.rotation}deg`,"--preview-drag-x":"0px","--preview-drag-y":"0px","--bg-x":`${Cr.x}px`,"--bg-y":`${Cr.y}px`,"--bg-scale":String(Cr.scale/100),"--bg-rotation":`${Cr.rotation}deg`,"--frame-width":`${Di.width}px`,"--frame-height":`${Di.height}px`,background:void 0},Vp={"--frame-width":`${Di.width}px`,"--frame-height":`${Di.height}px`},el=ft==="faceFollow"&&ie&&Un?(()=>{const t=Math.max(1e-4,Un.worldUnitsPerScreenPixel),n=(ie.worldWidth??ie.worldSize)/t,a=(ie.worldHeight??ie.worldSize)/t,l=Un.x+n*((ie.offsetXPercent??0)/100),s=Un.y-a*((ie.offsetYPercent??0)/100);return{left:`${l-n/2}px`,top:`${s-a/2}px`,width:`${n}px`,height:`${a}px`}})():null,Jp=["stage-canvas",Ph?"has-background":"is-transparent-background",us?"":"is-canvas-hidden",vs?"is-solo":"",jt?"is-picking-part":"",ai?"is-interaction-mode":"",ls?"is-mirror-comparing":""].filter(Boolean).join(" "),Qp=["journey-studio-page",Ya?"is-glow-muted":"",gt?"mobile-sheet-"+gt:"",Le?"is-layer-editing":"",jt?"is-part-pick-mode":"",ai?"is-studio-interaction-mode":""].filter(Boolean).join(" "),Uh=t=>i(!t||t==="other"?"studio.category.other":`studio.model.${km[t]}`),Zp=t=>i(t?`studio.category.${t}`:"studio.category.other"),Id=t=>{if(!t)return i("studio.category.other");const n=hc(t.code,t.identity.folderName);return t.category==="furniture"||n==="internal"?hl(n,g):t.modelType==="other"&&t.category==="other"&&t.otherSubcategory!=="uncategorized"?Mr(t.otherSubcategory):t.modelType==="other"?Zp(t.category):Uh(t.modelType)},Mr=t=>t==="passBorder"?{"zh-CN":"头像框","ko-KR":"프로필 테두리","ja-JP":"アイコンフレーム","en-US":"Profile Borders"}[g]:t==="eventComponent"?{"zh-CN":"活动组件","ko-KR":"이벤트 구성 요소","ja-JP":"イベント部品","en-US":"Event Components"}[g]:t==="mainCg"?{"zh-CN":"主线 CG","ko-KR":"메인 스토리 CG","ja-JP":"メインストーリーCG","en-US":"Main Story CG"}[g]:i(`studio.other.${t}`),Ao=t=>t==="Base"?i("studio.variant.base"):t??i("studio.variant.base"),tl=t=>(t==null?void 0:t.modelType)==="aside"&&t.externalSkinLabel==="Base"?cc(t.baseCode,Ao(t.externalSkinLabel),g):Ao(t==null?void 0:t.externalSkinLabel),Ed=h&&Pe?Bu(h.code,h.identity.folderName,ye,g):ye,Ar=t=>{const n=hc(t.code,t.identity.folderName);if(t.category==="furniture"||n==="internal")return hl(n,g);if(t.otherSubcategory==="miniGame")return`${i("studio.other.miniGame")} · ${t.miniGameFolderLabel??i("studio.other.uncategorized")}`;if(t.otherSubcategory==="eventComponent")return Mr("eventComponent");if(t.category==="other"&&t.otherSubcategory!=="uncategorized"){const a=Mr(t.otherSubcategory);return t.variantLabel==="Base"?a:`${a} · ${Ao(t.variantLabel)}`}return`${Zp(t.category)} · ${Ao(t.variantLabel)}`},Dh=t=>i(t==="complete"?"studio.status.complete":t==="partial"?"studio.status.partial":"studio.status.excluded"),Fh=t=>i(t==="complete"?"studio.status.exportable":t==="partial"?"studio.status.needs_resource":"studio.status.not_exportable"),nl=t=>i(`studio.panel.${t}`),eu=t=>i(`studio.export.quality.${t}`),Ir=t=>i(`studio.export.compatibility.${t}`),Io=t=>i(`studio.export.crop.${t}`),tu=ft==="animationBounds"?e.jsxs("div",{className:"field full-field meme-trim-control",children:[e.jsxs("label",{className:"meme-check",children:[e.jsx("input",{type:"checkbox",checked:ra,disabled:ga!=="transparent",onChange:t=>id(t.target.checked)}),e.jsx("span",{children:i("studio.export.trim_transparent")})]}),e.jsx("small",{children:i(ga==="transparent"?"studio.export.trim_transparent_note":"studio.export.trim_transparent_disabled")})]}):null,nu=t=>{if(bh(t),t!=="faceFollow"){ni(!1);return}ie||(ni(!0),y(r("studio.toast.face_follow_pick","请在预览中点击脸部中心，作为自动取景基准。")))},Er=t=>i(`studio.export.loop.${t}`),Eo=t=>t==="primary"?r("studio.export.timeline.primary","主层时长"):t==="longest"?r("studio.export.timeline.longest","最长层时长"):t==="sharedLoop"?r("studio.export.timeline.sharedLoop","共享完整循环"):r("studio.export.timeline.custom","自定义时长"),Rd=t=>i(`studio.export.background.${t}`),Ld=t=>i(`studio.export.png_mode.${t}`),iu=zi.status==="ready"?Fh((h==null?void 0:h.status)??"partial"):zi.status==="missing"?i("studio.status.missing_skeleton"):zi.status==="error"?i("studio.status.load_failed"):i("studio.status.loading"),ou=ft==="faceFollow"?e.jsxs("div",{className:"face-follow-controls",children:[e.jsxs("div",{className:"face-follow-status",children:[e.jsx("strong",{children:ie?r("studio.export.face_follow_ready","已绑定脸部"):r("studio.export.face_follow_waiting","等待圈定脸部")}),e.jsx("span",{children:(ie==null?void 0:ie.boneName)??r("studio.export.face_follow_hint","点击下方按钮，再到预览中点击脸部中心")})]}),e.jsxs("div",{className:"face-follow-actions",children:[e.jsx("button",{type:"button",className:"w-btn",onClick:()=>ni(!0),children:r("studio.export.face_follow_repick","重新圈定")}),e.jsx("button",{type:"button",className:"w-btn",disabled:!ie,onClick:()=>Na("both",.9),children:r("studio.export.face_follow_smaller","缩小框")}),e.jsx("button",{type:"button",className:"w-btn",disabled:!ie,onClick:()=>Na("both",1.1),children:r("studio.export.face_follow_larger","放大框")}),e.jsx("button",{type:"button",className:"w-btn",disabled:!ie,onClick:()=>$i(t=>t&&{...t,offsetXPercent:0,offsetYPercent:0}),children:r("studio.export.face_follow_center","恢复居中")})]}),e.jsxs("div",{className:"face-follow-axis-size","aria-label":r("studio.export.face_follow_axis_size","分别调整宽高"),children:[e.jsx("span",{children:r("studio.export.face_follow_axis_size","分别调整宽高")}),e.jsx("button",{type:"button",className:"w-btn",disabled:!ie,onClick:()=>Na("width",.9),children:r("studio.export.face_follow_width_smaller","宽度 −")}),e.jsx("button",{type:"button",className:"w-btn",disabled:!ie,onClick:()=>Na("width",1.1),children:r("studio.export.face_follow_width_larger","宽度 +")}),e.jsx("button",{type:"button",className:"w-btn",disabled:!ie,onClick:()=>Na("height",.9),children:r("studio.export.face_follow_height_smaller","高度 −")}),e.jsx("button",{type:"button",className:"w-btn",disabled:!ie,onClick:()=>Na("height",1.1),children:r("studio.export.face_follow_height_larger","高度 +")})]}),e.jsxs("div",{className:"face-follow-manual-adjust",children:[e.jsxs("div",{className:"face-follow-nudge","aria-label":r("studio.export.face_follow_nudge","微调取景框"),children:[e.jsx("span",{children:r("studio.export.face_follow_nudge","微调取景框")}),e.jsx("button",{type:"button",className:"w-btn",disabled:!ie,"aria-label":r("studio.export.face_follow_up","取景框上移"),onClick:()=>Js(0,-1),children:e.jsx(Gd,{"aria-hidden":"true"})}),e.jsx("button",{type:"button",className:"w-btn",disabled:!ie,"aria-label":r("studio.export.face_follow_left","取景框左移"),onClick:()=>Js(-1,0),children:e.jsx(fg,{"aria-hidden":"true"})}),e.jsx("button",{type:"button",className:"w-btn",disabled:!ie,"aria-label":r("studio.export.face_follow_down","取景框下移"),onClick:()=>Js(0,1),children:e.jsx(Kd,{"aria-hidden":"true"})}),e.jsx("button",{type:"button",className:"w-btn",disabled:!ie,"aria-label":r("studio.export.face_follow_right","取景框右移"),onClick:()=>Js(1,0),children:e.jsx(Ru,{"aria-hidden":"true"})})]}),e.jsxs("label",{className:"face-follow-offset-field",children:[e.jsx("span",{children:r("studio.export.face_follow_offset_x","水平偏移 %")}),e.jsx(se,{step:"1",value:Math.round(((ie==null?void 0:ie.offsetXPercent)??0)*10)/10,fallback:0,disabled:!ie,onCommit:t=>Lp("x",t)})]}),e.jsxs("label",{className:"face-follow-offset-field",children:[e.jsx("span",{children:r("studio.export.face_follow_offset_y","垂直偏移 %")}),e.jsx(se,{step:"1",value:Math.round(-((ie==null?void 0:ie.offsetYPercent)??0)*10)/10,fallback:0,disabled:!ie,onCommit:t=>Lp("y",t)})]})]}),e.jsx("div",{className:"face-follow-presets","aria-label":r("studio.export.face_follow_sizes","表情包尺寸"),children:[48,64,96,128,160,256].map(t=>e.jsxs("button",{type:"button",className:H===t&&W===t?"w-btn on":"w-btn",onClick:()=>{bi(t),xi(t)},children:[t," × ",t]},t))}),e.jsx("small",{children:r("studio.export.face_follow_help","方框用于设置脸部周围范围；每个动作会自动计算一次并用固定镜头导出，GIF 播放中镜头不会移动。")})]}):null,Ii=K&&(h==null?void 0:h.id)===K.resourceId?K.label:h==null?void 0:h.name,Pd=K&&(h==null?void 0:h.id)===K.resourceId?"Mini":Id(h),zh=K&&(h==null?void 0:h.id)===K.resourceId?`Mini · ${ye}`:h?Ar(h):i("studio.stage.loading_catalog"),il=d.useMemo(()=>h?Dc.filter(t=>t.sourceResourceId===h.id||t.sourceResourceId===h.code||t.characterCode===h.baseCode):[],[h,Dc]);function Oh(t){if(t.source!=="bundled")return null;const n=t.entry,a=(ue==null?void 0:ue.resourceRoot)??"spine",l=m=>m.split(/[\\/]+/u).filter(Boolean).map(u=>encodeURIComponent(u)).join("/"),s=`${a.replace(/^\/+|\/+$/gu,"")}/${l(n.folderName)}`,c=n.textureFileNames[0];return!n.skeletonFileName||!n.atlasFileName||!c?null:{skeletonPath:`resources/spine/${n.folderName}/${n.skeletonFileName}`,skeletonUrl:Wd(`${s}/${encodeURIComponent(n.skeletonFileName)}`),atlasPath:`resources/spine/${n.folderName}/${n.atlasFileName}`,atlasUrl:Wd(`${s}/${encodeURIComponent(n.atlasFileName)}`),texturePath:`resources/spine/${n.folderName}/${c}`,textureUrl:Wd(`${s}/${encodeURIComponent(c)}`)}}const au=async()=>{const t=O.current;if(!h||!t){y(r("studio.local_custom.preview_wait","请等待当前 Studio 预览加载完成。"));return}const n=Oh(h);if(!n){y(r("studio.local_custom.resource_unavailable","当前资源不是可浏览的内置 Spine 模板，暂时不能创建本地副本。请先使用已 stage 的 /spine 资源。"));return}try{await $p();const a=await t.captureCurrentPng(),l=await fm(a),s=await Br(l),c=et?_t.find(m=>m.id===et):null;Xu({resourceId:h.id,characterCode:h.baseCode,skinCode:Pe?ye:h.skin,displayName:Ii??h.name,sourceKind:"character-spine-copy",sourceImageDataUrl:l,sourceWidth:s.width,sourceHeight:s.height,sourceCanvasWidth:H,sourceCanvasHeight:W,spineContext:{sourceResourceId:h.id,sourceDisplayName:Ii??h.name,...n,currentSkin:Pe?ye:h.skin,currentAnimation:te,selectedAttachmentPartId:c==null?void 0:c.id,selectedAttachmentName:c==null?void 0:c.attachmentName,selectedAttachmentPath:c==null?void 0:c.attachmentPath,attachmentParts:_t.map(m=>({id:m.id,slotIndex:m.slotIndex,slotName:m.slotName,attachmentName:m.attachmentName,attachmentPath:m.attachmentPath,kind:m.kind})),previewPngDataUrl:l},createdAt:new Date().toISOString()}),o("/studio/creator?from=studio&mode=local-copy")}catch(a){y(a instanceof Error?a.message:r("studio.local_custom.create_failed","创建本地自定义副本失败。"))}},ru=t=>{Bi({payload:{sourceType:"creator-studio-overlay-return",returnVersion:1,imageDataUrl:t.previewUrl,width:1,height:1,projectName:t.name,studioResource:h?{resourceId:h.id,characterCode:h.baseCode,skinCode:t.skinCode,displayName:t.sourceDisplayName||h.name,sourceKind:"character-spine-copy",sourceWidth:1,sourceHeight:1,createdAt:t.createdAt}:null,createdAt:new Date().toISOString()},visible:!0,opacity:1}),y(r("studio.toast.local_custom_preview_shown","Local version preview image is now visible on the stage."))},su=async t=>{try{const n=await fetch(t.projectUrl,{cache:"no-cache"});if(!n.ok)throw new Error(r("studio.local_custom.project_http_failed","本地项目读取失败：HTTP {status}",{status:n.status}));const a=await n.text(),l=hf(a);gf(ff(l)),o("/studio/creator?from=studio&mode=local-custom")}catch(n){y(n instanceof Error?n.message:r("studio.local_custom.open_failed","本地自定义项目打开失败。"))}},lu=async t=>{if(window.confirm(r("studio.local_custom.delete_confirm","删除本地自定义版本「{name}」？只会删除 resources/local/custom-spine/{id}，不会碰原始资源。",{name:t.name||t.customId,id:t.customId})))try{const n=await bf(t.customId);Zl(n.manifest.entries),y(r("studio.local_custom.delete_done","已删除本地自定义版本。原始资源未修改。"))}catch(n){y(n instanceof Error?n.message:r("studio.local_custom.delete_failed","本地自定义删除失败。"))}},du=async()=>{const t=O.current;if(!h||!t){y(r("studio.local_custom.preview_wait","请等待当前 Studio 预览加载完成。"));return}try{await $p();const n=await t.captureCurrentPng(),a=await fm(n),l=await Br(a);Xu({resourceId:h.id,characterCode:h.baseCode,skinCode:Pe?ye:h.skin,displayName:Ii??h.name,sourceKind:"preview-snapshot",sourceImageDataUrl:a,sourceWidth:l.width,sourceHeight:l.height,sourceCanvasWidth:H,sourceCanvasHeight:W,createdAt:new Date().toISOString()}),o("/studio/creator?from=studio")}catch(n){y(n instanceof Error?n.message:r("studio.local_custom.send_failed","发送到 Creator 失败。"))}},Zt=_e==="model"?Te:dt,_n=_e==="model"?wt:Rn,ol=_e==="model"?"model":"background",cu=()=>{const t=!io(Zt);ze(_e,{flipX:t}),y(t?r("studio.toast.layer_flipped_horizontal","当前图层已水平翻转"):r("studio.toast.layer_unflipped_horizontal","当前图层已取消水平翻转"))},pu=()=>{const t=!oo(Zt);ze(_e,{flipY:t}),y(t?r("studio.toast.layer_flipped_vertical","当前图层已上下翻转"):r("studio.toast.layer_unflipped_vertical","当前图层已取消上下翻转"))},Bh=t=>{const n=_e==="model"?Ot:Gi,a=_e==="model"?Kt:Ki;t==="left"&&n(-86),t==="centerX"&&n(0),t==="right"&&n(86),t==="top"&&a(-58),t==="centerY"&&a(0),t==="bottom"&&a(58)},uu=[{label:i("studio.layers.x"),name:`${ol}X`,min:-2e3,max:2e3,value:Zt.x},{label:i("studio.layers.y"),name:`${ol}Y`,min:-2e3,max:2e3,value:Zt.y},{label:i("studio.layers.scale"),name:`${ol}Scale`,min:qm,max:qS,inputMax:Vm,value:Zt.scale},{label:i("studio.layers.rotation"),name:`${ol}Rotation`,min:-180,max:180,value:Zt.rotation},..._e==="background"?[{label:r("studio.layers.opacity","不透明度"),name:"backgroundOpacity",min:Jm,max:Qm,value:Vn}]:[]],Rr=Nr,al=Rr>0?Rr*ps/100:0,$h=Fn?{left:`${Fn.x}px`,top:`${Fn.y}px`,width:`${Fn.width}px`,height:`${Fn.height}px`}:void 0,Ud=As.trim().toLowerCase(),en=d.useMemo(()=>_t.filter(t=>wo==="hidden"&&We[t.id]!==!1||wo==="visible"&&We[t.id]===!1||wo==="replaced"&&!ce[t.id]?!1:Ud?[t.slotName,t.attachmentName,t.attachmentPath??"",t.kind??""].join(" ").toLowerCase().includes(Ud):!0),[_t,ce,We,wo,Ud]),Z=d.useMemo(()=>Gt===U?_t.find(t=>t.id===et)??null:null,[U,_t,Gt,et]),mu=d.useMemo(()=>{if(!h||!Oa(h))return We;const t=Ni&&$e.includes(te)?te:h.motion;return{...Wg(h.code,t,_t),...We}},[h,_t,We,$e,Ni,te]);d.useEffect(()=>{if(!Nt||ve!=="parts"||_t.length===0||Gt===U&&et&&_t.some(n=>n.id===et))return;const t=en[0]??_t[0];_i.current=U,Yi.current=t.id,Se.current=zr(U,t.id),ma(U),ua(t.id)},[U,_t,en,ve,Gt,et,Nt]),d.useEffect(()=>{const t=()=>{F.current=null},n=a=>{const l=F.current;!l||a.detail===0||(t(),!(performance.now()>l.expires||Math.abs(a.clientX-l.x)>4||Math.abs(a.clientY-l.y)>4)&&(a.preventDefault(),a.stopImmediatePropagation()))};return window.addEventListener("click",n,!0),window.addEventListener("pointerdown",t,!0),()=>{window.removeEventListener("click",n,!0),window.removeEventListener("pointerdown",t,!0)}},[]),d.useEffect(()=>{const t=Gt&&et?zr(Gt,et):null,n=Se.current??(gt==="parts"?t:null);if(!n)return;let a=0,l=0;const s=()=>{const c=de.current,m=P.current.get(n);if(!c||!m){l+=1,l<12&&(a=window.requestAnimationFrame(s));return}const u=c.getBoundingClientRect(),v=m.getBoundingClientRect(),w=c.scrollTop+v.top-u.top-Math.max(0,(c.clientHeight-v.height)/2);if(!Nt&&gt!=="parts"&&c.scrollIntoView({block:"nearest",inline:"nearest"}),c.scrollTo({top:Math.max(0,w),behavior:"auto"}),gt==="parts"){const b=c.closest(".panel-page.is-active");if(b){const C=b.getBoundingClientRect(),x=m.getBoundingClientRect(),j=x.top<C.top+8?x.top-C.top-8:x.bottom>C.bottom-8?x.bottom-C.bottom+8:0;j&&b.scrollTo({top:b.scrollTop+j,behavior:"auto"})}}Se.current=null};return a=window.requestAnimationFrame(s),()=>window.cancelAnimationFrame(a)},[en,gt,wo,As,Gt,et,Nt]);const tn=Z?Ft[Z.id]:void 0,Ro=Z?ce[Z.id]:void 0,Hh=ec(Ro),rl=d.useMemo(()=>Object.values(We).filter(t=>t===!1).length,[We]),Lr=d.useMemo(()=>Object.keys(ce).length,[ce]),hu=d.useCallback(t=>{const n=en.map(a=>a.id);ti(a=>{const l={...a};return n.forEach(s=>{t?delete l[s]:l[s]=!1}),l}),!t&&Gt===U&&et&&n.includes(et)&&_o(null),y(t?r("studio.toast.parts_filtered_shown","已显示当前筛选部件"):r("studio.toast.parts_filtered_hidden","已隐藏当前筛选部件"))},[U,en,Gt,et,y,r]),Wh=d.useCallback(()=>{const t=en.map(n=>n.id);ti(n=>{const a={...n};return t.forEach(l=>{a[l]===!1?delete a[l]:a[l]=!1}),a}),et&&Gt===U&&t.includes(et)&&We[et]!==!1&&_o(null),y(r("studio.toast.parts_filtered_inverted","已反转当前筛选部件"))},[U,We,en,Gt,et,y,r]),gu=bn?{left:bn.left,width:bn.width,maxHeight:bn.maxHeight,...bn.placement==="up"?{bottom:bn.bottom}:{top:bn.top}}:void 0,Yh=je==="externalSkin"?"is-external-skin":je==="internalSkin"?"is-internal-skin":"is-motion",fu=je==="externalSkin"?r("studio.choice.external_skin_title","External skins for this module"):je==="internalSkin"?r("studio.choice.internal_skin_title","Internal skins in this skeleton"):r("studio.choice.motion_title","Available animations"),bu=g==="zh-CN"||g==="ja-JP"?"/home/brand-avatar-cjk.png":"/home/brand-avatar-ko.png",xu=g==="ja-JP"?"/home/title-logo-ja.png":g==="ko-KR"?"/home/title-logo-ko.png":"/home/title-logo-zh.png",Gh=e.jsx("div",{className:"stage-view",children:e.jsxs("div",{ref:L,className:Jp,style:qp,children:[at.map((t,n)=>{if(t.type==="background"){const x=Ce.find(ke=>ke.id===t.id);if(!x)return null;const j=Zi(x),A=Ra(j);if(A==="transparent")return null;const R=Le?qe(j.transform):{x:0,y:0,scale:100,rotation:0},ee=Uu({stageWidth:H,stageHeight:W,sourceWidth:j.naturalWidth??j.width??H,sourceHeight:j.naturalHeight??j.height??W,targetWidth:j.width,targetHeight:j.height,fitMode:j.fitMode,transform:R}),ae=Di.width/Math.max(1,H),X=Di.height/Math.max(1,W),he={zIndex:4+n,width:`${ee.baseWidth*ae}px`,height:`${ee.baseHeight*X}px`,transform:`translate(-50%, -50%) translate(${ee.offsetX*ae}px, ${ee.offsetY*X}px) rotate(${ee.rotation}deg) scale(${io(R)?-ee.scale:ee.scale}, ${oo(R)?-ee.scale:ee.scale})`,opacity:Pi(j.opacity)/100},Je=ke=>{ka(j.id),$s("background",ke,j.id)};return A==="image"&&j.image?e.jsx(bm,{playbackTime:it.playback!=="forward"?N:void 0,onDuration:ke=>Fl.current.set(j.id,ke),layer:j,className:["stage-background-layer","stage-backdrop",`is-fit-${j.fitMode}`,ui(j)?"is-gif-image-layer":"",j.playbackMode==="dynamic"?"is-dynamic-image-layer":""].filter(Boolean).join(" "),style:he,onPointerDown:Je,onNaturalSize:(ke,Ei)=>bp(j.id,ke,Ei)},j.id):e.jsx("div",{className:"stage-background-layer stage-backdrop is-solid is-fit-cover",style:{...he,backgroundColor:j.color},onPointerDown:Je},j.id)}const a=fe.find(x=>x.id===t.id);if(!a)return null;const l=a.id===U,s=l?Xt:rd[a.id],c=me.get(l?(h==null?void 0:h.id)??a.resourceId:a.resourceId),m=Dp(a),u=l?yt:!a.visible,v=ai&&!jt&&l&&!u,w=mn?Bt(Me*a.playbackSpeed):Me,b=mn?an(a.timeOffset):(c==null?void 0:c.otherSubcategory)==="dynamicAvatar"?.35:0,C=l?{visibility:mu,replacements:ce,adjustments:Ft}:{visibility:a.attachmentVisibility,replacements:a.attachmentReplacements,adjustments:a.attachmentAdjustments};return e.jsxs("div",{"data-model-layer-id":a.id,className:["stage-character","stage-spine",u?"is-hidden":"",l?"is-active-model-layer":"",v?"is-interaction-target":""].filter(Boolean).join(" "),style:{zIndex:4+n,"--model-rotation":`${m.rotation}deg`,"--model-pivot-x":`${50+m.x/Math.max(H,1)*100}%`,"--model-pivot-y":`${50+m.y/Math.max(W,1)*100}%`,"--model-stretch-x":oc(m)/100,"--model-stretch-y":ac(m)/100},onPointerDown:x=>{v||Ip(x,a.id)},children:[c&&s?e.jsx(Du,{ref:x=>{x?pa.current.set(a.id,x):pa.current.delete(a.id),St.current===a.id&&(O.current=x)},descriptor:s,requestedAnimationName:l?Ni?te:void 0:a.animationName||void 0,requestedSkinName:l?Pe?ye:void 0:a.skinName||void 0,isPlaying:Va,playbackSpeed:w,timeOffset:b,framingMode:"pose",attachmentVisibility:C.visibility,attachmentReplacements:C.replacements,attachmentAdjustments:C.adjustments,viewSettings:Fp(a),animationComposition:l&&!v?At:null,className:"h-full w-full bg-transparent",emptyStateMessage:null,loadingMessage:null,showErrorOverlay:!1,enableInteraction:v,enableInteractionSound:ar,enableInteractionFx:rr,onRenderFrame:Oo?Xa.capture:void 0,playbackOrder:it.playback,playbackFramePlan:Tr,interactionVoiceLanguage:ia,onAnimationsDiscovered:l?x=>{$l(c.id),Ol(x),qa(j=>j&&x.includes(j)?j:c.motion&&x.includes(c.motion)?c.motion:sl(x)??x[0]??"")}:void 0,onSkinsDiscovered:l?x=>{const j=K&&c.id===K.resourceId?K.baseCode:null;Hl(c.id),Bl(x),lo(A=>em({modelType:c.modelType,resourceCode:c.code,baseFileName:c.entry.baseFileName,skinNames:x,currentSkinName:A,miniBaseCode:j,allowAnyMiniSkin:!!(j&&(K!=null&&K.showAll))})??"")}:void 0,onInteractionSupportDiscovered:l?x=>{Ic(j=>j[c.id]===x?j:{...j,[c.id]:x})}:void 0,onAttachmentPartsDiscovered:l?x=>Tp(a.id,x):void 0,onPlaybackSnapshot:l?xp:void 0,onError:l?x=>{if(zi.status==="ready"){y(x);return}bo({status:"error",source:c.source,message:x})}:void 0},`modern:${a.id}:${c.id}`):null,l&&(zt==null?void 0:zt.layerId)===a.id&&zt.screenBounds?e.jsx("span",{className:"part-selection-overlay",style:{left:`${zt.screenBounds.x}px`,top:`${zt.screenBounds.y}px`,width:`${zt.screenBounds.width}px`,height:`${zt.screenBounds.height}px`},"aria-hidden":"true"}):null,l&&el?e.jsxs("span",{className:"face-follow-frame",style:el,onPointerDown:Ep,title:r("studio.export.face_follow_drag","拖动调整脸部在画面中的位置"),children:[e.jsx("span",{className:"face-follow-label",children:r("studio.export.face_follow_frame","脸部取景")}),e.jsx("button",{type:"button",className:"face-follow-resize-handle","aria-label":r("studio.export.face_follow_resize","拖动调整取景框大小"),onPointerDown:Rp})]}):null]},a.id)}),Ke!=null&&Ke.visible?e.jsx("img",{className:"creator-stage-overlay",src:Ke.payload.imageDataUrl,alt:"",style:{opacity:Ke.opacity}}):null,jt?e.jsx("div",{className:"part-pick-hint",children:r("studio.parts.pick_hint","点击模型定位贴图")}):null,e.jsx("div",{className:"focus-frame","aria-hidden":"true",style:Vp,children:e.jsxs("span",{className:"frame-label",children:[H," x ",W]})}),Oo?e.jsx(Vu,{stageRef:L,capture:Xa,settings:Xn,effects:it,loopDuration:Xp,onEffectsChange:t=>Ka(mt(t)),compare:ls,showGuide:ve==="effects",onPosition:t=>Dl(n=>mi({...n,position:t})),label:i("studio.effects.position")}):null,e.jsxs("div",{className:"stage-badge",children:[e.jsx("span",{className:"status-dot"}),e.jsx("span",{children:iu})]}),e.jsx("div",{className:"stage-hint",children:Ec})]})}),Kh=e.jsxs(e.Fragment,{children:[e.jsxs("button",{className:"w-btn",type:"button",onClick:()=>Dn(!0),children:[i("studio.composition.title")," · ",r("studio.modern.clip_count","{count} 个片段",{count:pt.length})," ›"]}),e.jsx("div",{ref:I,className:"mgrid",style:{marginTop:7},children:xd.map(t=>e.jsx("button",{"data-modern-motion":!0,className:t===te?"mcard on is-active":"mcard",type:"button",title:t,onClick:()=>va(t),children:e.jsx("b",{children:t})},t))}),xd.length===0?e.jsx("div",{className:"roster-empty",children:r("studio.modern.no_motions","当前骨架尚未读取到动作")}):null]}),Xh=e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"gcard",children:[e.jsxs("div",{className:"gtitle",children:[i("studio.choice.external_skin")," · ",To.length]}),e.jsx("div",{className:"skgrid",children:To.map(t=>{var s;const n=t.resourceId?me.get(t.resourceId):void 0,a=t.avatarUrl??(n?Kn(n,pn[n.id],((s=oi.get(n.groupId))==null?void 0:s.avatarUrl)??(pe==null?void 0:pe.avatarUrl)):pe==null?void 0:pe.avatarUrl),l=t.displayLabel??Ao(t.label);return e.jsxs("button",{className:t.resourceId===(h==null?void 0:h.id)?"skcard on is-active":"skcard",type:"button",onClick:()=>ap(t),children:[e.jsx("span",{className:"skdot",style:a?{backgroundImage:`url(${a})`,backgroundPosition:"center",backgroundSize:t.avatarUrl?"contain":"cover",backgroundRepeat:"no-repeat"}:void 0}),e.jsx("b",{children:l})]},t.id)})}),To.length===0?e.jsx("div",{className:"roster-empty",children:i("studio.choice.no_external_skin")}):null]}),e.jsxs("div",{className:"gcard",children:[e.jsx("div",{className:"gtitle",children:i("studio.choice.internal_skin")}),e.jsx("div",{className:"mgrid",children:Fs.map(t=>e.jsxs("button",{className:t.skinName===ye?"mcard on is-active":"mcard",type:"button",onClick:()=>rp(t.skinName),children:[e.jsx("b",{title:t.label,children:t.label.split(new RegExp("(?<=_)","u")).map((n,a)=>e.jsxs(d.Fragment,{children:[a>0?e.jsx("wbr",{}):null,n]},a))}),t.skinName===ye?e.jsx("small",{children:r("studio.modern.current_skin","当前 skin")}):null]},t.id))}),Fs.length===0?e.jsx("div",{className:"roster-empty",children:i("studio.choice.no_internal_skin")}):null]})]}),qh=e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"modern-v12-parts-controls",children:[e.jsxs("div",{className:"v12-toolbar",children:[e.jsxs("button",{className:jt?"w-btn on is-active":"w-btn",type:"button",onClick:()=>ni(t=>!t),children:["◎ ",i("studio.parts.pick_hint")]}),e.jsx("button",{className:"w-btn",type:"button",disabled:Lr===0,onClick:()=>On({}),children:i("studio.parts.restore_all")})]}),e.jsxs("label",{className:"roster-search",style:{height:38,flex:"none",borderRadius:12,marginTop:8},children:[e.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[e.jsx("circle",{cx:"11",cy:"11",r:"7"}),e.jsx("path",{d:"m20 20-3.5-3.5"})]}),e.jsx("input",{type:"search",value:As,placeholder:i("studio.parts.search_placeholder"),onChange:t=>Is(t.target.value)})]}),e.jsx("div",{className:"v12-chip-row",style:{marginTop:7},children:["all","visible","hidden","replaced"].map(t=>e.jsx("button",{className:wo===t?"v12-chip on is-active":"v12-chip",type:"button",onClick:()=>Es(t),children:i(`studio.parts.filter.${t}`)},t))})]}),e.jsxs("div",{ref:de,className:"v12-part-list",role:"list",children:[en.map(t=>{const n=We[t.id]!==!1,a=ce[t.id],l=ec(a),s=zr(U,t.id),c=Gt===U&&et===t.id;return e.jsxs("div",{ref:m=>{m?P.current.set(s,m):P.current.delete(s)},className:c?"part-item is-selected is-active":n?"part-item":"part-item is-off",role:"listitem",onClick:()=>Qi(U,t.id),children:[e.jsx("span",{className:"pthumb part-thumb",children:l?e.jsx("span",{className:"attachment-gif-badge",children:"GIF"}):a!=null&&a.src||t.thumbnailSrc?e.jsx("img",{src:(a==null?void 0:a.src)??t.thumbnailSrc,alt:""}):e.jsx("span",{children:t.slotIndex+1})}),e.jsxs("button",{className:"pname",type:"button",onClick:()=>Qi(U,t.id),children:[e.jsx("b",{children:t.attachmentName}),e.jsxs("small",{children:[t.slotName,a?` · ${a.fileName??i("studio.parts.replaced")}`:""]})]}),e.jsxs("label",{className:"pact",onClick:m=>m.stopPropagation(),children:[e.jsx("span",{children:a?r("studio.modern.reselect","重选"):i("studio.parts.replace")}),e.jsx("input",{className:"sr-only",type:"file",accept:"image/*",onChange:m=>{var u;jd(t,(u=m.target.files)==null?void 0:u[0]),m.currentTarget.value=""}})]}),e.jsx("button",{className:n?"toggle on is-active":"toggle",type:"button","aria-label":i(n?"studio.parts.disable":"studio.parts.enable"),title:i(n?"studio.parts.disable":"studio.parts.enable"),onClick:m=>{m.stopPropagation(),Sd(t,!n)},children:e.jsx("span",{})})]},t.id)}),en.length===0?e.jsx("div",{className:"roster-empty",children:i("studio.parts.no_match")}):null]}),Z?e.jsxs("div",{className:"modern-v12-part-details",children:[e.jsxs("div",{className:"gtitle modern-v12-card-title",children:[e.jsxs("span",{children:[r("studio.modern.current_part","当前部件")," · ",Z.attachmentName]}),e.jsx("small",{children:Z.slotName})]}),e.jsxs("details",{className:"v12-section modern-v12-section",open:!0,children:[e.jsx("summary",{children:i("studio.parts.original_adjustment")}),e.jsxs("div",{className:"v12-section-body modern-v12-section-body",children:[e.jsxs("div",{className:"v12-compact-grid modern-v12-grid",children:[[[i("studio.parts.original_x"),"x",-1e3,1e3],[i("studio.parts.original_y"),"y",-1e3,1e3],[i("studio.parts.original_scale"),"scale",Fa,za],[i("studio.parts.original_rotation"),"rotation",-360,360]].map(([t,n,a,l])=>e.jsxs("label",{className:"v12-field modern-v12-field",children:[e.jsx("span",{children:t}),e.jsx(se,{min:a,max:l,value:(tn==null?void 0:tn[n])??(n==="scale"?100:0),fallback:n==="scale"?100:0,onCommit:s=>qs(Z,{[n]:s})})]},n)),e.jsxs("label",{className:"v12-field modern-v12-field",children:[e.jsx("span",{children:i("studio.parts.original_opacity")}),e.jsx(se,{min:0,max:100,value:(tn==null?void 0:tn.opacity)??100,fallback:100,onCommit:t=>qs(Z,{opacity:t})})]})]}),e.jsx("button",{className:"w-btn modern-v12-button",style:{marginTop:8},type:"button",disabled:!tn,onClick:()=>Ap(Z),children:i("studio.parts.original_adjustment_reset")})]})]}),e.jsxs("details",{className:"v12-section modern-v12-section",open:ce[Z.id]?!0:void 0,children:[e.jsx("summary",{children:i("studio.parts.original_adjustment_replaced_summary")}),e.jsxs("div",{className:"v12-section-body modern-v12-section-body",children:[e.jsxs("div",{className:"v12-toolbar modern-v12-actions modern-v12-part-detail-actions",children:[e.jsxs("label",{className:"w-btn modern-v12-button",children:[i("studio.parts.select_replace_hint"),e.jsx("input",{className:"sr-only",type:"file",accept:"image/*",onChange:t=>{var n;jd(Z,(n=t.target.files)==null?void 0:n[0]),t.currentTarget.value=""}})]}),ce[Z.id]?e.jsx("button",{className:"w-btn modern-v12-button",type:"button",onClick:()=>Mp(Z),children:i("studio.parts.reset")}):null]}),ce[Z.id]?e.jsx(e.Fragment,{children:e.jsxs("div",{className:"v12-compact-grid modern-v12-grid",children:[e.jsxs("label",{className:"v12-field modern-v12-field",children:[e.jsx("span",{children:i("studio.parts.replacement_mode")}),e.jsxs("select",{value:((ku=ce[Z.id])==null?void 0:ku.replacementMode)??"overlayFree",onChange:t=>ri(Z,{replacementMode:t.target.value}),children:[e.jsx("option",{value:"replaceOriginal",children:i("studio.parts.replacement_mode.replace_original")}),e.jsx("option",{value:"overlayFree",children:i("studio.parts.replacement_mode.overlay_free")})]})]}),e.jsxs("label",{className:"v12-switch modern-v12-switch",children:[e.jsx("span",{children:i("studio.parts.hide_original")}),e.jsx("input",{type:"checkbox",checked:((yu=ce[Z.id])==null?void 0:yu.hideOriginal)===!0,onChange:t=>ri(Z,{hideOriginal:t.target.checked})})]}),[[i("studio.parts.x"),"x",-1e3,1e3],[i("studio.parts.y"),"y",-1e3,1e3],[i("studio.parts.scale"),"scale",Fa,za],[i("studio.parts.rotation"),"rotation",-360,360]].map(([t,n,a,l])=>{var s,c;return e.jsxs("label",{className:"v12-field modern-v12-field",children:[e.jsx("span",{children:t}),e.jsx(se,{min:a,max:l,value:((c=(s=ce[Z.id])==null?void 0:s.transform)==null?void 0:c[n])??(n==="scale"?100:0),fallback:n==="scale"?100:0,onCommit:m=>ri(Z,{transform:{[n]:m}})})]},n)}),e.jsxs("label",{className:"v12-field modern-v12-field",children:[e.jsx("span",{children:i("studio.parts.fit")}),e.jsxs("select",{value:((wu=ce[Z.id])==null?void 0:wu.fitMode)??"contain",onChange:t=>ri(Z,{fitMode:t.target.value}),children:[e.jsx("option",{value:"contain",children:i("studio.parts.fit.contain")}),e.jsx("option",{value:"cover",children:i("studio.parts.fit.cover")}),e.jsx("option",{value:"stretch",children:i("studio.parts.fit.stretch")})]})]}),e.jsxs("label",{className:"v12-field modern-v12-field",children:[e.jsx("span",{children:i("studio.parts.overflow")}),e.jsxs("select",{value:Sl(Z,(_u=ce[Z.id])==null?void 0:_u.overflowMode),onChange:t=>ri(Z,{overflowMode:t.target.value}),children:[e.jsx("option",{value:"clip",children:i("studio.parts.overflow.clip")}),e.jsx("option",{value:"expand",children:i("studio.parts.overflow.expand")})]})]})]})}):null]})]})]}):null]}),Vh=e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[e.jsxs("div",{className:"v12-editing-banner",children:[e.jsxs("label",{className:"v12-switch",children:[e.jsx("input",{type:"checkbox",checked:Le,onChange:t=>Ho(t.target.checked)}),e.jsx("span",{children:i("studio.layers.enable_editing")})]}),e.jsx("span",{className:"v12-subtle",children:r("studio.modern.layer_edit_hint","拖动 / 缩放 / 对齐")})]}),e.jsx("div",{className:"v12-layer-list",children:at.slice().reverse().map(t=>{const n=at.findIndex(C=>C.type===t.type&&C.id===t.id),a=n>=0&&n<at.length-1,l=n>0;if(t.type==="background"){const C=Ce.find(R=>R.id===t.id);if(!C)return null;const x=Zi(C),j=_e==="background"&&C.id===De,A=x.visible&&Ra(x)!=="transparent";return e.jsxs("div",{className:j?"layer-item on is-active":"layer-item",onClick:()=>{ks(!1),ka(C.id)},children:[x.image?e.jsx("span",{className:"v12-layer-badge is-image",children:e.jsx("img",{className:"modern-v12-resource-avatar",src:x.image,alt:""})}):e.jsx("span",{className:"v12-layer-badge is-image modern-v12-resource-avatar",children:r("studio.modern.image_badge","图")}),e.jsxs("button",{className:"ln",type:"button",onClick:()=>ka(C.id),children:[e.jsx("b",{children:hm(x.name)?i("studio.layers.image_layer_numbered",{label:i("studio.layers.image_layer_name"),index:n+1}):x.name}),e.jsx("small",{children:ui(x)?x.playbackMode==="dynamic"?i("studio.layers.gif_dynamic"):i("studio.layers.gif_static"):x.mode==="solid"?i("studio.layers.image_layer_kind.solid"):i("studio.layers.static_image")})]}),e.jsxs("div",{className:"v12-layer-ops",onClick:R=>R.stopPropagation(),children:[e.jsx("button",{type:"button",disabled:!0,title:i("studio.layers.solo_preview"),"aria-label":i("studio.layers.solo_preview"),children:e.jsx(Li,{size:13,"aria-hidden":"true"})}),e.jsx("button",{className:x.locked?"on is-active":"",type:"button",title:x.locked?i("studio.layers.unlock_image_layer"):i("studio.layers.lock_image_layer"),"aria-label":x.locked?i("studio.layers.unlock_image_layer"):i("studio.layers.lock_image_layer"),onClick:()=>wd(C.id),children:x.locked?e.jsx(ul,{size:13,"aria-hidden":"true"}):e.jsx(ml,{size:13,"aria-hidden":"true"})}),e.jsx("button",{className:A?"on is-active":"",type:"button",title:i(A?"studio.layers.hide_image_layer":"studio.layers.show_image_layer"),"aria-label":i(A?"studio.layers.hide_image_layer":"studio.layers.show_image_layer"),onClick:()=>yd(C.id),children:A?e.jsx(Li,{size:13,"aria-hidden":"true"}):e.jsx(Lo,{size:13,"aria-hidden":"true"})}),e.jsx("button",{type:"button",disabled:!a,title:i("studio.layers.move_up"),"aria-label":i("studio.layers.move_up"),onClick:()=>Ji(t,"up"),children:e.jsx(Gd,{size:13,"aria-hidden":"true"})}),e.jsx("button",{type:"button",disabled:!l,title:i("studio.layers.move_down"),"aria-label":i("studio.layers.move_down"),onClick:()=>Ji(t,"down"),children:e.jsx(Kd,{size:13,"aria-hidden":"true"})}),e.jsx("button",{className:"is-danger",type:"button",title:i("studio.layers.remove_image_layer"),"aria-label":i("studio.layers.remove_image_layer"),onClick:()=>fp(C.id),children:e.jsx(no,{size:13,"aria-hidden":"true"})})]})]},Do(t))}const s=fe.find(C=>C.id===t.id);if(!s)return null;const c=fe.findIndex(C=>C.id===s.id),m=me.get(s.id===U?(h==null?void 0:h.id)??s.resourceId:s.resourceId),u=_e==="model"&&s.id===U,v=s.id===U?!yt:s.visible,w=s.id===U?wt:s.locked,b=vs&&u;return e.jsxs("div",{className:u?"layer-item on is-active":"layer-item",onClick:()=>{u||ks(!1),Wn(s.id)},children:[m&&Kn(m,pn[m.id])?e.jsx("span",{className:"v12-layer-badge",children:e.jsx("img",{className:"lav modern-v12-resource-avatar",src:Kn(m,pn[m.id]),alt:""})}):e.jsx("span",{className:"v12-layer-badge modern-v12-resource-avatar",children:r("studio.modern.model_badge","模")}),e.jsxs("button",{className:"ln",type:"button",onClick:()=>Wn(s.id),children:[e.jsxs("b",{children:[i("studio.layers.model")," · ",(m==null?void 0:m.name)??(m==null?void 0:m.code)??c+1," #",c+1]}),e.jsxs("small",{children:[Id(m)," · ",s.skinName||"—"," · ",s.animationName||"—"]})]}),e.jsxs("div",{className:"v12-layer-ops",onClick:C=>C.stopPropagation(),children:[e.jsx("button",{className:b?"on is-active":"",type:"button",title:i("studio.layers.solo_preview"),"aria-label":i("studio.layers.solo_preview"),onClick:()=>{u||Wn(s.id),ks(u?!vs:!0)},children:e.jsx(Li,{size:13,"aria-hidden":"true"})}),e.jsx("button",{className:w?"on is-active":"",type:"button",title:i(w?"studio.layers.unlock_model_layer":"studio.layers.lock_model_layer"),"aria-label":i(w?"studio.layers.unlock_model_layer":"studio.layers.lock_model_layer"),onClick:()=>hp(s.id),children:w?e.jsx(ul,{size:13,"aria-hidden":"true"}):e.jsx(ml,{size:13,"aria-hidden":"true"})}),e.jsx("button",{className:v?"on is-active":"",type:"button",title:i(v?"studio.layers.hide_model_layer":"studio.layers.show_model_layer"),"aria-label":i(v?"studio.layers.hide_model_layer":"studio.layers.show_model_layer"),onClick:()=>mp(s.id),children:v?e.jsx(Li,{size:13,"aria-hidden":"true"}):e.jsx(Lo,{size:13,"aria-hidden":"true"})}),e.jsx("button",{type:"button",disabled:!a,title:i("studio.layers.move_up"),"aria-label":i("studio.layers.move_up"),onClick:()=>Ji(t,"up"),children:e.jsx(Gd,{size:13,"aria-hidden":"true"})}),e.jsx("button",{type:"button",disabled:!l,title:i("studio.layers.move_down"),"aria-label":i("studio.layers.move_down"),onClick:()=>Ji(t,"down"),children:e.jsx(Kd,{size:13,"aria-hidden":"true"})}),e.jsx("button",{className:"is-danger",type:"button",title:i("studio.layers.remove_model_layer"),"aria-label":i("studio.layers.remove_model_layer"),disabled:s.id===li||fe.length<=1,onClick:()=>up(s.id),children:e.jsx(no,{size:13,"aria-hidden":"true"})})]})]},Do(t))})}),e.jsxs("div",{className:"v12-toolbar",children:[e.jsxs("button",{className:"w-btn",type:"button",onClick:pp,disabled:fe.length>=Dr,children:["＋ ",i("studio.layers.add_model_layer")]}),e.jsxs("button",{className:"w-btn",type:"button",onClick:gp,disabled:Ce.length>=Fr,children:["＋ ",i("studio.layers.add_image_layer")]})]})]}),e.jsxs("details",{className:"v12-section modern-v12-section modern-v12-layer-details",open:!0,children:[e.jsx("summary",{children:r("studio.modern.current_layer_properties","当前图层属性")}),e.jsxs("div",{className:"v12-section-body modern-v12-section-body",children:[e.jsxs("div",{className:"v12-compact-grid modern-v12-grid",children:[uu.map(t=>{const n="inputMax"in t?t.inputMax:t.max;return e.jsxs("label",{className:"v12-field modern-v12-field",children:[e.jsx("span",{children:t.label}),e.jsx(se,{min:t.min,max:n,value:t.value,disabled:!Le,integer:!0,onCommit:a=>kd(t.name,a)})]},t.name)}),_e==="model"?e.jsxs(e.Fragment,{children:[e.jsxs("label",{className:"v12-field modern-v12-field",children:[e.jsx("span",{children:i("studio.layers.model_target_width")}),e.jsx(se,{min:ci,max:eo,value:Os.width,fallback:H,integer:!0,onCommit:t=>Ci({width:t})})]}),e.jsxs("label",{className:"v12-field modern-v12-field",children:[e.jsx("span",{children:i("studio.layers.model_target_height")}),e.jsx(se,{min:ci,max:eo,value:Os.height,fallback:W,integer:!0,onCommit:t=>Ci({height:t})})]})]}):ot==="upload"?e.jsxs(e.Fragment,{children:[e.jsxs("label",{className:"v12-field modern-v12-field",children:[e.jsx("span",{children:i("studio.layers.image_width")}),e.jsx(se,{min:1,max:8192,value:$t??H,fallback:H,integer:!0,onCommit:t=>ya({width:t})})]}),e.jsxs("label",{className:"v12-field modern-v12-field",children:[e.jsx("span",{children:i("studio.layers.image_height")}),e.jsx(se,{min:1,max:8192,value:Ht??W,fallback:W,integer:!0,onCommit:t=>ya({height:t})})]}),e.jsxs("label",{className:"v12-field modern-v12-field",children:[e.jsx("span",{children:i("studio.layers.image_fit")}),e.jsxs("select",{value:kt,onChange:t=>Vi(t.target.value),children:[e.jsx("option",{value:"contain",children:i("studio.layers.image_fit.contain")}),e.jsx("option",{value:"cover",children:i("studio.layers.image_fit.cover")}),e.jsx("option",{value:"original",children:i("studio.layers.image_fit.original")})]})]}),Us&&ui(Zi(Us))?e.jsxs(e.Fragment,{children:[e.jsxs("label",{className:"v12-field modern-v12-field",children:[e.jsx("span",{children:i("studio.layers.image_gif_mode")}),e.jsxs("select",{value:vn,onChange:t=>Yn({playbackMode:t.target.value}),children:[e.jsx("option",{value:"static",children:i("studio.layers.image_gif_mode.static")}),e.jsx("option",{value:"dynamic",children:i("studio.layers.image_gif_mode.dynamic")})]})]}),e.jsxs("label",{className:"v12-field modern-v12-field",children:[e.jsx("span",{children:i("studio.layers.image_layer_speed")}),e.jsx(se,{min:Jr,max:Qr,step:"0.1",value:Ln,fallback:1,onCommit:t=>Yn({playbackSpeed:t})})]}),e.jsxs("label",{className:"v12-field modern-v12-field",children:[e.jsx("span",{children:i("studio.layers.image_layer_time_offset")}),e.jsx(se,{min:Zr,max:es,step:"0.1",value:Pn,fallback:0,onCommit:t=>Yn({timeOffset:t})})]})]}):null]}):null]}),e.jsxs("label",{className:"v12-switch modern-v12-switch modern-v12-layer-ratio",children:[e.jsx("input",{type:"checkbox",checked:_e==="model"?Lt:cn,disabled:!Le||_n,onChange:t=>_e==="model"?Ci({lockAspectRatio:t.target.checked}):ya({lockAspectRatio:t.target.checked})}),e.jsx("span",{children:i("studio.layers.image_lock_aspect")})]}),e.jsx("div",{className:"gtitle",children:i("studio.layers.image_fit")}),e.jsx("div",{className:"v12-chip-row",children:_e==="model"?e.jsxs(e.Fragment,{children:[e.jsx("button",{className:Lt?"v12-chip modern-v12-chip is-active":"v12-chip modern-v12-chip",type:"button",disabled:_n,onClick:()=>Ci({lockAspectRatio:!0}),children:i("studio.layers.model_target_lock_aspect")}),e.jsx("button",{className:"v12-chip modern-v12-chip",type:"button",disabled:_n,onClick:()=>Bs("contain"),children:i("studio.layers.model_fit_stage")}),e.jsx("button",{className:"v12-chip modern-v12-chip",type:"button",disabled:_n,onClick:()=>Bs("cover"),children:i("studio.layers.model_cover_stage")})]}):e.jsxs(e.Fragment,{children:[e.jsx("button",{className:kt==="contain"?"v12-chip modern-v12-chip is-active":"v12-chip modern-v12-chip",type:"button",disabled:_n,onClick:()=>Vi("contain"),children:i("studio.layers.image_fit.contain")}),e.jsx("button",{className:kt==="cover"?"v12-chip modern-v12-chip is-active":"v12-chip modern-v12-chip",type:"button",disabled:_n,onClick:()=>Vi("cover"),children:i("studio.layers.image_fit.cover")}),e.jsx("button",{className:kt==="original"?"v12-chip modern-v12-chip is-active":"v12-chip modern-v12-chip",type:"button",disabled:_n,onClick:()=>Vi("original"),children:i("studio.layers.image_fit.original")})]})}),e.jsxs("div",{className:"v12-chip-row",children:[e.jsx("button",{className:io(Zt)?"v12-chip modern-v12-chip is-active":"v12-chip modern-v12-chip",type:"button",disabled:_n,onClick:cu,children:io(Zt)?r("studio.layers.unflip_horizontal","取消水平翻转"):r("studio.layers.flip_horizontal","水平翻转")}),e.jsx("button",{className:oo(Zt)?"v12-chip modern-v12-chip is-active":"v12-chip modern-v12-chip",type:"button",disabled:_n,onClick:pu,children:oo(Zt)?r("studio.layers.unflip_vertical","取消上下翻转"):r("studio.layers.flip_vertical","上下翻转")})]}),e.jsx("div",{className:"gtitle",children:i("studio.layers.align_label")}),e.jsx("div",{className:"v12-align-grid",children:[["left","studio.layers.align.left"],["centerX","studio.layers.align.center"],["right","studio.layers.align.right"],["top","studio.layers.align.top"],["centerY","studio.layers.align.middle"],["bottom","studio.layers.align.bottom"]].map(([t,n])=>e.jsx("button",{className:"v12-chip modern-v12-chip",type:"button",disabled:!Le||_n,onClick:()=>Bh(t),children:i(n)},t))}),e.jsxs("div",{className:"v12-toolbar modern-v12-actions modern-v12-layer-reset-actions",children:[e.jsx("button",{className:"w-btn modern-v12-button",type:"button",disabled:!Le||_n,onClick:()=>{_e==="model"?(Ot(0),Kt(0)):(Gi(0),Ki(0))},children:i(_e==="model"?"studio.layers.model_center_stage":"studio.layers.image_center")}),e.jsx("button",{className:"w-btn modern-v12-button",type:"button",disabled:!Le||_n,onClick:()=>{_e==="model"?(Ot(0),Kt(0),jo(100),vr(0),ze("model",{flipX:!1,flipY:!1})):(Gi(0),Ki(0),ji(100),kr(0),qo(100),ze("background",{flipX:!1,flipY:!1}))},children:i("studio.layers.reset_layer")})]})]})]}),_e==="model"&&ba?e.jsxs("details",{className:"v12-section modern-v12-section modern-v12-layer-playback",children:[e.jsx("summary",{children:r("studio.modern.model_playback","模型层播放参数")}),e.jsxs("div",{className:"v12-section-body modern-v12-section-body v12-compact-grid modern-v12-grid",children:[e.jsxs("label",{className:"v12-field modern-v12-field",children:[e.jsx("span",{children:i("studio.layers.layer_speed")}),e.jsx(se,{min:Jr,max:Qr,step:"0.1",value:ba.playbackSpeed,fallback:1,onCommit:t=>Ws({playbackSpeed:t})})]}),e.jsxs("label",{className:"v12-field modern-v12-field",children:[e.jsx("span",{children:i("studio.layers.layer_time_offset")}),e.jsx(se,{min:Zr,max:es,step:"0.1",value:ba.timeOffset,fallback:0,onCommit:t=>Ws({timeOffset:t})})]})]})]}):null]}),Jh=e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"gcard",children:[e.jsxs("div",{className:"gtitle",children:[i("studio.canvas.title")," · 1–4096"]}),e.jsxs("div",{className:"v12-compact-grid modern-v12-canvas-size-grid",children:[e.jsxs("label",{className:"v12-field",children:[e.jsx("span",{children:i("studio.canvas.width")}),e.jsx(se,{min:Xr,max:qr,value:H,fallback:800,integer:!0,onCommit:t=>bi(Oe(t))})]}),e.jsxs("label",{className:"v12-field",children:[e.jsx("span",{children:i("studio.canvas.height")}),e.jsx(se,{min:Xr,max:qr,value:W,fallback:800,integer:!0,onCommit:t=>xi(Oe(t))})]})]}),e.jsx("div",{className:"v12-chip-row",children:[[500,500,"500"],[800,800,"800"],[1080,1920,i("studio.canvas.preset.portrait")]].map(([t,n,a])=>e.jsx("button",{className:"v12-chip",type:"button",onClick:()=>_r(Number(t),Number(n)),children:a},String(a)))}),e.jsx("button",{className:"g-btn",style:{minHeight:36},type:"button",onClick:()=>_r(H,W),children:i("studio.canvas.apply_size")})]}),e.jsxs("div",{className:"gcard",children:[e.jsx("div",{className:"gtitle",children:r("studio.modern.background_and_layers","背景与图片层")}),e.jsxs("div",{className:"v12-chip-row",children:[e.jsx("button",{className:ot==="transparent"?"v12-chip on":"v12-chip",type:"button",onClick:()=>sn("transparent"),children:i("studio.export.background.transparent")}),e.jsx("button",{className:ot==="solid"?"v12-chip on":"v12-chip",type:"button",onClick:()=>sn("solid"),children:i("studio.export.background.solid")}),e.jsxs("label",{className:ot==="upload"?"v12-chip on":"v12-chip",children:[i("studio.canvas.image_layer_upload"),e.jsx("input",{className:"sr-only",type:"file",accept:"image/*",onChange:t=>{var n;Gp((n=t.target.files)==null?void 0:n[0]),t.currentTarget.value=""}})]})]}),e.jsxs("div",{className:"v12-toolbar",children:[e.jsxs("label",{className:"v12-field",children:[e.jsx("span",{children:i("studio.canvas.background_color")}),e.jsx("input",{type:"color",value:ct,onChange:t=>{Yo(t.target.value),sn("solid")}})]}),e.jsxs("label",{className:"v12-switch",children:[e.jsx("input",{type:"checkbox",checked:Jn,onChange:t=>ho(t.target.checked)}),e.jsx("span",{children:i("studio.layers.show_image_layer")})]})]}),e.jsx("button",{className:bs?"w-btn on":"w-btn",type:"button",onClick:()=>Ac(t=>!t),children:r("studio.modern.builtin_background_count","内置背景 · {count} 张",{count:Vd})}),bs?e.jsxs("div",{style:{marginTop:9},children:[e.jsxs("label",{className:"roster-search",children:[e.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[e.jsx("circle",{cx:"11",cy:"11",r:"7"}),e.jsx("path",{d:"m20 20-3.5-3.5"})]}),e.jsx("input",{type:"search",value:gs,placeholder:r("studio.modern.search_background","搜索背景名称"),onChange:t=>Mc(t.target.value)})]}),e.jsxs("div",{className:"v12-chip-row",style:{margin:"7px 0"},children:[e.jsx("button",{className:go==="all"?"v12-chip on":"v12-chip",type:"button",onClick:()=>fs("all"),children:i("studio.filter.all")}),nm.map(t=>e.jsx("button",{className:go===t?"v12-chip on":"v12-chip",type:"button",onClick:()=>fs(t),children:t},t))]}),e.jsx("div",{className:"modern-v12-background-grid",children:Vc.map(t=>{var a;const n=((a=gl(vt))==null?void 0:a.id)===t.id;return e.jsxs("button",{className:n?"modern-v12-background-card is-active":"modern-v12-background-card",type:"button",title:t.fileName,onClick:()=>void Kp(t),children:[e.jsx("img",{src:fc(t),alt:"",loading:"lazy"}),e.jsx("strong",{children:t.label})]},t.id)})})]}):null]}),e.jsxs("div",{className:"gcard",children:[e.jsx("div",{className:"gtitle",children:r("studio.modern.preview_stage","预览与舞台")}),e.jsxs("label",{className:"v12-field",children:[e.jsx("span",{children:i("studio.canvas.playback_speed")}),e.jsx(se,{min:.1,max:10,step:"0.1",value:Me,fallback:1,onCommit:po})]}),e.jsxs("div",{className:"v12-toolbar",children:[e.jsx("button",{className:"w-btn",type:"button",onClick:()=>{jo(100),Ot(0),Kt(0),er(!1)},children:i("studio.canvas.fit_stage")}),e.jsx("button",{className:fo?"w-btn on":"w-btn",type:"button",onClick:()=>er(t=>!t),children:fo?r("studio.modern.unlock_frame","解锁取景框"):i("studio.canvas.lock_to_frame")}),e.jsx("button",{className:us?"w-btn on":"w-btn",type:"button",onClick:()=>Tc(t=>!t),children:us?r("studio.modern.hide_frame","隐藏取景框"):i("studio.canvas.show_frame")}),e.jsx("button",{className:"w-btn",type:"button",onClick:()=>{Ot(0),Kt(0)},children:i("studio.canvas.center_model")}),e.jsx("button",{className:"w-btn",type:"button",onClick:op,children:i("studio.canvas.reset_stage")})]})]})]}),Qh=e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"meme-effect-card meme-effect-body",children:e.jsx(mc,{value:it,onChange:Ka})}),e.jsxs("div",{className:"rrow",children:[e.jsx("button",{className:"g-btn",style:{minHeight:38},type:"button",disabled:!!Ut,onClick:()=>ut("current"),children:i("studio.export.current_gif")}),e.jsx("button",{className:"w-btn",type:"button",disabled:!!Ut,onClick:()=>ut("pngCurrent"),children:i("studio.export.current_png")})]}),e.jsxs("div",{className:"gcard",children:[e.jsxs("div",{className:"gtitle",children:[r("studio.modern.basic_settings","基础设置")," · ",H," × ",W]}),e.jsxs("div",{className:"v12-compact-grid",children:[e.jsxs("label",{className:"v12-field",children:[e.jsxs("span",{children:[i("studio.export.fps"),"（≥ 1）"]}),e.jsx(se,{min:Vr,value:Dt,fallback:15,integer:!0,onCommit:Wi})]}),e.jsxs("label",{className:"v12-field",children:[e.jsx("span",{children:i("studio.export.compatibility")}),e.jsxs("select",{value:Cs,onChange:t=>Oc(t.target.value),children:[e.jsx("option",{value:"chat",children:Ir("chat")}),e.jsx("option",{value:"chatLowResolution",children:Ir("chatLowResolution")}),e.jsx("option",{value:"compact",children:Ir("compact")})]})]})]})]}),e.jsxs("div",{className:"gcard",children:[e.jsx("div",{className:"gtitle",children:r("studio.modern.batch_tasks","批量任务")}),Fe.percent>0?e.jsx("div",{className:"progress",children:e.jsx("span",{style:{width:`${Fe.percent}%`}})}):null,e.jsxs("div",{className:"rrow",children:[e.jsx("button",{className:"w-btn",type:"button",disabled:!!Ut,onClick:()=>ut("batch"),children:i("studio.export.batch_gif")}),e.jsx("button",{className:"w-btn",type:"button",disabled:!!Ut,onClick:()=>ut("pngBatch"),children:i("studio.export.batch_png")})]}),e.jsxs("div",{className:"compact-actions",children:[e.jsxs("button",{className:Fe.paused?"w-btn on":"w-btn",type:"button",onClick:()=>ut(Fe.paused?"resume":"pause"),children:[i("studio.export.pause")," / ",i("studio.export.resume")]}),e.jsx("button",{className:"w-btn",type:"button",onClick:()=>ut("retry"),children:i("studio.export.retry")}),e.jsx("button",{className:"w-btn",type:"button",disabled:!Ut,onClick:()=>ut("cancel"),children:i("studio.export.cancel")})]})]}),e.jsxs("details",{className:"fold",children:[e.jsx("summary",{children:i("studio.export.advanced")}),e.jsxs("div",{className:"fb",children:[e.jsxs("div",{className:"v12-compact-grid",children:[e.jsxs("label",{className:"v12-field",children:[e.jsx("span",{children:i("studio.export.png_mode")}),e.jsx("select",{value:mr,onChange:t=>Wc(t.target.value),children:["currentFrame","currentFirst","currentAllFrames","allFirst","allFrames"].map(t=>e.jsx("option",{value:t,children:Ld(t)},t))})]}),e.jsxs("label",{className:"v12-field",children:[e.jsx("span",{children:i("studio.export.crop")}),e.jsxs("select",{value:ft,onChange:t=>nu(t.target.value),children:[e.jsx("option",{value:"animationBounds",children:Io("animationBounds")}),e.jsx("option",{value:"visiblePixels",children:Io("visiblePixels")}),e.jsx("option",{value:"fixed",children:Io("fixed")}),e.jsx("option",{value:"current",children:Io("current")}),e.jsx("option",{value:"faceFollow",children:Io("faceFollow")})]})]}),e.jsxs("label",{className:"v12-field",children:[e.jsx("span",{children:i("studio.export.loop")}),e.jsxs("select",{value:kn,onChange:t=>Bc(t.target.value),children:[e.jsx("option",{value:"once",children:Er("once")}),e.jsx("option",{value:"three",children:Er("three")}),e.jsx("option",{value:"forever",children:Er("forever")})]})]}),xa?e.jsxs("label",{className:"v12-field",children:[e.jsx("span",{children:i("studio.export.gif_timeline")}),e.jsxs("select",{value:Hi,onChange:t=>$c(t.target.value),children:[e.jsx("option",{value:"primary",children:Eo("primary")}),e.jsx("option",{value:"longest",children:Eo("longest")}),e.jsx("option",{value:"sharedLoop",children:Eo("sharedLoop")}),e.jsx("option",{value:"custom",children:Eo("custom")})]})]}):null,xa&&Hi==="custom"?e.jsxs("label",{className:"v12-field",children:[e.jsx("span",{children:i("studio.export.gif_custom_seconds")}),e.jsx(se,{min:xc,max:vc,step:"0.1",value:sa,fallback:Cl,onCommit:t=>Hc(kl(t))})]}):null]}),tu,ou,e.jsxs("div",{className:"v12-toolbar",children:[e.jsx("button",{className:"w-btn",type:"button",onClick:()=>ut("folder"),children:i("studio.export.choose_directory")}),e.jsx("button",{className:"w-btn",type:"button",onClick:()=>ut("copy"),children:i("studio.export.copy_config")}),e.jsx("button",{className:"w-btn",type:"button",onClick:()=>ut("open"),children:i("studio.export.open_directory")})]})]})]})]}),vu=e.jsx(Lf,{mirror:Xn,onMirrorChange:Dl,value:it,onChange:Ka,compare:ls,onCompare:ah,history:ss,readCurrentTime:()=>{var n;const t=(n=L.current)==null?void 0:n.querySelector(".stage-spine:not(.is-hidden) canvas");return t&&Oo?Xa.time(t):N()},renderOutput:Ih,outputDisabled:Ut,models:fe.map((t,n)=>{var a;return{id:t.id,label:`${n+1}. ${((a=me.get(t.resourceId))==null?void 0:a.name)??t.resourceId}`}})}),Zh=ve==="effects"?vu:ve==="motion"?Kh:ve==="look"?Xh:ve==="parts"?qh:ve==="layers"?Vh:ve==="canvas"?Jh:ve==="export"?Qh:null,eg=so?e.jsxs("div",{className:"roster on v12-roster","aria-label":i("studio.library.title"),children:[e.jsx("button",{className:"roster-scrim",type:"button","aria-label":i("studio.settings.close"),onClick:()=>Tn(!1)}),e.jsxs("section",{className:"roster-card paper popA",children:[e.jsxs("header",{className:"roster-head",children:[e.jsxs("div",{className:"roster-title",children:[e.jsx("span",{className:"banner",children:i("studio.library.title")}),e.jsxs("small",{children:[Xi.length," / ",No.length]})]}),e.jsxs("label",{className:"roster-search",children:[e.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[e.jsx("circle",{cx:"11",cy:"11",r:"7"}),e.jsx("path",{d:"m20 20-3.5-3.5"})]}),e.jsx("input",{type:"search",value:fn,placeholder:i("studio.search.placeholder"),autoFocus:!0,onChange:t=>Nn(t.target.value)})]}),e.jsx("button",{className:"roster-x",type:"button",onClick:()=>Tn(!1),"aria-label":i("studio.settings.close"),children:"✕"})]}),e.jsx("div",{className:"roster-tabs roster-tabs-primary",role:"group","aria-label":i("studio.library.filters_label"),children:xm.map(t=>e.jsx("button",{className:ne===t.id?"rtab on":"rtab",type:"button",onClick:()=>{be(t.id),t.id!=="other"&&(Ie("all"),Be("all"))},children:i(`studio.filter.${t.id}`)},t.id))}),ne==="other"?e.jsx("div",{className:"roster-tabs roster-tabs-secondary",role:"group","aria-label":i("studio.library.other_filters_label"),children:xl.map(t=>e.jsx("button",{className:we===t.id?"rtab on":"rtab",type:"button",onClick:()=>{Ie(t.id),t.id!=="miniGame"&&Be("all")},children:Mr(t.id)},t.id))}):null,ne==="furniture"?e.jsx("div",{className:"roster-tabs roster-tabs-secondary",role:"group","aria-label":i("studio.filter.furniture"),children:["all","furniture","poster","authorityPoster"].map(t=>e.jsx("button",{className:st===t?"rtab on":"rtab",type:"button",onClick:()=>lt(t),children:t==="all"?i("studio.other.all"):hl(t,g)},t))}):null,ne==="other"&&we==="miniGame"?e.jsxs("div",{className:"roster-tabs roster-tabs-tertiary",role:"group","aria-label":i("studio.library.mini_game_filters_label"),children:[e.jsx("button",{className:re==="all"?"rtab on":"rtab",type:"button",onClick:()=>Be("all"),children:i("studio.other.all")}),Ps.map(t=>e.jsx("button",{className:re===t.id?"rtab on":"rtab",type:"button",onClick:()=>Be(t.id),children:t.label},t.id))]}):null,e.jsxs("div",{ref:t=>{oa.current=t},className:Ss?"roster-grid is-scrolling":"roster-grid",onScroll:np,children:[Xi.map((t,n)=>{var s;const a=Tm(t,Ca),l=Kn(t,pn[t.id],(s=oi.get(t.groupId))==null?void 0:s.avatarUrl);return e.jsxs("button",{ref:c=>ip(t.id,c),"data-resource-id":t.id,"data-resource-code":t.code,className:["rcard",wm(t),a?"on is-active":""].filter(Boolean).join(" "),type:"button",style:{animationDelay:`${Math.min(n*.012,.48)}s`},onClick:()=>{qn(null),Zc(t.id),Tn(!1)},children:[a?e.jsx("span",{className:"sel-star",children:"✓"}):null,l?e.jsx("img",{className:"rav",src:l,alt:"",loading:"lazy"}):e.jsx("span",{className:"avatar-fallback rav",children:t.name.slice(0,1)}),e.jsx("b",{className:"nm",title:t.name,children:t.name.split(new RegExp("(?<=_)|(?<=[a-z0-9])(?=[A-Z])","u")).map((c,m)=>e.jsxs(d.Fragment,{children:[m>0?e.jsx("wbr",{}):null,c]},m))}),Pl(t)||["dynamicAvatar","passBorder"].includes(t.otherSubcategory)?e.jsxs("small",{className:"resource-code",title:`${t.code}
${t.identity.folderName}`,children:[t.code,t.identity.folderName.includes("/国际服/")?" [GLOBAL]":""]}):null,e.jsx("span",{className:"rbadges",children:e.jsx("span",{className:"rb rb-resource-meta",title:Ar(t),children:Ar(t)})})]},t.id)}),Xi.length===0?e.jsx("div",{className:"roster-empty",children:i("studio.library.empty")}):null]})]})]}):null,tg=fi?e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"scrim2 on",type:"button","aria-label":i("studio.settings.close"),onClick:()=>In(!1)}),e.jsxs("aside",{className:"drawer open","aria-label":i("studio.settings.title"),children:[e.jsxs("div",{className:"drawer-head",children:[i("studio.settings.title"),e.jsx("button",{className:"x",type:"button",onClick:()=>In(!1),"aria-label":i("studio.settings.close"),children:"✕"})]}),e.jsxs("div",{className:"drawer-body",children:[e.jsxs("div",{className:"gcard",children:[e.jsx("div",{className:"gtitle",children:r("studio.modern.appearance","外观")}),e.jsxs("div",{className:"frow",children:[e.jsx("span",{children:i("locale.label")}),e.jsx("div",{className:"preset-row",children:[Pr[0],Pr[2],Pr[1],Pr[3]].map(t=>e.jsx("button",{className:g===t?"preset on":"preset",type:"button",onClick:()=>f(t),children:i(`locale.${t}`)},t))})]}),e.jsxs("div",{className:"frow v12-ui-mode-row",children:[e.jsx("span",{children:i("studio.ui_mode.title")}),e.jsxs("div",{className:"preset-row v12-ui-mode-choices",children:[e.jsxs("button",{className:"preset v12-ui-mode-choice on",type:"button","aria-current":"page",children:[e.jsx("img",{src:tm,alt:""}),e.jsx("span",{children:i("studio.ui_mode.modern")})]}),e.jsxs("button",{className:"preset v12-ui-mode-choice",type:"button",onClick:()=>gi("classic"),children:[e.jsx("img",{src:qd,alt:""}),e.jsx("span",{children:i("studio.ui_mode.classic")})]})]})]})]}),e.jsxs("div",{className:"gcard",children:[e.jsx("div",{className:"gtitle",children:r("studio.modern.project_files","工程文件")}),e.jsx("button",{className:"w-btn",type:"button",onClick:()=>void lp(),children:i("studio.settings.export_project_file")}),e.jsx("button",{className:"w-btn",type:"button",onClick:()=>{var t;return(t=Ve.current)==null?void 0:t.click()},children:i("studio.settings.import_project_file")}),e.jsx("input",{ref:Ve,className:"sr-only",type:"file",accept:".studio.json,application/json",onChange:cp})]}),e.jsxs("div",{className:"gcard",children:[e.jsx("div",{className:"gtitle",children:i("studio.settings.export_defaults")}),e.jsxs("div",{className:"frow",children:[e.jsx("span",{children:i("studio.settings.default_fps")}),e.jsxs("div",{className:"stepper",children:[e.jsx("button",{type:"button",onClick:()=>Wi(Wr(Dt-1)),children:"−"}),e.jsx(se,{min:Vr,value:Dt,fallback:15,integer:!0,onCommit:Wi}),e.jsx("button",{type:"button",onClick:()=>Wi(Wr(Dt+1)),children:"＋"})]})]}),e.jsxs("div",{className:"frow",children:[e.jsx("span",{children:i("studio.settings.resource_directory")}),e.jsx("button",{className:"w-btn",type:"button",onClick:()=>void _(),children:S.rootDirectoryName?i("studio.settings.change_directory"):i("studio.settings.choose_directory")})]}),e.jsxs("div",{className:"frow",children:[e.jsx("span",{children:i("studio.settings.cache_debug")}),e.jsx("button",{className:"w-btn",type:"button",onClick:()=>{M(),y(i("studio.toast.cache_cleared"))},children:i("studio.settings.clear_cache")})]})]})]})]})]}):null,ng=Ul?e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"scrim2 on v12-creator-scrim",type:"button","aria-label":i("studio.settings.close"),onClick:()=>Mn(!1)}),e.jsxs("aside",{className:"drawer open v12-creator-drawer","aria-label":"Creator",style:{width:430},children:[e.jsxs("div",{className:"drawer-head",children:["Creator",e.jsx("button",{className:"x",type:"button",onClick:()=>Mn(!1),"aria-label":i("studio.settings.close"),children:"✕"})]}),e.jsxs("div",{className:"drawer-body",children:[e.jsxs("div",{className:"gcard modern-v12-card",children:[e.jsxs("div",{className:"gtitle modern-v12-card-title",children:[e.jsx("span",{children:r("studio.modern.current_character","当前角色")}),e.jsx("small",{children:Ii??r("studio.modern.not_selected","未选择")})]}),e.jsxs("div",{className:"v12-toolbar modern-v12-actions",children:[e.jsx("button",{className:"w-btn modern-v12-button is-primary",type:"button",disabled:!h||h.source!=="bundled",onClick:()=>void au(),children:i("studio.creator.edit_local_copy")}),e.jsx("button",{className:"w-btn modern-v12-button",type:"button",disabled:!h,onClick:()=>void du(),children:i("studio.creator.annotate_screenshot")})]})]}),e.jsxs("div",{className:"gcard modern-v12-card",children:[e.jsxs("div",{className:"gtitle modern-v12-card-title",children:[e.jsx("span",{children:i("studio.creator.interaction_settings")}),e.jsx("small",{children:ai?r("studio.modern.enabled","已开启"):r("studio.modern.disabled","已关闭")})]}),e.jsxs("label",{className:"v12-switch modern-v12-switch",children:[e.jsx("span",{children:i("studio.creator.interaction_mode")}),e.jsx("input",{type:"checkbox",checked:ai,disabled:!h||!wr,onChange:fd})]}),e.jsxs("label",{className:"v12-switch modern-v12-switch",children:[e.jsx("span",{children:i("studio.creator.interaction_sound")}),e.jsx("input",{type:"checkbox",checked:ar,onChange:t=>Kl(t.target.checked)})]}),e.jsxs("label",{className:"v12-switch modern-v12-switch",children:[e.jsx("span",{children:i("studio.creator.interaction_fx")}),e.jsx("input",{type:"checkbox",checked:rr,onChange:t=>Xl(t.target.checked)})]}),e.jsxs("div",{className:"v12-toolbar modern-v12-actions",children:[e.jsx("button",{className:ia==="ko"?"v12-chip modern-v12-chip is-active":"v12-chip modern-v12-chip",type:"button",onClick:()=>xs("ko"),children:i("studio.creator.interaction_voice_ko")}),e.jsx("button",{className:ia==="ja"?"v12-chip modern-v12-chip is-active":"v12-chip modern-v12-chip",type:"button",onClick:()=>xs("ja"),children:i("studio.creator.interaction_voice_ja")})]})]}),Ke?e.jsxs("div",{className:"gcard modern-v12-card",children:[e.jsxs("div",{className:"gtitle modern-v12-card-title",children:[e.jsx("span",{children:i("studio.creator_overlay.title")}),e.jsx("small",{children:Ke.payload.projectName})]}),e.jsxs("label",{className:"v12-field modern-v12-field",children:[e.jsx("span",{children:i("studio.creator_overlay.opacity")}),e.jsx("input",{type:"range",min:0,max:1,step:.05,value:Ke.opacity,onChange:t=>Bi(n=>n&&{...n,opacity:Number(t.target.value)})})]}),e.jsxs("div",{className:"v12-toolbar modern-v12-actions",style:{marginTop:8},children:[e.jsx("button",{className:"w-btn modern-v12-button",type:"button",onClick:()=>Bi(t=>t&&{...t,visible:!t.visible}),children:Ke.visible?i("studio.creator_overlay.hide"):i("studio.creator_overlay.show")}),e.jsx("button",{className:"w-btn modern-v12-button is-danger",type:"button",onClick:()=>Bi(null),children:i("studio.creator_overlay.clear")})]})]}):null,e.jsxs("div",{className:"gcard modern-v12-card",children:[e.jsxs("div",{className:"gtitle modern-v12-card-title",children:[e.jsx("span",{children:i("studio.creator.local_versions")}),e.jsx("small",{children:il.length})]}),e.jsxs("div",{className:"modern-v12-list",children:[il.map(t=>e.jsxs("div",{className:"modern-v12-list-item",children:[e.jsx("img",{className:"modern-v12-resource-avatar",src:t.previewUrl,alt:""}),e.jsxs("span",{className:"modern-v12-list-copy",children:[e.jsx("strong",{children:t.name||t.customId}),e.jsx("small",{children:t.skinCode||"—"})]}),e.jsx("button",{className:"w-btn modern-v12-button",type:"button",onClick:()=>ru(t),children:i("studio.creator.open_preview")}),e.jsx("button",{className:"w-btn modern-v12-button",type:"button",onClick:()=>void su(t),children:i("studio.creator.continue_edit")}),e.jsx("button",{className:"w-btn modern-v12-button is-danger",type:"button",onClick:()=>void lu(t),children:i("studio.creator.delete_local_version")})]},t.customId)),il.length===0?e.jsx("div",{className:"modern-v12-empty",children:mh||i("studio.local_custom.status.empty")}):null]})]})]})]})]}):null,ig=yi?e.jsxs("section",{className:"timeline paper","aria-label":i("studio.composition.timeline_aria"),children:[e.jsxs("div",{className:"tl-head",children:[e.jsxs("span",{className:"v12-composition-drag",children:[e.jsx("b",{children:i("studio.composition.title")}),e.jsxs("small",{children:[wi.length," · ",pt.length]})]}),e.jsx("span",{className:"v12-timeline-head-actions",children:e.jsx("button",{type:"button",onClick:()=>Dn(!1),"aria-label":i("studio.settings.close"),children:"✕"})})]}),e.jsxs("div",{className:"v12-composition-toolbar",children:[e.jsxs("label",{className:"v12-composition-preview",children:[e.jsx("input",{type:"checkbox",checked:la,disabled:pt.length===0,onChange:t=>vo(t.target.checked)}),e.jsx("span",{children:i("studio.composition.preview")})]}),e.jsxs("button",{className:"w-btn",type:"button",onClick:()=>_d(),children:["＋ ",i("studio.composition.add_current")]}),e.jsxs("button",{className:"w-btn",type:"button",onClick:wp,children:["＋ ",i("studio.composition.add_track")]}),e.jsx("button",{className:"w-btn",type:"button",onClick:yp,children:i("studio.composition.detect_overlay")}),e.jsx("button",{className:"w-btn",type:"button",onClick:()=>jp((le==null?void 0:le.track)??0),children:i("studio.composition.pack_track")})]}),e.jsxs("div",{ref:cd,className:"v12-composition-timeline",style:{"--v12-composition-duration":Ue},children:[wi.map(t=>{const n=wa.filter(l=>l.track===t.index),a=Ys.filter(l=>l.track===t.index);return e.jsxs("div",{className:t.hidden?"v12-composition-track is-hidden-track":"v12-composition-track",children:[e.jsxs("div",{className:"v12-composition-track-label",children:[e.jsxs("span",{className:"v12-composition-track-title",children:[e.jsxs("strong",{children:["T",t.index]}),e.jsx("small",{children:ic(t,r)})]}),e.jsxs("span",{className:"v12-composition-track-actions",children:[e.jsx("button",{type:"button",title:t.hidden?i("studio.composition.show_track"):i("studio.composition.hide_track"),"aria-label":t.hidden?i("studio.composition.show_track"):i("studio.composition.hide_track"),onClick:()=>_p(t.index),children:t.hidden?e.jsx(Lo,{size:13,"aria-hidden":"true"}):e.jsx(Li,{size:13,"aria-hidden":"true"})}),e.jsx("button",{className:"is-danger",type:"button",title:t.index===0?i("studio.composition.main_track_locked"):i("studio.composition.delete_track"),"aria-label":i("studio.composition.delete_track"),disabled:t.index===0,onClick:()=>Sp(t.index),children:e.jsx(no,{size:13,"aria-hidden":"true"})})]})]}),e.jsxs("div",{className:"v12-composition-lane",onDoubleClick:()=>_d(void 0,t.index),children:[e.jsx("span",{className:"v12-composition-playhead",style:{left:`${Math.max(0,Math.min(100,Ue>0?al/Ue*100:0))}%`},"aria-hidden":"true"}),a.map(l=>{const s=l.startTime/Ue*100,c=Math.max(Vt,Math.min(l.duration,Ue-l.startTime))/Ue*100;return e.jsxs("button",{className:ca===l.id?"v12-composition-link is-selected":"v12-composition-link",type:"button",style:{left:`${Math.max(0,Math.min(100,s))}%`,width:`${Math.max(1.2,Math.min(100,c))}%`},title:`${i("studio.composition.transition")} ${l.previousAnimationName} → ${l.nextAnimationName}`,onClick:()=>{un(null),Wt(l.id)},children:[e.jsx("span",{children:l.mode==="overlap"?i("studio.composition.overlap"):i("studio.composition.transition")}),e.jsxs("small",{children:[l.duration.toFixed(2),"s"]}),e.jsx("i",{className:"v12-composition-resize is-end",onPointerDown:m=>Np(m,l)})]},l.id)}),n.map(l=>e.jsxs("button",{className:da===l.id?"v12-composition-clip is-selected":"v12-composition-clip",type:"button",style:{left:`${Math.max(0,Math.min(100,l.startTime/Ue*100))}%`,width:`${Math.max(4,Math.min(100,l.duration/Ue*100))}%`},title:`${l.animationName} · ${l.startTime.toFixed(2)}s · ${l.duration.toFixed(2)}s`,onPointerDown:s=>Sa(s,l,"move"),onClick:()=>{un(l.id),Wt(null)},children:[e.jsx("i",{className:"v12-composition-resize is-start",onPointerDown:s=>Sa(s,l,"resize-start")}),e.jsx("span",{className:"v12-composition-clip-name",children:l.animationName}),e.jsxs("small",{children:[l.startTime.toFixed(2),"s / ",l.duration.toFixed(2),"s"]}),e.jsx("i",{className:"v12-composition-resize is-end",onPointerDown:s=>Sa(s,l,"resize-end")})]},l.id)),n.length===0?e.jsx("span",{className:"v12-composition-empty",children:r("studio.modern.empty_track","空轨道")}):null]})]},t.index)}),e.jsxs("div",{className:"v12-composition-ruler",children:[e.jsx("span",{children:i("studio.composition.time")}),e.jsxs("div",{children:[e.jsx("span",{children:"0s"}),e.jsxs("span",{children:[(Ue/2).toFixed(1),"s"]}),e.jsxs("span",{children:[Ue.toFixed(1),"s"]})]})]})]}),rt?e.jsxs("div",{className:"v12-composition-editor is-link",children:[e.jsxs("label",{children:[e.jsx("span",{children:i("studio.composition.transition")}),e.jsxs("strong",{children:[rt.previousAnimationName," → ",rt.nextAnimationName]})]}),e.jsxs("label",{children:[e.jsx("span",{children:i("studio.composition.start")}),e.jsxs("strong",{children:[rt.startTime.toFixed(2),"s"]})]}),e.jsxs("label",{children:[e.jsx("span",{children:i("studio.composition.duration")}),e.jsx(se,{min:0,max:5,value:rt.duration,fallback:Qd,onCommit:t=>Gs(rt.nextClipId,t)})]}),e.jsx("button",{className:"w-btn is-danger",type:"button",onClick:()=>Gs(rt.nextClipId,0),children:i("studio.composition.cancel_transition")})]}):le?e.jsxs("div",{className:"v12-composition-editor",children:[e.jsxs("label",{className:"is-action",children:[e.jsx("span",{children:i("studio.composition.action")}),e.jsx("select",{value:le.animationName,onChange:t=>Qt(le.id,{animationName:t.target.value,duration:Gr(t.target.value,le.duration)}),children:$e.map(t=>e.jsx("option",{value:t,children:t},t))})]}),e.jsxs("label",{className:"is-track",children:[e.jsx("span",{children:i("studio.composition.track")}),e.jsx("select",{value:le.track,onChange:t=>Qt(le.id,{track:Number(t.target.value)}),children:wi.map(t=>e.jsxs("option",{value:t.index,children:["T",t.index]},t.index))})]}),e.jsxs("label",{children:[e.jsx("span",{children:i("studio.composition.start")}),e.jsx(se,{min:0,max:Ue,value:le.startTime,fallback:0,onCommit:t=>Qt(le.id,{startTime:t})})]}),e.jsxs("label",{children:[e.jsx("span",{children:i("studio.composition.duration")}),e.jsx(se,{min:Vt,max:pi,value:le.duration,fallback:2,onCommit:t=>Qt(le.id,{duration:t})})]}),e.jsxs("label",{children:[e.jsx("span",{children:i("studio.composition.mix")}),e.jsx(se,{min:0,max:5,value:le.mixDuration??0,fallback:0,onCommit:t=>Qt(le.id,{mixDuration:t})})]}),e.jsxs("label",{className:"v12-composition-loop",children:[e.jsx("input",{type:"checkbox",checked:le.loop,onChange:t=>Qt(le.id,{loop:t.target.checked})}),e.jsx("span",{children:i("studio.composition.loop")})]}),e.jsxs("span",{className:"v12-composition-order",children:[e.jsx("button",{type:"button",title:i("studio.composition.move_before"),onClick:()=>Xs(le.id,-1),children:"←"}),e.jsx("button",{type:"button",title:i("studio.composition.move_after"),onClick:()=>Xs(le.id,1),children:"→"})]}),e.jsx("button",{className:"w-btn is-danger",type:"button",onClick:()=>Ks(le.id),children:i("studio.composition.delete")})]}):e.jsx("div",{className:"v12-composition-editor-note",children:r("studio.modern.no_clip_selected","未选择片段")})]}):null,og=t=>{var m;const n=ts(pe,t),a=t==="mini"?rc(pe,h,me):void 0,l=K&&(h==null?void 0:h.id)===K.resourceId?me.get(K.returnResourceId):void 0,c=(l&&l.groupId===(pe==null?void 0:pe.id)&&l.modelType===Ml[t]?l:void 0)??n[0]??a;if(!c){y(i("studio.stage.missing_model_type",{modelType:i(`studio.model.${t}`)}));return}if(t==="mini"&&a&&!n[0]&&pe){const u=K&&(h==null?void 0:h.id)===K.resourceId?K:null;qn({baseCode:(u==null?void 0:u.baseCode)??_c(pe,h),groupId:(u==null?void 0:u.groupId)??pe.id,returnResourceId:(u==null?void 0:u.returnResourceId)??(h==null?void 0:h.id)??((m=pe.resources[0])==null?void 0:m.id)??a.id,label:(u==null?void 0:u.label)??(h!=null&&h.isExternalSkin?h.name:pe.displayName),resourceId:a.id,showAll:(u==null?void 0:u.showAll)??!1})}else qn(null);zl(t),nt(c.id),be(t)},ag=vm.map(t=>{const n=ts(pe,t.id),a=t.id==="mini"?rc(pe,h,me):void 0,l=K&&(h==null?void 0:h.id)===K.resourceId?me.get(K.returnResourceId):void 0,c=!!(l&&l.groupId===(pe==null?void 0:pe.id)&&l.modelType===Ml[t.id]?l:void 0)||n.length>0||!!a;return{id:t.id,label:i(`studio.model.${t.id}`),active:ds===t.id,disabled:!c,title:c?void 0:i("studio.stage.missing_model_type",{modelType:i(`studio.model.${t.id}`)}),onSelect:()=>og(t.id)}}),rg=!Ut&&Fe.failed===0&&Fe.remain===0&&Fe.percent>=100,sg=gh?e.jsxs("aside",{className:rg?"queue-box popB is-complete":"queue-box popB",role:"status",children:[e.jsxs("div",{className:"queue-top",children:[e.jsx("strong",{children:Fe.statusText||i("studio.queue.idle")}),e.jsxs("span",{className:"pct",children:[Fe.percent,"%"]})]}),e.jsx("div",{className:"progress",style:{margin:"7px 0"},children:e.jsx("span",{style:{width:`${Fe.percent}%`}})}),e.jsx("small",{children:Fe.countText||Fe.hintText})]}):null;if(Nt){const t=Mt.indexOf(te),n=t>=0?t:0,a=ve==="motion"?i("studio.choice.motion_title"):ve==="look"?r("studio.modern.look_skin","外观与 skin"):ve==="parts"?i("studio.parts.title"):ve==="layers"?i("studio.layers.title"):ve==="canvas"?i("studio.canvas.title"):ve==="export"?i("studio.export.title"):ve==="effects"?i("studio.effects.title"):"",l=ve==="motion"||ve==="look"?r("studio.modern.current_skeleton","当前骨架"):ve==="parts"?`${i("studio.parts.filter.hidden")} ${rl} · ${i("studio.parts.filter.replaced")} ${Lr} · ${i("studio.parts.filter.all")} ${_t.length}`:ve==="layers"?r("studio.modern.independent_layers","每层独立状态"):ve==="export"?r("studio.modern.export_scope","当前 / 批量 / 高级"):void 0;return e.jsx(PS,{translate:(s,c)=>r(s,c),className:Qp,brandLogoSrc:xu,brandAvatarSrc:bu,selectedName:Ii??i("studio.stage.waiting"),selectedMeta:`${Pd} · ${tl(h)} · ${te}`,selectedAvatarUrl:h?Kn(h,pn[h.id],pe==null?void 0:pe.avatarUrl):pe==null?void 0:pe.avatarUrl,modelTabs:ag,activeTool:ve,activeToolTitle:a,activeToolMeta:l,libraryOpen:so,isPlaying:Va,progress:ps,currentTimeLabel:Nl(al),durationLabel:Nl(Rr),motionLabel:At?i("studio.composition.title"):te,lookLabel:`${tl(h)} · ${Pe?Ed:"—"}`,interactionEnabled:ai,interactionOpen:as,interactionAvailable:!!(h&&wr),interactionSoundEnabled:ar,interactionFxEnabled:rr,interactionVoiceLanguage:ia,compositionOpen:yi,compositionCount:pt.length,canOpenCharacterPages:!!(h!=null&&h.hasCharacterPages),isExporting:Ut,stage:Gh,toolPanel:Zh,roster:eg,timeline:ig,settings:tg,creator:ng,queue:sg,toasts:e.jsx("div",{className:"toast-host","aria-live":"polite","aria-atomic":"true",children:Pc.map(s=>e.jsx("div",{className:"toast",children:s.message},s.id))}),onBrand:()=>o("/"),onToggleLibrary:()=>{Tn(s=>!s),Cn(null),Mn(!1),An(!1)},onToggleTool:kh,onCloseTool:()=>Cn(null),onGallery:()=>Hs("gallery",!0),onRestaurant:()=>Hs("restaurant",!0),onCreator:()=>{Mn(s=>!s),Tn(!1),Cn(null),An(!1)},onImport:Yp,onCurrentExport:()=>ut("current"),onSettings:()=>{In(!0),Tn(!1),Cn(null),Mn(!1),An(!1)},onTogglePlaying:()=>Wl(s=>!s),onPreviousMotion:()=>Mt.length>1&&va(Mt[(n-1+Mt.length)%Mt.length]),onNextMotion:()=>Mt.length>1&&va(Mt[(n+1)%Mt.length]),onProgress:vp,onToggleComposition:()=>{Dn(s=>!s),An(!1)},onToggleInteractionPanel:()=>{An(s=>!s),Tn(!1),Cn(null),Mn(!1)},onCloseInteractionPanel:()=>An(!1),onToggleInteractionMode:fd,onToggleInteractionSound:()=>Kl(s=>!s),onToggleInteractionFx:()=>Xl(s=>!s),onChangeInteractionVoiceLanguage:xs})}return e.jsxs("main",{className:Qp,"data-theme":Ha,"data-color-mode":Wa,children:[e.jsx("a",{className:"skip-link",href:"#main",children:i("studio.skip_to_main")}),e.jsxs("div",{className:"app-shell",children:[e.jsxs("header",{className:"topbar","aria-label":i("studio.topbar.label"),children:[e.jsxs("button",{className:"brand",type:"button","aria-label":i("studio.brand.title"),onPointerDown:E,onClick:()=>o("/"),children:[e.jsxs("span",{className:"brand-mark","aria-hidden":"true",children:[e.jsx("img",{src:bu,alt:"",onError:t=>{var n;t.currentTarget.hidden=!0,(n=t.currentTarget.parentElement)==null||n.classList.add("is-fallback")}}),e.jsx("span",{className:"brand-letter",children:i("studio.brand.mark")})]}),e.jsx("span",{className:"brand-copy",children:e.jsx("img",{className:"brand-title-image",src:xu,alt:""})})]}),e.jsxs("label",{className:"search-box",children:[e.jsx("span",{className:"icon icon-search","aria-hidden":"true"}),e.jsx("span",{className:"sr-only",children:i("studio.search.label")}),e.jsx("input",{type:"search",placeholder:i("studio.search.placeholder"),autoComplete:"off",value:fn,onChange:t=>Nn(t.target.value)})]}),e.jsxs("nav",{className:"route-nav","aria-label":i("studio.nav.label"),children:[e.jsxs("button",{className:"route-button",type:"button",disabled:!(h!=null&&h.hasCharacterPages),title:h!=null&&h.hasCharacterPages?void 0:i("studio.nav.gallery_disabled"),onPointerDown:E,onClick:()=>Hs("gallery",!0),children:[e.jsx("img",{className:"entry-icon",src:Bm,alt:""}),e.jsx("span",{children:i("studio.nav.gallery")})]}),e.jsxs("button",{className:"route-button",type:"button",disabled:!(h!=null&&h.hasCharacterPages),title:h!=null&&h.hasCharacterPages?void 0:i("studio.nav.restaurant_disabled"),onPointerDown:E,onClick:()=>Hs("restaurant",!0),children:[e.jsx("img",{className:"entry-icon",src:$m,alt:""}),e.jsx("span",{children:i("studio.nav.restaurant")})]}),e.jsxs("button",{className:"route-button is-active",type:"button",onPointerDown:E,onClick:jh,children:[e.jsx("img",{className:"entry-icon",src:Hm,alt:""}),e.jsx("span",{children:i("studio.nav.studio")})]})]}),e.jsxs("div",{className:"top-actions",children:[e.jsxs("button",{className:"ghost-button",type:"button",onPointerDown:E,onClick:Yp,children:[e.jsx("span",{className:"icon icon-import","aria-hidden":"true"}),e.jsx("span",{children:r("studio.action.import_temporary_spine","临时导入 Spine")})]}),e.jsxs("button",{className:"studio-ui-mode-toggle",type:"button",onPointerDown:E,onClick:()=>gi("modern"),"aria-label":i("studio.ui_mode.switch_modern_title"),title:i("studio.ui_mode.switch_modern_title"),children:[e.jsx("img",{src:qd,alt:""}),e.jsx("span",{className:"studio-ui-mode-switch-badge","aria-hidden":"true",children:e.jsx(Ru,{size:10})})]}),e.jsx("button",{className:"icon-button",type:"button","aria-label":i("studio.action.settings"),"aria-controls":"settingsDrawer","aria-expanded":fi,onPointerDown:E,onClick:()=>In(!0),children:e.jsx("span",{className:"icon icon-gear","aria-hidden":"true"})})]})]}),e.jsxs("div",{id:"main",className:"studio-layout",children:[e.jsxs("aside",{ref:oa,className:"library-panel glass-card","aria-label":r("studio.library.label","Resource list"),onScroll:np,children:[e.jsxs("div",{className:"section-title",children:[e.jsx("span",{children:i("studio.library.eyebrow")}),e.jsx("h1",{children:i("studio.library.title")})]}),e.jsxs("label",{className:"mobile-library-search",children:[e.jsx("span",{className:"icon icon-search","aria-hidden":"true"}),e.jsx("span",{className:"sr-only",children:i("studio.search.label")}),e.jsx("input",{type:"search",placeholder:i("studio.search.placeholder"),autoComplete:"off",value:fn,onChange:t=>Nn(t.target.value)})]}),e.jsx("div",{className:"filter-bar",role:"group","aria-label":i("studio.library.filters_label"),children:xm.map(t=>e.jsx("button",{className:t.id===ne?"filter-chip is-active":"filter-chip",type:"button",onPointerDown:E,onClick:()=>{be(t.id),t.id!=="other"&&(Ie("all"),Be("all"))},children:i(`studio.filter.${t.id}`)},t.id))}),ne==="other"?e.jsx("div",{className:"filter-bar sub-filter-bar",role:"group","aria-label":i("studio.library.other_filters_label"),children:xl.map(t=>e.jsx("button",{className:t.id===we?"filter-chip is-active":"filter-chip",type:"button",onPointerDown:E,onClick:()=>{Ie(t.id),t.id!=="miniGame"&&Be("all")},children:Mr(t.id)},t.id))}):null,ne==="furniture"?e.jsx("div",{className:"filter-bar sub-filter-bar",role:"group","aria-label":i("studio.filter.furniture"),children:["all","furniture","poster","authorityPoster"].map(t=>e.jsx("button",{className:st===t?"filter-chip is-active":"filter-chip",type:"button",onClick:()=>lt(t),children:t==="all"?i("studio.other.all"):hl(t,g)},t))}):null,ne==="other"&&we==="miniGame"?e.jsx("div",{className:"filter-bar sub-filter-bar mini-game-filter-bar",role:"group","aria-label":i("studio.library.mini_game_filters_label"),children:[{id:"all",label:i("studio.other.all")},...Ps].map(t=>e.jsx("button",{className:t.id===re?"filter-chip is-active":"filter-chip",type:"button",onPointerDown:E,onClick:()=>Be(t.id),children:t.label},t.id))}):null,e.jsxs("div",{className:"library-meta",children:[e.jsx("span",{children:Xi.length}),e.jsx("span",{children:i("studio.library.resource_count")})]}),e.jsxs("div",{className:Ss?"resource-list is-scrolling":"resource-list","aria-label":i("studio.library.cards_label"),children:[Co.map((t,n)=>e.jsxs("button",{ref:a=>ip(t.id,a),"data-resource-id":t.id,"data-resource-code":t.code,type:"button","aria-posinset":n+1,"aria-setsize":Xi.length,className:["resource-card",wm(t),Tm(t,Ca)?"is-active":""].filter(Boolean).join(" "),onPointerDown:E,onClick:()=>{qn(null),Zc(t.id),Bo(null)},children:[Kn(t,pn[t.id])?e.jsx("img",{src:Kn(t,pn[t.id]),alt:r("studio.resource.preview_alt","{name} preview",{name:t.name}),loading:"lazy",width:62,height:62}):e.jsx("span",{className:"resource-card-placeholder","aria-hidden":"true",children:t.name.slice(0,1)}),e.jsxs("span",{children:[e.jsx("strong",{children:t.name}),e.jsx("small",{title:t.identity.folderName,children:Ar(t)})]}),e.jsxs("span",{className:"tag-stack",children:[e.jsx("span",{className:"tag ready",children:Dh(t.status)}),e.jsx("span",{className:"tag",children:Id(t)})]})]},t.id)),Xi.length===0?e.jsx("div",{className:"resource-empty",children:i("studio.library.empty")}):null]})]}),e.jsxs("section",{className:yi?"stage-panel glass-card is-composition-open":"stage-panel glass-card","aria-labelledby":"selectedTitle",children:[e.jsxs("header",{className:"stage-header",children:[e.jsxs("button",{className:gt==="library"?"mobile-resource-trigger is-active":"mobile-resource-trigger",type:"button","aria-expanded":gt==="library","aria-label":r("studio.library.label","Choose character or resource"),onPointerDown:E,onClick:()=>fa("library"),children:[h&&Kn(h,pn[h.id])?e.jsx("img",{src:Kn(h,pn[h.id]),alt:"",width:38,height:38}):e.jsx("span",{className:"mobile-resource-placeholder","aria-hidden":"true",children:(Ii||"?").slice(0,1)}),e.jsxs("span",{className:"mobile-resource-copy",children:[e.jsx("strong",{children:Ii||i("studio.stage.waiting")}),e.jsx("small",{children:h?Ar(h):Pd})]}),e.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{d:"m7 9.5 5 5 5-5"})})]}),e.jsxs("div",{className:"selected-copy",children:[e.jsx("span",{className:"eyebrow",children:i("studio.stage.eyebrow")}),e.jsx("h2",{id:"selectedTitle",children:Ii?`${Ii} / ${Pd}`:i("studio.stage.waiting")}),e.jsx("p",{id:"selectedMeta",title:h==null?void 0:h.identity.folderName,children:zh})]}),h?e.jsx(_S,{canCreateLocalCopy:h.source==="bundled",interactionMode:ai,interactionSettingsOpen:lh,interactionSoundEnabled:ar,interactionFxEnabled:rr,interactionVoiceLanguage:ia,localCustomEntries:il,onEditLocalCopy:()=>void au(),onToggleInteractionMode:fd,onCloseInteractionSettings:()=>or(!1),onToggleInteractionSound:()=>Kl(t=>!t),onToggleInteractionFx:()=>Xl(t=>!t),onChangeInteractionVoiceLanguage:xs,onAnnotateScreenshot:()=>void du(),onPreviewLocalCustom:ru,onEditLocalCustom:t=>void su(t),onDeleteLocalCustom:t=>void lu(t)}):null]}),e.jsx("div",{className:"model-switcher",role:"group","aria-label":i("studio.stage.model_type_label"),children:vm.map(t=>{const n=ts(pe,t.id),a=t.id==="mini"?rc(pe,h,me):void 0,l=K&&(h==null?void 0:h.id)===K.resourceId?me.get(K.returnResourceId):void 0,s=l&&l.groupId===(pe==null?void 0:pe.id)&&l.modelType===Ml[t.id]?l:void 0,c=!!s||n.length>0||!!a;return e.jsx("button",{className:t.id===ds?"model-tab is-active":"model-tab",type:"button",disabled:!c,title:c?void 0:i("studio.stage.missing_model_type",{modelType:i(`studio.model.${t.id}`)}),onPointerDown:E,onClick:()=>{var u;const m=s??n[0]??a;if(!m){y(i("studio.stage.missing_model_type",{modelType:i(`studio.model.${t.id}`)}));return}if(t.id==="mini"&&a&&!n[0]&&pe){const v=K&&(h==null?void 0:h.id)===K.resourceId?K:null,w=(v==null?void 0:v.baseCode)??_c(pe,h);qn({baseCode:w,groupId:(v==null?void 0:v.groupId)??pe.id,returnResourceId:(v==null?void 0:v.returnResourceId)??(h==null?void 0:h.id)??((u=pe.resources[0])==null?void 0:u.id)??a.id,label:(v==null?void 0:v.label)??(h!=null&&h.isExternalSkin?h.name:pe.displayName),resourceId:a.id,showAll:(v==null?void 0:v.showAll)??!1})}else qn(null);zl(t.id),nt(m.id),be(t.id),y(`${i("studio.model.type")}：${i(`studio.model.${t.id}`)}`)},children:i(`studio.model.${t.id}`)},t.id)})}),e.jsxs("div",{className:"stage-view",children:[e.jsxs("div",{ref:L,className:Jp,style:qp,children:[at.map((t,n)=>{if(t.type==="background"){const x=Ce.find(ke=>ke.id===t.id);if(!x)return null;const j=Zi(x),A=Ra(j);if(A==="transparent")return null;const R=Le?qe(j.transform):{x:0,y:0,scale:100,rotation:0},ee=Uu({stageWidth:H,stageHeight:W,sourceWidth:j.naturalWidth??j.width??H,sourceHeight:j.naturalHeight??j.height??W,targetWidth:j.width,targetHeight:j.height,fitMode:j.fitMode,transform:R}),ae=Di.width/Math.max(1,H),X=Di.height/Math.max(1,W),he={zIndex:4+n,width:`${ee.baseWidth*ae}px`,height:`${ee.baseHeight*X}px`,transform:`translate(-50%, -50%) translate(${ee.offsetX*ae}px, ${ee.offsetY*X}px) rotate(${ee.rotation}deg) scale(${io(R)?-ee.scale:ee.scale}, ${oo(R)?-ee.scale:ee.scale})`,opacity:Pi(j.opacity)/100},Je=ke=>{ka(j.id),$s("background",ke,j.id)};return A==="image"&&j.image?e.jsx(bm,{playbackTime:it.playback!=="forward"?N:void 0,onDuration:ke=>Fl.current.set(j.id,ke),layer:j,className:["stage-background-layer","stage-backdrop",`is-fit-${j.fitMode}`,ui(j)?"is-gif-image-layer":"",j.playbackMode==="dynamic"?"is-dynamic-image-layer":""].filter(Boolean).join(" "),style:he,onPointerDown:Je,onNaturalSize:(ke,Ei)=>bp(j.id,ke,Ei)},j.id):e.jsx("div",{className:"stage-background-layer stage-backdrop is-solid is-fit-cover",style:{...he,backgroundColor:j.color},onPointerDown:Je},j.id)}const a=fe.find(x=>x.id===t.id);if(!a)return null;const l=a.id===U,s=l?Xt:rd[a.id],c=me.get(l?(h==null?void 0:h.id)??a.resourceId:a.resourceId),m=Dp(a),u=l?yt:!a.visible,v=ai&&!jt&&l&&!u,w=mn?Bt(Me*a.playbackSpeed):Me,b=mn?an(a.timeOffset):(c==null?void 0:c.otherSubcategory)==="dynamicAvatar"?.35:0,C=l?{visibility:mu,replacements:ce,adjustments:Ft}:{visibility:a.attachmentVisibility,replacements:a.attachmentReplacements,adjustments:a.attachmentAdjustments};return e.jsxs("div",{"data-model-layer-id":a.id,className:["stage-character","stage-spine",u?"is-hidden":"",l?"is-active-model-layer":"",v?"is-interaction-target":""].filter(Boolean).join(" "),style:{zIndex:4+n,"--model-rotation":`${m.rotation}deg`,"--model-pivot-x":`${50+m.x/Math.max(H,1)*100}%`,"--model-pivot-y":`${50+m.y/Math.max(W,1)*100}%`,"--model-stretch-x":oc(m)/100,"--model-stretch-y":ac(m)/100},onPointerDown:x=>{v||Ip(x,a.id)},children:[c&&s?e.jsx(Du,{ref:x=>{x?pa.current.set(a.id,x):pa.current.delete(a.id),St.current===a.id&&(O.current=x)},descriptor:s,requestedAnimationName:l?Ni?te:void 0:a.animationName||void 0,requestedSkinName:l?Pe?ye:void 0:a.skinName||void 0,isPlaying:Va,playbackSpeed:w,timeOffset:b,framingMode:"pose",attachmentVisibility:C.visibility,attachmentReplacements:C.replacements,attachmentAdjustments:C.adjustments,viewSettings:Fp(a),animationComposition:l&&!v?At:null,className:"h-full w-full bg-transparent",emptyStateMessage:null,loadingMessage:null,showErrorOverlay:!1,enableInteraction:v,enableInteractionSound:ar,enableInteractionFx:rr,onRenderFrame:Oo?Xa.capture:void 0,playbackOrder:it.playback,playbackFramePlan:Tr,interactionVoiceLanguage:ia,onAnimationsDiscovered:l?x=>{$l(c.id),Ol(x),qa(j=>j&&x.includes(j)?j:c.motion&&x.includes(c.motion)?c.motion:sl(x)??x[0]??"")}:void 0,onSkinsDiscovered:l?x=>{const j=K&&c.id===K.resourceId?K.baseCode:null;Hl(c.id),Bl(x),lo(A=>em({modelType:c.modelType,resourceCode:c.code,baseFileName:c.entry.baseFileName,skinNames:x,currentSkinName:A,miniBaseCode:j,allowAnyMiniSkin:!!(j&&(K!=null&&K.showAll))})??"")}:void 0,onInteractionSupportDiscovered:l?x=>{Ic(j=>j[c.id]===x?j:{...j,[c.id]:x})}:void 0,onAttachmentPartsDiscovered:l?x=>Tp(a.id,x):void 0,onPlaybackSnapshot:l?xp:void 0,onError:l?x=>{if(zi.status==="ready"){y(x);return}bo({status:"error",source:c.source,message:x})}:void 0},`${a.id}:${c.id}`):null,l&&(zt==null?void 0:zt.layerId)===a.id&&zt.screenBounds?e.jsx("span",{className:"part-selection-overlay",style:{left:`${zt.screenBounds.x}px`,top:`${zt.screenBounds.y}px`,width:`${zt.screenBounds.width}px`,height:`${zt.screenBounds.height}px`},"aria-hidden":"true"}):null,l&&el?e.jsxs("span",{className:"face-follow-frame",style:el,onPointerDown:Ep,title:r("studio.export.face_follow_drag","拖动调整脸部在画面中的位置"),children:[e.jsx("span",{className:"face-follow-label",children:r("studio.export.face_follow_frame","脸部取景")}),e.jsx("button",{type:"button",className:"face-follow-resize-handle","aria-label":r("studio.export.face_follow_resize","拖动调整取景框大小"),onPointerDown:Rp})]}):null]},a.id)}),Ke!=null&&Ke.visible?e.jsx("img",{className:"creator-stage-overlay",src:Ke.payload.imageDataUrl,alt:r("studio.creator_overlay.label","Creator temporary preview overlay"),style:{opacity:Ke.opacity}}):null,jt?e.jsx("div",{className:"part-pick-hint","aria-live":"polite",children:r("studio.parts.pick_hint","点击模型定位贴图")}):null,e.jsx("div",{className:"focus-frame","aria-hidden":"true",style:Vp,children:e.jsxs("span",{className:"frame-label",children:[H," x ",W]})}),Oo?e.jsx(Vu,{stageRef:L,capture:Xa,settings:Xn,effects:it,loopDuration:Xp,onEffectsChange:t=>Ka(mt(t)),compare:ls,showGuide:En==="effects",onPosition:t=>Dl(n=>mi({...n,position:t})),label:i("studio.effects.position")}):null,e.jsxs("div",{className:"stage-badge",children:[e.jsx("span",{className:"status-dot"}),e.jsx("span",{children:iu})]}),e.jsx("div",{className:"stage-hint",children:Ec})]}),Ke?e.jsxs("aside",{className:"creator-overlay-card","aria-label":r("studio.creator_overlay.label","Creator temporary preview overlay"),children:[e.jsxs("div",{children:[e.jsx("strong",{children:r("studio.creator_overlay.title","Creator temporary static overlay")}),e.jsx("span",{title:((Su=Ke.payload.studioResource)==null?void 0:Su.resourceId)??Ke.payload.projectName,children:((ju=Ke.payload.studioResource)==null?void 0:ju.displayName)||((Nu=Ke.payload.studioResource)==null?void 0:Nu.resourceId)||Ke.payload.projectName})]}),e.jsx("p",{children:r("studio.creator_overlay.note","This is a temporary static Creator overlay and does not modify original resources. Use Asset Intake for export or formal cataloging.")}),e.jsx("img",{src:Ke.payload.imageDataUrl,alt:r("studio.creator_overlay.thumbnail_alt","Creator temporary static overlay thumbnail")}),e.jsxs("label",{className:"creator-overlay-opacity",children:[e.jsx("span",{children:r("studio.creator_overlay.opacity","Overlay opacity")}),e.jsx("input",{type:"range",min:0,max:1,step:.05,value:Ke.opacity,onChange:t=>Bi(n=>n&&{...n,opacity:Number.isFinite(Number(t.target.value))?Number(t.target.value):n.opacity})})]}),e.jsxs("div",{className:"creator-overlay-actions",children:[e.jsxs("button",{className:"secondary-button",type:"button",onPointerDown:E,onClick:()=>Bi(t=>t&&{...t,visible:!t.visible}),children:[Ke.visible?e.jsx(Lo,{size:15,"aria-hidden":"true"}):e.jsx(Li,{size:15,"aria-hidden":"true"}),e.jsx("span",{children:Ke.visible?r("studio.creator_overlay.hide","Hide overlay"):r("studio.creator_overlay.show","Show overlay")})]}),e.jsxs("button",{className:"secondary-button",type:"button",onPointerDown:E,onClick:()=>Bi(null),children:[e.jsx(no,{size:15,"aria-hidden":"true"}),e.jsx("span",{children:r("studio.creator_overlay.clear","Clear")})]})]})]}):null]}),e.jsxs("section",{className:"player-bar glass-card","aria-label":r("studio.player.label","Playback controls"),children:[yi?e.jsxs("div",{ref:xr,className:Fn?"composition-drawer is-positioned":"composition-drawer","aria-label":r("studio.composition.timeline_aria","动作组合时间轴"),style:$h,children:[e.jsxs("div",{className:"composition-drawer-head",title:r("studio.composition.window_move","拖动浮窗"),onPointerDown:Nh,children:[e.jsxs("div",{className:"composition-drawer-drag-handle",role:"button",tabIndex:0,children:[e.jsx("strong",{children:r("studio.composition.title","轨道编排")}),e.jsx("span",{children:r("studio.composition.hint","拖动标题栏移动，拖动边缘缩放；开启预览后，当前 GIF 导出使用组合结果。")})]}),e.jsxs("div",{className:"composition-drawer-actions",children:[Fn?e.jsx("button",{className:"secondary-button",type:"button",onPointerDown:E,onClick:()=>xo(null),children:r("studio.composition.reset_position","归位")}):null,e.jsxs("label",{className:"composition-toggle",children:[e.jsx("input",{type:"checkbox",checked:la,disabled:pt.length===0,onChange:t=>vo(t.target.checked)}),e.jsx("span",{children:r("studio.composition.preview","预览组合")})]}),e.jsx("button",{className:"secondary-button",type:"button",onPointerDown:E,onClick:()=>_d(),children:r("studio.composition.add_current","添加当前动作")}),e.jsx("button",{className:"secondary-button",type:"button",onPointerDown:E,onClick:wp,children:r("studio.composition.add_track","增加轨道")}),e.jsx("button",{className:"secondary-button",type:"button",onPointerDown:E,onClick:yp,children:r("studio.composition.detect_overlay","识别附加轨道")}),le?e.jsx("button",{className:"secondary-button",type:"button",onPointerDown:E,onClick:()=>jp(le.track),children:r("studio.composition.pack_track","紧密排列本轨")}):null]})]}),e.jsxs("div",{ref:cd,className:"composition-timeline-editor",style:{"--composition-duration":Ue},children:[wi.map(t=>{const n=t.index,a=wa.filter(s=>s.track===n),l=Ys.filter(s=>s.track===n);return e.jsxs("div",{className:t.hidden?"composition-track-row is-hidden-track":"composition-track-row",children:[e.jsxs("div",{className:"composition-track-label",children:[e.jsxs("span",{className:"composition-track-title",children:[e.jsxs("strong",{children:["T",n]}),e.jsx("span",{children:ic(t,r)})]}),e.jsxs("span",{className:"composition-track-actions",children:[e.jsx("button",{type:"button",title:t.hidden?r("studio.composition.show_track","显示轨道"):r("studio.composition.hide_track","隐藏轨道"),onPointerDown:E,onClick:()=>_p(n),children:t.hidden?e.jsx(Li,{size:14,"aria-hidden":"true"}):e.jsx(Lo,{size:14,"aria-hidden":"true"})}),e.jsx("button",{type:"button",title:n===0?r("studio.composition.main_track_locked","主轨道不能删除"):r("studio.composition.delete_track","删除轨道"),disabled:n===0,onPointerDown:E,onClick:()=>Sp(n),children:e.jsx(no,{size:14,"aria-hidden":"true"})})]})]}),e.jsxs("div",{className:"composition-track-lane",children:[e.jsx("span",{className:"composition-playhead",style:{left:Math.max(0,Math.min(100,Ue>0?al/Ue*100:0)).toString()+"%"},"aria-hidden":"true"}),n===0&&a.length===0&&(At==null?void 0:At.durationMode)==="fallbackAnimation"?e.jsxs("div",{className:"composition-virtual-primary",style:{width:Math.max(4,Math.min(100,Ue>0?Rr/Ue*100:0)).toString()+"%"},children:[e.jsx("span",{children:r("studio.composition.current_action","当前动作")}),e.jsx("strong",{children:te})]}):null,l.map(s=>{const c=s.startTime/Ue*100,m=Math.max(Vt,Math.min(s.duration,Ue-s.startTime))/Ue*100;return e.jsxs("button",{type:"button",className:s.id===ca?"composition-link-marker is-selected":"composition-link-marker",style:{left:Math.max(0,Math.min(100,c)).toString()+"%",width:Math.max(1.2,Math.min(100,m)).toString()+"%"},title:(s.mode==="overlap"?r("studio.composition.overlap_transition","重叠过渡"):r("studio.composition.transition","过渡"))+" "+s.previousAnimationName+" -> "+s.nextAnimationName+" / "+s.duration.toFixed(2)+"s",onClick:()=>{un(null),Wt(s.id)},children:[e.jsx("span",{children:s.mode==="overlap"?r("studio.composition.overlap","重叠"):r("studio.composition.transition","过渡")}),e.jsxs("small",{children:[s.duration.toFixed(2),"s"]}),e.jsx("span",{className:"composition-link-resize",role:"presentation",onPointerDown:u=>Np(u,s)})]},s.id)}),a.map(s=>{const c=s.startTime/Ue*100,m=s.duration/Ue*100;return e.jsxs("button",{type:"button",className:s.id===da?"composition-clip is-selected":"composition-clip",style:{left:Math.max(0,Math.min(100,c)).toString()+"%",width:Math.max(4,Math.min(100,m)).toString()+"%"},title:s.animationName+" / "+s.startTime.toFixed(2)+"s - "+Il(s).toFixed(2)+"s",onClick:()=>{un(s.id),Wt(null)},onPointerDown:u=>Sa(u,s,"move"),children:[e.jsx("span",{className:"composition-clip-resize is-start",role:"presentation",onPointerDown:u=>Sa(u,s,"resize-start")}),e.jsx("span",{children:s.animationName}),e.jsxs("small",{children:[s.startTime.toFixed(2),"s / ",s.duration.toFixed(2),"s"]}),e.jsx("span",{className:"composition-clip-resize is-end",role:"presentation",onPointerDown:u=>Sa(u,s,"resize-end")})]},s.id)})]})]},n)}),e.jsxs("div",{className:"composition-ruler","aria-hidden":"true",children:[e.jsx("span",{className:"composition-ruler-label",children:r("studio.composition.time","时间")}),e.jsxs("div",{className:"composition-ruler-scale",children:[e.jsx("span",{children:"0s"}),e.jsxs("span",{children:[(Ue/2).toFixed(1),"s"]}),e.jsxs("span",{children:[Ue.toFixed(1),"s"]})]})]})]}),rt?e.jsxs("div",{className:"composition-clip-editor composition-link-editor",children:[e.jsxs("label",{className:"composition-link-summary",children:[e.jsx("span",{children:rt.mode==="overlap"?r("studio.composition.overlap_transition","重叠过渡"):r("studio.composition.transition","过渡")}),e.jsxs("strong",{children:[rt.previousAnimationName," -> ",rt.nextAnimationName]})]}),e.jsxs("label",{children:[e.jsx("span",{children:r("studio.composition.start","起点")}),e.jsxs("strong",{children:[rt.startTime.toFixed(2),"s"]})]}),e.jsxs("label",{children:[e.jsx("span",{children:r("studio.composition.duration","时长")}),rt.mode==="overlap"?e.jsxs("strong",{children:[rt.duration.toFixed(2),"s"]}):e.jsx(se,{min:0,max:5,value:rt.duration,fallback:Qd,onCommit:t=>Gs(rt.nextClipId,t)})]}),rt.mode==="overlap"?e.jsx("span",{className:"composition-link-note",children:r("studio.composition.overlap_hint","拖动片段边缘调整重叠范围")}):e.jsx("button",{className:"secondary-button danger",type:"button",onPointerDown:E,onClick:()=>Gs(rt.nextClipId,0),children:r("studio.composition.cancel_transition","取消过渡")})]}):le?e.jsxs("div",{className:"composition-clip-editor",children:[e.jsxs("label",{children:[e.jsx("span",{children:r("studio.composition.action","动作")}),e.jsx("select",{value:le.animationName,onChange:t=>Qt(le.id,{animationName:t.target.value,duration:Gr(t.target.value,le.duration)}),children:$e.map(t=>e.jsx("option",{value:t,children:t},t))})]}),e.jsxs("label",{children:[e.jsx("span",{children:r("studio.composition.track","轨道")}),e.jsx("select",{value:le.track,onChange:t=>Qt(le.id,{track:Number(t.target.value)}),children:wi.map(t=>e.jsxs("option",{value:t.index,children:["T",t.index," ",ic(t,r)]},t.index))})]}),e.jsxs("label",{children:[e.jsx("span",{children:r("studio.composition.start","起点")}),e.jsx(se,{min:0,max:Ue,value:le.startTime,fallback:0,onCommit:t=>Qt(le.id,{startTime:t})})]}),e.jsxs("label",{children:[e.jsx("span",{children:r("studio.composition.duration","时长")}),e.jsx(se,{min:Vt,max:pi,value:le.duration,fallback:2,onCommit:t=>Qt(le.id,{duration:t})})]}),e.jsxs("label",{children:[e.jsx("span",{children:r("studio.composition.mix","混合")}),e.jsx(se,{min:0,max:5,value:le.mixDuration??0,fallback:0,onCommit:t=>Qt(le.id,{mixDuration:t})})]}),e.jsxs("label",{className:"composition-loop-toggle",children:[e.jsx("input",{type:"checkbox",checked:le.loop,onChange:t=>Qt(le.id,{loop:t.target.checked})}),e.jsx("span",{children:r("studio.composition.loop","循环")})]}),e.jsx("button",{className:"secondary-button",type:"button",onPointerDown:E,onClick:()=>Xs(le.id,-1),children:r("studio.composition.move_before","前移")}),e.jsx("button",{className:"secondary-button",type:"button",onPointerDown:E,onClick:()=>Xs(le.id,1),children:r("studio.composition.move_after","后移")}),e.jsx("button",{className:"secondary-button danger composition-delete-clip",type:"button",title:r("studio.composition.delete_clip","删除片段"),"aria-label":r("studio.composition.delete_clip","删除片段"),onPointerDown:E,onClick:()=>Ks(le.id),children:r("studio.composition.delete","删除")})]}):null,["n","e","s","w","ne","sw","nw"].map(t=>e.jsx("span",{className:"composition-drawer-resize-handle is-"+t,role:"presentation",title:r("studio.composition.resize_window","缩放浮窗"),onPointerDown:n=>Cp(n,t)},t)),e.jsx("span",{className:"composition-drawer-resize-handle is-se",role:"presentation",title:r("studio.composition.resize_window","缩放浮窗"),onPointerDown:t=>Cp(t,"se")})]}):null,e.jsxs("div",{className:"timeline",children:[e.jsx("span",{children:Nl(al)}),e.jsxs("label",{children:[e.jsx("span",{className:"sr-only",children:r("studio.player.progress","Playback progress")}),e.jsx("input",{id:"timeline",type:"range",min:"0",max:"100",value:ps,style:{"--timeline-progress":`${ps}%`},onChange:t=>vp(Number(t.target.value))})]}),e.jsx("span",{children:Nl(Rr)})]}),e.jsxs("div",{className:"transport",children:[e.jsxs("button",{ref:T,className:je==="motion"?"select-button motion-pill is-active":"select-button motion-pill",type:"button",onPointerDown:E,onClick:()=>gd("motion"),children:[e.jsx("span",{className:"button-kicker",children:i("studio.choice.motion")}),e.jsx("strong",{children:At?r("studio.composition.active","组合轨道"):te})]}),e.jsxs("button",{className:yi?"icon-button transport-button composition-trigger-button is-active":"icon-button transport-button composition-trigger-button",type:"button","aria-label":r("studio.composition.trigger","轨道编排"),onPointerDown:E,onClick:()=>Dn(t=>!t),children:[e.jsx("span",{"aria-hidden":"true",children:r("studio.composition.trigger_short","轨")}),e.jsx("small",{children:pt.length})]}),e.jsx("button",{className:"icon-button transport-button",type:"button","aria-label":r("studio.player.previous","Previous"),disabled:Mt.length<=1,onPointerDown:E,onClick:()=>{const t=Mt.indexOf(te),n=t>=0?t:0;va(Mt[(n-1+Mt.length)%Mt.length])},children:e.jsx("svg",{className:"player-icon",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{d:"M6.5 5.25h2.75v13.5H6.5zM18 6.4v11.2L10 12z"})})}),e.jsxs("button",{className:Va?"play-button":"play-button is-paused",type:"button","aria-label":Va?r("studio.player.pause","Pause"):r("studio.player.play","Play"),onPointerDown:E,onClick:()=>Wl(t=>!t),children:[e.jsx("svg",{className:"player-icon pause-shape",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{d:"M7 5.25h3.8v13.5H7zM13.2 5.25H17v13.5h-3.8z"})}),e.jsx("svg",{className:"player-icon play-shape",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{d:"M8 5.75v12.5L18.2 12z"})})]}),e.jsx("button",{className:"icon-button transport-button",type:"button","aria-label":r("studio.player.next","Next"),disabled:Mt.length<=1,onPointerDown:E,onClick:()=>{const t=Mt.indexOf(te),n=t>=0?t:0;va(Mt[(n+1)%Mt.length])},children:e.jsx("svg",{className:"player-icon",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{d:"M14.75 5.25h2.75v13.5h-2.75zM6 6.4 14 12 6 17.6z"})})}),e.jsxs("button",{ref:D,className:je==="externalSkin"?"select-button skin-pill is-active":"select-button skin-pill",type:"button",onPointerDown:E,onClick:()=>gd("externalSkin"),children:[e.jsx("span",{className:"button-kicker",children:i("studio.choice.external_skin")}),e.jsx("strong",{children:tl(h)})]}),e.jsxs("button",{ref:Y,className:je==="internalSkin"?"select-button skin-pill is-active":"select-button skin-pill",type:"button",onPointerDown:E,onClick:()=>gd("internalSkin"),children:[e.jsx("span",{className:"button-kicker",children:i("studio.choice.internal_skin")}),e.jsx("strong",{children:Pe?Ed:r("studio.choice.none","None")})]}),e.jsxs("button",{ref:q,className:je==="externalSkin"||je==="internalSkin"?"select-button mobile-skin-pill is-active":"select-button mobile-skin-pill",type:"button","aria-expanded":je==="externalSkin"||je==="internalSkin",onPointerDown:E,onClick:yh,children:[e.jsx("span",{className:"button-kicker",children:i("studio.choice.external_skin")}),e.jsxs("strong",{children:[tl(h)," · ",Pe?Ed:r("studio.choice.none","None")]})]})]})]})]}),e.jsxs("aside",{ref:ql,className:"control-panel glass-card","aria-label":r("studio.panel.label","Properties and export"),children:[e.jsx("div",{className:"panel-tabs",role:"group","aria-label":r("studio.panel.tabs_label","Tool panels"),children:["canvas","layers","effects","export"].map(t=>e.jsx("button",{className:En===t?"panel-tab is-active":"panel-tab",type:"button",onPointerDown:E,onClick:()=>ii(t),children:nl(t)},t))}),e.jsxs("div",{className:"studio-save-strip",children:[e.jsxs("div",{className:"studio-project-actions",children:[e.jsx("button",{className:"secondary-button",type:"button",onPointerDown:E,onClick:()=>void lp(),children:r("studio.settings.export_project_file","导出工程文件")}),e.jsx("button",{className:"secondary-button",type:"button",onPointerDown:E,onClick:()=>{var t;return(t=Ve.current)==null?void 0:t.click()},children:r("studio.settings.import_project_file","导入工程文件")})]}),e.jsx("input",{ref:Ve,className:"sr-only",type:"file",accept:".studio.json,application/json",onChange:cp}),e.jsx("small",{children:r("studio.settings.project_file_hint_short","工程文件第一版不包含本地图片/GIF二进制；若浏览器本地素材丢失，导入后需要重新选择缺失素材。")})]}),e.jsxs("section",{className:En==="canvas"?"panel-page is-active":"panel-page","aria-labelledby":"canvasTitle",children:[e.jsxs("div",{className:"section-title compact",children:[e.jsx("span",{children:i("studio.canvas.eyebrow")}),e.jsx("h2",{id:"canvasTitle",children:i("studio.canvas.title")})]}),e.jsxs("label",{className:"switch-row",children:[e.jsx("span",{children:i("studio.canvas.show_frame")}),e.jsx("input",{type:"checkbox",checked:us,onChange:t=>Tc(t.target.checked)})]}),e.jsxs("label",{className:"field",children:[e.jsx("span",{children:r("studio.canvas.image_layer_upload","上传图片层素材")}),e.jsx("input",{type:"file",accept:"image/*",onChange:t=>{var n;return void Gp((n=t.target.files)==null?void 0:n[0])}})]}),e.jsxs("div",{className:"builtin-background-picker full-field",children:[e.jsx("button",{className:bs?"builtin-background-picker-trigger is-active":"builtin-background-picker-trigger",type:"button",onPointerDown:E,onClick:()=>Ac(t=>!t),children:e.jsx("span",{children:r("studio.modern.builtin_background_count","内置背景 · {count} 张",{count:Vd})})}),e.jsxs("div",{className:"builtin-background-picker-body",hidden:!bs,children:[e.jsxs("label",{className:"builtin-background-search",children:[e.jsx("span",{className:"icon icon-search","aria-hidden":"true"}),e.jsx("input",{type:"search",value:gs,placeholder:i("studio.modern.search_background"),onChange:t=>Mc(t.target.value)})]}),e.jsxs("div",{className:"builtin-background-groups",role:"group","aria-label":i("studio.library.filters_label"),children:[e.jsx("button",{className:go==="all"?"is-active":"",type:"button",onClick:()=>fs("all"),children:i("studio.filter.all")}),nm.map(t=>e.jsx("button",{className:go===t?"is-active":"",type:"button",onClick:()=>fs(t),children:t},t))]}),e.jsx("div",{className:"builtin-background-grid","aria-label":r("studio.modern.builtin_background_count","内置背景 · {count} 张",{count:Vd}),children:Vc.map(t=>{var a;const n=((a=gl(vt))==null?void 0:a.id)===t.id;return e.jsxs("button",{className:n?"is-active":"",type:"button",title:t.fileName,onClick:()=>void Kp(t),children:[e.jsx("img",{src:fc(t),alt:"",loading:"lazy"}),e.jsx("span",{children:t.label})]},t.id)})})]})]}),e.jsxs("label",{className:"field split",children:[e.jsx("span",{children:i("studio.canvas.background_color")}),e.jsx("input",{type:"color",value:ct,onChange:t=>{Yo(t.target.value),sn("solid")}})]}),e.jsxs("div",{className:"field full-field",children:[e.jsx("span",{children:r("studio.canvas.image_layer_mode","图片层模式")}),e.jsxs("details",{className:"select-menu",children:[e.jsx("summary",{children:e.jsx("span",{children:Rd(ot)})}),e.jsx("div",{className:"select-options",children:["transparent","solid","upload"].map(t=>e.jsx("button",{type:"button",onPointerDown:E,onClick:()=>{sn(t)},children:Rd(t)},t))})]})]}),e.jsxs("label",{className:"field",children:[e.jsx("span",{children:i("studio.canvas.playback_speed")}),e.jsx(se,{min:.1,max:10,step:"0.1",value:Me,fallback:1,onCommit:po,"aria-label":i("studio.canvas.playback_speed")})]}),e.jsxs("div",{className:"field-grid",children:[e.jsxs("label",{className:"field",children:[e.jsx("span",{children:i("studio.canvas.width")}),e.jsx(se,{min:Xr,max:qr,value:H,fallback:Qe.width,integer:!0,onCommit:t=>bi(Oe(t))})]}),e.jsxs("label",{className:"field",children:[e.jsx("span",{children:i("studio.canvas.height")}),e.jsx(se,{min:Xr,max:qr,value:W,fallback:Qe.height,integer:!0,onCommit:t=>xi(Oe(t,Qe.height))})]})]}),e.jsx("div",{className:"resolution-presets",role:"group","aria-label":r("studio.canvas.presets_label","Resolution presets"),children:[[i("studio.canvas.preset.500"),500,500],[i("studio.canvas.preset.800"),800,800],[i("studio.canvas.preset.portrait"),540,960],[i("studio.canvas.preset.hd"),1024,1024]].map(([t,n,a])=>e.jsx("button",{className:"preset-button",type:"button",onPointerDown:E,onClick:()=>_r(Number(n),Number(a)),children:t},t))}),e.jsx("div",{className:"resolution-note",children:i("studio.canvas.resolution_note",{width:H,height:W})}),e.jsxs("div",{className:"panel-action-grid",children:[e.jsx("button",{className:"secondary-button",type:"button",onPointerDown:E,onClick:()=>_r(H,W),children:i("studio.canvas.apply_size")}),e.jsx("button",{className:"secondary-button",type:"button",onPointerDown:E,onClick:()=>{jo(100),Ot(0),Kt(0),er(!1),y(i("studio.toast.stage_fit"))},children:i("studio.canvas.fit_stage")}),e.jsx("button",{className:fo?"secondary-button is-active":"secondary-button",type:"button",onPointerDown:E,onClick:()=>{er(t=>!t),y(i(fo?"studio.toast.frame_unlocked":"studio.toast.frame_locked"))},children:i("studio.canvas.lock_to_frame")}),e.jsx("button",{className:"secondary-button",type:"button",onPointerDown:E,onClick:()=>{Ot(0),Kt(0),y(i("studio.toast.model_centered"))},children:i("studio.canvas.center_model")}),e.jsx("button",{className:"secondary-button",type:"button",onPointerDown:E,onClick:op,children:i("studio.canvas.reset_stage")})]})]}),e.jsxs("section",{className:En==="layers"?"panel-page is-active":"panel-page","aria-labelledby":"layersTitle",children:[e.jsxs("div",{className:"section-title compact",children:[e.jsx("span",{children:i("studio.layers.eyebrow")}),e.jsx("h2",{id:"layersTitle",children:i("studio.layers.title")})]}),e.jsxs("label",{className:"switch-row",children:[e.jsx("span",{children:i("studio.layers.enable_editing")}),e.jsx("input",{type:"checkbox",checked:Le,onChange:t=>{Ho(t.target.checked),y(t.target.checked?i("studio.toast.layer_edit_on"):i("studio.toast.layer_edit_off"))}})]}),e.jsx("div",{className:"layer-list",children:at.slice().reverse().map(t=>{const n=at.findIndex(b=>b.type===t.type&&b.id===t.id),a=n>=0&&n<at.length-1,l=n>0;if(t.type==="background"){const b=Ce.find(R=>R.id===t.id);if(!b)return null;const C=_e==="background"&&b.id===De,x=Zi(b),j=x.visible&&Ra(x)!=="transparent",A=ui(x)?x.playbackMode==="dynamic"?r("studio.layers.image_layer_kind.gif_dynamic","GIF 动态"):r("studio.layers.image_layer_kind.gif_static","GIF 静态"):x.mode==="upload"?r("studio.layers.image_layer_kind.static_image","静态图片"):x.mode==="solid"?r("studio.layers.image_layer_kind.solid","纯色图片"):r("studio.layers.image_layer_kind.empty","空图片层");return e.jsxs("div",{className:C?"layer-item is-active studio-model-layer-item":"layer-item studio-model-layer-item",role:"button",tabIndex:0,onClick:()=>ka(b.id),onKeyDown:R=>{(R.key==="Enter"||R.key===" ")&&(R.preventDefault(),ka(b.id))},children:[e.jsx("span",{className:"drag-handle","aria-hidden":"true"}),x.image?e.jsx("img",{src:x.image,alt:""}):e.jsx("span",{className:"layer-thumb-placeholder","aria-hidden":"true"}),e.jsxs("span",{children:[hm(x.name)?r("studio.layers.image_layer_numbered","{label} {index}",{label:i("studio.layers.image_layer_name"),index:n+1}):x.name,e.jsx("small",{children:r("studio.layers.image_layer_meta","图片层 {index} · {kind}",{index:n+1,kind:A})})]}),e.jsx("span",{className:"layer-state",children:x.locked?i("studio.layers.state.locked"):i(j?Le?"studio.layers.state.editable":"studio.layers.state.default":"studio.layers.state.hidden")}),e.jsxs("span",{className:"model-layer-actions",children:[e.jsx("button",{className:"icon-tool-button",type:"button",title:r("studio.layers.move_up","上移"),disabled:!a,onPointerDown:E,onClick:R=>{R.preventDefault(),R.stopPropagation(),Ji(t,"up")},children:"↑"}),e.jsx("button",{className:"icon-tool-button",type:"button",title:r("studio.layers.move_down","下移"),disabled:!l,onPointerDown:E,onClick:R=>{R.preventDefault(),R.stopPropagation(),Ji(t,"down")},children:"↓"}),e.jsx("button",{className:"icon-tool-button",type:"button",title:j?r("studio.layers.hide_image_layer","隐藏图片层"):r("studio.layers.show_image_layer","显示图片层"),onPointerDown:E,onClick:R=>{R.preventDefault(),R.stopPropagation(),yd(b.id)},children:j?e.jsx(Lo,{size:14,"aria-hidden":"true"}):e.jsx(Li,{size:14,"aria-hidden":"true"})}),e.jsx("button",{className:"icon-tool-button",type:"button",title:x.locked?r("studio.layers.unlock_image_layer","解锁图片层"):r("studio.layers.lock_image_layer","锁定图片层"),onPointerDown:E,onClick:R=>{R.preventDefault(),R.stopPropagation(),wd(b.id)},children:x.locked?e.jsx(ml,{size:14,"aria-hidden":"true"}):e.jsx(ul,{size:14,"aria-hidden":"true"})}),e.jsx("button",{className:"icon-tool-button",type:"button",title:r("studio.layers.remove_image_layer","删除图片层"),onPointerDown:E,onClick:R=>{R.preventDefault(),R.stopPropagation(),fp(b.id)},children:e.jsx(no,{size:14,"aria-hidden":"true"})})]})]},Do(t))}const s=fe.find(b=>b.id===t.id);if(!s)return null;const c=fe.findIndex(b=>b.id===s.id),m=_e==="model"&&s.id===U,u=me.get(s.id===U?(h==null?void 0:h.id)??s.resourceId:s.resourceId),v=s.id===U?!yt:s.visible,w=s.id===U?wt:s.locked;return e.jsxs("div",{className:m?"layer-item is-active studio-model-layer-item":"layer-item studio-model-layer-item",role:"button",tabIndex:0,onClick:()=>Wn(s.id),onKeyDown:b=>{(b.key==="Enter"||b.key===" ")&&(b.preventDefault(),Wn(s.id))},children:[e.jsx("span",{className:"drag-handle","aria-hidden":"true"}),u&&Kn(u,pn[u.id])?e.jsx("img",{src:Kn(u,pn[u.id]),alt:""}):e.jsx("span",{className:"layer-thumb-placeholder","aria-hidden":"true"}),e.jsxs("span",{children:[(u==null?void 0:u.code)??i("studio.layers.model"),e.jsx("small",{children:r("studio.layers.model_layer_index","模型层 {index}",{index:c+1})})]}),e.jsx("span",{className:"layer-state",children:i(w?"studio.layers.state.locked":v?Le?"studio.layers.state.editable":"studio.layers.state.default":"studio.layers.state.hidden")}),e.jsxs("span",{className:"model-layer-actions",children:[e.jsx("button",{className:"icon-tool-button",type:"button",title:r("studio.layers.move_up","上移"),disabled:!a,onPointerDown:E,onClick:b=>{b.preventDefault(),b.stopPropagation(),Ji(t,"up")},children:"↑"}),e.jsx("button",{className:"icon-tool-button",type:"button",title:r("studio.layers.move_down","下移"),disabled:!l,onPointerDown:E,onClick:b=>{b.preventDefault(),b.stopPropagation(),Ji(t,"down")},children:"↓"}),e.jsx("button",{className:"icon-tool-button",type:"button",title:v?r("studio.layers.hide_model_layer","隐藏模型层"):r("studio.layers.show_model_layer","显示模型层"),onPointerDown:E,onClick:b=>{b.preventDefault(),b.stopPropagation(),mp(s.id)},children:v?e.jsx(Lo,{size:14,"aria-hidden":"true"}):e.jsx(Li,{size:14,"aria-hidden":"true"})}),e.jsx("button",{className:"icon-tool-button",type:"button",title:w?r("studio.layers.unlock_model_layer","解锁模型层"):r("studio.layers.lock_model_layer","锁定模型层"),onPointerDown:E,onClick:b=>{b.preventDefault(),b.stopPropagation(),hp(s.id)},children:w?e.jsx(ml,{size:14,"aria-hidden":"true"}):e.jsx(ul,{size:14,"aria-hidden":"true"})}),e.jsx("button",{className:"icon-tool-button",type:"button",title:r("studio.layers.remove_model_layer","删除模型层"),disabled:s.id===li||fe.length<=1,onPointerDown:E,onClick:b=>{b.preventDefault(),b.stopPropagation(),up(s.id)},children:e.jsx(no,{size:14,"aria-hidden":"true"})})]})]},Do(t))})}),e.jsxs("button",{className:"secondary-button add-model-layer-button",type:"button",onPointerDown:E,onClick:gp,disabled:Ce.length>=Fr,children:[r("studio.layers.add_image_layer","添加图片层")," · ",Ce.length," / ",Fr]}),e.jsxs("button",{className:"secondary-button add-model-layer-button",type:"button",onPointerDown:E,onClick:pp,disabled:fe.length>=Dr,children:[r("studio.layers.add_model_layer","添加模型层")," · ",fe.length," / ",Dr]}),e.jsx("div",{className:"slider-stack layer-control-stack","aria-label":i("studio.layers.controls_label"),children:uu.map(t=>{const n="inputMax"in t?t.inputMax:t.max;return e.jsxs("label",{children:[e.jsx("span",{children:t.label}),e.jsx("input",{type:"range",min:t.min,max:t.max,value:gn(t.value,t.min,t.max),disabled:!Le,onChange:a=>kd(t.name,Number(a.target.value))}),e.jsx(se,{min:t.min,max:n,value:t.value,disabled:!Le,integer:!0,onCommit:a=>kd(t.name,a)})]},t.name)})}),mn&&_e==="model"&&ba?e.jsxs("div",{className:"field-grid layer-timing-grid",children:[e.jsxs("label",{className:"field",children:[e.jsx("span",{children:r("studio.layers.layer_speed","层倍速")}),e.jsx(se,{min:Jr,max:Qr,step:"0.1",value:ba.playbackSpeed,fallback:1,onCommit:t=>Ws({playbackSpeed:t})})]}),e.jsxs("label",{className:"field",children:[e.jsx("span",{children:r("studio.layers.layer_time_offset","起始偏移秒")}),e.jsx(se,{min:Zr,max:es,step:"0.1",value:ba.timeOffset,fallback:0,onCommit:t=>Ws({timeOffset:t})})]})]}):null,_e==="background"&&Us?e.jsxs("div",{className:"field-grid layer-timing-grid",children:[ot==="upload"?e.jsxs(e.Fragment,{children:[e.jsxs("label",{className:"field",children:[e.jsx("span",{children:r("studio.layers.image_fit","图片适配")}),e.jsxs("select",{value:kt,onChange:t=>Vi(t.target.value),children:[e.jsx("option",{value:"contain",children:r("studio.layers.image_fit.contain","适配舞台")}),e.jsx("option",{value:"cover",children:r("studio.layers.image_fit.cover","覆盖舞台")}),e.jsx("option",{value:"original",children:r("studio.layers.image_fit.original","原始尺寸")})]})]}),e.jsxs("label",{className:"field",children:[e.jsx("span",{children:r("studio.layers.image_width","图片宽度")}),e.jsx(se,{min:1,max:8192,integer:!0,value:$t??H,fallback:H,onCommit:t=>ya({width:t})})]}),e.jsxs("label",{className:"field",children:[e.jsx("span",{children:r("studio.layers.image_height","图片高度")}),e.jsx(se,{min:1,max:8192,integer:!0,value:Ht??W,fallback:W,onCommit:t=>ya({height:t})})]}),e.jsxs("label",{className:"switch-row full-field",children:[e.jsx("span",{children:r("studio.layers.image_lock_aspect","保持图片比例")}),e.jsx("input",{type:"checkbox",checked:cn,onChange:t=>ya({lockAspectRatio:t.target.checked})})]}),e.jsx("small",{className:"full-field layer-help-text",children:r("studio.layers.image_size_note","宽度 / 高度是图片基础显示尺寸；缩放是额外倍率。关闭保持比例后可自由拉伸。")}),e.jsxs("div",{className:"panel-action-grid full-field compact-actions",children:[e.jsx("button",{className:"secondary-button",type:"button",onPointerDown:E,onClick:()=>Vi("contain"),children:r("studio.layers.image_fit.contain","适配舞台")}),e.jsx("button",{className:"secondary-button",type:"button",onPointerDown:E,onClick:()=>Vi("cover"),children:r("studio.layers.image_fit.cover","覆盖舞台")}),e.jsx("button",{className:"secondary-button",type:"button",onPointerDown:E,onClick:()=>Vi("original"),children:r("studio.layers.image_fit.original","原始尺寸")})]}),e.jsx("button",{className:"secondary-button full-field",type:"button",onPointerDown:E,onClick:()=>{Gi(0),Ki(0),y(r("studio.toast.image_layer_centered","图片层已居中。"))},children:r("studio.layers.image_center","图片层居中")})]}):null,ui(Zi(Us))?e.jsxs(e.Fragment,{children:[e.jsxs("label",{className:"field",children:[e.jsx("span",{children:r("studio.layers.image_gif_mode","GIF 模式")}),e.jsxs("select",{value:vn,onChange:t=>Yn({playbackMode:t.target.value}),children:[e.jsx("option",{value:"static",children:r("studio.layers.image_gif_mode.static","静态帧")}),e.jsx("option",{value:"dynamic",children:r("studio.layers.image_gif_mode.dynamic","动态播放")})]})]}),vn==="dynamic"?e.jsxs(e.Fragment,{children:[e.jsxs("label",{className:"field",children:[e.jsx("span",{children:r("studio.layers.image_layer_speed","图片层速度")}),e.jsx(se,{min:Jr,max:Qr,step:"0.1",value:Ln,fallback:1,onCommit:t=>Yn({playbackSpeed:t})})]}),e.jsxs("label",{className:"field",children:[e.jsx("span",{children:r("studio.layers.image_layer_time_offset","起始偏移秒")}),e.jsx(se,{min:Zr,max:es,step:"0.1",value:Pn,fallback:0,onCommit:t=>Yn({timeOffset:t})})]}),e.jsxs("label",{className:"switch-row full-field",children:[e.jsx("span",{children:r("studio.layers.image_layer_follow_timeline","参与 GIF 动态合成")}),e.jsx("input",{type:"checkbox",checked:Qn,onChange:t=>Yn({followTimeline:t.target.checked})})]}),e.jsx("small",{className:"full-field",children:r("studio.layers.image_gif_dynamic_note","动态 GIF 图片层会按本层速度和偏移播放；勾选后会参与 GIF 逐帧合成。")})]}):e.jsx("small",{className:"full-field",children:r("studio.layers.image_gif_static_note","静态帧模式使用 GIF 第 1 帧参与预览、PNG 和 GIF 导出。")})]}):null]}):null,_e==="model"?e.jsxs("div",{className:"model-target-box full-field",children:[e.jsxs("div",{className:"field-grid layer-timing-grid",children:[e.jsxs("label",{className:"field",children:[e.jsx("span",{children:r("studio.layers.model_target_width","目标宽度")}),e.jsx(se,{min:ci,max:eo,value:Os.width,fallback:H,integer:!0,onCommit:t=>Ci({width:t})})]}),e.jsxs("label",{className:"field",children:[e.jsx("span",{children:r("studio.layers.model_target_height","目标高度")}),e.jsx(se,{min:ci,max:eo,value:Os.height,fallback:W,integer:!0,onCommit:t=>Ci({height:t})})]})]}),e.jsxs("label",{className:"switch-row",children:[e.jsx("span",{children:r("studio.layers.model_target_lock_aspect","保持比例")}),e.jsx("input",{type:"checkbox",checked:Lt,onChange:t=>Ci({lockAspectRatio:t.target.checked})})]}),e.jsxs("div",{className:"panel-action-grid compact-actions",children:[e.jsx("button",{className:"secondary-button",type:"button",onPointerDown:E,onClick:()=>Bs("contain"),children:r("studio.layers.model_fit_stage","适配舞台")}),e.jsx("button",{className:"secondary-button",type:"button",onPointerDown:E,onClick:()=>Bs("cover"),children:r("studio.layers.model_cover_stage","覆盖舞台")}),e.jsx("button",{className:"secondary-button",type:"button",onPointerDown:E,onClick:()=>{Ot(0),Kt(0),y(i("studio.toast.model_centered"))},children:r("studio.layers.model_center_stage","居中")})]}),e.jsx("small",{className:"layer-help-text",children:r("studio.layers.model_target_note","目标宽高是对整个模型层最终画面做整体显示缩放；不会修改骨架、mesh、动画或 skin。最终倍率 = 统一缩放 × 横向/纵向目标缩放。")})]}):null,e.jsxs("div",{className:"panel-action-grid",children:[e.jsx("button",{className:"secondary-button",type:"button",onPointerDown:E,onClick:()=>{if(_e==="background"){yd(De);return}tr(t=>!t),y(i(yt?"studio.toast.model_shown":"studio.toast.model_hidden"))},children:i("studio.layers.toggle_visibility")}),e.jsx("button",{className:"secondary-button",type:"button",onPointerDown:E,onClick:()=>{if(_e==="background"){wd(De);return}nr(t=>!t),y(i(wt?"studio.toast.model_unlocked":"studio.toast.model_locked_state"))},children:_e==="background"?r("studio.layers.lock_image_layer_short","锁定图片层"):i("studio.layers.lock_model")}),e.jsx("button",{className:"secondary-button",type:"button",onPointerDown:E,onClick:()=>{ks(t=>!t),y(i(vs?"studio.toast.solo_off":"studio.toast.solo_on"))},children:i("studio.layers.solo_preview")}),e.jsx("button",{className:io(Zt)?"secondary-button is-active":"secondary-button",type:"button",onPointerDown:E,onClick:cu,children:io(Zt)?r("studio.layers.unflip_horizontal","取消翻转"):r("studio.layers.flip_horizontal","水平翻转")}),e.jsx("button",{className:oo(Zt)?"secondary-button is-active":"secondary-button",type:"button",onPointerDown:E,onClick:pu,children:oo(Zt)?r("studio.layers.unflip_vertical","取消上下"):r("studio.layers.flip_vertical","上下翻转")}),e.jsx("button",{className:"secondary-button",type:"button",onPointerDown:E,onClick:()=>{_e==="model"?(Ot(0),Kt(0),jo(100),vr(0),ze("model",{flipX:!1,flipY:!1})):(Gi(0),Ki(0),ji(100),kr(0),qo(100),ze("background",{flipX:!1,flipY:!1})),y(i("studio.toast.layer_reset"))},children:i("studio.layers.reset_layer")})]}),e.jsx("div",{className:"align-grid","aria-label":i("studio.layers.align_label"),children:[[i("studio.layers.align.left"),()=>Ot(-86)],[i("studio.layers.align.center"),()=>Ot(0)],[i("studio.layers.align.right"),()=>Ot(86)],[i("studio.layers.align.top"),()=>Kt(-58)],[i("studio.layers.align.middle"),()=>{Ot(0),Kt(0)}],[i("studio.layers.align.bottom"),()=>Kt(58)]].map(([t,n])=>e.jsx("button",{type:"button",disabled:!Le||_e!=="model",onPointerDown:E,onClick:()=>{n(),y(i("studio.toast.aligned",{position:String(t)}))},children:String(t)},String(t)))}),e.jsxs("div",{className:"parts-section","aria-label":r("studio.parts.label","Texture Parts"),children:[e.jsxs("div",{className:"parts-section-head",children:[e.jsxs("div",{children:[e.jsx("span",{children:r("studio.parts.eyebrow","Parts")}),e.jsx("h3",{children:r("studio.parts.title","贴图部件")})]}),e.jsxs("div",{className:"parts-head-actions",children:[e.jsxs("span",{className:"parts-count-summary","aria-label":`${r("studio.parts.filter.hidden","已隐藏")} ${rl}，${r("studio.parts.filter.replaced","已替换")} ${Lr}，${r("studio.parts.filter.all","全部")} ${_t.length}`,children:[e.jsxs("span",{children:[r("studio.parts.filter.hidden","已隐藏")," ",e.jsx("strong",{children:rl})]}),e.jsxs("span",{children:[r("studio.parts.filter.replaced","已替换")," ",e.jsx("strong",{children:Lr})]}),e.jsxs("span",{children:[r("studio.parts.filter.all","全部")," ",e.jsx("strong",{children:_t.length})]})]}),e.jsx("button",{className:jt?"icon-tool-button is-active":"icon-tool-button",type:"button",title:r("studio.parts.pick","点选定位部件"),"aria-label":r("studio.parts.pick","点选定位部件"),"aria-pressed":jt,onPointerDown:E,onClick:()=>ni(t=>!t),children:e.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[e.jsx("circle",{cx:"12",cy:"12",r:"5"}),e.jsx("path",{d:"M12 2v4M12 18v4M2 12h4M18 12h4"})]})})]})]}),e.jsxs("label",{className:"field part-search-field",children:[e.jsx("span",{children:r("studio.parts.search","搜索部件")}),e.jsx("input",{type:"search",value:As,placeholder:r("studio.parts.search_placeholder","Slot / attachment"),onChange:t=>Is(t.target.value)})]}),e.jsx("div",{className:"parts-filter-row",role:"group","aria-label":r("studio.parts.filter","部件筛选"),children:["all","hidden","replaced"].map(t=>e.jsx("button",{className:wo===t?"filter-chip is-active":"filter-chip",type:"button",onPointerDown:E,onClick:()=>Es(t),children:r(`studio.parts.filter.${t}`,t)},t))}),e.jsxs("div",{className:"parts-bulk-row",children:[e.jsx("button",{className:"part-state-button",type:"button",disabled:en.length===0,onPointerDown:E,onClick:()=>hu(!0),children:r("studio.parts.show_filtered","显示筛选部件")}),e.jsx("button",{className:"part-state-button",type:"button",disabled:en.length===0,onPointerDown:E,onClick:()=>hu(!1),children:r("studio.parts.hide_filtered","隐藏筛选部件")}),e.jsx("button",{className:"part-state-button",type:"button",disabled:en.length===0,onPointerDown:E,onClick:Wh,children:r("studio.parts.invert_filtered","反转筛选部件")})]}),e.jsxs("div",{ref:de,className:"parts-list",role:"list",children:[en.map(t=>{const n=We[t.id]!==!1,a=ce[t.id],l=ec(a),s=zr(U,t.id);return e.jsxs("div",{ref:c=>{c?P.current.set(s,c):P.current.delete(s)},className:["part-toggle-row",Gt===U&&et===t.id?"is-selected":"",a?"is-replaced":""].filter(Boolean).join(" "),role:"listitem",onClick:()=>Qi(U,t.id),children:[e.jsx("input",{type:"checkbox",checked:n,onChange:c=>Sd(t,c.target.checked)}),e.jsxs("button",{className:"part-main-button",type:"button",onClick:()=>Qi(U,t.id),children:[e.jsx("span",{className:"part-thumb",children:l?e.jsx("span",{className:"attachment-gif-badge",children:"GIF"}):a!=null&&a.src||t.thumbnailSrc?e.jsx("img",{src:(a==null?void 0:a.src)??t.thumbnailSrc,alt:""}):e.jsx("span",{children:t.slotIndex+1})}),e.jsxs("span",{className:"part-name-stack",children:[e.jsx("strong",{children:t.attachmentName}),e.jsxs("small",{children:[t.slotName,t.kind==="mesh"?` · ${r("studio.parts.mesh","mesh")}`:"",a?` · ${a.fileName??r("studio.parts.replaced","Replaced")}`:""]})]})]}),e.jsxs("div",{className:"part-row-actions",children:[e.jsx("button",{type:"button",className:n?"part-state-button is-on":"part-state-button",onPointerDown:E,onClick:c=>{c.preventDefault(),Sd(t,!n)},children:n?r("studio.parts.disable","关闭"):r("studio.parts.enable","启用")}),e.jsxs("label",{className:"part-file-button",children:[e.jsx("span",{children:r("studio.parts.replace","替换")}),e.jsx("input",{type:"file",accept:"image/*",onChange:c=>{var m;jd(t,(m=c.target.files)==null?void 0:m[0]),c.currentTarget.value=""}})]}),e.jsx("button",{type:"button",className:"part-state-button",disabled:!a,onPointerDown:E,onClick:c=>{c.preventDefault(),Mp(t)},children:r("studio.parts.restore","还原")})]})]},t.id)}),_t.length===0?e.jsx("p",{className:"parts-empty",children:r("studio.parts.empty","当前骨架还没有可切换的贴图部件")}):null,_t.length>0&&en.length===0?e.jsx("p",{className:"parts-empty",children:r("studio.parts.no_match","没有匹配的部件")}):null]}),Z?e.jsxs("div",{className:"part-detail-panel",children:[e.jsxs("div",{className:"part-detail-title",children:[e.jsx("span",{className:"part-thumb is-large",children:Hh?e.jsx("span",{className:"attachment-gif-badge",children:"GIF"}):Ro!=null&&Ro.src||Z.thumbnailSrc?e.jsx("img",{src:(Ro==null?void 0:Ro.src)??Z.thumbnailSrc,alt:""}):e.jsx("span",{children:Z.slotIndex+1})}),e.jsxs("div",{children:[e.jsx("strong",{children:Z.attachmentName}),e.jsxs("small",{children:[Z.slotName,Z.kind==="mesh"?` · ${r("studio.parts.mesh","mesh")}`:""]})]})]}),e.jsxs("details",{className:"part-detail-section part-detail-details",open:!ce[Z.id]||void 0,children:[e.jsxs("summary",{children:[e.jsx("span",{children:r("studio.parts.original_adjustment","原贴图调整")}),ce[Z.id]?e.jsx("small",{children:r("studio.parts.original_adjustment_replaced_summary","替换启用时默认折叠")}):null]}),Z.kind==="mesh"?e.jsx("p",{className:"parts-empty",children:r("studio.parts.original_adjustment_mesh_note","mesh 原贴图调整使用自由 overlay：保留原图比例，不改原 mesh；启用后原 mesh 会临时隐藏。")}):null,ce[Z.id]?e.jsx("p",{className:"parts-empty",children:r("studio.parts.original_adjustment_replaced_note","替换贴图启用时，原贴图调整会暂时停用；还原替换后继续生效。")}):null,e.jsxs("div",{className:"part-transform-grid",children:[[[r("studio.parts.original_x","原 X"),"x",-1e3,1e3],[r("studio.parts.original_y","原 Y"),"y",-1e3,1e3],[r("studio.parts.original_scale","原缩放"),"scale",Fa,za],[r("studio.parts.original_rotation","原旋转"),"rotation",-360,360]].map(([t,n,a,l])=>e.jsxs("label",{className:"field compact-field",children:[e.jsx("span",{children:t}),e.jsx(se,{min:a,max:l,step:"1",value:(tn==null?void 0:tn[n])??(n==="scale"?100:0),fallback:n==="scale"?100:0,onCommit:s=>qs(Z,{[n]:s})})]},n)),e.jsxs("label",{className:"field compact-field",children:[e.jsx("span",{children:r("studio.parts.original_opacity","原始不透明度")}),e.jsx(se,{min:Zm,max:eh,step:"1",value:(tn==null?void 0:tn.opacity)??100,fallback:100,onCommit:t=>qs(Z,{opacity:t})})]})]}),e.jsx("button",{className:"secondary-button",type:"button",disabled:!tn,onPointerDown:E,onClick:()=>Ap(Z),children:r("studio.parts.original_adjustment_reset","重置原贴图调整")})]},`${Z.id}:${ce[Z.id]?"replaced":"original"}`),ce[Z.id]?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"part-option-row",children:[e.jsxs("label",{className:"field compact-field",children:[e.jsx("span",{children:r("studio.parts.replacement_mode","替换模式")}),e.jsxs("select",{value:((Cu=ce[Z.id])==null?void 0:Cu.replacementMode)??"overlayFree",onChange:t=>ri(Z,{replacementMode:t.target.value}),children:[e.jsx("option",{value:"replaceOriginal",children:r("studio.parts.replacement_mode.replace_original","替换原贴图")}),e.jsx("option",{value:"overlayFree",children:r("studio.parts.replacement_mode.overlay_free","自由覆盖贴图")})]})]}),e.jsxs("label",{className:"field compact-field checkbox-field",children:[e.jsx("span",{children:r("studio.parts.hide_original","隐藏原部件")}),e.jsx("input",{type:"checkbox",checked:((Tu=ce[Z.id])==null?void 0:Tu.hideOriginal)===!0,onChange:t=>ri(Z,{hideOriginal:t.target.checked})})]})]}),((Mu=ce[Z.id])==null?void 0:Mu.replacementMode)==="overlayFree"?e.jsx("p",{className:"parts-empty",children:r("studio.parts.overlay_free_hint","自由覆盖会保持原图比例，适合长武器、特效和额外饰品。")}):null,((Au=ce[Z.id])==null?void 0:Au.replacementMode)==="replaceOriginal"?e.jsx("p",{className:"parts-empty",children:r("studio.parts.replace_original_hint","只适合同尺寸贴图；比例不同会被压进原部件。")}):null,e.jsx("div",{className:"part-transform-grid",children:[[r("studio.parts.x","X"),"x",-1e3,1e3],[r("studio.parts.y","Y"),"y",-1e3,1e3],[r("studio.parts.scale","缩放"),"scale",Fa,za],[r("studio.parts.rotation","旋转"),"rotation",-360,360]].map(([t,n,a,l])=>{var s,c;return e.jsxs("label",{className:"field compact-field",children:[e.jsx("span",{children:t}),e.jsx(se,{min:a,max:l,step:"1",value:((c=(s=ce[Z.id])==null?void 0:s.transform)==null?void 0:c[n])??(n==="scale"?100:0),fallback:n==="scale"?100:0,onCommit:m=>ri(Z,{transform:{[n]:m}})})]},n)})}),e.jsxs("div",{className:"part-option-row",children:[e.jsxs("label",{className:"field compact-field",children:[e.jsx("span",{children:r("studio.parts.fit","适应")}),e.jsxs("select",{value:((Iu=ce[Z.id])==null?void 0:Iu.fitMode)??"contain",onChange:t=>ri(Z,{fitMode:t.target.value}),children:[e.jsx("option",{value:"contain",children:r("studio.parts.fit.contain","完整")}),e.jsx("option",{value:"cover",children:r("studio.parts.fit.cover","铺满")}),e.jsx("option",{value:"stretch",children:r("studio.parts.fit.stretch","拉伸")})]})]}),e.jsxs("label",{className:"field compact-field",children:[e.jsx("span",{children:r("studio.parts.overflow","范围")}),e.jsxs("select",{value:Sl(Z,(Eu=ce[Z.id])==null?void 0:Eu.overflowMode),onChange:t=>ri(Z,{overflowMode:t.target.value}),children:[e.jsx("option",{value:"expand",children:Z.kind==="mesh"?r("studio.parts.overflow.expand_mesh","可溢出（mesh 实验）"):r("studio.parts.overflow.expand","可溢出")}),e.jsx("option",{value:"clip",children:r("studio.parts.overflow.clip","盒内")})]})]})]})]}):e.jsx("p",{className:"parts-empty",children:r("studio.parts.select_replace_hint","替换该部件后可在这里调整位置、缩放和旋转。")})]}):null,e.jsx("button",{className:"secondary-button",type:"button",disabled:rl===0,onPointerDown:E,onClick:()=>{ti({}),y(r("studio.toast.parts_reset","All parts are visible again"))},children:r("studio.parts.reset","显示全部部件")}),e.jsx("button",{className:"secondary-button",type:"button",disabled:Lr===0,onPointerDown:E,onClick:()=>{On({}),y(r("studio.toast.part_replacements_cleared","已还原全部替换贴图"))},children:r("studio.parts.restore_all","还原全部替换")})]})]}),e.jsxs("section",{className:En==="effects"?"panel-page is-active":"panel-page","aria-label":i("studio.effects.title"),children:[e.jsx("div",{className:"section-title compact",children:e.jsx("h2",{children:i("studio.effects.title")})}),vu]}),e.jsxs("section",{className:En==="export"?"panel-page is-active":"panel-page","aria-labelledby":"exportTitle",children:[e.jsxs("div",{className:"section-title compact",children:[e.jsx("span",{children:i("studio.export.eyebrow")}),e.jsx("h2",{id:"exportTitle",children:i("studio.export.title")})]}),e.jsx("div",{className:"meme-effect-card meme-effect-body",children:e.jsx(mc,{value:it,onChange:Ka})}),e.jsxs("div",{className:"queue-card",role:"status","aria-live":"polite",children:[e.jsxs("div",{className:"queue-line",children:[e.jsx("span",{children:Fe.statusText||i("studio.queue.idle")}),e.jsx("strong",{children:Fe.countText})]}),e.jsx("div",{className:"progress",children:e.jsx("span",{style:{width:`${Fe.percent}%`}})}),e.jsx("small",{children:Fe.hintText||i("studio.queue.ready_hint")})]}),e.jsxs("div",{className:"export-stats","aria-label":i("studio.export.status_label"),children:[e.jsxs("div",{children:[e.jsx("span",{children:i("studio.export.failed")}),e.jsx("strong",{children:Fe.failed})]}),e.jsxs("div",{children:[e.jsx("span",{children:i("studio.export.remaining")}),e.jsx("strong",{children:Fe.remain})]}),e.jsxs("div",{children:[e.jsx("span",{children:i("studio.export.eta")}),e.jsx("strong",{children:Fe.eta})]})]}),Ut?e.jsx("button",{className:"secondary-button",type:"button",onPointerDown:E,onClick:()=>ut("cancel"),children:e.jsx("span",{children:i("studio.export.cancel")})}):null,e.jsxs("button",{className:"primary-button",type:"button",disabled:Ut,onPointerDown:E,onClick:()=>ut("current"),children:[e.jsx("span",{className:"icon icon-export","aria-hidden":"true"}),e.jsx("span",{children:i("studio.export.current_gif")})]}),e.jsxs("button",{className:"secondary-button",type:"button",disabled:Ut,onPointerDown:E,onClick:()=>ut("batch"),children:[e.jsx("span",{className:"icon icon-list","aria-hidden":"true"}),e.jsx("span",{children:i("studio.export.batch_gif")})]}),e.jsxs("button",{className:"secondary-button",type:"button",disabled:Ut,onPointerDown:E,onClick:()=>ut("pngCurrent"),children:[e.jsx("span",{className:"icon icon-export","aria-hidden":"true"}),e.jsx("span",{children:i("studio.export.current_png")})]}),e.jsxs("button",{className:"secondary-button",type:"button",disabled:Ut,onPointerDown:E,onClick:()=>ut("pngBatch"),children:[e.jsx("span",{className:"icon icon-list","aria-hidden":"true"}),e.jsx("span",{children:i("studio.export.batch_png")})]}),e.jsxs("div",{className:"field full-field",children:[e.jsx("span",{children:i("studio.export.png_mode")}),e.jsxs("details",{className:"select-menu",children:[e.jsx("summary",{children:e.jsx("span",{children:Ld(mr)})}),e.jsx("div",{className:"select-options",children:["currentFrame","currentFirst","currentAllFrames","allFirst","allFrames"].map(t=>e.jsx("button",{type:"button",onPointerDown:E,onClick:()=>Wc(t),children:Ld(t)},t))})]})]}),e.jsxs("button",{className:"secondary-button",type:"button",disabled:Ut,onPointerDown:E,onClick:()=>ut("resume"),children:[e.jsx("span",{className:"icon icon-continue","aria-hidden":"true"}),e.jsx("span",{children:i("studio.export.resume")})]}),e.jsx("div",{className:"panel-action-grid compact-actions",children:[["pause",i("studio.export.pause")],["retry",i("studio.export.retry")],["open",i("studio.export.open_directory")],["copy",i("studio.export.copy_config")]].map(([t,n])=>e.jsx("button",{className:"secondary-button",type:"button",onPointerDown:E,onClick:()=>ut(t),children:n},t))}),e.jsxs("div",{className:"field-grid",children:[e.jsxs("div",{className:"field",children:[e.jsx("span",{children:i("studio.export.quality")}),e.jsxs("details",{className:"select-menu",children:[e.jsx("summary",{children:e.jsx("span",{children:eu(nd)})}),e.jsx("div",{className:"select-options",children:["ffmpeg"].map(t=>e.jsx("button",{type:"button",onPointerDown:E,onClick:()=>fh(t),children:eu(t)},t))})]})]}),e.jsxs("label",{className:"field",children:[e.jsx("span",{children:i("studio.export.fps")}),e.jsx(se,{min:Vr,value:Dt,fallback:15,integer:!0,onCommit:Wi})]})]}),e.jsxs("div",{className:"field full-field",children:[e.jsx("span",{children:i("studio.export.compatibility")}),e.jsxs("details",{className:"select-menu",children:[e.jsx("summary",{children:e.jsx("span",{children:Ir(Cs)})}),e.jsx("div",{className:"select-options",children:["chat","chatLowResolution","compact"].map(t=>e.jsx("button",{type:"button",onPointerDown:E,onClick:()=>Oc(t),children:Ir(t)},t))})]}),e.jsx("small",{children:i("studio.export.compatibility_hint")})]}),e.jsxs("details",{className:"advanced-card",open:!0,children:[e.jsx("summary",{children:i("studio.export.advanced")}),e.jsxs("div",{className:"field-grid",children:[e.jsxs("div",{className:"field",children:[e.jsx("span",{children:i("studio.export.crop")}),e.jsxs("details",{className:"select-menu",children:[e.jsx("summary",{children:e.jsx("span",{children:Io(ft)})}),e.jsx("div",{className:"select-options",children:["animationBounds","visiblePixels","fixed","current","faceFollow"].map(t=>e.jsx("button",{type:"button",onPointerDown:E,onClick:()=>nu(t),children:Io(t)},t))})]})]}),tu,ou,e.jsxs("div",{className:"field",children:[e.jsx("span",{children:i("studio.export.loop")}),e.jsxs("details",{className:"select-menu",children:[e.jsx("summary",{children:e.jsx("span",{children:Er(kn)})}),e.jsx("div",{className:"select-options",children:["forever","once","three"].map(t=>e.jsx("button",{type:"button",onPointerDown:E,onClick:()=>Bc(t),children:Er(t)},t))})]})]}),xa?e.jsxs("div",{className:"field",children:[e.jsx("span",{children:r("studio.export.gif_timeline","GIF 时间轴")}),e.jsxs("details",{className:"select-menu",children:[e.jsx("summary",{children:e.jsx("span",{children:Eo(Hi)})}),e.jsx("div",{className:"select-options",children:["primary","longest","sharedLoop","custom"].map(t=>e.jsx("button",{type:"button",onPointerDown:E,onClick:()=>$c(t),children:Eo(t)},t))})]})]}):null,xa&&Hi==="custom"?e.jsxs("label",{className:"field",children:[e.jsx("span",{children:r("studio.export.gif_custom_seconds","自定义秒数")}),e.jsx(se,{min:xc,max:vc,step:"0.1",value:sa,fallback:Cl,onCommit:t=>Hc(kl(t))})]}):null,bd?e.jsx("small",{className:"full-field",children:r("studio.export.gif_image_layer_timeline_note","动态 GIF 图片层会按各自速度和偏移参与 GIF 合成；最长层和共享完整循环会把可见动态 GIF 图片层计入总时长。")}):null,e.jsxs("div",{className:"field",children:[e.jsx("span",{children:i("studio.export.background")}),e.jsx("strong",{className:"config-readout",children:Rd(ot)})]}),e.jsx("button",{className:"secondary-button",type:"button",onPointerDown:E,onClick:()=>ut("folder"),children:r("studio.export.choose_directory_supported","选择导出目录（支持的浏览器）")}),e.jsx("small",{className:"full-field",children:r("studio.export.directory_hint","浏览器不支持目录写入时仍会使用普通下载；不会绕过系统保存权限。")})]})]})]})]})]}),e.jsxs("nav",{className:"mobile-tool-nav","aria-label":r("studio.panel.tabs_label","Studio tools"),children:[e.jsxs("button",{className:gt==="canvas"?"is-active":"",type:"button","aria-expanded":gt==="canvas",onPointerDown:E,onClick:()=>fa("canvas"),children:[e.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[e.jsx("rect",{x:"4",y:"4",width:"16",height:"16",rx:"3"}),e.jsx("path",{d:"M8 16 11 12.5 13.5 15 16 11 20 16"})]}),e.jsx("span",{children:nl("canvas")})]}),e.jsxs("button",{className:gt==="layers"?"is-active":"",type:"button","aria-expanded":gt==="layers",onPointerDown:E,onClick:()=>fa("layers"),children:[e.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[e.jsx("path",{d:"m12 3 9 5-9 5-9-5 9-5Z"}),e.jsx("path",{d:"m3 12 9 5 9-5M3 16l9 5 9-5"})]}),e.jsx("span",{children:nl("layers")})]}),e.jsxs("button",{className:gt==="parts"?"is-active":"",type:"button","aria-expanded":gt==="parts",onPointerDown:E,onClick:()=>fa("parts"),children:[e.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{d:"M8.5 3.5h7v4h4v7h-4v6h-7v-6h-4v-7h4v-4Z"})}),e.jsx("span",{children:r("studio.parts.title","Parts")})]}),e.jsxs("button",{className:gt==="effects"?"is-active":"",type:"button","aria-expanded":gt==="effects",onPointerDown:E,onClick:()=>fa("effects"),children:[e.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[e.jsx("rect",{x:"3",y:"4",width:"18",height:"16",rx:"3"}),e.jsx("path",{d:"M12 5v14M5 9l4-2v10l-4-2m14-6-4-2v10l4-2"})]}),e.jsx("span",{children:i("studio.effects.title")})]}),e.jsxs("button",{className:gt==="export"?"is-active":"",type:"button","aria-expanded":gt==="export",onPointerDown:E,onClick:()=>fa("export"),children:[e.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[e.jsx("path",{d:"M12 3v12M7 10l5 5 5-5"}),e.jsx("path",{d:"M5 19h14"})]}),e.jsx("span",{children:nl("export")})]})]})]}),je&&gu?e.jsxs("div",{ref:$,className:`studio-choice-popover ${Yh} is-${(bn==null?void 0:bn.placement)??"down"}`,role:"dialog","aria-label":fu,style:gu,children:[e.jsxs("div",{className:"studio-choice-popover-head",children:[je==="externalSkin"||je==="internalSkin"?e.jsxs("div",{className:"mobile-skin-tabs",role:"group","aria-label":r("studio.choice.grid_label","Available Animations and Skins"),children:[e.jsx("button",{className:je==="externalSkin"?"is-active":"",type:"button",onPointerDown:E,onClick:()=>Rt("externalSkin"),children:i("studio.choice.external_skin")}),e.jsx("button",{className:je==="internalSkin"?"is-active":"",type:"button",onPointerDown:E,onClick:()=>Rt("internalSkin"),children:i("studio.choice.internal_skin")})]}):null,e.jsx("span",{children:fu}),je==="internalSkin"&&K&&(h==null?void 0:h.id)===K.resourceId?e.jsx("button",{className:"inline-filter-toggle",type:"button",onPointerDown:E,onClick:()=>qn(t=>t&&{...t,showAll:!t.showAll}),children:K.showAll?r("studio.choice.current_only","Current only"):i("studio.choice.show_all")}):null,e.jsx("button",{className:"icon-button mini-icon-button",type:"button","aria-label":r("studio.choice.close","Close choice panel"),onPointerDown:E,onClick:()=>Rt(null),children:e.jsx("span",{className:"icon icon-close","aria-hidden":"true"})})]}),je==="motion"?e.jsxs("button",{className:"mobile-composition-entry",type:"button",onPointerDown:E,onClick:()=>{Rt(null),Bo(null),xo(null),Dn(!0)},children:[e.jsx("span",{children:r("studio.composition.trigger","Composition")}),e.jsx("strong",{children:pt.length}),e.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{d:"m9 6 6 6-6 6"})})]}):null,e.jsxs("div",{className:"choice-grid","aria-label":r("studio.choice.grid_label","Available animations and skins"),children:[je==="externalSkin"?To.map(t=>e.jsxs("button",{type:"button",className:t.resourceId===(h==null?void 0:h.id)?"skin-head-choice is-active":"skin-head-choice",onPointerDown:E,onClick:()=>ap(t),children:[t.avatarUrl?e.jsx("img",{className:"skin-choice-head",src:t.avatarUrl,alt:""}):null,e.jsx("span",{children:t.displayLabel??Ao(t.label)})]},t.id)):je==="internalSkin"?Fs.map(t=>e.jsx("button",{type:"button",className:t.skinName===ye?"is-active":"",onPointerDown:E,onClick:()=>rp(t.skinName),children:t.label},t.id)):xd.map(t=>e.jsx("button",{type:"button","data-motion-choice":t,className:t===te?"is-active":"",onPointerDown:E,onClick:()=>va(t),children:t},t)),je==="externalSkin"&&To.length===0?e.jsx("span",{className:"resource-empty",children:r("studio.choice.no_external_skin","No external skin resources for this module")}):null,je==="internalSkin"&&Fs.length===0?e.jsx("span",{className:"resource-empty",children:r("studio.choice.no_internal_skin","No extra internal skins in this skeleton")}):null]})]}):null,e.jsx("div",{className:"drawer-backdrop",hidden:!fi,onClick:()=>In(!1)}),e.jsxs("aside",{className:fi?"settings-drawer glass-card is-open":"settings-drawer glass-card",id:"settingsDrawer","aria-hidden":!fi,"aria-labelledby":"settingsTitle",children:[e.jsxs("header",{children:[e.jsxs("div",{className:"section-title compact",children:[e.jsx("span",{children:i("studio.settings.eyebrow")}),e.jsx("h2",{id:"settingsTitle",children:i("studio.settings.title")})]}),e.jsx("button",{className:"icon-button",type:"button","aria-label":i("studio.settings.close"),onPointerDown:E,onClick:()=>In(!1),children:e.jsx("span",{className:"icon icon-close","aria-hidden":"true"})})]}),e.jsxs("section",{className:"settings-section","aria-labelledby":"studioUiTitle",children:[e.jsx("h3",{id:"studioUiTitle",children:i("studio.ui_mode.title")}),e.jsxs("div",{className:"segmented-control studio-ui-mode-options",role:"group","aria-label":i("studio.ui_mode.group_label"),children:[e.jsxs("button",{className:"ui-mode-choice is-active",type:"button","aria-current":"page",children:[e.jsx("img",{src:qd,alt:""}),e.jsx("span",{children:i("studio.ui_mode.classic")})]}),e.jsxs("button",{className:"ui-mode-choice",type:"button",onPointerDown:E,onClick:()=>{gi("modern"),In(!1)},children:[e.jsx("img",{src:tm,alt:""}),e.jsx("span",{children:i("studio.ui_mode.modern")})]})]}),e.jsx("small",{className:"settings-hint",children:i("studio.ui_mode.shared_hint")})]}),e.jsxs("section",{className:"settings-section","aria-labelledby":"appearanceTitle",children:[e.jsx("h3",{id:"appearanceTitle",children:i("studio.settings.appearance")}),e.jsx("div",{className:"theme-grid",role:"group","aria-label":i("studio.settings.theme_label"),children:ej.map(t=>e.jsxs("button",{className:Ha===t.id?"theme-choice is-active":"theme-choice",type:"button",onPointerDown:E,onClick:()=>{rs(t.id),y(i("studio.toast.theme_changed"))},children:[e.jsx("span",{children:i(`studio.theme.${t.id}`)}),e.jsx("small",{children:i(`studio.theme.${t.id}.caption`)})]},t.id))}),e.jsx("div",{className:"segmented-control",role:"group","aria-label":i("studio.settings.color_mode"),children:[["night",i("studio.settings.color.night")],["day",i("studio.settings.color.day")]].map(([t,n])=>e.jsx("button",{className:Wa===t?"is-active":"",type:"button",onPointerDown:E,onClick:()=>{Ee(t),y(i("studio.toast.theme_changed"))},children:n},t))}),e.jsxs("label",{className:"switch-row",children:[e.jsx("span",{children:i("studio.settings.soft_glow")}),e.jsx("input",{type:"checkbox",checked:!Ya,onChange:t=>Ga(!t.target.checked)})]})]}),e.jsxs("section",{className:"settings-section","aria-labelledby":"generalTitle",children:[e.jsx("h3",{id:"generalTitle",children:i("studio.settings.general")}),e.jsxs("div",{className:"field",children:[e.jsx("span",{children:i("locale.label")}),e.jsxs("details",{className:"select-menu",children:[e.jsx("summary",{children:e.jsx("span",{children:i(`locale.${g}`)})}),e.jsx("div",{className:"select-options",children:Pr.map(t=>e.jsx("button",{type:"button",onPointerDown:E,onClick:()=>{f(t),y(`${i("locale.label")}：${i(`locale.${t}`)}`)},children:i(`locale.${t}`)},t))})]})]})]}),e.jsxs("section",{className:"settings-section","aria-labelledby":"resourceTitle",children:[e.jsx("h3",{id:"resourceTitle",children:r("studio.settings.temporary_spine_resources","临时 Spine 资源")}),e.jsxs("label",{className:"field",children:[e.jsx("span",{children:r("studio.settings.resource_directory","本地骨架目录")}),e.jsx("button",{className:"secondary-button",type:"button",onPointerDown:E,onClick:()=>void _(),children:S.rootDirectoryName?r("studio.settings.change_directory","更换本地骨架目录"):r("studio.settings.choose_directory","选择本地骨架目录")})]}),e.jsx("small",{className:"settings-hint",children:S.rootDirectoryName?r("studio.settings.current_directory","当前临时目录：{directory}。不会写入项目 resources；刷新后需要浏览器重新授权目录。",{directory:S.rootDirectoryName}):Q??r("studio.settings.bundled_manifest","未选择本地目录时，Studio 使用内置资源；目录选择仅在支持 File System Access API 的浏览器中可用。")})]}),e.jsxs("section",{className:"settings-section","aria-labelledby":"defaultTitle",children:[e.jsx("h3",{id:"defaultTitle",children:i("studio.settings.export_defaults")}),e.jsxs("label",{className:"field",children:[e.jsx("span",{children:i("studio.settings.default_fps")}),e.jsx(se,{min:Vr,value:Dt,fallback:15,integer:!0,onCommit:Wi})]})]}),e.jsxs("section",{className:"settings-section danger","aria-labelledby":"cacheTitle",children:[e.jsx("h3",{id:"cacheTitle",children:i("studio.settings.cache_debug")}),e.jsx("button",{className:"secondary-button",type:"button",onPointerDown:E,onClick:()=>{M(),y(i("studio.toast.cache_cleared"))},children:i("studio.settings.clear_cache")}),e.jsxs("details",{className:"advanced-card debug-details",children:[e.jsx("summary",{children:r("studio.settings.advanced_debug","高级调试")}),e.jsxs("label",{className:"switch-row",children:[e.jsx("span",{children:i("studio.settings.diagnostics")}),e.jsx("input",{type:"checkbox",onChange:t=>y(t.target.checked?i("studio.toast.diagnostics_on"):i("studio.toast.diagnostics_off"))})]}),e.jsx("small",{className:"settings-hint",children:r("studio.settings.diagnostics_note","诊断信息仅用于开发排查，普通编辑不需要开启。")})]})]})]}),e.jsx("div",{className:"toast-host","aria-live":"polite","aria-atomic":"true",children:Pc.map(t=>e.jsx("div",{className:"toast",children:t.message},t.id))})]})}export{Mj as JourneyStudioPage};
