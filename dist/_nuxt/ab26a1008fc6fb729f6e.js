(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{144:function(t,e,r){"use strict";var n=r(145),o=r.n(n);e.a=o.a.create({baseURL:"http://localhost:4200"})},147:function(t,e,r){var content=r(175);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(47).default)("85477dc4",content,!0,{sourceMap:!1})},174:function(t,e,r){"use strict";var n=r(147);r.n(n).a},175:function(t,e,r){(t.exports=r(46)(!1)).push([t.i,".container{width:980px;margin:0}",""])},184:function(t,e,r){"use strict";r.r(e);r(45);var n=r(5),o=r(144),c={asyncData:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(){var e,data;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.get("/livres");case 2:return e=t.sent,data=e.data,t.abrupt("return",{livres:data});case 5:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),data:function(){return{title:"Mes livres",livres:[]}},methods:{deleteBook:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(e){var r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.delete("/livres/".concat(e),{id:e});case 2:return r=t.sent,t.abrupt("return",{res:r});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}},l=(r(174),r(17)),component=Object(l.a)(c,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("h2",[t._v(t._s(t.title))]),t._v(" "),r("ul",t._l(t.livres,function(e){return r("li",{key:e.id},[r("nuxt-link",{attrs:{to:{name:"livres-id",params:{id:e.id}}}},[t._v("\n            "+t._s(e.title)+"\n            ")]),t._v(" "),r("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(r){return t.deleteBook(e.id)}}},[t._v("Supprimer le livre")]),t._v(" "),r("nuxt-link",{attrs:{to:{name:"livres-id-edit",params:{id:e.id}}}},[r("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[t._v("Modifier le livre")])])],1)}),0)])},[],!1,null,null,null);e.default=component.exports}}]);