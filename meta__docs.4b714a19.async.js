(self.webpackChunk_cassiewang_cassie_store=self.webpackChunk_cassiewang_cassie_store||[]).push([[904],{32304:function(r,n,e){"use strict";e.r(n),e.d(n,{demos:function(){return o}});var _=e(75271),o={}},31521:function(r,n,e){"use strict";e.r(n),e.d(n,{demos:function(){return o}});var _=e(75271),o={}},12619:function(r,n,e){"use strict";e.r(n),e.d(n,{demos:function(){return t}});var _={};e.r(_),e.d(_,{useLatest:function(){return s}});var o={};e.r(o),e.d(o,{useCreation:function(){return S}});var p={};e.r(p),e.d(p,{useCreation:function(){return S},useLatest:function(){return s},useMemoizedFn:function(){return d.useMemoizedFn}});var m=e(90228),b=e.n(m),x=e(87999),T=e.n(x),E=e(75271),C=e.t(E,2),l=e(52120),y=e(33903),a=e(60425),g=e.t(a,2),M=e(82426),c=e(97352);function s(v){var u=(0,E.useRef)(v);return u.current=v,u}var d=e(72408);function S(v,u){var f=s(v);return(0,E.useMemo)(function(){return f.current()},u)}var h=e(41665),i=e(55674),t={"docs-demo-asyncdemo":{component:E.memo(E.lazy(function(){return e.e(433).then(e.bind(e,52827))})),asset:{type:"BLOCK",id:"docs-demo-asyncdemo",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(71580).Z},react:{type:"NPM",value:"18.3.1"},"./userStore.ts":{type:"FILE",value:e(72212).Z},"../Model.ts":{type:"FILE",value:e(63315).Z},"use-sync-external-store":{type:"NPM",value:"1.6.0"},"./Manager/AsyncManager.ts":{type:"FILE",value:e(84852).Z},"./utils.ts":{type:"FILE",value:e(27325).Z},"./hooks.ts":{type:"FILE",value:e(64831).Z},"../utils/event.ts":{type:"FILE",value:e(88468).Z},"./object.ts":{type:"FILE",value:e(70011).Z},"./useCreation.ts":{type:"FILE",value:e(43023).Z},"./useLatest.ts":{type:"FILE",value:e(52623).Z},"./useMemoizedFn.ts":{type:"FILE",value:e(80083).Z}},entry:"index.tsx"},context:{"./userStore.ts":l,"../Model.ts":y,"./Manager/AsyncManager.ts":M,"./utils.ts":c,"./hooks.ts":p,"../utils/event.ts":h,"./object.ts":i,"./useCreation.ts":o,"./useLatest.ts":_,"./useMemoizedFn.ts":d,react:C,"/home/runner/work/cassie-store/cassie-store/src/AsyncDemo/userStore.ts":l,"/home/runner/work/cassie-store/cassie-store/src/Model.ts":y,"use-sync-external-store/shim/with-selector":g,"/home/runner/work/cassie-store/cassie-store/src/Manager/AsyncManager.ts":M,"/home/runner/work/cassie-store/cassie-store/src/utils/utils.ts":c,"/home/runner/work/cassie-store/cassie-store/src/hooks/index.ts":p,"/home/runner/work/cassie-store/cassie-store/src/utils/event.ts":h,"/home/runner/work/cassie-store/cassie-store/src/utils/object.ts":i,"/home/runner/work/cassie-store/cassie-store/src/hooks/useCreation.ts":o,"/home/runner/work/cassie-store/cassie-store/src/hooks/useLatest.ts":_,"/home/runner/work/cassie-store/cassie-store/src/hooks/useMemoizedFn.ts":d},renderOpts:{compile:function(){var v=T()(b()().mark(function f(){var D,I=arguments;return b()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.next=2,e.e(557).then(e.bind(e,47557));case 2:return O.abrupt("return",(D=O.sent).default.apply(D,I));case 3:case"end":return O.stop()}},f)}));function u(){return v.apply(this,arguments)}return u}()}}}},52120:function(r,n,e){"use strict";e.r(n),e.d(n,{fetchUser:function(){return C},fetchUserList:function(){return y},searchUsers:function(){return g},userStore:function(){return x}});var _=e(90228),o=e.n(_),p=e(87999),m=e.n(p),b=e(33903),x=new b.Model({state:{user:null,userList:[],loading:!1,userListLoading:!1,error:null,userListError:null,userCount:0,hasUsers:!1},computed:[{keys:["userList"],handler:function(s){return console.log("\u{1F9EE} \u8BA1\u7B97\u5C5E\u6027\uFF1A\u7528\u6237\u5217\u8868\u7EDF\u8BA1"),{userCount:s.userList.length,hasUsers:s.userList.length>0}}}],watch:[{keys:["user"],handler:function(s){if(console.log("\u{1F442} Watch\uFF1A\u7528\u6237\u4FE1\u606F\u53D8\u5316"),s.user)try{localStorage.setItem("currentUser",JSON.stringify(s.user)),console.log("\u2705 \u7528\u6237\u4FE1\u606F\u5DF2\u4FDD\u5B58\u5230localStorage")}catch(d){console.error("\u274C \u4FDD\u5B58\u7528\u6237\u4FE1\u606F\u5931\u8D25:",d)}}}]}),T=[{id:"1",name:"\u5F20\u4E09",email:"zhangsan@example.com",avatar:"\u{1F468}\u200D\u{1F4BC}"},{id:"2",name:"\u674E\u56DB",email:"lisi@example.com",avatar:"\u{1F469}\u200D\u{1F4BB}"},{id:"3",name:"\u738B\u4E94",email:"wangwu@example.com",avatar:"\u{1F468}\u200D\u{1F3A8}"},{id:"4",name:"\u8D75\u516D",email:"zhaoliu@example.com",avatar:"\u{1F469}\u200D\u{1F52C}"},{id:"5",name:"\u94B1\u4E03",email:"qianqi@example.com",avatar:"\u{1F468}\u200D\u{1F3EB}"}],E={getUser:function(s){return m()(o()().mark(function d(){var S;return o()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,new Promise(function(t){return setTimeout(t,800+Math.random()*1200)});case 2:if(s!=="error"){i.next=4;break}throw new Error("\u7528\u6237\u4E0D\u5B58\u5728");case 4:if(s!=="network-error"){i.next=6;break}throw new Error("\u7F51\u7EDC\u8FDE\u63A5\u5931\u8D25");case 6:if(S=T.find(function(t){return t.id===s}),S){i.next=9;break}throw new Error("\u7528\u6237ID ".concat(s," \u4E0D\u5B58\u5728"));case 9:return i.abrupt("return",S);case 10:case"end":return i.stop()}},d)}))()},getUserList:function(){var s=arguments;return m()(o()().mark(function d(){var S,h,i,t,v;return o()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return S=s.length>0&&s[0]!==void 0?s[0]:1,h=s.length>1&&s[1]!==void 0?s[1]:10,f.next=4,new Promise(function(D){return setTimeout(D,500+Math.random()*800)});case 4:i=(S-1)*h,t=i+h,v=T.slice(i,t);debugger;return f.abrupt("return",{users:v,total:T.length});case 9:case"end":return f.stop()}},d)}))()},searchUsers:function(s){return m()(o()().mark(function d(){var S;return o()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,new Promise(function(t){return setTimeout(t,300+Math.random()*500)});case 2:return S=T.filter(function(t){return t.name.includes(s)||t.email.includes(s)}),i.abrupt("return",{users:S});case 4:case"end":return i.stop()}},d)}))()}};function C(c){return l.apply(this,arguments)}function l(){return l=m()(o()().mark(function c(s){var d;return o()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return console.log("\u{1F504} \u5F00\u59CB\u83B7\u53D6\u7528\u6237\u4FE1\u606F: ".concat(s)),d=x.asyncManager("fetchUser",{loadingKey:"loading",errorKey:"error",config:{retryCount:2,retryInterval:1e3}}),h.abrupt("return",d.exec(function(){var i=m()(o()().mark(function t(v,u){var f;return o()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return console.log("\u{1F4E1} \u7B2C".concat(u+1,"\u6B21\u5C1D\u8BD5\u83B7\u53D6\u7528\u6237\u4FE1\u606F")),I.next=3,E.getUser(s);case 3:return f=I.sent,console.log("\u2705 \u7528\u6237\u4FE1\u606F\u83B7\u53D6\u6210\u529F:",f.name),I.abrupt("return",{user:f});case 6:case"end":return I.stop()}},t)}));return function(t,v){return i.apply(this,arguments)}}()));case 3:case"end":return h.stop()}},c)})),l.apply(this,arguments)}function y(){return a.apply(this,arguments)}function a(){return a=m()(o()().mark(function c(){var s,d,S,h=arguments;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return s=h.length>0&&h[0]!==void 0?h[0]:1,d=h.length>1&&h[1]!==void 0?h[1]:10,console.log("\u{1F504} \u5F00\u59CB\u83B7\u53D6\u7528\u6237\u5217\u8868: \u7B2C".concat(s,"\u9875")),S=x.asyncManager("fetchUserList",{loadingKey:"userListLoading",errorKey:"userListError",config:{retryCount:1,retryInterval:500}}),t.abrupt("return",S.exec(function(){var v=m()(o()().mark(function u(f,D){var I,L;return o()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return I=f.lastAbortController,I&&(I.abort(),console.log("\u{1F6AB} \u5DF2\u53D6\u6D88\u4E0A\u4E00\u4E2A\u7528\u6237\u5217\u8868\u8BF7\u6C42")),console.log("\u{1F4E1} \u7B2C".concat(D+1,"\u6B21\u5C1D\u8BD5\u83B7\u53D6\u7528\u6237\u5217\u8868")),P.next=5,E.getUserList(s,d);case 5:return L=P.sent,console.log("\u2705 \u7528\u6237\u5217\u8868\u83B7\u53D6\u6210\u529F: ".concat(L.users.length,"\u4E2A\u7528\u6237")),P.abrupt("return",{userList:L.users});case 8:case"end":return P.stop()}},u)}));return function(u,f){return v.apply(this,arguments)}}()));case 5:case"end":return t.stop()}},c)})),a.apply(this,arguments)}function g(c){return M.apply(this,arguments)}function M(){return M=m()(o()().mark(function c(s){var d;return o()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:if(console.log('\u{1F50D} \u641C\u7D22\u7528\u6237: "'.concat(s,'"')),s.trim()){h.next=4;break}return x.setState({userList:[]}),h.abrupt("return");case 4:return d=x.asyncManager("searchUsers",{loadingKey:"userListLoading",errorKey:"userListError"}),h.abrupt("return",d.exec(function(){var i=m()(o()().mark(function t(v,u){var f;return o()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return console.log('\u{1F50D} \u6267\u884C\u641C\u7D22: "'.concat(s,'" (\u5C1D\u8BD5').concat(u+1,")")),I.next=3,E.searchUsers(s);case 3:return f=I.sent,console.log("\u2705 \u641C\u7D22\u5B8C\u6210: \u627E\u5230".concat(f.users.length,"\u4E2A\u7528\u6237")),I.abrupt("return",{userList:f.users});case 6:case"end":return I.stop()}},t)}));return function(t,v){return i.apply(this,arguments)}}()));case 6:case"end":return h.stop()}},c)})),M.apply(this,arguments)}},82426:function(r,n,e){"use strict";e.r(n),e.d(n,{AsyncManager:function(){return c}});var _=e(25298),o=e.n(_),p=e(17069),m=e.n(p),b=e(62657),x=e.n(b),T=e(21742),E=e.n(T),C=e(83136),l=e.n(C),y=e(82092),a=e.n(y),g=e(41665),M=300,c=function(s){E()(S,s);var d=l()(S);function S(h){var i;return o()(this,S),i=d.call(this),a()(x()(i),"execId",0),a()(x()(i),"options",{}),a()(x()(i),"abortSignalMap",{}),h&&(i.options=h),i}return m()(S,[{key:"getCurrentExecId",value:function(){return this.execId}},{key:"getAbortController",value:function(i){return this.abortSignalMap[i]}},{key:"exec",value:function(i){var t=this,v=0,u=++this.execId;return console.log("\u5148\u6267\u884C\u7684 execId: ".concat(u,", \u5F53\u524D\u6700\u65B0\u7684 this.execId: ").concat(this.execId)),this.emit("loading"),new Promise(function(f,D){var I=function L(){var O=t.abortSignalMap[u-1]||null,P=t.abortSignalMap[u]=new AbortController;i({lastAbortController:O,abortController:P},v).then(function(A){return console.log("then execId, this.execId:",u,t.execId),u===t.execId&&t.emit("success",A),f(A),delete t.abortSignalMap[u],t.emit("finish",null,A),A}).catch(function(A){u===t.execId?v<(t.options.retryCount||0)?setTimeout(function(){L()},t.options.retryInterval||M):(t.emit("error",A),D(A),delete t.abortSignalMap[u],t.emit("finish",A,null)):(delete t.abortSignalMap[u],t.emit("finish",A,null),D(A)),v++})};I()})}}]),S}(g.EventEmitter2)},33903:function(r,n,e){"use strict";e.r(n),e.d(n,{Model:function(){return S}});var _=e(26068),o=e.n(_),p=e(31759),m=e.n(p),b=e(25298),x=e.n(b),T=e(17069),E=e.n(T),C=e(82092),l=e.n(C),y=e(75271),a=e(60425),g=e(55674),M=e(97352),c=e(72408),s=e(82426),d=a.useSyncExternalStoreWithSelector,S=function(){function h(i){var t=this;x()(this,h),l()(this,"isUnMount",!1),l()(this,"state",{}),l()(this,"_preState",{}),l()(this,"_subscribes",[]),l()(this,"_isInited",!1),l()(this,"asyncManagerMap",{}),l()(this,"getState",function(){return t._isInited||t.init(),t.state}),l()(this,"useSelector",function(v){var u=(0,y.useCallback)(function(L){return t.subscribe(function(O,P){P||L()})},[t]),f=(0,c.useMemoizedFn)(function(L){return L}),D=(0,c.useMemoizedFn)(function(L,O){return v?v(L,O):Object.is(L,O)}),I=d(u,t.getState,t.getState,f,D);return I}),l()(this,"useGetState",function(v,u){return t.useSelector(function(f,D){return u?u(f,D):!!(v&&(0,g.shallowEqualKeys)(f,D,v))})}),this.config=i}return E()(h,[{key:"asyncManager",value:function(t,v){var u=this,f=v||{},D=f.loadingKey,I=D===void 0?"loading":D,L=f.errorKey,O=L===void 0?"error":L,P=f.showLoading,A=P===void 0?!0:P,j=f.config;this.asyncManagerMap[t]||(this.asyncManagerMap[t]=new s.AsyncManager(j));var R=this.asyncManagerMap[t];return R.offAllListeners(),R.on("loading",function(){A&&u.setState(l()({},I,!0))}),R.on("success",function(U){m()(U)==="object"&&U!==null&&u.setState(o()(l()({},I,!1),U))}),R.on("error",function(U){u.setState(l()(l()({},I,!1),O,U))}),this.asyncManagerMap[t]}},{key:"init",value:function(){if(!this._isInited){this._isInited=!0;var t=this.config;this.state=this.getActualState({},t.state||{}),this._preState=o()({},this.state)}}},{key:"setState",value:function(t,v){if(this._isInited||this.init(),t){var u;typeof t=="function"?u=t(this.state):u=t,this.state=this.getActualState(this._preState,u),this.dispatch(v),this._preState=o()({},this.state)}}},{key:"getActualState",value:function(t,v){var u=o()(o()({},t),v),f=this.config||{},D=f.computed,I=f.watch;return u=(0,M.calcComputedState)({prevState:t,nextState:u,computed:D}),(0,M.execWatchHandler)({prevState:t,nextState:u,watch:I}),u}},{key:"dispatch",value:function(t){var v=this;this.isUnMount||this._subscribes.forEach(function(u){return u(v,(t==null?void 0:t.silent)||!1)})}},{key:"subscribe",value:function(t){var v=this;return this._subscribes.push(t),function(){v.unsubscribe(t)}}},{key:"unsubscribe",value:function(t){this._subscribes.length&&(this._subscribes=this._subscribes.filter(function(v){return v!==t}))}}]),h}()},72408:function(r,n,e){"use strict";e.r(n),e.d(n,{useMemoizedFn:function(){return o}});var _=e(75271);function o(p){var m=(0,_.useRef)(p);return m.current=p,(0,_.useCallback)(function(){return m.current.apply(m,arguments)},[])}},41665:function(r,n,e){"use strict";e.r(n),e.d(n,{EventEmitter:function(){return y},EventEmitter2:function(){return a}});var _=e(21742),o=e.n(_),p=e(83136),m=e.n(p),b=e(25298),x=e.n(b),T=e(17069),E=e.n(T),C=e(82092),l=e.n(C),y=function(){function g(){x()(this,g),l()(this,"_listeners",{})}return E()(g,[{key:"on",value:function(c,s){var d=this;return this._listeners[c]||(this._listeners[c]=[]),this._listeners[c].push(s),function(){d.off(c,s)}}},{key:"once",value:function(c,s){var d=this.on(c,function(){s.apply(void 0,arguments),d()})}},{key:"emit",value:function(c){for(var s=arguments.length,d=new Array(s>1?s-1:0),S=1;S<s;S++)d[S-1]=arguments[S];var h=this._listeners[c];return!h||!h.length?!1:(h.forEach(function(i){i.apply(void 0,d)}),!0)}},{key:"off",value:function(c,s){var d=this._listeners[c];if(!(!d||!d.length)){if(!s){this._listeners[c]=void 0;return}this._listeners[c]=d.filter(function(S){return S!==s})}}},{key:"offAllListeners",value:function(){console.log(this._listeners,"this._listeners"),this._listeners={}}}]),g}(),a=function(g){o()(c,g);var M=m()(c);function c(){return x()(this,c),M.apply(this,arguments)}return E()(c)}(y)},55674:function(r,n,e){"use strict";e.r(n),e.d(n,{shallowEqualKeys:function(){return p}});var _=e(31759),o=e.n(_);function p(b,x,T){return!b||!x?!1:o()(b)==="object"&&o()(x)==="object"?m(b,x,T):!1}function m(b,x,T){if(!b||!x)return!1;var E=Object.keys(b),C=Object.keys(x);if(E.length!==C.length)return!1;for(var l=T||E,y=0;y<l.length;y++){var a=l[y],g=l[y];if(a!==g||b[a]!==x[g])return!1}return!0}},97352:function(r,n,e){"use strict";e.r(n),e.d(n,{calcComputedState:function(){return b},calcDiffKeys:function(){return x},execWatchHandler:function(){return T}});var _=e(335),o=e.n(_),p=e(26068),m=e.n(p);function b(E){var C=E.prevState,l=E.nextState,y=E.computed;if(!y||!y.length)return l;var a=m()({},l),g=o()(y),M;try{var c=function(){var d=M.value;if(typeof d=="function"){var S=d(a,C);a=m()(m()({},a),S)}else{var h=d.keys,i=d.handler,t=h.some(function(f){return C[f]!==l[f]});if(t){var v={};h.forEach(function(f){v[f]=C[f]!==l[f]});var u=i(a,C,v);a=m()(m()({},a),u)}}};for(g.s();!(M=g.n()).done;)c()}catch(s){g.e(s)}finally{g.f()}return a}function x(E,C,l){var y={},a=!1;return l.forEach(function(g){Object.is(E[g],C[g])||(y[g]=!0,a=!0)}),{diffKeysMap:y,diff:a}}function T(E){var C=E.prevState,l=E.nextState,y=E.watch;y&&y.forEach(function(a){if(a.keys){var g=x(C,l,a.keys),M=g.diffKeysMap,c=g.diff;c&&a.handler&&a.handler(l,C,M)}})}},71231:function(r,n,e){"use strict";e.r(n),e.d(n,{texts:function(){return _}});const _=[]},81998:function(r,n,e){"use strict";e.r(n),e.d(n,{texts:function(){return _}});const _=[{value:"This is a guide example.",paraId:0}]},30767:function(r,n,e){"use strict";e.r(n),e.d(n,{texts:function(){return _}});const _=[{value:"laf-test-store",paraId:0},{value:" -->",paraId:1}]},71580:function(r,n){"use strict";n.Z=`// AsyncDemo.tsx
import React, { useState } from 'react';
import { userStore, fetchUser, fetchUserList, searchUsers } from './userStore';

function AsyncDemo() {
  const [userId, setUserId] = useState('1');
  const [searchQuery, setSearchQuery] = useState('');

  // \u4F7F\u7528\u9009\u62E9\u6027\u8BA2\u9605\uFF0C\u76D1\u542C\u6211\u4EEC\u9700\u8981\u7684\u5B57\u6BB5
  const {
    user,
    userList,
    loading,
    userListLoading,
    error,
    userListError
  } = userStore.useGetState([
    'user',
    'userList',
    'loading',
    'userListLoading',
    'error',
    'userListError'
  ]);

  // \u5904\u7406\u641C\u7D22\uFF08\u9632\u6296\uFF09
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // \u7B80\u5355\u7684\u9632\u6296\u5904\u7406
    setTimeout(() => {
      if (query === searchQuery) {
        searchUsers(query);
      }
    }, 300);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px' }}>
      <h2>\u{1F680} AsyncManager\u529F\u80FD\u6F14\u793A</h2>

      {/* \u7528\u6237\u4FE1\u606F\u83B7\u53D6 */}
      <div style={{
        marginBottom: '30px',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '8px'
      }}>
        <h3>\u{1F464} \u83B7\u53D6\u7528\u6237\u4FE1\u606F</h3>
        <div style={{ marginBottom: '15px' }}>
          <input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            placeholder="\u8F93\u5165\u7528\u6237ID (1-5, \u6216 'error', 'network-error')"
            style={{ marginRight: '10px', padding: '8px', width: '250px' }}
          />
          <button
            onClick={() => fetchUser(userId)}
            disabled={loading}
            style={{
              padding: '8px 16px',
              backgroundColor: loading ? '#ccc' : '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              marginRight: '10px'
            }}
          >
            {loading ? '\u83B7\u53D6\u4E2D...' : '\u83B7\u53D6\u7528\u6237'}
          </button>

          {/* \u6D4B\u8BD5\u6309\u94AE */}
          <button
            onClick={() => {
             
                fetchUser('error').then(() => {
                   
                }).catch(err => {
                   debugger;
                })
             
            }}
            disabled={loading}
            style={{
              padding: '8px 16px',
              backgroundColor: loading ? '#ccc' : '#dc3545',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              marginRight: '10px'
            }}
          >
            \u6D4B\u8BD5\u9519\u8BEF
          </button>

          <button
            onClick={() => fetchUser('network-error').catch(err => {})}
            
            disabled={loading}
            style={{
              padding: '8px 16px',
              backgroundColor: loading ? '#ccc' : '#fd7e14',
              color: 'white',
              border: 'none',
              borderRadius: '4px'
            }}
          >
            \u6D4B\u8BD5\u91CD\u8BD5
          </button>
        </div>

        {/* \u7528\u6237\u4FE1\u606F\u663E\u793A */}
        {user && (
          <div style={{
            padding: '10px',
            backgroundColor: '#f8f9fa',
            borderRadius: '4px'
          }}>
            <strong>{user.name}</strong> ({user.email})
          </div>
        )}

        {/* \u9519\u8BEF\u4FE1\u606F */}
        {error && (
          <div style={{
            padding: '10px',
            backgroundColor: '#f8d7da',
            color: '#721c24',
            borderRadius: '4px'
          }}>
            \u9519\u8BEF: {error.message}
          </div>
        )}
      </div>

      {/* \u7528\u6237\u5217\u8868\u548C\u641C\u7D22 */}
      <div style={{
        marginBottom: '30px',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '8px'
      }}>
        <h3>\u{1F4CB} \u7528\u6237\u5217\u8868\u548C\u641C\u7D22</h3>

        <div style={{ marginBottom: '15px' }}>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="\u641C\u7D22\u7528\u6237..."
            style={{ marginRight: '10px', padding: '8px', width: '200px' }}
          />
          <button
            onClick={() => fetchUserList(1, 10)}
            disabled={userListLoading}
            style={{
              padding: '8px 16px',
              backgroundColor: userListLoading ? '#ccc' : '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              marginRight: '10px'
            }}
          >
            {userListLoading ? '\u52A0\u8F7D\u4E2D...' : '\u83B7\u53D6\u7528\u6237\u5217\u8868'}
          </button>

          <button
            onClick={() => {
              // \u5FEB\u901F\u8FDE\u7EED\u641C\u7D22\uFF0C\u6D4B\u8BD5\u7ADE\u6001\u6761\u4EF6
              searchUsers('\u5F20');
              setTimeout(() => searchUsers('\u674E'), 100);
              setTimeout(() => searchUsers('\u738B'), 200);
            }}
            style={{
              padding: '8px 16px',
              backgroundColor: '#ffc107',
              color: '#333',
              border: 'none',
              borderRadius: '4px'
            }}
          >
            \u6D4B\u8BD5\u7ADE\u6001\u6761\u4EF6
          </button>
        </div>

        {/* \u7528\u6237\u5217\u8868\u663E\u793A */}
        {userList.length > 0 && (
          <div>
            <h4>\u7528\u6237\u5217\u8868 ({userList.length}\u4E2A\u7528\u6237)</h4>
            <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
              {userList.map(user => (
                <div
                  key={user.id}
                  style={{
                    padding: '8px',
                    borderBottom: '1px solid #eee',
                    display: 'flex',
                    justifyContent: 'space-between'
                  }}
                >
                  <span><strong>{user.name}</strong></span>
                  <span style={{ color: '#666' }}>{user.email}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* \u5217\u8868\u9519\u8BEF\u4FE1\u606F */}
        {userListError && (
          <div style={{
            padding: '10px',
            backgroundColor: '#f8d7da',
            color: '#721c24',
            borderRadius: '4px'
          }}>
            \u5217\u8868\u9519\u8BEF: {userListError.message}
          </div>
        )}
      </div>

      {/* \u8BF4\u660E */}
      <div style={{
        padding: '20px',
        backgroundColor: '#e8f4fd',
        borderRadius: '8px',
        border: '1px solid #bee5eb'
      }}>
        <h4>\u{1F3AF} \u89C2\u5BDF\u8981\u70B9\uFF1A</h4>
        <ul>
          <li><strong>Mock\u6570\u636E\u6D4B\u8BD5</strong>\uFF1A\u4F7F\u7528\u5185\u7F6Emock\u6570\u636E\uFF0C\u65E0\u9700\u771F\u5B9EAPI</li>
          <li><strong>\u81EA\u52A8\u72B6\u6001\u7BA1\u7406</strong>\uFF1Aloading\u548Cerror\u72B6\u6001\u81EA\u52A8\u5904\u7406</li>
          <li><strong>\u7ADE\u6001\u6761\u4EF6\u89E3\u51B3</strong>\uFF1A\u5FEB\u901F\u8FDE\u7EED\u8BF7\u6C42\u53EA\u663E\u793A\u6700\u65B0\u7ED3\u679C</li>
          <li><strong>\u91CD\u8BD5\u673A\u5236</strong>\uFF1A\u5931\u8D25\u65F6\u81EA\u52A8\u91CD\u8BD5\uFF08\u67E5\u770B\u63A7\u5236\u53F0\u65E5\u5FD7\uFF09</li>
          <li><strong>\u9519\u8BEF\u6D4B\u8BD5</strong>\uFF1A\u70B9\u51FB"\u6D4B\u8BD5\u9519\u8BEF"\u548C"\u6D4B\u8BD5\u91CD\u8BD5"\u6309\u94AE</li>
          <li><strong>\u8BF7\u6C42\u53D6\u6D88</strong>\uFF1A\u65B0\u8BF7\u6C42\u4F1A\u53D6\u6D88\u65E7\u8BF7\u6C42</li>
          <li><strong>\u8BA1\u7B97\u5C5E\u6027\u548CWatch</strong>\uFF1A\u4E0E\u7B2C9\u300110\u7AE0\u529F\u80FD\u5B8C\u7F8E\u7ED3\u5408</li>
          <li><strong>\u6253\u5F00\u63A7\u5236\u53F0</strong>\uFF1A\u89C2\u5BDF\u5F02\u6B65\u64CD\u4F5C\u7684\u8BE6\u7EC6\u6267\u884C\u8FC7\u7A0B</li>
        </ul>

        <h4>\u{1F4DD} \u53EF\u7528\u7684\u6D4B\u8BD5\u6570\u636E\uFF1A</h4>
        <ul>
          <li><strong>\u7528\u6237ID 1-5</strong>\uFF1A\u6B63\u5E38\u7684\u7528\u6237\u6570\u636E</li>
          <li><strong>'error'</strong>\uFF1A\u6A21\u62DF\u7528\u6237\u4E0D\u5B58\u5728\u9519\u8BEF</li>
          <li><strong>'network-error'</strong>\uFF1A\u6A21\u62DF\u7F51\u7EDC\u8FDE\u63A5\u5931\u8D25\uFF0C\u89E6\u53D1\u91CD\u8BD5\u673A\u5236</li>
          <li><strong>\u641C\u7D22\u5173\u952E\u8BCD</strong>\uFF1A\u5F20\u3001\u674E\u3001\u738B\u3001\u8D75\u3001\u94B1\u7B49\u59D3\u540D\u6216\u90AE\u7BB1</li>
        </ul>
      </div>
    </div>
  );
}

export default AsyncDemo;`},72212:function(r,n){"use strict";n.Z=`// userStore.ts
import { Model } from '../Model';

// \u7528\u6237\u63A5\u53E3
interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

// \u7528\u6237\u72B6\u6001
interface UserState {
  user: User | null;
  userList: User[];

  // \u5F02\u6B65\u72B6\u6001\uFF08\u81EA\u52A8\u7BA1\u7406\uFF09
  loading: boolean;
  userListLoading: boolean;
  error: Error | null;
  userListError: Error | null;

  // \u8BA1\u7B97\u5C5E\u6027\uFF08\u81EA\u52A8\u8BA1\u7B97\uFF09
  userCount: number;
  hasUsers: boolean;
}

// \u521B\u5EFA\u7528\u6237Store
const userStore = new Model<UserState>({
  state: {
    user: null,
    userList: [],
    loading: false,
    userListLoading: false,
    error: null,
    userListError: null,
    userCount: 0,
    hasUsers: false,
  },

  // \u{1F9EE} \u8BA1\u7B97\u5C5E\u6027\uFF08\u7B2C9\u7AE0\u7684\u529F\u80FD\uFF09
  computed: [
    {
      keys: ['userList'],
      handler: (state) => {
        console.log('\u{1F9EE} \u8BA1\u7B97\u5C5E\u6027\uFF1A\u7528\u6237\u5217\u8868\u7EDF\u8BA1');
        return {
          userCount: state.userList.length,
          hasUsers: state.userList.length > 0,
        };
      },
    },
  ],

  // \u{1F442} Watch\uFF08\u7B2C10\u7AE0\u7684\u529F\u80FD\uFF09
  watch: [
    {
      keys: ['user'],
      handler: (state) => {
        console.log('\u{1F442} Watch\uFF1A\u7528\u6237\u4FE1\u606F\u53D8\u5316');
        if (state.user) {
          // \u81EA\u52A8\u4FDD\u5B58\u7528\u6237\u4FE1\u606F\u5230localStorage
          try {
            localStorage.setItem('currentUser', JSON.stringify(state.user));
            console.log('\u2705 \u7528\u6237\u4FE1\u606F\u5DF2\u4FDD\u5B58\u5230localStorage');
          } catch (error) {
            console.error('\u274C \u4FDD\u5B58\u7528\u6237\u4FE1\u606F\u5931\u8D25:', error);
          }
        }
      },
    },
  ],
});

// \u{1F195} Mock\u6570\u636E\u548CAPI\u6A21\u62DF

// Mock\u7528\u6237\u6570\u636E
const mockUsers: User[] = [
  { id: '1', name: '\u5F20\u4E09', email: 'zhangsan@example.com', avatar: '\u{1F468}\u200D\u{1F4BC}' },
  { id: '2', name: '\u674E\u56DB', email: 'lisi@example.com', avatar: '\u{1F469}\u200D\u{1F4BB}' },
  { id: '3', name: '\u738B\u4E94', email: 'wangwu@example.com', avatar: '\u{1F468}\u200D\u{1F3A8}' },
  { id: '4', name: '\u8D75\u516D', email: 'zhaoliu@example.com', avatar: '\u{1F469}\u200D\u{1F52C}' },
  { id: '5', name: '\u94B1\u4E03', email: 'qianqi@example.com', avatar: '\u{1F468}\u200D\u{1F3EB}' },
];

// Mock API\u51FD\u6570
const mockAPI = {
  // \u6A21\u62DF\u83B7\u53D6\u5355\u4E2A\u7528\u6237
  async getUser(userId: string): Promise<User> {
    // \u6A21\u62DF\u7F51\u7EDC\u5EF6\u8FDF
    await new Promise(resolve => setTimeout(resolve, 800 + Math.random() * 1200));

    // \u6A21\u62DF\u9519\u8BEF\u60C5\u51B5
    if (userId === 'error') {
      throw new Error('\u7528\u6237\u4E0D\u5B58\u5728');
    }

    if (userId === 'network-error') {
      throw new Error('\u7F51\u7EDC\u8FDE\u63A5\u5931\u8D25');
    }

    // \u67E5\u627E\u7528\u6237
    const user = mockUsers.find(u => u.id === userId);
    if (!user) {
      throw new Error(\`\u7528\u6237ID \${userId} \u4E0D\u5B58\u5728\`);
    }

    return user;
  },

  // \u6A21\u62DF\u83B7\u53D6\u7528\u6237\u5217\u8868
  async getUserList(page = 1, pageSize = 10): Promise<{ users: User[], total: number }> {
    // \u6A21\u62DF\u7F51\u7EDC\u5EF6\u8FDF
    await new Promise(resolve => setTimeout(resolve, 500 + Math.random() * 800));

    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    const users = mockUsers.slice(start, end);
    debugger;

    return {
      users,
      total: mockUsers.length,
    };
  },

  // \u6A21\u62DF\u641C\u7D22\u7528\u6237
  async searchUsers(query: string): Promise<{ users: User[] }> {
    // \u6A21\u62DF\u7F51\u7EDC\u5EF6\u8FDF
    await new Promise(resolve => setTimeout(resolve, 300 + Math.random() * 500));

    const users = mockUsers.filter(user =>
      user.name.includes(query) ||
      user.email.includes(query)
    );

    return { users };
  },
};

// \u{1F195} \u5F02\u6B65\u64CD\u4F5C\u65B9\u6CD5\uFF08\u4F7F\u7528AsyncManager\uFF09

// \u83B7\u53D6\u7528\u6237\u4FE1\u606F
async function fetchUser(userId: string) {
  console.log(\`\u{1F504} \u5F00\u59CB\u83B7\u53D6\u7528\u6237\u4FE1\u606F: \${userId}\`);

  const asyncManager = userStore.asyncManager('fetchUser', {
    loadingKey: 'loading',
    errorKey: 'error',
    config: {
      retryCount: 2,        // \u5931\u8D25\u65F6\u91CD\u8BD52\u6B21
      retryInterval: 1000,  // \u91CD\u8BD5\u95F4\u96941\u79D2
    },
  });

  return asyncManager.exec(async (_, tryCount) => {
    console.log(\`\u{1F4E1} \u7B2C\${tryCount + 1}\u6B21\u5C1D\u8BD5\u83B7\u53D6\u7528\u6237\u4FE1\u606F\`);

    // \u{1F3AF} \u4F7F\u7528Mock API\u800C\u4E0D\u662F\u771F\u5B9E\u7684fetch
    const user = await mockAPI.getUser(userId);
    console.log('\u2705 \u7528\u6237\u4FE1\u606F\u83B7\u53D6\u6210\u529F:', user.name);

    // \u{1F3AF} \u5173\u952E\uFF1A\u8FD4\u56DE\u7684\u6570\u636E\u4F1A\u81EA\u52A8\u5408\u5E76\u5230\u72B6\u6001\u4E2D
    return { user };
  });
}

// \u83B7\u53D6\u7528\u6237\u5217\u8868
async function fetchUserList(page = 1, pageSize = 10) {
  console.log(\`\u{1F504} \u5F00\u59CB\u83B7\u53D6\u7528\u6237\u5217\u8868: \u7B2C\${page}\u9875\`);

  const asyncManager = userStore.asyncManager('fetchUserList', {
    loadingKey: 'userListLoading',
    errorKey: 'userListError',
    config: {
      retryCount: 1,
      retryInterval: 500,
    },
  });

  return asyncManager.exec(async ({ lastAbortController }, tryCount) => {
    // \u53D6\u6D88\u4E0A\u4E00\u4E2A\u8BF7\u6C42
    if (lastAbortController) {
      lastAbortController.abort();
      console.log('\u{1F6AB} \u5DF2\u53D6\u6D88\u4E0A\u4E00\u4E2A\u7528\u6237\u5217\u8868\u8BF7\u6C42');
    }

    console.log(\`\u{1F4E1} \u7B2C\${tryCount + 1}\u6B21\u5C1D\u8BD5\u83B7\u53D6\u7528\u6237\u5217\u8868\`);

    // \u{1F3AF} \u4F7F\u7528Mock API
    const data = await mockAPI.getUserList(page, pageSize);
    console.log(\`\u2705 \u7528\u6237\u5217\u8868\u83B7\u53D6\u6210\u529F: \${data.users.length}\u4E2A\u7528\u6237\`);

    return { userList: data.users };
  });
}

// \u641C\u7D22\u7528\u6237\uFF08\u6F14\u793A\u7ADE\u6001\u6761\u4EF6\u89E3\u51B3\uFF09
async function searchUsers(query: string) {
  console.log(\`\u{1F50D} \u641C\u7D22\u7528\u6237: "\${query}"\`);

  if (!query.trim()) {
    userStore.setState({ userList: [] });
    return;
  }

  const asyncManager = userStore.asyncManager('searchUsers', {
    loadingKey: 'userListLoading',
    errorKey: 'userListError',
  });

  return asyncManager.exec(async (_, tryCount) => {
    console.log(\`\u{1F50D} \u6267\u884C\u641C\u7D22: "\${query}" (\u5C1D\u8BD5\${tryCount + 1})\`);

    // \u{1F3AF} \u4F7F\u7528Mock API
    const data = await mockAPI.searchUsers(query);
    console.log(\`\u2705 \u641C\u7D22\u5B8C\u6210: \u627E\u5230\${data.users.length}\u4E2A\u7528\u6237\`);

    return { userList: data.users };
  });
}

export { userStore, fetchUser, fetchUserList, searchUsers };`},84852:function(r,n){"use strict";n.Z=`// src/Manager/AsyncManager.ts - AsyncManager\u7C7B\u5B9E\u73B0
import { EventEmitter2 } from '../utils/event';
export interface AsyncManagerOptions {
  retryCount?: number;
  retryInterval?: number;
}
const DEFAULT_TIMEOUT = 300;

export class AsyncManager<
  T,
  Fn extends (
    aborts: {
      lastAbortController: AbortController | null;
      abortController: AbortController;
    },
    tryCount: number,
  ) => Promise<T>,
> extends EventEmitter2<{
  loading: (() => void)[];
  success: ((result: any) => void)[];
  error: ((error: Error) => void)[];
  finish: ((error: Error | null, result: any) => void)[];
}> {
  execId = 0;  // \u6267\u884CID\uFF0C\u7528\u4E8E\u89E3\u51B3\u7ADE\u6001\u6761\u4EF6
  options: AsyncManagerOptions = {};
  abortSignalMap: Record<number, AbortController> = {};  // \u5B58\u50A8\u6BCF\u4E2A\u8BF7\u6C42\u7684\u63A7\u5236\u5668

  constructor(options?: AsyncManagerOptions) {
    super();
    if (options) {
      this.options = options;
    }
  }

  // \u83B7\u53D6\u5F53\u524D\u6267\u884CID
  getCurrentExecId() {
    return this.execId;
  }

  // \u83B7\u53D6\u6307\u5B9A\u6267\u884CID\u7684\u63A7\u5236\u5668
  getAbortController(execId: number) {
    return this.abortSignalMap[execId];
  }

  // \u{1F3AF} \u6838\u5FC3\u65B9\u6CD5\uFF1A\u6267\u884C\u5F02\u6B65\u64CD\u4F5C
  exec(fn: Fn): Promise<T> {
    let tryCount = 0;
    const execId = ++this.execId;  // \u751F\u6210\u65B0\u7684\u6267\u884CID
    console.log(\`\u5148\u6267\u884C\u7684 execId: \${execId}, \u5F53\u524D\u6700\u65B0\u7684 this.execId: \${this.execId}\`);
    // \u89E6\u53D1loading\u4E8B\u4EF6
    this.emit('loading');

    return new Promise((resolve, reject) => {
      const _exec = () => {
        // \u83B7\u53D6\u4E0A\u4E00\u4E2A\u8BF7\u6C42\u7684\u63A7\u5236\u5668
        const lastAbortController = this.abortSignalMap[execId - 1] || null;

        // \u521B\u5EFA\u5F53\u524D\u8BF7\u6C42\u7684\u63A7\u5236\u5668
        const abortController = (this.abortSignalMap[execId] = new AbortController());

        // \u6267\u884C\u7528\u6237\u63D0\u4F9B\u7684\u5F02\u6B65\u51FD\u6570
        fn(
          {
            lastAbortController,
            abortController,
          },
          tryCount,
        )
          .then((res) => {
            // \u{1F3AF} \u5173\u952E\uFF1A\u53EA\u6709\u6700\u65B0\u7684\u8BF7\u6C42\u624D\u5904\u7406\u6210\u529F\u7ED3\u679C
            console.log( 'then execId, this.execId:', execId, this.execId);
            if (execId === this.execId) {
              this.emit('success', res);
            }
            resolve(res);
            delete this.abortSignalMap[execId];
            this.emit('finish', null, res);
            return res;
          })
          .catch((e) => {
            // \u{1F3AF} \u5173\u952E\uFF1A\u53EA\u6709\u6700\u65B0\u7684\u8BF7\u6C42\u624D\u5904\u7406\u9519\u8BEF
            if (execId === this.execId) {
              // \u68C0\u67E5\u662F\u5426\u9700\u8981\u91CD\u8BD5
              if (tryCount < (this.options.retryCount || 0)) {
                setTimeout(() => {
                  _exec();  // \u91CD\u8BD5
                }, this.options.retryInterval || DEFAULT_TIMEOUT);
              } else {
                this.emit('error', e);
                reject(e);
                delete this.abortSignalMap[execId];
                this.emit('finish', e, null);
              }
            } else {
              // \u975E\u6700\u65B0\u8BF7\u6C42\uFF0C\u76F4\u63A5\u6E05\u7406\u5E76\u62D2\u7EDD
              delete this.abortSignalMap[execId];
              this.emit('finish', e, null);
              reject(e);
            }
            tryCount++;
          });
      };

      _exec();  // \u5F00\u59CB\u6267\u884C
    });
  }
}`},63315:function(r,n){"use strict";n.Z=`import { useCallback } from 'react';
import useSyncExternalStoreExports from 'use-sync-external-store/shim/with-selector';
import type { IDispatchOptions, TEqualityFn,TComputed,TWatch } from './type';
import { shallowEqualKeys,execWatchHandler } from './utils';
import { useMemoizedFn } from './hooks';
import { calcComputedState } from './utils';  // \u{1F195} \u65B0\u589E\u5BFC\u5165

import { AsyncManager } from './Manager/AsyncManager';
import type { AsyncManagerOptions } from './Manager/AsyncManager';

const { useSyncExternalStoreWithSelector } = useSyncExternalStoreExports;
type IEffects<M extends Model<any, any>> = Record<
  string,
  ((this: M, ...args: any[]) => any) | any
>;
// src/type.ts - \u6269\u5C55\u73B0\u6709\u7684IModelConfig\u63A5\u53E3
export interface IModelConfig<
  TState extends Record<string, any> = Record<string, any>,
  TEffects extends IEffects<Model<TState, TEffects>> = IEffects<Model>,
> {
  state: TState;
  effects?: Partial<TEffects>;
   watch?: TWatch<TState>;     // \u{1F3AF} Watch\u914D\u7F6E
  computed?: TComputed<TState>;  // \u{1F195} \u65B0\u589E\uFF1A\u8BA1\u7B97\u5C5E\u6027\u914D\u7F6E
}
type TSubscribeFunc<
  TState extends Record<string, any> = Record<string, any>,
  TEffects extends Record<string, any> = Record<string, any>,
> = (state: Model<TState, TEffects>, silent: boolean) => any;

export class Model<
  TState extends Record<string, any> = Record<string, any>,
  TEffects extends Record<string, any> = Record<string, any>
> {
  isUnMount = false;
  state: TState = {} as TState;
  _preState: TState = {} as TState;
  _subscribes: TSubscribeFunc<TState, TEffects>[] = [];
  _isInited = false;
   asyncManagerMap: Record<
    string,
    AsyncManager<
      Partial<TState>,
      (
        aborts: {
          lastAbortController: AbortController | null;
          abortController: AbortController;
        },
        tryCount: number,
      ) => Promise<Partial<TState>>
    >
  > = {};

  constructor(public config: IModelConfig<TState, TEffects>) {}


  // \u{1F195} \u65B0\u589E\uFF1AasyncManager\u65B9\u6CD5\uFF08\u6E90\u7801\u4E2D\u7684\u5B9E\u73B0\uFF09
  asyncManager(
    name: string,
    options?: {
      loadingKey?: string;
      errorKey?: string;
      config?: AsyncManagerOptions;
      showLoading?: boolean;
    },
  ) {
    const {
      loadingKey = 'loading',
      errorKey = 'error',
      showLoading = true,
      config,
    } = options || {};

    // \u5982\u679C\u4E0D\u5B58\u5728\uFF0C\u521B\u5EFA\u65B0\u7684AsyncManager
    if (!this.asyncManagerMap[name]) {
      this.asyncManagerMap[name] = new AsyncManager(config);
    }

    const asyncManager = this.asyncManagerMap[name];

    // \u{1F3AF} \u5173\u952E\uFF1A\u6E05\u9664\u4E4B\u524D\u7684\u76D1\u542C\u5668\uFF0C\u91CD\u65B0\u7ED1\u5B9A
    asyncManager.offAllListeners();

    // \u{1F3AF} \u7ED1\u5B9Aloading\u4E8B\u4EF6
    asyncManager.on('loading', () => {
      if (showLoading) {
        this.setState({
          [loadingKey]: true,
        } as Partial<TState>);
      }
    });

    // \u{1F3AF} \u7ED1\u5B9Asuccess\u4E8B\u4EF6
    asyncManager.on('success', (result) => {
      if (typeof result === 'object' && result !== null) {
        this.setState({
          [loadingKey]: false,
          ...result,  // \u{1F3AF} \u5173\u952E\uFF1A\u5C06\u7ED3\u679C\u5408\u5E76\u5230\u72B6\u6001\u4E2D
        } as Partial<TState>);
      }
    });

    // \u{1F3AF} \u7ED1\u5B9Aerror\u4E8B\u4EF6
    asyncManager.on('error', (error) => {
      this.setState({
        [loadingKey]: false,
        [errorKey]: error,
      } as Partial<TState>);
    });

    return this.asyncManagerMap[name];
  }

 // \u{1F527} \u4FEE\u6539\uFF1Ainit\u65B9\u6CD5\uFF0C\u4F7F\u7528getActualState
  init() {
    if (!this._isInited) {
      this._isInited = true;
      const config = this.config;

      // \u{1F195} \u4F7F\u7528getActualState\u5904\u7406\u521D\u59CB\u72B6\u6001\uFF08\u5305\u542B\u8BA1\u7B97\u5C5E\u6027\uFF09
      this.state = this.getActualState({} as TState, config.state || {});
      this._preState = { ...this.state };

 
    }
  }

  getState = (): TState => {
    if (!this._isInited) {
      this.init();
    }
    return this.state;
  };

 // \u{1F527} \u4FEE\u6539\uFF1AsetState\u65B9\u6CD5\uFF0C\u4F7F\u7528getActualState
  setState(
    state: Partial<TState> | ((state: TState) => Partial<TState>),
    options?: IDispatchOptions,
  ) {
    if (!this._isInited) {
      this.init();
    }

    if (state) {
      // 1. \u5904\u7406\u51FD\u6570\u5F62\u5F0F\u7684state
      let payload: Partial<TState>;
      if (typeof state === 'function') {
        payload = state(this.state);
      } else {
        payload = state;
      }

      // \u{1F195} 2. \u4F7F\u7528getActualState\u5904\u7406\u72B6\u6001\uFF08\u5305\u542B\u8BA1\u7B97\u5C5E\u6027\uFF09
      this.state = this.getActualState(this._preState, payload);

      // 3. \u5206\u53D1\u66F4\u65B0
      this.dispatch(options);
      this._preState = { ...this.state };
    }
  }

    // \u{1F195} \u65B0\u589E\uFF1AgetActualState\u65B9\u6CD5\uFF08\u6E90\u7801\u4E2D\u7684\u6838\u5FC3\u65B9\u6CD5\uFF09
  getActualState(prevState: TState, payload: Partial<TState>): TState {
    // 1. \u5408\u5E76\u72B6\u6001
    let nextState = { ...prevState, ...payload };

    // 2. \u83B7\u53D6\u914D\u7F6E
    const { computed,watch } = this.config || {};

    // \u{1F195} 3. \u5904\u7406\u8BA1\u7B97\u5C5E\u6027
    nextState = calcComputedState<TState>({
      prevState,
      nextState,
      computed,
    });

    // 4. \u6267\u884C watch
    execWatchHandler({
      prevState,
      nextState,
      watch,
    });

    return nextState;
  }
  dispatch(options?: IDispatchOptions): void {
    if (this.isUnMount) return;

    this._subscribes.forEach((func) =>
      func(this, options?.silent || false)
    );
  }

  subscribe(func: TSubscribeFunc<TState, TEffects>): () => void {
    this._subscribes.push(func);
    return () => {
      this.unsubscribe(func);
    };
  }

  unsubscribe(func: TSubscribeFunc<TState, TEffects>): void {
    if (this._subscribes.length) {
      this._subscribes = this._subscribes.filter((fn) => fn !== func);
    }
  }

  useSelector = (equalityFn?: TEqualityFn<TState>) => {
    const subscribe = useCallback(
      (listener: () => void) => {
        return this.subscribe((_, silent) => {
          if (!silent) {
            listener();
          }
        });
      },
      [this],
    );

    const selector = useMemoizedFn((state: TState) => state);
    const isEqual = useMemoizedFn((prevState: TState, nextState: TState) => {
      if (equalityFn) {
        return equalityFn(prevState, nextState);
      }
      return Object.is(prevState, nextState);
    });

    const state = useSyncExternalStoreWithSelector(
      subscribe,
      this.getState,
      this.getState,
      selector,
      isEqual,
    );

    return state;
  };

  useGetState = <Key extends keyof TState & string>(
    keys?: Key[],
    equalityFn?: TEqualityFn<TState>,
  ) => {
    return this.useSelector((prevState, nextState) => {
      if (equalityFn) {
        return equalityFn(prevState, nextState);
      }
      if (keys && shallowEqualKeys(prevState, nextState, keys)) {
        return true;
      }
      return false;
    });
  };
}`},64831:function(r,n){"use strict";n.Z=`export * from './useLatest';
export * from './useMemoizedFn';
export * from './useCreation';

`},43023:function(r,n){"use strict";n.Z=`import { useMemo } from 'react';
import { useLatest } from './useLatest';

export function useCreation<T>(fn: () => T, deps: any[]): T {
  const fnRef = useLatest(fn);
  return useMemo(() => {
    return fnRef.current();
  }, deps);
}
`},52623:function(r,n){"use strict";n.Z=`import { useRef } from 'react';

export function useLatest<T>(val: T) {
  const ref = useRef<T>(val);
  ref.current = val;
  return ref
}
`},80083:function(r,n){"use strict";n.Z=`import { useCallback, useRef } from "react";

export function useMemoizedFn<T extends (...args: any[]) => any>(fn: T): T {
  const fnRef = useRef(fn);
  fnRef.current = fn;

  return useCallback((...args: any[]) => {
    return fnRef.current(...args);
  }, []) as T;
}
`},88468:function(r,n){"use strict";n.Z=`type IFunction = (...args: any) => void;

export class EventEmitter<TEventName extends string = string> {
  _listeners = {} as Record<TEventName, IFunction[] | undefined>;
  on(type: TEventName, fn: IFunction) {
    if (!this._listeners[type]) {
      this._listeners[type] = [];
    }
    this._listeners[type]!.push(fn);
    return () => {
      this.off(type, fn);
    };
  }
  once(type: TEventName, fn: IFunction) {
    const off = this.on(type, (...args) => {
      fn(...args);
      off();
    });
  }
  emit(type: TEventName, ...args: any) {
    const listeners = this._listeners[type];
    if (!listeners || !listeners.length) return false;
    listeners.forEach((fn) => {
      fn(...args);
    });
    return true;
  }
  off(type: TEventName, fn: IFunction) {
    const listeners = this._listeners[type];
    if (!listeners || !listeners.length) return;
    if (!fn) {
      this._listeners[type] = undefined;
      return;
    }
    this._listeners[type] = listeners.filter((f) => f !== fn);
  }
  offAllListeners() {
    console.log(this._listeners,'this._listeners')
    this._listeners = {} as Record<TEventName, IFunction[] | undefined>;
  }
}

export class EventEmitter2<
  Listeners extends Record<string, IFunction[]> = Record<string, IFunction[]>,
> extends EventEmitter {
  declare _listeners: Listeners;
  declare on: <Type extends keyof Listeners>(
    type: Type,
    fn: Listeners[Type][0],
  ) => any;
  declare emit: <Type extends keyof Listeners>(
    type: Type,
    ...args: Parameters<Listeners[Type][0]>
  ) => boolean;
}


`},70011:function(r,n){"use strict";n.Z=`// src/utils/object.ts

export function shallowEqualKeys(obj1: object, obj2: object, keys?: string[]) {
  if (!obj1 || !obj2) return false;
  if (typeof obj1 === 'object' && typeof obj2 === 'object') {
    return isSameObject(obj1, obj2, keys);
  }
  return false;
}

function isSameObject(
  obj1: Record<string, any>,
  obj2: Record<string, any>,
  keys?: string[],
) {
  if (!obj1 || !obj2) return false;
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) return false;
  const compareKeys = keys || keys1;
  for (let i = 0; i < compareKeys.length; i++) {
    const key1 = compareKeys[i];
    const key2 = compareKeys[i];
    if (key1 !== key2 || obj1[key1] !== obj2[key2]) return false;
  }
  return true;
}`},27325:function(r,n){"use strict";n.Z=`// src/utils.ts - \u5728\u73B0\u6709\u5DE5\u5177\u51FD\u6570\u57FA\u7840\u4E0A\u6DFB\u52A0

import type { TComputed,TWatch } from '../type';

// \u{1F195} \u65B0\u589E\uFF1A\u8BA1\u7B97\u5C5E\u6027\u5904\u7406\u51FD\u6570
export function calcComputedState<TState extends Record<string, any>>({
  prevState,
  nextState,
  computed,
}: {
  prevState: TState;
  nextState: TState;
  computed?: TComputed<TState>;
}): TState {
  // \u5982\u679C\u6CA1\u6709\u8BA1\u7B97\u5C5E\u6027\u914D\u7F6E\uFF0C\u76F4\u63A5\u8FD4\u56DE
  if (!computed || !computed.length) {
    return nextState;
  }

  let updatedState = { ...nextState };

  // \u904D\u5386\u6240\u6709\u8BA1\u7B97\u5C5E\u6027\u914D\u7F6E
  for (const computedConfig of computed) {
    if (typeof computedConfig === 'function') {
      // \u51FD\u6570\u5F62\u5F0F\uFF1A\u76F4\u63A5\u6267\u884C
      const computedResult = computedConfig(updatedState, prevState);
      updatedState = { ...updatedState, ...computedResult };
    } else {
      // \u5BF9\u8C61\u5F62\u5F0F\uFF1A\u68C0\u67E5\u4F9D\u8D56\u5B57\u6BB5\u662F\u5426\u53D8\u5316
      const { keys, handler } = computedConfig;

      // \u68C0\u67E5\u4F9D\u8D56\u7684\u5B57\u6BB5\u662F\u5426\u53D1\u751F\u53D8\u5316
      const hasChanged = keys.some(key => prevState[key] !== nextState[key]);

      if (hasChanged) {
        // \u521B\u5EFAdiff\u5BF9\u8C61\uFF0C\u6807\u8BB0\u54EA\u4E9B\u5B57\u6BB5\u53D1\u751F\u4E86\u53D8\u5316
        const diff = {} as Record<keyof TState & string, boolean>;
        keys.forEach(key => {
          diff[key as keyof TState & string] = prevState[key] !== nextState[key];
        });

        // \u6267\u884C\u8BA1\u7B97\u51FD\u6570
        const computedResult = handler(updatedState, prevState, diff);

        // \u5408\u5E76\u8BA1\u7B97\u7ED3\u679C
        updatedState = { ...updatedState, ...computedResult };
      }
    }
  }

  return updatedState;
}

// \u{1F195} \u65B0\u589E\uFF1A\u8BA1\u7B97\u5B57\u6BB5\u5DEE\u5F02\u7684\u51FD\u6570\uFF08\u6E90\u7801\u4E2D\u7684\u5B9E\u73B0\uFF09
export function calcDiffKeys(
  obj1: object,
  obj2: object,
  keys: (string | number | symbol)[],
) {
  const diffKeysMap: Record<string | number | symbol, boolean> = {};
  let diff = false;

  keys.forEach((key) => {
    // @ts-ignore
    if (!Object.is(obj1[key], obj2[key])) {
      diffKeysMap[key] = true;
      diff = true;
    }
  });

  return {
    diffKeysMap,  // \u53D8\u5316\u5B57\u6BB5\u7684\u6620\u5C04
    diff,         // \u662F\u5426\u6709\u53D8\u5316
  };
}

// \u{1F195} \u65B0\u589E\uFF1A\u6267\u884CWatch\u5904\u7406\u51FD\u6570\uFF08\u6E90\u7801\u4E2D\u7684\u5B9E\u73B0\uFF09
interface IWatchConfig<TState extends Record<string, any>> {
  prevState: TState;
  nextState: TState;
  watch?: TWatch<TState>;
}

export function execWatchHandler<TState extends Record<string, any>>({
  prevState,
  nextState,
  watch,
}: IWatchConfig<TState>) {
  if (watch) {
    watch.forEach((watchItem) => {
      if (watchItem.keys) {
        const { diffKeysMap, diff } = calcDiffKeys(
          prevState,
          nextState,
          watchItem.keys,
        );
        if (diff) {
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          watchItem.handler && watchItem.handler(nextState, prevState, diffKeysMap);
        }
      }
    });
  }
}`},5460:function(r,n,e){"use strict";var _=e(75271);function o(a,g){return a===g&&(a!==0||1/a===1/g)||a!==a&&g!==g}var p=typeof Object.is=="function"?Object.is:o,m=_.useState,b=_.useEffect,x=_.useLayoutEffect,T=_.useDebugValue;function E(a,g){var M=g(),c=m({inst:{value:M,getSnapshot:g}}),s=c[0].inst,d=c[1];return x(function(){s.value=M,s.getSnapshot=g,C(s)&&d({inst:s})},[a,M,g]),b(function(){return C(s)&&d({inst:s}),a(function(){C(s)&&d({inst:s})})},[a]),T(M),M}function C(a){var g=a.getSnapshot;a=a.value;try{var M=g();return!p(a,M)}catch(c){return!0}}function l(a,g){return g()}var y=typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"?l:E;n.useSyncExternalStore=_.useSyncExternalStore!==void 0?_.useSyncExternalStore:y},50095:function(r,n,e){"use strict";var _=e(75271),o=e(59207);function p(l,y){return l===y&&(l!==0||1/l===1/y)||l!==l&&y!==y}var m=typeof Object.is=="function"?Object.is:p,b=o.useSyncExternalStore,x=_.useRef,T=_.useEffect,E=_.useMemo,C=_.useDebugValue;n.useSyncExternalStoreWithSelector=function(l,y,a,g,M){var c=x(null);if(c.current===null){var s={hasValue:!1,value:null};c.current=s}else s=c.current;c=E(function(){function S(u){if(!h){if(h=!0,i=u,u=g(u),M!==void 0&&s.hasValue){var f=s.value;if(M(f,u))return t=f}return t=u}if(f=t,m(i,u))return f;var D=g(u);return M!==void 0&&M(f,D)?(i=u,f):(i=u,t=D)}var h=!1,i,t,v=a===void 0?null:a;return[function(){return S(y())},v===null?void 0:function(){return S(v())}]},[y,a,g,M]);var d=b(l,c[0],c[1]);return T(function(){s.hasValue=!0,s.value=d},[d]),C(d),d}},59207:function(r,n,e){"use strict";r.exports=e(5460)},60425:function(r,n,e){"use strict";r.exports=e(50095)},62657:function(r){function n(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}r.exports=n,r.exports.__esModule=!0,r.exports.default=r.exports},335:function(r,n,e){var _=e(31479);function o(p,m){var b=typeof Symbol!="undefined"&&p[Symbol.iterator]||p["@@iterator"];if(!b){if(Array.isArray(p)||(b=_(p))||m&&p&&typeof p.length=="number"){b&&(p=b);var x=0,T=function(){};return{s:T,n:function(){return x>=p.length?{done:!0}:{done:!1,value:p[x++]}},e:function(a){throw a},f:T}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var E=!0,C=!1,l;return{s:function(){b=b.call(p)},n:function(){var a=b.next();return E=a.done,a},e:function(a){C=!0,l=a},f:function(){try{!E&&b.return!=null&&b.return()}finally{if(C)throw l}}}}r.exports=o,r.exports.__esModule=!0,r.exports.default=r.exports},83136:function(r,n,e){var _=e(38836),o=e(68919),p=e(75254);function m(b){var x=o();return function(){var E=_(b),C;if(x){var l=_(this).constructor;C=Reflect.construct(E,arguments,l)}else C=E.apply(this,arguments);return p(this,C)}}r.exports=m,r.exports.__esModule=!0,r.exports.default=r.exports},38836:function(r){function n(e){return r.exports=n=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(o){return o.__proto__||Object.getPrototypeOf(o)},r.exports.__esModule=!0,r.exports.default=r.exports,n(e)}r.exports=n,r.exports.__esModule=!0,r.exports.default=r.exports},21742:function(r,n,e){var _=e(80038);function o(p,m){if(typeof m!="function"&&m!==null)throw new TypeError("Super expression must either be null or a function");p.prototype=Object.create(m&&m.prototype,{constructor:{value:p,writable:!0,configurable:!0}}),Object.defineProperty(p,"prototype",{writable:!1}),m&&_(p,m)}r.exports=o,r.exports.__esModule=!0,r.exports.default=r.exports},68919:function(r){function n(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}r.exports=n,r.exports.__esModule=!0,r.exports.default=r.exports},75254:function(r,n,e){var _=e(31759).default,o=e(62657);function p(m,b){if(b&&(_(b)==="object"||typeof b=="function"))return b;if(b!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return o(m)}r.exports=p,r.exports.__esModule=!0,r.exports.default=r.exports},80038:function(r){function n(e,_){return r.exports=n=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(p,m){return p.__proto__=m,p},r.exports.__esModule=!0,r.exports.default=r.exports,n(e,_)}r.exports=n,r.exports.__esModule=!0,r.exports.default=r.exports}}]);
