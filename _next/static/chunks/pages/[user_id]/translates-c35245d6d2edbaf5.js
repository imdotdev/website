(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[61],{92684:function(n,e,t){"use strict";t.d(e,{ac:function(){return u}});t(11604);var r=t(19703),o=t(67294),i=t(85393),a=r.jU?o.useLayoutEffect:o.useEffect;function u(n){var e=(0,i.O)(),t=Array.isArray(n)?n:[n],u=r.jU&&"matchMedia"in e.window,c=o.useState(t.map((function(n){return!!u&&!!e.window.matchMedia(n).matches}))),s=c[0],f=c[1];return a((function(){if(u){var n=t.map((function(n){return e.window.matchMedia(n)})),r=n.map((function(e,t){var r=function(e){var t=n.findIndex((function(n){return n.media===e.media}));f((function(n){var r=n.map((function(n){return n}));return r[t]=e.matches,r}))};return"function"===typeof n[t].addEventListener?n[t].addEventListener("change",r):n[t].addListener(r),r}));return function(){n.forEach((function(e,t){"function"===typeof n[t].removeEventListener?n[t].removeEventListener("change",r[t]):n[t].removeListener(r[t])}))}}}),[]),s}r.Ts;r.Ts},64679:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[user_id]/translates",function(){return t(83309)}])},83309:function(n,e,t){"use strict";t.r(e);var r=t(85893),o=t(68527),i=t(38671),a=t(38693),u=t(7e3),c=t(67294),s=t(26822),f=t(32532),d=t(84696);e.default=function(){var n=(0,c.useState)(null),e=n[0],t=n[1],l=(0,c.useState)(f.a.Latest),h=l[0],p=l[1];return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(a.Z,{onUserLoaded:function(n){return t(n)},onFilterChange:function(n){p(n)},children:e&&(0,r.jsx)(o.xu,{className:"side-card",children:(0,r.jsx)(i.Z,{onLoad:function(n){return function(n){return e.type===s.iJ.User?d.rR.get("/user/posts?id=".concat(e.id,"&filter=").concat(h,"&page=").concat(n,"&per_page=").concat(u.perPage,"&t=true")):d.rR.get("/story/posts/org/".concat(e.id,"?type=0&filter=").concat(h,"&page=").concat(n,"&per_page=").concat(u.perPage))}(n)},showPinned:!0,showOrg:e.type===s.iJ.User,filter:h,showLiked:!0,showViews:!0,isInfinite:!0})})})})}},38671:function(n,e,t){"use strict";var r=t(85893),o=t(67294),i=t(20949),a=t(68527),u=t(2993),c=t(64981),s=t(96486),f=t(71118),d=t(19029);function l(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function h(n){return function(n){if(Array.isArray(n))return l(n)}(n)||function(n){if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||function(n,e){if(!n)return;if("string"===typeof n)return l(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return l(n,e)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}e.Z=function(n){var e=n.card,t=void 0===e?u.Z:e,l=n.showBottomDivider,p=void 0===l||l,v=n.type,m=void 0===v?"classic":v,g=n.showPinned,w=void 0!==g&&g,y=n.showOrg,b=void 0===y||y,j=n.onLoad,x=n.filter,L=n.tagFilter,_=n.onRemove,E=n.showLiked,S=void 0!==E&&E,A=n.isInfinite,P=n.showViews,k=void 0!==P&&P,C=n.followPush,I=(0,o.useState)(0),O=I[0],Z=I[1],N=(0,o.useState)(null),U=N[0],T=N[1];(0,o.useEffect)((function(){T(null),Z(O+1)}),[x,L]);var F=(0,i.ff)(c.Z.borderColor.light,c.Z.borderColor.dark),M=t;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(d.Z,{onLoad:j,onDataChange:function(n){T(s.concat.apply(void 0,[null!==U&&void 0!==U?U:[]].concat(h(n))))},isInfinite:A,children:0===(null===U||void 0===U?void 0:U.length)?(0,r.jsx)(f.Z,{}):(0,r.jsx)(a.gC,{alignItems:"left",children:null===U||void 0===U?void 0:U.map((function(e,t){return e.disables?null:(0,r.jsx)(a.xu,{py:"2",borderBottom:t<U.length-1||p?"1px solid ".concat(F):null,px:"1",children:(0,r.jsx)(M,{story:e,size:n.size,type:m,highlight:n.highlight,showPinned:w,showOrg:b,onRemove:_,showLiked:S,showViews:k,followPush:C})},e.id)}))})},O)})}}},function(n){n.O(0,[5445,4885,4617,1921,1228,8703,7351,8718,2539,1111,3649,9177,7763,3009,6771,1926,9840,2993,5769,8638,6563,9774,2888,179],(function(){return e=64679,n(n.s=e);var e}));var e=n.O();_N_E=e}]);