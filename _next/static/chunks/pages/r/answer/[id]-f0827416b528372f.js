(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8445],{86216:function(n,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/r/answer/[id]",function(){return r(2340)}])},2340:function(n,t,r){"use strict";r.r(t);var o=r(34051),c=r.n(o),e=r(85893),u=r(11163),i=r(67294),s=r(84696),a=r(87079);function f(n,t,r,o,c,e,u){try{var i=n[e](u),s=i.value}catch(a){return void r(a)}i.done?t(s):Promise.resolve(s).then(o,c)}t.default=function(){var n=(0,u.useRouter)();(0,i.useEffect)((function(){n.query.id&&t(n.query.id)}),[n]);var t=function(){var t,r=(t=c().mark((function t(r){var o;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.rR.get("/discussion/id/by/answerId/".concat(r));case 2:o=t.sent,n.push("".concat((0,a.Lk)(o.data),"#").concat(r));case 4:case"end":return t.stop()}}),t)})),function(){var n=this,r=arguments;return new Promise((function(o,c){var e=t.apply(n,r);function u(n){f(e,o,c,u,i,"next",n)}function i(n){f(e,o,c,u,i,"throw",n)}u(void 0)}))});return function(n){return r.apply(this,arguments)}}();return(0,e.jsx)(e.Fragment,{})}},56184:function(n,t,r){"use strict";var o;r.d(t,{N:function(){return o}}),function(n){n.Common="/r",n.Tags="/tags",n.Courses="/courses",n.Dashboard="/dashboard",n.Editor="/editor",n.Admin="/admin",n.Bookmarks="/bookmarks",n.Settings="/settings",n.Jobs="/jobs",n.Books="/books",n.Series="/series",n.Notifications="/notifications",n.Sponsors="/sponsors",n.Explore="/explore",n.Login="/login",n.Search="/search",n.Discussion="/discussion",n.Course="/course",n.Nav="/nav",n.Translation="/translation"}(o||(o={}))},26822:function(n,t,r){"use strict";var o;function c(n){var t=i(n);return t==o.Post||t==o.Series||t==o.Book}function e(n){return i(n)==o.Tag}function u(n){return i(n)==o.Answer}function i(n){return""==n?"":n[0]}r.d(t,{iJ:function(){return o},rL:function(){return c},dd:function(){return e},vP:function(){return u},MW:function(){return i},cg:function(){return s}}),function(n){n.Undefined="0",n.Tag="1",n.Comment="2",n.User="3",n.Post="4",n.Series="5",n.Book="6",n.Org="7",n.Discussion="8",n.Answer="9",n.Reply="a",n.Course="b",n.CoursePage="c",n.TSubject="d"}(o||(o={}));var s=function(n){switch(n){case o.Post:return"\u6587\u7ae0";case o.Series:return"\u7cfb\u5217";case o.Course:return"\u6559\u7a0b";case o.Discussion:return"\u95ee\u7b54";case o.Answer:return"\u56de\u7b54";case o.TSubject:return"\u9009\u9898";default:return"\u672a\u77e5IDType"}}},87079:function(n,t,r){"use strict";r.d(t,{Ab:function(){return e},hK:function(){return u},S4:function(){return i},qs:function(){return s},nR:function(){return a},Zb:function(){return f},U2:function(){return d},Lk:function(){return p},gn:function(){return v},M6:function(){return N}});var o=r(56184),c=r(26822);function e(n){return n.domain?"/".concat(n.domain):"/".concat(n.id.substring(2))}function u(n,t){return"".concat(e(n),"/").concat(t)}function i(n){return"".concat(o.N.Course,"/").concat(n,"/")}function s(n){return"".concat(o.N.Series,"/").concat(n,"/")}function a(n,t){return n.url?n.url:"".concat(o.N.Course,"/").concat(n.id,"/").concat(t)}var f=function(n){return n.url?n.url:n.type===c.iJ.Post?u(n.creator,n.id):n.type===c.iJ.Series?"".concat(o.N.Series,"/").concat(n.id):n.type===c.iJ.Book?"".concat(o.N.Books,"/").concat(n.id):n.type===c.iJ.Discussion?"".concat(o.N.Discussion,"/").concat(n.id):"/"},d=function(n){return n.type===c.iJ.Post?u(n.creator,n.id):n.type===c.iJ.Series?"".concat(o.N.Series,"/").concat(n.id):n.type===c.iJ.Book?"".concat(o.N.Books,"/").concat(n.id):"/"},p=function(n){switch((0,c.MW)(n)){case c.iJ.Post:return"/posts/".concat(n);case c.iJ.Series:return"/series/".concat(n);case c.iJ.User:return"/".concat(n.substring(2));case c.iJ.Discussion:return"".concat(o.N.Discussion,"/").concat(n);case c.iJ.TSubject:return"".concat(o.N.Common,"/tsubject/").concat(n);case c.iJ.Course:return i(n);case c.iJ.Answer:return"".concat(o.N.Common,"/answer/").concat(n)}},v=function(n){return"".concat(o.N.Discussion,"/").concat(n)},N=function(n){return"".concat(o.N.Tags,"/").concat(n)}},11163:function(n,t,r){n.exports=r(80880)}},function(n){n.O(0,[9774,2888,179],(function(){return t=86216,n(n.s=t);var t}));var t=n.O();_N_E=t}]);