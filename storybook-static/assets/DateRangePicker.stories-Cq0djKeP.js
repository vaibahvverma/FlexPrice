import{within as tt,userEvent as ot}from"./index-CH2Su9EI.js";import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import{r as i}from"./index-t5q4d8OJ.js";import{s as et,a as y,c as b,t as w,f as C,P as at,b as rt,B as st,C as nt,d as it,e as ct}from"./format_date-IbeRT-3C.js";import{c as g}from"./utils-BLSKlp9E.js";import"./select-D5RImoJM.js";import"./tooltip-BLwtNoTf.js";import{X as lt}from"./x-BDoriEd4.js";import"./index-yBjzXJbu.js";import"./createLucideIcon-DYb0enIN.js";import"./index-BXrgtLAu.js";import"./index-BEq13kdC.js";import"./index-Ds86VQ4X.js";import"./index-BLHw34Di.js";import"./chevron-up-C0etAR7E.js";import"./index-BNNQlCw5.js";import"./chevron-right-CgyvJSuo.js";import"./check-Dt6k_yGU.js";import"./index-1evVQkiP.js";import"./circle-x-6f_XFf-A.js";import"./index-DZsCB0B4.js";const mt=({startDate:e,endDate:c,onChange:n,placeholder:D="Select Range",disabled:d,title:h,minDate:A,maxDate:V,className:v,labelClassName:Y,popoverClassName:_,popoverTriggerClassName:L,popoverContentClassName:W})=>{const[X,q]=i.useState(!1),[t,l]=i.useState(void 0),[a,G]=i.useState("local"),H=et(new Date),x=i.useCallback((o,r)=>{const f=a==="utc"?y(o.getFullYear(),o.getMonth(),o.getDate(),"utc"):o,R=a==="utc"?y(r.getFullYear(),r.getMonth(),r.getDate(),"utc"):r;return{from:f,to:R}},[a]),J=i.useCallback(o=>{if(o)if(o.from&&o.to){const r=x(o.from,o.to);l(r),n({startDate:r.from,endDate:r.to})}else n({startDate:o.from,endDate:o.to})},[n,x]),K=i.useCallback(o=>{if(t!=null&&t.from&&(t!=null&&t.to)){const r=b(t.from,a,o),f=b(t.to,a,o);l({from:r,to:f}),n({startDate:r,endDate:f})}G(o)},[t,a,n]);i.useEffect(()=>{l(e&&c?{from:e,to:c}:void 0)},[e,c]);const Q=t!=null&&t.from&&(t!=null&&t.to)?{from:w(t.from,a),to:w(t.to,a)}:void 0,U=t!=null&&t.from&&(t!=null&&t.to)?`${C(t.from,a)} - ${C(t.to,a)}`:D;return s.jsxs(at,{open:X,onOpenChange:q,children:[s.jsx(rt,{className:L,disabled:d,children:s.jsxs("div",{className:"flex flex-col ",children:[h&&s.jsx("div",{className:g("text-sm font-medium mb-1 w-full text-start",Y),children:h}),s.jsxs("div",{className:"relative",children:[s.jsxs(st,{variant:"outline",className:g(" justify-start text-left font-normal !h-10",!(t!=null&&t.from)||!(t!=null&&t.to)?"text-muted-foreground opacity-70 hover:text-muted-foreground":"text-black",!v&&(t!=null&&t.from&&(t!=null&&t.to)?"w-[260px]":"w-[240px]"),"transition-all duration-300 ease-in-out",v),children:[s.jsx(nt,{className:"mr-0 h-4 w-4"}),s.jsx("span",{children:U})]}),(t==null?void 0:t.from)&&(t==null?void 0:t.to)&&s.jsx(lt,{className:"ml-2 h-4 w-4 absolute right-2 top-[12px] cursor-pointer",onClick:o=>{o.stopPropagation(),l(void 0),n({startDate:void 0,endDate:void 0})}})]})]})}),s.jsx(it,{className:g("w-auto flex gap-4 p-2",_,W),align:"start",children:s.jsx(ct,{disabled:d,mode:"range",selected:Q,onSelect:J,fromDate:A,toDate:V,defaultMonth:H,numberOfMonths:2,timezone:a,onTimezoneChange:K})})]})},Tt={title:"Molecules/DateRangePicker",component:mt,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{title:{control:"text"},placeholder:{control:"text"},disabled:{control:"boolean"}}},m={args:{title:"Filter by Date",onChange:e=>console.log(e)},play:async({canvasElement:e,step:c})=>{const D=tt(e).getByRole("button",{name:/Select Range/i});await c("Open calendar",async()=>{await ot.click(D),await new Promise(d=>setTimeout(d,200))})}},p={args:{title:"Billing Period",startDate:new Date(2023,0,1),endDate:new Date(2023,0,31),onChange:e=>console.log(e)}},u={args:{title:"Archived Data",disabled:!0,onChange:e=>console.log(e)}};var P,j,S,k,E;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    title: 'Filter by Date',
    onChange: dates => console.log(dates)
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole('button', {
      name: /Select Range/i
    });
    await step('Open calendar', async () => {
      await userEvent.click(trigger);
      // Wait for popover to open
      await new Promise(r => setTimeout(r, 200));
    });
  }
}`,...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source},description:{story:"Default DateRangePicker",...(E=(k=m.parameters)==null?void 0:k.docs)==null?void 0:E.description}}};var O,M,N,T,B;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    title: 'Billing Period',
    startDate: new Date(2023, 0, 1),
    endDate: new Date(2023, 0, 31),
    onChange: dates => console.log(dates)
  }
}`,...(N=(M=p.parameters)==null?void 0:M.docs)==null?void 0:N.source},description:{story:"Pre-selected Date Range",...(B=(T=p.parameters)==null?void 0:T.docs)==null?void 0:B.description}}};var F,z,I,Z,$;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    title: 'Archived Data',
    disabled: true,
    onChange: dates => console.log(dates)
  }
}`,...(I=(z=u.parameters)==null?void 0:z.docs)==null?void 0:I.source},description:{story:"Disabled",...($=(Z=u.parameters)==null?void 0:Z.docs)==null?void 0:$.description}}};const Bt=["Default","PreSelected","Disabled"];export{m as Default,u as Disabled,p as PreSelected,Bt as __namedExportsOrder,Tt as default};
