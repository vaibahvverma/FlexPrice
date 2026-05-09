import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{c as l}from"./createLucideIcon-DYb0enIN.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=l("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=l("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]),w=({title:a,value:t,currency:o,isPercent:c=!1,showChangeIndicator:m=!1,isNegative:s=!1})=>{const p=s?"text-[#DC2626]":"text-[#16A34A]",x=n=>{var r;try{return((r=new Intl.NumberFormat("en",{style:"currency",currency:n,maximumFractionDigits:0}).formatToParts(0).find(d=>d.type==="currency"))==null?void 0:r.value)??n}catch{return n}},i=(n,r=2)=>n.toLocaleString("en-US",{minimumFractionDigits:r,maximumFractionDigits:r}),u=()=>c?`${i(t,2)}%`:o?`${x(o)} ${i(t,2)}`:i(t,2);return e.jsxs("div",{className:"bg-white border border-[#E5E7EB] p-[25px] flex flex-col gap-3 rounded-md min-w-[200px]",children:[e.jsx("p",{className:"text-[14px] leading-[21px] text-[#4B5563] font-normal",children:a}),e.jsxs("p",{className:"text-[24px] leading-[28px] font-medium text-[#111827] flex items-center gap-2",children:[u(),m&&e.jsx("span",{className:`inline-block ${p}`,children:s?e.jsx(f,{size:18}):e.jsx(y,{size:18})})]})]})};export{w as M};
