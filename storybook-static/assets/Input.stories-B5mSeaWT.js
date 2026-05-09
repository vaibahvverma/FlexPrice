import{j}from"./jsx-runtime-Cf8x2fCZ.js";import{within as V,expect as c,userEvent as N}from"./index-CH2Su9EI.js";import{I as F}from"./Input-B-SdZ4LB.js";import"./index-yBjzXJbu.js";import"./index-t5q4d8OJ.js";import"./utils-BLSKlp9E.js";const q={title:"Atoms/Input",component:F,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["text","number","formatted-number","integer"],description:"The validation variant of the input"},disabled:{control:"boolean"},error:{control:"text"}}},r={args:{placeholder:"Enter text here"},play:async({canvasElement:o})=>{const e=V(o).getByPlaceholderText("Enter text here");await c(e).toBeInTheDocument(),await N.type(e,"Hello world"),await c(e).toHaveValue("Hello world")}},a={args:{label:"Email Address",placeholder:"Enter your email",type:"email"}},t={args:{label:"Password",type:"password",error:"Password must be at least 8 characters long",placeholder:"Enter your password"}},s={args:{label:"Username",placeholder:"Cannot edit this",disabled:!0,value:"flexprice_user"},play:async({canvasElement:o})=>{const e=V(o).getByDisplayValue("flexprice_user");await c(e).toBeDisabled()}},n={args:{label:"Amount",placeholder:"0.00",variant:"formatted-number",inputPrefix:j.jsx("span",{className:"text-muted-foreground",children:"$"})}};var l,i,p,d,u;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter text here'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText('Enter text here');
    await expect(input).toBeInTheDocument();
    await userEvent.type(input, 'Hello world');
    await expect(input).toHaveValue('Hello world');
  }
}`,...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source},description:{story:"Default text input.",...(u=(d=r.parameters)==null?void 0:d.docs)==null?void 0:u.description}}};var m,h,y,x,b;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Email Address',
    placeholder: 'Enter your email',
    type: 'email'
  }
}`,...(y=(h=a.parameters)==null?void 0:h.docs)==null?void 0:y.source},description:{story:"Input with a label.",...(b=(x=a.parameters)==null?void 0:x.docs)==null?void 0:b.description}}};var g,w,v,f,E;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    type: 'password',
    error: 'Password must be at least 8 characters long',
    placeholder: 'Enter your password'
  }
}`,...(v=(w=t.parameters)==null?void 0:w.docs)==null?void 0:v.source},description:{story:"Input in an error state.",...(E=(f=t.parameters)==null?void 0:f.docs)==null?void 0:E.description}}};var D,B,P,I,H;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: 'Username',
    placeholder: 'Cannot edit this',
    disabled: true,
    value: 'flexprice_user'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByDisplayValue('flexprice_user');
    await expect(input).toBeDisabled();
  }
}`,...(P=(B=s.parameters)==null?void 0:B.docs)==null?void 0:P.source},description:{story:"Disabled input.",...(H=(I=s.parameters)==null?void 0:I.docs)==null?void 0:H.description}}};var T,_,A,S,C;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: 'Amount',
    placeholder: '0.00',
    variant: 'formatted-number',
    inputPrefix: <span className="text-muted-foreground">$</span>
  }
}`,...(A=(_=n.parameters)==null?void 0:_.docs)==null?void 0:A.source},description:{story:"Number formatted input with currency prefix.",...(C=(S=n.parameters)==null?void 0:S.docs)==null?void 0:C.description}}};const z=["Default","WithLabel","WithError","Disabled","FormattedCurrency"];export{r as Default,s as Disabled,n as FormattedCurrency,t as WithError,a as WithLabel,z as __namedExportsOrder,q as default};
