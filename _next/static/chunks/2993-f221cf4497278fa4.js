"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2993],{21201:function(e,r,t){t.d(r,{I:function(){return f}});var n=t(85893),i=(t(67294),t(68527)),s=t(7657),c=t(11604),o=t(47398),l=t(70201),a=t(30381),h=t.n(a),d=t(92178),u=t(87079),x=t(70660),f=function(e){var r,t=e.story,a=e.showFooter,f=void 0===a||a,j=e.size,g=void 0===j?"lg":j;e.showOrg;return(0,n.jsxs)(i.Ug,{spacing:"2",alignItems:"center",children:[(0,n.jsx)(s.qE,{src:t.creator.avatar,size:g,as:"a",href:(0,u.Ab)(t.creator),cursor:"pointer"}),(0,n.jsx)(d.Z,{userId:t.creator.id,children:(0,n.jsx)(i.xv,{size:"sm",as:"a",href:(0,u.Ab)(t.creator),cursor:"pointer",_hover:{color:"var(--chakra-colors-brand-500)"},children:""===t.creator.nickname?t.creator.username:t.creator.nickname})}),(0,n.jsxs)(i.xv,{layerStyle:"textSecondary",fontSize:"lg"===g?".85rem":"sm",children:["lg"==g?"\u53d1\u5e03\u4e8e":"\xb7"," ",h()(null!==(r=t.created)&&void 0!==r?r:t.updated).fromNow()]}),t.tsubject&&(0,n.jsxs)(i.Ug,{children:[(0,n.jsx)(i.xv,{children:"\xb7"}),(0,n.jsx)(x.Z,{id:t.tsubject,layerStyle:"textSecondary",fontSize:"lg"===g?".85rem":"sm",isText:!0})]}),f&&(0,n.jsxs)(i.xv,{layerStyle:"textSecondary",fontSize:".85rem",children:[" \xb7\xa0\xa0\u88ab\u6d4f\u89c8 ",(0,n.jsx)(c.m$.span,{fontWeight:"bold",children:t.views})," \u6b21"]}),t.status==l.n.Hidden&&(0,n.jsx)(o.u,{label:"\u7528\u6237\u53ef\u89c1\u7684\u5185\u5bb9\u53ea\u4f1a\u5c55\u793a\u5728\u7528\u6237\u4e3b\u9875\u7684\u6587\u7ae0\u5217\u8868\u4e2d",children:(0,n.jsx)(i.xv,{layerStyle:"textSecondary",fontSize:".85rem",children:" \xb7\xa0\xa0\u7528\u6237\u53ef\u89c1"})})]})};r.Z=f},2993:function(e,r,t){var n=t(85893),i=t(67294),s=t(92684),c=t(68527),o=t(47398),l=t(96356),a=t(34651),h=t(88718),d=t(15193),u=t(21201),x=t(85832),f=t(21948),j=t(87609),g=t(37763),m=t.n(g),v=t(26822),p=t(87079),b=t(89583),y=t(22778),S=t(79177),w=t(65684);function k(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function z(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,i,s=[],c=!0,o=!1;try{for(t=t.call(e);!(c=(n=t.next()).done)&&(s.push(n.value),!r||s.length!==r);c=!0);}catch(l){o=!0,i=l}finally{try{c||null==t.return||t.return()}finally{if(o)throw i}}return s}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return k(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return k(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.Z=function(e){var r,t=e.story,g=e.type,k=void 0===g?"classic":g,O=e.showLiked,I=void 0!==O&&O,C=e.showViews,U=void 0!==C&&C,Z=e.highlighted,A=void 0!==Z&&Z,P=e.followPush,_=z((0,s.ac)("(min-width: 768px)"),1)[0],W=_?c.Ug:c.gC,E=z(i.useState(!1),2),T=E[0],D=E[1],R=function(){return D(!1)},H=i.useRef();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(c.gC,{alignItems:"left",spacing:"classic"===k?4:2,p:"2",className:A?"highlight-bordered":null,children:[(0,n.jsxs)(c.kC,{justifyContent:"space-between",alignItems:"center",children:[(0,n.jsx)(u.Z,{story:t,showFooter:!1,size:"md",showOrg:e.showOrg}),e.onRemove&&(0,n.jsx)(o.u,{label:"\u5c06\u6587\u7ae0\u4ece\u6807\u7b7e\u4e2d\u79fb\u9664",children:(0,n.jsx)(c.xu,{cursor:"pointer",onClick:function(){return D(!0)},children:(0,f.a)("close","1.1rem")})})]}),(0,n.jsx)(c.rU,{href:(0,p.Zb)(t),children:(0,n.jsxs)(W,{alignItems:_?"top":"left",cursor:"pointer",pl:"2",pt:"1",children:[(0,n.jsxs)(c.gC,{alignItems:"left",spacing:"classic"===k?3:2,width:_&&"classic"===k?"calc(100% - 15rem)":"100%",children:[(0,n.jsxs)(c.X6,{size:"md",fontSize:"classic"===k?"1.3rem":"1.2rem",children:[(0,n.jsx)(m(),{highlightClassName:"highlight-search-match",textToHighlight:t.title,searchWords:[e.highlight]}),t.type===v.iJ.Series&&(0,n.jsx)(l.Vp,{size:"sm",ml:"2",mt:"4px",children:"SERIES"})]}),(0,n.jsx)(c.xv,{layerStyle:"classic"===k?"textSecondary":null,children:(0,n.jsx)(m(),{highlightClassName:"highlight-search-match",textToHighlight:(0,S.ZP)(null!==(r=t.brief)&&void 0!==r?r:""),searchWords:[e.highlight]})})]}),t.cover&&"classic"===k&&(0,n.jsx)(a.Ee,{src:t.cover,width:"15rem",height:"120px",pt:_?0:2,borderRadius:"4px"})]})}),(0,n.jsxs)(c.kC,{justify:"space-between",alignItems:"center",children:[(0,n.jsxs)(c.Ug,{pl:"2",spacing:"3",children:[I?(0,n.jsx)(x.Z,{storyID:t.id,liked:t.liked,count:t.likes,fontSize:"1rem"}):(0,n.jsxs)(c.Ug,{opacity:"0.9",children:[(0,n.jsx)(b.BgW,{fontSize:".9rem"}),(0,n.jsx)(c.xv,{ml:"2",children:(0,n.jsx)(j.Z,{count:t.likes})})]}),(0,n.jsx)("a",{href:"".concat((0,p.U2)(t),"#comments"),children:(0,n.jsxs)(c.Ug,{opacity:"0.9",cursor:"pointer",children:[(0,f.a)("comments",".9rem"),(0,n.jsx)(c.xv,{ml:"2",children:(0,n.jsx)(j.Z,{count:t.comments})})]})}),U&&(0,n.jsxs)(c.Ug,{opacity:"0.9",children:[(0,n.jsx)(b.z5B,{fontSize:".9rem"}),(0,n.jsx)(c.xv,{ml:"2",children:(0,n.jsx)(j.Z,{count:t.views})})]}),(0,n.jsx)(y.Z,{tags:t.rawTags})]}),P&&(0,n.jsx)(w.Z,{tagId:P,pushId:t.id})]})]}),(0,n.jsx)(h.aR,{isOpen:T,leastDestructiveRef:H,onClose:R,children:(0,n.jsx)(h.dh,{children:(0,n.jsxs)(h._T,{children:[(0,n.jsxs)(h.fY,{fontSize:"lg",fontWeight:"bold",children:["\u79fb\u9664 -  ",t.title]}),(0,n.jsx)(h.iP,{children:"\u786e\u5b9a\u8981\u79fb\u9664\u8be5\u6587\u7ae0\u5417\uff1f"}),(0,n.jsxs)(h.xo,{children:[(0,n.jsx)(d.zx,{ref:H,onClick:R,children:"\u53d6\u6d88"}),(0,n.jsx)(d.zx,{colorScheme:"red",onClick:function(){D(!1),e.onRemove(t.id)},ml:3,children:"\u79fb\u9664"})]})]})})})]})}},70660:function(e,r,t){t.d(r,{k:function(){return m}});var n=t(34051),i=t.n(n),s=t(85893),c=t(32095),o=t(68527),l=t(96356),a=t(92178),h=t(67294),d=t(84696),u=t(87079);function x(e,r,t,n,i,s,c){try{var o=e[s](c),l=o.value}catch(a){return void t(a)}o.done?r(l):Promise.resolve(l).then(n,i)}function f(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function j(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){f(e,r,t[r])}))}return e}function g(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}r.Z=function(e){var r=e.id,t=e.tsubject,n=e.isText,a=void 0!==n&&n,u=e.size,f=void 0===u?"sm":u,v=g(e,["id","tsubject","isText","size"]),p=(0,h.useState)(t),b=p[0],y=p[1],S=function(){var e,t=(e=i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.rR.get("/translate/tsubject/".concat(r));case 2:t=e.sent,y(t.data);case 4:case"end":return e.stop()}}),e)})),function(){var r=this,t=arguments;return new Promise((function(n,i){var s=e.apply(r,t);function c(e){x(s,n,i,c,o,"next",e)}function o(e){x(s,n,i,c,o,"throw",e)}c(void 0)}))});return function(){return t.apply(this,arguments)}}();return(0,s.jsxs)(c.J2,{trigger:"hover",onOpen:b?null:S,isLazy:!0,children:[(0,s.jsx)(c.xo,{children:a?(0,s.jsx)(o.xv,j({},v,{children:"\u7ffb\u8bd1"})):(0,s.jsx)(l.Vp,j({colorScheme:"orange",size:f},v,{cursor:"pointer",as:"a",target:"_blank",href:"/t/about",children:"\u7ffb\u8bd1"}))}),(0,s.jsxs)(c.yk,{children:[(0,s.jsx)(c.QH,{}),(0,s.jsx)(c.Yt,{fontSize:"0.9rem",layerStyle:"gradientText",children:"\u672c\u6587\u9009\u81ea\u7ffb\u8bd1\u8865\u5168\u8ba1\u5212"}),b&&(0,s.jsx)(c.b,{_focus:{outline:"none"},children:(0,s.jsx)(m,{tsubject:b})})]})]})};var m=function(e){var r=e.tsubject;return(0,s.jsxs)(o.gC,{alignItems:"start",fontSize:"0.9rem",children:[(0,s.jsxs)(o.Ug,{fontWeight:"bold",children:[(0,s.jsx)(o.xv,{minW:"fit-content",children:"\u7ffb\u8bd1:"}),(0,s.jsx)(a.Z,{userId:r.tlor.id,children:(0,s.jsx)(o.rU,{target:"_blank",href:(0,u.Ab)(r.tlor),children:(0,s.jsx)(o.xv,{children:r.tlor.nickname})})})]}),(0,s.jsxs)(o.Ug,{mt:"2",children:[(0,s.jsx)(o.xv,{minW:"fit-content",children:"\u9009\u9898:"}),(0,s.jsx)(a.Z,{userId:r.creator.id,children:(0,s.jsx)(o.rU,{target:"_blank",href:(0,u.Ab)(r.creator),children:(0,s.jsx)(o.xv,{children:r.creator.nickname})})})]}),(0,s.jsxs)(o.Ug,{mt:"2",children:[(0,s.jsx)(o.xv,{minW:"fit-content",children:"\u539f\u6587:"}),(0,s.jsx)(o.rU,{href:r.url,target:"_blank",children:(0,s.jsx)(o.xv,{noOfLines:1,children:r.url})})]})]})}},70201:function(e,r,t){var n;t.d(r,{n:function(){return n},W:function(){return i}}),function(e){e[e.All=0]="All",e[e.Draft=1]="Draft",e[e.Published=2]="Published",e[e.Hidden=3]="Hidden",e[e.Forbidden=4]="Forbidden",e[e.Approval=5]="Approval",e[e.Disabled=6]="Disabled"}(n||(n={}));var i=function(e){return e!=n.Approval&&e!=n.Disabled}}}]);