(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3048],{95644:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/tag/navs/[id]",function(){return r(4961)}])},83504:function(e,n,r){"use strict";var t=r(85893),i=r(68527),s=r(1950),c=r(62665),o=r(24871),a=r(96486),u=r(67294),l=r(63091),d=r(70577);function f(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function h(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){f(e,n,r[n])}))}return e}function p(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},s=Object.keys(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}n.Z=function(e){var n=e.title,r=e.routes,f=e.children,x=e.p,v=p(e,["title","routes","children","p"]),j=(0,c.Z)().session,m=(0,u.useState)(r),b=m[0],g=m[1];return(0,u.useEffect)((function(){if(null===j||void 0===j?void 0:j.user){var e=!0,n=!1,r=void 0;try{for(var t,i=b[Symbol.iterator]();!(e=(t=i.next()).done);e=!0){var s=t.value;s.minRole==l.u.ContentAdmin?s.disabled=!(0,d.SL)(j.user.role):s.minRole==l.u.ADMIN&&(s.disabled=!(0,d.GJ)(j.user.role))}}catch(c){n=!0,r=c}finally{try{e||null==i.return||i.return()}finally{if(n)throw r}}}g((0,a.cloneDeep)(b))}),[null===j||void 0===j?void 0:j.user]),(0,t.jsxs)(i.xu,{display:"flex",children:[(0,t.jsx)(o.Z,h({routes:b,title:n},v)),(0,t.jsx)(s.ZP,{className:"side-card",ml:"4",width:"100%",p:null!==x&&void 0!==x?x:6,pb:"1",children:f})]})}},99901:function(e,n,r){"use strict";var t=r(85893),i=r(11604),s=r(20949),c=r(41664),o=r(11163);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function u(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){a(e,n,r[n])}))}return e}function l(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},s=Object.keys(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var d=r(67294).forwardRef((function(e,n){var r=e.isActive,c=e.icon,o=e.children,a=l(e,["isActive","icon","children"]);return(0,t.jsxs)(i.m$.a,u({"aria-current":r?"page":void 0,width:"100%",px:"3",py:"2",rounded:"md",ref:n,fontSize:"1rem",fontWeight:"bold",color:(0,s.ff)("gray.700","whiteAlpha.900"),transition:"all 0.2s",display:"flex",alignItems:"center",className:"hover-bg",_activeLink:{color:(0,s.ff)("var(--chakra-colors-brand-500)","brand.200"),fontWeight:"600"}},a,{children:[c&&(0,t.jsx)(i.m$.span,{mr:"5",fontSize:"1.1rem",display:{base:"none",md:"block"},width:"20px",children:c}),(0,t.jsx)(i.m$.span,{children:o})]}))}));n.Z=function(e){var n,r=e.href,s=e.icon,a=e.children,f=e.query,h=e.exactPath,p=void 0!==h&&h,x=l(e,["href","icon","children","query","exactPath"]),v=(0,o.useRouter)().asPath;return n=p?v.split("?")[0]==encodeURI(r):v.startsWith(encodeURI(r)),(0,t.jsx)(i.m$.div,u({userSelect:"none",display:"flex",alignItems:"center",lineHeight:"1.5rem"},x,{children:(0,t.jsx)(c.default,{href:{pathname:r,query:f},passHref:!0,children:(0,t.jsx)(d,{isActive:n,icon:s,children:a})})}))}},24871:function(e,n,r){"use strict";var t=r(85893),i=r(68527),s=r(1950),c=r(11163),o=r(67294),a=r(99901);function u(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){u(e,n,r[n])}))}return e}function d(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},s=Object.keys(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function f(e){var n=e.routes,r=(e.pathname,e.contentRef,d(e,["routes","pathname","contentRef"]));return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(i.Kq,{as:"ul",children:n.map((function(e){return e.disabled?null:(0,t.jsx)(a.Z,l({as:"li",href:e.path,icon:e.icon},r,{children:(0,t.jsx)("span",{children:e.title})}),e.path)}))})})}n.Z=function(e){var n=e.routes,r=e.title,a=d(e,["routes","title"]),u=(0,c.useRouter)().pathname,h=o.useRef(null);return(0,t.jsxs)(i.gC,{alignItems:"left",width:["180px","180px","250px","250px"],height:"fit-content",children:[(0,t.jsx)(s.ZP,{p:"5",className:"side-card",children:(0,t.jsx)(i.X6,{size:"md",fontSize:"1.3rem",children:r})}),(0,t.jsx)(s.ZP,l({p:"0",className:"side-card"},a,{children:(0,t.jsx)(i.xu,{ref:h,as:"nav","aria-label":"Main Navigation",pos:"sticky",sx:{overscrollBehavior:"contain"},top:"8.5rem",p:"3",overflowY:"auto",className:"sidebar-content",flexShrink:0,children:(0,t.jsx)(f,l({routes:n,pathname:u,contentRef:h},a))})}))]})}},4961:function(e,n,r){"use strict";r.r(n);var t=r(34051),i=r.n(t),s=r(85893),c=r(28609),o=r(97375),a=r(68527),u=r(4612),l=r(15193),d=r(88718),f=r(47398),h=r(32095),p=r(7657),x=r(11604),v=r(67294),j=r(41039),m=r(30092),b=r(83504),g=r(11163),y=r(84696),w=r(1950),k=r(34745),O=(r(64e3),r(8193)),S=r(96486),C=r(89583),z=r(13540);function I(e,n,r,t,i,s,c){try{var o=e[s](c),a=o.value}catch(u){return void r(u)}o.done?n(a):Promise.resolve(a).then(t,i)}function P(e){return function(){var n=this,r=arguments;return new Promise((function(t,i){var s=e.apply(n,r);function c(e){I(s,t,i,c,o,"next",e)}function o(e){I(s,t,i,c,o,"throw",e)}c(void 0)}))}}n.default=function(){var e=(0,c.pm)(),n=(0,g.useRouter)(),r=(0,v.useState)(null),t=r[0],f=r[1],h=(0,v.useState)([]),p=h[0],x=h[1],O=(0,v.useState)([]),I=O[0],D=O[1],N=(0,o.qY)(),_=N.isOpen,U=N.onOpen,q=N.onClose,A=(0,v.useState)(""),T=A[0],F=A[1],$=(0,v.useState)(!1),W=$[0],H=$[1],X=(0,v.useState)(null),Y=X[0],B=X[1],J=(0,v.useState)(null),Q=J[0],L=J[1],M=(0,v.useState)(null),G=M[0],K=M[1],V=function(){var e=P(i().mark((function e(n){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.rR.get("/tag/navs/".concat(n));case 2:r=e.sent,D(r.data),x((0,S.cloneDeep)(r.data));case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();(0,v.useEffect)((function(){var e=n.query.id;e&&y.rR.get("/tag/byId?id=".concat(e)).then((function(e){f(e.data),V(e.data.id)}))}),[n.query.id]);var ee=function(){var n=P(i().mark((function n(){var r,t,s,c,o,a,u;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(""!=T){n.next=3;break}return e({description:"\u5bfc\u822a\u540d\u79f0\u4e0d\u80fd\u4e3a\u7a7a",status:"error",duration:3e3,isClosable:!0}),n.abrupt("return");case 3:for(r=0,t=!0,s=!1,c=void 0,n.prev=5,o=I[Symbol.iterator]();!(t=(a=o.next()).done);t=!0)(u=a.value).id>r&&(r=u.id);n.next=13;break;case 9:n.prev=9,n.t0=n.catch(5),s=!0,c=n.t0;case 13:n.prev=13,n.prev=14,t||null==o.return||o.return();case 16:if(n.prev=16,!s){n.next=19;break}throw c;case 19:return n.finish(16);case 20:return n.finish(13);case 21:I.unshift({id:r+1,title:T,entries:[]}),D((0,S.cloneDeep)(I)),F("");case 24:case"end":return n.stop()}}),n,null,[[5,9,13,21],[14,,16,20]])})));return function(){return n.apply(this,arguments)}}(),ne=function(){var e=P(i().mark((function e(n){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=n.items,D((0,S.cloneDeep)(r));case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),re=function(){var n=P(i().mark((function n(){var r,t,s,c,o,a,u;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(Y.title=Y.title.trim(),Y.desc=Y.desc.trim(),!(0==Y.title.length||Y.title.length>=20)){n.next=5;break}return e({description:"\u540d\u79f0\u957f\u5ea6\u4e0d\u80fd\u4e3a 0,\u4e5f\u4e0d\u80fd\u5927\u4e8e 20",status:"error",duration:3e3,isClosable:!0}),n.abrupt("return");case 5:if(!(0==Y.desc.length||Y.desc.length>=30)){n.next=8;break}return e({description:"\u7b80\u4ecb\u957f\u5ea6\u4e0d\u80fd\u4e3a 0,\u4e5f\u4e0d\u80fd\u5927\u4e8e 30",status:"error",duration:3e3,isClosable:!0}),n.abrupt("return");case 8:if(0!=Y.url.trim().length){n.next=11;break}return e({description:"\u94fe\u63a5\u4e0d\u80fd\u4e3a\u7a7a",status:"error",duration:3e3,isClosable:!0}),n.abrupt("return");case 11:if(0!=Y.icon.trim().length){n.next=14;break}return e({description:"icon\u4e0d\u80fd\u4e3a\u7a7a",status:"error",duration:3e3,isClosable:!0}),n.abrupt("return");case 14:if(W){n.next=18;break}G.entries.push(Y),n.next=37;break;case 18:for(r=[],t=!0,s=!1,c=void 0,n.prev=20,o=G.entries[Symbol.iterator]();!(t=(a=o.next()).done);t=!0)(u=a.value).id==Y.id?r.push(Y):r.push(u);n.next=28;break;case 24:n.prev=24,n.t0=n.catch(20),s=!0,c=n.t0;case 28:n.prev=28,n.prev=29,t||null==o.return||o.return();case 31:if(n.prev=31,!s){n.next=34;break}throw c;case 34:return n.finish(31);case 35:return n.finish(28);case 36:G.entries=r;case 37:B(null),q(),H(!1);case 40:case"end":return n.stop()}}),n,null,[[20,24,28,36],[29,,31,35]])})));return function(){return n.apply(this,arguments)}}(),te=function(){var n=P(i().mark((function n(r){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(0,S.isEqual)(I,p)){n.next=3;break}return e({description:"\u6ca1\u6709\u4fee\u6539\uff0c\u65e0\u9700\u66f4\u65b0",status:"info",duration:3e3,isClosable:!0}),n.abrupt("return");case 3:return n.next=5,y.rR.post("/tag/navs",{tagId:t.id,navs:null!==r&&void 0!==r?r:I});case 5:e({description:"\u66f4\u65b0\u6210\u529f",status:"success",duration:3e3,isClosable:!0});case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),ie=function(e){var n=e.items,r=!0,t=!1,i=void 0;try{for(var s,c=I[Symbol.iterator]();!(r=(s=c.next()).done);r=!0){var o=s.value;o.id==Q&&(o.entries=n)}}catch(a){t=!0,i=a}finally{try{r||null==c.return||c.return()}finally{if(t)throw i}}D((0,S.cloneDeep)(I))},se=function(){var n=P(i().mark((function n(r){var t,s,c,o,a,u,l;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(r.entries.length>0)){n.next=3;break}return e({description:"\u8bf7\u5148\u5220\u9664\u8be5\u5bfc\u822a\u680f\u4e0b\u7684\u6240\u6709\u7f51\u7ad9\u540e\uff0c\u518d\u5220\u9664\u5bfc\u822a\u680f",status:"error",duration:3e3,isClosable:!0}),n.abrupt("return");case 3:t=[],s=!0,c=!1,o=void 0,n.prev=5,a=I[Symbol.iterator]();case 7:if(s=(u=a.next()).done){n.next=15;break}if((l=u.value).id!=r.id){n.next=11;break}return n.abrupt("continue",12);case 11:t.push(l);case 12:s=!0,n.next=7;break;case 15:n.next=21;break;case 17:n.prev=17,n.t0=n.catch(5),c=!0,o=n.t0;case 21:n.prev=21,n.prev=22,s||null==a.return||a.return();case 24:if(n.prev=24,!c){n.next=27;break}throw o;case 27:return n.finish(24);case 28:return n.finish(21);case 29:D(t);case 30:case"end":return n.stop()}}),n,null,[[5,17,21,29],[22,,24,28]])})));return function(e){return n.apply(this,arguments)}}();return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(m.Z,{children:t&&(0,s.jsxs)(b.Z,{title:"\u7ba1\u7406\u5458",routes:j.xt,children:[(0,s.jsxs)(a.kC,{alignItems:"center",justify:"space-between",children:[(0,s.jsxs)(a.X6,{size:"sm",children:[t.name," \u7684\u7f51\u5740\u5bfc\u822a "]}),(0,s.jsxs)(a.Ug,{spacing:"4",children:[(0,s.jsx)(u.II,{size:"sm",width:"400px",variant:"flushed",value:T,onChange:function(e){return F(e.currentTarget.value.trim())},placeholder:"\u8f93\u5165\u5bfc\u822a\u540d\uff0c\u4f8b\u5982\u70ed\u95e8\u63a8\u8350\u3001\u6280\u672f\u535a\u5ba2\u7b49"}),(0,s.jsx)(l.zx,{size:"sm",variant:"outline",_focus:{border:null},onClick:ee,children:"\u65b0\u5efa\u5bfc\u822a"}),(0,s.jsx)(l.zx,{size:"sm",onClick:function(){return te()},children:"\u63d0\u4ea4\u66f4\u65b0"}),(0,s.jsx)(z.Z,{id:t.id+"-nav",fontSize:"1.3rem"})]})]}),(0,s.jsx)(a.iz,{my:"4"}),(0,s.jsxs)(a.kC,{children:[(0,s.jsxs)(w.ZP,{borderWidth:"1px",children:[(0,s.jsx)(a.xv,{fontSize:"0.9rem",mb:"2",children:"\u62d6\u52a8\u5bfc\u822a\u680f\u6392\u5e8f"}),(0,s.jsx)(k.Z,{items:I,renderItem:function(e){var n=e.item;e.collapseIcon,e.handler;return(0,s.jsx)(a.xv,{p:"1",cursor:"pointer",children:n.title},n.id)},maxDepth:1,onChange:ne})]}),I&&(0,s.jsx)(a.gC,{ml:"4",mt:"4",alignItems:"left",spacing:"6",children:I.map((function(e){return(0,s.jsxs)(a.xu,{children:[(0,s.jsx)(E,{nav:e,onChange:function(e){return D((0,S.cloneDeep)(I))},onSortEntries:function(){return L(e.id)},onDeleteNav:function(){return se(e)}}),(0,s.jsxs)(a.Eq,{mt:"3",children:[(0,s.jsxs)(l.zx,{size:"sm",variant:"ghost",onClick:function(){return function(e){var n=0,r=!0,t=!1,i=void 0;try{for(var s,c=e.entries[Symbol.iterator]();!(r=(s=c.next()).done);r=!0){var o=s.value;o.id>n&&(n=o.id)}}catch(a){t=!0,i=a}finally{try{r||null==c.return||c.return()}finally{if(t)throw i}}B({id:n+1,title:"Rust\u5b98\u7f51",desc:"Rust\u8bed\u8a00\u7684\u5b98\u65b9\u7f51\u7ad9",icon:"https://www.rust-lang.org/static/images/rust-logo-blk.svg",url:"https://rust-lang.org"}),K(e),U()}(e)},children:[(0,s.jsx)(C.wEH,{})," \u6dfb\u52a0\u7f51\u7ad9"]}),e.entries.map((function(n){return(0,s.jsx)(R,{nav:e,entry:n,onEditEnry:function(){!function(e,n){K(e),B(n),H(!0),U()}(e,n)},onRemoveEnry:function(){return function(e,n){var r=[],t=!0,i=!1,s=void 0;try{for(var c,o=e.entries[Symbol.iterator]();!(t=(c=o.next()).done);t=!0){var a=c.value;a.id!=n&&r.push(a)}}catch(l){i=!0,s=l}finally{try{t||null==o.return||o.return()}finally{if(i)throw s}}e.entries=r;var u=(0,S.cloneDeep)(I);D(u)}(e,n.id)}})}))]}),Q==e.id&&(0,s.jsxs)(w.ZP,{borderWidth:"1px",children:[(0,s.jsxs)(a.Ug,{mb:"2",children:[(0,s.jsx)(a.xv,{fontSize:"0.9rem",children:"\u62d6\u52a8\u7f51\u7ad9\u540d\u6392\u5e8f"}),(0,s.jsx)(l.zx,{size:"xs",onClick:function(){return L(null)},children:"\u5173\u95ed"})]}),(0,s.jsx)(k.Z,{items:e.entries,renderItem:Z,maxDepth:1,onChange:ie})]})]})}))})]})]})}),(0,s.jsxs)(d.u_,{isOpen:_,onClose:q,children:[(0,s.jsx)(d.ZA,{}),(0,s.jsxs)(d.hz,{children:[(0,s.jsx)(d.xB,{children:W?"\u7f16\u8f91\u7f51\u7ad9":"\u521b\u5efa\u7f51\u7ad9"}),Y&&(0,s.jsxs)(d.fe,{mb:"2",children:[(0,s.jsxs)(a.gC,{alignItems:"left",children:[(0,s.jsxs)(a.Ug,{children:[(0,s.jsx)(a.xv,{width:"100px",children:"\u540d\u79f0"}),(0,s.jsx)(u.II,{value:Y.title,onChange:function(e){Y.title=e.currentTarget.value,B((0,S.cloneDeep)(Y))}})]}),(0,s.jsxs)(a.Ug,{children:[(0,s.jsx)(a.xv,{width:"100px",children:"\u94fe\u63a5"}),(0,s.jsx)(u.II,{value:Y.url,onChange:function(e){Y.url=e.currentTarget.value,B((0,S.cloneDeep)(Y))}})]}),(0,s.jsxs)(a.Ug,{children:[(0,s.jsx)(a.xv,{width:"100px",children:"\u7b80\u4ecb"}),(0,s.jsx)(u.II,{value:Y.desc,onChange:function(e){Y.desc=e.currentTarget.value,B((0,S.cloneDeep)(Y))}})]}),(0,s.jsxs)(a.Ug,{children:[(0,s.jsx)(a.xv,{width:"100px",children:"icon"}),(0,s.jsx)(u.II,{value:Y.icon,onChange:function(e){Y.icon=e.currentTarget.value,B((0,S.cloneDeep)(Y))}})]})]}),(0,s.jsx)(l.zx,{mt:"4",onClick:re,children:"\u63d0\u4ea4"})]})]})]})]})};var E=function(e){var n=e.nav,r=(0,v.useState)(null),t=r[0],c=r[1],o=function(){var r=P(i().mark((function r(){return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:n.title=t,c(null),e.onChange(n);case 3:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();return(0,s.jsx)(s.Fragment,{children:t?(0,s.jsxs)(a.Ug,{children:[(0,s.jsx)(u.II,{autoFocus:!0,size:"sm",value:t,onChange:function(e){return c(e.currentTarget.value)}}),(0,s.jsx)(l.zx,{size:"sm",onClick:o,children:"\u4fee\u6539\u6807\u9898"}),(0,s.jsx)(l.zx,{size:"sm",variant:"outline",onClick:function(){return c(null)},children:"\u53d6\u6d88"})]}):(0,s.jsxs)(a.Ug,{spacing:"3",children:[(0,s.jsx)(a.X6,{size:"sm",children:n.title}),(0,s.jsx)(O.$iz,{fontSize:"0.9rem",cursor:"pointer",onClick:function(){return c(n.title)}}),(0,s.jsx)(f.u,{label:"\u5220\u9664\u5bfc\u822a\u680f",children:(0,s.jsx)(a.xu,{children:(0,s.jsx)(O.oHP,{fontSize:"0.9rem",cursor:"pointer",onClick:e.onDeleteNav})})}),n.entries.length>=2&&(0,s.jsx)(f.u,{label:"\u5bf9\u7f51\u7ad9\u8fdb\u884c\u6392\u5e8f",children:(0,s.jsx)(a.xu,{children:(0,s.jsx)(O.sF$,{fontSize:"0.9rem",cursor:"pointer",onClick:e.onSortEntries})})})]})})},R=function(e){e.nav;var n=e.entry;return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(h.J2,{trigger:"hover",children:[(0,s.jsx)(h.xo,{children:(0,s.jsxs)(a.Ug,{cursor:"pointer",children:[(0,s.jsx)(p.qE,{size:"xs",src:n.icon}),(0,s.jsx)(a.xv,{children:n.title})]})}),(0,s.jsxs)(h.yk,{children:[(0,s.jsx)(h.QH,{}),(0,s.jsx)(h.b,{children:(0,s.jsxs)(a.Ug,{children:[(0,s.jsx)(l.zx,{size:"sm",onClick:e.onRemoveEnry,children:"\u5220\u9664"}),(0,s.jsx)(l.zx,{size:"sm",onClick:e.onEditEnry,children:"\u4fee\u6539"})]})})]})]})})},Z=function(e){var n=e.item;return(0,s.jsx)(x.m$.span,{children:n.title})}},13540:function(e,n,r){"use strict";var t=r(34051),i=r.n(t),s=r(85893),c=r(97375),o=r(47398),a=r(68527),u=r(88718),l=r(96356),d=r(7657),f=r(33441),h=r(30381),p=r.n(h),x=r(67294),v=r(8193),j=r(84696),m=r(46870),b=r(29489);function g(e,n,r,t,i,s,c){try{var o=e[s](c),a=o.value}catch(u){return void r(u)}o.done?n(a):Promise.resolve(a).then(t,i)}n.Z=function(e){var n=e.id,r=e.fontSize,t=void 0===r?"1rem":r,h=(0,c.qY)(),y=h.isOpen,w=h.onOpen,k=h.onClose,O=(0,x.useState)(null),S=O[0],C=O[1],z=(0,x.useState)(null),I=z[0],P=z[1],E=function(){var e,r=(e=i().mark((function e(){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(S){e.next=6;break}return e.next=3,j.rR.get("/revision/logs?id=".concat(n));case 3:r=e.sent,C(r.data),r.data.length>0&&P(r.data[0]);case 6:w();case 7:case"end":return e.stop()}}),e)})),function(){var n=this,r=arguments;return new Promise((function(t,i){var s=e.apply(n,r);function c(e){g(s,t,i,c,o,"next",e)}function o(e){g(s,t,i,c,o,"throw",e)}c(void 0)}))});return function(){return r.apply(this,arguments)}}();return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.u,{label:"\u5386\u53f2\u4fee\u6539\u8bb0\u5f55",children:(0,s.jsx)(a.xu,{onClick:E,cursor:"pointer",children:(0,s.jsx)(v.wYb,{fontSize:t})})}),(0,s.jsxs)(u.u_,{isOpen:y,onClose:k,children:[(0,s.jsx)(u.ZA,{}),(0,s.jsxs)(u.hz,{minWidth:"800px",h:"600px",overflowY:"auto",children:[(0,s.jsx)(u.xB,{children:"\u5386\u53f2\u4fee\u6539\u8bb0\u5f55"}),(0,s.jsx)(u.fe,{children:(0,s.jsxs)(a.Ug,{alignItems:"top",spacing:"6",children:[(0,s.jsx)(a.gC,{alignItems:"left",width:"270px",spacing:"4",zIndex:"1",children:null===S||void 0===S?void 0:S.map((function(e,n){return(0,s.jsxs)(a.kC,{fontSize:"sm",justify:"space-between",alignItems:"center",p:"1",onClick:function(){return P(e)},cursor:"pointer",className:e.c==(null===I||void 0===I?void 0:I.c)?"highlight-bg":null,children:[(0,s.jsxs)(a.Ug,{children:[(0,s.jsx)(l.Vp,{size:"sm",borderRadius:"50%",variant:e.c==(null===I||void 0===I?void 0:I.c)?"subtle":"outline",children:n+1}),(0,s.jsx)(d.qE,{size:"sm",src:e.creator.avatar}),(0,s.jsx)(a.xv,{children:e.creator.nickname})]}),(0,s.jsxs)(a.xv,{children:["\u4fee\u6539\u4e8e ",(0,m.Zh)(p().unix(e.c))]})]})}))}),I&&(0,s.jsx)(a.xu,{width:"700px",position:"fixed",pl:"300px",children:(0,s.jsx)(f.g,{height:"500px",width:"100%",value:(0,b.Q)(I.ct)})})]})})]})]})]})}},29489:function(e,n,r){"use strict";function t(e){try{for(var n in e)if("function"===typeof e[n]){var r=e[n];r=r.toString(),e[n]=r.replace(/\n/g,"<br/>")}var t=JSON.stringify(e,null,2);return t=t.replace(/&/g,"&").replace(/</g,"<").replace(/>/g,">")}catch(i){return console.error("\u5f02\u5e38\u4fe1\u606f:"+i),""}}r.d(n,{Q:function(){return t}})}},function(e){e.O(0,[5445,4885,4617,1921,1228,8703,7351,8718,2539,1111,3649,9177,7528,3009,6771,1926,9840,9774,2888,179],(function(){return n=95644,e(e.s=n);var n}));var n=e.O();_N_E=n}]);