import{within as h,expect as g}from"./index-CH2Su9EI.js";import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";const f=({title:s="Graduated Pricing",description:l="Pricing scales based on usage volume.",currency:n="$",tiers:r})=>e.jsxs("div",{className:"w-full border border-[#E2E8F0] rounded-[6px] overflow-hidden bg-white",children:[e.jsxs("div",{className:"px-6 py-4 border-b border-[#E2E8F0]",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900",children:s}),e.jsx("p",{className:"text-sm text-gray-500 mt-0.5",children:l})]}),e.jsx("div",{className:"overflow-auto",children:e.jsxs("table",{className:"w-full caption-bottom text-sm",children:[e.jsx("thead",{className:"bg-[#f9f9f9] border-b border-[#E2E8F0]",children:e.jsxs("tr",{children:[e.jsx("th",{className:"h-10 px-4 text-left text-[13px] font-medium text-[#64748B]",children:"Tier Volume"}),e.jsx("th",{className:"h-10 px-4 text-right text-[13px] font-medium text-[#64748B]",children:"Flat Fee"}),e.jsx("th",{className:"h-10 px-4 text-right text-[13px] font-medium text-[#64748B]",children:"Per Unit"})]})}),e.jsx("tbody",{children:r.map((t,i)=>{const o=i===0?0:r[i-1].upTo,x=o==="unlimited"?0:o+1,m=t.upTo==="unlimited"?"∞":t.upTo.toLocaleString(),u=i===r.length-1;return e.jsxs("tr",{className:`h-12 hover:bg-[#fafafa] transition-colors ${u?"":"border-b border-[#E2E8F0]"}`,children:[e.jsxs("td",{className:"px-4 py-2 text-[14px] font-medium text-gray-900",children:[x.toLocaleString()," – ",m]}),e.jsx("td",{className:"px-4 py-2 text-[14px] text-right text-gray-700",children:t.flatFee>0?`${n}${t.flatFee.toFixed(2)}`:e.jsx("span",{className:"text-gray-400",children:"—"})}),e.jsx("td",{className:"px-4 py-2 text-[14px] text-right text-gray-700",children:t.perUnit>0?`${n}${t.perUnit.toFixed(4)}`:e.jsx("span",{className:"text-gray-400",children:"—"})})]},t.id)})})]})})]}),y={title:"Organisms/PricingTierTable",component:f,parameters:{layout:"padded"},tags:["autodocs"]},a={args:{title:"API Calls Pricing",description:"Volume-based pricing for API usage",currency:"$",tiers:[{id:"1",upTo:1e3,flatFee:0,perUnit:.05},{id:"2",upTo:5e3,flatFee:50,perUnit:.04},{id:"3",upTo:1e4,flatFee:200,perUnit:.03},{id:"4",upTo:"unlimited",flatFee:400,perUnit:.02}]},play:async({canvasElement:s})=>{const n=h(s).getByText("API Calls Pricing");await g(n).toBeInTheDocument()}};var c,d,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    title: 'API Calls Pricing',
    description: 'Volume-based pricing for API usage',
    currency: '$',
    tiers: [{
      id: '1',
      upTo: 1000,
      flatFee: 0,
      perUnit: 0.05
    }, {
      id: '2',
      upTo: 5000,
      flatFee: 50,
      perUnit: 0.04
    }, {
      id: '3',
      upTo: 10000,
      flatFee: 200,
      perUnit: 0.03
    }, {
      id: '4',
      upTo: 'unlimited',
      flatFee: 400,
      perUnit: 0.02
    }]
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const title = canvas.getByText('API Calls Pricing');
    await expect(title).toBeInTheDocument();
  }
}`,...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const F=["Default"];export{a as Default,F as __namedExportsOrder,y as default};
