(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7810],{5991:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/settings/email",function(){return r(58689)}])},83504:function(e,n,r){"use strict";var t=r(85893),i=r(68527),o=r(1950),c=r(62665),s=r(24871),a=r(96486),l=r(67294),u=r(63091),f=r(70577);function d(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function p(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){d(e,n,r[n])}))}return e}function h(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}n.Z=function(e){var n=e.title,r=e.routes,d=e.children,m=e.p,x=h(e,["title","routes","children","p"]),b=(0,c.Z)().session,v=(0,l.useState)(r),j=v[0],y=v[1];return(0,l.useEffect)((function(){if(null===b||void 0===b?void 0:b.user){var e=!0,n=!1,r=void 0;try{for(var t,i=j[Symbol.iterator]();!(e=(t=i.next()).done);e=!0){var o=t.value;o.minRole==u.u.ContentAdmin?o.disabled=!(0,f.SL)(b.user.role):o.minRole==u.u.ADMIN&&(o.disabled=!(0,f.GJ)(b.user.role))}}catch(c){n=!0,r=c}finally{try{e||null==i.return||i.return()}finally{if(n)throw r}}}y((0,a.cloneDeep)(j))}),[null===b||void 0===b?void 0:b.user]),(0,t.jsxs)(i.xu,{display:"flex",children:[(0,t.jsx)(s.Z,p({routes:j,title:n},x)),(0,t.jsx)(o.ZP,{className:"side-card",ml:"4",width:"100%",p:null!==m&&void 0!==m?m:6,pb:"1",children:d})]})}},99901:function(e,n,r){"use strict";var t=r(85893),i=r(11604),o=r(20949),c=r(41664),s=r(11163);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){a(e,n,r[n])}))}return e}function u(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var f=r(67294).forwardRef((function(e,n){var r=e.isActive,c=e.icon,s=e.children,a=u(e,["isActive","icon","children"]);return(0,t.jsxs)(i.m$.a,l({"aria-current":r?"page":void 0,width:"100%",px:"3",py:"2",rounded:"md",ref:n,fontSize:"1rem",fontWeight:"bold",color:(0,o.ff)("gray.700","whiteAlpha.900"),transition:"all 0.2s",display:"flex",alignItems:"center",className:"hover-bg",_activeLink:{color:(0,o.ff)("var(--chakra-colors-brand-500)","brand.200"),fontWeight:"600"}},a,{children:[c&&(0,t.jsx)(i.m$.span,{mr:"5",fontSize:"1.1rem",display:{base:"none",md:"block"},width:"20px",children:c}),(0,t.jsx)(i.m$.span,{children:s})]}))}));n.Z=function(e){var n,r=e.href,o=e.icon,a=e.children,d=e.query,p=e.exactPath,h=void 0!==p&&p,m=u(e,["href","icon","children","query","exactPath"]),x=(0,s.useRouter)().asPath;return n=h?x.split("?")[0]==encodeURI(r):x.startsWith(encodeURI(r)),(0,t.jsx)(i.m$.div,l({userSelect:"none",display:"flex",alignItems:"center",lineHeight:"1.5rem"},m,{children:(0,t.jsx)(c.default,{href:{pathname:r,query:d},passHref:!0,children:(0,t.jsx)(f,{isActive:n,icon:o,children:a})})}))}},24871:function(e,n,r){"use strict";var t=r(85893),i=r(68527),o=r(1950),c=r(11163),s=r(67294),a=r(99901);function l(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function u(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){l(e,n,r[n])}))}return e}function f(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function d(e){var n=e.routes,r=(e.pathname,e.contentRef,f(e,["routes","pathname","contentRef"]));return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(i.Kq,{as:"ul",children:n.map((function(e){return e.disabled?null:(0,t.jsx)(a.Z,u({as:"li",href:e.path,icon:e.icon},r,{children:(0,t.jsx)("span",{children:e.title})}),e.path)}))})})}n.Z=function(e){var n=e.routes,r=e.title,a=f(e,["routes","title"]),l=(0,c.useRouter)().pathname,p=s.useRef(null);return(0,t.jsxs)(i.gC,{alignItems:"left",width:["180px","180px","250px","250px"],height:"fit-content",children:[(0,t.jsx)(o.ZP,{p:"5",className:"side-card",children:(0,t.jsx)(i.X6,{size:"md",fontSize:"1.3rem",children:r})}),(0,t.jsx)(o.ZP,u({p:"0",className:"side-card"},a,{children:(0,t.jsx)(i.xu,{ref:p,as:"nav","aria-label":"Main Navigation",pos:"sticky",sx:{overscrollBehavior:"contain"},top:"8.5rem",p:"3",overflowY:"auto",className:"sidebar-content",flexShrink:0,children:(0,t.jsx)(d,u({routes:n,pathname:l,contentRef:p},a))})}))]})}},58689:function(e,n,r){"use strict";r.r(n);var t=r(34051),i=r.n(t),o=r(85893),c=r(28609),s=r(68527),a=r(4612),l=r(15193),u=r(83504),f=r(30092),d=r(67294),p=r(89583),h=r(41039),m=r(84696),x=r(95978);function b(e,n,r,t,i,o,c){try{var s=e[o](c),a=s.value}catch(l){return void r(l)}s.done?n(a):Promise.resolve(a).then(t,i)}function v(e){return function(){var n=this,r=arguments;return new Promise((function(t,i){var o=e.apply(n,r);function c(e){b(o,t,i,c,s,"next",e)}function s(e){b(o,t,i,c,s,"throw",e)}c(void 0)}))}}n.default=function(){var e=(0,c.pm)(),n=(0,d.useState)(!1),r=n[0],t=n[1],b=(0,d.useState)(null),j=b[0],y=b[1],g=(0,d.useState)(null),O=g[0],w=g[1],S=(0,d.useState)(null),P=S[0],k=S[1],z=(0,d.useState)(!1),C=z[0],R=z[1];(0,d.useEffect)((function(){E()}),[]);var E=function(){var e=v(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.rR.get("/user/email");case 2:n=e.sent,y(n.data.email),w(n.data.tempEmail);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(){var n=v(i().mark((function n(){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(P.trim()!=j){n.next=3;break}return e({description:"\u8bf7\u7ed1\u5b9a\u4e0e\u4e4b\u524d\u4e0d\u4e00\u6837\u7684\u90ae\u7bb1",status:"error",duration:3e3,isClosable:!0}),n.abrupt("return");case 3:return n.next=5,(0,x.oH)(P);case 5:if(!(r=n.sent)){n.next=9;break}return e({description:r,status:"error",duration:3e3,isClosable:!0}),n.abrupt("return");case 9:return n.next=11,m.rR.post("/user/email/bind",{email:P});case 11:y(null),w(P),k(null),t(!1),R(!0);case 16:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),I=function(){var e=v(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.rR.post("/user/email/bind",{email:O});case 2:R(!0);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=v(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.rR.post("/user/email/unbind");case 2:y(j),w(null),k(null);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,o.jsx)(f.Z,{children:(0,o.jsxs)(u.Z,{title:"\u4e2a\u4eba\u8bbe\u7f6e",routes:h._Q,children:[(0,o.jsx)(s.kC,{justifyContent:"space-between",alignItems:"center",children:(0,o.jsx)(s.X6,{size:"sm",children:"\u8d26\u6237\u5b89\u5168"})}),(0,o.jsx)(s.iz,{my:"4"}),(0,o.jsxs)(s.xu,{mt:"6",children:[(0,o.jsxs)(s.kC,{alignItems:"center",children:[(0,o.jsxs)(s.xu,{children:[(0,o.jsx)(s.xv,{fontWeight:"600",children:"\u7ed1\u5b9a\u90ae\u7bb1"}),r?(0,o.jsxs)(s.Ug,{mt:"2",children:[(0,o.jsx)(a.II,{value:P,onChange:function(e){return k(e.currentTarget.value)}}),(0,o.jsx)(l.zx,{onClick:_,children:"\u53d1\u9001\u90ae\u4ef6"}),(0,o.jsx)(l.zx,{variant:"outline",onClick:function(){k(null),t(!1)},children:"\u53d6\u6d88"})]}):(0,o.jsx)(o.Fragment,{children:O?(0,o.jsxs)(s.xv,{mt:"2",children:["\u90ae\u7bb1\u5df2\u4fee\u6539\uff0c\u6b63\u5728\u7b49\u5f85\u8ba4\u8bc1\uff1a",O]}):(0,o.jsxs)(s.xv,{layerStyle:"textSecondary",fontSize:"0.9rem",mt:"2",children:[""==j?"\u672a\u8bbe\u7f6e":j," "]})})]}),!r&&(0,o.jsx)(o.Fragment,{children:O?(0,o.jsxs)(s.Ug,{children:[(0,o.jsx)(l.zx,{size:"sm",ml:"6",onClick:N,children:"\u53d6\u6d88\u4fee\u6539"}),(0,o.jsx)(l.zx,{size:"sm",ml:"6",onClick:I,variant:"outline",children:"\u91cd\u65b0\u53d1\u9001"})]}):(0,o.jsx)(l.zx,{size:"sm",ml:"6",onClick:function(){t(!0),k(j)},children:"\u7f16\u8f91"})})]}),C&&(0,o.jsxs)(s.Ug,{className:"bordered",p:"4",spacing:"4",mt:"4",children:[(0,o.jsx)(p.P58,{fontSize:"1.6rem",color:"brand"}),(0,o.jsx)(s.xv,{fontSize:"1.2rem",children:"\u90ae\u4ef6\u5df2\u6210\u529f\u53d1\u9001\uff0c\u82e5\u6ca1\u6536\u5230\uff0c\u70b9\u51fb\u518d\u6b21\u53d1\u9001"})]})]})]})})}}},function(e){e.O(0,[5445,4885,4617,1921,1228,8703,7351,8718,2539,1111,3649,9177,3009,6771,1926,9840,9774,2888,179],(function(){return n=5991,e(e.s=n);var n}));var n=e.O();_N_E=n}]);