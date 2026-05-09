import{within as v,expect as C}from"./index-CH2Su9EI.js";import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";const z=({size:e=24,className:a=""})=>n.jsxs("svg",{className:`animate-spin ${a}`,style:{width:e,height:e},xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[n.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),n.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),T={title:"Atoms/Spinner",component:z,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:{type:"range",min:12,max:100,step:4},description:"The size of the spinner in pixels"},className:{control:"text",description:"Additional CSS classes to apply to the spinner"}}},s={args:{size:24},play:async({canvasElement:e})=>{v(e);const a=e.querySelector("svg.animate-spin");await C(a).toBeInTheDocument()}},t={args:{size:64,className:"text-primary"}},r={args:{size:32,className:"text-destructive"}};var o,i,c,p,m;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    size: 24
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    // The spinner is an SVG with no text, we can query it by its class or tag
    // Since we don't have a specific aria-label, we'll just check if the SVG exists
    const spinner = canvasElement.querySelector('svg.animate-spin');
    await expect(spinner).toBeInTheDocument();
  }
}`,...(c=(i=s.parameters)==null?void 0:i.docs)==null?void 0:c.source},description:{story:"Default Spinner",...(m=(p=s.parameters)==null?void 0:p.docs)==null?void 0:m.description}}};var l,d,u,g,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    size: 64,
    className: 'text-primary'
  }
}`,...(u=(d=t.parameters)==null?void 0:d.docs)==null?void 0:u.source},description:{story:"Large Spinner",...(x=(g=t.parameters)==null?void 0:g.docs)==null?void 0:x.description}}};var y,h,S,w,f;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    size: 32,
    className: 'text-destructive'
  }
}`,...(S=(h=r.parameters)==null?void 0:h.docs)==null?void 0:S.source},description:{story:"Custom Color Spinner",...(f=(w=r.parameters)==null?void 0:w.docs)==null?void 0:f.description}}};const E=["Default","Large","CustomColor"];export{r as CustomColor,s as Default,t as Large,E as __namedExportsOrder,T as default};
