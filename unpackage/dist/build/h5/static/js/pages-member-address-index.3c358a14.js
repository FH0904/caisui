(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-member-address-index"],{"0191":function(e,t,i){"use strict";i.r(t);var n=i("64b4"),a=i("700a");for(var s in a)"default"!==s&&function(e){i.d(t,e,function(){return a[e]})}(s);i("aef9");var c=i("2877"),r=Object(c["a"])(a["default"],n["a"],n["b"],!1,null,"4578f0d8",null);t["default"]=r.exports},2926:function(e,t,i){"use strict";var n=i("6086"),a=i.n(n);a.a},3654:function(e,t,i){"use strict";var n=i("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("28a5"),i("7f7f");var a=n(i("4c3c")),s={components:{areaPicker:a.default},data:function(){return{id:0,name:"",mobile:"",region:["北京市","北京市","东城区"],areaId:110101,address:"",is_def:2,multiArray:[[],[],[]],multiIndex:[11e4,110100,110101],checked:!1,pickerValue:"",defaultIndex:[0,0,0],submitStatus:!1}},computed:{},methods:{showThreePicker:function(){this.$refs.areaPicker.showPicker()},onConfirm:function(e){var t=this,i=e[0].name,n=e[1].name,a=e[2].name;this.pickerValue=e[0].name+" "+e[1].name+" "+e[2].name;var s={province_name:i,city_name:n,county_name:a};this.$api.getAreaId(s,function(e){e.status?t.areaId=e.data:uni.showModal({title:"提示",content:"地区选择出现问题，请重新选择地区",showCancel:!1})})},checkData:function(e){return this.submitStatus=!1,e.name?e.mobile?11!==e.mobile.length?(this.$common.errorToShow("收货人手机号格式不正确"),!1):e.area_id?!!e.address||(this.$common.errorToShow("请输入收货地址详细信息"),!1):(this.$common.errorToShow("请选择地区信息"),!1):(this.$common.errorToShow("请输入收货人手机号"),!1):(this.$common.errorToShow("请输入收货人姓名"),!1)},defaultChange:function(){this.checked?(this.checked=!1,this.is_def=2):(this.checked=!0,this.is_def=1)},getShipInfo:function(){var e=this,t={id:this.id};this.$api.shipDetail(t,function(t){if(t.status){var i=t.data.area_name.split(" ");e.name=t.data.name,e.mobile=t.data.mobile,e.region=i,e.areaId=t.data.area_id,e.pickerValue=e.region[0]+" "+e.region[1]+" "+e.region[2],e.$refs.areaPicker.init(),e.address=t.data.address,e.is_def=t.data.is_def,1==t.data.is_def?e.checked=!0:e.checked=!1}else e.$common.errorToShow("获取收货地址信息出现问题"),e.submitStatus=!1})},delShip:function(){var e=this;this.submitStatus=!0,this.$api.removeShip({id:this.id},function(t){t.status?e.$common.successToShow(t.msg,function(t){e.submitStatus=!1,uni.navigateBack({delta:1})}):(e.$common.errorToShow(t.msg),e.submitStatus=!1)})},saveShip:function(){var e=this;this.submitStatus=!0;var t={name:this.name,address:this.address,mobile:this.mobile,is_def:this.is_def,area_id:this.areaId};this.id&&0!=this.id?(t.id=this.id,this.checkData(t)&&this.$api.editShip(t,function(t){t.status?e.$common.successToShow(t.msg,function(t){e.submitStatus=!1,uni.navigateBack({delta:1})}):(e.$common.errorToShow(t.msg),e.submitStatus=!1)})):this.checkData(t)&&this.$api.saveUserShip(t,function(t){t.status?e.$common.successToShow(t.msg,function(t){e.submitStatus=!1,uni.navigateBack({delta:1})}):(e.$common.errorToShow(t.msg),e.submitStatus=!1)})}},onLoad:function(e){e.ship_id?(this.id=e.ship_id,this.getShipInfo()):(this.pickerValue=this.region[0]+" "+this.region[1]+" "+this.region[2],uni.setNavigationBarTitle({title:"添加地址"}))},onBackPress:function(){if(this.$refs.areaPicker.pickerShow)return this.$refs.areaPicker.closePicker(),!0}};t.default=s},"4c3c":function(e,t,i){"use strict";i.r(t);var n=i("6463"),a=i("e625");for(var s in a)"default"!==s&&function(e){i.d(t,e,function(){return a[e]})}(s);i("2926");var c=i("2877"),r=Object(c["a"])(a["default"],n["a"],n["b"],!1,null,"235351b7",null);t["default"]=r.exports},6086:function(e,t,i){var n=i("958c");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("2d063558",n,!0,{sourceMap:!1,shadowMode:!1})},6463:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.pickerShow,expression:"pickerShow"}],staticClass:"picker-mask",attrs:{catchtouchmove:"true"},on:{click:function(t){t=e.$handleEvent(t),e.closePicker(t)}}}),i("v-uni-view",{staticClass:"picker-content",class:{pickerShow:e.pickerShow}},[i("v-uni-view",{staticClass:"picker-button"},[i("v-uni-text",{on:{click:function(t){t=e.$handleEvent(t),e.closePicker(t)}}},[e._v("取消")]),i("v-uni-text",{on:{click:function(t){t=e.$handleEvent(t),e.confirm(t)}}},[e._v("确定")])],1),i("v-uni-picker-view",{staticClass:"picker-view",attrs:{"indicator-class":"picker-view-selected-three",value:e.pickerIndex},on:{change:function(t){t=e.$handleEvent(t),e.pickerViewChangeThree(t)}}},[i("v-uni-picker-view-column",e._l(e.pickerList,function(t,n){return i("v-uni-view",{key:n,staticClass:"picker-item"},[e._v(e._s(t.label))])}),1),i("v-uni-picker-view-column",e._l(e.pickerList[e.pickerIndex[0]].children,function(t,n){return i("v-uni-view",{key:n,staticClass:"picker-item"},[e._v(e._s(t.label))])}),1),i("v-uni-picker-view-column",e._l(e.pickerList[e.pickerIndex[0]].children[e.pickerIndex[1]].children,function(t,n){return i("v-uni-view",{key:n,staticClass:"picker-item"},[e._v(e._s(t.label))])}),1)],1)],1)],1)},a=[];i.d(t,"a",function(){return n}),i.d(t,"b",function(){return a})},"64b4":function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"content-top"},[i("v-uni-view",{staticClass:"cell-group"},[i("v-uni-view",{staticClass:"cell-item"},[i("v-uni-view",{staticClass:"cell-item-hd"},[i("v-uni-view",{staticClass:"cell-hd-title"},[e._v("收货人")])],1),i("v-uni-view",{staticClass:"cell-item-bd"},[i("v-uni-input",{staticClass:"cell-bd-input",attrs:{type:"text",placeholder:"请填写收货人姓名"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1)],1),i("v-uni-view",{staticClass:"cell-item"},[i("v-uni-view",{staticClass:"cell-item-hd"},[i("v-uni-view",{staticClass:"cell-hd-title"},[e._v("手机号")])],1),i("v-uni-view",{staticClass:"cell-item-bd"},[i("v-uni-input",{staticClass:"cell-bd-input",attrs:{type:"text",placeholder:"请填写收货人手机号"},model:{value:e.mobile,callback:function(t){e.mobile=t},expression:"mobile"}})],1)],1),i("v-uni-view",{staticClass:"cell-item"},[i("v-uni-view",{staticClass:"cell-item-hd"},[i("v-uni-view",{staticClass:"cell-hd-title"},[e._v("省市区")])],1),i("v-uni-view",{staticClass:"cell-item-bd"},[i("v-uni-input",{attrs:{value:e.pickerValue},on:{focus:function(t){t=e.$handleEvent(t),e.showThreePicker(t)}}}),i("area-picker",{ref:"areaPicker",attrs:{areaId:e.areaId,defaultIndex:e.defaultIndex},on:{onConfirm:function(t){t=e.$handleEvent(t),e.onConfirm(t)}}})],1),i("v-uni-view",{staticClass:"cell-item-ft"},[i("v-uni-image",{staticClass:"cell-ft-next icon",attrs:{src:"../../../static/image/ic-pull-down.png"},on:{click:function(t){t=e.$handleEvent(t),e.showThreePicker(t)}}})],1)],1),i("v-uni-view",{staticClass:"cell-item"},[i("v-uni-view",{staticClass:"cell-item-hd"},[i("v-uni-view",{staticClass:"cell-hd-title"},[e._v("详细地址")])],1),i("v-uni-view",{staticClass:"cell-item-bd"},[i("v-uni-input",{staticClass:"cell-bd-input",attrs:{type:"text",placeholder:"请填写收货详细地址"},model:{value:e.address,callback:function(t){e.address=t},expression:"address"}})],1)],1),i("v-uni-view",{staticClass:"cell-item",on:{click:function(t){t=e.$handleEvent(t),e.defaultChange(t)}}},[i("v-uni-view",{staticClass:"cell-item-hd"},[i("v-uni-view",{staticClass:"cell-hd-title"},[e._v("设为默认")])],1),i("v-uni-view",{staticClass:"cell-item-ft"},[i("v-uni-label",{staticClass:"radio"},[i("v-uni-radio",{attrs:{value:"1",checked:e.checked,color:"#FF7159"}})],1)],1)],1)],1)],1),i("v-uni-view",{staticClass:"button-bottom"},[e.id&&0!=e.id?i("v-uni-button",{staticClass:"btn btn-square btn-w",attrs:{"hover-class":"btn-hover2",disabled:e.submitStatus,loading:e.submitStatus},on:{click:function(t){t=e.$handleEvent(t),e.delShip(t)}}},[e._v("删除")]):e._e(),i("v-uni-button",{staticClass:"btn btn-square btn-b",attrs:{"hover-class":"btn-hover2",disabled:e.submitStatus,loading:e.submitStatus},on:{click:function(t){t=e.$handleEvent(t),e.saveShip(t)}}},[e._v("保存")])],1)],1)},a=[];i.d(t,"a",function(){return n}),i.d(t,"b",function(){return a})},"700a":function(e,t,i){"use strict";i.r(t);var n=i("3654"),a=i.n(n);for(var s in n)"default"!==s&&function(e){i.d(t,e,function(){return n[e]})}(s);t["default"]=a.a},"701e":function(e,t,i){var n=i("f0fa");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("33ac099c",n,!0,{sourceMap:!1,shadowMode:!1})},"958c":function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,".picker-mask[data-v-235351b7]{position:fixed;top:0;right:0;left:0;bottom:0;z-index:50;width:100%;height:100%;background-color:rgba(0,0,0,.3)}.picker-content[data-v-235351b7]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;position:fixed;bottom:0;left:0;z-index:100;width:100%;height:%?600?%;background-color:#fff;-webkit-transform:translateY(100%);-ms-transform:translateY(100%);transform:translateY(100%);-webkit-transition:all .2s ease;-o-transition:all .2s ease;transition:all .2s ease}.pickerShow[data-v-235351b7]{-webkit-transform:translateY(0)!important;-ms-transform:translateY(0)!important;transform:translateY(0)!important}.picker-content .picker-button[data-v-235351b7]{-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:%?80?%;line-height:%?80?%}.picker-button uni-text[data-v-235351b7]{width:%?180?%;font-size:%?28?%;font-weight:500;display:block;text-align:center;overflow:hidden}.picker-button uni-text[data-v-235351b7]:first-child{color:#a1a1a1;float:left}.picker-button uni-text[data-v-235351b7]:last-child{color:#ff7159;float:right}.picker-content .picker-view[data-v-235351b7]{width:100%;height:%?500?%}.picker-content .picker-view-selected-one[data-v-235351b7],.picker-content .picker-view-selected-three[data-v-235351b7],.picker-content .picker-view-selected-two[data-v-235351b7]{height:%?68?%;line-height:%?68?%;border-top:#1aad19 %?1?% solid;border-bottom:#1aad19 %?1?% solid}.picker-content .picker-view-selected-one[data-v-235351b7]{position:relative;left:25%;width:50%}.picker-content .picker-view-selected-two[data-v-235351b7]{position:relative;left:15%;width:70%}.picker-content .picker-view-selected-three[data-v-235351b7]{position:relative;left:5%;width:90%}.picker-view .picker-item[data-v-235351b7]{width:100%;height:34px;line-height:34px;font-size:15px;font-weight:600;display:block;text-align:center}",""])},aef9:function(e,t,i){"use strict";var n=i("701e"),a=i.n(n);a.a},e625:function(e,t,i){"use strict";i.r(t);var n=i("f15e"),a=i.n(n);for(var s in n)"default"!==s&&function(e){i.d(t,e,function(){return n[e]})}(s);t["default"]=a.a},f0fa:function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,".user-head[data-v-4578f0d8]{height:%?100?%}.user-head-img[data-v-4578f0d8]{height:%?90?%;width:%?90?%;border-radius:50%}.cell-hd-title[data-v-4578f0d8]{color:#333}.cell-item-bd[data-v-4578f0d8]{color:#666;font-size:%?26?%}.button-bottom .btn[data-v-4578f0d8]{width:50%}.cell-bd-input[data-v-4578f0d8]{width:100%}\n",""])},f15e:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("c5f6");var n={name:"area-picker",props:{areaId:{type:Number,required:!0},defaultIndex:{type:Array,required:!0,validator:function(e){return e.length>0&&e.length<=3}}},data:function(){return{pickerIndex:[0,0,0],pickerShow:!1,region:["河南省","郑州市","中原区"],provinceKey:-1,cityKey:-1,areaKey:-1,selectedData:[],pickerList:this.$db.get("areaList"),province:this.$db.get("areaList")}},created:function(){this.init()},watch:{mode:function(){this.pickerIndex=this.defaultIndex}},methods:{init:function(){this.province=this.$db.get("areaList"),this.getFullPath(this.areaId,this.province),this.pickerIndex=[this.provinceKey,this.cityKey,this.areaKey]},getFullPath:function(e,t){for(var i=0;i<t.length;i++)if(e==t[i].value){if(!t[i].children)return this.areaKey=i,!0;if(t[i].hasOwnProperty("children"))return t[i].children[0]&&!t[i].children[0].children?(this.cityKey=i,!0):(this.provinceKey=i,!0)}else if(t[i].hasOwnProperty("children")&&(void 0!==t[i].children[0]&&(t[i].children[0].hasOwnProperty("children")?this.provinceKey=i:this.cityKey=i),"undefined"!=typeof t[i].children)){var n=this.getFullPath(e,t[i].children);if(n)return!0}},pickerViewChangeThree:function(e){var t=e.detail.value;this.pickerList[t[0]].children.length-1<t[1]&&(t[1]=this.pickerList[t[0]].children.length-1),this.pickerList[t[0]].children[t[1]].children.length-1<t[2]&&(t[2]=this.pickerList[t[0]].children[t[1]].children.length-1),this.pickerIndex=t},showPicker:function(){uni.hideKeyboard(),this.init(),this.pickerShow=!0},confirm:function(){this.pickerShow=!1,this.selectedData=[{id:this.province[this.pickerIndex[0]].value,name:this.province[this.pickerIndex[0]].label},{id:this.province[this.pickerIndex[0]].children[this.pickerIndex[1]].value,name:this.province[this.pickerIndex[0]].children[this.pickerIndex[1]].label},{id:this.province[this.pickerIndex[0]].children[this.pickerIndex[1]].children[this.pickerIndex[2]].value,name:this.province[this.pickerIndex[0]].children[this.pickerIndex[1]].children[this.pickerIndex[2]].label}],this.$emit("onConfirm",this.selectedData)},closePicker:function(){this.pickerShow=!1}}};t.default=n}}]);