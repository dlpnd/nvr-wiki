"use strict";(self.webpackChunknvr_wiki=self.webpackChunknvr_wiki||[]).push([[3873],{6291:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>h,contentTitle:()=>t,default:()=>c,frontMatter:()=>i,metadata:()=>d,toc:()=>a});var r=l(4848),s=l(8453);const i={},t="AmbientOcclusion",d={id:"Shaders/AmbientOcclusion",title:"AmbientOcclusion",description:"---",source:"@site/docs/Shaders/AmbientOcclusion.md",sourceDirName:"Shaders",slug:"/Shaders/AmbientOcclusion",permalink:"/nvr-wiki/docs/Shaders/AmbientOcclusion",draft:!1,unlisted:!1,editUrl:"https://github.com/dlpnd/nvr-wiki/edit/master/docs/Shaders/AmbientOcclusion.md",tags:[],version:"current",frontMatter:{},sidebar:"introductionSidebar",previous:{title:"Main Settings",permalink:"/nvr-wiki/docs/Main"},next:{title:"Blood",permalink:"/nvr-wiki/docs/Shaders/Blood"}},h={},a=[{value:"Exteriors",id:"exteriors",level:2},{value:"AngleBias",id:"anglebias",level:3},{value:"BlurDropThreshold",id:"blurdropthreshold",level:3},{value:"BlurRadiusMultiplier",id:"blurradiusmultiplier",level:3},{value:"ClampStrength",id:"clampstrength",level:3},{value:"Enabled",id:"enabled",level:3},{value:"LumThreshold",id:"lumthreshold",level:3},{value:"Range",id:"range",level:3},{value:"Samples",id:"samples",level:3},{value:"StrengthMultiplier",id:"strengthmultiplier",level:3},{value:"Interiors",id:"interiors",level:2},{value:"AngleBias",id:"anglebias-1",level:3},{value:"BlurDropThreshold",id:"blurdropthreshold-1",level:3},{value:"BlurRadiusMultiplier",id:"blurradiusmultiplier-1",level:3},{value:"ClampStrength",id:"clampstrength-1",level:3},{value:"Enabled",id:"enabled-1",level:3},{value:"LumThreshold",id:"lumthreshold-1",level:3},{value:"Range",id:"range-1",level:3},{value:"Samples",id:"samples-1",level:3},{value:"StrengthMultiplier",id:"strengthmultiplier-1",level:3},{value:"Status",id:"status",level:2},{value:"Enabled",id:"enabled-2",level:3}];function o(e){const n={blockquote:"blockquote",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"ambientocclusion",children:"AmbientOcclusion"}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"exteriors",children:"Exteriors"}),"\n",(0,r.jsx)(n.h3,{id:"anglebias",children:"AngleBias"}),"\n",(0,r.jsx)(n.p,{children:"Value to increase the contribution of closer samples for more detail in creases."}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Default: 1.6"}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"blurdropthreshold",children:"BlurDropThreshold"}),"\n",(0,r.jsx)(n.p,{children:"Distance cutoff for areas that shouldn't be blurred together (edge aware denoise)."}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Default: 8.0"}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"blurradiusmultiplier",children:"BlurRadiusMultiplier"}),"\n",(0,r.jsx)(n.p,{children:"Blur radius to denoise AO."}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Default: 2.0"}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"clampstrength",children:"ClampStrength"}),"\n",(0,r.jsx)(n.p,{children:"Lower limit to AO darkness (0 for pure black and 1 for pure white)."}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Default: 0.25"}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"enabled",children:"Enabled"}),"\n",(0,r.jsx)(n.p,{children:"Enable Ambient occlusion in exteriors."}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Default: true"}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"lumthreshold",children:"LumThreshold"}),"\n",(0,r.jsx)(n.p,{children:"Treshold to reduce AO strength on bright surfaces."}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Default: 0.7"}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"range",children:"Range"}),"\n",(0,r.jsx)(n.p,{children:"Distance for sampling. Larger values create a softer AO, smaller creates sharper details."}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Default: 30.0"}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"samples",children:"Samples"}),"\n",(0,r.jsx)(n.p,{children:"Not used (currently hardcoded)."}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Default: 5"}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"strengthmultiplier",children:"StrengthMultiplier"}),"\n",(0,r.jsx)(n.p,{children:"Global AO strength/darkness multiplier."}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Default: 1.0"}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"interiors",children:"Interiors"}),"\n",(0,r.jsx)(n.h3,{id:"anglebias-1",children:"AngleBias"}),"\n",(0,r.jsx)(n.p,{children:"Value to increase the contribution of closer samples for more detail in creases."}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Default: 0.0"}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"blurdropthreshold-1",children:"BlurDropThreshold"}),"\n",(0,r.jsx)(n.p,{children:"Distance cutoff for areas that shouldn't be blurred together (edge aware denoise)."}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Default: 8.0"}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"blurradiusmultiplier-1",children:"BlurRadiusMultiplier"}),"\n",(0,r.jsx)(n.p,{children:"Blur radius to denoise AO."}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Default: 2.0"}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"clampstrength-1",children:"ClampStrength"}),"\n",(0,r.jsx)(n.p,{children:"Lower limit to AO darkness (0 for pure black and 1 for pure white)."}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Default: 0.2"}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"enabled-1",children:"Enabled"}),"\n",(0,r.jsx)(n.p,{children:"Enable Ambient occlusion in exteriors."}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Default: true"}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"lumthreshold-1",children:"LumThreshold"}),"\n",(0,r.jsx)(n.p,{children:"Treshold to reduce AO strength on bright surfaces."}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Default: 0.5"}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"range-1",children:"Range"}),"\n",(0,r.jsx)(n.p,{children:"Distance for sampling. Larger values create a softer AO, smaller creates sharper details."}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Default: 30.0"}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"samples-1",children:"Samples"}),"\n",(0,r.jsx)(n.p,{children:"Not used (currently hardcoded)."}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Default: 5"}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"strengthmultiplier-1",children:"StrengthMultiplier"}),"\n",(0,r.jsx)(n.p,{children:"Global AO strength/darkness multiplier."}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Default: 1.0"}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"status",children:"Status"}),"\n",(0,r.jsx)(n.h3,{id:"enabled-2",children:"Enabled"}),"\n",(0,r.jsx)(n.p,{children:"Shadows based on object proximity/creases for more realistic light contribution."}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Default: true"}),"\n"]}),"\n",(0,r.jsx)(n.hr,{})]})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},8453:(e,n,l)=>{l.d(n,{R:()=>t,x:()=>d});var r=l(6540);const s={},i=r.createContext(s);function t(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);