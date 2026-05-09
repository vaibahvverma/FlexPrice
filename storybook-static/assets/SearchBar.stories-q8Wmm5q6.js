import{within as $,userEvent as H,expect as q}from"./index-CH2Su9EI.js";import{j as w}from"./jsx-runtime-Cf8x2fCZ.js";import{r as n,R as P}from"./index-t5q4d8OJ.js";import{S as z,X as I}from"./x-BDoriEd4.js";import"./index-yBjzXJbu.js";import"./createLucideIcon-DYb0enIN.js";function J(e,r,u,s){var i=this,a=n.useRef(null),l=n.useRef(0),f=n.useRef(0),c=n.useRef(null),m=n.useRef([]),v=n.useRef(),g=n.useRef(),L=n.useRef(e),y=n.useRef(!0),d=n.useRef(),j=n.useRef();L.current=e;var A=typeof window<"u",b=!r&&r!==0&&A;if(typeof e!="function")throw new TypeError("Expected a function");r=+r||0;var B=!!(u=u||{}).leading,V=!("trailing"in u)||!!u.trailing,S=!!u.flushOnExit&&V,x="maxWait"in u,F="debounceOnServer"in u&&!!u.debounceOnServer,k=x?Math.max(+u.maxWait||0,r):null,M=n.useMemo(function(){var p=function(t){var o=m.current,h=v.current;return m.current=v.current=null,l.current=t,f.current=f.current||t,g.current=L.current.apply(h,o)},E=function(t,o){b&&cancelAnimationFrame(c.current),c.current=b?requestAnimationFrame(t):setTimeout(t,o)},N=function(t){if(!y.current)return!1;var o=t-a.current;return!a.current||o>=r||o<0||x&&t-l.current>=k},O=function(t){return c.current=null,V&&m.current?p(t):(m.current=v.current=null,g.current)},D=function t(){var o=Date.now();if(B&&f.current===l.current&&_(),N(o))return O(o);if(y.current){var h=r-(o-a.current),C=x?Math.min(h,k-(o-l.current)):h;E(t,C)}},_=function(){s&&s({})},R=function(){if(A||F){var t,o=Date.now(),h=N(o);if(m.current=[].slice.call(arguments),v.current=i,a.current=o,S&&!d.current&&(d.current=function(){var C;((C=global.document)==null?void 0:C.visibilityState)==="hidden"&&j.current.flush()},(t=global.document)==null||t.addEventListener==null||t.addEventListener("visibilitychange",d.current)),h){if(!c.current&&y.current)return l.current=a.current,E(D,r),B?p(a.current):g.current;if(x)return E(D,r),p(a.current)}return c.current||E(D,r),g.current}};return R.cancel=function(){var t=c.current;t&&(b?cancelAnimationFrame(c.current):clearTimeout(c.current)),l.current=0,m.current=a.current=v.current=c.current=null,t&&s&&s({})},R.isPending=function(){return!!c.current},R.flush=function(){return c.current?O(Date.now()):g.current},R},[B,x,r,k,V,S,b,A,F,s]);return j.current=M,n.useEffect(function(){return y.current=!0,function(){var p;S&&j.current.flush(),d.current&&((p=global.document)==null||p.removeEventListener==null||p.removeEventListener("visibilitychange",d.current),d.current=null),y.current=!1}},[S]),M}function K(e,r){return e===r}function Q(e,r,u){var s=K,i=n.useRef(e),a=n.useState({})[1],l=J(n.useCallback(function(c){i.current=c,a({})},[a]),r,u,a),f=n.useRef(e);return s(f.current,e)||(l(e),f.current=e),[i.current,l]}const U=({onSearch:e,placeholder:r="Search...",debounceMs:u=300,className:s})=>{const[i,a]=P.useState(""),[l]=Q(i,u);P.useEffect(()=>{e(l)},[l,e]);const f=()=>{a(""),e("")};return w.jsxs("div",{className:`relative flex items-center ${s??""}`,children:[w.jsx(z,{className:"absolute left-3 w-4 h-4 text-gray-400 pointer-events-none"}),w.jsx("input",{type:"text",value:i,onChange:c=>a(c.target.value),placeholder:r,className:"w-full pl-9 pr-9 py-2 h-9 rounded-[6px] border border-input bg-background text-sm outline-none focus:border-black transition-colors placeholder:text-muted-foreground"}),i&&w.jsx("button",{onClick:f,className:"absolute right-3 text-gray-400 hover:text-gray-600 transition-colors","aria-label":"Clear search",children:w.jsx(I,{className:"w-4 h-4"})})]})},ae={title:"Molecules/SearchBar",component:U,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{placeholder:{control:"text"},debounceMs:{control:"number"}}},T={args:{placeholder:"Search customers...",onSearch:e=>console.log("Searched:",e)},play:async({canvasElement:e,step:r})=>{const s=$(e).getByPlaceholderText("Search customers...");await r("Type into search",async()=>{await H.type(s,"Acme Corp"),await q(s).toHaveValue("Acme Corp")}),await r("Clear search",async()=>{const i=e.querySelector("svg.cursor-pointer");i&&(await H.click(i),await q(s).toHaveValue(""))})}};var G,W,X;T.parameters={...T.parameters,docs:{...(G=T.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    placeholder: 'Search customers...',
    onSearch: val => console.log('Searched:', val)
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText('Search customers...');
    await step('Type into search', async () => {
      await userEvent.type(input, 'Acme Corp');
      await expect(input).toHaveValue('Acme Corp');
    });
    await step('Clear search', async () => {
      // Find the clear (X) icon, it renders when there is value
      // The icon has no specific aria label, but we can target the SVG or click it
      // Let's find the SVG by class or just find the parent
      const clearBtn = canvasElement.querySelector('svg.cursor-pointer');
      if (clearBtn) {
        await userEvent.click(clearBtn);
        await expect(input).toHaveValue('');
      }
    });
  }
}`,...(X=(W=T.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};const ce=["Default"];export{T as Default,ce as __namedExportsOrder,ae as default};
