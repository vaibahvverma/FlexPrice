import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{within as E,userEvent as j,waitFor as W,expect as C}from"./index-CH2Su9EI.js";import{T as N,I as A}from"./Tooltip-aQjsWIR5.js";import{B as F}from"./Button-CPsOBfOK.js";import"./index-yBjzXJbu.js";import"./createLucideIcon-DYb0enIN.js";import"./index-t5q4d8OJ.js";import"./tooltip-BLwtNoTf.js";import"./index-BXrgtLAu.js";import"./index-BEq13kdC.js";import"./index-Ds86VQ4X.js";import"./index-BLHw34Di.js";import"./utils-BLSKlp9E.js";import"./index-BNNQlCw5.js";import"./index-1evVQkiP.js";import"./loader-circle-BvW7KSMh.js";const Z={title:"Atoms/Tooltip",component:N,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{content:{control:"text",description:"The content of the tooltip"},delayDuration:{control:"number",description:"Delay before tooltip shows up (ms)"},side:{control:"select",options:["top","right","bottom","left"]},align:{control:"select",options:["start","center","end"]}}},t={args:{content:"This is a helpful tooltip",children:a.jsx("span",{children:"Hover me"})},play:async({canvasElement:I,step:n})=>{const H=E(I).getByText("Hover me");await n("Hover over trigger",async()=>{await j.hover(H)}),await n("Wait for tooltip content",async()=>{await W(()=>{C(document.body).toHaveTextContent("This is a helpful tooltip")})})}},o={args:{content:"Click to save your changes",children:a.jsx(F,{variant:"outline",children:"Save"})}},e={args:{content:"More information about this feature",delayDuration:500,children:a.jsx(A,{className:"w-5 h-5 text-muted-foreground hover:text-foreground cursor-pointer transition-colors"})}},r={args:{content:"Appears on the right",side:"right",children:a.jsx("span",{className:"border-b border-dashed border-primary cursor-help",children:"Side tooltip"})}};var s,i,c,p,d;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    content: 'This is a helpful tooltip',
    children: <span>Hover me</span>
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByText('Hover me');
    await step('Hover over trigger', async () => {
      await userEvent.hover(trigger);
    });
    await step('Wait for tooltip content', async () => {
      await waitFor(() => {
        // Tooltip portals to body, so we need to search the document body
        expect(document.body).toHaveTextContent('This is a helpful tooltip');
      });
    });
  }
}`,...(c=(i=t.parameters)==null?void 0:i.docs)==null?void 0:c.source},description:{story:"Default Tooltip",...(d=(p=t.parameters)==null?void 0:p.docs)==null?void 0:d.description}}};var l,m,u,h,g;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    content: 'Click to save your changes',
    children: <Button variant="outline">Save</Button>
  }
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source},description:{story:"Tooltip with a Button trigger",...(g=(h=o.parameters)==null?void 0:h.docs)==null?void 0:g.description}}};var y,f,v,x,w;e.parameters={...e.parameters,docs:{...(y=e.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    content: 'More information about this feature',
    delayDuration: 500,
    children: <Info className="w-5 h-5 text-muted-foreground hover:text-foreground cursor-pointer transition-colors" />
  }
}`,...(v=(f=e.parameters)==null?void 0:f.docs)==null?void 0:v.source},description:{story:"Informational Icon Tooltip with delay",...(w=(x=e.parameters)==null?void 0:x.docs)==null?void 0:w.description}}};var T,b,S,B,D;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    content: 'Appears on the right',
    side: 'right',
    children: <span className="border-b border-dashed border-primary cursor-help">Side tooltip</span>
  }
}`,...(S=(b=r.parameters)==null?void 0:b.docs)==null?void 0:S.source},description:{story:"Tooltip on the right side",...(D=(B=r.parameters)==null?void 0:B.docs)==null?void 0:D.description}}};const $=["Default","WithButton","InfoIconWithDelay","RightSide"];export{t as Default,e as InfoIconWithDelay,r as RightSide,o as WithButton,$ as __namedExportsOrder,Z as default};
