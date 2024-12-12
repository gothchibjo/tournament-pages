import{p as m,m as g,D as O,b as y,g as C,E as F,G as K,h as U,i as r,H as d,I as v,e as V,J as p,l as j,K as M,r as S,o as L,n as D,q as u,L as f,M as q,N as z,z as $,B as J,v as H,F as W}from"./index-Cgt8FsMp.js";import{r as Y,s as Q}from"./VGrid-BnyNLfLL.js";import{V as X,a as Z}from"./index-CgjN2KfA.js";import{V as ee}from"./VTextField-nZrYIbCk.js";import"./VIcon-CHpwEsgl.js";const te=m({fluid:{type:Boolean,default:!1},...g(),...O(),...y()},"VContainer"),ne=C()({name:"VContainer",props:te(),setup(e,s){let{slots:t}=s;const{rtlClasses:a}=F(),{dimensionStyles:n}=K(e);return U(()=>r(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},a.value,e.class],style:[n.value,e.style]},t)),{}}}),w=d.reduce((e,s)=>(e[s]={type:[Boolean,String,Number],default:!1},e),{}),P=d.reduce((e,s)=>{const t="offset"+v(s);return e[t]={type:[String,Number],default:null},e},{}),E=d.reduce((e,s)=>{const t="order"+v(s);return e[t]={type:[String,Number],default:null},e},{}),N={col:Object.keys(w),offset:Object.keys(P),order:Object.keys(E)};function ae(e,s,t){let a=e;if(!(t==null||t===!1)){if(s){const n=s.replace(e,"");a+=`-${n}`}return e==="col"&&(a="v-"+a),e==="col"&&(t===""||t===!0)||(a+=`-${t}`),a.toLowerCase()}}const se=["auto","start","end","center","baseline","stretch"],le=m({cols:{type:[Boolean,String,Number],default:!1},...w,offset:{type:[String,Number],default:null},...P,order:{type:[String,Number],default:null},...E,alignSelf:{type:String,default:null,validator:e=>se.includes(e)},...g(),...y()},"VCol"),oe=C()({name:"VCol",props:le(),setup(e,s){let{slots:t}=s;const a=V(()=>{const n=[];let o;for(o in N)N[o].forEach(l=>{const i=e[l],b=ae(o,l,i);b&&n.push(b)});const c=n.some(l=>l.startsWith("v-col-"));return n.push({"v-col":!c||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),n});return()=>{var n;return p(e.tag,{class:[a.value,e.class],style:e.style},(n=t.default)==null?void 0:n.call(t))}}}),_=["start","end","center"],x=["space-between","space-around","space-evenly"];function k(e,s){return d.reduce((t,a)=>{const n=e+v(a);return t[n]=s(),t},{})}const re=[..._,"baseline","stretch"],B=e=>re.includes(e),R=k("align",()=>({type:String,default:null,validator:B})),ue=[..._,...x],A=e=>ue.includes(e),I=k("justify",()=>({type:String,default:null,validator:A})),ie=[..._,...x,"stretch"],T=e=>ie.includes(e),G=k("alignContent",()=>({type:String,default:null,validator:T})),h={align:Object.keys(R),justify:Object.keys(I),alignContent:Object.keys(G)},ce={align:"align",justify:"justify",alignContent:"align-content"};function fe(e,s,t){let a=ce[e];if(t!=null){if(s){const n=s.replace(e,"");a+=`-${n}`}return a+=`-${t}`,a.toLowerCase()}}const de=m({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:B},...R,justify:{type:String,default:null,validator:A},...I,alignContent:{type:String,default:null,validator:T},...G,...g(),...y()},"VRow"),me=C()({name:"VRow",props:de(),setup(e,s){let{slots:t}=s;const a=V(()=>{const n=[];let o;for(o in h)h[o].forEach(c=>{const l=e[c],i=fe(o,c,l);i&&n.push(i)});return n.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),n});return()=>{var n;return p(e.tag,{class:["v-row",a.value,e.class],style:e.style},(n=t.default)==null?void 0:n.call(t))}}}),ge=j({__name:"Load",setup(e){const s=M(),t=S(!1),a=S(Y()),n=V(()=>Q(a.value));function o(){n.value!==""&&(t.value=!0,setTimeout(()=>t.value=!1,3e3),s.push({path:`/t/${n.value}`,query:{tournamentName:a.value}}))}return(c,l)=>(L(),D(ne,{class:"fill-height",fluid:""},{default:u(()=>[r(me,null,{default:u(()=>[r(oe,{class:"d-flex justify-center"},{default:u(()=>[r(X,{class:"mx-auto","max-width":"70%"},{default:u(()=>[r(ee,{modelValue:f(a),"onUpdate:modelValue":l[0]||(l[0]=i=>q(a)?a.value=i:null),autofocus:"",hint:f(n)?`id: ${f(n)}`:"",placeholder:"Enter the tournament name or ID",variant:"solo",onKeypress:z(o,["enter"])},{"append-inner":u(()=>[r(Z,{color:"green",disabled:f(n)==="",loading:f(t),onClick:o},{default:u(()=>l[1]||(l[1]=[$("Connect")])),_:1},8,["disabled","loading"])]),_:1},8,["modelValue","hint"])]),_:1})]),_:1})]),_:1})]),_:1}))}}),ke=j({__name:"index",setup(e){return(s,t)=>{const a=J("router-link"),n=ge;return L(),H(W,null,[r(a,{to:"/p/"},{default:u(()=>t[0]||(t[0]=[$("Parameters")])),_:1}),r(n)],64)}}});export{ke as default};