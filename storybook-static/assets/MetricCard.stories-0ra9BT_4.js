import{within as B,expect as o}from"./index-CH2Su9EI.js";import{M as b}from"./MetricCard-9IP-O6Nz.js";import"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";import"./createLucideIcon-DYb0enIN.js";import"./index-t5q4d8OJ.js";const O={title:"Molecules/MetricCard",component:b,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{title:{control:"text"},value:{control:"number"},currency:{control:"text"},isPercent:{control:"boolean"},showChangeIndicator:{control:"boolean"},isNegative:{control:"boolean"}}},e={args:{title:"Total Revenue",value:125e3},play:async({canvasElement:I})=>{const n=B(I),N=n.getByText("Total Revenue");await o(N).toBeInTheDocument();const P=n.getByText(/125,000/i);await o(P).toBeInTheDocument()}},t={args:{title:"MRR",value:45e3,currency:"USD"}},r={args:{title:"Growth Rate",value:15.4,isPercent:!0,showChangeIndicator:!0,isNegative:!1}},a={args:{title:"Churned Revenue",value:2300,currency:"EUR",showChangeIndicator:!0,isNegative:!0}};var s,c,i,u,l;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    title: 'Total Revenue',
    value: 125000
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const title = canvas.getByText('Total Revenue');
    await expect(title).toBeInTheDocument();
    // formatNumber usually formats 125000 -> 125,000.00 or similar based on locale, 
    // assuming here it might render "125,000" or similar
    const value = canvas.getByText(/125,000/i);
    await expect(value).toBeInTheDocument();
  }
}`,...(i=(c=e.parameters)==null?void 0:c.docs)==null?void 0:i.source},description:{story:"Default MetricCard",...(l=(u=e.parameters)==null?void 0:u.docs)==null?void 0:l.description}}};var d,m,p,g,v;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    title: 'MRR',
    value: 45000,
    currency: 'USD'
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source},description:{story:"MetricCard with Currency",...(v=(g=t.parameters)==null?void 0:g.docs)==null?void 0:v.description}}};var h,y,C,T,w;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    title: 'Growth Rate',
    value: 15.4,
    isPercent: true,
    showChangeIndicator: true,
    isNegative: false
  }
}`,...(C=(y=r.parameters)==null?void 0:y.docs)==null?void 0:C.source},description:{story:"MetricCard with Percentage and Positive Trend",...(w=(T=r.parameters)==null?void 0:T.docs)==null?void 0:w.description}}};var R,x,f,M,D;a.parameters={...a.parameters,docs:{...(R=a.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    title: 'Churned Revenue',
    value: 2300,
    currency: 'EUR',
    showChangeIndicator: true,
    isNegative: true
  }
}`,...(f=(x=a.parameters)==null?void 0:x.docs)==null?void 0:f.source},description:{story:"MetricCard with Currency and Negative Trend",...(D=(M=a.parameters)==null?void 0:M.docs)==null?void 0:D.description}}};const j=["Default","WithCurrency","PercentagePositiveTrend","CurrencyNegativeTrend"];export{a as CurrencyNegativeTrend,e as Default,r as PercentagePositiveTrend,t as WithCurrency,j as __namedExportsOrder,O as default};
