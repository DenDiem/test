(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-97cbb538","chunk-066806de"],{"07da":function(t,e,a){},"0dd3":function(t,e,a){},"0efa":function(t,e,a){},"159b":function(t,e,a){var r=a("da84"),o=a("fdbc"),n=a("17c2"),s=a("9112");for(var i in o){var c=r[i],l=c&&c.prototype;if(l&&l.forEach!==n)try{s(l,"forEach",n)}catch(u){l.forEach=n}}},"172d":function(t,e,a){"use strict";var r=a("c4a8"),o=a.n(r);o.a},"17c2":function(t,e,a){"use strict";var r=a("b727").forEach,o=a("b301");t.exports=o("forEach")?function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}:[].forEach},3037:function(t,e,a){"use strict";a("96cf");var r=a("1da1"),o=a("2b0e"),n=a("2f62"),s=a("de46"),i=a("9664");o["a"].use(n["a"]);var c=new n["a"].Store({state:{school:i["a"].placeholder()},getters:{get:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.school.id!==i["a"].placeholder().id){t.next=3;break}return t.next=3,s["a"].school.getSchool().then((function(t){return e.school=i["a"].fromResponse(t)}));case 3:return t.abrupt("return",e.school);case 4:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},mutations:{set:function(t,e){t.school=i["a"].fromResponse(e)},clear:function(t){t.school=i["a"].placeholder()}},actions:{},modules:{}});e["a"]=c},"3fb3":function(t,e,a){},4160:function(t,e,a){"use strict";var r=a("23e7"),o=a("17c2");r({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},5774:function(t,e,a){"use strict";var r=a("0efa"),o=a.n(r);o.a},5864:function(t,e){t.exports="data:image/png;base64,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"},"6bee":function(t,e,a){"use strict";a.d(e,"a",(function(){return o}));var r=a("de46"),o={data:function(){return{school:null,schoolUsers:null}},methods:{createProfile:function(t){return r["a"].school.createProfile(t)}}}},"7f42":function(t,e,a){"use strict";var r=a("07da"),o=a.n(r);o.a},"7fce":function(t,e,a){"use strict";var r=a("0dd3"),o=a.n(r);o.a},"92e1":function(t,e,a){t.exports=a.p+"img/def-school.490031a7.png"},9664:function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));var r=a("d4ec"),o=a("bee2"),n=a("4026"),s=function(){function t(e,a,o,n){Object(r["a"])(this,t),this.id=e,this.schoolName=a,this.schoolAddress=o,this.director=n}return Object(o["a"])(t,null,[{key:"placeholder",value:function(){return new t(-1,"","",n["a"].placeholder())}},{key:"fromResponse",value:function(e){return new t(e.id,e.schoolName,e.schoolAddress,n["a"].fromResponse(e.director))}}]),t}()},"9b19":function(t,e,a){t.exports=a.p+"img/logo.e0da586e.svg"},a91c:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"nav"}},[a("router-link",{attrs:{to:"/account"}},[t._v("My account")]),a("router-link",{attrs:{to:"/apply-for-position"}},[t._v("Apply for position")]),a("router-link",{attrs:{to:"/choose-profile"}},[t._v("Choose profile")]),a("router-link",{attrs:{to:"/logout"}},[t._v("Logout")])],1)},o=[],n={name:"authenticated-header"},s=n,i=(a("7f42"),a("2877")),c=Object(i["a"])(s,r,o,!1,null,"01e271e9",null);e["a"]=c.exports},b0c0:function(t,e,a){var r=a("83ab"),o=a("9bf2").f,n=Function.prototype,s=n.toString,i=/^\s*function ([^ (]*)/,c="name";!r||c in n||o(n,c,{configurable:!0,get:function(){try{return s.call(this).match(i)[1]}catch(t){return""}}})},b301:function(t,e,a){"use strict";var r=a("d039");t.exports=function(t,e){var a=[][t];return!a||!r((function(){a.call(null,e||function(){throw 1},1)}))}},b64b:function(t,e,a){var r=a("23e7"),o=a("7b0b"),n=a("df75"),s=a("d039"),i=s((function(){n(1)}));r({target:"Object",stat:!0,forced:i},{keys:function(t){return n(o(t))}})},c4a8:function(t,e,a){},c8f8:function(t,e,a){"use strict";var r=a("3fb3"),o=a.n(r);o.a},d157:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card"},[t._m(0),a("b-tabs",{staticClass:"block",attrs:{position:"is-centered"}},[a("b-tab-item",{attrs:{label:"Head Teachers"}},[a("profiles-list",{attrs:{columns:t.columns,profiles:t.users.headTeachers,name:"head teacher"}})],1),a("b-tab-item",{attrs:{label:"Teachers"}},[a("profiles-list",{attrs:{columns:t.columns,profiles:t.users.teachers,name:"teacher"}})],1),a("b-tab-item",{attrs:{label:"Students"}},[a("profiles-list",{attrs:{columns:t.columns,profiles:t.users.students,name:"student"}})],1)],1)],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"card-header"},[a("p",{staticClass:"card-header-title"},[t._v("Users")])])}],n=(a("4160"),a("d81d"),a("b0c0"),a("b64b"),a("159b"),a("96cf"),a("1da1")),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.profiles.length?a("b-table",{attrs:{data:t.profiles,columns:t.columns}}):a("p",{staticClass:"notification"},[t._v("There are no "+t._s(t.name)+"s in this school")]),a("b-modal",{attrs:{active:t.isComponentModalActive,"has-modal-card":"","trap-focus":"","aria-role":"dialog","aria-modal":"",width:"400"},on:{"update:active":function(e){t.isComponentModalActive=e}}},[a("create-profile",{attrs:{"current-profiles":t.profiles,role:"HeadTeacher"}})],1),a("footer",{staticClass:"card-footer"},[a("button",{staticClass:"button is-primary is-medium",on:{click:function(e){t.isComponentModalActive=!0}}},[t._v("Create "+t._s(t.name))])])],1)},i=[],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"modal",staticClass:"modal-card"},[t._m(0),a("section",{staticClass:"modal-card-body"},[a("b-field",[a("b-input",{attrs:{type:"email",placeholder:"E-mail",required:""},model:{value:t.data.createProfilePayload.email,callback:function(e){t.$set(t.data.createProfilePayload,"email",e)},expression:"data.createProfilePayload.email"}})],1),a("b-field",[a("b-input",{attrs:{placeholder:"Role",disabled:""},model:{value:t.data.createProfilePayload.role,callback:function(e){t.$set(t.data.createProfilePayload,"role",e)},expression:"data.createProfilePayload.role"}})],1)],1),a("footer",{staticClass:"modal-card-foot"},[a("button",{staticClass:"button",attrs:{type:"button"},on:{click:function(e){return t.$parent.close()}}},[t._v("Close")]),a("button",{staticClass:"button is-primary",on:{click:t.submit}},[t._v("Create")])])])},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"modal-card-head"},[a("p",{staticClass:"modal-card-title"},[t._v("Create user")])])}],u=(a("d3b7"),a("6bee")),f=a("d4ec"),d=function t(){Object(f["a"])(this,t),this.email="",this.role=""},h=a("de46"),m={name:"create-profile",mixins:[u["a"]],data:function(){return{data:{createProfilePayload:new d}}},mounted:function(){this.data.createProfilePayload.role=this.role},methods:{submit:function(){var t=this,e=this.$buefy.loading.open(this.$refs.modal.$el);this.createProfile(this.data.createProfilePayload).then((function(e){h["a"].account.getDetails([""+e.accountId]).then((function(a){e.name=a[0].name,e.email=a[0].email,t.currentProfiles.push(e)})),t.$parent.close()}))["finally"]((function(){return e.close()}))}},props:["role","currentProfiles"]},p=m,A=a("2877"),b=Object(A["a"])(p,c,l,!1,null,"326fd2ac",null),v=b.exports,g={name:"profiles-list",props:["profiles","columns","name"],components:{CreateProfile:v},data:function(){return{isComponentModalActive:!1}},mounted:function(){var t=this;this.profiles.forEach((function(e){e.name||t.$set(e,"name","Not yet created")}))}},S=g,y=(a("172d"),Object(A["a"])(S,s,i,!1,null,"459b799c",null)),C=y.exports,P=(a("3037"),a("bee2")),L=a("4026"),k=function(){function t(e,a,r,o){Object(f["a"])(this,t),this.director=e,this.headTeachers=a,this.teachers=r,this.students=o}return Object(P["a"])(t,null,[{key:"placeholder",value:function(){return new t(L["a"].placeholder(),[],[],[])}}]),t}(),O={name:"school-users",components:{ProfilesList:C},data:function(){return{columns:[{field:"profileId",label:"ID",width:"40",numeric:!0},{field:"name",label:"Name"},{field:"email",label:"E-mail"}],users:k.placeholder()}},mounted:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:h["a"].school.getSchoolUsers().then((function(t){e.users=t;var a={};e.users.teachers.map((function(t){return a[t.accountId]=t})),e.users.students.map((function(t){return a[t.accountId]=t})),e.users.headTeachers.map((function(t){return a[t.accountId]=t})),Object.keys(a).length&&h["a"].account.getDetails(Object.keys(a)).then((function(t){t.forEach((function(t){e.$set(a[t.id],"name",t.name),e.$set(a[t.id],"email",t.email)}))}))}));case 1:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}()},j=O,E=Object(A["a"])(j,r,o,!1,null,"7dfa9c28",null);e["default"]=E.exports},d1da:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("authenticated-header"),a("section",{staticClass:"sidebar-layout"},[a("school-sidebar",{attrs:{school:t.school}}),a("div",{staticClass:"content"},[a("p",{staticClass:"title white"},[t._v("School: "+t._s(t.school.schoolName)+"!")]),a("div",[a("transition",{attrs:{name:"slide-fade",mode:"out-in"}},[a("router-view",{staticClass:"view"})],1)],1)])],1)],1)},o=[],n=(a("96cf"),a("1da1")),s=a("6bee"),i=a("d157"),c=a("9664"),l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-sidebar",{attrs:{position:"static",type:"is-light",open:"",fullheight:"",mobile:"reduced"}},[r("div",[r("div",{staticClass:"logo"},[r("b-navbar-item",{attrs:{tag:"router-link",to:{path:"/"}}},[r("img",{staticStyle:{width:"200px"},attrs:{src:a("9b19"),alt:"MathPartner"}})])],1),r("school-card",{attrs:{school:t.school}}),r("b-menu",[r("b-menu-list",{attrs:{label:"School"}},[r("router-link",{attrs:{to:"/school"}},[t._v("Users")]),r("router-link",{attrs:{to:"/school/groups"}},[t._v("Groups")]),r("router-link",{attrs:{to:"/school/plans"}},[t._v("Educational Plans")])],1),r("b-menu-list",{attrs:{label:"Actions"}},[r("router-link",{attrs:{to:"/logout"}},[t._v("Logout")])],1)],1)],1)])},u=[],f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card"},[t._m(0),a("div",{staticClass:"card-content"},[a("div",{staticClass:"media"},[t._m(1),a("div",{staticClass:"media-content"},[a("p",{staticClass:"title is-4"},[t._v(t._s(t.school.schoolName))]),a("p",{staticClass:"subtitle is-6"},[t._v(t._s(t.school.schoolAddress))])])]),a("div",{staticClass:"content"},[a("strong",[t._v("Director:")]),t._v(" "+t._s(t.school.director.profileName)+" ")])]),"Director"===t.profile.role?a("footer",{staticClass:"card-footer"},[a("p",{staticClass:"card-footer-item"},[t._v("Edit")]),a("p",{staticClass:"card-footer-item"},[t._v("Delete")])]):t._e()])},d=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card-image"},[r("figure",{staticClass:"image is-4by3"},[r("img",{attrs:{src:a("92e1"),alt:"Placeholder image"}})])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"media-left"},[r("figure",{staticClass:"image is-48x48"},[r("img",{attrs:{src:a("5864"),alt:"Placeholder image"}})])])}],h=a("c6e9"),m=a("4026"),p={name:"school-card",data:function(){return{profile:m["a"].placeholder()}},mounted:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.profile=h["a"].getters.get;case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),props:["school"]},A=p,b=(a("5774"),a("2877")),v=Object(b["a"])(A,f,d,!1,null,"7228bcb0",null),g=v.exports,S={name:"SchoolSidebar",components:{SchoolCard:g},props:["school"]},y=S,C=(a("7fce"),Object(b["a"])(y,l,u,!1,null,"da3fea66",null)),P=C.exports,L=a("3037"),k=a("a91c"),O={name:"SchoolProfile",mixins:[s["a"]],components:{SchoolSidebar:P,SchoolUsers:i["default"],AuthenticatedHeader:k["a"]},data:function(){return{school:c["a"].placeholder()}},mounted:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,L["a"].getters.get;case 2:this.school=t.sent;case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},j=O,E=(a("c8f8"),Object(b["a"])(j,r,o,!1,null,"29122d7a",null));e["default"]=E.exports},d81d:function(t,e,a){"use strict";var r=a("23e7"),o=a("b727").map,n=a("d039"),s=a("1dde"),i=s("map"),c=i&&!n((function(){[].map.call({length:-1,0:1},(function(t){throw t}))}));r({target:"Array",proto:!0,forced:!i||!c},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-97cbb538.365e676f.js.map