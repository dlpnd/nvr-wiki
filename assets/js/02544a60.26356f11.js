"use strict";(self.webpackChunknvr_wiki=self.webpackChunknvr_wiki||[]).push([[6374],{2858:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>a,toc:()=>h});var i=l(5893),t=l(1151);const r={},s="GodRays",a={id:"Shaders/GodRays",title:"GodRays",description:"---",source:"@site/docs/Shaders/GodRays.md",sourceDirName:"Shaders",slug:"/Shaders/GodRays",permalink:"/nvr-wiki/docs/Shaders/GodRays",draft:!1,unlisted:!1,editUrl:"https://github.com/dlpnd/nvr-wiki/edit/master/docs/Shaders/GodRays.md",tags:[],version:"current",frontMatter:{},sidebar:"introductionSidebar",previous:{title:"ExtraShaders",permalink:"/nvr-wiki/docs/Shaders/ExtraShaders"},next:{title:"Grass",permalink:"/nvr-wiki/docs/Shaders/Grass"}},d={},h=[{value:"Main",id:"main",level:2},{value:"DayMultiplier",id:"daymultiplier",level:3},{value:"LightShaftPasses",id:"lightshaftpasses",level:3},{value:"Luminance",id:"luminance",level:3},{value:"NightMultiplier",id:"nightmultiplier",level:3},{value:"RayDensity",id:"raydensity",level:3},{value:"RayIntensity",id:"rayintensity",level:3},{value:"RayLength",id:"raylength",level:3},{value:"RayVisibility",id:"rayvisibility",level:3},{value:"SunGlareEnabled",id:"sunglareenabled",level:3},{value:"TimeEnabled",id:"timeenabled",level:3},{value:"Coloring",id:"coloring",level:2},{value:"RayR",id:"rayr",level:3},{value:"RayG",id:"rayg",level:3},{value:"RayB",id:"rayb",level:3},{value:"Saturate",id:"saturate",level:3},{value:"Status",id:"status",level:2},{value:"Enabled",id:"enabled",level:3}];function o(e){const n={blockquote:"blockquote",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"godrays",children:"GodRays"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"main",children:"Main"}),"\n",(0,i.jsx)(n.h3,{id:"daymultiplier",children:"DayMultiplier"}),"\n",(0,i.jsx)(n.p,{children:"Strength of godrays during the day."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Default: 0.3"}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"lightshaftpasses",children:"LightShaftPasses"}),"\n",(0,i.jsx)(n.p,{children:"Not used."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Default: 8"}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"luminance",children:"Luminance"}),"\n",(0,i.jsx)(n.p,{children:"Treshold for minimum luminosity of areas casting rays. Lower means more of the sky will cast rays."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Default: 0.9"}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"nightmultiplier",children:"NightMultiplier"}),"\n",(0,i.jsx)(n.p,{children:"Strength of godrays during the night."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Default: 1.0"}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"raydensity",children:"RayDensity"}),"\n",(0,i.jsx)(n.p,{children:"Curve for reduction of the intensity of godrays near the sunglare."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Default: 0.3"}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"rayintensity",children:"RayIntensity"}),"\n",(0,i.jsx)(n.p,{children:"Multiplier for the intensity of the bright areas being blurred to create the rays."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Default: 1.0"}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"raylength",children:"RayLength"}),"\n",(0,i.jsx)(n.p,{children:"Multiplier for the length of rays."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Default: 1.0"}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"rayvisibility",children:"RayVisibility"}),"\n",(0,i.jsx)(n.p,{children:"Exponent for the godrays contrast."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Default: 4.0"}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"sunglareenabled",children:"SunGlareEnabled"}),"\n",(0,i.jsx)(n.p,{children:"Strength of the effect will be scaled with the weather sunglare setting."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Default: true"}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"timeenabled",children:"TimeEnabled"}),"\n",(0,i.jsx)(n.p,{children:"Strength of the effect will be strongest around sunset/sunrise and not at all during noon."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Default: true"}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"coloring",children:"Coloring"}),"\n",(0,i.jsx)(n.h3,{id:"rayr",children:"RayR"}),"\n",(0,i.jsx)(n.p,{children:"Red channel for custom coloring of the godrays. Use Saturate setting to tweak the global influence."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Default: 1.0"}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"rayg",children:"RayG"}),"\n",(0,i.jsx)(n.p,{children:"Green channel for custom coloring of the godrays. Use Saturate setting to tweak the global influence."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Default: 1.0"}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"rayb",children:"RayB"}),"\n",(0,i.jsx)(n.p,{children:"Blue channel for custom coloring of the godrays. Use Saturate setting to tweak the global influence."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Default: 1.0"}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"saturate",children:"Saturate"}),"\n",(0,i.jsx)(n.p,{children:"Influence of the coloring setting. 0: use the sky/sun color 1: use only the specified color."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Default: 0.0"}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"status",children:"Status"}),"\n",(0,i.jsx)(n.h3,{id:"enabled",children:"Enabled"}),"\n",(0,i.jsx)(n.p,{children:"Screenspace godrays/volumetric rays."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Default: true"}),"\n"]}),"\n",(0,i.jsx)(n.hr,{})]})}function c(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},1151:(e,n,l)=>{l.d(n,{Z:()=>a,a:()=>s});var i=l(7294);const t={},r=i.createContext(t);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);