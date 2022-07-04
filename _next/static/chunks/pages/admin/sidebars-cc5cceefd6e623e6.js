(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4572],{11391:function(e,n,r){"use strict";r.d(n,{Ph:function(){return x}});var t=r(79762),i=r(11604),l=r(94244),c=r(19703),a=r(38554),s=r.n(a),o=r(67294);function u(){return u=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},u.apply(this,arguments)}function d(e,n){if(null==e)return{};var r,t,i={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}var h=["children","placeholder","className"],f=["rootProps","placeholder","icon","color","height","h","minH","minHeight","iconColor","iconSize","isFullWidth"],p=["children"],m=(0,i.Gp)((function(e,n){var r=e.children,t=e.placeholder,l=e.className,a=d(e,h);return o.createElement(i.m$.select,u({},a,{ref:n,className:(0,c.cx)("chakra-select",l)}),t&&o.createElement("option",{value:""},t),r)}));c.Ts&&(m.displayName="SelectField");var x=(0,i.Gp)((function(e,n){var r=(0,i.jC)("Select",e),a=(0,i.Lr)(e),h=a.rootProps,p=a.placeholder,x=a.icon,v=a.color,j=a.height,g=a.h,y=a.minH,O=a.minHeight,w=a.iconColor,P=a.iconSize;a.isFullWidth;var _=d(a,f),S=(0,c.Vl)(_,l.oE),k=S[0],C=S[1],N=(0,t.Yp)(C),E={width:"100%",height:"fit-content",position:"relative",color:v},T=s()({paddingEnd:"2rem"},r.field,{_focus:{zIndex:"unset"}});return o.createElement(i.m$.div,u({className:"chakra-select__wrapper",__css:E},k,h),o.createElement(m,u({ref:n,height:null!=g?g:j,minH:null!=y?y:O,placeholder:p},N,{__css:T}),e.children),o.createElement(b,u({"data-disabled":(0,c.PB)(N.disabled)},(w||v)&&{color:w||v},{__css:r.icon},P&&{fontSize:P}),x))}));c.Ts&&(x.displayName="Select");var v=function(e){return o.createElement("svg",u({viewBox:"0 0 24 24"},e),o.createElement("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}))},j=(0,i.m$)("div",{baseStyle:{position:"absolute",display:"inline-flex",alignItems:"center",justifyContent:"center",pointerEvents:"none",top:"50%",transform:"translateY(-50%)"}}),b=function(e){var n=e.children,r=void 0===n?o.createElement(v,null):n,t=d(e,p),i=o.cloneElement(r,{role:"presentation",className:"chakra-select__icon",focusable:!1,"aria-hidden":!0,style:{width:"1em",height:"1em",color:"currentColor"}});return o.createElement(j,u({},t,{className:"chakra-select__icon-wrapper"}),o.isValidElement(r)?i:null)};c.Ts&&(b.displayName="SelectIcon")},9920:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/sidebars",function(){return r(49428)}])},83504:function(e,n,r){"use strict";var t=r(85893),i=r(68527),l=r(1950),c=r(62665),a=r(24871),s=r(96486),o=r(67294),u=r(63091),d=r(70577);function h(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function f(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){h(e,n,r[n])}))}return e}function p(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}n.Z=function(e){var n=e.title,r=e.routes,h=e.children,m=e.p,x=p(e,["title","routes","children","p"]),v=(0,c.Z)().session,j=(0,o.useState)(r),b=j[0],g=j[1];return(0,o.useEffect)((function(){if(null===v||void 0===v?void 0:v.user){var e=!0,n=!1,r=void 0;try{for(var t,i=b[Symbol.iterator]();!(e=(t=i.next()).done);e=!0){var l=t.value;l.minRole==u.u.ContentAdmin?l.disabled=!(0,d.SL)(v.user.role):l.minRole==u.u.ADMIN&&(l.disabled=!(0,d.GJ)(v.user.role))}}catch(c){n=!0,r=c}finally{try{e||null==i.return||i.return()}finally{if(n)throw r}}}g((0,s.cloneDeep)(b))}),[null===v||void 0===v?void 0:v.user]),(0,t.jsxs)(i.xu,{display:"flex",children:[(0,t.jsx)(a.Z,f({routes:b,title:n},x)),(0,t.jsx)(l.ZP,{className:"side-card",ml:"4",width:"100%",p:null!==m&&void 0!==m?m:6,pb:"1",children:h})]})}},99901:function(e,n,r){"use strict";var t=r(85893),i=r(11604),l=r(20949),c=r(41664),a=r(11163);function s(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){s(e,n,r[n])}))}return e}function u(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var d=r(67294).forwardRef((function(e,n){var r=e.isActive,c=e.icon,a=e.children,s=u(e,["isActive","icon","children"]);return(0,t.jsxs)(i.m$.a,o({"aria-current":r?"page":void 0,width:"100%",px:"3",py:"2",rounded:"md",ref:n,fontSize:"1rem",fontWeight:"bold",color:(0,l.ff)("gray.700","whiteAlpha.900"),transition:"all 0.2s",display:"flex",alignItems:"center",className:"hover-bg",_activeLink:{color:(0,l.ff)("var(--chakra-colors-brand-500)","brand.200"),fontWeight:"600"}},s,{children:[c&&(0,t.jsx)(i.m$.span,{mr:"5",fontSize:"1.1rem",display:{base:"none",md:"block"},width:"20px",children:c}),(0,t.jsx)(i.m$.span,{children:a})]}))}));n.Z=function(e){var n,r=e.href,l=e.icon,s=e.children,h=e.query,f=e.exactPath,p=void 0!==f&&f,m=u(e,["href","icon","children","query","exactPath"]),x=(0,a.useRouter)().asPath;return n=p?x.split("?")[0]==encodeURI(r):x.startsWith(encodeURI(r)),(0,t.jsx)(i.m$.div,o({userSelect:"none",display:"flex",alignItems:"center",lineHeight:"1.5rem"},m,{children:(0,t.jsx)(c.default,{href:{pathname:r,query:h},passHref:!0,children:(0,t.jsx)(d,{isActive:n,icon:l,children:s})})}))}},24871:function(e,n,r){"use strict";var t=r(85893),i=r(68527),l=r(1950),c=r(11163),a=r(67294),s=r(99901);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function u(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){o(e,n,r[n])}))}return e}function d(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function h(e){var n=e.routes,r=(e.pathname,e.contentRef,d(e,["routes","pathname","contentRef"]));return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(i.Kq,{as:"ul",children:n.map((function(e){return e.disabled?null:(0,t.jsx)(s.Z,u({as:"li",href:e.path,icon:e.icon},r,{children:(0,t.jsx)("span",{children:e.title})}),e.path)}))})})}n.Z=function(e){var n=e.routes,r=e.title,s=d(e,["routes","title"]),o=(0,c.useRouter)().pathname,f=a.useRef(null);return(0,t.jsxs)(i.gC,{alignItems:"left",width:["180px","180px","250px","250px"],height:"fit-content",children:[(0,t.jsx)(l.ZP,{p:"5",className:"side-card",children:(0,t.jsx)(i.X6,{size:"md",fontSize:"1.3rem",children:r})}),(0,t.jsx)(l.ZP,u({p:"0",className:"side-card"},s,{children:(0,t.jsx)(i.xu,{ref:f,as:"nav","aria-label":"Main Navigation",pos:"sticky",sx:{overscrollBehavior:"contain"},top:"8.5rem",p:"3",overflowY:"auto",className:"sidebar-content",flexShrink:0,children:(0,t.jsx)(h,u({routes:n,pathname:o,contentRef:f},s))})}))]})}},49428:function(e,n,r){"use strict";r.r(n);var t=r(34051),i=r.n(t),l=r(85893),c=r(97375),a=r(28609),s=r(68527),o=r(15193),u=r(79042),d=r(88718),h=r(4612),f=r(11391),p=r(36114),m=r(67294),x=r(41039),v=r(84696),j=r(21948),b=r(96486),g=r(30092),y=r(32532),O=r(83504);function w(e,n,r,t,i,l,c){try{var a=e[l](c),s=a.value}catch(o){return void r(o)}a.done?n(s):Promise.resolve(s).then(t,i)}function P(e){return function(){var n=this,r=arguments;return new Promise((function(t,i){var l=e.apply(n,r);function c(e){w(l,t,i,c,a,"next",e)}function a(e){w(l,t,i,c,a,"throw",e)}c(void 0)}))}}n.default=function(){var e=(0,m.useState)([]),n=e[0],r=e[1],t=(0,m.useState)(null),w=t[0],_=t[1],S=(0,c.qY)(),k=S.isOpen,C=S.onOpen,N=S.onClose,E=(0,a.pm)();(0,m.useEffect)((function(){T()}),[]);var T=function(){var e=P(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.rR.get("/sidebars?c=0");case 2:n=e.sent,r(n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=P(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.rR.get("/tag/info/latest?name=".concat(w.tagName));case 2:return e.next=4,v.rR.post("/sidebar",w);case 4:_(null),N(),T(),E({description:"\u66f4\u65b0\u4fa7\u8fb9\u680f\u6210\u529f",status:"success",duration:2e3,isClosable:!0});case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=(0,b.cloneDeep)(w);_(e)},R=function(){var e=P(i().mark((function e(n){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:v.rR.delete("/sidebar/".concat(n)),setTimeout((function(){return T()}),300),E({description:"\u5220\u9664\u4fa7\u8fb9\u680f\u6210\u529f",status:"success",duration:2e3,isClosable:!0});case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(g.Z,{children:(0,l.jsxs)(O.Z,{title:"\u7ba1\u7406\u5458",routes:x.xt,children:[(0,l.jsxs)(s.kC,{justifyContent:"space-between",alignItems:"center",children:[(0,l.jsx)(s.X6,{size:"md",children:"\u4fa7\u8fb9\u680f\u8bbe\u7f6e"}),(0,l.jsx)(o.zx,{size:"sm",onClick:function(){_({tagName:"",filter:y.a.Recent,displayCount:5,weight:0}),C()},_focus:{border:null},children:"\u65b0\u5efa\u4fa7\u8fb9\u680f"})]}),(0,l.jsxs)(u.iA,{variant:"simple",mt:"4",children:[(0,l.jsx)(u.hr,{children:(0,l.jsxs)(u.Tr,{children:[(0,l.jsx)(u.Th,{children:"Tag Name"}),(0,l.jsx)(u.Th,{children:"Filter"}),(0,l.jsx)(u.Th,{children:"Display count"}),(0,l.jsx)(u.Th,{children:"Weight"}),(0,l.jsx)(u.Th,{})]})}),(0,l.jsx)(u.p3,{children:n.map((function(e,n){return(0,l.jsxs)(u.Tr,{children:[(0,l.jsx)(u.Td,{children:e.tagName}),(0,l.jsx)(u.Td,{children:e.filter}),(0,l.jsx)(u.Td,{children:e.displayCount}),(0,l.jsx)(u.Td,{children:e.weight}),(0,l.jsxs)(u.Td,{children:[(0,l.jsx)(o.hU,{colorScheme:"gray","aria-label":"edit navbar",variant:"ghost",icon:(0,j.a)("edit",".95rem"),onClick:function(){return _(e),void C()}}),(0,l.jsx)(o.hU,{colorScheme:"gray","aria-label":"delete navbar",variant:"ghost",icon:(0,j.a)("close","1rem"),onClick:function(){return R(e.id)}})]})]},n)}))})]})]})}),(0,l.jsxs)(d.u_,{isOpen:k,onClose:N,children:[(0,l.jsx)(d.ZA,{}),w&&(0,l.jsxs)(d.hz,{children:[(0,l.jsx)(d.xB,{children:w.tagName?"\u7f16\u8f91\u4fa7\u8fb9\u680f":"\u65b0\u5efa\u4fa7\u8fb9\u680f"}),(0,l.jsxs)(d.fe,{mb:"2",children:[(0,l.jsxs)(s.gC,{spacing:"4",alignItems:"left",children:[(0,l.jsxs)(s.Ug,{spacing:"4",children:[(0,l.jsx)(s.X6,{size:"xs",width:"150px",children:"\u6807\u7b7e\u540d"}),(0,l.jsx)(h.II,{value:w.tagName,_focus:{border:null},variant:"flushed",onChange:function(e){w.tagName=e.currentTarget.value,I()}})]}),(0,l.jsxs)(s.Ug,{spacing:"4",children:[(0,l.jsx)(s.X6,{size:"xs",width:"150px",children:"\u5185\u5bb9\u8fc7\u6ee4"}),(0,l.jsxs)(f.Ph,{value:w.filter,variant:"flushed",onChange:function(e){w.filter=e.currentTarget.value,I()},children:[(0,l.jsx)("option",{value:y.a.Latest,children:"\u6700\u65b0"}),(0,l.jsx)("option",{value:y.a.Recent,children:"\u6700\u8fd1\u70ed\u95e8"}),(0,l.jsx)("option",{value:y.a.Week,children:"\u4e00\u5468\u70ed\u95e8"}),(0,l.jsx)("option",{value:y.a.All,children:"\u5168\u7ad9\u70ed\u95e8"})]})]}),(0,l.jsxs)(s.Ug,{spacing:"4",children:[(0,l.jsx)(s.X6,{size:"xs",width:"105px",children:"Display count"}),(0,l.jsxs)(p.Y2,{min:0,max:10,value:w.displayCount,variant:"flushed",onChange:function(e){w.displayCount=parseInt(e),I()},children:[(0,l.jsx)(p.zu,{_focus:{border:null}}),(0,l.jsxs)(p.Fi,{children:[(0,l.jsx)(p.WQ,{}),(0,l.jsx)(p.Y_,{})]})]})]}),(0,l.jsxs)(s.Ug,{spacing:"4",children:[(0,l.jsx)(s.X6,{size:"xs",width:"105px",children:"Weight"}),(0,l.jsxs)(p.Y2,{min:0,max:10,value:w.weight,variant:"flushed",onChange:function(e){w.weight=parseInt(e),I()},children:[(0,l.jsx)(p.zu,{_focus:{border:null}}),(0,l.jsxs)(p.Fi,{children:[(0,l.jsx)(p.WQ,{}),(0,l.jsx)(p.Y_,{})]})]})]})]}),(0,l.jsx)(o.zx,{variant:"outline",mt:"6",onClick:z,children:"\u63d0\u4ea4"})]})]})]})]})}}},function(e){e.O(0,[5445,4885,4617,1921,1228,8703,7351,8718,2539,1111,3649,9177,6103,3009,6771,1926,9840,9774,2888,179],(function(){return n=9920,e(e.s=n);var n}));var n=e.O();_N_E=n}]);