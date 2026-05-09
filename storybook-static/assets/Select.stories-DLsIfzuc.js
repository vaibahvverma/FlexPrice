import{within as s,userEvent as d,waitFor as k,expect as l}from"./index-CH2Su9EI.js";import{F}from"./Select-DmI22CfR.js";import"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";import"./select-D5RImoJM.js";import"./createLucideIcon-DYb0enIN.js";import"./index-t5q4d8OJ.js";import"./index-Ds86VQ4X.js";import"./index-BLHw34Di.js";import"./index-BXrgtLAu.js";import"./index-BEq13kdC.js";import"./utils-BLSKlp9E.js";import"./chevron-up-C0etAR7E.js";import"./check-Dt6k_yGU.js";const U={title:"Atoms/Select",component:F,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},placeholder:{control:"text"},disabled:{control:"boolean"},isRadio:{control:"boolean"},error:{control:"text"}}},c=[{value:"monthly",label:"Monthly Plan"},{value:"annual",label:"Annual Plan"},{value:"custom",label:"Custom Enterprise"}],e={args:{options:c,placeholder:"Choose a plan...",label:"Subscription Plan"},play:async({canvasElement:o,step:r})=>{const p=s(o).getByRole("combobox");await r("Open select dropdown",async()=>{await d.click(p)}),await r("Select an option",async()=>{await k(()=>{l(document.body).toHaveTextContent("Annual Plan")});const M=s(document.body).getByRole("option",{name:/Annual Plan/i});await d.click(M),l(p).toHaveTextContent("Annual Plan")})}},a={args:{options:c,label:"Select a plan",error:"Please select a plan to continue"}},t={args:{options:c,label:"Archived Plan",value:"monthly",disabled:!0},play:async({canvasElement:o})=>{const i=s(o).getByRole("combobox");await l(i).toBeDisabled()}},n={args:{options:[{value:"card",label:"Credit Card",description:"Pay with Visa, Mastercard, etc."},{value:"bank",label:"Bank Transfer",description:"Direct ACH transfer"}],label:"Payment Method",isRadio:!0}};var m,u,b,y,g;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    options: MOCK_OPTIONS,
    placeholder: 'Choose a plan...',
    label: 'Subscription Plan'
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole('combobox');
    await step('Open select dropdown', async () => {
      await userEvent.click(trigger);
    });
    await step('Select an option', async () => {
      await waitFor(() => {
        // Find the portal body where shadcn select renders items
        expect(document.body).toHaveTextContent('Annual Plan');
      });
      // The role in shadcn is typically option
      const option = within(document.body).getByRole('option', {
        name: /Annual Plan/i
      });
      await userEvent.click(option);
      expect(trigger).toHaveTextContent('Annual Plan');
    });
  }
}`,...(b=(u=e.parameters)==null?void 0:u.docs)==null?void 0:b.source},description:{story:"Default Select",...(g=(y=e.parameters)==null?void 0:y.docs)==null?void 0:g.description}}};var v,h,w,P,S;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    options: MOCK_OPTIONS,
    label: 'Select a plan',
    error: 'Please select a plan to continue'
  }
}`,...(w=(h=a.parameters)==null?void 0:h.docs)==null?void 0:w.source},description:{story:"Select with Error",...(S=(P=a.parameters)==null?void 0:P.docs)==null?void 0:S.description}}};var x,C,O,E,A;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    options: MOCK_OPTIONS,
    label: 'Archived Plan',
    value: 'monthly',
    disabled: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole('combobox');
    await expect(trigger).toBeDisabled();
  }
}`,...(O=(C=t.parameters)==null?void 0:C.docs)==null?void 0:O.source},description:{story:"Disabled Select",...(A=(E=t.parameters)==null?void 0:E.docs)==null?void 0:A.description}}};var R,T,f,B,D;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    options: [{
      value: 'card',
      label: 'Credit Card',
      description: 'Pay with Visa, Mastercard, etc.'
    }, {
      value: 'bank',
      label: 'Bank Transfer',
      description: 'Direct ACH transfer'
    }],
    label: 'Payment Method',
    isRadio: true
  }
}`,...(f=(T=n.parameters)==null?void 0:T.docs)==null?void 0:f.source},description:{story:"Radio Style Select Items",...(D=(B=n.parameters)==null?void 0:B.docs)==null?void 0:D.description}}};const X=["Default","WithError","Disabled","RadioStyle"];export{e as Default,t as Disabled,n as RadioStyle,a as WithError,X as __namedExportsOrder,U as default};
