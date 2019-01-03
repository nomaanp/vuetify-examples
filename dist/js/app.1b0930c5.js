(function(t){function e(e){for(var n,o,r=e[0],l=e[1],u=e[2],f=0,d=[];f<r.length;f++)o=r[f],i[o]&&d.push(i[o][0]),i[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);c&&c(e);while(d.length)d.shift()();return s.push.apply(s,u||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,r=1;r<a.length;r++){var l=a[r];0!==i[l]&&(n=!1)}n&&(s.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},i={app:0},s=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/vuetify-examples/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var c=l;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"31f2":function(t,e,a){"use strict";var n=a("e39b"),i=a.n(n);i.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d");var n=a("2b0e"),i=a("bb71");a("da64");n["a"].use(i["a"],{iconfont:"md"});var s=a("8c4f"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-layout",{attrs:{"text-xs-center":"",wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("v-img",{staticClass:"my-3",attrs:{src:a("9b19"),contain:"",height:"200"}})],1),n("v-flex",{attrs:{"mb-4":""}},[n("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v("\n        Welcome to Vuetify\n      ")]),n("p",{staticClass:"subheading font-weight-regular"},[t._v("\n        For help and collaboration with other Vuetify developers,\n        "),n("br"),t._v("please join our online\n        "),n("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),n("v-flex",{attrs:{"mb-5":"",xs12:""}},[n("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("What's next?")]),n("v-layout",{attrs:{"justify-center":""}},t._l(t.whatsNext,function(e,a){return n("a",{key:a,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v("\n          "+t._s(e.text)+"\n        ")])}),0)],1),n("v-flex",{attrs:{xs12:"","mb-5":""}},[n("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("Important Links")]),n("v-layout",{attrs:{"justify-center":""}},t._l(t.importantLinks,function(e,a){return n("a",{key:a,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v("\n          "+t._s(e.text)+"\n        ")])}),0)],1),n("v-flex",{attrs:{xs12:"","mb-5":""}},[n("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("Ecosystem")]),n("v-layout",{attrs:{"justify-center":""}},t._l(t.ecosystem,function(e,a){return n("a",{key:a,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v("\n          "+t._s(e.text)+"\n        ")])}),0)],1)],1)],1)},r=[],l={data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuetifyjs.com"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/layout/pre-defined"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}},u=l,c=(a("31f2"),a("2877")),f=a("6544"),d=a.n(f),v=a("a523"),p=a("0e8f"),m=a("adda"),h=a("a722"),b=Object(c["a"])(u,o,r,!1,null,null,null);b.options.__file="HelloWorld.vue";var y=b.exports;d()(b,{VContainer:v["a"],VFlex:p["a"],VImg:m["a"],VLayout:h["a"]});var g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dnd"},[a("v-layout",{attrs:{row:"",wrap:"",id:"multi"}},t._l(t.stages,function(e){return a("v-flex",{key:"stage-"+e.id,staticClass:"pa-2 stage",attrs:{xl3:"",lg3:"",md4:"",sm6:"",xs12:""}},[a("v-card",[a("v-card-title",{attrs:{"primary-title":""}},[a("div",[a("div",{staticClass:"headline"},[t._v(t._s(e.name))])])]),a("v-list",{staticClass:"tile__list",attrs:{dense:""}},t._l(e.tasks,function(e){return a("v-list-tile",{key:"task-"+e.id},[a("v-list-tile-content",[a("v-list-tile-title",[t._v(t._s(e.title))])],1)],1)}),1)],1)],1)}),1)],1)},x=[],_=(a("ac6a"),a("53fe")),k=a.n(_),w={name:"dnd",data:function(){return{stages:[{id:1,name:"1st Stage",text:"This is a 1st tab",tasks:[{id:1,title:"Task 1"},{id:2,title:"Task 2"},{id:3,title:"Task 3"}]},{id:2,name:"2nd Stage",text:"This is a 2nd tab",tasks:[{id:11,title:"Task 11"},{id:12,title:"Task 12"},{id:13,title:"Task 13"}]},{id:3,name:"3rd Stage",text:"This is a 3rd tab",tasks:[{id:21,title:"Task 21"},{id:22,title:"Task 22"},{id:23,title:"Task 23"}]},{id:4,name:"4rd Stage",text:"This is a 4rd tab",tasks:[{id:31,title:"Task 31"},{id:32,title:"Task 32"},{id:33,title:"Task 33"}]}]}},methods:{},mounted:function(){k.a.create(document.getElementById("multi"),{animation:150,draggable:".stage",onStart:function(){document.ontouchmove=function(t){t.preventDefault()}},onEnd:function(){document.ontouchmove=function(){return!0}}}),[].forEach.call(document.getElementById("multi").getElementsByClassName("tile__list"),function(t){k.a.create(t,{group:"task",animation:150,onStart:function(){document.ontouchmove=function(t){t.preventDefault()}},onEnd:function(){document.ontouchmove=function(){return!0}}})})}},T=w,V=(a("b2ed"),a("b0af")),C=a("12b2"),j=a("8860"),L=a("ba95"),S=a("5d23"),O=Object(c["a"])(T,g,x,!1,null,"5627d9fe",null);O.options.__file="dnd.vue";var E=O.exports;d()(O,{VCard:V["a"],VCardTitle:C["a"],VFlex:p["a"],VLayout:h["a"],VList:j["a"],VListTile:L["a"],VListTileContent:S["a"],VListTileTitle:S["b"]}),n["a"].use(s["a"]);var A=[{path:"/",component:y},{path:"/dnd",component:E}],D=new s["a"]({routes:A}),P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"inspire"}},[a("v-navigation-drawer",{attrs:{fixed:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",{attrs:{dense:""}},[a("v-list-tile",{attrs:{to:"/"}},[a("v-list-tile-action",[a("v-icon",[t._v("home")])],1),a("v-list-tile-content",[a("v-list-tile-title",[t._v("Home")])],1)],1),a("v-list-tile",{attrs:{to:"/dnd"}},[a("v-list-tile-action",[a("v-icon",[t._v("contact_mail")])],1),a("v-list-tile-content",[a("v-list-tile-title",[t._v("Drag and Drop")])],1)],1)],1)],1),a("v-toolbar",{attrs:{color:"indigo",dark:"",fixed:"",app:""}},[t.backArrow.state?a("v-btn",{staticClass:"hidden-xs-only",attrs:{icon:""},on:{click:function(e){t.back()}}},[a("v-icon",[t._v("arrow_back")])],1):t._e(),a("v-toolbar-side-icon",{staticClass:"white--text",attrs:{else:"",light:""},on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),a("v-toolbar-title",[t._v("Application")])],1),a("v-content",[a("v-container",[a("router-view")],1)],1),a("v-footer",{attrs:{color:"indigo",app:"",inset:""}},[a("div",{staticClass:"pa-2"},[a("span",{staticClass:"white--text"},[t._v("© 2018")])])])],1)},I=[],F={name:"App",components:{},data:function(){return{drawer:!0,backArrow:{state:!1,route:""}}}},M=F,B=a("7496"),N=a("8336"),$=a("549c"),q=a("553a"),W=a("132d"),H=a("40fe"),J=a("f774"),Q=a("71d9"),z=a("706c"),G=a("2a7f"),K=Object(c["a"])(M,P,I,!1,null,null,null);K.options.__file="App.vue";var R=K.exports;d()(K,{VApp:B["a"],VBtn:N["a"],VContainer:v["a"],VContent:$["a"],VFooter:q["a"],VIcon:W["a"],VList:j["a"],VListTile:L["a"],VListTileAction:H["a"],VListTileContent:S["a"],VListTileTitle:S["b"],VNavigationDrawer:J["a"],VToolbar:Q["a"],VToolbarSideIcon:z["a"],VToolbarTitle:G["a"]}),n["a"].config.productionTip=!1,new n["a"]({router:D,render:function(t){return t(R)}}).$mount("#app")},"9b19":function(t,e,a){t.exports=a.p+"img/logo.63a7d78d.svg"},b2ed:function(t,e,a){"use strict";var n=a("fe88"),i=a.n(n);i.a},e39b:function(t,e,a){},fe88:function(t,e,a){}});
//# sourceMappingURL=app.1b0930c5.js.map