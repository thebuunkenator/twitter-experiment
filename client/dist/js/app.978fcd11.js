(function(t){function e(e){for(var n,c,s=e[0],i=e[1],u=e[2],p=0,f=[];p<s.length;p++)c=s[p],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&f.push(a[c][0]),a[c]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);l&&l(e);while(f.length)f.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,s=1;s<r.length;s++){var i=r[s];0!==a[i]&&(n=!1)}n&&(o.splice(e--,1),t=c(c.s=r[0]))}return t}var n={},a={app:0},o=[];function c(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=t,c.c=n,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(r,n,function(e){return t[e]}.bind(null,n));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=i;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[r("div",{staticClass:"d-flex align-center"},[r("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"https://d15omoko64skxi.cloudfront.net/wp-content/uploads/2016/05/cc-site-icon-40x40.png",transition:"scale-transition",width:"40"}})],1),r("h1",[t._v("Compliment Collector")]),r("v-spacer")],1),r("v-content",[r("HelloWorld")],1)],1)},o=[],c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-layout",{attrs:{"text-center":"",wrap:""}},[r("v-flex",{attrs:{"mb-4":""}},[r("v-form",[r("v-container",[r("v-row",[r("v-text-field",{attrs:{id:"create=post",label:"Compliment of moment:"},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}})],1),r("v-row",[r("v-btn",{attrs:{block:"",color:"blue"},on:{click:t.createPost}},[t._v("Post!")])],1)],1)],1),r("hr"),t.error?r("p",{staticClass:"error"},[t._v(t._s(t.error))]):t._e(),t._l(t.sortedPosts,(function(e,n){return r("v-card",{key:e._id,staticClass:"mx-auto mt-5",attrs:{color:"#eee","max-width":"400",item:e,index:n}},[r("v-card-actions",[r("v-list-item-title",[t._v(t._s(e.createdAt.getDate()+"."+(e.createdAt.getMonth()+1)+"."+e.createdAt.getFullYear()))])],1),r("v-card-text",{staticClass:"headline font-weight-bold"},[t._v("\n\n          "+t._s(e.text)+"\n        ")]),r("v-card-actions",{staticClass:"d-flex flex-row-reverse"},[r("v-btn",{staticClass:"ml-5",attrs:{color:"orange",disabled:""},on:{click:function(r){return t.editPost(e._id)}}},[t._v("\n            Edit\n          ")]),r("v-btn",{attrs:{color:"red"},on:{click:function(r){return t.deletePost(e._id)}}},[t._v("\n            Delete\n          ")])],1)],1)}))],2)],1)],1)},s=[],i=(r("96cf"),r("3b8d")),u=(r("55dd"),r("8e6e"),r("ac6a"),r("456d"),r("bd86")),l=r("d225"),p=r("b0b4"),f=r("bc3a"),d=r.n(f);function v(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function b(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?v(Object(r),!0).forEach((function(e){Object(u["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var h="api/posts/",m=function(){function t(){Object(l["a"])(this,t)}return Object(p["a"])(t,null,[{key:"getPosts",value:function(){return new Promise(function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e,r){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d.a.get(h);case 3:n=t.sent,a=n.data,e(a.map((function(t){return b({},t,{createdAt:new Date(t.createdAt)})}))),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),r(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e,r){return t.apply(this,arguments)}}())}},{key:"insertPost",value:function(t){return d.a.post(h,{text:t})}},{key:"deletePost",value:function(t){return d.a.delete("".concat(h).concat(t))}}]),t}(),g=m,x={name:"HelloWorld",computed:{sortedPosts:function(){return this.posts.sort((function(t,e){return e.createdAt-t.createdAt}))}},data:function(){return{posts:[],error:"",text:""}},created:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,g.getPosts();case 3:this.posts=t.sent,t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),this.error=t.t0.message;case 9:case"end":return t.stop()}}),t,this,[[0,6]])})));function e(){return t.apply(this,arguments)}return e}(),methods:{createPost:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,g.insertPost(this.text);case 2:return t.next=4,g.getPosts();case 4:this.posts=t.sent,this.text="";case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),deletePost:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,g.deletePost(e);case 2:return t.next=4,g.getPosts();case 4:this.posts=t.sent;case 5:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),editPost:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:console.log("editing: ".concat(e));case 1:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()}},w=x,y=r("2877"),O=r("6544"),P=r.n(O),j=r("8336"),_=r("b0af"),k=r("99d9"),V=r("a523"),C=r("0e8f"),A=r("4bd4"),R=r("a722"),S=r("5d23"),D=r("0fd9"),T=r("8654"),E=Object(y["a"])(w,c,s,!1,null,null,null),M=E.exports;P()(E,{VBtn:j["a"],VCard:_["a"],VCardActions:k["a"],VCardText:k["b"],VContainer:V["a"],VFlex:C["a"],VForm:A["a"],VLayout:R["a"],VListItemTitle:S["a"],VRow:D["a"],VTextField:T["a"]});var F={name:"App",components:{HelloWorld:M},data:function(){return{}}},H=F,L=r("7496"),W=r("40dc"),$=r("a75b"),B=r("adda"),I=r("2fa4"),J=Object(y["a"])(H,a,o,!1,null,null,null),Y=J.exports;P()(J,{VApp:L["a"],VAppBar:W["a"],VContent:$["a"],VImg:B["a"],VSpacer:I["a"]});var q=r("f309");n["a"].use(q["a"]);var z=new q["a"]({});n["a"].config.productionTip=!1,new n["a"]({vuetify:z,render:function(t){return t(Y)}}).$mount("#app")}});
//# sourceMappingURL=app.978fcd11.js.map