(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{197:function(t,e,i){t.exports=i.p+"img/3e346fa.png"},198:function(t,e,i){t.exports=i.p+"img/cbc1670.png"},199:function(t,e,i){t.exports=i.p+"img/7d28adc.jpg"},200:function(t,e,i){t.exports=i.p+"img/9591899.png"},201:function(t,e,i){var o={"./bg.jpg":122,"./bg1.jpg":199,"./foto1.jpg":202,"./foto2.jpg":203,"./foto3.jpg":204,"./logo-news.svg":205,"./logo.png":200,"./logo1.png":121,"./logo3.svg":206,"./next.png":197,"./prev.png":198,"./prev.svg":207,"./slider-img.jpg":208};function r(t){var e=n(t);return i(e)}function n(t){var e=o[t];if(!(e+1)){var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}return e}r.keys=function(){return Object.keys(o)},r.resolve=n,t.exports=r,r.id=201},202:function(t,e,i){t.exports=i.p+"img/b77325a.jpg"},203:function(t,e,i){t.exports=i.p+"img/e5eb4b5.jpg"},204:function(t,e,i){t.exports=i.p+"img/a98b4db.jpg"},205:function(t,e,i){t.exports=i.p+"img/109174c.svg"},206:function(t,e,i){t.exports=i.p+"img/6769eff.svg"},207:function(t,e,i){t.exports=i.p+"img/e9c8372.svg"},208:function(t,e,i){t.exports=i.p+"img/9fac1d8.jpg"},214:function(t,e,i){var o=i(233);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,i(39).default)("041175a4",o,!0,{})},232:function(t,e,i){"use strict";var o=i(214);i.n(o).a},233:function(t,e,i){(t.exports=i(38)(!1)).push([t.i,".filters,.product-list{display:flex}.filters{justify-content:center;align-items:center;font-size:18px;font-weight:500;margin-bottom:30px}@media only screen and (max-width:767px){.filters{flex-direction:column}}.filters__item:not(:last-child){margin-right:20px}@media only screen and (max-width:767px){.filters__item:not(:last-child){margin:0 0 20px}}.filters__btn{text-transform:uppercase;padding:10px 20px;min-width:200px;color:#dd5145;border:2px solid;background-color:transparent}.filters__btn.is-active{color:#fff;border-color:#dd5145;background-color:#dd5145}.product-list{flex-wrap:wrap}.product-card{width:30%;margin-right:20px;transition:all .5s;text-align:center}@media only screen and (max-width:768px){.product-card{width:calc(50% - 20px);margin-bottom:20px}}@media only screen and (max-width:440px){.product-card{width:100%;margin:0 0 20px}}.product-card__link{display:block;padding:10px;background-color:#fff;transition:color .3s,box-shadow .3s}.product-card__link:focus,.product-card__link:hover{box-shadow:0 0 50px 0 rgba(0,0,0,.5);color:#dd5145}.product-card__name{margin:10px 0;font-weight:500;text-transform:uppercase;font-size:16px}",""])},247:function(t,e,i){"use strict";var o=i(5),r=i.n(o),n=i(16),c={name:"ProductGrid",props:{products:{type:Array,default:function(){return[]}},pathName:{type:String,default:"product"},page:{type:String,default:"shop"}},data:function(){return{filters:[],activeFilter:null}},computed:r()({},Object(n.c)(["getActiveCategory","getCategories"]),{activeProducts:function(){var t=this;return this.products.filter(function(e){return e.category===t.activeFilter})}}),created:function(){this.filters=this.getCategories,this.activeFilter=this.getActiveCategory(this.page)},methods:r()({},Object(n.b)(["selectCategory"]),{handleFilter:function(t){this.activeFilter=t,this.selectCategory({page:this.page,category:this.activeFilter})}})},s=(i(232),i(10)),a=Object(s.a)(c,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"products"},[o("ul",{staticClass:"filters"},t._l(t.filters,function(e){return o("li",{key:e,staticClass:"filters__item"},[o("button",{class:["filters__btn",{"is-active":t.activeFilter===e}],on:{click:function(i){t.handleFilter(e)}}},[t._v(t._s(e))])])}),0),t._v(" "),t.activeFilter?o("transition-group",{staticClass:"product-list",attrs:{name:"fade-right",mode:"out-in",tag:"ul"}},t._l(t.activeProducts,function(e,r){return o("li",{key:r+"-"+e.category+"-"+e.id,staticClass:"product-card"},[o("nuxt-link",{staticClass:"product-card__link",attrs:{to:t.localePath({name:t.pathName,params:{product:e.id+"-"+t.activeFilter}})+"/"}},[o("img",{staticClass:"product-card__img",attrs:{src:i(201)("./"+e.mainImage),alt:"product-img"}}),t._v(" "),o("h3",{staticClass:"product-card__name"},[t._v(t._s(e.description.title))])])],1)}),0):t._e()],1)},[],!1,null,null,null);a.options.__file="ProductGrid.vue";var l=a.exports;e.a=l},280:function(t,e,i){"use strict";i.r(e);var o=i(20),r=i.n(o),n=i(5),c=i.n(n),s=i(16),a={name:"Collection",layout:"aside",components:{ProductGrid:i(247).a},data:function(){return{collections:null,categories:null}},computed:c()({},Object(s.c)(["getCollections","getCategories"])),created:function(){this.getCollections;this.categories=r()(this.getCategories),this.collections=r()(this.getCollections)}},l=i(10),p=Object(l.a)(a,function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"section category"},[e("div",{staticClass:"container"},[e("h1",{staticClass:"main-title"},[this._v(this._s(this.$t("collection.title")))]),this._v(" "),e("ProductGrid",{attrs:{products:this.collections,pathName:"collection-product",page:"collection"}})],1)])},[],!1,null,null,null);p.options.__file="index.vue";e.default=p.exports}}]);