(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/member/balance/add_bankcard"],{"2a92":function(e,t,a){"use strict";a.r(t);var i=a("67c3"),s=a("af7a");for(var c in s)"default"!==c&&function(e){a.d(t,e,function(){return s[e]})}(c);a("6e01");var n=a("2877"),r=Object(n["a"])(s["default"],i["a"],i["b"],!1,null,null,null);t["default"]=r.exports},"37b0":function(e,t,a){"use strict";a("ab7f");var i=c(a("b0ce")),s=c(a("2a92"));function c(e){return e&&e.__esModule?e:{default:e}}Page((0,i.default)(s.default))},"67c3":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("view",{staticClass:"content"},[a("view",{staticClass:"content-top"},[a("view",{staticClass:"cell-group"},[a("view",{staticClass:"cell-item"},[e._m(0),a("view",{staticClass:"cell-item-bd"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.cardNumber,expression:"cardNumber"}],staticClass:"cell-bd-input",attrs:{type:"number",focus:"",placeholder:"请输入银行卡号",eventid:"785c311d-0"},domProps:{value:e.cardNumber},on:{blur:function(t){e.checkCard()},input:function(t){t.target.composing||(e.cardNumber=t.target.value)}}})])]),a("view",{staticClass:"cell-item"},[e._m(1),a("view",{staticClass:"cell-item-bd"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"cell-bd-input",attrs:{type:"text",placeholder:"请输入持卡人姓名",eventid:"785c311d-1"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})])]),a("view",{staticClass:"cell-item"},[e._m(2),a("view",{staticClass:"cell-item-bd"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.bankName,expression:"bankName"}],staticClass:"cell-bd-input",attrs:{type:"text",disabled:!0,eventid:"785c311d-2"},domProps:{value:e.bankName},on:{input:function(t){t.target.composing||(e.bankName=t.target.value)}}})])]),a("view",{staticClass:"cell-item"},[e._m(3),a("view",{staticClass:"cell-item-bd"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.cardTypeName,expression:"cardTypeName"}],staticClass:"cell-bd-input",attrs:{type:"text",disabled:!0,eventid:"785c311d-3"},domProps:{value:e.cardTypeName},on:{input:function(t){t.target.composing||(e.cardTypeName=t.target.value)}}})])]),a("view",{staticClass:"cell-item"},[e._m(4),a("view",{staticClass:"cell-item-bd"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.accountBank,expression:"accountBank"}],staticClass:"cell-bd-input",attrs:{type:"text",placeholder:"请输入开户银行名",eventid:"785c311d-4"},domProps:{value:e.accountBank},on:{input:function(t){t.target.composing||(e.accountBank=t.target.value)}}})])]),a("view",{staticClass:"cell-item"},[e._m(5),a("view",{staticClass:"cell-item-bd"},[a("input",{attrs:{value:e.pickerValue,eventid:"785c311d-5"},on:{focus:e.showThreePicker}}),a("area-picker",{ref:"areaPicker",attrs:{areaId:e.areaId,defaultIndex:e.defaultIndex,eventid:"785c311d-6",mpcomid:"785c311d-0"},on:{onConfirm:e.onConfirm}})],1),a("view",{staticClass:"cell-item-ft"},[a("image",{staticClass:"cell-ft-next icon",attrs:{src:"../../../static/image/ic-pull-down.png",eventid:"785c311d-7"},on:{click:e.showThreePicker}})])]),a("view",{staticClass:"cell-item"},[e._m(6),a("view",{attrs:{eventid:"785c311d-8"},on:{click:e.defaultChange}},[a("view",{staticClass:"cell-item-ft"},[a("label",{staticClass:"radio"},[a("radio",{attrs:{value:"1",checked:e.checked,color:"#333"}})],1)],1)])])])]),a("view",{staticClass:"button-bottom"},[a("button",{staticClass:"btn btn-square btn-b",attrs:{"hover-class":"btn-hover2",disabled:e.submitStatus,loading:e.submitStatus,eventid:"785c311d-9"},on:{click:e.addCard}},[e._v("保存")])],1)])},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("view",{staticClass:"cell-item-hd"},[a("view",{staticClass:"cell-hd-title"},[e._v("银行卡号")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("view",{staticClass:"cell-item-hd"},[a("view",{staticClass:"cell-hd-title"},[e._v("持卡人")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("view",{staticClass:"cell-item-hd"},[a("view",{staticClass:"cell-hd-title"},[e._v("银行名称")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("view",{staticClass:"cell-item-hd"},[a("view",{staticClass:"cell-hd-title"},[e._v("银行卡类型")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("view",{staticClass:"cell-item-hd"},[a("view",{staticClass:"cell-hd-title"},[e._v("开户行名")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("view",{staticClass:"cell-item-hd"},[a("view",{staticClass:"cell-hd-title"},[e._v("开户行地址")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("view",{staticClass:"cell-item-hd"},[a("view",{staticClass:"cell-hd-title"},[e._v("设为默认")])])}];a.d(t,"a",function(){return i}),a.d(t,"b",function(){return s})},"6e01":function(e,t,a){"use strict";var i=a("ff85"),s=a.n(i);s.a},af7a:function(e,t,a){"use strict";a.r(t);var i=a("d493"),s=a.n(i);for(var c in i)"default"!==c&&function(e){a.d(t,e,function(){return i[e]})}(c);t["default"]=s.a},d493:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=s(a("10ef"));function s(e){return e&&e.__esModule?e:{default:e}}var c={components:{areaPicker:i.default},data:function(){return{bankName:"",cardType:1,cardTypeName:"",bankCode:"",accountBank:"",cardNumber:"",name:"",mobile:"",region:["北京市","北京市","东城区"],areaId:110101,address:"",is_def:2,checked:!1,pickerValue:"",defaultIndex:[0,0,0],submitStatus:!1}},computed:{},methods:{showThreePicker:function(){this.$refs.areaPicker.showPicker()},onConfirm:function(t){var a=this,i=t[0].name,s=t[1].name,c=t[2].name;this.pickerValue=t[0].name+" "+t[1].name+" "+t[2].name;var n={province_name:i,city_name:s,county_name:c};this.$api.getAreaId(n,function(t){t.status?a.areaId=t.data:e.showModal({title:"提示",content:"地区选择出现问题，请重新选择地区",showCancel:!1})})},defaultChange:function(){this.checked=!this.checked,this.is_def=1===this.is_def?2:1},saveShip:function(){var t=this;if(this.id&&0!=this.id){var a={id:this.id,name:this.name,address:this.address,mobile:this.mobile,is_def:this.is_def};a["area_id"]=this.areaId,this.$api.editShip(a,function(a){a.status?t.$common.successToShow("编辑成功",function(){e.navigateBack({delta:1})}):t.$common.errorToShow(a.msg)})}else{var i={area_id:this.areaId,name:this.name,address:this.address,mobile:this.mobile,is_def:this.is_def};this.$api.saveUserShip(i,function(a){a.status?t.$common.successToShow("添加成功",function(){e.navigateBack({delta:1})}):t.$common.errorToShow(a.msg)})}},checkCard:function(){var e=this;if(this.cardNumber){var t={card_code:this.cardNumber};this.$api.getBankCardOrganization(t,function(t){if(t.status){var a=t.data;e.bankName=a.name,e.cardType=a.type,e.bankCode=a.bank_code,e.cardTypeName=a.type_name}else e.$common.errorToShow(t.msg,function(){e.bankCode=e.bankName=e.cardType=e.cardTypeName=""})})}else this.bankCode=this.bankName=this.cardType=this.cardTypeName=""},addCard:function(){var t=this;if(this.cardNumber)if(this.bankName&&this.cardType&&this.bankCode)if(/^[\u4E00-\u9FA5]{2,4}$/.test(this.name))if(this.areaId)if(this.accountBank){this.submitStatus=!0;var a={bankName:this.bankName,areaId:this.areaId,accountBank:this.accountBank,accountName:this.name,bankCode:this.bankCode,cardNumber:this.cardNumber,cardType:this.cardType,isDefault:this.is_def};this.$api.addBankCard(a,function(a){a.status?t.$common.successToShow(a.msg,function(a){t.submitStatus=!1,e.navigateBack({delta:1})}):(t.$common.errorToShow(a.msg),t.submitStatus=!1)})}else this.$common.errorToShow("请输入开户银行信息");else this.$common.errorToShow("请选择开户行所在地区");else this.$common.errorToShow("请输入正确的持卡人名称");else this.$common.errorToShow("请输入正确的银行卡号");else this.$common.errorToShow("请输入银行卡号")}},onLoad:function(e){e.ship_id?(this.id=e.ship_id,this.getShipInfo()):this.pickerValue=this.region[0]+" "+this.region[1]+" "+this.region[2]},onBackPress:function(){if(this.$refs.areaPicker.pickerShow)return this.$refs.areaPicker.closePicker(),!0}};t.default=c}).call(this,a("6e42")["default"])},ff85:function(e,t,a){}},[["37b0","common/runtime","common/vendor"]]]);