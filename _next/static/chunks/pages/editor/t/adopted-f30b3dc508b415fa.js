(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4951],{11391:function(e,n,t){"use strict";t.d(n,{Ph:function(){return m}});var r=t(79762),o=t(11604),i=t(94244),l=t(19703),c=t(38554),a=t.n(c),u=t(67294);function s(){return s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},s.apply(this,arguments)}function f(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}var d=["children","placeholder","className"],h=["rootProps","placeholder","icon","color","height","h","minH","minHeight","iconColor","iconSize","isFullWidth"],p=["children"],v=(0,o.Gp)((function(e,n){var t=e.children,r=e.placeholder,i=e.className,c=f(e,d);return u.createElement(o.m$.select,s({},c,{ref:n,className:(0,l.cx)("chakra-select",i)}),r&&u.createElement("option",{value:""},r),t)}));l.Ts&&(v.displayName="SelectField");var m=(0,o.Gp)((function(e,n){var t=(0,o.jC)("Select",e),c=(0,o.Lr)(e),d=c.rootProps,p=c.placeholder,m=c.icon,b=c.color,y=c.height,g=c.h,x=c.minH,O=c.minHeight,w=c.iconColor,S=c.iconSize;c.isFullWidth;var P=f(c,h),k=(0,l.Vl)(P,i.oE),E=k[0],C=k[1],_=(0,r.Yp)(C),R={width:"100%",height:"fit-content",position:"relative",color:b},Z=a()({paddingEnd:"2rem"},t.field,{_focus:{zIndex:"unset"}});return u.createElement(o.m$.div,s({className:"chakra-select__wrapper",__css:R},E,d),u.createElement(v,s({ref:n,height:null!=g?g:y,minH:null!=x?x:O,placeholder:p},_,{__css:Z}),e.children),u.createElement(j,s({"data-disabled":(0,l.PB)(_.disabled)},(w||b)&&{color:w||b},{__css:t.icon},S&&{fontSize:S}),m))}));l.Ts&&(m.displayName="Select");var b=function(e){return u.createElement("svg",s({viewBox:"0 0 24 24"},e),u.createElement("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}))},y=(0,o.m$)("div",{baseStyle:{position:"absolute",display:"inline-flex",alignItems:"center",justifyContent:"center",pointerEvents:"none",top:"50%",transform:"translateY(-50%)"}}),j=function(e){var n=e.children,t=void 0===n?u.createElement(b,null):n,r=f(e,p),o=u.cloneElement(t,{role:"presentation",className:"chakra-select__icon",focusable:!1,"aria-hidden":!0,style:{width:"1em",height:"1em",color:"currentColor"}});return u.createElement(y,s({},r,{className:"chakra-select__icon-wrapper"}),u.isValidElement(t)?o:null)};l.Ts&&(j.displayName="SelectIcon")},28719:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/editor/t/adopted",function(){return t(97268)}])},83504:function(e,n,t){"use strict";var r=t(85893),o=t(68527),i=t(1950),l=t(62665),c=t(24871),a=t(96486),u=t(67294),s=t(63091),f=t(70577);function d(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function h(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){d(e,n,t[n])}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}n.Z=function(e){var n=e.title,t=e.routes,d=e.children,v=e.p,m=p(e,["title","routes","children","p"]),b=(0,l.Z)().session,y=(0,u.useState)(t),j=y[0],g=y[1];return(0,u.useEffect)((function(){if(null===b||void 0===b?void 0:b.user){var e=!0,n=!1,t=void 0;try{for(var r,o=j[Symbol.iterator]();!(e=(r=o.next()).done);e=!0){var i=r.value;i.minRole==s.u.ContentAdmin?i.disabled=!(0,f.SL)(b.user.role):i.minRole==s.u.ADMIN&&(i.disabled=!(0,f.GJ)(b.user.role))}}catch(l){n=!0,t=l}finally{try{e||null==o.return||o.return()}finally{if(n)throw t}}}g((0,a.cloneDeep)(j))}),[null===b||void 0===b?void 0:b.user]),(0,r.jsxs)(o.xu,{display:"flex",children:[(0,r.jsx)(c.Z,h({routes:j,title:n},m)),(0,r.jsx)(i.ZP,{className:"side-card",ml:"4",width:"100%",p:null!==v&&void 0!==v?v:6,pb:"1",children:d})]})}},99901:function(e,n,t){"use strict";var r=t(85893),o=t(11604),i=t(20949),l=t(41664),c=t(11163);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){a(e,n,t[n])}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var f=t(67294).forwardRef((function(e,n){var t=e.isActive,l=e.icon,c=e.children,a=s(e,["isActive","icon","children"]);return(0,r.jsxs)(o.m$.a,u({"aria-current":t?"page":void 0,width:"100%",px:"3",py:"2",rounded:"md",ref:n,fontSize:"1rem",fontWeight:"bold",color:(0,i.ff)("gray.700","whiteAlpha.900"),transition:"all 0.2s",display:"flex",alignItems:"center",className:"hover-bg",_activeLink:{color:(0,i.ff)("var(--chakra-colors-brand-500)","brand.200"),fontWeight:"600"}},a,{children:[l&&(0,r.jsx)(o.m$.span,{mr:"5",fontSize:"1.1rem",display:{base:"none",md:"block"},width:"20px",children:l}),(0,r.jsx)(o.m$.span,{children:c})]}))}));n.Z=function(e){var n,t=e.href,i=e.icon,a=e.children,d=e.query,h=e.exactPath,p=void 0!==h&&h,v=s(e,["href","icon","children","query","exactPath"]),m=(0,c.useRouter)().asPath;return n=p?m.split("?")[0]==encodeURI(t):m.startsWith(encodeURI(t)),(0,r.jsx)(o.m$.div,u({userSelect:"none",display:"flex",alignItems:"center",lineHeight:"1.5rem"},v,{children:(0,r.jsx)(l.default,{href:{pathname:t,query:d},passHref:!0,children:(0,r.jsx)(f,{isActive:n,icon:i,children:a})})}))}},24871:function(e,n,t){"use strict";var r=t(85893),o=t(68527),i=t(1950),l=t(11163),c=t(67294),a=t(99901);function u(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){u(e,n,t[n])}))}return e}function f(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function d(e){var n=e.routes,t=(e.pathname,e.contentRef,f(e,["routes","pathname","contentRef"]));return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(o.Kq,{as:"ul",children:n.map((function(e){return e.disabled?null:(0,r.jsx)(a.Z,s({as:"li",href:e.path,icon:e.icon},t,{children:(0,r.jsx)("span",{children:e.title})}),e.path)}))})})}n.Z=function(e){var n=e.routes,t=e.title,a=f(e,["routes","title"]),u=(0,l.useRouter)().pathname,h=c.useRef(null);return(0,r.jsxs)(o.gC,{alignItems:"left",width:["180px","180px","250px","250px"],height:"fit-content",children:[(0,r.jsx)(i.ZP,{p:"5",className:"side-card",children:(0,r.jsx)(o.X6,{size:"md",fontSize:"1.3rem",children:t})}),(0,r.jsx)(i.ZP,s({p:"0",className:"side-card"},a,{children:(0,r.jsx)(o.xu,{ref:h,as:"nav","aria-label":"Main Navigation",pos:"sticky",sx:{overscrollBehavior:"contain"},top:"8.5rem",p:"3",overflowY:"auto",className:"sidebar-content",flexShrink:0,children:(0,r.jsx)(d,s({routes:n,pathname:u,contentRef:h},a))})}))]})}},13520:function(e,n,t){"use strict";var r=t(85893),o=t(68527),i=t(99901),l=t(11163),c=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){a(e,n,t[n])}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function f(e){var n=e.routes,t=(e.pathname,e.contentRef,e.query),l=s(e,["routes","pathname","contentRef","query"]);return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(o.Ug,{as:"ul",children:n.map((function(e){return e.disabled?null:(0,r.jsx)(i.Z,u({query:t,as:"li",href:e.path,icon:e.icon},l,{children:(0,r.jsx)("span",{children:e.title})}),e.path)}))})})}n.Z=function(e){var n=e.routes,t=e.showBorder,i=void 0===t||t,a=s(e,["routes","showBorder"]),d=(0,l.useRouter)().pathname,h=c.useRef(null);return(0,r.jsxs)(o.gC,{alignItems:"left",width:"100%",children:[(0,r.jsx)(f,u({routes:n,pathname:d,contentRef:h},a)),i&&(0,r.jsx)(o.iz,{})]})}},97268:function(e,n,t){"use strict";t.r(n),t.d(n,{editorTLinks:function(){return O}});var r=t(34051),o=t.n(r),i=t(85893),l=t(97375),c=t(68527),a=t(88718),u=t(15193),s=t(67294),f=t(41039),d=t(84696),h=t(30092),p=t(83504),v=t(13520),m=t(7e3),b=t(96486),y=t(72596),j=t(99394);function g(e,n,t,r,o,i,l){try{var c=e[i](l),a=c.value}catch(u){return void t(u)}c.done?n(a):Promise.resolve(a).then(r,o)}function x(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var i=e.apply(n,t);function l(e){g(i,r,o,l,c,"next",e)}function c(e){g(i,r,o,l,c,"throw",e)}l(void 0)}))}}var O=(0,b.find)(f.HZ,(function(e){return 4==e.id})).subLinks;n.default=function(){var e=(0,s.useState)("doing"),n=e[0],t=e[1],r=(0,s.useState)(null),b=r[0],g=r[1],w=(0,l.qY)(),S=w.isOpen,P=w.onOpen,k=w.onClose,E=s.useRef(),C=function(){var e=x(o().mark((function e(t){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.rR.get("/translate/user/adopted?id=0&filter=".concat(n,"&page=").concat(t,"&per_page=").concat(m.perPage));case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),_=function(){var e=x(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.rR.post("/translate/cancel/adopt/".concat(b.id));case 2:t(null),t("doing"),g(null);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(h.Z,{title:"\u521b\u4f5c\u4e2d\u5fc3-\u8ba4\u9886\u7684\u9009\u9898",children:(0,i.jsxs)(p.Z,{title:"\u521b\u4f5c\u4e2d\u5fc3",routes:f.HZ,children:[(0,i.jsxs)(c.kC,{justifyContent:"space-between",alignItems:"center",children:[(0,i.jsx)(v.Z,{routes:O,exactPath:!0}),(0,i.jsx)(c.Ug,{children:(0,i.jsx)(j.Z,{filters:["\u7ffb\u8bd1\u8fdb\u884c\u4e2d","\u7ffb\u8bd1\u5b8c\u6210"],onChange:function(e){t("\u7ffb\u8bd1\u8fdb\u884c\u4e2d"==e?"doing":"done")},variant:"solid"})})]}),n&&(0,i.jsx)(y.Z,{onLoad:C,filter:n,isInfinite:!0,onCancelAdopt:function(e){g(e),P()}})]})}),b&&(0,i.jsx)(a.aR,{isOpen:S,leastDestructiveRef:E,onClose:k,children:(0,i.jsx)(a.dh,{children:(0,i.jsxs)(a._T,{children:[(0,i.jsxs)(a.fY,{fontSize:"lg",fontWeight:"bold",children:["\u653e\u5f03\u8ba4\u9886\u9009\u9898: ",b.title]}),(0,i.jsx)(a.iP,{children:"\u653e\u5f03\u8ba4\u9886\u9009\u9898\u53ef\u80fd\u4f1a\u6263\u9664\u4f60\u7684\u7ffb\u8bd1\u79ef\u5206\u548c\u7528\u6237\u79ef\u5206(\u8ba4\u9886\u65f6\u95f4\u8d8a\u957f\u8d8a\u5bb9\u6613\u88ab\u6263\u5206)"}),(0,i.jsxs)(a.xo,{children:[(0,i.jsx)(u.zx,{ref:E,onClick:k,children:"\u53d6\u6d88"}),(0,i.jsx)(u.zx,{colorScheme:"red",onClick:_,ml:3,children:"\u653e\u5f03\u8ba4\u9886"})]})]})})})]})}},99394:function(e,n,t){"use strict";var r=t(85893),o=t(67294),i=t(68527),l=t(15193),c=t(21948),a=t(32532);n.Z=function(e){var n=e.filters,t=void 0===n?[a.a.Best,a.a.Featured,a.a.Recent]:n,u=e.onChange,s=e.initFilter,f=void 0===s?t.length>0?t[0]:a.a.Best:s,d=e.variant,h=void 0===d?"ghost":d,p=(0,o.useState)(f),v=p[0],m=p[1];(0,o.useEffect)((function(){f&&m(f)}),[f]);return(0,r.jsx)(i.Ug,{spacing:"0",children:t.map((function(e){return(0,r.jsx)(l.zx,{_focus:{border:null},onClick:function(){return function(e){u(e),m(e)}(e)},size:"sm",colorScheme:v===e?"brand":"gray",leftIcon:(0,c.a)(e),variant:h,children:e},e)}))})}},72596:function(e,n,t){"use strict";var r=t(34051),o=t.n(r),i=t(85893),l=t(67294),c=t(97375),a=t(20949),u=t(68527),s=t(88718),f=t(15193),d=t(64981),h=t(96486),p=t(71118),v=t(19029),m=t(86669),b=t(62665),y=t(70577),j=t(84696);function g(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function x(e,n,t,r,o,i,l){try{var c=e[i](l),a=c.value}catch(u){return void t(u)}c.done?n(a):Promise.resolve(a).then(r,o)}function O(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function w(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){O(e,n,t[n])}))}return e}function S(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function P(e){return function(e){if(Array.isArray(e))return g(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"===typeof e)return g(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return g(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.Z=function(e){var n=e.onLoad,t=e.filter,r=e.isInfinite,g=S(e,["onLoad","filter","isInfinite"]),O=(0,b.Z)().session,k=(0,c.qY)(),E=k.isOpen,C=k.onOpen,_=k.onClose,R=(0,l.useRef)(),Z=(0,l.useState)(0),I=Z[0],N=Z[1],z=(0,l.useState)(null),A=z[0],D=z[1],L=(0,l.useState)(null),T=L[0],q=L[1];(0,l.useEffect)((function(){D(null),N(I+1)}),[t]);var F=(0,a.ff)(d.Z.borderColor.light,d.Z.borderColor.dark),H=function(){D((0,h.cloneDeep)(A))},B=function(){var e,n=(e=o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.rR.post("/translate/cancel/adopt/".concat(T.id));case 2:T.adopted=void 0,T.tlor=void 0,H(),q(null),_();case 7:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(r,o){var i=e.apply(n,t);function l(e){x(i,r,o,l,c,"next",e)}function c(e){x(i,r,o,l,c,"throw",e)}l(void 0)}))});return function(){return n.apply(this,arguments)}}();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(v.Z,{onLoad:n,onDataChange:function(e){D(h.concat.apply(void 0,[null!==A&&void 0!==A?A:[]].concat(P(e))))},isInfinite:r,children:0===(null===A||void 0===A?void 0:A.length)?(0,i.jsx)(p.Z,{}):(0,i.jsx)(u.gC,{alignItems:"left",p:"2",children:null===A||void 0===A?void 0:A.map((function(e,n){var t;return(0,i.jsx)(u.xu,{p:"2",borderBottom:n<A.length-1?"1px solid ".concat(F):null,children:(0,i.jsx)(m.Z,w({data:e,onChange:H,showTranslate:(null===O||void 0===O?void 0:O.user.id)==(null===(t=e.tlor)||void 0===t?void 0:t.id),onRemoveAdopt:(0,y.SL)(null===O||void 0===O?void 0:O.user.role)?function(){C(),q(e)}:null},g))},e.id)}))})},I),(0,i.jsx)(s.aR,{isOpen:E,leastDestructiveRef:R,onClose:_,children:(0,i.jsx)(s.dh,{children:T&&(0,i.jsxs)(s._T,{children:[(0,i.jsxs)(s.fY,{fontSize:"lg",fontWeight:"bold",children:["\u53d6\u6d88\u8ba4\u9886\u8d44\u683c: ",T.title]}),(0,i.jsx)(s.iP,{children:"\u4e00\u822c\u6765\u8bf4\uff0c\u53ea\u6709\u5f53\u7528\u6237\u957f\u65f6\u95f4\u6ca1\u53bb\u7ffb\u8bd1\u65f6\uff0c\u624d\u53d6\u6d88\u5176\u8ba4\u9886\u8d44\u683c\uff0c\u6ce8\u610f\uff1a\u53d6\u6d88\u8d44\u683c\u4f1a\u6263\u9664\u8ba4\u9886\u8005\u4e00\u5b9a\u7684\u79ef\u5206"}),(0,i.jsxs)(s.xo,{children:[(0,i.jsx)(f.zx,{ref:R,onClick:_,children:"\u53d6\u6d88"}),(0,i.jsx)(f.zx,{colorScheme:"red",onClick:B,ml:3,children:"\u786e\u8ba4\u53d6\u6d88\u8ba4\u9886\u8d44\u683c"})]})]})})})]})}}},function(e){e.O(0,[5445,4885,4617,1921,1228,8703,7351,8718,2539,1111,3649,9177,3009,6771,1926,9840,6669,9774,2888,179],(function(){return n=28719,e(e.s=n);var n}));var n=e.O();_N_E=n}]);