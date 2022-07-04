(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6515],{11391:function(e,n,t){"use strict";t.d(n,{Ph:function(){return m}});var r=t(79762),o=t(11604),i=t(94244),a=t(19703),c=t(38554),l=t.n(c),s=t(67294);function u(){return u=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},u.apply(this,arguments)}function f(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}var d=["children","placeholder","className"],h=["rootProps","placeholder","icon","color","height","h","minH","minHeight","iconColor","iconSize","isFullWidth"],p=["children"],v=(0,o.Gp)((function(e,n){var t=e.children,r=e.placeholder,i=e.className,c=f(e,d);return s.createElement(o.m$.select,u({},c,{ref:n,className:(0,a.cx)("chakra-select",i)}),r&&s.createElement("option",{value:""},r),t)}));a.Ts&&(v.displayName="SelectField");var m=(0,o.Gp)((function(e,n){var t=(0,o.jC)("Select",e),c=(0,o.Lr)(e),d=c.rootProps,p=c.placeholder,m=c.icon,g=c.color,y=c.height,x=c.h,j=c.minH,w=c.minHeight,O=c.iconColor,_=c.iconSize;c.isFullWidth;var S=f(c,h),E=(0,a.Vl)(S,i.oE),C=E[0],k=E[1],P=(0,r.Yp)(k),N={width:"100%",height:"fit-content",position:"relative",color:g},I=l()({paddingEnd:"2rem"},t.field,{_focus:{zIndex:"unset"}});return s.createElement(o.m$.div,u({className:"chakra-select__wrapper",__css:N},C,d),s.createElement(v,u({ref:n,height:null!=x?x:y,minH:null!=j?j:w,placeholder:p},P,{__css:I}),e.children),s.createElement(b,u({"data-disabled":(0,a.PB)(P.disabled)},(O||g)&&{color:O||g},{__css:t.icon},_&&{fontSize:_}),m))}));a.Ts&&(m.displayName="Select");var g=function(e){return s.createElement("svg",u({viewBox:"0 0 24 24"},e),s.createElement("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}))},y=(0,o.m$)("div",{baseStyle:{position:"absolute",display:"inline-flex",alignItems:"center",justifyContent:"center",pointerEvents:"none",top:"50%",transform:"translateY(-50%)"}}),b=function(e){var n=e.children,t=void 0===n?s.createElement(g,null):n,r=f(e,p),o=s.cloneElement(t,{role:"presentation",className:"chakra-select__icon",focusable:!1,"aria-hidden":!0,style:{width:"1em",height:"1em",color:"currentColor"}});return s.createElement(y,u({},r,{className:"chakra-select__icon-wrapper"}),s.isValidElement(t)?o:null)};a.Ts&&(b.displayName="SelectIcon")},33441:function(e,n,t){"use strict";t.d(n,{g:function(){return s}});var r=t(79762),o=t(11604),i=t(19703),a=t(67294);function c(){return c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},c.apply(this,arguments)}var l=["className","rows"],s=(0,o.Gp)((function(e,n){var t=(0,o.mq)("Textarea",e),s=(0,o.Lr)(e),u=s.className,f=s.rows,d=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(s,l),h=(0,r.Yp)(d),p=f?(0,i.CE)(t,["h","minH","height","minHeight"]):t;return a.createElement(o.m$.textarea,c({ref:n,rows:f},h,{className:(0,i.cx)("chakra-textarea",u),__css:p}))}));i.Ts&&(s.displayName="Textarea")},95910:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/story/tsubjects",function(){return t(26115)}])},26115:function(e,n,t){"use strict";t.r(n);var r=t(34051),o=t.n(r),i=t(85893),a=t(68527),c=t(67294),l=t(41039),s=t(30092),u=t(13520),f=t(35140),d=t(83504),h=t(84696),p=t(99394),v=t(7e3),m=t(72596);function g(e,n,t,r,o,i,a){try{var c=e[i](a),l=c.value}catch(s){return void t(s)}c.done?n(l):Promise.resolve(l).then(r,o)}n.default=function(){var e=(0,c.useState)("\u957f\u65f6\u95f4\u672a\u7ffb\u8bd1"),n=e[0],t=e[1],r=function(){var e,t=(e=o().mark((function e(t){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("\u957f\u65f6\u95f4\u672a\u7ffb\u8bd1"!=n){e.next=7;break}return e.next=4,h.rR.get("/translate/tsubjects?filter=adopted&page=".concat(t,"&per_page=").concat(v.perPage));case 4:r=e.sent,e.next=10;break;case 7:return e.next=9,h.rR.get("/translate/tsubjects/translated?page=".concat(t,"&per_page=").concat(v.perPage));case 9:r=e.sent;case 10:return e.abrupt("return",r);case 11:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(r,o){var i=e.apply(n,t);function a(e){g(i,r,o,a,c,"next",e)}function c(e){g(i,r,o,a,c,"throw",e)}a(void 0)}))});return function(e){return t.apply(this,arguments)}}();return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(s.Z,{children:(0,i.jsxs)(d.Z,{title:"\u7ba1\u7406\u5458",routes:l.xt,children:[(0,i.jsxs)(a.kC,{justifyContent:"space-between",alignItems:"center",children:[(0,i.jsx)(u.Z,{routes:f.adminSubLinks,exactPath:!0}),(0,i.jsx)(p.Z,{filters:["\u957f\u65f6\u95f4\u672a\u7ffb\u8bd1","\u7ffb\u8bd1\u5b8c\u6210"],onChange:t})]}),(0,i.jsx)(m.Z,{filter:n,onLoad:r,isInfinite:!0})]})})})}},99394:function(e,n,t){"use strict";var r=t(85893),o=t(67294),i=t(68527),a=t(15193),c=t(21948),l=t(32532);n.Z=function(e){var n=e.filters,t=void 0===n?[l.a.Best,l.a.Featured,l.a.Recent]:n,s=e.onChange,u=e.initFilter,f=void 0===u?t.length>0?t[0]:l.a.Best:u,d=e.variant,h=void 0===d?"ghost":d,p=(0,o.useState)(f),v=p[0],m=p[1];(0,o.useEffect)((function(){f&&m(f)}),[f]);return(0,r.jsx)(i.Ug,{spacing:"0",children:t.map((function(e){return(0,r.jsx)(a.zx,{_focus:{border:null},onClick:function(){return function(e){s(e),m(e)}(e)},size:"sm",colorScheme:v===e?"brand":"gray",leftIcon:(0,c.a)(e),variant:h,children:e},e)}))})}},72596:function(e,n,t){"use strict";var r=t(34051),o=t.n(r),i=t(85893),a=t(67294),c=t(97375),l=t(20949),s=t(68527),u=t(88718),f=t(15193),d=t(64981),h=t(96486),p=t(71118),v=t(19029),m=t(86669),g=t(62665),y=t(70577),b=t(84696);function x(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function j(e,n,t,r,o,i,a){try{var c=e[i](a),l=c.value}catch(s){return void t(s)}c.done?n(l):Promise.resolve(l).then(r,o)}function w(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function O(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){w(e,n,t[n])}))}return e}function _(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function S(e){return function(e){if(Array.isArray(e))return x(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"===typeof e)return x(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return x(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.Z=function(e){var n=e.onLoad,t=e.filter,r=e.isInfinite,x=_(e,["onLoad","filter","isInfinite"]),w=(0,g.Z)().session,E=(0,c.qY)(),C=E.isOpen,k=E.onOpen,P=E.onClose,N=(0,a.useRef)(),I=(0,a.useState)(0),Z=I[0],T=I[1],z=(0,a.useState)(null),L=z[0],A=z[1],R=(0,a.useState)(null),F=R[0],H=R[1];(0,a.useEffect)((function(){A(null),T(Z+1)}),[t]);var B=(0,l.ff)(d.Z.borderColor.light,d.Z.borderColor.dark),Y=function(){A((0,h.cloneDeep)(L))},$=function(){var e,n=(e=o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.rR.post("/translate/cancel/adopt/".concat(F.id));case 2:F.adopted=void 0,F.tlor=void 0,Y(),H(null),P();case 7:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(r,o){var i=e.apply(n,t);function a(e){j(i,r,o,a,c,"next",e)}function c(e){j(i,r,o,a,c,"throw",e)}a(void 0)}))});return function(){return n.apply(this,arguments)}}();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(v.Z,{onLoad:n,onDataChange:function(e){A(h.concat.apply(void 0,[null!==L&&void 0!==L?L:[]].concat(S(e))))},isInfinite:r,children:0===(null===L||void 0===L?void 0:L.length)?(0,i.jsx)(p.Z,{}):(0,i.jsx)(s.gC,{alignItems:"left",p:"2",children:null===L||void 0===L?void 0:L.map((function(e,n){var t;return(0,i.jsx)(s.xu,{p:"2",borderBottom:n<L.length-1?"1px solid ".concat(B):null,children:(0,i.jsx)(m.Z,O({data:e,onChange:Y,showTranslate:(null===w||void 0===w?void 0:w.user.id)==(null===(t=e.tlor)||void 0===t?void 0:t.id),onRemoveAdopt:(0,y.SL)(null===w||void 0===w?void 0:w.user.role)?function(){k(),H(e)}:null},x))},e.id)}))})},Z),(0,i.jsx)(u.aR,{isOpen:C,leastDestructiveRef:N,onClose:P,children:(0,i.jsx)(u.dh,{children:F&&(0,i.jsxs)(u._T,{children:[(0,i.jsxs)(u.fY,{fontSize:"lg",fontWeight:"bold",children:["\u53d6\u6d88\u8ba4\u9886\u8d44\u683c: ",F.title]}),(0,i.jsx)(u.iP,{children:"\u4e00\u822c\u6765\u8bf4\uff0c\u53ea\u6709\u5f53\u7528\u6237\u957f\u65f6\u95f4\u6ca1\u53bb\u7ffb\u8bd1\u65f6\uff0c\u624d\u53d6\u6d88\u5176\u8ba4\u9886\u8d44\u683c\uff0c\u6ce8\u610f\uff1a\u53d6\u6d88\u8d44\u683c\u4f1a\u6263\u9664\u8ba4\u9886\u8005\u4e00\u5b9a\u7684\u79ef\u5206"}),(0,i.jsxs)(u.xo,{children:[(0,i.jsx)(f.zx,{ref:N,onClick:P,children:"\u53d6\u6d88"}),(0,i.jsx)(f.zx,{colorScheme:"red",onClick:$,ml:3,children:"\u786e\u8ba4\u53d6\u6d88\u8ba4\u9886\u8d44\u683c"})]})]})})})]})}}},function(e){e.O(0,[5445,4885,4617,1921,1228,8703,7351,8718,2539,1111,3649,9177,3009,6771,1926,9840,6669,5140,9774,2888,179],(function(){return n=95910,e(e.s=n);var n}));var n=e.O();_N_E=n}]);