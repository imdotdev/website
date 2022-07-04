(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6986],{11391:function(e,n,t){"use strict";t.d(n,{Ph:function(){return m}});var r=t(79762),i=t(11604),o=t(94244),c=t(19703),a=t(38554),l=t.n(a),s=t(67294);function u(){return u=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},u.apply(this,arguments)}function d(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}var f=["children","placeholder","className"],h=["rootProps","placeholder","icon","color","height","h","minH","minHeight","iconColor","iconSize","isFullWidth"],p=["children"],v=(0,i.Gp)((function(e,n){var t=e.children,r=e.placeholder,o=e.className,a=d(e,f);return s.createElement(i.m$.select,u({},a,{ref:n,className:(0,c.cx)("chakra-select",o)}),r&&s.createElement("option",{value:""},r),t)}));c.Ts&&(v.displayName="SelectField");var m=(0,i.Gp)((function(e,n){var t=(0,i.jC)("Select",e),a=(0,i.Lr)(e),f=a.rootProps,p=a.placeholder,m=a.icon,x=a.color,g=a.height,y=a.h,b=a.minH,w=a.minHeight,S=a.iconColor,O=a.iconSize;a.isFullWidth;var _=d(a,h),C=(0,c.Vl)(_,o.oE),E=C[0],P=C[1],k=(0,r.Yp)(P),I={width:"100%",height:"fit-content",position:"relative",color:x},N=l()({paddingEnd:"2rem"},t.field,{_focus:{zIndex:"unset"}});return s.createElement(i.m$.div,u({className:"chakra-select__wrapper",__css:I},E,f),s.createElement(v,u({ref:n,height:null!=y?y:g,minH:null!=b?b:w,placeholder:p},k,{__css:N}),e.children),s.createElement(j,u({"data-disabled":(0,c.PB)(k.disabled)},(S||x)&&{color:S||x},{__css:t.icon},O&&{fontSize:O}),m))}));c.Ts&&(m.displayName="Select");var x=function(e){return s.createElement("svg",u({viewBox:"0 0 24 24"},e),s.createElement("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}))},g=(0,i.m$)("div",{baseStyle:{position:"absolute",display:"inline-flex",alignItems:"center",justifyContent:"center",pointerEvents:"none",top:"50%",transform:"translateY(-50%)"}}),j=function(e){var n=e.children,t=void 0===n?s.createElement(x,null):n,r=d(e,p),i=s.cloneElement(t,{role:"presentation",className:"chakra-select__icon",focusable:!1,"aria-hidden":!0,style:{width:"1em",height:"1em",color:"currentColor"}});return s.createElement(g,u({},r,{className:"chakra-select__icon-wrapper"}),s.isValidElement(t)?i:null)};c.Ts&&(j.displayName="SelectIcon")},86071:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/translation/subjects",function(){return t(76626)}])},76626:function(e,n,t){"use strict";t.r(n),t.d(n,{IndexSidebar:function(){return b}});var r=t(34051),i=t.n(r),o=t(85893),c=t(68527),a=t(11391),l=t(1950),s=t(99394),u=t(57331),d=t(72596),f=t(30092),h=t(10245),p=t(7e3),v=t(67294),m=t(89583),x=t(84696),g=t(60241);function j(e,n,t,r,i,o,c){try{var a=e[o](c),l=a.value}catch(s){return void t(s)}a.done?n(l):Promise.resolve(l).then(r,i)}function y(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var o=e.apply(n,t);function c(e){j(o,r,i,c,a,"next",e)}function a(e){j(o,r,i,c,a,"throw",e)}c(void 0)}))}}n.default=function(){var e=(0,v.useState)("created"),n=e[0],t=e[1],r=function(){var e=y(i().mark((function e(t){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=x.rR.get("/translate/tsubjects/home?filter=".concat(n,"&page=").concat(t,"&per_page=").concat(p.perPage)),e.abrupt("return",r);case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,v.useEffect)((function(){return(0,u.Il)(!0),function(){return(0,u.Il)(!1)}}),[]),(0,o.jsx)(f.Z,{children:(0,o.jsxs)(c.Ug,{alignItems:"top",spacing:"3",children:[(0,o.jsxs)(c.gC,{alignItems:"left",width:["100%","100%","70%","70%"],spacing:"3",children:[(0,o.jsx)(l.ZP,{p:"2",className:"side-card",border:"none",children:(0,o.jsxs)(c.kC,{justifyContent:"space-between",alignItems:"center",children:[(0,o.jsx)(h.Z,{routes:g.tSubLinks,exactPath:!0}),(0,o.jsxs)(a.Ph,{size:"sm",width:"150px",variant:"unstyled",value:n,onChange:function(e){return t(e.currentTarget.value)},children:[(0,o.jsx)("option",{value:"created",children:"\u5f85\u8ba4\u9886"}),(0,o.jsx)("option",{value:"adopted",children:"\u5df2\u8ba4\u9886"}),(0,o.jsx)("option",{value:"translated",children:"\u5df2\u7ffb\u8bd1"})]})]})}),(0,o.jsx)(l.ZP,{width:"100%",height:"fit-content",p:"0",className:"side-card",border:"none",children:(0,o.jsx)(d.Z,{onLoad:r,filter:n,isInfinite:!0})})]}),(0,o.jsx)(b,{})]})})};var b=function(){var e=(0,v.useState)("likes"),n=e[0],t=e[1],r=(0,v.useState)([]),a=r[0],u=r[1],d=function(){var e=y(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.rR.get("/translate/tsubjects/home?filter=created&page=1&per_page=10&sorter=".concat(n));case 2:t=e.sent,u(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,v.useEffect)((function(){d()}),[n]);var f;return(0,o.jsx)(c.gC,{alignItems:"left",width:"35%",display:{base:"none",md:"flex"},spacing:"3",children:(0,o.jsxs)(l.ZP,{p:"0",className:"card-opaque",children:[(0,o.jsxs)(l.Ol,{children:[(0,o.jsx)(c.X6,{size:"xs",cursor:"pointer",children:"\u4eba\u6c14\u9009\u9898\u7b49\u4f60\u6765\u6218"}),(0,o.jsx)(s.Z,{filters:["\u70b9\u8d5e","\u60ac\u8d4f"],onChange:function(e){t("\u70b9\u8d5e"==e?"likes":"reward")}})]}),(0,o.jsx)(c.iz,{}),(0,o.jsx)(l.eW,{children:(0,o.jsx)(c.gC,{alignItems:"left",spacing:"4",pl:"1",children:a.map((function(e){return(0,o.jsxs)(c.xu,{children:[(0,o.jsx)(c.rU,{href:"/r/tsubject/".concat(e.id),children:(0,o.jsx)(c.xv,{noOfLines:1,children:e.title})}),(0,o.jsxs)(c.Ug,{mt:"2",fontSize:"0.85rem",layerStyle:"textSecondary",children:[(0,o.jsxs)(c.Ug,{spacing:"1",children:[(0,o.jsx)(m.BgW,{}),(0,o.jsx)(c.xv,{children:null!==(f=e.likes)&&void 0!==f?f:0})]}),(0,o.jsxs)(c.Ug,{spacing:"1",children:[(0,o.jsx)(m.RcD,{}),(0,o.jsx)(c.xv,{children:e.reward})]})]})]})}))})})]})})}},99394:function(e,n,t){"use strict";var r=t(85893),i=t(67294),o=t(68527),c=t(15193),a=t(21948),l=t(32532);n.Z=function(e){var n=e.filters,t=void 0===n?[l.a.Best,l.a.Featured,l.a.Recent]:n,s=e.onChange,u=e.initFilter,d=void 0===u?t.length>0?t[0]:l.a.Best:u,f=e.variant,h=void 0===f?"ghost":f,p=(0,i.useState)(d),v=p[0],m=p[1];(0,i.useEffect)((function(){d&&m(d)}),[d]);return(0,r.jsx)(o.Ug,{spacing:"0",children:t.map((function(e){return(0,r.jsx)(c.zx,{_focus:{border:null},onClick:function(){return function(e){s(e),m(e)}(e)},size:"sm",colorScheme:v===e?"brand":"gray",leftIcon:(0,a.a)(e),variant:h,children:e},e)}))})}},72596:function(e,n,t){"use strict";var r=t(34051),i=t.n(r),o=t(85893),c=t(67294),a=t(97375),l=t(20949),s=t(68527),u=t(88718),d=t(15193),f=t(64981),h=t(96486),p=t(71118),v=t(19029),m=t(86669),x=t(62665),g=t(70577),j=t(84696);function y(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function b(e,n,t,r,i,o,c){try{var a=e[o](c),l=a.value}catch(s){return void t(s)}a.done?n(l):Promise.resolve(l).then(r,i)}function w(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function S(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){w(e,n,t[n])}))}return e}function O(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function _(e){return function(e){if(Array.isArray(e))return y(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"===typeof e)return y(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return y(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.Z=function(e){var n=e.onLoad,t=e.filter,r=e.isInfinite,y=O(e,["onLoad","filter","isInfinite"]),w=(0,x.Z)().session,C=(0,a.qY)(),E=C.isOpen,P=C.onOpen,k=C.onClose,I=(0,c.useRef)(),N=(0,c.useState)(0),Z=N[0],z=N[1],L=(0,c.useState)(null),R=L[0],T=L[1],A=(0,c.useState)(null),U=A[0],B=A[1];(0,c.useEffect)((function(){T(null),z(Z+1)}),[t]);var F=(0,l.ff)(f.Z.borderColor.light,f.Z.borderColor.dark),D=function(){T((0,h.cloneDeep)(R))},H=function(){var e,n=(e=i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.rR.post("/translate/cancel/adopt/".concat(U.id));case 2:U.adopted=void 0,U.tlor=void 0,D(),B(null),k();case 7:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(r,i){var o=e.apply(n,t);function c(e){b(o,r,i,c,a,"next",e)}function a(e){b(o,r,i,c,a,"throw",e)}c(void 0)}))});return function(){return n.apply(this,arguments)}}();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(v.Z,{onLoad:n,onDataChange:function(e){T(h.concat.apply(void 0,[null!==R&&void 0!==R?R:[]].concat(_(e))))},isInfinite:r,children:0===(null===R||void 0===R?void 0:R.length)?(0,o.jsx)(p.Z,{}):(0,o.jsx)(s.gC,{alignItems:"left",p:"2",children:null===R||void 0===R?void 0:R.map((function(e,n){var t;return(0,o.jsx)(s.xu,{p:"2",borderBottom:n<R.length-1?"1px solid ".concat(F):null,children:(0,o.jsx)(m.Z,S({data:e,onChange:D,showTranslate:(null===w||void 0===w?void 0:w.user.id)==(null===(t=e.tlor)||void 0===t?void 0:t.id),onRemoveAdopt:(0,g.SL)(null===w||void 0===w?void 0:w.user.role)?function(){P(),B(e)}:null},y))},e.id)}))})},Z),(0,o.jsx)(u.aR,{isOpen:E,leastDestructiveRef:I,onClose:k,children:(0,o.jsx)(u.dh,{children:U&&(0,o.jsxs)(u._T,{children:[(0,o.jsxs)(u.fY,{fontSize:"lg",fontWeight:"bold",children:["\u53d6\u6d88\u8ba4\u9886\u8d44\u683c: ",U.title]}),(0,o.jsx)(u.iP,{children:"\u4e00\u822c\u6765\u8bf4\uff0c\u53ea\u6709\u5f53\u7528\u6237\u957f\u65f6\u95f4\u6ca1\u53bb\u7ffb\u8bd1\u65f6\uff0c\u624d\u53d6\u6d88\u5176\u8ba4\u9886\u8d44\u683c\uff0c\u6ce8\u610f\uff1a\u53d6\u6d88\u8d44\u683c\u4f1a\u6263\u9664\u8ba4\u9886\u8005\u4e00\u5b9a\u7684\u79ef\u5206"}),(0,o.jsxs)(u.xo,{children:[(0,o.jsx)(d.zx,{ref:I,onClick:k,children:"\u53d6\u6d88"}),(0,o.jsx)(d.zx,{colorScheme:"red",onClick:H,ml:3,children:"\u786e\u8ba4\u53d6\u6d88\u8ba4\u9886\u8d44\u683c"})]})]})})})]})}}},function(e){e.O(0,[5445,4885,4617,1921,1228,8703,7351,8718,2539,1111,3649,9177,7763,3009,6771,1926,9840,2993,6669,209,9774,2888,179],(function(){return n=86071,e(e.s=n);var n}));var n=e.O();_N_E=n}]);