(function(e){function t(t){for(var n,i,l=t[0],s=t[1],d=t[2],c=0,f=[];c<l.length;c++)i=l[c],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);u&&u(t);while(f.length)f.shift()();return a.push.apply(a,d||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,i=1;i<r.length;i++){var s=r[i];0!==o[s]&&(n=!1)}n&&(a.splice(t--,1),e=l(l.s=r[0]))}return e}var n={},o={app:0},a=[];function i(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"096382f0"}[e]+".js"}function l(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.e=function(e){var t=[],r=o[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=n);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=i(e);var d=new Error;a=function(t){s.onerror=s.onload=null,clearTimeout(c);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",d.name="ChunkLoadError",d.type=n,d.request=a,r[1](d)}o[e]=void 0}};var c=setTimeout((function(){a({type:"timeout",target:s})}),12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(t)},l.m=e,l.c=n,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(r,n,function(t){return e[t]}.bind(null,n));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=d;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",{attrs:{id:"inspire"}},[r("v-navigation-drawer",{attrs:{clipped:"",fixed:"",app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[r("v-list",{attrs:{dense:""}},[r("v-subheader",[e._v("Menu")]),r("v-list-item-group",{attrs:{color:"primary"}},[r("v-list-item",{on:{click:e.allFeeds}},[r("v-list-item-icon",[r("v-icon",[e._v(" dashboard ")])],1),r("v-list-item-content",[r("v-list-item-title",[e._v(" All Feeds ")])],1)],1),r("v-list-item",{on:{click:e.addFeed}},[r("v-list-item-icon",[r("v-icon",[e._v(" add ")])],1),r("v-list-item-content",[r("v-list-item-title",[e._v(" Add ")])],1)],1),e._l(e.feeds,(function(t,n){return r("v-list-item",{key:n,attrs:{value:t==e.selectedFeed}},[r("v-list-item-icon",{on:{click:function(r){return e.filterFeed(t)}}},[r("v-icon",{attrs:{color:t.color}},[e._v(" bookmark ")])],1),r("v-list-item-content",{on:{click:function(r){return e.filterFeed(t)}}},[r("v-list-item-title",[e._v(e._s(t.title))])],1)],1)}))],2)],1)],1),r("v-app-bar",{attrs:{app:"","clipped-left":""}},[r("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),r("v-toolbar-title",[e._v("myRSS ")]),r("v-icon",{staticClass:"ml-2",attrs:{color:"orange darken-3"}},[e._v(" rss_feed ")])],1),r("v-main",[r("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",[r("div",[r("v-container",{attrs:{fluid:"","grid-list-lg":""}},[r("v-layout",{attrs:{row:"",wrap:""}},e._l(e.items,(function(t,n){return r("v-flex",{key:n,attrs:{xs12:""}},[r("v-card",[r("v-card-title",{attrs:{"primary-title":""}},[r("div",{staticClass:"headline"},[e._v(e._s(t.title))])]),r("v-card-text",{domProps:{innerHTML:e._s(t.contentSnippet)}}),r("v-card-actions",[r("v-btn",{attrs:{text:"",target:"_new",href:t.link}},[e._v("See link")]),r("v-spacer"),r("v-btn",{attrs:{icon:""},on:{click:function(t){e.show=!e.show}}},[r("v-icon",[e._v(e._s(e.show?"mdi-chevron-up":"mdi-chevron-down"))])],1)],1),r("v-expand-transition",[r("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}]},[r("v-divider"),r("v-card-text",{domProps:{innerHTML:e._s(t.content)}})],1)])],1)],1)})),1)],1)],1)])],1),r("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.addFeedDialog,callback:function(t){e.addFeedDialog=t},expression:"addFeedDialog"}},[r("v-card",[r("v-card-title",[e._v("Add Feed")]),r("v-card-text",[e._v(" Add the RSS URL for a feed below, or the URL for the site and I'll try to auto-discover the RSS feed. "),r("v-text-field",{attrs:{label:"URL",error:e.urlError,rules:e.urlRules},model:{value:e.addURL,callback:function(t){e.addURL=t},expression:"addURL"}})],1),r("v-card-actions",[r("v-btn",{attrs:{color:"primary"},on:{click:function(t){return t.stopPropagation(),e.addFeedAction(t)}}},[e._v("Add")]),r("v-btn",{attrs:{color:"primary",text:""},on:{click:function(t){t.stopPropagation(),e.addFeedDialog=!1}}},[e._v("Close")])],1)],1)],1)],1)],1),r("v-footer",{attrs:{app:""}},[r("span",[e._v("© "+e._s((new Date).getFullYear()))])])],1)},a=[],i=(r("4de4"),r("c740"),r("4160"),r("159b"),r("96cf"),r("1da1")),l=r("bc3a"),s=r.n(l),d=["indigo","blue","cyan","light-blue","teal","light-green","blue-grey"],c={name:"App",data:function(){return{drawer:!0,showIntro:!1,addFeedDialog:!1,addURL:"",urlError:!1,urlRules:[],feeds:[],allItems:[],selectedFeed:null,error:!1,errorMsg:"",show:!1}},computed:{items:function(){var e=this;if(0===this.allItems.length)return[];var t=[];return this.selectedFeed?(console.log("filtered"),t=this.allItems.filter((function(t){return t.feedPk==e.selectedFeed.feedUrl}))):t=this.allItems,t=t.sort((function(e,t){return new Date(t.isoDate)-new Date(e.isoDate)})),t}},created:function(){this.$vuetify.theme.dark=!0,this.restoreFeeds()},methods:{allFeeds:function(){this.selectedFeed=null},storeFeeds:function(){console.log("calling storeFeeds"),localStorage.setItem("feeds",JSON.stringify(this.feeds))},addFeed:function(){console.log("Add Feed"),this.addFeedDialog=!0},addFeedAction:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,e.urlError=!1,e.urlRules=[],!(e.feeds.findIndex((function(t){return t.rsslink===e.addURL}))>=0)){t.next=8;break}e.urlError=!0,e.urlRules=["URL already exists."],t.next=20;break;case 8:return t.next=10,s.a.post("http://localhost:3000/rss",{url:e.addURL});case 10:r=t.sent,n=r.data,o=n.items,n.color=d[e.feeds.length%(d.length-1)],o.forEach((function(t){console.log(e.addURL),t.feedPk=e.addURL,t.feedColor=n.color,e.allItems.push(t)})),delete n.items,n.feedUrl=e.addURL,e.feeds.push(n),e.addFeedDialog=!1,e.storeFeeds();case 20:t.next=27;break;case 22:t.prev=22,t.t0=t["catch"](0),console.log(t.t0),e.error=!0,e.errorMsg=t.t0.message;case 27:case"end":return t.stop()}}),t,null,[[0,22]])})))()},filterFeed:function(e){this.selectedFeed=e},loadFeed:function(e){var t=this;s.a.post("http://localhost:3000/rss",{url:e}).then((function(r){r.data.items.forEach((function(r){r.feedPk=e.feedUrl,r.feedTitle=e.title,r.feedColor=e.color,t.allItems.push(r)})),t.addFeedDialog=!1,t.storeFeeds()})).catch((function(e){t.error=!0,t.errorMsg=e.message}))},restoreFeeds:function(){var e=this,t=localStorage.getItem("feeds");t&&(this.feeds=JSON.parse(t),this.feeds.forEach((function(t,r){t.color=d[r%(d.length-1)],e.loadFeed(t)})))}}},u=c,f=r("2877"),v=Object(f["a"])(u,o,a,!1,null,null,null),p=v.exports,h=(r("d3b7"),r("8c4f")),m=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"})},g=[],b={name:"Home"},w=b,F=Object(f["a"])(w,m,g,!1,null,null,null),y=F.exports;n["default"].use(h["a"]);var _=[{path:"/",name:"Home",component:y},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],k=new h["a"]({mode:"history",base:"/",routes:_}),x=k,R=r("ce5b"),L=r.n(R);r("bf40");n["default"].use(L.a);var P=new L.a({theme:{themes:{light:{primary:"#ee44aa",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}}});r("d5e8"),r("5363"),r("c789");n["default"].config.productionTip=!1,new n["default"]({router:x,vuetify:P,render:function(e){return e(p)}}).$mount("#app")}});
//# sourceMappingURL=app.5518a694.js.map