"use strict";(self.webpackChunknvr_wiki=self.webpackChunknvr_wiki||[]).push([[1202],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=u(r),h=o,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||l;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,i=new Array(l);i[0]=h;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[d]="string"==typeof e?e:o,i[1]=a;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},6973:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>a,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const l={},i="Lens",a={unversionedId:"Shaders/Lens",id:"Shaders/Lens",title:"Lens",description:"---",source:"@site/docs/Shaders/Lens.md",sourceDirName:"Shaders",slug:"/Shaders/Lens",permalink:"/nvr-wiki/docs/Shaders/Lens",draft:!1,editUrl:"https://github.com/dlpnd/nvr-wiki/edit/master/docs/Shaders/Lens.md",tags:[],version:"current",frontMatter:{},sidebar:"introductionSidebar",previous:{title:"ImageAdjust",permalink:"/nvr-wiki/docs/Shaders/ImageAdjust"},next:{title:"LowHF",permalink:"/nvr-wiki/docs/Shaders/LowHF"}},s={},u=[{value:"Main",id:"main",level:2},{value:"DirtLensAmount",id:"dirtlensamount",level:3},{value:"ExteriorBloomTreshold",id:"exteriorbloomtreshold",level:3},{value:"NightBloomTreshold",id:"nightbloomtreshold",level:3},{value:"InteriorBloomTreshold",id:"interiorbloomtreshold",level:3},{value:"Status",id:"status",level:2},{value:"Enabled",id:"enabled",level:3}],c={toc:u},d="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"lens"},"Lens"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"main"},"Main"),(0,o.kt)("h3",{id:"dirtlensamount"},"DirtLensAmount"),(0,o.kt)("p",null,"Global effect strength multiplier."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Default: 0.4")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"exteriorbloomtreshold"},"ExteriorBloomTreshold"),(0,o.kt)("p",null,"Treshold for the max brightness to trigger the effect in exteriors."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Default: 0.65")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"nightbloomtreshold"},"NightBloomTreshold"),(0,o.kt)("p",null,"Treshold for the max brightness to trigger the effect at night."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Default: 0.2")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"interiorbloomtreshold"},"InteriorBloomTreshold"),(0,o.kt)("p",null,"Treshold for the max brightness to trigger the effect in interiors."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Default: 0.2")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"status"},"Status"),(0,o.kt)("h3",{id:"enabled"},"Enabled"),(0,o.kt)("p",null,"Simulates lens smudges refracting light around brightest areas of the screen."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Default: true")),(0,o.kt)("hr",null))}p.isMDXComponent=!0}}]);