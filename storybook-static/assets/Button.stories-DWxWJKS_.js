import{j as G}from"./jsx-runtime-Cf8x2fCZ.js";import{within as d,expect as i}from"./index-CH2Su9EI.js";import{B as V}from"./Button-CPsOBfOK.js";import{S as F}from"./settings-DUu4Q9DV.js";import"./index-yBjzXJbu.js";import"./index-t5q4d8OJ.js";import"./index-BNNQlCw5.js";import"./index-BEq13kdC.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";import"./loader-circle-BvW7KSMh.js";import"./createLucideIcon-DYb0enIN.js";const et={title:"Atoms/Button",component:V,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","black","destructive","outline","secondary","ghost","link"],description:"The visual variant of the button"},size:{control:"select",options:["default","sm","lg","icon","xs"],description:"The size of the button"},isLoading:{control:"boolean",description:"Whether the button is in a loading state"},disabled:{control:"boolean",description:"Whether the button is disabled"},onClick:{action:"clicked"}}},n={args:{children:"Button",variant:"default",size:"default"},play:async({canvasElement:e})=>{const t=d(e).getByRole("button",{name:/Button/i});await i(t).toBeInTheDocument(),await i(t).not.toBeDisabled()}},a={args:{children:"Loading Button",isLoading:!0},play:async({canvasElement:e})=>{const t=d(e).getByRole("button");await i(t).toBeDisabled();const A=t.querySelector("svg.animate-spin");await i(A).toBeInTheDocument()}},o={args:{children:"Disabled Button",disabled:!0},play:async({canvasElement:e})=>{const t=d(e).getByRole("button",{name:/Disabled Button/i});await i(t).toBeDisabled()}},s={args:{children:"Delete",variant:"destructive"}},c={args:{children:"Cancel",variant:"outline"}},r={args:{children:"Settings",prefixIcon:G.jsx(F,{className:"w-4 h-4"})}};var u,p,m,g,b;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    variant: 'default',
    size: 'default'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', {
      name: /Button/i
    });
    await expect(button).toBeInTheDocument();
    await expect(button).not.toBeDisabled();
  }
}`,...(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.source},description:{story:"Default usage of the Button component.",...(b=(g=n.parameters)==null?void 0:g.docs)==null?void 0:b.description}}};var h,v,B,y,D;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: 'Loading Button',
    isLoading: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await expect(button).toBeDisabled();
    // The loading spinner SVG should be present
    const spinner = button.querySelector('svg.animate-spin');
    await expect(spinner).toBeInTheDocument();
  }
}`,...(B=(v=a.parameters)==null?void 0:v.docs)==null?void 0:B.source},description:{story:"Button in a loading state.",...(D=(y=a.parameters)==null?void 0:y.docs)==null?void 0:D.description}}};var f,w,x,S,E;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: 'Disabled Button',
    disabled: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', {
      name: /Disabled Button/i
    });
    await expect(button).toBeDisabled();
  }
}`,...(x=(w=o.parameters)==null?void 0:w.docs)==null?void 0:x.source},description:{story:"Disabled button.",...(E=(S=o.parameters)==null?void 0:S.docs)==null?void 0:E.description}}};var I,T,L,R,k;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    children: 'Delete',
    variant: 'destructive'
  }
}`,...(L=(T=s.parameters)==null?void 0:T.docs)==null?void 0:L.source},description:{story:"Button with variants",...(k=(R=s.parameters)==null?void 0:R.docs)==null?void 0:k.description}}};var z,W,j;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    children: 'Cancel',
    variant: 'outline'
  }
}`,...(j=(W=c.parameters)==null?void 0:W.docs)==null?void 0:j.source}}};var C,O,q,N,_;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    children: 'Settings',
    prefixIcon: <Settings className="w-4 h-4" />
  }
}`,...(q=(O=r.parameters)==null?void 0:O.docs)==null?void 0:q.source},description:{story:"Button with an icon",...(_=(N=r.parameters)==null?void 0:N.docs)==null?void 0:_.description}}};const nt=["Default","Loading","Disabled","Destructive","Outline","WithIcon"];export{n as Default,s as Destructive,o as Disabled,a as Loading,c as Outline,r as WithIcon,nt as __namedExportsOrder,et as default};
