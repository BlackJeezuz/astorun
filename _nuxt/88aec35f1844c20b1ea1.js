(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{204:function(t,e,a){t.exports=a.p+"img/3e346fa.png"},205:function(t,e,a){t.exports=a.p+"img/cbc1670.png"},206:function(t,e,a){t.exports=a.p+"img/7d28adc.jpg"},207:function(t,e,a){t.exports=a.p+"img/9591899.png"},208:function(t,e,a){var n={"./bg.jpg":128,"./bg1.jpg":206,"./foto1.jpg":209,"./foto2.jpg":210,"./foto3.jpg":211,"./logo-news.svg":212,"./logo.png":207,"./logo1.png":127,"./logo3.svg":213,"./next.png":204,"./prev.png":205,"./prev.svg":214,"./slider-img.jpg":215};function i(t){var e=s(t);return a(e)}function s(t){var e=n[t];if(!(e+1)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return e}i.keys=function(){return Object.keys(n)},i.resolve=s,t.exports=i,i.id=208},209:function(t,e,a){t.exports=a.p+"img/b77325a.jpg"},210:function(t,e,a){t.exports=a.p+"img/e5eb4b5.jpg"},211:function(t,e,a){t.exports=a.p+"img/a98b4db.jpg"},212:function(t,e,a){t.exports=a.p+"img/109174c.svg"},213:function(t,e,a){t.exports=a.p+"img/6769eff.svg"},214:function(t,e,a){t.exports=a.p+"img/e9c8372.svg"},215:function(t,e,a){t.exports=a.p+"img/9fac1d8.jpg"},216:function(t,e,a){var n=a(225);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,a(33).default)("604e7efe",n,!0,{})},218:function(t,e,a){var n=a(236);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,a(33).default)("656e47e9",n,!0,{})},219:function(t,e,a){var n=a(238);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,a(33).default)("1f2cf024",n,!0,{})},220:function(t,e,a){var n=a(240);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,a(33).default)("2ea5a4fc",n,!0,{})},221:function(t,e,a){var n=a(242);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,a(33).default)("7b38b568",n,!0,{})},222:function(t,e,a){var n=a(244);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,a(33).default)("8d7e6fd4",n,!0,{})},224:function(t,e,a){"use strict";var n=a(216);a.n(n).a},225:function(t,e,a){(t.exports=a(32)(!1)).push([t.i,'.checkbox__input{display:none}.checkbox__input:checked+label:before{content:"\\2713   "}.checkbox__label{cursor:pointer}.checkbox__label:before{content:"";border:1px solid;background-color:#fff;display:inline-block;text-align:center}',""])},231:function(t,e,a){"use strict";var n={name:"Checkbox",model:{prop:"checked",event:"onClick"},props:{id:{type:String,default:"check-1"},checked:{type:Boolean,default:!1}}},i=(a(224),a(6)),s=Object(i.a)(n,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"checkbox"},[a("input",{staticClass:"checkbox__input",attrs:{type:"checkbox",id:t.id},domProps:{value:t.checked},on:{change:function(e){t.$emit("onClick",t.checked)}}}),t._v(" "),a("label",{staticClass:"checkbox__label",attrs:{for:t.id}},[t._t("default")],2)])},[],!1,null,null,null);s.options.__file="Checkbox.vue";var o=s.exports;e.a=o},233:function(t,e,a){var n=a(7),i=a(234)(!1);n(n.S,"Object",{values:function(t){return i(t)}})},234:function(t,e,a){var n=a(26),i=a(27),s=a(41).f;t.exports=function(t){return function(e){for(var a,o=i(e),r=n(o),l=r.length,c=0,d=[];l>c;)s.call(o,a=r[c++])&&d.push(t?[a,o[a]]:o[a]);return d}}},235:function(t,e,a){"use strict";var n=a(218);a.n(n).a},236:function(t,e,a){(t.exports=a(32)(!1)).push([t.i,".field{position:relative}.field:not(:last-child){margin-bottom:30px}.field__input{width:100%;padding:5px 20px 5px 30px;border:none;border-bottom:2px solid #ccc}.field__input.is-active+label,.field__input:focus+label{left:0;top:-5px;-webkit-transform:translateY(-100%);transform:translateY(-100%);font-size:12px}.field__input:focus{outline:none;border-bottom-color:#dd5145}.field__input:focus+label,.field__input:focus~.field__icon{color:#dd5145}.field__label{left:30px;pointer-events:none;transition:all .3s}.field__icon,.field__label{position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.field__icon{left:0;font-size:20px}.field__error{position:absolute;bottom:-5px;width:100%;-webkit-transform:translateY(100%);transform:translateY(100%);color:red;font-size:12px}.field.invalid{color:red}.field.invalid:not(:last-child){margin-bottom:40px}.field.invalid .field__input{border-color:red}.text-field{position:relative;border-top:10px solid transparent;margin-bottom:20px}.text-field__label{position:absolute;top:15px;left:20px;transition:all .3s;font-size:18px;pointer-events:none}.text-field__label.is-active{top:-25px;left:0;font-size:14px}.text-field__icon{margin-right:10px}.text-field__textarea{width:100%;min-height:200px;padding:15px 20px;resize:none;border-radius:10px}.text-field__textarea:focus{outline:none;border-color:#dd5145}.text-field__textarea:focus+label{top:-25px;left:0;font-size:14px;color:#dd5145}.text-field.invalid{color:red}.text-field.invalid:not(:last-child){margin-bottom:40px}.text-field.invalid .text-field__textarea{border-color:red}",""])},237:function(t,e,a){"use strict";var n=a(219);a.n(n).a},238:function(t,e,a){(t.exports=a(32)(!1)).push([t.i,".form .btn-group{display:flex;justify-content:center}.form__checkbox .checkbox__label:before{position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.form__title{font-size:20px;margin:0 0 30px;font-weight:500;text-align:center;text-transform:uppercase}.form__warning{padding:0 0 20px;color:red;font-size:12px}.form__checkbox{text-align:center}.form__checkbox .checkbox__input:checked+label{color:#00a86b}.form__checkbox .checkbox__label{position:relative;padding-left:30px}.form__checkbox .checkbox__label:before{left:0;width:15px;height:15px;line-height:15px;font-weight:700}.form .btn-group{margin-top:20px}.form .btn-group .btn-main{margin:0}.form .btn-group .btn-main:not(:last-child){margin-right:20px}.shake-anim{-webkit-animation:shake .3s;animation:shake .3s}@-webkit-keyframes shake{0%{-webkit-transform:translateX(0);transform:translateX(0)}25%{-webkit-transform:translateX(-10%);transform:translateX(-10%)}50%{-webkit-transform:translateX(10%);transform:translateX(10%)}75%{-webkit-transform:translateX(-10%);transform:translateX(-10%)}to{-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes shake{0%{-webkit-transform:translateX(0);transform:translateX(0)}25%{-webkit-transform:translateX(-10%);transform:translateX(-10%)}50%{-webkit-transform:translateX(10%);transform:translateX(10%)}75%{-webkit-transform:translateX(-10%);transform:translateX(-10%)}to{-webkit-transform:translateX(0);transform:translateX(0)}}",""])},239:function(t,e,a){"use strict";var n=a(220);a.n(n).a},240:function(t,e,a){(t.exports=a(32)(!1)).push([t.i,'.overlay{position:fixed;top:0;right:0;left:0;bottom:0;background-color:rgba(0,0,0,.5);transition:opacity .3s;z-index:10}.modal{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);max-width:300px;width:90%;min-height:100px;background-color:#fff;border-radius:15px;transition:all .3s;z-index:11}.modal__header{margin:0;padding:10px 20px;background-color:#dd5145;color:#fff;text-align:center;border-radius:15px 15px 0 0}.modal__content{padding:20px}.modal__buttons{text-align:center}.modal__buttons button:not(:last-child){margin-right:20px}.modal__close{position:absolute;top:11px;right:10px;width:20px;height:20px;cursor:pointer;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}.modal__close:after,.modal__close:before{content:"";position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:3px;height:100%;background-color:#fafafa;border-radius:2px;transition:all .3s}.modal__close:before{-webkit-transform:translate(-50%,-50%) rotate(45deg);transform:translate(-50%,-50%) rotate(45deg)}.modal__close:after{-webkit-transform:translate(-50%,-50%) rotate(-45deg);transform:translate(-50%,-50%) rotate(-45deg)}.modal__close:hover:after,.modal__close:hover:before{background-color:#fff;box-shadow:0 0 2px #fff}.modal-enter,.modal-leave-active{opacity:0}.modal-enter .modal,.modal-leave-active .modal{-webkit-transform:translate(-50%,-50%) scale(1.1);transform:translate(-50%,-50%) scale(1.1)}',""])},241:function(t,e,a){"use strict";var n=a(221);a.n(n).a},242:function(t,e,a){(t.exports=a(32)(!1)).push([t.i,".modal-confirm__btn{padding:5px 20px;font-weight:500;font-size:20px;background-color:transparent;border:1px solid;transition:all .2s}.modal-confirm__btn span{margin-left:10px}.modal-confirm__btn--success{color:#00a86b}.modal-confirm__btn--success:focus,.modal-confirm__btn--success:hover{color:#fff;background-color:#00a86b;border-color:#00a86b}.modal-confirm__btn--cancel{color:#dd5145}.modal-confirm__btn--cancel:focus,.modal-confirm__btn--cancel:hover{color:#fff;background-color:#dd5145;border-color:#dd5145}",""])},243:function(t,e,a){"use strict";var n=a(222);a.n(n).a},244:function(t,e,a){(t.exports=a(32)(!1)).push([t.i,".social-list{display:flex;justify-content:center;margin:35px 0 20px}.social-list__item:not(:last-child){margin-right:40px}.social-list__link{display:inline-block;color:#535353;font-size:25px;transition:color .3s,-webkit-transform .2s;transition:color .3s,transform .2s;transition:color .3s,transform .2s,-webkit-transform .2s}.social-list__link:hover{color:#dd5145;-webkit-transform:scale(1.3);transform:scale(1.3)}",""])},245:function(t,e,a){var n=a(267);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,a(33).default)("22657d9e",n,!0,{})},262:function(t,e,a){"use strict";a(13),a(60),a(61),a(15),a(233),a(17);var n={name:"Field",model:{prop:"value",event:"change"},props:{type:{type:String,default:"text"},id:{type:String,default:"inp"},value:{type:String,default:""},icon:{type:String,default:""},rule:{type:String,default:""},name:{type:String,default:"text"}},data:function(){return{errorMsg:""}},mounted:function(){this.$validator.localize(this.$store.state.i18n.locale)},methods:{handleBlur:function(t){var e=this;this.$validator.validate().then(function(t){if(e.errorMsg="",!t){var a=e.errors.items.find(function(t){return t.field===e.name});e.errorMsg=a.msg}}),this.$emit("blur",this.name,this.fields[this.name].valid)}}},i=(a(235),a(6)),s=Object(i.a)(n,function(){var t=this,e=t.$createElement,a=t._self._c||e;return"textarea"===t.type?a("div",{class:["text-field",{invalid:!!t.errorMsg}]},[a("textarea",{directives:[{name:"validate",rawName:"v-validate",value:t.rule,expression:"rule"}],staticClass:"text-field__textarea",attrs:{id:t.type,name:t.name},on:{change:function(e){t.$emit("change",e.target.value)},blur:t.handleBlur}}),t._v(" "),a("label",{class:["text-field__label",{"is-active":!!t.value}],attrs:{for:t.id}},[t.icon?a("span",{class:["text-field__icon",t.icon]}):t._e(),t._v(" "),t._t("default")],2),t._v(" "),t.errorMsg?a("div",{staticClass:"field__error"},[t._v("* "+t._s(t.errorMsg))]):t._e()]):a("div",{class:["field",{invalid:!!t.errorMsg}]},[a("input",{directives:[{name:"validate",rawName:"v-validate",value:t.rule,expression:"rule"}],class:["field__input",{"is-active":!!t.value}],attrs:{id:t.id,type:t.type,name:t.name},on:{change:function(e){t.$emit("change",e.target.value)},blur:t.handleBlur}}),t._v(" "),a("label",{staticClass:"field__label",attrs:{for:t.id}},[t._t("default")],2),t._v(" "),t.icon?a("span",{class:["field__icon",t.icon]}):t._e(),t._v(" "),t.errorMsg?a("div",{staticClass:"field__error"},[t._v("* "+t._s(t.errorMsg))]):t._e()])},[],!1,null,null,null);s.options.__file="Field.vue";var o={name:"MainForm",components:{Field:s.exports,Checkbox:a(231).a},props:{reqFields:{type:Array,default:function(){return["name","email","phone"]}},buttons:{type:Array,default:function(){return[]}},title:{type:String,default:null},checkbox:{type:Boolean,default:!1}},data:function(){return{formFields:{name:{rule:"required",placeholder:this.$t("placeholders.name"),name:"name",type:"text",icon:"far fa-user",value:"",isValid:!1},email:{rule:"required|email",placeholder:this.$t("placeholders.mail"),name:"email",type:"email",icon:"far fa-envelope",value:"",isValid:!1},phone:{rule:"required|numeric",placeholder:this.$t("placeholders.phone"),name:"phone",type:"tel",value:"",icon:"fas fa-mobile-alt",isValid:!1},message:{rule:"required",placeholder:this.$t("placeholders.message"),name:"message",type:"textarea",value:"",icon:"far fa-comments",isValid:!1}},agree:!1}},computed:{fieldsArray:function(){var t=this;return Object.values(this.formFields).filter(function(e){return t.reqFields.includes(e.name)})}},methods:{submitHandle:function(){var t=this;if(this.fieldsArray.some(function(t){return!t.isValid})||!this.agree)return this.$refs.submitBtn.classList.add("shake-anim"),void(this.$refs.submitBtn.classList.contains("shake-anim")&&setTimeout(function(){return t.$refs.submitBtn.classList.remove("shake-anim")},1e3));this.$emit("submit",this.formFields)},handleValidation:function(t,e){this.formFields[t].isValid=e}}},r=(a(237),Object(i.a)(o,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{staticClass:"form",on:{submit:function(e){return e.preventDefault(),t.submitHandle(e)}}},[t.title?a("h3",{staticClass:"form__title"},[t._v(t._s(t.title))]):t._e(),t._v(" "),t._l(t.fieldsArray,function(e){return a("field",{key:e.name,attrs:{name:e.name,type:e.type,rule:e.rule,icon:e.icon},on:{blur:t.handleValidation},model:{value:e.value,callback:function(a){t.$set(e,"value",a)},expression:"field.value"}},[t._v(t._s(e.placeholder))])}),t._v(" "),t.checkbox?a("Checkbox",{staticClass:"form__checkbox",model:{value:t.agree,callback:function(e){t.agree=e},expression:"agree"}},[t._v(t._s(t.$t("form.iagree"))+" "),a("a",{staticClass:"link",attrs:{href:"#"}},[t._v(t._s(t.$t("form.agreement")))])]):t._e(),t._v(" "),a("div",{staticClass:"btn-group"},[t._l(t.buttons,function(e){return a("button",{key:e.text,staticClass:"btn-main btn-main--danger",on:{click:e.handler}},[t._v(t._s(e.text))])}),t._v(" "),a("button",{ref:"submitBtn",staticClass:"btn-main btn-main--danger",attrs:{type:"submit"}},[t._v(t._s(t.$t("buttons.submit")))])],2)],2)},[],!1,null,null,null));r.options.__file="MainForm.vue";var l=r.exports;e.a=l},263:function(t,e,a){"use strict";var n=a(5),i=a.n(n),s=a(16),o={name:"Modal",props:{isOpened:{type:Boolean,default:!1},id:{type:String,default:"modal"},closeBtn:{type:Boolean,default:!1}},methods:{close:function(){this.$emit("close",this.id)}}},r=(a(239),a(6)),l=Object(r.a)(o,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"modal"}},[t.isOpened?a("div",{staticClass:"overlay",on:{click:function(e){return e.target!==e.currentTarget?null:t.close(e)}}},[a("div",{staticClass:"modal"},[t._t("default"),t._v(" "),t.closeBtn?a("button",{staticClass:"btn-default modal__close",attrs:{title:t.$t("buttons.close")},on:{click:t.close}}):t._e()],2)]):t._e()])},[],!1,null,null,null);l.options.__file="Modal.vue";var c={name:"ModalConfirm",components:{Modal:l.exports},props:{removeId:{type:String,default:null},confirmText:{type:String,default:"Убрать из корзины ?"}},methods:i()({},Object(s.b)(["removeProduct"]),{handleRemove:function(){this.removeProduct(this.removeId),this.$emit("close")}})},d=(a(241),Object(r.a)(c,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Modal",{staticClass:"modal-confirm",attrs:{isOpened:!!t.removeId},on:{close:function(e){t.$emit("close")}}},[a("h3",{staticClass:"modal__header"},[t._v(t._s(t.confirmText))]),t._v(" "),a("div",{staticClass:"modal__buttons modal__content"},[a("button",{staticClass:"modal-confirm__btn modal-confirm__btn--success",on:{click:t.handleRemove}},[t._v("\n      Да "),a("span",{staticClass:"fas fa-check"})]),t._v(" "),a("button",{staticClass:"modal-confirm__btn modal-confirm__btn--cancel",on:{click:function(e){t.$emit("close")}}},[t._v("\n      Нет "),a("span",{staticClass:"fas fa-times"})])])])},[],!1,null,null,null));d.options.__file="ModalConfirm.vue";var f=d.exports;e.a=f},265:function(t,e,a){"use strict";a(243);var n=a(6),i=Object(n.a)({},function(t,e){e._c;return e._m(0)},[function(t,e){var a=e._c;return a("ul",{staticClass:"social-list"},[a("li",{staticClass:"social-list__item"},[a("a",{staticClass:"social-list__link",attrs:{target:"_blank",href:"facebook.com/astorun"}},[a("span",{staticClass:"fab fa-facebook-square"})])]),e._v(" "),a("li",{staticClass:"social-list__item"},[a("a",{staticClass:"social-list__link",attrs:{target:"_blank",href:"instagram.com/astorun"}},[a("span",{staticClass:"fab fa-instagram"})])]),e._v(" "),a("li",{staticClass:"social-list__item"},[a("a",{staticClass:"social-list__link",attrs:{target:"_blank",href:"youtube.com/astorun"}},[a("span",{staticClass:"fab fa-youtube"})])])])}],!0,null,null,null);i.options.__file="SocialList.vue";var s=i.exports;e.a=s},266:function(t,e,a){"use strict";var n=a(245);a.n(n).a},267:function(t,e,a){(t.exports=a(32)(!1)).push([t.i,'.bascet-details,.bascet-fallback__buttons,.bascet-quantity,.bascet__container{display:flex}.bascet__container{align-items:flex-start}.bascet-quantity{align-items:center}.bascet-fallback__buttons{justify-content:center}.bascet__remove:after,.bascet__remove:before{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.bascet__container{position:relative}@media only screen and (max-width:520px){.bascet__container{flex-wrap:wrap;padding:0}}.bascet__item{padding:20px;border-bottom:1px solid #000}@media only screen and (max-width:767px){.bascet__item{padding:20px 0}}.bascet__item:first-child{border-top:1px solid #000}.bascet__img{max-width:200px}@media only screen and (max-width:520px){.bascet__img{margin:0 auto 20px}}.bascet__remove{position:absolute;top:0;right:0;display:block;width:30px;height:30px}.bascet__remove:after,.bascet__remove:before{content:"";width:3px;height:100%;background-color:#dd5145;border-radius:2px;transition:all .3s}.bascet__remove:before{-webkit-transform:translate(-50%,-50%) rotate(45deg);transform:translate(-50%,-50%) rotate(45deg)}.bascet__remove:after{-webkit-transform:translate(-50%,-50%) rotate(-45deg);transform:translate(-50%,-50%) rotate(-45deg)}.bascet__list{margin-bottom:30px}.bascet-details{flex-direction:column;align-self:stretch;font-size:18px;margin-left:40px}@media only screen and (max-width:520px){.bascet-details{margin-left:0;align-items:center;width:100%}}.bascet-details__title{margin:0 0 20px;font-size:18px;font-weight:500;color:#dd5145}.bascet-details__field:not(:last-child){margin-bottom:10px}@media only screen and (max-width:767px){.bascet-details__field:not(:last-child){margin-bottom:20px}}.bascet-details__caption{font-weight:700;color:#dd5145}.bascet-quantity__label{width:100%;margin-right:10px;text-align:center;cursor:pointer}.bascet-quantity__btn{background-color:#dd5145;color:#fff;border-color:#dd5145;padding:0 7px;font-size:15px}.bascet-quantity__input{margin:0 10px;padding:0;height:25px;line-height:18px;max-width:40px;overflow:hidden;text-overflow:ellipsis;flex-shrink:0}.bascet-quantity__input,.bascet-total{text-align:center;font-weight:700;color:#dd5145}.bascet-total{font-size:24px;font-style:italic}.bascet-fallback{text-align:center}.bascet-fallback__title{margin:0 0 40px;font-weight:500;font-size:20px}.bascet-fallback__buttons a{margin:0}.bascet-fallback__buttons a:not(:last-child){margin-right:20px}',""])},300:function(t,e,a){"use strict";a.r(e);var n=a(5),i=a.n(n),s=a(262),o=a(16),r=a(263),l=a(265),c={name:"Bascet",layout:"aside",components:{MainForm:s.a,ModalConfirm:r.a,SocialList:l.a},data:function(){return{bascet:[],removeId:null}},computed:i()({},Object(o.c)(["getBascet"]),{totalSum:function(){return this.bascet.reduce(function(t,e){return t+e.quantity*e.price},0)}}),created:function(){if(this.bascet=this.getBascet,!this.bascet)return this.$router.push("shop")},methods:{submitHandler:function(t){this.$router.push(this.localePath({name:"thanks"}))},handleQuantity:function(t,e){if(e)++t.quantity;else{if(1===t.quantity)return;--t.quantity}},handleChange:function(t,e){var a=t.target.value;+a||(t.target.value=e.quantity),e.quantity=a}}},d=(a(266),a(6)),f=Object(d.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section"},[n("div",{staticClass:"container"},[n("h1",{staticClass:"main-title"},[t._v(t._s(t.$t("bascet.title")))]),t._v(" "),t.bascet.length?[n("div",{staticClass:"bascet"},[n("ul",{staticClass:"bascet__list"},t._l(t.bascet,function(e){return n("li",{key:e.id,staticClass:"bascet__item"},[n("div",{staticClass:"bascet__container"},[n("img",{staticClass:"bascet__img",attrs:{src:a(208)("./"+e.mainImage),alt:"product image"}}),t._v(" "),n("div",{staticClass:"bascet-details"},[n("h2",{staticClass:"bascet-details__title"},[t._v(t._s(e.description.title))]),t._v(" "),n("div",{staticClass:"bascet-details__field"},[t._v("\n                  "+t._s(t.$t("bascet.size"))+":\n                  "),n("span",{staticClass:"bascet-details__caption"},[t._v(t._s(e.activeSize))])]),t._v(" "),n("div",{staticClass:"bascet-details__field"},[t._v("\n                  "+t._s(t.$t("bascet.price"))+":\n                  "),n("span",{staticClass:"bascet-details__caption"},[t._v(t._s(e.price*e.quantity)+"$")])]),t._v(" "),n("div",{staticClass:"bascet-details__field bascet-quantity"},[n("label",{staticClass:"bascet-quantity__label",attrs:{for:e.id}},[t._v(t._s(t.$t("bascet.quant"))+":")]),t._v(" "),n("button",{staticClass:"bascet-quantity__btn",on:{click:function(a){t.handleQuantity(e)}}},[n("span",{staticClass:"fas fa-chevron-left"})]),t._v(" "),n("input",{staticClass:"bascet-quantity__input",attrs:{type:"tel",id:e.id},domProps:{value:e.quantity},on:{change:function(a){t.handleChange(a,e)}}}),t._v(" "),n("button",{staticClass:"bascet-quantity__btn",on:{click:function(a){t.handleQuantity(e,!0)}}},[n("span",{staticClass:"fas fa-chevron-right"})])])]),t._v(" "),n("button",{staticClass:"btn-default bascet__remove",attrs:{title:"remove from bascet"},on:{click:function(a){t.removeId=e.id}}})])])}),0),t._v(" "),n("div",{staticClass:"bascet-total"},[n("span",{staticClass:"bascet-total__caption"},[t._v(t._s(t.$t("bascet.total"))+":")]),t._v(" "),n("span",{staticClass:"bascet-total__sum"},[t._v(t._s(t.totalSum)+"$")])])]),t._v(" "),n("MainForm",{attrs:{checkbox:!0,title:t.$t("bascet.livecontacts")},on:{submit:t.submitHandler}})]:n("div",{staticClass:"bascet-fallback"},[n("h2",{staticClass:"bascet-fallback__title"},[t._v(t._s(t.$t("bascet.placeholder")))]),t._v(" "),n("div",{staticClass:"bascet-fallback__buttons"},[n("nuxt-link",{staticClass:"btn-main btn-main--danger",attrs:{to:t.localePath("shop")+"/"}},[t._v("\n          "+t._s(t.$t("bascet.toshop"))+"\n          "),n("span",{staticClass:"fas fa-chevron-right"})]),t._v(" "),n("nuxt-link",{staticClass:"btn-main btn-main--danger",attrs:{to:t.localePath("collection")+"/"}},[t._v("\n          "+t._s(t.$t("bascet.tocellection"))+"\n          "),n("span",{staticClass:"fas fa-chevron-right"})])],1)])],2),t._v(" "),n("SocialList"),t._v(" "),n("ModalConfirm",{attrs:{removeId:t.removeId},on:{close:function(e){t.removeId=null}}})],1)},[],!1,null,null,null);f.options.__file="index.vue";e.default=f.exports}}]);