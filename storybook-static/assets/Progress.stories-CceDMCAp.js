import{within as B,expect as C}from"./index-CH2Su9EI.js";import{P as h}from"./Progress-DuhiNYV7.js";import"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";import"./index-t5q4d8OJ.js";import"./index-DZsCB0B4.js";import"./index-Ds86VQ4X.js";import"./index-BLHw34Di.js";import"./index-BNNQlCw5.js";import"./index-BEq13kdC.js";import"./utils-BLSKlp9E.js";const H={title:"Molecules/UsageBar",component:h,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{value:{control:{type:"range",min:0,max:100}},indicatorColor:{control:"text"},backgroundColor:{control:"text"},label:{control:"text"},labelColor:{control:"text"}}},e={args:{value:45,label:"450 / 1000 API calls used"},play:async({canvasElement:y})=>{const A=B(y).getByText("450 / 1000 API calls used");await C(A).toBeInTheDocument()}},a={args:{value:95,label:"950 / 1000 API calls used (Approaching limit)",indicatorColor:"bg-destructive",labelColor:"text-destructive"}},r={args:{value:12,label:"12 / 1000 GB storage used",indicatorColor:"bg-[#16A34A]"}};var t,o,s,l,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    value: 45,
    label: '450 / 1000 API calls used'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const label = canvas.getByText('450 / 1000 API calls used');
    await expect(label).toBeInTheDocument();
  }
}`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source},description:{story:"Default UsageBar",...(n=(l=e.parameters)==null?void 0:l.docs)==null?void 0:n.description}}};var c,i,p,d,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    value: 95,
    label: '950 / 1000 API calls used (Approaching limit)',
    indicatorColor: 'bg-destructive',
    labelColor: 'text-destructive'
  }
}`,...(p=(i=a.parameters)==null?void 0:i.docs)==null?void 0:p.source},description:{story:"Danger UsageBar (Near Limit)",...(m=(d=a.parameters)==null?void 0:d.docs)==null?void 0:m.description}}};var u,g,b,v,x;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    value: 12,
    label: '12 / 1000 GB storage used',
    indicatorColor: 'bg-[#16A34A]'
  }
}`,...(b=(g=r.parameters)==null?void 0:g.docs)==null?void 0:b.source},description:{story:"Success UsageBar",...(x=(v=r.parameters)==null?void 0:v.docs)==null?void 0:x.description}}};const _=["Default","NearLimit","Healthy"];export{e as Default,r as Healthy,a as NearLimit,_ as __namedExportsOrder,H as default};
