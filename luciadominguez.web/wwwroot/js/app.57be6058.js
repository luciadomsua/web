(function(t){function e(e){for(var o,i,s=e[0],l=e[1],c=e[2],m=0,p=[];m<s.length;m++)i=s[m],a[i]&&p.push(a[i][0]),a[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,s=1;s<n.length;s++){var l=n[s];0!==a[l]&&(o=!1)}o&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},a={app:0},r=[];function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"0f6e":function(t,e,n){},"130e":function(t,e,n){},"16a3":function(t,e,n){"use strict";var o=n("130e"),a=n.n(o);a.a},"1db8":function(t,e,n){"use strict";var o=n("952c"),a=n.n(o);a.a},"2a73":function(t,e,n){"use strict";var o=n("a647"),a=n.n(o);a.a},"2a7b":function(t,e,n){"use strict";var o=n("9740"),a=n.n(o);a.a},"3a19":function(t,e,n){t.exports=n.p+"img/profile.f0c910a5.jpg"},"4f4b":function(t,e,n){"use strict";var o=n("dab4"),a=n.n(o);a.a},"5c0b":function(t,e,n){"use strict";var o=n("5e27"),a=n.n(o);a.a},"5e27":function(t,e,n){},6314:function(t,e,n){},"6d20":function(t,e,n){"use strict";var o=n("0f6e"),a=n.n(o);a.a},"6d47":function(t,e,n){"use strict";var o=n("ad45"),a=n.n(o);a.a},8104:function(t,e,n){},"85ff":function(t,e,n){},"952c":function(t,e,n){},9740:function(t,e,n){},"9b19":function(t,e,n){t.exports=n.p+"img/logo.26cf4931.svg"},a07e:function(t,e,n){},a647:function(t,e,n){},ad45:function(t,e,n){},b9d2:function(t,e,n){"use strict";var o=n("6314"),a=n.n(o);a.a},cd49:function(t,e,n){"use strict";n.r(e);var o=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Navbar"),n("div",{staticClass:"wrapper"},[n("router-view")],1)],1)},r=[],i=n("9ab4"),s=n("60a3"),l=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"navbar-container"}},[o("nav",{staticClass:"navbar",attrs:{role:"navigation","aria-label":"main navigation"}},[o("div",{staticClass:"navbar-brand"},[o("router-link",{staticClass:"navbar-item",attrs:{to:"/"}},[o("img",{attrs:{src:n("9b19"),width:"200",height:"50"}})]),t._m(0)],1),o("div",{staticClass:"navbar-menu",attrs:{id:"navbarBasicExample"}},[o("div",{staticClass:"navbar-start"},[o("router-link",{staticClass:"navbar-item",attrs:{to:"/"}},[t._v("Home")]),o("router-link",{staticClass:"navbar-item",attrs:{to:"/gallery"}},[t._v("Garería")]),o("router-link",{staticClass:"navbar-item",attrs:{to:"/about"}},[t._v("Sobre mi")])],1)])])])},c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"navbar-burger burger",attrs:{role:"button","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"}},[n("span",{attrs:{"aria-hidden":"true"}}),n("span",{attrs:{"aria-hidden":"true"}}),n("span",{attrs:{"aria-hidden":"true"}})])}],u=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i["c"](e,t),e.prototype.mounted=function(){},e=i["b"]([s["a"]],e),e}(s["c"]),m=u,p=m,d=(n("16a3"),n("2877")),h=Object(d["a"])(p,l,c,!1,null,null,null),f=h.exports,b=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i["c"](e,t),e.prototype.mounted=function(){this.$store.dispatch("albums/load"),this.$store.dispatch("photos/load"),this.$store.dispatch("tags/load")},e=i["b"]([Object(s["a"])({components:{Navbar:f}})],e),e}(o["a"]),g=b,v=g,y=(n("5c0b"),Object(d["a"])(v,a,r,!1,null,null,null)),w=y.exports,_=n("8c4f"),D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("Hero"),t._l(t.albums,function(t){return n("AlbumSlider",{key:t.Id,attrs:{album:t}})})],2)},P=[],C=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},T=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"hero"}},[n("div",{staticClass:"hero-container"})])}],k=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i["c"](e,t),e.prototype.mounted=function(){},e=i["b"]([s["a"]],e),e}(o["a"]),j=k,x=j,O=(n("2a73"),Object(d["a"])(x,C,T,!1,null,null,null)),E=O.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"album-slider"},[n("h1",[t._v(t._s(t.title))]),n("div",{staticClass:"slider-container"},[n("AlbumThumbnail",{staticClass:"album-container",attrs:{album:t.album}})],1)])},A=[],S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"album-card"},[n("router-link",{attrs:{to:{name:"album",params:{albumId:t.album.id}}}},[n("Polaroid",{attrs:{photo:t.albumCover,title:t.albumTitle}})],1)],1)},N=[],q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"polaroid"},[n("div",{staticClass:"image-container"},[n("img",{attrs:{src:t.url,alt:t.photoTitle}})]),t.noTitle?t._e():n("div",{staticClass:"image-meta"},[n("span",[t._v(t._s(t.photoTitle))])])])},I=[],L=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i["c"](e,t),Object.defineProperty(e.prototype,"url",{get:function(){return this.photo.url},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"photoTitle",{get:function(){return this.photo.title},enumerable:!0,configurable:!0}),i["b"]([Object(s["b"])()],e.prototype,"photo",void 0),i["b"]([Object(s["b"])()],e.prototype,"title",void 0),i["b"]([Object(s["b"])({default:!1})],e.prototype,"noTitle",void 0),e=i["b"]([s["a"]],e),e}(s["c"]),z=L,G=z,B=(n("4f4b"),Object(d["a"])(G,q,I,!1,null,null,null)),F=B.exports,M=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i["c"](e,t),e.prototype.mounted=function(){},Object.defineProperty(e.prototype,"albumCover",{get:function(){return this.album.cover||this.album.photos[0]},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"albumTitle",{get:function(){return this.album.title},enumerable:!0,configurable:!0}),i["b"]([Object(s["b"])()],e.prototype,"album",void 0),e=i["b"]([Object(s["a"])({components:{Polaroid:F}})],e),e}(s["c"]),H=M,J=H,U=Object(d["a"])(J,S,N,!1,null,null,null),V=U.exports,Q=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i["c"](e,t),Object.defineProperty(e.prototype,"title",{get:function(){return this.album.title||"Test"},enumerable:!0,configurable:!0}),e.prototype.created=function(){},e.prototype.mounted=function(){},i["b"]([Object(s["b"])()],e.prototype,"album",void 0),e=i["b"]([Object(s["a"])({components:{AlbumThumbnail:V}})],e),e}(o["a"]),Y=Q,K=Y,R=(n("ee01"),Object(d["a"])(K,$,A,!1,null,"265b4904",null)),W=R.exports,X=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i["c"](e,t),e.prototype.created=function(){this.albums=this.$store.getters["albums/all"]},e.prototype.mounted=function(){},e=i["b"]([Object(s["a"])({components:{Hero:E,AlbumSlider:W}})],e),e}(o["a"]),Z=X,tt=Z,et=(n("d1e2"),Object(d["a"])(tt,D,P,!1,null,"1281261d",null)),nt=et.exports,ot=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},at=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"about"},[o("div",{staticClass:"picture"},[o("img",{attrs:{src:n("3a19"),alt:"Lucía Domínguez"}})]),o("div",{staticClass:"content"},[o("p",[t._v("Me llamo Lucía, tengo 32 años y levo, literalmente, toda la vida intentando capturar momentos para convertirlos en eternos. No sé si es por mi mala memoria o porque he vivido siempre rodeada de cámaras y fotos.")]),o("p",[t._v("\n      En cuanto pude me compré una cámara “buena” y, aunque todo va a épocas, hace tiempo que la fotografía se ha convertido en una parte relevante de mi vida.\n      Conozco la técnica y sé que es importante, pero nunca me ha llamado la atención.\n    ")]),o("p",[t._v("No soy de las que entran a un concierto y analiza la luz para saber qué ISO utilizar. Lo que me gusta de la fotografía es lo que permite, captar momentos que son importantes o especiales por el motivo que sea. Prefiero una foto movida de un momento increíble, con diferencia. Y eso es lo que vais a encontrar aquí. Trocitos de mi vida en forma de imagen. Fotos que os pueden parecer bonitas, o no, pero que para mí encierran una historia.")]),o("p",[t._v("\n      Podéis seguirme en Instagram:\n      "),o("a",{attrs:{href:"https://www.instagram.com/luciadominguez__/?hl=es",rel:"nofollow",target:"_blank"}},[t._v("luciadominguez__")])])])])}],rt=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i["c"](e,t),e.prototype.mounted=function(){},e=i["b"]([s["a"]],e),e}(s["c"]),it=rt,st=it,lt=(n("1db8"),Object(d["a"])(st,ot,at,!1,null,"3ccdbd8a",null)),ct=lt.exports,ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"gallery"},[t._l(t.albums,function(t){return n("div",{key:t.id,staticClass:"album-slider"},[n("AlbumSlider",{attrs:{album:t}})],1)}),n("router-view",{key:t.$route.fullPath})],2)},mt=[],pt=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i["c"](e,t),e.prototype.created=function(){this.albums=this.$store.getters["albums/all"]},e.prototype.mounted=function(){},e=i["b"]([Object(s["a"])({components:{AlbumSlider:W}})],e),e}(o["a"]),dt=pt,ht=dt,ft=(n("b9d2"),Object(d["a"])(ht,ut,mt,!1,null,null,null)),bt=ft.exports,gt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"album-view"},[n("div",{staticClass:"big-picture",on:{click:t.toggleComments}},[n("Polaroid",{attrs:{photo:t.albumCover}})],1),n("div",{staticClass:"photo-grid"},t._l(t.albumPhotos,function(e){return n("div",{key:e.id,staticClass:"photo-thumbnail"},[n("div",{staticClass:"small-picture",on:{click:function(n){return t.changeBigPicture(e)}}},[n("Polaroid",{attrs:{photo:e}})],1)])}),0)])},vt=[],yt=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i["c"](e,t),Object.defineProperty(e.prototype,"albumCover",{get:function(){if(null!==this.album){if(null!==this.album.cover)return this.album.cover;if(this.album.photos.length>0)return this.album.photos[0]}return null},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"albumPhotos",{get:function(){return this.album.photos},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"albumTitle",{get:function(){return this.album.title},enumerable:!0,configurable:!0}),e.prototype.changeBigPicture=function(t){this.album.cover=t},e.prototype.toggleComments=function(){null!==this.albumCover&&null!==this.albumCover.comments&&this.albumCover.comments.length>0&&this.$router.push({name:"photo",params:{photoId:this.albumCover.id}})},e.prototype.created=function(){var t=this.$route.params["albumId"];this.album=this.$store.getters["albums/byId"](t)},e=i["b"]([Object(s["a"])({components:{Polaroid:F}})],e),e}(s["c"]),wt=yt,_t=wt,Dt=(n("6d20"),Object(d["a"])(_t,gt,vt,!1,null,null,null)),Pt=Dt.exports,Ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"photo-view"},[n("div",{staticClass:"big-picture",on:{click:t.toggleComments}},[n("Polaroid",{attrs:{photo:t.photo}})],1),n("div",{staticClass:"comments-view"},[n("Comments",{attrs:{comments:t.comments}})],1)])},Tt=[],kt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"comments"},t._l(t.comments,function(t){return n("CommentComponent",{key:t.id,attrs:{comment:t}})}),1)},jt=[],xt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"comment"},[n("p",{staticClass:"author"},[t._v(t._s(t.comment.author))]),n("p",{staticClass:"text"},[t._v(t._s(t.comment.text))]),n("p",{staticClass:"date"},[t._v(t._s(t.comment.creationDate))]),n("p")])},Ot=[],Et=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i["c"](e,t),e.prototype.created=function(){},e.prototype.mounted=function(){},i["b"]([Object(s["b"])()],e.prototype,"comment",void 0),e=i["b"]([s["a"]],e),e}(s["c"]),$t=Et,At=$t,St=(n("2a7b"),Object(d["a"])(At,xt,Ot,!1,null,null,null)),Nt=St.exports,qt=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i["c"](e,t),e.prototype.created=function(){},e.prototype.mounted=function(){},i["b"]([Object(s["b"])()],e.prototype,"comments",void 0),e=i["b"]([Object(s["a"])({components:{CommentComponent:Nt}})],e),e}(s["c"]),It=qt,Lt=It,zt=Object(d["a"])(Lt,kt,jt,!1,null,null,null),Gt=zt.exports,Bt=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i["c"](e,t),Object.defineProperty(e.prototype,"comments",{get:function(){return this.photo.comments},enumerable:!0,configurable:!0}),e.prototype.toggleComments=function(){this.$router.back()},e.prototype.created=function(){var t=this.$route.params.photoId;this.photo=this.$store.getters["photos/byId"](t)},e=i["b"]([Object(s["a"])({components:{Polaroid:F,Comments:Gt}})],e),e}(s["c"]),Ft=Bt,Mt=Ft,Ht=(n("ddff"),Object(d["a"])(Mt,Ct,Tt,!1,null,null,null)),Jt=Ht.exports,Ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"admin-view"},[n("div",{staticClass:"columns"},[n("div",{staticClass:"column"},[n("AddAlbumView")],1),n("div",{staticClass:"column"}),n("div",{staticClass:"column"})])])},Vt=[],Qt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"add-album-view"},[n("h1",[t._v("Añadir album")]),n("form",[n("label",{staticClass:"label",attrs:{for:"albumTitle"}},[t._v("Titulo del abum:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.albumTitle,expression:"albumTitle"}],staticClass:"input",attrs:{type:"text",name:"albumTitle",id:"albumTitle"},domProps:{value:t.albumTitle},on:{input:function(e){e.target.composing||(t.albumTitle=e.target.value)}}}),n("label",{staticClass:"label",attrs:{for:"albumDescription"}},[t._v("Descripción:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.albumDescription,expression:"albumDescription"}],staticClass:"input",attrs:{type:"text",name:"albumDescription",id:"albumDescription"},domProps:{value:t.albumDescription},on:{input:function(e){e.target.composing||(t.albumDescription=e.target.value)}}}),n("div",{staticClass:"file is-boxed is-fullwidth"},[n("label",{staticClass:"file-label"},[n("input",{staticClass:"file-input",attrs:{type:"file",name:"files",id:"files",multiple:""},on:{change:function(e){return t.fileChange(e.target.files)}}}),t._m(0)])]),n("button",{staticClass:"button is-info is-fullwidth",attrs:{type:"button"},on:{click:function(e){return t.startUpload()}}},[t._v("Crear")]),n("button",{staticClass:"button is-danger is-fullwidth",attrs:{type:"reset"}},[t._v("Cancelar")])])])},Yt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"file-cta"},[n("span",{staticClass:"file-icon"},[n("i",{staticClass:"fas fa-upload"})]),n("span",{staticClass:"file-label"},[t._v("Elige las fotos…")])])}],Kt=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.files=new FormData,e.albumTitle="",e.albumDescription="",e}return i["c"](e,t),e.prototype.created=function(){this.files=new FormData,this.albumTitle="",this.albumDescription=""},e.prototype.fileChange=function(t){for(var e=0;e<t.length;e++)this.files.append("file",t[e],t[e].name)},e.prototype.startUpload=function(){var t=this;this.files.append("albumTitle",this.albumTitle),this.files.append("albumDescription",this.albumDescription),fetch("api/albums/add",{method:"POST",body:this.files}).then(function(t){return t.json()}).then(function(e){t.files=new FormData,t.albumTitle="",t.albumDescription="",console.log(e)}).catch(function(t){console.log(t)})},e=i["b"]([s["a"]],e),e}(s["c"]),Rt=Kt,Wt=Rt,Xt=(n("dfe1"),Object(d["a"])(Wt,Qt,Yt,!1,null,"82d8b2de",null)),Zt=Xt.exports,te=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i["c"](e,t),e=i["b"]([Object(s["a"])({components:{AddAlbumView:Zt}})],e),e}(s["c"]),ee=te,ne=ee,oe=(n("6d47"),Object(d["a"])(ne,Ut,Vt,!1,null,"3d0c51fc",null)),ae=oe.exports;o["a"].use(_["a"]);var re={path:"/home",name:"home",component:nt},ie={path:"/about",name:"about",component:ct},se={path:"/gallery",name:"gallery",component:bt},le={path:"/album/:albumId",name:"album",props:!0,component:Pt},ce={path:"/photo/:photoId",name:"photo",props:!0,component:Jt},ue={path:"/admin",name:"admin",component:ae},me={path:"*",redirect:"/home"},pe=[re,ie,se,le,ce,ue,me],de={mode:"hash",base:"/",routes:pe},he=new _["a"](de),fe=n("2f62"),be=function(){function t(){}return t.mockPhotos=function(){return[{id:"0",fileName:"Photo 00",title:"Photo 00",extension:"png",creationDate:new Date,height:400,width:400,album:null,price:"9.99",tags:t.mockTags(),comments:t.mockComments(),url:"https://via.placeholder.com/400x400"},{id:"1",fileName:"Photo 01",title:"Photo 01",extension:"png",creationDate:new Date,height:400,width:400,album:null,price:"9.99",tags:t.mockTags(),comments:t.mockComments(),url:"https://via.placeholder.com/400x400"},{id:"2",fileName:"Photo 02",title:"Photo 02",extension:"png",creationDate:new Date,height:400,width:400,album:null,price:"9.99",tags:t.mockTags(),comments:t.mockComments(),url:"https://via.placeholder.com/400x400"},{id:"3",fileName:"Photo 03",title:"Photo 03",extension:"png",creationDate:new Date,height:400,width:400,album:null,price:"9.99",tags:t.mockTags(),comments:t.mockComments(),url:"https://via.placeholder.com/400x400"},{id:"4",fileName:"Photo 04",title:"Photo 04",extension:"png",creationDate:new Date,height:400,width:400,album:null,price:"9.99",tags:t.mockTags(),comments:t.mockComments(),url:"https://via.placeholder.com/400x400"},{id:"5",fileName:"Photo 05",title:"Photo 05",extension:"png",creationDate:new Date,height:400,width:400,album:null,price:"9.99",tags:t.mockTags(),comments:t.mockComments(),url:"https://via.placeholder.com/400x400"},{id:"6",fileName:"Photo 06",title:"Photo 06",extension:"png",creationDate:new Date,height:400,width:400,album:null,price:"9.99",tags:t.mockTags(),comments:t.mockComments(),url:"https://via.placeholder.com/400x400"},{id:"7",fileName:"Photo 07",title:"Photo 07",extension:"png",creationDate:new Date,height:400,width:400,album:null,price:"9.99",tags:t.mockTags(),comments:t.mockComments(),url:"https://via.placeholder.com/400x400"},{id:"8",fileName:"Photo 08",title:"Photo 08",extension:"png",creationDate:new Date,height:400,width:400,album:null,price:"9.99",tags:t.mockTags(),comments:t.mockComments(),url:"https://via.placeholder.com/400x400"},{id:"9",fileName:"Photo 09",title:"Photo 09",extension:"png",creationDate:new Date,height:400,width:400,album:null,price:"9.99",tags:t.mockTags(),comments:t.mockComments(),url:"https://via.placeholder.com/400x400"}]},t.mockalbums=function(){return[{id:"0",description:"",creationDate:new Date,title:"album 00",photos:t.mockPhotos(),cover:t.mockPhotos()[0],category:{name:"Test category"}},{id:"1",description:"",creationDate:new Date,title:"album 01",photos:t.mockPhotos(),cover:t.mockPhotos()[1],category:{name:"Test category"}},{id:"2",description:"",creationDate:new Date,title:"album 02",photos:t.mockPhotos(),cover:t.mockPhotos()[2],category:{name:"Test category"}},{id:"3",description:"",creationDate:new Date,title:"album 03",photos:t.mockPhotos(),cover:t.mockPhotos()[3],category:{name:"Test category"}},{id:"4",description:"",creationDate:new Date,title:"album 04",photos:t.mockPhotos(),cover:t.mockPhotos()[4],category:{name:"Test category"}},{id:"5",description:"",creationDate:new Date,title:"album 05",photos:t.mockPhotos(),cover:t.mockPhotos()[5],category:{name:"Test category"}},{id:"6",description:"",creationDate:new Date,title:"album 06",photos:t.mockPhotos(),cover:t.mockPhotos()[6],category:{name:"Test category"}},{id:"7",description:"",creationDate:new Date,title:"album 07",photos:t.mockPhotos(),cover:t.mockPhotos()[7],category:{name:"Test category"}},{id:"8",description:"",creationDate:new Date,title:"album 08",photos:t.mockPhotos(),cover:t.mockPhotos()[8],category:{name:"Test category"}},{id:"9",description:"",creationDate:new Date,title:"album 09",photos:t.mockPhotos(),cover:t.mockPhotos()[9],category:{name:"Test category"}}]},t.mockTags=function(){return[{id:"0",name:"Tag 00",creationDate:new Date},{id:"1",name:"Tag 01",creationDate:new Date},{id:"2",name:"Tag 02",creationDate:new Date},{id:"3",name:"Tag 03",creationDate:new Date},{id:"4",name:"Tag 04",creationDate:new Date},{id:"5",name:"Tag 05",creationDate:new Date},{id:"6",name:"Tag 06",creationDate:new Date},{id:"7",name:"Tag 07",creationDate:new Date},{id:"8",name:"Tag 08",creationDate:new Date},{id:"9",name:"Tag 09",creationDate:new Date}]},t.mockComments=function(){return[{id:"00",author:"Anónimo",text:"Bonita foto!",creationDate:(new Date).toLocaleDateString("es-ES")},{id:"01",author:"Anónimo",text:"¡Que buen recuerdo!",creationDate:(new Date).toLocaleDateString("es-ES")},{id:"02",author:"Anónimo",text:"Esto es para el TFG?",creationDate:(new Date).toLocaleDateString("es-ES")},{id:"03",author:"Anónimo",text:"k xulaaa <3",creationDate:(new Date).toLocaleDateString("es-ES")},{id:"04",author:"Anónimo",text:"🤷🏻‍♂️",creationDate:(new Date).toLocaleDateString("es-ES")}]},t}(),ge=be,ve=function(){function t(){this._url="api/"}return t.prototype.getAlbums=function(){return i["a"](this,void 0,Promise,function(){var t,e;return i["d"](this,function(n){switch(n.label){case 0:return[4,fetch(this._url+"albums")];case 1:return t=n.sent(),[4,t.json()];case 2:return e=n.sent(),[2,e]}})})},t.prototype.getAlbum=function(t){return i["a"](this,void 0,Promise,function(){var e,n;return i["d"](this,function(o){switch(o.label){case 0:return[4,fetch(this._url+"albums/"+t,{method:"GET"})];case 1:return e=o.sent(),[4,e.json()];case 2:return n=o.sent(),[2,n]}})})},t.prototype.getPhotos=function(){return i["a"](this,void 0,Promise,function(){var t,e;return i["d"](this,function(n){switch(n.label){case 0:return[4,fetch(this._url+"photos",{method:"GET"})];case 1:return t=n.sent(),[4,t.json()];case 2:return e=n.sent(),[2,e]}})})},t.prototype.getPhoto=function(t){return i["a"](this,void 0,Promise,function(){var e,n;return i["d"](this,function(o){switch(o.label){case 0:return[4,fetch(this._url+"photos/"+t,{method:"GET"})];case 1:return e=o.sent(),[4,e.json()];case 2:return n=o.sent(),[2,n]}})})},t.prototype.getTags=function(){return i["a"](this,void 0,Promise,function(){var t,e;return i["d"](this,function(n){switch(n.label){case 0:return[4,fetch(this._url+"tags",{method:"GET"})];case 1:return t=n.sent(),[4,t.json()];case 2:return e=n.sent(),[2,e]}})})},t.prototype.getTag=function(t){return i["a"](this,void 0,Promise,function(){var e,n;return i["d"](this,function(o){switch(o.label){case 0:return[4,fetch(this._url+"tags/"+t,{method:"GET"})];case 1:return e=o.sent(),[4,e.json()];case 2:return n=o.sent(),[2,n]}})})},t}(),ye=ve,we=function(){function t(){this._api=new ye}return t.prototype.getAlbums=function(){return i["a"](this,void 0,Promise,function(){var t,e,n;return i["d"](this,function(o){switch(o.label){case 0:return o.trys.push([0,2,,3]),[4,this._api.getAlbums()];case 1:return t=o.sent(),[3,3];case 2:return e=o.sent(),console.log(e),[3,3];case 3:return n=Object.assign([],t),[2,n]}})})},t.prototype.getAlbum=function(t){return i["a"](this,void 0,Promise,function(){var e,n,o;return i["d"](this,function(a){switch(a.label){case 0:return a.trys.push([0,2,,3]),[4,this._api.getAlbum(t)];case 1:return e=a.sent(),console.log(e),[3,3];case 2:return n=a.sent(),console.log(n),[3,3];case 3:return o=Object.assign({},e),[2,o]}})})},t}(),_e=we,De=!0,Pe={albums:[],loading:!0,loaded:!1,error:null},Ce={all:function(t){return t.albums},byId:function(t){return function(e){return t.albums.filter(function(t){return t.id===e})[0]}}},Te={loading:function(t,e){var n=e.payload;t.loading=n.flag,t.loaded=!n.flag},loaded:function(t,e){var n=e.payload;t.loading=t.loaded,t.albums=n.albums,t.loaded=!t.loaded},error:function(t,e){var n=e.payload;t.error=n.error}},ke={load:function(t){var e=t.commit;return i["a"](this,void 0,void 0,function(){var t,n,o,a;return i["d"](this,function(r){switch(r.label){case 0:e("loading",{payload:{flag:!0}}),e("error",{payload:{error:null}}),t=new _e,r.label=1;case 1:return r.trys.push([1,3,,4]),[4,t.getAlbums()];case 2:return n=r.sent(),o=[],n.forEach(function(t){t.photos.forEach(function(t){t.comments=ge.mockComments(),o.push(t)})}),e("photos/loaded",{payload:{photos:o}},{root:!0}),e("loaded",{payload:{albums:n}}),[3,4];case 3:return a=r.sent(),e("error",{payload:{error:a}}),[3,4];case 4:return[2]}})})}},je={namespaced:De,state:Pe,getters:Ce,mutations:Te,actions:ke},xe=function(){function t(){this._api=new ye}return t.prototype.getPhotos=function(){return i["a"](this,void 0,Promise,function(){var t,e,n;return i["d"](this,function(o){switch(o.label){case 0:return o.trys.push([0,2,,3]),[4,this._api.getPhotos()];case 1:return t=o.sent(),console.log(t),[3,3];case 2:return e=o.sent(),console.log(e),[3,3];case 3:return n=Object.assign([],t),[2,n]}})})},t.prototype.getPhoto=function(t){return i["a"](this,void 0,Promise,function(){var e,n,o;return i["d"](this,function(a){switch(a.label){case 0:return a.trys.push([0,2,,3]),[4,this._api.getPhoto(t)];case 1:return e=a.sent(),console.log(e),[3,3];case 2:return n=a.sent(),console.log(n),[3,3];case 3:return o=Object.assign({},e),[2,o]}})})},t}(),Oe=xe,Ee=!0,$e={photos:[],loading:!0,loaded:!1,error:null},Ae={photos:function(t){return t.photos},byId:function(t){return function(e){var n=t.photos.find(function(t){return t.id==e});return n}}},Se={loading:function(t,e){var n=e.payload;t.loading=n.flag,t.loaded=!n.flag},loaded:function(t,e){var n=e.payload;t.loading=t.loaded,t.photos=n.photos,t.loaded=!t.loaded},error:function(t,e){var n=e.payload;t.error=n.error}},Ne={load:function(t){var e=t.commit;return i["a"](this,void 0,void 0,function(){var t,n,o;return i["d"](this,function(a){switch(a.label){case 0:e("loading",{payload:{flag:!0}}),e("error",{payload:{error:null}}),t=new Oe,a.label=1;case 1:return a.trys.push([1,3,,4]),[4,t.getPhotos()];case 2:return n=a.sent(),e("loaded",{payload:{photos:n}}),[3,4];case 3:return o=a.sent(),e("error",{payload:{error:o}}),[3,4];case 4:return[2]}})})}},qe={namespaced:Ee,state:$e,getters:Ae,mutations:Se,actions:Ne},Ie=function(){function t(){this._api=new ye}return t.prototype.getTags=function(){return i["a"](this,void 0,Promise,function(){var t,e;return i["d"](this,function(n){switch(n.label){case 0:return[4,this._api.getTags()];case 1:return t=n.sent(),e=Object.assign([],t),[2,e]}})})},t.prototype.getTag=function(t){return i["a"](this,void 0,Promise,function(){var e,n;return i["d"](this,function(o){switch(o.label){case 0:return[4,this._api.getTag(t)];case 1:return e=o.sent(),n=Object.assign({},e),[2,n]}})})},t}(),Le=Ie,ze=!0,Ge={tags:[],loading:!0,loaded:!1,error:null},Be={tags:function(t){return t.tags}},Fe={loading:function(t,e){var n=e.payload;t.loading=n.flag,t.loaded=!n.flag},loaded:function(t,e){var n=e.payload;t.loading=t.loaded,t.tags=n.tags,t.loaded=!t.loaded},error:function(t,e){var n=e.payload;t.error=n.error}},Me={load:function(t){var e=t.commit;return i["a"](this,void 0,void 0,function(){var t,n,o;return i["d"](this,function(a){switch(a.label){case 0:e("loading",{payload:{flag:!0}}),e("error",{payload:{error:null}}),t=new Le,a.label=1;case 1:return a.trys.push([1,3,,4]),[4,t.getTags()];case 2:return n=a.sent(),e("loaded",{payload:{tags:n}}),[3,4];case 3:return o=a.sent(),e("error",{payload:{error:o}}),[3,4];case 4:return[2]}})})}},He={namespaced:ze,state:Ge,getters:Be,mutations:Fe,actions:Me};o["a"].use(fe["a"]);var Je={albums:je,photos:qe,tags:He},Ue={modules:Je},Ve=new fe["a"].Store(Ue);o["a"].config.productionTip=!1,new o["a"]({router:he,store:Ve,render:function(t){return t(w)}}).$mount("#app")},d1e2:function(t,e,n){"use strict";var o=n("8104"),a=n.n(o);a.a},d2c6:function(t,e,n){},dab4:function(t,e,n){},ddff:function(t,e,n){"use strict";var o=n("a07e"),a=n.n(o);a.a},dfe1:function(t,e,n){"use strict";var o=n("d2c6"),a=n.n(o);a.a},ee01:function(t,e,n){"use strict";var o=n("85ff"),a=n.n(o);a.a}});
//# sourceMappingURL=app.57be6058.js.map