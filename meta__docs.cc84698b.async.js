(self.webpackChunk_cassiewang_cassie_store=self.webpackChunk_cassiewang_cassie_store||[]).push([[904],{13512:function(t,e,r){"use strict";r.r(e),r.d(e,{demos:function(){return o}});var d=r(75271),o={}},19696:function(t,e,r){"use strict";r.r(e),r.d(e,{demos:function(){return o}});var d=r(75271),o={}},98275:function(t,e,r){"use strict";r.r(e),r.d(e,{demos:function(){return n}});var d={};r.r(d),r.d(d,{useLatest:function(){return M}});var o={};r.r(o),r.d(o,{useCreation:function(){return s}});var h={};r.r(h),r.d(h,{useCreation:function(){return s},useLatest:function(){return M},useMemoizedFn:function(){return l.useMemoizedFn}});var _=r(90228),b=r.n(_),x=r(87999),I=r.n(x),E=r(75271),D=r.t(E,2),c=r(1049),y=r(39007),a=r(60425),g=r.t(a,2);function M(v){var u=(0,E.useRef)(v);return u.current=v,u}var l=r(37378);function s(v,u){var f=M(v);return(0,E.useMemo)(function(){return f.current()},u)}var m=r(53029),S=r(79862),p=r(91737),i=r(64078),n={"docs-demo-asyncdemo":{component:E.memo(E.lazy(function(){return r.e(433).then(r.bind(r,29782))})),asset:{type:"BLOCK",id:"docs-demo-asyncdemo",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:r(87118).Z},react:{type:"NPM",value:"18.3.1"},"./userStore.ts":{type:"FILE",value:r(66592).Z},"../Model.ts":{type:"FILE",value:r(65427).Z},"use-sync-external-store":{type:"NPM",value:"1.6.0"},"./hooks.ts":{type:"FILE",value:r(71474).Z},"./Manager/AsyncManager.ts":{type:"FILE",value:r(85051).Z},"./utils.ts":{type:"FILE",value:r(37062).Z},"../utils/event.ts":{type:"FILE",value:r(63976).Z},"./object.ts":{type:"FILE",value:r(62290).Z},"./useCreation.ts":{type:"FILE",value:r(43448).Z},"./useLatest.ts":{type:"FILE",value:r(9029).Z},"./useMemoizedFn.ts":{type:"FILE",value:r(47265).Z}},entry:"index.tsx"},context:{"./userStore.ts":c,"../Model.ts":y,"./hooks.ts":h,"./Manager/AsyncManager.ts":m,"./utils.ts":S,"../utils/event.ts":p,"./object.ts":i,"./useCreation.ts":o,"./useLatest.ts":d,"./useMemoizedFn.ts":l,react:D,"D:/frontEnd/cassie-store/src/AsyncDemo/userStore.ts":c,"D:/frontEnd/cassie-store/src/Model.ts":y,"use-sync-external-store/shim/with-selector":g,"D:/frontEnd/cassie-store/src/hooks/index.ts":h,"D:/frontEnd/cassie-store/src/Manager/AsyncManager.ts":m,"D:/frontEnd/cassie-store/src/utils/utils.ts":S,"D:/frontEnd/cassie-store/src/utils/event.ts":p,"D:/frontEnd/cassie-store/src/utils/object.ts":i,"D:/frontEnd/cassie-store/src/hooks/useCreation.ts":o,"D:/frontEnd/cassie-store/src/hooks/useLatest.ts":d,"D:/frontEnd/cassie-store/src/hooks/useMemoizedFn.ts":l},renderOpts:{compile:function(){var v=I()(b()().mark(function f(){var T,C=arguments;return b()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.next=2,r.e(838).then(r.bind(r,61838));case 2:return O.abrupt("return",(T=O.sent).default.apply(T,C));case 3:case"end":return O.stop()}},f)}));function u(){return v.apply(this,arguments)}return u}()}}}},1049:function(t,e,r){"use strict";r.r(e),r.d(e,{fetchUser:function(){return D},fetchUserList:function(){return y},searchUsers:function(){return g},userStore:function(){return x}});var d=r(90228),o=r.n(d),h=r(87999),_=r.n(h),b=r(39007),x=new b.Model({state:{user:null,userList:[],loading:!1,userListLoading:!1,error:null,userListError:null,userCount:0,hasUsers:!1},computed:[{keys:["userList"],handler:function(s){return console.log("\u{1F9EE} \u8BA1\u7B97\u5C5E\u6027\uFF1A\u7528\u6237\u5217\u8868\u7EDF\u8BA1"),{userCount:s.userList.length,hasUsers:s.userList.length>0}}}],watch:[{keys:["user"],handler:function(s){if(console.log("\u{1F442} Watch\uFF1A\u7528\u6237\u4FE1\u606F\u53D8\u5316"),s.user)try{localStorage.setItem("currentUser",JSON.stringify(s.user)),console.log("\u2705 \u7528\u6237\u4FE1\u606F\u5DF2\u4FDD\u5B58\u5230localStorage")}catch(m){console.error("\u274C \u4FDD\u5B58\u7528\u6237\u4FE1\u606F\u5931\u8D25:",m)}}}]}),I=[{id:"1",name:"\u5F20\u4E09",email:"zhangsan@example.com",avatar:"\u{1F468}\u200D\u{1F4BC}"},{id:"2",name:"\u674E\u56DB",email:"lisi@example.com",avatar:"\u{1F469}\u200D\u{1F4BB}"},{id:"3",name:"\u738B\u4E94",email:"wangwu@example.com",avatar:"\u{1F468}\u200D\u{1F3A8}"},{id:"4",name:"\u8D75\u516D",email:"zhaoliu@example.com",avatar:"\u{1F469}\u200D\u{1F52C}"},{id:"5",name:"\u94B1\u4E03",email:"qianqi@example.com",avatar:"\u{1F468}\u200D\u{1F3EB}"}],E={getUser:function(s){return _()(o()().mark(function m(){var S;return o()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,new Promise(function(n){return setTimeout(n,800+Math.random()*1200)});case 2:if(s!=="error"){i.next=4;break}throw new Error("\u7528\u6237\u4E0D\u5B58\u5728");case 4:if(s!=="network-error"){i.next=6;break}throw new Error("\u7F51\u7EDC\u8FDE\u63A5\u5931\u8D25");case 6:if(S=I.find(function(n){return n.id===s}),S){i.next=9;break}throw new Error("\u7528\u6237ID ".concat(s," \u4E0D\u5B58\u5728"));case 9:return i.abrupt("return",S);case 10:case"end":return i.stop()}},m)}))()},getUserList:function(){var s=arguments;return _()(o()().mark(function m(){var S,p,i,n,v;return o()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return S=s.length>0&&s[0]!==void 0?s[0]:1,p=s.length>1&&s[1]!==void 0?s[1]:10,f.next=4,new Promise(function(T){return setTimeout(T,500+Math.random()*800)});case 4:i=(S-1)*p,n=i+p,v=I.slice(i,n);debugger;return f.abrupt("return",{users:v,total:I.length});case 9:case"end":return f.stop()}},m)}))()},searchUsers:function(s){return _()(o()().mark(function m(){var S;return o()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,new Promise(function(n){return setTimeout(n,300+Math.random()*500)});case 2:return S=I.filter(function(n){return n.name.includes(s)||n.email.includes(s)}),i.abrupt("return",{users:S});case 4:case"end":return i.stop()}},m)}))()}};function D(l){return c.apply(this,arguments)}function c(){return c=_()(o()().mark(function l(s){var m;return o()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return console.log("\u{1F504} \u5F00\u59CB\u83B7\u53D6\u7528\u6237\u4FE1\u606F: ".concat(s)),m=x.asyncManager("fetchUser",{loadingKey:"loading",errorKey:"error",config:{retryCount:2,retryInterval:1e3}}),p.abrupt("return",m.exec(function(){var i=_()(o()().mark(function n(v,u){var f;return o()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return console.log("\u{1F4E1} \u7B2C".concat(u+1,"\u6B21\u5C1D\u8BD5\u83B7\u53D6\u7528\u6237\u4FE1\u606F")),C.next=3,E.getUser(s);case 3:return f=C.sent,console.log("\u2705 \u7528\u6237\u4FE1\u606F\u83B7\u53D6\u6210\u529F:",f.name),C.abrupt("return",{user:f});case 6:case"end":return C.stop()}},n)}));return function(n,v){return i.apply(this,arguments)}}()));case 3:case"end":return p.stop()}},l)})),c.apply(this,arguments)}function y(){return a.apply(this,arguments)}function a(){return a=_()(o()().mark(function l(){var s,m,S,p=arguments;return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return s=p.length>0&&p[0]!==void 0?p[0]:1,m=p.length>1&&p[1]!==void 0?p[1]:10,console.log("\u{1F504} \u5F00\u59CB\u83B7\u53D6\u7528\u6237\u5217\u8868: \u7B2C".concat(s,"\u9875")),S=x.asyncManager("fetchUserList",{loadingKey:"userListLoading",errorKey:"userListError",config:{retryCount:1,retryInterval:500}}),n.abrupt("return",S.exec(function(){var v=_()(o()().mark(function u(f,T){var C,L;return o()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return C=f.lastAbortController,C&&(C.abort(),console.log("\u{1F6AB} \u5DF2\u53D6\u6D88\u4E0A\u4E00\u4E2A\u7528\u6237\u5217\u8868\u8BF7\u6C42")),console.log("\u{1F4E1} \u7B2C".concat(T+1,"\u6B21\u5C1D\u8BD5\u83B7\u53D6\u7528\u6237\u5217\u8868")),P.next=5,E.getUserList(s,m);case 5:return L=P.sent,console.log("\u2705 \u7528\u6237\u5217\u8868\u83B7\u53D6\u6210\u529F: ".concat(L.users.length,"\u4E2A\u7528\u6237")),P.abrupt("return",{userList:L.users});case 8:case"end":return P.stop()}},u)}));return function(u,f){return v.apply(this,arguments)}}()));case 5:case"end":return n.stop()}},l)})),a.apply(this,arguments)}function g(l){return M.apply(this,arguments)}function M(){return M=_()(o()().mark(function l(s){var m;return o()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:if(console.log('\u{1F50D} \u641C\u7D22\u7528\u6237: "'.concat(s,'"')),s.trim()){p.next=4;break}return x.setState({userList:[]}),p.abrupt("return");case 4:return m=x.asyncManager("searchUsers",{loadingKey:"userListLoading",errorKey:"userListError"}),p.abrupt("return",m.exec(function(){var i=_()(o()().mark(function n(v,u){var f;return o()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return console.log('\u{1F50D} \u6267\u884C\u641C\u7D22: "'.concat(s,'" (\u5C1D\u8BD5').concat(u+1,")")),C.next=3,E.searchUsers(s);case 3:return f=C.sent,console.log("\u2705 \u641C\u7D22\u5B8C\u6210: \u627E\u5230".concat(f.users.length,"\u4E2A\u7528\u6237")),C.abrupt("return",{userList:f.users});case 6:case"end":return C.stop()}},n)}));return function(n,v){return i.apply(this,arguments)}}()));case 6:case"end":return p.stop()}},l)})),M.apply(this,arguments)}},53029:function(t,e,r){"use strict";r.r(e),r.d(e,{AsyncManager:function(){return l}});var d=r(25298),o=r.n(d),h=r(17069),_=r.n(h),b=r(62657),x=r.n(b),I=r(21742),E=r.n(I),D=r(83136),c=r.n(D),y=r(82092),a=r.n(y),g=r(91737),M=300,l=function(s){E()(S,s);var m=c()(S);function S(p){var i;return o()(this,S),i=m.call(this),a()(x()(i),"execId",0),a()(x()(i),"options",{}),a()(x()(i),"abortSignalMap",{}),p&&(i.options=p),i}return _()(S,[{key:"getCurrentExecId",value:function(){return this.execId}},{key:"getAbortController",value:function(i){return this.abortSignalMap[i]}},{key:"exec",value:function(i){var n=this,v=0,u=++this.execId;return console.log("\u5148\u6267\u884C\u7684 execId: ".concat(u,", \u5F53\u524D\u6700\u65B0\u7684 this.execId: ").concat(this.execId)),this.emit("loading"),new Promise(function(f,T){var C=function L(){var O=n.abortSignalMap[u-1]||null,P=n.abortSignalMap[u]=new AbortController;i({lastAbortController:O,abortController:P},v).then(function(A){return console.log("then execId, this.execId:",u,n.execId),u===n.execId&&n.emit("success",A),f(A),delete n.abortSignalMap[u],n.emit("finish",null,A),A}).catch(function(A){u===n.execId?v<(n.options.retryCount||0)?setTimeout(function(){L()},n.options.retryInterval||M):(n.emit("error",A),T(A),delete n.abortSignalMap[u],n.emit("finish",A,null)):(delete n.abortSignalMap[u],n.emit("finish",A,null),T(A)),v++})};C()})}}]),S}(g.EventEmitter2)},39007:function(t,e,r){"use strict";r.r(e),r.d(e,{Model:function(){return S}});var d=r(26068),o=r.n(d),h=r(31759),_=r.n(h),b=r(25298),x=r.n(b),I=r(17069),E=r.n(I),D=r(82092),c=r.n(D),y=r(75271),a=r(60425),g=r(64078),M=r(79862),l=r(37378),s=r(53029),m=a.useSyncExternalStoreWithSelector,S=function(){function p(i){var n=this;x()(this,p),c()(this,"isUnMount",!1),c()(this,"state",{}),c()(this,"_preState",{}),c()(this,"_subscribes",[]),c()(this,"_isInited",!1),c()(this,"asyncManagerMap",{}),c()(this,"getState",function(){return n._isInited||n.init(),n.state}),c()(this,"useSelector",function(v){var u=(0,y.useCallback)(function(L){return n.subscribe(function(O,P){P||L()})},[n]),f=(0,l.useMemoizedFn)(function(L){return L}),T=(0,l.useMemoizedFn)(function(L,O){return v?v(L,O):Object.is(L,O)}),C=m(u,n.getState,n.getState,f,T);return C}),c()(this,"useGetState",function(v,u){return n.useSelector(function(f,T){return u?u(f,T):!!(v&&(0,g.shallowEqualKeys)(f,T,v))})}),this.config=i}return E()(p,[{key:"asyncManager",value:function(n,v){var u=this,f=v||{},T=f.loadingKey,C=T===void 0?"loading":T,L=f.errorKey,O=L===void 0?"error":L,P=f.showLoading,A=P===void 0?!0:P,j=f.config;this.asyncManagerMap[n]||(this.asyncManagerMap[n]=new s.AsyncManager(j));var R=this.asyncManagerMap[n];return R.offAllListeners(),R.on("loading",function(){A&&u.setState(c()({},C,!0))}),R.on("success",function(U){_()(U)==="object"&&U!==null&&u.setState(o()(c()({},C,!1),U))}),R.on("error",function(U){u.setState(c()(c()({},C,!1),O,U))}),this.asyncManagerMap[n]}},{key:"init",value:function(){if(!this._isInited){this._isInited=!0;var n=this.config;this.state=this.getActualState({},n.state||{}),this._preState=o()({},this.state)}}},{key:"setState",value:function(n,v){if(this._isInited||this.init(),n){var u;typeof n=="function"?u=n(this.state):u=n,this.state=this.getActualState(this._preState,u),this.dispatch(v),this._preState=o()({},this.state)}}},{key:"getActualState",value:function(n,v){var u=o()(o()({},n),v),f=this.config||{},T=f.computed,C=f.watch;return u=(0,M.calcComputedState)({prevState:n,nextState:u,computed:T}),(0,M.execWatchHandler)({prevState:n,nextState:u,watch:C}),u}},{key:"dispatch",value:function(n){var v=this;this.isUnMount||this._subscribes.forEach(function(u){return u(v,(n==null?void 0:n.silent)||!1)})}},{key:"subscribe",value:function(n){var v=this;return this._subscribes.push(n),function(){v.unsubscribe(n)}}},{key:"unsubscribe",value:function(n){this._subscribes.length&&(this._subscribes=this._subscribes.filter(function(v){return v!==n}))}}]),p}()},37378:function(t,e,r){"use strict";r.r(e),r.d(e,{useMemoizedFn:function(){return o}});var d=r(75271);function o(h){var _=(0,d.useRef)(h);return _.current=h,(0,d.useCallback)(function(){return _.current.apply(_,arguments)},[])}},91737:function(t,e,r){"use strict";r.r(e),r.d(e,{EventEmitter:function(){return y},EventEmitter2:function(){return a}});var d=r(21742),o=r.n(d),h=r(83136),_=r.n(h),b=r(25298),x=r.n(b),I=r(17069),E=r.n(I),D=r(82092),c=r.n(D),y=function(){function g(){x()(this,g),c()(this,"_listeners",{})}return E()(g,[{key:"on",value:function(l,s){var m=this;return this._listeners[l]||(this._listeners[l]=[]),this._listeners[l].push(s),function(){m.off(l,s)}}},{key:"once",value:function(l,s){var m=this.on(l,function(){s.apply(void 0,arguments),m()})}},{key:"emit",value:function(l){for(var s=arguments.length,m=new Array(s>1?s-1:0),S=1;S<s;S++)m[S-1]=arguments[S];var p=this._listeners[l];return!p||!p.length?!1:(p.forEach(function(i){i.apply(void 0,m)}),!0)}},{key:"off",value:function(l,s){var m=this._listeners[l];if(!(!m||!m.length)){if(!s){this._listeners[l]=void 0;return}this._listeners[l]=m.filter(function(S){return S!==s})}}},{key:"offAllListeners",value:function(){console.log(this._listeners,"this._listeners"),this._listeners={}}}]),g}(),a=function(g){o()(l,g);var M=_()(l);function l(){return x()(this,l),M.apply(this,arguments)}return E()(l)}(y)},64078:function(t,e,r){"use strict";r.r(e),r.d(e,{shallowEqualKeys:function(){return h}});var d=r(31759),o=r.n(d);function h(b,x,I){return!b||!x?!1:o()(b)==="object"&&o()(x)==="object"?_(b,x,I):!1}function _(b,x,I){if(!b||!x)return!1;var E=Object.keys(b),D=Object.keys(x);if(E.length!==D.length)return!1;for(var c=I||E,y=0;y<c.length;y++){var a=c[y],g=c[y];if(a!==g||b[a]!==x[g])return!1}return!0}},79862:function(t,e,r){"use strict";r.r(e),r.d(e,{calcComputedState:function(){return b},calcDiffKeys:function(){return x},execWatchHandler:function(){return I}});var d=r(335),o=r.n(d),h=r(26068),_=r.n(h);function b(E){var D=E.prevState,c=E.nextState,y=E.computed;if(!y||!y.length)return c;var a=_()({},c),g=o()(y),M;try{var l=function(){var m=M.value;if(typeof m=="function"){var S=m(a,D);a=_()(_()({},a),S)}else{var p=m.keys,i=m.handler,n=p.some(function(f){return D[f]!==c[f]});if(n){var v={};p.forEach(function(f){v[f]=D[f]!==c[f]});var u=i(a,D,v);a=_()(_()({},a),u)}}};for(g.s();!(M=g.n()).done;)l()}catch(s){g.e(s)}finally{g.f()}return a}function x(E,D,c){var y={},a=!1;return c.forEach(function(g){Object.is(E[g],D[g])||(y[g]=!0,a=!0)}),{diffKeysMap:y,diff:a}}function I(E){var D=E.prevState,c=E.nextState,y=E.watch;y&&y.forEach(function(a){if(a.keys){var g=x(D,c,a.keys),M=g.diffKeysMap,l=g.diff;l&&a.handler&&a.handler(c,D,M)}})}},19972:function(t,e,r){"use strict";r.r(e),r.d(e,{texts:function(){return d}});const d=[]},24268:function(t,e,r){"use strict";r.r(e),r.d(e,{texts:function(){return d}});const d=[{value:"This is a guide example.",paraId:0}]},29191:function(t,e,r){"use strict";r.r(e),r.d(e,{texts:function(){return d}});const d=[{value:"laf-test-store",paraId:0},{value:" -->",paraId:1}]},87118:function(t,e){"use strict";e.Z=`// AsyncDemo.tsx\r
import React, { useState } from 'react';\r
import { userStore, fetchUser, fetchUserList, searchUsers } from './userStore';\r
\r
function AsyncDemo() {\r
  const [userId, setUserId] = useState('1');\r
  const [searchQuery, setSearchQuery] = useState('');\r
\r
  // \u4F7F\u7528\u9009\u62E9\u6027\u8BA2\u9605\uFF0C\u76D1\u542C\u6211\u4EEC\u9700\u8981\u7684\u5B57\u6BB5\r
  const {\r
    user,\r
    userList,\r
    loading,\r
    userListLoading,\r
    error,\r
    userListError\r
  } = userStore.useGetState([\r
    'user',\r
    'userList',\r
    'loading',\r
    'userListLoading',\r
    'error',\r
    'userListError'\r
  ]);\r
\r
  // \u5904\u7406\u641C\u7D22\uFF08\u9632\u6296\uFF09\r
  const handleSearch = (query: string) => {\r
    setSearchQuery(query);\r
    // \u7B80\u5355\u7684\u9632\u6296\u5904\u7406\r
    setTimeout(() => {\r
      if (query === searchQuery) {\r
        searchUsers(query);\r
      }\r
    }, 300);\r
  };\r
\r
  return (\r
    <div style={{ padding: '20px', maxWidth: '800px' }}>\r
      <h2>\u{1F680} AsyncManager\u529F\u80FD\u6F14\u793A</h2>\r
\r
      {/* \u7528\u6237\u4FE1\u606F\u83B7\u53D6 */}\r
      <div style={{\r
        marginBottom: '30px',\r
        padding: '20px',\r
        border: '1px solid #ddd',\r
        borderRadius: '8px'\r
      }}>\r
        <h3>\u{1F464} \u83B7\u53D6\u7528\u6237\u4FE1\u606F</h3>\r
        <div style={{ marginBottom: '15px' }}>\r
          <input\r
            type="text"\r
            value={userId}\r
            onChange={(e) => setUserId(e.target.value)}\r
            placeholder="\u8F93\u5165\u7528\u6237ID (1-5, \u6216 'error', 'network-error')"\r
            style={{ marginRight: '10px', padding: '8px', width: '250px' }}\r
          />\r
          <button\r
            onClick={() => fetchUser(userId)}\r
            disabled={loading}\r
            style={{\r
              padding: '8px 16px',\r
              backgroundColor: loading ? '#ccc' : '#007bff',\r
              color: 'white',\r
              border: 'none',\r
              borderRadius: '4px',\r
              marginRight: '10px'\r
            }}\r
          >\r
            {loading ? '\u83B7\u53D6\u4E2D...' : '\u83B7\u53D6\u7528\u6237'}\r
          </button>\r
\r
          {/* \u6D4B\u8BD5\u6309\u94AE */}\r
          <button\r
            onClick={() => {\r
             \r
                fetchUser('error').then(() => {\r
                   \r
                }).catch(err => {\r
                   debugger;\r
                })\r
             \r
            }}\r
            disabled={loading}\r
            style={{\r
              padding: '8px 16px',\r
              backgroundColor: loading ? '#ccc' : '#dc3545',\r
              color: 'white',\r
              border: 'none',\r
              borderRadius: '4px',\r
              marginRight: '10px'\r
            }}\r
          >\r
            \u6D4B\u8BD5\u9519\u8BEF\r
          </button>\r
\r
          <button\r
            onClick={() => fetchUser('network-error').catch(err => {})}\r
            \r
            disabled={loading}\r
            style={{\r
              padding: '8px 16px',\r
              backgroundColor: loading ? '#ccc' : '#fd7e14',\r
              color: 'white',\r
              border: 'none',\r
              borderRadius: '4px'\r
            }}\r
          >\r
            \u6D4B\u8BD5\u91CD\u8BD5\r
          </button>\r
        </div>\r
\r
        {/* \u7528\u6237\u4FE1\u606F\u663E\u793A */}\r
        {user && (\r
          <div style={{\r
            padding: '10px',\r
            backgroundColor: '#f8f9fa',\r
            borderRadius: '4px'\r
          }}>\r
            <strong>{user.name}</strong> ({user.email})\r
          </div>\r
        )}\r
\r
        {/* \u9519\u8BEF\u4FE1\u606F */}\r
        {error && (\r
          <div style={{\r
            padding: '10px',\r
            backgroundColor: '#f8d7da',\r
            color: '#721c24',\r
            borderRadius: '4px'\r
          }}>\r
            \u9519\u8BEF: {error.message}\r
          </div>\r
        )}\r
      </div>\r
\r
      {/* \u7528\u6237\u5217\u8868\u548C\u641C\u7D22 */}\r
      <div style={{\r
        marginBottom: '30px',\r
        padding: '20px',\r
        border: '1px solid #ddd',\r
        borderRadius: '8px'\r
      }}>\r
        <h3>\u{1F4CB} \u7528\u6237\u5217\u8868\u548C\u641C\u7D22</h3>\r
\r
        <div style={{ marginBottom: '15px' }}>\r
          <input\r
            type="text"\r
            value={searchQuery}\r
            onChange={(e) => handleSearch(e.target.value)}\r
            placeholder="\u641C\u7D22\u7528\u6237..."\r
            style={{ marginRight: '10px', padding: '8px', width: '200px' }}\r
          />\r
          <button\r
            onClick={() => fetchUserList(1, 10)}\r
            disabled={userListLoading}\r
            style={{\r
              padding: '8px 16px',\r
              backgroundColor: userListLoading ? '#ccc' : '#28a745',\r
              color: 'white',\r
              border: 'none',\r
              borderRadius: '4px',\r
              marginRight: '10px'\r
            }}\r
          >\r
            {userListLoading ? '\u52A0\u8F7D\u4E2D...' : '\u83B7\u53D6\u7528\u6237\u5217\u8868'}\r
          </button>\r
\r
          <button\r
            onClick={() => {\r
              // \u5FEB\u901F\u8FDE\u7EED\u641C\u7D22\uFF0C\u6D4B\u8BD5\u7ADE\u6001\u6761\u4EF6\r
              searchUsers('\u5F20');\r
              setTimeout(() => searchUsers('\u674E'), 100);\r
              setTimeout(() => searchUsers('\u738B'), 200);\r
            }}\r
            style={{\r
              padding: '8px 16px',\r
              backgroundColor: '#ffc107',\r
              color: '#333',\r
              border: 'none',\r
              borderRadius: '4px'\r
            }}\r
          >\r
            \u6D4B\u8BD5\u7ADE\u6001\u6761\u4EF6\r
          </button>\r
        </div>\r
\r
        {/* \u7528\u6237\u5217\u8868\u663E\u793A */}\r
        {userList.length > 0 && (\r
          <div>\r
            <h4>\u7528\u6237\u5217\u8868 ({userList.length}\u4E2A\u7528\u6237)</h4>\r
            <div style={{ maxHeight: '200px', overflowY: 'auto' }}>\r
              {userList.map(user => (\r
                <div\r
                  key={user.id}\r
                  style={{\r
                    padding: '8px',\r
                    borderBottom: '1px solid #eee',\r
                    display: 'flex',\r
                    justifyContent: 'space-between'\r
                  }}\r
                >\r
                  <span><strong>{user.name}</strong></span>\r
                  <span style={{ color: '#666' }}>{user.email}</span>\r
                </div>\r
              ))}\r
            </div>\r
          </div>\r
        )}\r
\r
        {/* \u5217\u8868\u9519\u8BEF\u4FE1\u606F */}\r
        {userListError && (\r
          <div style={{\r
            padding: '10px',\r
            backgroundColor: '#f8d7da',\r
            color: '#721c24',\r
            borderRadius: '4px'\r
          }}>\r
            \u5217\u8868\u9519\u8BEF: {userListError.message}\r
          </div>\r
        )}\r
      </div>\r
\r
      {/* \u8BF4\u660E */}\r
      <div style={{\r
        padding: '20px',\r
        backgroundColor: '#e8f4fd',\r
        borderRadius: '8px',\r
        border: '1px solid #bee5eb'\r
      }}>\r
        <h4>\u{1F3AF} \u89C2\u5BDF\u8981\u70B9\uFF1A</h4>\r
        <ul>\r
          <li><strong>Mock\u6570\u636E\u6D4B\u8BD5</strong>\uFF1A\u4F7F\u7528\u5185\u7F6Emock\u6570\u636E\uFF0C\u65E0\u9700\u771F\u5B9EAPI</li>\r
          <li><strong>\u81EA\u52A8\u72B6\u6001\u7BA1\u7406</strong>\uFF1Aloading\u548Cerror\u72B6\u6001\u81EA\u52A8\u5904\u7406</li>\r
          <li><strong>\u7ADE\u6001\u6761\u4EF6\u89E3\u51B3</strong>\uFF1A\u5FEB\u901F\u8FDE\u7EED\u8BF7\u6C42\u53EA\u663E\u793A\u6700\u65B0\u7ED3\u679C</li>\r
          <li><strong>\u91CD\u8BD5\u673A\u5236</strong>\uFF1A\u5931\u8D25\u65F6\u81EA\u52A8\u91CD\u8BD5\uFF08\u67E5\u770B\u63A7\u5236\u53F0\u65E5\u5FD7\uFF09</li>\r
          <li><strong>\u9519\u8BEF\u6D4B\u8BD5</strong>\uFF1A\u70B9\u51FB"\u6D4B\u8BD5\u9519\u8BEF"\u548C"\u6D4B\u8BD5\u91CD\u8BD5"\u6309\u94AE</li>\r
          <li><strong>\u8BF7\u6C42\u53D6\u6D88</strong>\uFF1A\u65B0\u8BF7\u6C42\u4F1A\u53D6\u6D88\u65E7\u8BF7\u6C42</li>\r
          <li><strong>\u8BA1\u7B97\u5C5E\u6027\u548CWatch</strong>\uFF1A\u4E0E\u7B2C9\u300110\u7AE0\u529F\u80FD\u5B8C\u7F8E\u7ED3\u5408</li>\r
          <li><strong>\u6253\u5F00\u63A7\u5236\u53F0</strong>\uFF1A\u89C2\u5BDF\u5F02\u6B65\u64CD\u4F5C\u7684\u8BE6\u7EC6\u6267\u884C\u8FC7\u7A0B</li>\r
        </ul>\r
\r
        <h4>\u{1F4DD} \u53EF\u7528\u7684\u6D4B\u8BD5\u6570\u636E\uFF1A</h4>\r
        <ul>\r
          <li><strong>\u7528\u6237ID 1-5</strong>\uFF1A\u6B63\u5E38\u7684\u7528\u6237\u6570\u636E</li>\r
          <li><strong>'error'</strong>\uFF1A\u6A21\u62DF\u7528\u6237\u4E0D\u5B58\u5728\u9519\u8BEF</li>\r
          <li><strong>'network-error'</strong>\uFF1A\u6A21\u62DF\u7F51\u7EDC\u8FDE\u63A5\u5931\u8D25\uFF0C\u89E6\u53D1\u91CD\u8BD5\u673A\u5236</li>\r
          <li><strong>\u641C\u7D22\u5173\u952E\u8BCD</strong>\uFF1A\u5F20\u3001\u674E\u3001\u738B\u3001\u8D75\u3001\u94B1\u7B49\u59D3\u540D\u6216\u90AE\u7BB1</li>\r
        </ul>\r
      </div>\r
    </div>\r
  );\r
}\r
\r
export default AsyncDemo;`},66592:function(t,e){"use strict";e.Z=`// userStore.ts\r
import { Model } from '../Model';\r
\r
// \u7528\u6237\u63A5\u53E3\r
interface User {\r
  id: string;\r
  name: string;\r
  email: string;\r
  avatar?: string;\r
}\r
\r
// \u7528\u6237\u72B6\u6001\r
interface UserState {\r
  user: User | null;\r
  userList: User[];\r
\r
  // \u5F02\u6B65\u72B6\u6001\uFF08\u81EA\u52A8\u7BA1\u7406\uFF09\r
  loading: boolean;\r
  userListLoading: boolean;\r
  error: Error | null;\r
  userListError: Error | null;\r
\r
  // \u8BA1\u7B97\u5C5E\u6027\uFF08\u81EA\u52A8\u8BA1\u7B97\uFF09\r
  userCount: number;\r
  hasUsers: boolean;\r
}\r
\r
// \u521B\u5EFA\u7528\u6237Store\r
const userStore = new Model<UserState>({\r
  state: {\r
    user: null,\r
    userList: [],\r
    loading: false,\r
    userListLoading: false,\r
    error: null,\r
    userListError: null,\r
    userCount: 0,\r
    hasUsers: false,\r
  },\r
\r
  // \u{1F9EE} \u8BA1\u7B97\u5C5E\u6027\uFF08\u7B2C9\u7AE0\u7684\u529F\u80FD\uFF09\r
  computed: [\r
    {\r
      keys: ['userList'],\r
      handler: (state) => {\r
        console.log('\u{1F9EE} \u8BA1\u7B97\u5C5E\u6027\uFF1A\u7528\u6237\u5217\u8868\u7EDF\u8BA1');\r
        return {\r
          userCount: state.userList.length,\r
          hasUsers: state.userList.length > 0,\r
        };\r
      },\r
    },\r
  ],\r
\r
  // \u{1F442} Watch\uFF08\u7B2C10\u7AE0\u7684\u529F\u80FD\uFF09\r
  watch: [\r
    {\r
      keys: ['user'],\r
      handler: (state) => {\r
        console.log('\u{1F442} Watch\uFF1A\u7528\u6237\u4FE1\u606F\u53D8\u5316');\r
        if (state.user) {\r
          // \u81EA\u52A8\u4FDD\u5B58\u7528\u6237\u4FE1\u606F\u5230localStorage\r
          try {\r
            localStorage.setItem('currentUser', JSON.stringify(state.user));\r
            console.log('\u2705 \u7528\u6237\u4FE1\u606F\u5DF2\u4FDD\u5B58\u5230localStorage');\r
          } catch (error) {\r
            console.error('\u274C \u4FDD\u5B58\u7528\u6237\u4FE1\u606F\u5931\u8D25:', error);\r
          }\r
        }\r
      },\r
    },\r
  ],\r
});\r
\r
// \u{1F195} Mock\u6570\u636E\u548CAPI\u6A21\u62DF\r
\r
// Mock\u7528\u6237\u6570\u636E\r
const mockUsers: User[] = [\r
  { id: '1', name: '\u5F20\u4E09', email: 'zhangsan@example.com', avatar: '\u{1F468}\u200D\u{1F4BC}' },\r
  { id: '2', name: '\u674E\u56DB', email: 'lisi@example.com', avatar: '\u{1F469}\u200D\u{1F4BB}' },\r
  { id: '3', name: '\u738B\u4E94', email: 'wangwu@example.com', avatar: '\u{1F468}\u200D\u{1F3A8}' },\r
  { id: '4', name: '\u8D75\u516D', email: 'zhaoliu@example.com', avatar: '\u{1F469}\u200D\u{1F52C}' },\r
  { id: '5', name: '\u94B1\u4E03', email: 'qianqi@example.com', avatar: '\u{1F468}\u200D\u{1F3EB}' },\r
];\r
\r
// Mock API\u51FD\u6570\r
const mockAPI = {\r
  // \u6A21\u62DF\u83B7\u53D6\u5355\u4E2A\u7528\u6237\r
  async getUser(userId: string): Promise<User> {\r
    // \u6A21\u62DF\u7F51\u7EDC\u5EF6\u8FDF\r
    await new Promise(resolve => setTimeout(resolve, 800 + Math.random() * 1200));\r
\r
    // \u6A21\u62DF\u9519\u8BEF\u60C5\u51B5\r
    if (userId === 'error') {\r
      throw new Error('\u7528\u6237\u4E0D\u5B58\u5728');\r
    }\r
\r
    if (userId === 'network-error') {\r
      throw new Error('\u7F51\u7EDC\u8FDE\u63A5\u5931\u8D25');\r
    }\r
\r
    // \u67E5\u627E\u7528\u6237\r
    const user = mockUsers.find(u => u.id === userId);\r
    if (!user) {\r
      throw new Error(\`\u7528\u6237ID \${userId} \u4E0D\u5B58\u5728\`);\r
    }\r
\r
    return user;\r
  },\r
\r
  // \u6A21\u62DF\u83B7\u53D6\u7528\u6237\u5217\u8868\r
  async getUserList(page = 1, pageSize = 10): Promise<{ users: User[], total: number }> {\r
    // \u6A21\u62DF\u7F51\u7EDC\u5EF6\u8FDF\r
    await new Promise(resolve => setTimeout(resolve, 500 + Math.random() * 800));\r
\r
    const start = (page - 1) * pageSize;\r
    const end = start + pageSize;\r
    const users = mockUsers.slice(start, end);\r
    debugger;\r
\r
    return {\r
      users,\r
      total: mockUsers.length,\r
    };\r
  },\r
\r
  // \u6A21\u62DF\u641C\u7D22\u7528\u6237\r
  async searchUsers(query: string): Promise<{ users: User[] }> {\r
    // \u6A21\u62DF\u7F51\u7EDC\u5EF6\u8FDF\r
    await new Promise(resolve => setTimeout(resolve, 300 + Math.random() * 500));\r
\r
    const users = mockUsers.filter(user =>\r
      user.name.includes(query) ||\r
      user.email.includes(query)\r
    );\r
\r
    return { users };\r
  },\r
};\r
\r
// \u{1F195} \u5F02\u6B65\u64CD\u4F5C\u65B9\u6CD5\uFF08\u4F7F\u7528AsyncManager\uFF09\r
\r
// \u83B7\u53D6\u7528\u6237\u4FE1\u606F\r
async function fetchUser(userId: string) {\r
  console.log(\`\u{1F504} \u5F00\u59CB\u83B7\u53D6\u7528\u6237\u4FE1\u606F: \${userId}\`);\r
\r
  const asyncManager = userStore.asyncManager('fetchUser', {\r
    loadingKey: 'loading',\r
    errorKey: 'error',\r
    config: {\r
      retryCount: 2,        // \u5931\u8D25\u65F6\u91CD\u8BD52\u6B21\r
      retryInterval: 1000,  // \u91CD\u8BD5\u95F4\u96941\u79D2\r
    },\r
  });\r
\r
  return asyncManager.exec(async (_, tryCount) => {\r
    console.log(\`\u{1F4E1} \u7B2C\${tryCount + 1}\u6B21\u5C1D\u8BD5\u83B7\u53D6\u7528\u6237\u4FE1\u606F\`);\r
\r
    // \u{1F3AF} \u4F7F\u7528Mock API\u800C\u4E0D\u662F\u771F\u5B9E\u7684fetch\r
    const user = await mockAPI.getUser(userId);\r
    console.log('\u2705 \u7528\u6237\u4FE1\u606F\u83B7\u53D6\u6210\u529F:', user.name);\r
\r
    // \u{1F3AF} \u5173\u952E\uFF1A\u8FD4\u56DE\u7684\u6570\u636E\u4F1A\u81EA\u52A8\u5408\u5E76\u5230\u72B6\u6001\u4E2D\r
    return { user };\r
  });\r
}\r
\r
// \u83B7\u53D6\u7528\u6237\u5217\u8868\r
async function fetchUserList(page = 1, pageSize = 10) {\r
  console.log(\`\u{1F504} \u5F00\u59CB\u83B7\u53D6\u7528\u6237\u5217\u8868: \u7B2C\${page}\u9875\`);\r
\r
  const asyncManager = userStore.asyncManager('fetchUserList', {\r
    loadingKey: 'userListLoading',\r
    errorKey: 'userListError',\r
    config: {\r
      retryCount: 1,\r
      retryInterval: 500,\r
    },\r
  });\r
\r
  return asyncManager.exec(async ({ lastAbortController }, tryCount) => {\r
    // \u53D6\u6D88\u4E0A\u4E00\u4E2A\u8BF7\u6C42\r
    if (lastAbortController) {\r
      lastAbortController.abort();\r
      console.log('\u{1F6AB} \u5DF2\u53D6\u6D88\u4E0A\u4E00\u4E2A\u7528\u6237\u5217\u8868\u8BF7\u6C42');\r
    }\r
\r
    console.log(\`\u{1F4E1} \u7B2C\${tryCount + 1}\u6B21\u5C1D\u8BD5\u83B7\u53D6\u7528\u6237\u5217\u8868\`);\r
\r
    // \u{1F3AF} \u4F7F\u7528Mock API\r
    const data = await mockAPI.getUserList(page, pageSize);\r
    console.log(\`\u2705 \u7528\u6237\u5217\u8868\u83B7\u53D6\u6210\u529F: \${data.users.length}\u4E2A\u7528\u6237\`);\r
\r
    return { userList: data.users };\r
  });\r
}\r
\r
// \u641C\u7D22\u7528\u6237\uFF08\u6F14\u793A\u7ADE\u6001\u6761\u4EF6\u89E3\u51B3\uFF09\r
async function searchUsers(query: string) {\r
  console.log(\`\u{1F50D} \u641C\u7D22\u7528\u6237: "\${query}"\`);\r
\r
  if (!query.trim()) {\r
    userStore.setState({ userList: [] });\r
    return;\r
  }\r
\r
  const asyncManager = userStore.asyncManager('searchUsers', {\r
    loadingKey: 'userListLoading',\r
    errorKey: 'userListError',\r
  });\r
\r
  return asyncManager.exec(async (_, tryCount) => {\r
    console.log(\`\u{1F50D} \u6267\u884C\u641C\u7D22: "\${query}" (\u5C1D\u8BD5\${tryCount + 1})\`);\r
\r
    // \u{1F3AF} \u4F7F\u7528Mock API\r
    const data = await mockAPI.searchUsers(query);\r
    console.log(\`\u2705 \u641C\u7D22\u5B8C\u6210: \u627E\u5230\${data.users.length}\u4E2A\u7528\u6237\`);\r
\r
    return { userList: data.users };\r
  });\r
}\r
\r
export { userStore, fetchUser, fetchUserList, searchUsers };`},85051:function(t,e){"use strict";e.Z=`// src/Manager/AsyncManager.ts - AsyncManager\u7C7B\u5B9E\u73B0\r
import { EventEmitter2 } from '../utils/event';\r
export interface AsyncManagerOptions {\r
  retryCount?: number;\r
  retryInterval?: number;\r
}\r
const DEFAULT_TIMEOUT = 300;\r
\r
export class AsyncManager<\r
  T,\r
  Fn extends (\r
    aborts: {\r
      lastAbortController: AbortController | null;\r
      abortController: AbortController;\r
    },\r
    tryCount: number,\r
  ) => Promise<T>,\r
> extends EventEmitter2<{\r
  loading: (() => void)[];\r
  success: ((result: any) => void)[];\r
  error: ((error: Error) => void)[];\r
  finish: ((error: Error | null, result: any) => void)[];\r
}> {\r
  execId = 0;  // \u6267\u884CID\uFF0C\u7528\u4E8E\u89E3\u51B3\u7ADE\u6001\u6761\u4EF6\r
  options: AsyncManagerOptions = {};\r
  abortSignalMap: Record<number, AbortController> = {};  // \u5B58\u50A8\u6BCF\u4E2A\u8BF7\u6C42\u7684\u63A7\u5236\u5668\r
\r
  constructor(options?: AsyncManagerOptions) {\r
    super();\r
    if (options) {\r
      this.options = options;\r
    }\r
  }\r
\r
  // \u83B7\u53D6\u5F53\u524D\u6267\u884CID\r
  getCurrentExecId() {\r
    return this.execId;\r
  }\r
\r
  // \u83B7\u53D6\u6307\u5B9A\u6267\u884CID\u7684\u63A7\u5236\u5668\r
  getAbortController(execId: number) {\r
    return this.abortSignalMap[execId];\r
  }\r
\r
  // \u{1F3AF} \u6838\u5FC3\u65B9\u6CD5\uFF1A\u6267\u884C\u5F02\u6B65\u64CD\u4F5C\r
  exec(fn: Fn): Promise<T> {\r
    let tryCount = 0;\r
    const execId = ++this.execId;  // \u751F\u6210\u65B0\u7684\u6267\u884CID\r
    console.log(\`\u5148\u6267\u884C\u7684 execId: \${execId}, \u5F53\u524D\u6700\u65B0\u7684 this.execId: \${this.execId}\`);\r
    // \u89E6\u53D1loading\u4E8B\u4EF6\r
    this.emit('loading');\r
\r
    return new Promise((resolve, reject) => {\r
      const _exec = () => {\r
        // \u83B7\u53D6\u4E0A\u4E00\u4E2A\u8BF7\u6C42\u7684\u63A7\u5236\u5668\r
        const lastAbortController = this.abortSignalMap[execId - 1] || null;\r
\r
        // \u521B\u5EFA\u5F53\u524D\u8BF7\u6C42\u7684\u63A7\u5236\u5668\r
        const abortController = (this.abortSignalMap[execId] = new AbortController());\r
\r
        // \u6267\u884C\u7528\u6237\u63D0\u4F9B\u7684\u5F02\u6B65\u51FD\u6570\r
        fn(\r
          {\r
            lastAbortController,\r
            abortController,\r
          },\r
          tryCount,\r
        )\r
          .then((res) => {\r
            // \u{1F3AF} \u5173\u952E\uFF1A\u53EA\u6709\u6700\u65B0\u7684\u8BF7\u6C42\u624D\u5904\u7406\u6210\u529F\u7ED3\u679C\r
            console.log( 'then execId, this.execId:', execId, this.execId);\r
            if (execId === this.execId) {\r
              this.emit('success', res);\r
            }\r
            resolve(res);\r
            delete this.abortSignalMap[execId];\r
            this.emit('finish', null, res);\r
            return res;\r
          })\r
          .catch((e) => {\r
            // \u{1F3AF} \u5173\u952E\uFF1A\u53EA\u6709\u6700\u65B0\u7684\u8BF7\u6C42\u624D\u5904\u7406\u9519\u8BEF\r
            if (execId === this.execId) {\r
              // \u68C0\u67E5\u662F\u5426\u9700\u8981\u91CD\u8BD5\r
              if (tryCount < (this.options.retryCount || 0)) {\r
                setTimeout(() => {\r
                  _exec();  // \u91CD\u8BD5\r
                }, this.options.retryInterval || DEFAULT_TIMEOUT);\r
              } else {\r
                this.emit('error', e);\r
                reject(e);\r
                delete this.abortSignalMap[execId];\r
                this.emit('finish', e, null);\r
              }\r
            } else {\r
              // \u975E\u6700\u65B0\u8BF7\u6C42\uFF0C\u76F4\u63A5\u6E05\u7406\u5E76\u62D2\u7EDD\r
              delete this.abortSignalMap[execId];\r
              this.emit('finish', e, null);\r
              reject(e);\r
            }\r
            tryCount++;\r
          });\r
      };\r
\r
      _exec();  // \u5F00\u59CB\u6267\u884C\r
    });\r
  }\r
}`},65427:function(t,e){"use strict";e.Z=`import { useCallback } from 'react';\r
import useSyncExternalStoreExports from 'use-sync-external-store/shim/with-selector';\r
import type { IDispatchOptions, TEqualityFn,TComputed,TWatch } from './type';\r
import { shallowEqualKeys,execWatchHandler } from './utils';\r
import { useMemoizedFn } from './hooks';\r
import { calcComputedState } from './utils';  // \u{1F195} \u65B0\u589E\u5BFC\u5165\r
\r
import { AsyncManager } from './Manager/AsyncManager';\r
import type { AsyncManagerOptions } from './Manager/AsyncManager';\r
\r
const { useSyncExternalStoreWithSelector } = useSyncExternalStoreExports;\r
type IEffects<M extends Model<any, any>> = Record<\r
  string,\r
  ((this: M, ...args: any[]) => any) | any\r
>;\r
// src/type.ts - \u6269\u5C55\u73B0\u6709\u7684IModelConfig\u63A5\u53E3\r
export interface IModelConfig<\r
  TState extends Record<string, any> = Record<string, any>,\r
  TEffects extends IEffects<Model<TState, TEffects>> = IEffects<Model>,\r
> {\r
  state: TState;\r
  effects?: Partial<TEffects>;\r
   watch?: TWatch<TState>;     // \u{1F3AF} Watch\u914D\u7F6E\r
  computed?: TComputed<TState>;  // \u{1F195} \u65B0\u589E\uFF1A\u8BA1\u7B97\u5C5E\u6027\u914D\u7F6E\r
}\r
type TSubscribeFunc<\r
  TState extends Record<string, any> = Record<string, any>,\r
  TEffects extends Record<string, any> = Record<string, any>,\r
> = (state: Model<TState, TEffects>, silent: boolean) => any;\r
\r
export class Model<\r
  TState extends Record<string, any> = Record<string, any>,\r
  TEffects extends Record<string, any> = Record<string, any>\r
> {\r
  isUnMount = false;\r
  state: TState = {} as TState;\r
  _preState: TState = {} as TState;\r
  _subscribes: TSubscribeFunc<TState, TEffects>[] = [];\r
  _isInited = false;\r
   asyncManagerMap: Record<\r
    string,\r
    AsyncManager<\r
      Partial<TState>,\r
      (\r
        aborts: {\r
          lastAbortController: AbortController | null;\r
          abortController: AbortController;\r
        },\r
        tryCount: number,\r
      ) => Promise<Partial<TState>>\r
    >\r
  > = {};\r
\r
  constructor(public config: IModelConfig<TState, TEffects>) {}\r
\r
\r
  // \u{1F195} \u65B0\u589E\uFF1AasyncManager\u65B9\u6CD5\uFF08\u6E90\u7801\u4E2D\u7684\u5B9E\u73B0\uFF09\r
  asyncManager(\r
    name: string,\r
    options?: {\r
      loadingKey?: string;\r
      errorKey?: string;\r
      config?: AsyncManagerOptions;\r
      showLoading?: boolean;\r
    },\r
  ) {\r
    const {\r
      loadingKey = 'loading',\r
      errorKey = 'error',\r
      showLoading = true,\r
      config,\r
    } = options || {};\r
\r
    // \u5982\u679C\u4E0D\u5B58\u5728\uFF0C\u521B\u5EFA\u65B0\u7684AsyncManager\r
    if (!this.asyncManagerMap[name]) {\r
      this.asyncManagerMap[name] = new AsyncManager(config);\r
    }\r
\r
    const asyncManager = this.asyncManagerMap[name];\r
\r
    // \u{1F3AF} \u5173\u952E\uFF1A\u6E05\u9664\u4E4B\u524D\u7684\u76D1\u542C\u5668\uFF0C\u91CD\u65B0\u7ED1\u5B9A\r
    asyncManager.offAllListeners();\r
\r
    // \u{1F3AF} \u7ED1\u5B9Aloading\u4E8B\u4EF6\r
    asyncManager.on('loading', () => {\r
      if (showLoading) {\r
        this.setState({\r
          [loadingKey]: true,\r
        } as Partial<TState>);\r
      }\r
    });\r
\r
    // \u{1F3AF} \u7ED1\u5B9Asuccess\u4E8B\u4EF6\r
    asyncManager.on('success', (result) => {\r
      if (typeof result === 'object' && result !== null) {\r
        this.setState({\r
          [loadingKey]: false,\r
          ...result,  // \u{1F3AF} \u5173\u952E\uFF1A\u5C06\u7ED3\u679C\u5408\u5E76\u5230\u72B6\u6001\u4E2D\r
        } as Partial<TState>);\r
      }\r
    });\r
\r
    // \u{1F3AF} \u7ED1\u5B9Aerror\u4E8B\u4EF6\r
    asyncManager.on('error', (error) => {\r
      this.setState({\r
        [loadingKey]: false,\r
        [errorKey]: error,\r
      } as Partial<TState>);\r
    });\r
\r
    return this.asyncManagerMap[name];\r
  }\r
\r
 // \u{1F527} \u4FEE\u6539\uFF1Ainit\u65B9\u6CD5\uFF0C\u4F7F\u7528getActualState\r
  init() {\r
    if (!this._isInited) {\r
      this._isInited = true;\r
      const config = this.config;\r
\r
      // \u{1F195} \u4F7F\u7528getActualState\u5904\u7406\u521D\u59CB\u72B6\u6001\uFF08\u5305\u542B\u8BA1\u7B97\u5C5E\u6027\uFF09\r
      this.state = this.getActualState({} as TState, config.state || {});\r
      this._preState = { ...this.state };\r
\r
 \r
    }\r
  }\r
\r
  getState = (): TState => {\r
    if (!this._isInited) {\r
      this.init();\r
    }\r
    return this.state;\r
  };\r
\r
 // \u{1F527} \u4FEE\u6539\uFF1AsetState\u65B9\u6CD5\uFF0C\u4F7F\u7528getActualState\r
  setState(\r
    state: Partial<TState> | ((state: TState) => Partial<TState>),\r
    options?: IDispatchOptions,\r
  ) {\r
    if (!this._isInited) {\r
      this.init();\r
    }\r
\r
    if (state) {\r
      // 1. \u5904\u7406\u51FD\u6570\u5F62\u5F0F\u7684state\r
      let payload: Partial<TState>;\r
      if (typeof state === 'function') {\r
        payload = state(this.state);\r
      } else {\r
        payload = state;\r
      }\r
\r
      // \u{1F195} 2. \u4F7F\u7528getActualState\u5904\u7406\u72B6\u6001\uFF08\u5305\u542B\u8BA1\u7B97\u5C5E\u6027\uFF09\r
      this.state = this.getActualState(this._preState, payload);\r
\r
      // 3. \u5206\u53D1\u66F4\u65B0\r
      this.dispatch(options);\r
      this._preState = { ...this.state };\r
    }\r
  }\r
\r
    // \u{1F195} \u65B0\u589E\uFF1AgetActualState\u65B9\u6CD5\uFF08\u6E90\u7801\u4E2D\u7684\u6838\u5FC3\u65B9\u6CD5\uFF09\r
  getActualState(prevState: TState, payload: Partial<TState>): TState {\r
    // 1. \u5408\u5E76\u72B6\u6001\r
    let nextState = { ...prevState, ...payload };\r
\r
    // 2. \u83B7\u53D6\u914D\u7F6E\r
    const { computed,watch } = this.config || {};\r
\r
    // \u{1F195} 3. \u5904\u7406\u8BA1\u7B97\u5C5E\u6027\r
    nextState = calcComputedState<TState>({\r
      prevState,\r
      nextState,\r
      computed,\r
    });\r
\r
    // 4. \u6267\u884C watch\r
    execWatchHandler({\r
      prevState,\r
      nextState,\r
      watch,\r
    });\r
\r
    return nextState;\r
  }\r
  dispatch(options?: IDispatchOptions): void {\r
    if (this.isUnMount) return;\r
\r
    this._subscribes.forEach((func) =>\r
      func(this, options?.silent || false)\r
    );\r
  }\r
\r
  subscribe(func: TSubscribeFunc<TState, TEffects>): () => void {\r
    this._subscribes.push(func);\r
    return () => {\r
      this.unsubscribe(func);\r
    };\r
  }\r
\r
  unsubscribe(func: TSubscribeFunc<TState, TEffects>): void {\r
    if (this._subscribes.length) {\r
      this._subscribes = this._subscribes.filter((fn) => fn !== func);\r
    }\r
  }\r
\r
  useSelector = (equalityFn?: TEqualityFn<TState>) => {\r
    const subscribe = useCallback(\r
      (listener: () => void) => {\r
        return this.subscribe((_, silent) => {\r
          if (!silent) {\r
            listener();\r
          }\r
        });\r
      },\r
      [this],\r
    );\r
\r
    const selector = useMemoizedFn((state: TState) => state);\r
    const isEqual = useMemoizedFn((prevState: TState, nextState: TState) => {\r
      if (equalityFn) {\r
        return equalityFn(prevState, nextState);\r
      }\r
      return Object.is(prevState, nextState);\r
    });\r
\r
    const state = useSyncExternalStoreWithSelector(\r
      subscribe,\r
      this.getState,\r
      this.getState,\r
      selector,\r
      isEqual,\r
    );\r
\r
    return state;\r
  };\r
\r
  useGetState = <Key extends keyof TState & string>(\r
    keys?: Key[],\r
    equalityFn?: TEqualityFn<TState>,\r
  ) => {\r
    return this.useSelector((prevState, nextState) => {\r
      if (equalityFn) {\r
        return equalityFn(prevState, nextState);\r
      }\r
      if (keys && shallowEqualKeys(prevState, nextState, keys)) {\r
        return true;\r
      }\r
      return false;\r
    });\r
  };\r
}`},71474:function(t,e){"use strict";e.Z=`export * from './useLatest';\r
export * from './useMemoizedFn';\r
export * from './useCreation';\r
\r
`},43448:function(t,e){"use strict";e.Z=`import { useMemo } from 'react';\r
import { useLatest } from './useLatest';\r
\r
export function useCreation<T>(fn: () => T, deps: any[]): T {\r
  const fnRef = useLatest(fn);\r
  return useMemo(() => {\r
    return fnRef.current();\r
  }, deps);\r
}\r
`},9029:function(t,e){"use strict";e.Z=`import { useRef } from 'react';\r
\r
export function useLatest<T>(val: T) {\r
  const ref = useRef<T>(val);\r
  ref.current = val;\r
  return ref\r
}\r
`},47265:function(t,e){"use strict";e.Z=`import { useCallback, useRef } from "react";\r
\r
export function useMemoizedFn<T extends (...args: any[]) => any>(fn: T): T {\r
  const fnRef = useRef(fn);\r
  fnRef.current = fn;\r
\r
  return useCallback((...args: any[]) => {\r
    return fnRef.current(...args);\r
  }, []) as T;\r
}\r
`},63976:function(t,e){"use strict";e.Z=`type IFunction = (...args: any) => void;\r
\r
export class EventEmitter<TEventName extends string = string> {\r
  _listeners = {} as Record<TEventName, IFunction[] | undefined>;\r
  on(type: TEventName, fn: IFunction) {\r
    if (!this._listeners[type]) {\r
      this._listeners[type] = [];\r
    }\r
    this._listeners[type]!.push(fn);\r
    return () => {\r
      this.off(type, fn);\r
    };\r
  }\r
  once(type: TEventName, fn: IFunction) {\r
    const off = this.on(type, (...args) => {\r
      fn(...args);\r
      off();\r
    });\r
  }\r
  emit(type: TEventName, ...args: any) {\r
    const listeners = this._listeners[type];\r
    if (!listeners || !listeners.length) return false;\r
    listeners.forEach((fn) => {\r
      fn(...args);\r
    });\r
    return true;\r
  }\r
  off(type: TEventName, fn: IFunction) {\r
    const listeners = this._listeners[type];\r
    if (!listeners || !listeners.length) return;\r
    if (!fn) {\r
      this._listeners[type] = undefined;\r
      return;\r
    }\r
    this._listeners[type] = listeners.filter((f) => f !== fn);\r
  }\r
  offAllListeners() {\r
    console.log(this._listeners,'this._listeners')\r
    this._listeners = {} as Record<TEventName, IFunction[] | undefined>;\r
  }\r
}\r
\r
export class EventEmitter2<\r
  Listeners extends Record<string, IFunction[]> = Record<string, IFunction[]>,\r
> extends EventEmitter {\r
  declare _listeners: Listeners;\r
  declare on: <Type extends keyof Listeners>(\r
    type: Type,\r
    fn: Listeners[Type][0],\r
  ) => any;\r
  declare emit: <Type extends keyof Listeners>(\r
    type: Type,\r
    ...args: Parameters<Listeners[Type][0]>\r
  ) => boolean;\r
}\r
\r
\r
`},62290:function(t,e){"use strict";e.Z=`// src/utils/object.ts\r
\r
export function shallowEqualKeys(obj1: object, obj2: object, keys?: string[]) {\r
  if (!obj1 || !obj2) return false;\r
  if (typeof obj1 === 'object' && typeof obj2 === 'object') {\r
    return isSameObject(obj1, obj2, keys);\r
  }\r
  return false;\r
}\r
\r
function isSameObject(\r
  obj1: Record<string, any>,\r
  obj2: Record<string, any>,\r
  keys?: string[],\r
) {\r
  if (!obj1 || !obj2) return false;\r
  const keys1 = Object.keys(obj1);\r
  const keys2 = Object.keys(obj2);\r
  if (keys1.length !== keys2.length) return false;\r
  const compareKeys = keys || keys1;\r
  for (let i = 0; i < compareKeys.length; i++) {\r
    const key1 = compareKeys[i];\r
    const key2 = compareKeys[i];\r
    if (key1 !== key2 || obj1[key1] !== obj2[key2]) return false;\r
  }\r
  return true;\r
}`},37062:function(t,e){"use strict";e.Z=`// src/utils.ts - \u5728\u73B0\u6709\u5DE5\u5177\u51FD\u6570\u57FA\u7840\u4E0A\u6DFB\u52A0\r
\r
import type { TComputed,TWatch } from '../type';\r
\r
// \u{1F195} \u65B0\u589E\uFF1A\u8BA1\u7B97\u5C5E\u6027\u5904\u7406\u51FD\u6570\r
export function calcComputedState<TState extends Record<string, any>>({\r
  prevState,\r
  nextState,\r
  computed,\r
}: {\r
  prevState: TState;\r
  nextState: TState;\r
  computed?: TComputed<TState>;\r
}): TState {\r
  // \u5982\u679C\u6CA1\u6709\u8BA1\u7B97\u5C5E\u6027\u914D\u7F6E\uFF0C\u76F4\u63A5\u8FD4\u56DE\r
  if (!computed || !computed.length) {\r
    return nextState;\r
  }\r
\r
  let updatedState = { ...nextState };\r
\r
  // \u904D\u5386\u6240\u6709\u8BA1\u7B97\u5C5E\u6027\u914D\u7F6E\r
  for (const computedConfig of computed) {\r
    if (typeof computedConfig === 'function') {\r
      // \u51FD\u6570\u5F62\u5F0F\uFF1A\u76F4\u63A5\u6267\u884C\r
      const computedResult = computedConfig(updatedState, prevState);\r
      updatedState = { ...updatedState, ...computedResult };\r
    } else {\r
      // \u5BF9\u8C61\u5F62\u5F0F\uFF1A\u68C0\u67E5\u4F9D\u8D56\u5B57\u6BB5\u662F\u5426\u53D8\u5316\r
      const { keys, handler } = computedConfig;\r
\r
      // \u68C0\u67E5\u4F9D\u8D56\u7684\u5B57\u6BB5\u662F\u5426\u53D1\u751F\u53D8\u5316\r
      const hasChanged = keys.some(key => prevState[key] !== nextState[key]);\r
\r
      if (hasChanged) {\r
        // \u521B\u5EFAdiff\u5BF9\u8C61\uFF0C\u6807\u8BB0\u54EA\u4E9B\u5B57\u6BB5\u53D1\u751F\u4E86\u53D8\u5316\r
        const diff = {} as Record<keyof TState & string, boolean>;\r
        keys.forEach(key => {\r
          diff[key as keyof TState & string] = prevState[key] !== nextState[key];\r
        });\r
\r
        // \u6267\u884C\u8BA1\u7B97\u51FD\u6570\r
        const computedResult = handler(updatedState, prevState, diff);\r
\r
        // \u5408\u5E76\u8BA1\u7B97\u7ED3\u679C\r
        updatedState = { ...updatedState, ...computedResult };\r
      }\r
    }\r
  }\r
\r
  return updatedState;\r
}\r
\r
// \u{1F195} \u65B0\u589E\uFF1A\u8BA1\u7B97\u5B57\u6BB5\u5DEE\u5F02\u7684\u51FD\u6570\uFF08\u6E90\u7801\u4E2D\u7684\u5B9E\u73B0\uFF09\r
export function calcDiffKeys(\r
  obj1: object,\r
  obj2: object,\r
  keys: (string | number | symbol)[],\r
) {\r
  const diffKeysMap: Record<string | number | symbol, boolean> = {};\r
  let diff = false;\r
\r
  keys.forEach((key) => {\r
    // @ts-ignore\r
    if (!Object.is(obj1[key], obj2[key])) {\r
      diffKeysMap[key] = true;\r
      diff = true;\r
    }\r
  });\r
\r
  return {\r
    diffKeysMap,  // \u53D8\u5316\u5B57\u6BB5\u7684\u6620\u5C04\r
    diff,         // \u662F\u5426\u6709\u53D8\u5316\r
  };\r
}\r
\r
// \u{1F195} \u65B0\u589E\uFF1A\u6267\u884CWatch\u5904\u7406\u51FD\u6570\uFF08\u6E90\u7801\u4E2D\u7684\u5B9E\u73B0\uFF09\r
interface IWatchConfig<TState extends Record<string, any>> {\r
  prevState: TState;\r
  nextState: TState;\r
  watch?: TWatch<TState>;\r
}\r
\r
export function execWatchHandler<TState extends Record<string, any>>({\r
  prevState,\r
  nextState,\r
  watch,\r
}: IWatchConfig<TState>) {\r
  if (watch) {\r
    watch.forEach((watchItem) => {\r
      if (watchItem.keys) {\r
        const { diffKeysMap, diff } = calcDiffKeys(\r
          prevState,\r
          nextState,\r
          watchItem.keys,\r
        );\r
        if (diff) {\r
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions\r
          watchItem.handler && watchItem.handler(nextState, prevState, diffKeysMap);\r
        }\r
      }\r
    });\r
  }\r
}`},5460:function(t,e,r){"use strict";var d=r(75271);function o(a,g){return a===g&&(a!==0||1/a===1/g)||a!==a&&g!==g}var h=typeof Object.is=="function"?Object.is:o,_=d.useState,b=d.useEffect,x=d.useLayoutEffect,I=d.useDebugValue;function E(a,g){var M=g(),l=_({inst:{value:M,getSnapshot:g}}),s=l[0].inst,m=l[1];return x(function(){s.value=M,s.getSnapshot=g,D(s)&&m({inst:s})},[a,M,g]),b(function(){return D(s)&&m({inst:s}),a(function(){D(s)&&m({inst:s})})},[a]),I(M),M}function D(a){var g=a.getSnapshot;a=a.value;try{var M=g();return!h(a,M)}catch(l){return!0}}function c(a,g){return g()}var y=typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"?c:E;e.useSyncExternalStore=d.useSyncExternalStore!==void 0?d.useSyncExternalStore:y},50095:function(t,e,r){"use strict";var d=r(75271),o=r(59207);function h(c,y){return c===y&&(c!==0||1/c===1/y)||c!==c&&y!==y}var _=typeof Object.is=="function"?Object.is:h,b=o.useSyncExternalStore,x=d.useRef,I=d.useEffect,E=d.useMemo,D=d.useDebugValue;e.useSyncExternalStoreWithSelector=function(c,y,a,g,M){var l=x(null);if(l.current===null){var s={hasValue:!1,value:null};l.current=s}else s=l.current;l=E(function(){function S(u){if(!p){if(p=!0,i=u,u=g(u),M!==void 0&&s.hasValue){var f=s.value;if(M(f,u))return n=f}return n=u}if(f=n,_(i,u))return f;var T=g(u);return M!==void 0&&M(f,T)?(i=u,f):(i=u,n=T)}var p=!1,i,n,v=a===void 0?null:a;return[function(){return S(y())},v===null?void 0:function(){return S(v())}]},[y,a,g,M]);var m=b(c,l[0],l[1]);return I(function(){s.hasValue=!0,s.value=m},[m]),D(m),m}},59207:function(t,e,r){"use strict";t.exports=r(5460)},60425:function(t,e,r){"use strict";t.exports=r(50095)},62657:function(t){function e(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},335:function(t,e,r){var d=r(31479);function o(h,_){var b=typeof Symbol!="undefined"&&h[Symbol.iterator]||h["@@iterator"];if(!b){if(Array.isArray(h)||(b=d(h))||_&&h&&typeof h.length=="number"){b&&(h=b);var x=0,I=function(){};return{s:I,n:function(){return x>=h.length?{done:!0}:{done:!1,value:h[x++]}},e:function(a){throw a},f:I}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var E=!0,D=!1,c;return{s:function(){b=b.call(h)},n:function(){var a=b.next();return E=a.done,a},e:function(a){D=!0,c=a},f:function(){try{!E&&b.return!=null&&b.return()}finally{if(D)throw c}}}}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},83136:function(t,e,r){var d=r(38836),o=r(68919),h=r(75254);function _(b){var x=o();return function(){var E=d(b),D;if(x){var c=d(this).constructor;D=Reflect.construct(E,arguments,c)}else D=E.apply(this,arguments);return h(this,D)}}t.exports=_,t.exports.__esModule=!0,t.exports.default=t.exports},38836:function(t){function e(r){return t.exports=e=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(o){return o.__proto__||Object.getPrototypeOf(o)},t.exports.__esModule=!0,t.exports.default=t.exports,e(r)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},21742:function(t,e,r){var d=r(80038);function o(h,_){if(typeof _!="function"&&_!==null)throw new TypeError("Super expression must either be null or a function");h.prototype=Object.create(_&&_.prototype,{constructor:{value:h,writable:!0,configurable:!0}}),Object.defineProperty(h,"prototype",{writable:!1}),_&&d(h,_)}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},68919:function(t){function e(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(r){return!1}}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},75254:function(t,e,r){var d=r(31759).default,o=r(62657);function h(_,b){if(b&&(d(b)==="object"||typeof b=="function"))return b;if(b!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return o(_)}t.exports=h,t.exports.__esModule=!0,t.exports.default=t.exports},80038:function(t){function e(r,d){return t.exports=e=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(h,_){return h.__proto__=_,h},t.exports.__esModule=!0,t.exports.default=t.exports,e(r,d)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports}}]);
