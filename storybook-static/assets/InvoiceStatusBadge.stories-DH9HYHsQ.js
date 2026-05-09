import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import{c as h}from"./utils-BLSKlp9E.js";import{C as j}from"./circle-alert-CC2fGpAK.js";import{C as k}from"./circle-x-6f_XFf-A.js";import{C as y}from"./clock-SI7NFszx.js";import{C as A}from"./check-Dt6k_yGU.js";import"./index-yBjzXJbu.js";import"./createLucideIcon-DYb0enIN.js";import"./index-t5q4d8OJ.js";const c={paid:{label:"Paid",bg:"#ECFBE4",text:"#377E6A",border:"#d1e9ca",Icon:A},draft:{label:"Draft",bg:"#F0F2F5",text:"#57646E",border:"#e2e5e9"},open:{label:"Open",bg:"#EFF8FF",text:"#2F6FE2",border:"#bfdbfe",Icon:y},void:{label:"Void",bg:"#FEE2E2",text:"#DC2626",border:"#fecaca",Icon:k},uncollectible:{label:"Uncollectible",bg:"#FFF7ED",text:"#C2410C",border:"#fed7aa",Icon:j}},B=({status:C,className:E})=>{const I=c[C]??c.draft,{label:S,bg:v,text:D,border:O,Icon:t}=I;return s.jsxs("span",{className:h("inline-flex items-center gap-1 px-2 py-0.5 rounded-[8px] text-[13px] font-normal select-none",E),style:{backgroundColor:v,color:D,border:`1px solid ${O}`},children:[t&&s.jsx(t,{className:"w-3 h-3 shrink-0"}),S]})},R={title:"Molecules/InvoiceStatusBadge",component:B,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{status:{control:"select",options:["paid","draft","open","void","uncollectible"]}}},e={args:{status:"paid"}},r={args:{status:"open"}},a={args:{status:"draft"}},o={args:{status:"void"}};var n,d,p;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    status: 'paid'
  }
}`,...(p=(d=e.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var i,l,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    status: 'open'
  }
}`,...(m=(l=r.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var u,b,g;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    status: 'draft'
  }
}`,...(g=(b=a.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var f,x,F;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    status: 'void'
  }
}`,...(F=(x=o.parameters)==null?void 0:x.docs)==null?void 0:F.source}}};const X=["Paid","Open","Draft","Void"];export{a as Draft,r as Open,e as Paid,o as Void,X as __namedExportsOrder,R as default};
