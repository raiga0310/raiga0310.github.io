(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[55],{6935:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blogs",function(){return n(6202)}])},4946:function(e,t,n){"use strict";var r=n(1527);n(959);var o=n(4300),i=n(6118),l=n(8827),s=n(1688),a=n(3648);let u=()=>(0,r.jsxs)(o.M,{as:"footer",pos:"fixed",bg:"gray.500",color:"white",h:"8vh",w:"100%",bottom:"0",children:[(0,r.jsx)(i.x,{fontSize:"md",children:"\xa9 2023 raiga0310 portfolio. All rights reserved."}),(0,r.jsxs)(l.r,{href:"https://github.com/raiga0310/portfolio",isExternal:!0,color:"teal.400",children:["GitHub Repository ",(0,r.jsx)(s.J,{as:a.hJX,ml:2})]})]});t.Z=u},1711:function(e,t,n){"use strict";var r=n(1527),o=n(8827),i=n(3257),l=n(6873),s=n(6553),a=n(1280),u=n(4621);let c=e=>{let{href:t,children:n}=e,a=(0,u.useRouter)(),c=a.pathname===t;return(0,r.jsx)(o.r,{href:t,position:"relative",display:"inline-flex",alignItems:"center",justifyContent:"center",borderRadius:"full",children:(0,r.jsx)(i.xu,{padding:"1",borderRadius:"full",backgroundColor:c?(0,l.ff)("gray.200","gray.700"):"transparent",transition:"all 0.3s",children:(0,r.jsx)(s.X,{size:"md",children:n})})})},f=()=>(0,r.jsx)(i.xu,{borderBottom:"1px",borderColor:"gray.200",py:"2",children:(0,r.jsxs)(a.k,{justifyContent:"center",children:[(0,r.jsx)(c,{href:"/",children:"Profile"}),(0,r.jsx)(c,{href:"/history",children:"History"}),(0,r.jsx)(c,{href:"/skills",children:"Skills"}),(0,r.jsx)(c,{href:"/blogs",children:"Blogs"}),(0,r.jsx)(c,{href:"/hobby",children:"Hobby"}),(0,r.jsx)(c,{href:"/contact",children:"Contact"})]})});t.Z=f},1256:function(e,t){"use strict";var n,r;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{PrefetchKind:function(){return n},ACTION_REFRESH:function(){return o},ACTION_NAVIGATE:function(){return i},ACTION_RESTORE:function(){return l},ACTION_SERVER_PATCH:function(){return s},ACTION_PREFETCH:function(){return a},ACTION_FAST_REFRESH:function(){return u}});let o="refresh",i="navigate",l="restore",s="server-patch",a="prefetch",u="fast-refresh";(r=n||(n={})).AUTO="auto",r.FULL="full",r.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2004:function(e,t){"use strict";function n(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1630:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return g}});let r=n(8266),o=r._(n(959)),i=n(1813),l=n(7034),s=n(6358),a=n(1756),u=n(571),c=n(1905),f=n(1215),d=n(2105),p=n(2004),h=n(2409),y=n(1256),m=new Set;function x(e,t,n,r,o,i){if(!i&&!(0,l.isLocalURL)(t))return;if(!r.bypassPrefetchedCheck){let o=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,i=t+"%"+n+"%"+o;if(m.has(i))return;m.add(i)}let s=i?e.prefetch(t,o):e.prefetch(t,n,r);Promise.resolve(s).catch(e=>{})}function v(e){return"string"==typeof e?e:(0,s.formatUrl)(e)}let b=o.default.forwardRef(function(e,t){let n,r;let{href:s,as:m,children:b,prefetch:g=null,passHref:j,replace:_,shallow:C,scroll:O,locale:N,onClick:k,onMouseEnter:E,onTouchStart:P,legacyBehavior:S=!1,...L}=e;n=b,S&&("string"==typeof n||"number"==typeof n)&&(n=o.default.createElement("a",null,n));let T=!1!==g,w=null===g?y.PrefetchKind.AUTO:y.PrefetchKind.FULL,M=o.default.useContext(c.RouterContext),I=o.default.useContext(f.AppRouterContext),R=null!=M?M:I,A=!M,{href:G,as:H}=o.default.useMemo(()=>{if(!M){let e=v(s);return{href:e,as:m?v(m):e}}let[e,t]=(0,i.resolveHref)(M,s,!0);return{href:e,as:m?(0,i.resolveHref)(M,m):t||e}},[M,s,m]),z=o.default.useRef(G),U=o.default.useRef(H);S&&(r=o.default.Children.only(n));let F=S?r&&"object"==typeof r&&r.ref:t,[D,K,X]=(0,d.useIntersection)({rootMargin:"200px"}),q=o.default.useCallback(e=>{(U.current!==H||z.current!==G)&&(X(),U.current=H,z.current=G),D(e),F&&("function"==typeof F?F(e):"object"==typeof F&&(F.current=e))},[H,F,G,X,D]);o.default.useEffect(()=>{R&&K&&T&&x(R,G,H,{locale:N},{kind:w},A)},[H,G,K,N,T,null==M?void 0:M.locale,R,A,w]);let B={ref:q,onClick(e){S||"function"!=typeof k||k(e),S&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),R&&!e.defaultPrevented&&function(e,t,n,r,i,s,a,u,c,f){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let t=e.currentTarget,n=t.getAttribute("target");return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!(0,l.isLocalURL)(n)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[i?"replace":"push"](n,r,{shallow:s,locale:u,scroll:a}):t[i?"replace":"push"](r||n,{forceOptimisticNavigation:!f})};c?o.default.startTransition(h):h()}(e,R,G,H,_,C,O,N,A,T)},onMouseEnter(e){S||"function"!=typeof E||E(e),S&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),R&&(T||!A)&&x(R,G,H,{locale:N,priority:!0,bypassPrefetchedCheck:!0},{kind:w},A)},onTouchStart(e){S||"function"!=typeof P||P(e),S&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),R&&(T||!A)&&x(R,G,H,{locale:N,priority:!0,bypassPrefetchedCheck:!0},{kind:w},A)}};if((0,a.isAbsoluteUrl)(H))B.href=H;else if(!S||j||"a"===r.type&&!("href"in r.props)){let e=void 0!==N?N:null==M?void 0:M.locale,t=(null==M?void 0:M.isLocaleDomain)&&(0,p.getDomainLocale)(H,e,null==M?void 0:M.locales,null==M?void 0:M.domainLocales);B.href=t||(0,h.addBasePath)((0,u.addLocale)(H,e,null==M?void 0:M.defaultLocale))}return S?o.default.cloneElement(r,B):o.default.createElement("a",{...L,...B},n)}),g=b;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2105:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return a}});let r=n(959),o=n(319),i="function"==typeof IntersectionObserver,l=new Map,s=[];function a(e){let{rootRef:t,rootMargin:n,disabled:a}=e,u=a||!i,[c,f]=(0,r.useState)(!1),d=(0,r.useRef)(null),p=(0,r.useCallback)(e=>{d.current=e},[]);(0,r.useEffect)(()=>{if(i){if(u||c)return;let e=d.current;if(e&&e.tagName){let r=function(e,t,n){let{id:r,observer:o,elements:i}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=s.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=l.get(r)))return t;let o=new Map,i=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:i,elements:o},s.push(n),l.set(n,t),t}(n);return i.set(e,t),o.observe(e),function(){if(i.delete(e),o.unobserve(e),0===i.size){o.disconnect(),l.delete(r);let e=s.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&s.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:n});return r}}else if(!c){let e=(0,o.requestIdleCallback)(()=>f(!0));return()=>(0,o.cancelIdleCallback)(e)}},[u,n,t,c,d.current]);let h=(0,r.useCallback)(()=>{f(!1)},[]);return[p,c,h]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6202:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return p},default:function(){return h}});var r=n(1527),o=n(3606),i=n.n(o),l=n(3265),s=n.n(l),a=n(1711),u=n(4946),c=n(2003),f=n(9146),d=n(6553),p=!0;function h(e){let{blogLinks:t}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s(),{children:(0,r.jsx)("title",{children:"My Blogs"})}),(0,r.jsx)(a.Z,{}),(0,r.jsx)(c.W,{pt:"5vh",children:(0,r.jsx)(f.QI,{spacing:5,children:t.map(e=>(0,r.jsx)(f.HC,{children:(0,r.jsx)(i(),{href:"/blogs/".concat(e.id),children:(0,r.jsx)(d.X,{size:"md",children:e.title})})},e.id))})}),(0,r.jsx)(u.Z,{})]})}},3265:function(e,t,n){e.exports=n(2969)},3606:function(e,t,n){e.exports=n(1630)},4621:function(e,t,n){e.exports=n(1842)},847:function(e,t,n){"use strict";n.d(t,{w_:function(){return a}});var r=n(959),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(o),l=function(){return(l=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};function a(e){return function(t){return r.createElement(u,l({attr:l({},e.attr)},t),function e(t){return t&&t.map(function(t,n){return r.createElement(t.tag,l({key:n},t.attr),e(t.child))})}(e.child))}}function u(e){var t=function(t){var n,o=e.attr,i=e.size,a=e.title,u=s(e,["attr","size","title"]),c=i||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,u,{className:n,style:l(l({color:e.color||t.color},t.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),a&&r.createElement("title",null,a),e.children)};return void 0!==i?r.createElement(i.Consumer,null,function(e){return t(e)}):t(o)}},4300:function(e,t,n){"use strict";n.d(t,{M:function(){return l}});var r=n(9574),o=n(5763),i=n(1527),l=(0,r.m)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center"}});l.displayName="Center";var s={horizontal:{insetStart:"50%",transform:"translateX(-50%)"},vertical:{top:"50%",transform:"translateY(-50%)"},both:{insetStart:"50%",top:"50%",transform:"translate(-50%, -50%)"}};(0,o.G)(function(e,t){let{axis:n="both",...o}=e;return(0,i.jsx)(r.m.div,{ref:t,__css:s[n],...o,position:"absolute"})})},3257:function(e,t,n){"use strict";n.d(t,{xu:function(){return l}});var r=n(9574),o=n(5763),i=n(1527),l=(0,r.m)("div");l.displayName="Box";var s=(0,o.G)(function(e,t){let{size:n,centerContent:r=!0,...o}=e;return(0,i.jsx)(l,{ref:t,boxSize:n,__css:{...r?{display:"flex",alignItems:"center",justifyContent:"center"}:{},flexShrink:0,flexGrow:0},...o})});s.displayName="Square",(0,o.G)(function(e,t){let{size:n,...r}=e;return(0,i.jsx)(s,{size:n,ref:t,borderRadius:"9999px",...r})}).displayName="Circle"},6553:function(e,t,n){"use strict";n.d(t,{X:function(){return u}});var r=n(5763),o=n(8638),i=n(3668),l=n(9574),s=n(4843),a=n(1527),u=(0,r.G)(function(e,t){let n=(0,o.mq)("Heading",e),{className:r,...u}=(0,i.Lr)(e);return(0,a.jsx)(l.m.h2,{ref:t,className:(0,s.cx)("chakra-heading",e.className),...u,__css:n})});u.displayName="Heading"},1280:function(e,t,n){"use strict";n.d(t,{k:function(){return l}});var r=n(5763),o=n(9574),i=n(1527),l=(0,r.G)(function(e,t){let{direction:n,align:r,justify:l,wrap:s,basis:a,grow:u,shrink:c,...f}=e;return(0,i.jsx)(o.m.div,{ref:t,__css:{display:"flex",flexDirection:n,alignItems:r,justifyContent:l,flexWrap:s,flexBasis:a,flexGrow:u,flexShrink:c},...f})});l.displayName="Flex"},6118:function(e,t,n){"use strict";n.d(t,{x:function(){return u}});var r=n(5763),o=n(8638),i=n(3668),l=n(9574),s=n(4843),a=n(1527),u=(0,r.G)(function(e,t){let n=(0,o.mq)("Text",e),{className:r,align:u,decoration:c,casing:f,...d}=(0,i.Lr)(e),p=function(e){let t=Object.assign({},e);for(let e in t)void 0===t[e]&&delete t[e];return t}({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return(0,a.jsx)(l.m.p,{ref:t,className:(0,s.cx)("chakra-text",e.className),...p,...d,__css:n})});u.displayName="Text"},2003:function(e,t,n){"use strict";n.d(t,{W:function(){return u}});var r=n(5763),o=n(3668),i=n(8638),l=n(9574),s=n(4843),a=n(1527),u=(0,r.G)(function(e,t){let{className:n,centerContent:r,...u}=(0,o.Lr)(e),c=(0,i.mq)("Container",e);return(0,a.jsx)(l.m.div,{ref:t,className:(0,s.cx)("chakra-container",n),...u,__css:{...c,...r&&{display:"flex",flexDirection:"column",alignItems:"center"}}})});u.displayName="Container"},8827:function(e,t,n){"use strict";n.d(t,{r:function(){return u}});var r=n(5763),o=n(8638),i=n(3668),l=n(9574),s=n(4843),a=n(1527),u=(0,r.G)(function(e,t){let n=(0,o.mq)("Link",e),{className:r,isExternal:u,...c}=(0,i.Lr)(e);return(0,a.jsx)(l.m.a,{target:u?"_blank":void 0,rel:u?"noopener":void 0,ref:t,className:(0,s.cx)("chakra-link",r),...c,__css:n})});u.displayName="Link"},9146:function(e,t,n){"use strict";n.d(t,{aV:function(){return p},HC:function(){return y},QI:function(){return h}});var r=n(1688),o=n(5981),i=n(959),l=n(5763),s=n(8638),a=n(3668),u=n(9574),c=n(1527),[f,d]=(0,o.k)({name:"ListStylesContext",errorMessage:"useListStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<List />\" "}),p=(0,l.G)(function(e,t){let n=(0,s.jC)("List",e),{children:r,styleType:o="none",stylePosition:l,spacing:d,...p}=(0,a.Lr)(e),h=i.Children.toArray(r).filter(e=>(0,i.isValidElement)(e));return(0,c.jsx)(f,{value:n,children:(0,c.jsx)(u.m.ul,{ref:t,listStyleType:o,listStylePosition:l,role:"list",__css:{...n.container,...d?{"& > *:not(style) ~ *:not(style)":{mt:d}}:{}},...p,children:h})})});p.displayName="List",(0,l.G)((e,t)=>{let{as:n,...r}=e;return(0,c.jsx)(p,{ref:t,as:"ol",styleType:"decimal",marginStart:"1em",...r})}).displayName="OrderedList";var h=(0,l.G)(function(e,t){let{as:n,...r}=e;return(0,c.jsx)(p,{ref:t,as:"ul",styleType:"initial",marginStart:"1em",...r})});h.displayName="UnorderedList";var y=(0,l.G)(function(e,t){let n=d();return(0,c.jsx)(u.m.li,{ref:t,...e,__css:n.item})});y.displayName="ListItem",(0,l.G)(function(e,t){let n=d();return(0,c.jsx)(r.J,{ref:t,role:"presentation",...e,__css:n.icon})}).displayName="ListIcon"}},function(e){e.O(0,[219,774,888,179],function(){return e(e.s=6935)}),_N_E=e.O()}]);