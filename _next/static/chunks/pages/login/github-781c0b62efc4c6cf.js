(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8280],{10480:function(n,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login/github",function(){return r(19331)}])},19331:function(n,t,r){"use strict";r.r(t);var e=r(34051),u=r.n(e),o=r(85893),i=r(11163),c=r(67294),s=r(64762),a=r(84696),f=r(16586),v=r(62665);function p(n,t,r,e,u,o,i){try{var c=n[o](i),s=c.value}catch(a){return void r(a)}c.done?t(s):Promise.resolve(s).then(e,u)}t.default=function(){var n=(0,v.Z)().useLogin,t=(0,i.useRouter)(),r=t.query.code;(0,c.useEffect)((function(){r&&e(r).catch((function(n){console.log("\u767b\u5f55\u51fa\u9519\u4e86\uff1a",n),t.push("/login")}))}),[r]);var e=function(){var r,e=(r=u().mark((function r(e){var o,i;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,a.rR.post("/user/login/github",{code:e});case 2:o=r.sent,(0,s.Fr)(o.data.token),n(),(i=f.Z.get("current-page"))?(f.Z.remove("current-page"),t.push(i)):t.push("/");case 7:case"end":return r.stop()}}),r)})),function(){var n=this,t=arguments;return new Promise((function(e,u){var o=r.apply(n,t);function i(n){p(o,e,u,i,c,"next",n)}function c(n){p(o,e,u,i,c,"throw",n)}i(void 0)}))});return function(n){return e.apply(this,arguments)}}();return(0,o.jsx)(o.Fragment,{})}},62665:function(n,t,r){"use strict";var e=r(34051),u=r.n(e),o=r(67294),i=r(84696),c=r(45522),s=r(64762);function a(n,t,r,e,u,o,i){try{var c=n[o](i),s=c.value}catch(a){return void r(a)}c.done?t(s):Promise.resolve(s).then(e,u)}function f(n){return function(){var t=this,r=arguments;return new Promise((function(e,u){var o=n.apply(t,r);function i(n){a(o,e,u,i,c,"next",n)}function c(n){a(o,e,u,i,c,"throw",n)}i(void 0)}))}}t.Z=function(){var n=(0,o.useState)(null),t=n[0],r=n[1],e=(0,c.ZP)("/user/session",(function(){return i.rR.get("/user/session").then((function(n){return n.data}))}),{dedupingInterval:6e4}),a=e.data,v=e.revalidate;(0,o.useEffect)((function(){r(a)}),[a]);var p=function(){var n=f(u().mark((function n(){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:v();case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),h=function(){var n=f(u().mark((function n(){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.rR.post("/user/logout");case 2:r(null),(0,s.gy)();case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return{session:t,useLogin:p,logout:h}}}},function(n){n.O(0,[8703,9774,2888,179],(function(){return t=10480,n(n.s=t);var t}));var t=n.O();_N_E=t}]);