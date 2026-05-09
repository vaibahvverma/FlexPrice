import{j}from"./jsx-runtime-Cf8x2fCZ.js";import{within as N,expect as F}from"./index-CH2Su9EI.js";import{C as W}from"./Chip-BjwxSOVN.js";import{C as k}from"./check-Dt6k_yGU.js";import{C as _}from"./circle-alert-CC2fGpAK.js";import"./index-yBjzXJbu.js";import"./utils-BLSKlp9E.js";import"./createLucideIcon-DYb0enIN.js";import"./index-t5q4d8OJ.js";const Q={title:"Atoms/Chip",component:W,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","success","warning","failed","info"],description:"The visual style variant of the chip"},label:{control:"text",description:"The text label of the chip"},disabled:{control:"boolean"}}},a={args:{label:"Draft",variant:"default"},play:async({canvasElement:B})=>{const E=N(B).getByText("Draft");await F(E).toBeInTheDocument()}},e={args:{label:"Active",variant:"success",icon:j.jsx(k,{className:"w-3 h-3"})}},r={args:{label:"Past Due",variant:"warning",icon:j.jsx(_,{className:"w-3 h-3"})}},s={args:{label:"Void",variant:"failed"}},t={args:{label:"Processing",variant:"info"}};var o,n,c,i,p;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    label: 'Draft',
    variant: 'default'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const chip = canvas.getByText('Draft');
    await expect(chip).toBeInTheDocument();
  }
}`,...(c=(n=a.parameters)==null?void 0:n.docs)==null?void 0:c.source},description:{story:"Default Chip",...(p=(i=a.parameters)==null?void 0:i.docs)==null?void 0:p.description}}};var l,m,d,u,f;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    label: 'Active',
    variant: 'success',
    icon: <Check className="w-3 h-3" />
  }
}`,...(d=(m=e.parameters)==null?void 0:m.docs)==null?void 0:d.source},description:{story:"Success Variant (Active Plan)",...(f=(u=e.parameters)==null?void 0:u.docs)==null?void 0:f.description}}};var g,h,v,b,y;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Past Due',
    variant: 'warning',
    icon: <AlertCircle className="w-3 h-3" />
  }
}`,...(v=(h=r.parameters)==null?void 0:h.docs)==null?void 0:v.source},description:{story:"Warning Variant",...(y=(b=r.parameters)==null?void 0:b.docs)==null?void 0:y.description}}};var x,w,D,C,S;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'Void',
    variant: 'failed'
  }
}`,...(D=(w=s.parameters)==null?void 0:w.docs)==null?void 0:D.source},description:{story:"Failed Variant",...(S=(C=s.parameters)==null?void 0:C.docs)==null?void 0:S.description}}};var T,A,V,I,P;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: 'Processing',
    variant: 'info'
  }
}`,...(V=(A=t.parameters)==null?void 0:A.docs)==null?void 0:V.source},description:{story:"Info Variant",...(P=(I=t.parameters)==null?void 0:I.docs)==null?void 0:P.description}}};const U=["Default","Success","Warning","Failed","Info"];export{a as Default,s as Failed,t as Info,e as Success,r as Warning,U as __namedExportsOrder,Q as default};
