import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{within as y,expect as v,userEvent as f}from"./index-CH2Su9EI.js";import{c as h}from"./utils-BLSKlp9E.js";import{c as b}from"./createLucideIcon-DYb0enIN.js";import"./index-yBjzXJbu.js";import"./index-t5q4d8OJ.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=b("Inbox",[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12",key:"o97t9d"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}]]),w=({icon:o,title:c,description:t,actionLabel:a,onAction:n,className:x})=>e.jsxs("div",{className:h("flex flex-col items-center justify-center p-12 text-center h-[500px]","border border-dashed border-[#E2E8F0] rounded-[6px] bg-[#fafafa]",x),children:[o&&e.jsx("div",{className:"mb-6 text-gray-400 flex items-center justify-center w-16 h-16 rounded-full bg-gray-100",children:o}),e.jsx("h3",{className:"text-[20px] font-semibold text-gray-900 mb-2",children:c}),t&&e.jsx("p",{className:"text-[15px] text-gray-500 max-w-[380px] mb-8 leading-relaxed",children:t}),a&&n&&e.jsx("button",{onClick:n,className:"inline-flex items-center px-4 py-2 rounded-[7px] text-sm font-medium bg-[#092E44] text-white hover:opacity-90 transition-opacity",children:a})]}),T={title:"Organisms/EmptyState",component:w,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{title:{control:"text"},description:{control:"text"},actionLabel:{control:"text"}}},i={args:{title:"No invoices found",description:"You do not have any invoices yet. Create your first invoice to get paid.",actionLabel:"Create Invoice",icon:e.jsx(g,{className:"w-12 h-12"}),onAction:()=>console.log("Create invoice clicked")},play:async({canvasElement:o,step:c})=>{const t=y(o),a=t.getByText("No invoices found");await v(a).toBeInTheDocument(),await c("Click action button",async()=>{const n=t.getByRole("button",{name:/Create Invoice/i});await f.click(n)})}},s={args:{title:"No Data Available",description:"There is no analytical data for this time period."}};var r,l,d;i.parameters={...i.parameters,docs:{...(r=i.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    title: 'No invoices found',
    description: 'You do not have any invoices yet. Create your first invoice to get paid.',
    actionLabel: 'Create Invoice',
    icon: <Inbox className="w-12 h-12" />,
    onAction: () => console.log('Create invoice clicked')
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const title = canvas.getByText('No invoices found');
    await expect(title).toBeInTheDocument();
    await step('Click action button', async () => {
      const button = canvas.getByRole('button', {
        name: /Create Invoice/i
      });
      await userEvent.click(button);
    });
  }
}`,...(d=(l=i.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var m,p,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    title: 'No Data Available',
    description: 'There is no analytical data for this time period.'
  }
}`,...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const A=["Default","WithoutAction"];export{i as Default,s as WithoutAction,A as __namedExportsOrder,T as default};
