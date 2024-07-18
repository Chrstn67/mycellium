(self.webpackChunkmycelium=self.webpackChunkmycelium||[]).push([[9546],{7293:(e,t,n)=>{"use strict";n.d(t,{A:()=>E});var s=n(6540),o=n(4848);function a(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=s.Children.toArray(e),n=t.find((e=>s.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),a=t.filter((e=>e!==n)),c=n?.props.children;return{mdxAdmonitionTitle:c,rest:a.length>0?(0,o.jsx)(o.Fragment,{children:a}):null}}(e.children),a=e.title??t;return{...e,...a&&{title:a},children:n}}var c=n(4164),i=n(1312),r=n(7559);const l={admonition:"admonition_xJq3",admonitionHeading:"admonitionHeading_Gvgb",admonitionIcon:"admonitionIcon_Rf37",admonitionContent:"admonitionContent_BuS1"};function d(e){let{type:t,className:n,children:s}=e;return(0,o.jsx)("div",{className:(0,c.A)(r.G.common.admonition,r.G.common.admonitionType(t),l.admonition,n),children:s})}function u(e){let{icon:t,title:n}=e;return(0,o.jsxs)("div",{className:l.admonitionHeading,children:[(0,o.jsx)("span",{className:l.admonitionIcon,children:t}),n]})}function m(e){let{children:t}=e;return t?(0,o.jsx)("div",{className:l.admonitionContent,children:t}):null}function h(e){const{type:t,icon:n,title:s,children:a,className:c}=e;return(0,o.jsxs)(d,{type:t,className:c,children:[s||n?(0,o.jsx)(u,{title:s,icon:n}):null,(0,o.jsx)(m,{children:a})]})}function f(e){return(0,o.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const p={icon:(0,o.jsx)(f,{}),title:(0,o.jsx)(i.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function x(e){return(0,o.jsx)(h,{...p,...e,className:(0,c.A)("alert alert--secondary",e.className),children:e.children})}function g(e){return(0,o.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const b={icon:(0,o.jsx)(g,{}),title:(0,o.jsx)(i.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function v(e){return(0,o.jsx)(h,{...b,...e,className:(0,c.A)("alert alert--success",e.className),children:e.children})}function j(e){return(0,o.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const N={icon:(0,o.jsx)(j,{}),title:(0,o.jsx)(i.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function y(e){return(0,o.jsx)(h,{...N,...e,className:(0,c.A)("alert alert--info",e.className),children:e.children})}function A(e){return(0,o.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const C={icon:(0,o.jsx)(A,{}),title:(0,o.jsx)(i.A,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function k(e){return(0,o.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const B={icon:(0,o.jsx)(k,{}),title:(0,o.jsx)(i.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const w={icon:(0,o.jsx)(A,{}),title:(0,o.jsx)(i.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const L={...{note:x,tip:v,info:y,warning:function(e){return(0,o.jsx)(h,{...C,...e,className:(0,c.A)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,o.jsx)(h,{...B,...e,className:(0,c.A)("alert alert--danger",e.className),children:e.children})}},...{secondary:e=>(0,o.jsx)(x,{title:"secondary",...e}),important:e=>(0,o.jsx)(y,{title:"important",...e}),success:e=>(0,o.jsx)(v,{title:"success",...e}),caution:function(e){return(0,o.jsx)(h,{...w,...e,className:(0,c.A)("alert alert--warning",e.className),children:e.children})}}};function E(e){const t=a(e),n=(s=t.type,L[s]||(console.warn(`No admonition component found for admonition type "${s}". Using Info as fallback.`),L.info));var s;return(0,o.jsx)(n,{...t})}},2153:(e,t,n)=>{"use strict";n.d(t,{A:()=>g});n(6540);var s=n(4164),o=n(1312),a=n(7559),c=n(8774);const i={iconEdit:"iconEdit_Z9Sw"};var r=n(4848);function l(e){let{className:t,...n}=e;return(0,r.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.A)(i.iconEdit,t),"aria-hidden":"true",...n,children:(0,r.jsx)("g",{children:(0,r.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function d(e){let{editUrl:t}=e;return(0,r.jsxs)(c.A,{to:t,className:a.G.common.editThisPage,children:[(0,r.jsx)(l,{}),(0,r.jsx)(o.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}var u=n(4586);function m(e){void 0===e&&(e={});const{i18n:{currentLocale:t}}=(0,u.A)(),n=function(){const{i18n:{currentLocale:e,localeConfigs:t}}=(0,u.A)();return t[e].calendar}();return new Intl.DateTimeFormat(t,{calendar:n,...e})}function h(e){let{lastUpdatedAt:t}=e;const n=new Date(t),s=m({day:"numeric",month:"short",year:"numeric",timeZone:"UTC"}).format(n);return(0,r.jsx)(o.A,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,r.jsx)("b",{children:(0,r.jsx)("time",{dateTime:n.toISOString(),itemProp:"dateModified",children:s})})},children:" on {date}"})}function f(e){let{lastUpdatedBy:t}=e;return(0,r.jsx)(o.A,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,r.jsx)("b",{children:t})},children:" by {user}"})}function p(e){let{lastUpdatedAt:t,lastUpdatedBy:n}=e;return(0,r.jsxs)("span",{className:a.G.common.lastUpdated,children:[(0,r.jsx)(o.A,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t?(0,r.jsx)(h,{lastUpdatedAt:t}):"",byUser:n?(0,r.jsx)(f,{lastUpdatedBy:n}):""},children:"Last updated{atDate}{byUser}"}),!1]})}const x={lastUpdated:"lastUpdated_JAkA"};function g(e){let{className:t,editUrl:n,lastUpdatedAt:o,lastUpdatedBy:a}=e;return(0,r.jsxs)("div",{className:(0,s.A)("row",t),children:[(0,r.jsx)("div",{className:"col",children:n&&(0,r.jsx)(d,{editUrl:n})}),(0,r.jsx)("div",{className:(0,s.A)("col",x.lastUpdated),children:(o||a)&&(0,r.jsx)(p,{lastUpdatedAt:o,lastUpdatedBy:a})})]})}},2125:(e,t,n)=>{"use strict";n.d(t,{A:()=>re});var s=n(6540),o=n(8453),a=n(5260),c=n(2303),i=n(4164),r=n(5293),l=n(6342);function d(){const{prism:e}=(0,l.p)(),{colorMode:t}=(0,r.G)(),n=e.theme,s=e.darkTheme||n;return"dark"===t?s:n}var u=n(7559),m=n(8426),h=n.n(m);const f=/title=(?<quote>["'])(?<title>.*?)\1/,p=/\{(?<range>[\d,-]+)\}/,x={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},g={...x,lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""},vb:{start:"['\u2018\u2019]",end:""},vbnet:{start:"(?:_\\s*)?['\u2018\u2019]",end:""},rem:{start:"[Rr][Ee][Mm]\\b",end:""},f90:{start:"!",end:""},ml:{start:"\\(\\*",end:"\\*\\)"},cobol:{start:"\\*>",end:""}},b=Object.keys(x);function v(e,t){const n=e.map((e=>{const{start:n,end:s}=g[e];return`(?:${n}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${s})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function j(e,t){let n=e.replace(/\n$/,"");const{language:s,magicComments:o,metastring:a}=t;if(a&&p.test(a)){const e=a.match(p).groups.range;if(0===o.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${a}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=o[0].className,s=h()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(s),code:n}}if(void 0===s)return{lineClassNames:{},code:n};const c=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return v(["js","jsBlock"],t);case"jsx":case"tsx":return v(["js","jsBlock","jsx"],t);case"html":return v(["js","jsBlock","html"],t);case"python":case"py":case"bash":return v(["bash"],t);case"markdown":case"md":return v(["html","jsx","bash"],t);case"tex":case"latex":case"matlab":return v(["tex"],t);case"lua":case"haskell":case"sql":return v(["lua"],t);case"wasm":return v(["wasm"],t);case"vb":case"vba":case"visual-basic":return v(["vb","rem"],t);case"vbnet":return v(["vbnet","rem"],t);case"batch":return v(["rem"],t);case"basic":return v(["rem","f90"],t);case"fsharp":return v(["js","ml"],t);case"ocaml":case"sml":return v(["ml"],t);case"fortran":return v(["f90"],t);case"cobol":return v(["cobol"],t);default:return v(b,t)}}(s,o),i=n.split("\n"),r=Object.fromEntries(o.map((e=>[e.className,{start:0,range:""}]))),l=Object.fromEntries(o.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),d=Object.fromEntries(o.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),u=Object.fromEntries(o.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let h=0;h<i.length;){const e=i[h].match(c);if(!e){h+=1;continue}const t=e.slice(1).find((e=>void 0!==e));l[t]?r[l[t]].range+=`${h},`:d[t]?r[d[t]].start=h:u[t]&&(r[u[t]].range+=`${r[u[t]].start}-${h-1},`),i.splice(h,1)}n=i.join("\n");const m={};return Object.entries(r).forEach((e=>{let[t,{range:n}]=e;h()(n).forEach((e=>{m[e]??=[],m[e].push(t)}))})),{lineClassNames:m,code:n}}const N={codeBlockContainer:"codeBlockContainer_Ckt0"};var y=n(4848);function A(e){let{as:t,...n}=e;const s=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[s,o]=e;const a=t[s];a&&"string"==typeof o&&(n[a]=o)})),n}(d());return(0,y.jsx)(t,{...n,style:s,className:(0,i.A)(n.className,N.codeBlockContainer,u.G.common.codeBlock)})}const C={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function k(e){let{children:t,className:n}=e;return(0,y.jsx)(A,{as:"pre",tabIndex:0,className:(0,i.A)(C.codeBlockStandalone,"thin-scrollbar",n),children:(0,y.jsx)("code",{className:C.codeBlockLines,children:t})})}var B=n(9532);const w={attributes:!0,characterData:!0,childList:!0,subtree:!0};function L(e,t){const[n,o]=(0,s.useState)(),a=(0,s.useCallback)((()=>{o(e.current?.closest("[role=tabpanel][hidden]"))}),[e,o]);(0,s.useEffect)((()=>{a()}),[a]),function(e,t,n){void 0===n&&(n=w);const o=(0,B._q)(t),a=(0,B.Be)(n);(0,s.useEffect)((()=>{const t=new MutationObserver(o);return e&&t.observe(e,a),()=>t.disconnect()}),[e,o,a])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),a())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}var E=n(1765);const T={codeLine:"codeLine_lJS_",codeLineNumber:"codeLineNumber_Tfdd",codeLineContent:"codeLineContent_feaV"};function H(e){let{line:t,classNames:n,showLineNumbers:s,getLineProps:o,getTokenProps:a}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const c=o({line:t,className:(0,i.A)(n,s&&T.codeLine)}),r=t.map(((e,t)=>(0,y.jsx)("span",{...a({token:e})},t)));return(0,y.jsxs)("span",{...c,children:[s?(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("span",{className:T.codeLineNumber}),(0,y.jsx)("span",{className:T.codeLineContent,children:r})]}):r,(0,y.jsx)("br",{})]})}var _=n(1312);function S(e){return(0,y.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,y.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})})}function I(e){return(0,y.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,y.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})})}const M={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function U(e){let{code:t,className:n}=e;const[o,a]=(0,s.useState)(!1),c=(0,s.useRef)(void 0),r=(0,s.useCallback)((()=>{!function(e,{target:t=document.body}={}){if("string"!=typeof e)throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);const n=document.createElement("textarea"),s=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const o=document.getSelection(),a=o.rangeCount>0&&o.getRangeAt(0);t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch{}n.remove(),a&&(o.removeAllRanges(),o.addRange(a)),s&&s.focus()}(t),a(!0),c.current=window.setTimeout((()=>{a(!1)}),1e3)}),[t]);return(0,s.useEffect)((()=>()=>window.clearTimeout(c.current)),[]),(0,y.jsx)("button",{type:"button","aria-label":o?(0,_.T)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,_.T)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,_.T)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,i.A)("clean-btn",n,M.copyButton,o&&M.copyButtonCopied),onClick:r,children:(0,y.jsxs)("span",{className:M.copyButtonIcons,"aria-hidden":"true",children:[(0,y.jsx)(S,{className:M.copyButtonIcon}),(0,y.jsx)(I,{className:M.copyButtonSuccessIcon})]})})}function z(e){return(0,y.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,y.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}const R={wordWrapButtonIcon:"wordWrapButtonIcon_Bwma",wordWrapButtonEnabled:"wordWrapButtonEnabled_EoeP"};function O(e){let{className:t,onClick:n,isEnabled:s}=e;const o=(0,_.T)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,y.jsx)("button",{type:"button",onClick:n,className:(0,i.A)("clean-btn",t,s&&R.wordWrapButtonEnabled),"aria-label":o,title:o,children:(0,y.jsx)(z,{className:R.wordWrapButtonIcon,"aria-hidden":"true"})})}function $(e){let{children:t,className:n="",metastring:o,title:a,showLineNumbers:c,language:r}=e;const{prism:{defaultLanguage:u,magicComments:m}}=(0,l.p)(),h=function(e){return e?.toLowerCase()}(r??function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return t?.replace(/language-/,"")}(n)??u),p=d(),x=function(){const[e,t]=(0,s.useState)(!1),[n,o]=(0,s.useState)(!1),a=(0,s.useRef)(null),c=(0,s.useCallback)((()=>{const n=a.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[a,e]),i=(0,s.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=a.current,n=e>t||a.current.querySelector("code").hasAttribute("style");o(n)}),[a]);return L(a,i),(0,s.useEffect)((()=>{i()}),[e,i]),(0,s.useEffect)((()=>(window.addEventListener("resize",i,{passive:!0}),()=>{window.removeEventListener("resize",i)})),[i]),{codeBlockRef:a,isEnabled:e,isCodeScrollable:n,toggle:c}}(),g=function(e){return e?.match(f)?.groups.title??""}(o)||a,{lineClassNames:b,code:v}=j(t,{metastring:o,language:h,magicComments:m}),N=c??function(e){return Boolean(e?.includes("showLineNumbers"))}(o);return(0,y.jsxs)(A,{as:"div",className:(0,i.A)(n,h&&!n.includes(`language-${h}`)&&`language-${h}`),children:[g&&(0,y.jsx)("div",{className:C.codeBlockTitle,children:g}),(0,y.jsxs)("div",{className:C.codeBlockContent,children:[(0,y.jsx)(E.f4,{theme:p,code:v,language:h??"text",children:e=>{let{className:t,style:n,tokens:s,getLineProps:o,getTokenProps:a}=e;return(0,y.jsx)("pre",{tabIndex:0,ref:x.codeBlockRef,className:(0,i.A)(t,C.codeBlock,"thin-scrollbar"),style:n,children:(0,y.jsx)("code",{className:(0,i.A)(C.codeBlockLines,N&&C.codeBlockLinesWithNumbering),children:s.map(((e,t)=>(0,y.jsx)(H,{line:e,getLineProps:o,getTokenProps:a,classNames:b[t],showLineNumbers:N},t)))})})}}),(0,y.jsxs)("div",{className:C.buttonGroup,children:[(x.isEnabled||x.isCodeScrollable)&&(0,y.jsx)(O,{className:C.codeButton,onClick:()=>x.toggle(),isEnabled:x.isEnabled}),(0,y.jsx)(U,{className:C.codeButton,code:v})]})]})]})}function V(e){let{children:t,...n}=e;const o=(0,c.A)(),a=function(e){return s.Children.toArray(e).some((e=>(0,s.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),i="string"==typeof a?$:k;return(0,y.jsx)(i,{...n,children:a},String(o))}function P(e){return(0,y.jsx)("code",{...e})}var W=n(8774);var D=n(3427),q=n(1422);const G={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function F(e){return!!e&&("SUMMARY"===e.tagName||F(e.parentElement))}function Z(e,t){return!!e&&(e===t||Z(e.parentElement,t))}function J(e){let{summary:t,children:n,...o}=e;(0,D.A)().collectAnchor(o.id);const a=(0,c.A)(),r=(0,s.useRef)(null),{collapsed:l,setCollapsed:d}=(0,q.u)({initialState:!o.open}),[u,m]=(0,s.useState)(o.open),h=s.isValidElement(t)?t:(0,y.jsx)("summary",{children:t??"Details"});return(0,y.jsxs)("details",{...o,ref:r,open:u,"data-collapsed":l,className:(0,i.A)(G.details,a&&G.isBrowser,o.className),onMouseDown:e=>{F(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;F(t)&&Z(t,r.current)&&(e.preventDefault(),l?(d(!1),m(!0)):d(!0))},children:[h,(0,y.jsx)(q.N,{lazy:!1,collapsed:l,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{d(e),m(!e)},children:(0,y.jsx)("div",{className:G.collapsibleContent,children:n})})]})}const Y={details:"details_b_Ee"},K="alert alert--info";function Q(e){let{...t}=e;return(0,y.jsx)(J,{...t,className:(0,i.A)(K,Y.details,t.className)})}function X(e){const t=s.Children.toArray(e.children),n=t.find((e=>s.isValidElement(e)&&"summary"===e.type)),o=(0,y.jsx)(y.Fragment,{children:t.filter((e=>e!==n))});return(0,y.jsx)(Q,{...e,summary:n,children:o})}var ee=n(1107);function te(e){return(0,y.jsx)(ee.A,{...e})}const ne={containsTaskList:"containsTaskList_mC6p"};function se(e){if(void 0!==e)return(0,i.A)(e,e?.includes("contains-task-list")&&ne.containsTaskList)}const oe={img:"img_ev3q"};var ae=n(7293),ce=n(418);const ie={Head:a.A,details:X,Details:X,code:function(e){return function(e){return void 0!==e.children&&s.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")))}(e)?(0,y.jsx)(P,{...e}):(0,y.jsx)(V,{...e})},a:function(e){return(0,y.jsx)(W.A,{...e})},pre:function(e){return(0,y.jsx)(y.Fragment,{children:e.children})},ul:function(e){return(0,y.jsx)("ul",{...e,className:se(e.className)})},li:function(e){return(0,D.A)().collectAnchor(e.id),(0,y.jsx)("li",{...e})},img:function(e){return(0,y.jsx)("img",{decoding:"async",loading:"lazy",...e,className:(t=e.className,(0,i.A)(t,oe.img))});var t},h1:e=>(0,y.jsx)(te,{as:"h1",...e}),h2:e=>(0,y.jsx)(te,{as:"h2",...e}),h3:e=>(0,y.jsx)(te,{as:"h3",...e}),h4:e=>(0,y.jsx)(te,{as:"h4",...e}),h5:e=>(0,y.jsx)(te,{as:"h5",...e}),h6:e=>(0,y.jsx)(te,{as:"h6",...e}),admonition:ae.A,mermaid:ce.A};function re(e){let{children:t}=e;return(0,y.jsx)(o.x,{components:ie,children:t})}},5195:(e,t,n)=>{"use strict";n.d(t,{A:()=>p});var s=n(6540),o=n(6342);function a(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const s=n.slice(2,e.level);e.parentIndex=Math.max(...s),n[e.level]=t}));const s=[];return t.forEach((e=>{const{parentIndex:n,...o}=e;n>=0?t[n].children.push(o):s.push(o)})),s}function c(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:s}=e;return t.flatMap((e=>{const t=c({toc:e.children,minHeadingLevel:n,maxHeadingLevel:s});return function(e){return e.level>=n&&e.level<=s}(e)?[{...e,children:t}]:t}))}function i(e){const t=e.getBoundingClientRect();return t.top===t.bottom?i(e.parentNode):t}function r(e,t){let{anchorTopOffset:n}=t;const s=e.find((e=>i(e).top>=n));if(s){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(i(s))?s:e[e.indexOf(s)-1]??null}return e[e.length-1]??null}function l(){const e=(0,s.useRef)(0),{navbar:{hideOnScroll:t}}=(0,o.p)();return(0,s.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,s.useRef)(void 0),n=l();(0,s.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:s,linkActiveClassName:o,minHeadingLevel:a,maxHeadingLevel:c}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(s),i=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const s=[];for(let o=t;o<=n;o+=1)s.push(`h${o}.anchor`);return Array.from(document.querySelectorAll(s.join()))}({minHeadingLevel:a,maxHeadingLevel:c}),l=r(i,{anchorTopOffset:n.current}),d=e.find((e=>l&&l.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(o),e.classList.add(o),t.current=e):e.classList.remove(o)}(e,e===d)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,n])}var u=n(8774),m=n(4848);function h(e){let{toc:t,className:n,linkClassName:s,isChild:o}=e;return t.length?(0,m.jsx)("ul",{className:o?void 0:n,children:t.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(u.A,{to:`#${e.id}`,className:s??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(h,{isChild:!0,toc:e.children,className:n,linkClassName:s})]},e.id)))}):null}const f=s.memo(h);function p(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:i="table-of-contents__link",linkActiveClassName:r,minHeadingLevel:l,maxHeadingLevel:u,...h}=e;const p=(0,o.p)(),x=l??p.tableOfContents.minHeadingLevel,g=u??p.tableOfContents.maxHeadingLevel,b=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:o}=e;return(0,s.useMemo)((()=>c({toc:a(t),minHeadingLevel:n,maxHeadingLevel:o})),[t,n,o])}({toc:t,minHeadingLevel:x,maxHeadingLevel:g});return d((0,s.useMemo)((()=>{if(i&&r)return{linkClassName:i,linkActiveClassName:r,minHeadingLevel:x,maxHeadingLevel:g}}),[i,r,x,g])),(0,m.jsx)(f,{toc:b,className:n,linkClassName:i,...h})}},7763:(e,t,n)=>{"use strict";n.d(t,{A:()=>l});n(6540);var s=n(4164),o=n(5195);const a={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var c=n(4848);const i="table-of-contents__link toc-highlight",r="table-of-contents__link--active";function l(e){let{className:t,...n}=e;return(0,c.jsx)("div",{className:(0,s.A)(a.tableOfContents,"thin-scrollbar",t),children:(0,c.jsx)(o.A,{...n,linkClassName:i,linkActiveClassName:r})})}},996:(e,t,n)=>{"use strict";n.d(t,{A:()=>h});n(6540);var s=n(4164),o=n(1312),a=n(5260),c=n(4848);function i(){return(0,c.jsx)(o.A,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function r(){return(0,c.jsx)(o.A,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function l(){return(0,c.jsx)(a.A,{children:(0,c.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=n(7559),u=n(7293);function m(e){let{className:t}=e;return(0,c.jsx)(u.A,{type:"caution",title:(0,c.jsx)(i,{}),className:(0,s.A)(t,d.G.common.unlistedBanner),children:(0,c.jsx)(r,{})})}function h(e){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(l,{}),(0,c.jsx)(m,{...e})]})}},8426:(e,t)=>{function n(e){let t,n=[];for(let s of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(s))n.push(parseInt(s,10));else if(t=s.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,s,o,a]=t;if(s&&a){s=parseInt(s),a=parseInt(a);const e=s<a?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(a+=e);for(let t=s;t!==a;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},8453:(e,t,n)=>{"use strict";n.d(t,{R:()=>c,x:()=>i});var s=n(6540);const o={},a=s.createContext(o);function c(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);