webpackJsonp([1],{14:function(t,e,a){"use strict";var r=a(46),n=a(47),s=a(1),i=s(r.a,n.a,!1,null,null,null);e.a=i.exports},16:function(t,e,a){"use strict";function r(t){var e=new s.a.Renderer;return e.code=function(t,e){return'<pre><code class="hljs">'+o.a.highlightAuto(t).value+"</code></pre>"},s.a.setOptions({renderer:e}),s()(t)}e.a=r;var n=a(234),s=a.n(n),i=a(15),o=a.n(i)},17:function(t,e,a){t.exports=a(18)},18:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a(19),n=a(22),s=a(23),i=a(242),o=a(8),c=a.n(o),l=a(6);c.a.interceptors.request.use(function(t){var e=l.a.get();return e&&(t.headers={Authorization:"JWT "+e}),t}),r.a.use(n.a);var u=new n.a({routes:s.a});new r.a({el:"#app",components:{index:i.a},router:u,render:function(){return(0,arguments[0])("index",null,[])}})},23:function(t,e,a){"use strict";var r=a(24),n=a(49),s=a(52),i=a(232),o=a(236),c=a(239);e.a=[{path:"/",component:r.a,name:"folderIndex"},{path:"/folders/:folder_id",component:n.a,name:"folderShow",props:!0},{path:"/folders/:folder_id/pages/create",component:i.a,name:"pageCreate",props:!0},{path:"/pages/:page_id",component:s.a,name:"pageShow",props:!0},{path:"/pages/:page_id/update",component:o.a,name:"pageUpdate",props:!0},{path:"/login",component:c.a,name:"login",props:!0}]},231:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-show"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-9"},[a("h1",{staticClass:"page-title"},[t._v(t._s(t.page.title))]),t._v(" "),a("hr"),t._v(" "),a("p",{staticClass:"d-flex justify-content-between"},[a("router-link",{staticClass:"btn btn-light text-dark",attrs:{to:{name:"folderShow",params:{folder_id:t.page.folder_field}}}},[a("i",{staticClass:"fa fa-angle-left mr-2"}),t._v("Back\n        ")]),t._v(" "),a("router-link",{staticClass:"btn btn-light",attrs:{to:{name:"pageUpdate",params:{page_id:t.page.uuid}}}},[a("i",{staticClass:"fa fa-pencil"})])],1),t._v(" "),a("div",{staticClass:"card mb-5"},[a("div",{staticClass:"card-body"},[a("article",{staticClass:"content",domProps:{innerHTML:t._s(t.page.html)}})])])]),t._v(" "),a("div",{staticClass:"col-lg-3"},[a("page-list",{attrs:{folder_name:t.page.folder_name,folder_id:t.page.folder_field,pages:t.page.folder_pages}})],1)])])},n=[],s={render:r,staticRenderFns:n};e.a=s},232:function(t,e,a){"use strict";var r=a(233),n=a(235),s=a(1),i=s(r.a,n.a,!1,null,null,null);e.a=i.exports},233:function(t,e,a){"use strict";function r(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,a){function r(n,s){try{var i=e[n](s),o=i.value}catch(t){return void a(t)}if(!i.done)return Promise.resolve(o).then(function(t){r("next",t)},function(t){r("throw",t)});t(o)}return r("next")})}}var n=a(2),s=a.n(n),i=a(3),o=a(16);e.a={props:["folder_id"],data:function(){return{folder:{},title:"",content:"",preview:!1,previewHtml:"",errors:!1}},methods:{fetchData:function(){function t(){return e.apply(this,arguments)}var e=r(s.a.mark(function t(){var e;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(i.d)(this.folder_id);case 3:e=t.sent,this.folder=e.data,t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),this.errors=!0,this.$emit("error",t.t0);case 11:case"end":return t.stop()}},t,this,[[0,7]])}));return t}(),onPreview:function(){this.previewHtml=Object(o.a)(this.content),this.preview=!0},onClosePreview:function(){this.preview=!1},onCreate:function(){function t(){return e.apply(this,arguments)}var e=r(s.a.mark(function t(){var e;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(i.b)({title:this.title,body:this.content,folder_field:this.folder_id});case 3:e=t.sent,this.$router.push({name:"pageShow",params:{page_id:e.data.uuid}}),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),this.errors=!0,this.$emit("error",t.t0);case 11:case"end":return t.stop()}},t,this,[[0,7]])}));return t}()},computed:{cannotSend:function(){return""===this.title||""===this.content}},created:function(){this.fetchData()}}},235:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-create"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-lg-9"},[t.errors?a("p",{staticClass:"alert alert-danger mb-4"},[t._v("エラーが発生しました。")]):t._e(),t._v(" "),t.preview?a("div",[a("h1",{staticClass:"page-title"},[t._v(t._s(t.title))]),t._v(" "),a("hr"),t._v(" "),a("p",{staticClass:"text-right"},[a("button",{staticClass:"btn btn-secondary",on:{click:t.onClosePreview}},[a("i",{staticClass:"fa fa-close"})]),t._v(" "),a("button",{staticClass:"btn btn-dark",on:{click:t.onCreate}},[a("i",{staticClass:"fa fa-check mr-2"}),t._v("OK\n          ")])]),t._v(" "),a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("article",{staticClass:"content",domProps:{innerHTML:t._s(t.previewHtml)}})])])]):a("div",[a("h1",{staticClass:"page-title"},[t._v(t._s(t.folder.name)+" にページを追加")]),t._v(" "),a("hr"),t._v(" "),a("p",{staticClass:"d-flex justify-content-between"},[a("router-link",{staticClass:"btn btn-light text-dark",attrs:{to:{name:"folderShow",params:{folder_id:t.folder_id}}}},[a("i",{staticClass:"fa fa-angle-left mr-2"}),t._v("Back\n          ")]),t._v(" "),t._m(0)],1),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"title"}},[t._v("Title")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"form-control",attrs:{id:"title"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"content"}},[t._v("Content")]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],staticClass:"form-control",attrs:{id:"content"},domProps:{value:t.content},on:{input:function(e){e.target.composing||(t.content=e.target.value)}}})]),t._v(" "),a("p",{staticClass:"text-right"},[a("button",{staticClass:"btn btn-dark",attrs:{disabled:t.cannotSend},on:{click:t.onPreview}},[t._v("Preview")])])])])])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"btn btn-light text-dark",attrs:{href:"http://kojika17.com/2013/01/starting-markdown.html",target:"_blank"}},[a("i",{staticClass:"fa fa-question-circle-o mr-2"}),t._v("Markdown\n          ")])}],s={render:r,staticRenderFns:n};e.a=s},236:function(t,e,a){"use strict";var r=a(237),n=a(238),s=a(1),i=s(r.a,n.a,!1,null,null,null);e.a=i.exports},237:function(t,e,a){"use strict";function r(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,a){function r(n,s){try{var i=e[n](s),o=i.value}catch(t){return void a(t)}if(!i.done)return Promise.resolve(o).then(function(t){r("next",t)},function(t){r("throw",t)});t(o)}return r("next")})}}var n=a(2),s=a.n(n),i=a(3),o=a(16);e.a={props:["page_id"],data:function(){return{folder:{},title:"",content:"",preview:!1,previewHtml:"",errors:!1}},methods:{fetchData:function(){function t(){return e.apply(this,arguments)}var e=r(s.a.mark(function t(){var e;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(i.e)(this.page_id);case 3:e=t.sent,this.title=e.data.title,this.content=e.data.body,t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),this.errors=!0,this.$emit("error",t.t0);case 12:case"end":return t.stop()}},t,this,[[0,8]])}));return t}(),onPreview:function(){this.previewHtml=Object(o.a)(this.content),this.preview=!0},onClosePreview:function(){this.preview=!1},onUpdate:function(){function t(){return e.apply(this,arguments)}var e=r(s.a.mark(function t(){var e;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(i.h)(this.page_id,{title:this.title,body:this.content});case 3:e=t.sent,this.$router.push({name:"pageShow",params:{page_id:e.data.uuid}}),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),this.errors=!0,this.$emit("error",t.t0);case 11:case"end":return t.stop()}},t,this,[[0,7]])}));return t}()},computed:{cannotSend:function(){return""===this.title||""===this.content}},created:function(){this.fetchData()}}},238:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-update"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-lg-9"},[t.errors?a("p",{staticClass:"alert alert-danger mb-4"},[t._v("エラーが発生しました。")]):t._e(),t._v(" "),t.preview?a("div",[a("h1",{staticClass:"page-title"},[t._v(t._s(t.title))]),t._v(" "),a("hr"),t._v(" "),a("p",{staticClass:"text-right"},[a("button",{staticClass:"btn btn-secondary",on:{click:t.onClosePreview}},[a("i",{staticClass:"fa fa-close"})]),t._v(" "),a("button",{staticClass:"btn btn-dark",on:{click:t.onUpdate}},[a("i",{staticClass:"fa fa-check mr-2"}),t._v("OK\n          ")])]),t._v(" "),a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("article",{staticClass:"content",domProps:{innerHTML:t._s(t.previewHtml)}})])])]):a("div",[a("h1",{staticClass:"page-title"},[t._v("ページの編集")]),t._v(" "),a("hr"),t._v(" "),a("p",{staticClass:"d-flex justify-content-between"},[a("router-link",{staticClass:"btn btn-light text-dark",attrs:{to:{name:"pageShow",params:{page_id:t.page_id}}}},[a("i",{staticClass:"fa fa-angle-left mr-2"}),t._v("Back\n          ")]),t._v(" "),t._m(0)],1),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"title"}},[t._v("Title")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"form-control",attrs:{id:"title"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"content"}},[t._v("Content")]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],staticClass:"form-control",attrs:{id:"content"},domProps:{value:t.content},on:{input:function(e){e.target.composing||(t.content=e.target.value)}}})]),t._v(" "),a("p",{staticClass:"text-right"},[a("button",{staticClass:"btn btn-dark",attrs:{disabled:t.cannotSend},on:{click:t.onPreview}},[t._v("Preview")])])])])])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"btn btn-light text-dark",attrs:{href:"http://kojika17.com/2013/01/starting-markdown.html",target:"_blank"}},[a("i",{staticClass:"fa fa-question-circle-o mr-2"}),t._v("Markdown\n          ")])}],s={render:r,staticRenderFns:n};e.a=s},239:function(t,e,a){"use strict";var r=a(240),n=a(241),s=a(1),i=s(r.a,n.a,!1,null,null,null);e.a=i.exports},24:function(t,e,a){"use strict";var r=a(25),n=a(48),s=a(1),i=s(r.a,n.a,!1,null,null,null);e.a=i.exports},240:function(t,e,a){"use strict";function r(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,a){function r(n,s){try{var i=e[n](s),o=i.value}catch(t){return void a(t)}if(!i.done)return Promise.resolve(o).then(function(t){r("next",t)},function(t){r("throw",t)});t(o)}return r("next")})}}var n=a(2),s=a.n(n),i=a(3),o=a(6);e.a={data:function(){return{username:"",password:"",errors:!1}},methods:{login:function(){function t(){return e.apply(this,arguments)}var e=r(s.a.mark(function t(){var e,a;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(i.f)({username:this.username,password:this.password});case 3:e=t.sent,a=e.data.token,o.a.store(a),this.$router.push({name:"folderIndex"}),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),console.error(t.t0),this.errors=!0;case 13:case"end":return t.stop()}},t,this,[[0,9]])}));return t}()}}},241:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"login"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-lg-4"},[t.errors?a("p",{staticClass:"alert alert-danger mb-4"},[t._v("ログインできません。")]):t._e(),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"username"}},[t._v("Username")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form-control",attrs:{id:"username"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"password"}},[t._v("Password")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{id:"password",type:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),a("p",{staticClass:"text-right"},[a("button",{staticClass:"btn btn-dark",on:{click:t.login}},[a("i",{staticClass:"fa fa-unlock-alt mr-2"}),t._v("Login\n        ")])])])])])},n=[],s={render:r,staticRenderFns:n};e.a=s},242:function(t,e,a){"use strict";function r(t){a(243)}var n=a(244),s=a(245),i=a(1),o=r,c=i(n.a,s.a,!1,o,null,null);e.a=c.exports},243:function(t,e){},244:function(t,e,a){"use strict";var r=a(6);e.a={methods:{onError:function(t){t.response&&401===t.response.status&&(r.a.remove(),this.$router.push({name:"login"}))}}}},245:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper"},[a("header",{staticClass:"mb-5"},[a("nav",{staticClass:"navbar navbar-dark bg-dark"},[a("div",{staticClass:"container"},[a("router-link",{staticClass:"navbar-brand logo",attrs:{to:{name:"folderIndex"}}},[t._v("Wiki")])],1)])]),t._v(" "),a("main",{staticClass:"container"},[a("router-view",{on:{error:t.onError}})],1)])},n=[],s={render:r,staticRenderFns:n};e.a=s},25:function(t,e,a){"use strict";function r(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,a){function r(n,s){try{var i=e[n](s),o=i.value}catch(t){return void a(t)}if(!i.done)return Promise.resolve(o).then(function(t){r("next",t)},function(t){r("throw",t)});t(o)}return r("next")})}}var n=a(2),s=a.n(n),i=a(3),o=a(14);e.a={data:function(){return{folders:[],newFolder:"",createFolder:!1,errors:!1}},components:{"page-list":o.a},methods:{fetchData:function(){function t(){return e.apply(this,arguments)}var e=r(s.a.mark(function t(){var e;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(i.c)();case 3:e=t.sent,this.folders=e.data,t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),this.errors=!0,this.$emit("error",t.t0);case 11:case"end":return t.stop()}},t,this,[[0,7]])}));return t}(),onClickAddFolder:function(){this.createFolder=!0},onClose:function(){this.clearNewFolder()},onCreate:function(){function t(){return e.apply(this,arguments)}var e=r(s.a.mark(function t(){var e;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(i.a)(this.newFolder);case 3:e=t.sent,this.folders.unshift(e.data),this.clearNewFolder(),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),this.errors=!0,this.$emit("error",t.t0);case 12:case"end":return t.stop()}},t,this,[[0,8]])}));return t}(),clearNewFolder:function(){this.newFolder="",this.createFolder=!1}},created:function(){this.fetchData()}}},3:function(t,e,a){"use strict";function r(){return f.a.get(p)}function n(t){return f.a.get(p+t)}function s(t){return f.a.post(p,{name:t})}function i(t,e){return f.a.patch(""+p+t+"/",{name:e})}function o(t){return f.a.get(v+t)}function c(t){return f.a.post(v,t)}function l(t,e){return f.a.patch(""+v+t+"/",e)}function u(t){return f.a.post(m,t)}e.c=r,e.d=n,e.a=s,e.g=i,e.e=o,e.b=c,e.h=l,e.f=u;var d=a(8),f=a.n(d),p="/api/folders/",v="/api/pages/",m="/jwt-token"},46:function(t,e,a){"use strict";e.a={props:["folder_id","folder_name","pages"]}},47:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("aside",{staticClass:"list-group"},[a("p",{staticClass:"list-group-item list-group-item-light text-dark"},[a("i",{staticClass:"fa fa-folder-open-o"}),t._v(" "),a("strong",[t._v(t._s(t.folder_name))])]),t._v(" "),t._l(t.pages,function(e){return a("router-link",{key:e.uuid,staticClass:"list-group-item list-group-item-action",attrs:{to:{name:"pageShow",params:{page_id:e.uuid}}}},[t._v(t._s(e.title))])}),t._v(" "),a("router-link",{staticClass:"list-group-item list-group-item-action list-group-item-light text-center",attrs:{to:{name:"pageCreate",params:{folder_id:t.folder_id}}}},[a("span",[t._v("+ ")]),a("i",{staticClass:"fa fa-file-text-o"})])],2)},n=[],s={render:r,staticRenderFns:n};e.a=s},48:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"folders"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-lg-9"},[a("h1",{staticClass:"page-title"},[t._v("Folders")]),t._v(" "),a("hr"),t._v(" "),t.errors?a("p",{staticClass:"alert alert-danger mb-4"},[t._v("エラーが発生しました。")]):t._e(),t._v(" "),a("p",{staticClass:"text-right"},[a("button",{staticClass:"btn btn-light text-dark",on:{click:t.onClickAddFolder}},[a("span",[t._v("+ ")]),a("i",{staticClass:"fa fa-folder-open-o"})])]),t._v(" "),t.createFolder?a("div",[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"name"}},[t._v("Name")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newFolder,expression:"newFolder"}],staticClass:"form-control mb-2",attrs:{id:"name",title:"フォルダ名"},domProps:{value:t.newFolder},on:{input:function(e){e.target.composing||(t.newFolder=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group text-right"},[a("button",{staticClass:"btn btn-light",on:{click:t.onClose}},[a("i",{staticClass:"fa fa-close"})]),t._v(" "),a("button",{staticClass:"btn btn-dark",attrs:{disabled:""===t.newFolder},on:{click:t.onCreate}},[a("i",{staticClass:"fa fa-check mr-2"}),t._v("OK\n          ")])])]):t._e(),t._v(" "),a("div",{staticClass:"list-group"},t._l(t.folders,function(e){return a("router-link",{key:e.uuid,staticClass:"list-group-item list-group-item-action",attrs:{to:{name:"folderShow",params:{folder_id:e.uuid}}}},[t._v("\n          "+t._s(e.name)+"\n        ")])}))])])])},n=[],s={render:r,staticRenderFns:n};e.a=s},49:function(t,e,a){"use strict";var r=a(50),n=a(51),s=a(1),i=s(r.a,n.a,!1,null,null,null);e.a=i.exports},50:function(t,e,a){"use strict";function r(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,a){function r(n,s){try{var i=e[n](s),o=i.value}catch(t){return void a(t)}if(!i.done)return Promise.resolve(o).then(function(t){r("next",t)},function(t){r("throw",t)});t(o)}return r("next")})}}var n=a(2),s=a.n(n),i=a(3);e.a={props:["folder_id"],data:function(){return{folder:{},name:"",updateFolder:!1,errors:!1}},methods:{fetchData:function(){function t(){return e.apply(this,arguments)}var e=r(s.a.mark(function t(){var e;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(i.d)(this.folder_id);case 3:e=t.sent,this.folder=e.data,this.name=this.folder.name,t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),this.errors=!0,this.$emit("error",t.t0);case 12:case"end":return t.stop()}},t,this,[[0,8]])}));return t}(),onClickUpdate:function(){this.updateFolder=!0},onClose:function(){this.updateFolder=!1,this.name=this.folder.name},onUpdate:function(){function t(){return e.apply(this,arguments)}var e=r(s.a.mark(function t(){var e;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(i.g)(this.folder.uuid,this.name);case 3:e=t.sent,this.folder=e.data,this.onClose(),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),this.errors=!0,this.$emit("error",t.t0);case 12:case"end":return t.stop()}},t,this,[[0,8]])}));return t}()},created:function(){this.fetchData()},watch:{$route:"fetchData"}}},51:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"folder-show"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-lg-9"},[a("h1",{staticClass:"page-title"},[t._v(t._s(t.folder.name))]),t._v(" "),a("hr"),t._v(" "),t.errors?a("p",{staticClass:"alert alert-danger mb-4"},[t._v("エラーが発生しました。")]):t._e(),t._v(" "),a("div",{staticClass:"d-flex justify-content-between mb-3"},[a("router-link",{staticClass:"btn btn-light text-dark",attrs:{to:{name:"folderIndex"}}},[a("i",{staticClass:"fa fa-angle-left mr-2"}),t._v("Back\n        ")]),t._v(" "),a("div",[a("router-link",{staticClass:"btn btn-light text-dark mr-2",attrs:{to:{name:"pageCreate",params:{folder_id:t.folder_id}}}},[a("span",[t._v("+ ")]),a("i",{staticClass:"fa fa-file-text-o"})]),t._v(" "),a("button",{staticClass:"btn btn-light text-dark",on:{click:t.onClickUpdate}},[a("i",{staticClass:"fa fa-pencil"})])],1)],1),t._v(" "),t.updateFolder?a("div",[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"name"}},[t._v("Name")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control mb-2",attrs:{id:"name",title:"フォルダ名"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group text-right"},[a("button",{staticClass:"btn btn-light",on:{click:t.onClose}},[a("i",{staticClass:"fa fa-close"})]),t._v(" "),a("button",{staticClass:"btn btn-dark",attrs:{disabled:""===t.name},on:{click:t.onUpdate}},[a("i",{staticClass:"fa fa-check mr-2"}),t._v("OK\n          ")])])]):t._e(),t._v(" "),a("div",{staticClass:"list-group"},[t._m(0),t._v(" "),t._l(t.folder.pages,function(e){return a("router-link",{key:e.uuid,staticClass:"list-group-item list-group-item-action",attrs:{to:{name:"pageShow",params:{page_id:e.uuid}}}},[t._v("\n          "+t._s(e.title)+"\n        ")])})],2)])])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"list-group-item list-group-item-light text-dark"},[a("i",{staticClass:"fa fa-file-text-o mr-1"}),t._v(" "),a("strong",[t._v("Pages")])])}],s={render:r,staticRenderFns:n};e.a=s},52:function(t,e,a){"use strict";var r=a(53),n=a(231),s=a(1),i=s(r.a,n.a,!1,null,null,null);e.a=i.exports},53:function(t,e,a){"use strict";function r(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,a){function r(n,s){try{var i=e[n](s),o=i.value}catch(t){return void a(t)}if(!i.done)return Promise.resolve(o).then(function(t){r("next",t)},function(t){r("throw",t)});t(o)}return r("next")})}}var n=a(2),s=a.n(n),i=a(15),o=a.n(i),c=a(14),l=a(3);e.a={props:["page_id"],data:function(){return{page:{}}},components:{"page-list":c.a},methods:{fetchData:function(){function t(){return e.apply(this,arguments)}var e=r(s.a.mark(function t(){var e;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(l.e)(this.page_id);case 3:e=t.sent,this.page=e.data,t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),this.$emit("error",t.t0);case 10:case"end":return t.stop()}},t,this,[[0,7]])}));return t}()},created:function(){this.fetchData()},updated:function(){o.a.initHighlighting()},watch:{$route:"fetchData"}}},6:function(t,e,a){"use strict";e.a={store:function(t){localStorage.setItem("jwt-token",t)},get:function(){return localStorage.getItem("jwt-token")},remove:function(){return localStorage.removeItem("jwt-token")}}}},[17]);
//# sourceMappingURL=client.fadf3b80.js.map