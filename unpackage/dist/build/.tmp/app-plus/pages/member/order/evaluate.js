(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/member/order/evaluate"],{"189c":function(t,e,a){"use strict";var i=a("2f5f"),s=a.n(i);s.a},2527:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"content"},[a("view",{staticClass:"content-top"},[a("view",{staticClass:"img-list"},t._l(t.info.items,function(e,i){return a("view",{key:e.id,staticClass:"img-list-item"},[a("view",{staticClass:"img-list-item-gray"},[a("image",{staticClass:"img-list-item-l small-img",attrs:{src:e.image_url,mode:"aspectFill"}}),a("view",{staticClass:"img-list-item-r small-right",attrs:{eventid:"035a9dda-0-"+i},on:{click:function(a){t.goodsDetail(e.goods_id)}}},[a("view",{staticClass:"little-right-t"},[a("view",{staticClass:"goods-name list-goods-name"},[t._v(t._s(e.name))])])])]),a("view",{staticClass:"evaluate-num"},[a("view",{staticClass:"evaluate-num-t"},[t._v("商品评分")]),a("view",{staticClass:"evaluate-num-b"},[a("uni-rate",{attrs:{size:"18",id:e.id,value:t.score[e.id],eventid:"035a9dda-1-"+i,mpcomid:"035a9dda-0-"+i},on:{change:t.changeScore}})],1)]),a("view",{staticClass:"evaluate-content"},[a("view",{staticClass:"evaluate-c-t"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.textarea[e.id],expression:"textarea[item.id]"}],attrs:{placeholder:"宝贝满足你的期待吗? 说说你的使用心得",eventid:"035a9dda-2-"+i},domProps:{value:t.textarea[e.id]},on:{input:function(a){a.target.composing||t.$set(t.textarea,e.id,a.target.value)}}})]),a("view",{staticClass:"evaluate-c-b"},[t._l(t.images[e.id],function(s,o){return t.images[e.id].length?a("view",{key:o,staticClass:"goods-img-item"},[a("image",{staticClass:"del",attrs:{src:"../../../static/image/del.png",mode:"",eventid:"035a9dda-3-"+i+"-"+o},on:{click:function(a){t.removeImg(e.id,o)}}}),a("image",{attrs:{src:s.url,mode:"",eventid:"035a9dda-4-"+i+"-"+o},on:{click:function(e){t.clickImg(s.url)}}})]):t._e()}),a("view",{directives:[{name:"show",rawName:"v-show",value:t.isupload[e.id],expression:"isupload[item.id]"}],staticClass:"upload-img"},[a("image",{staticClass:"icon",attrs:{src:"../../../static/image/camera.png",mode:"",eventid:"035a9dda-5-"+i},on:{click:function(a){t.uploadImg(e.id)}}}),a("view",{},[t._v("上传照片")])])],2)])])}))]),a("view",{staticClass:"button-bottom"},[a("button",{staticClass:"btn btn-square btn-b",attrs:{"hover-class":"btn-hover",disabled:t.submitStatus,loading:t.submitStatus,eventid:"035a9dda-6"},on:{click:t.toEvaluate}},[t._v("提交评论")])],1)])},s=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return s})},"2f5f":function(t,e,a){},"301d":function(t,e,a){"use strict";a("ab7f");var i=o(a("b0ce")),s=o(a("ad22"));function o(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(s.default))},ad22:function(t,e,a){"use strict";a.r(e);var i=a("2527"),s=a("dd3b");for(var o in s)"default"!==o&&function(t){a.d(e,t,function(){return s[t]})}(o);a("189c");var n=a("2877"),r=Object(n["a"])(s["default"],i["a"],i["b"],!1,null,null,null);e["default"]=r.exports},dd3b:function(t,e,a){"use strict";a.r(e);var i=a("f8df"),s=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,function(){return i[t]})}(o);e["default"]=s.a},f8df:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(a("ed6f")),s=a("4856");function o(t){return t&&t.__esModule?t:{default:t}}var n={mixins:[s.goods],components:{uniRate:i.default},data:function(){return{orderId:0,info:{},images:[],score:[],textarea:[],isupload:[],rate:5,submitStatus:!1}},onLoad:function(e){this.orderId=e.order_id,this.orderId?this.orderInfo():this.$common.errorToShow("获取失败",function(){t.navigateBack({delta:1})})},computed:{maxUploadImg:function(){return this.$store.state.config.image_max}},methods:{orderInfo:function(){var t=this,e={order_id:this.orderId};this.$api.orderDetail(e,function(e){if(e.status&&4===e.data.text_status){var a=e.data,i=[],s=[],o=[],n=[];a.items.forEach(function(t){i[t.id]=[],s[t.id]="",o[t.id]=!0,n[t.id]=5}),t.info=a,t.images=i,t.textarea=s,t.score=n,t.isupload=o}else t.$common.errorToShow("订单不存在或状态不可评价!")})},uploadImg:function(t){var e=this;this.$api.uploadFiles(function(a){if(a.status){var i={url:a.data.url,id:a.data.image_id};e.images[t].push(i),e.$common.successToShow(a.msg)}else e.$common.errorToShow(a.msg)})},removeImg:function(t,e){this.images[t].splice(e,1)},clickImg:function(e){t.previewImage({urls:e.split()})},changeScore:function(t){this.score[t.id]=t.value},toEvaluate:function(){var e=this;this.submitStatus=!0;var a={};this.images.forEach(function(t,i){a[i]={images:t,score:e.score[i],textarea:e.textarea[i]}});var i={order_id:this.orderId,items:a};this.$api.orderEvaluate(i,function(a){a.status?e.$common.successToShow(a.msg,function(a){var i=getCurrentPages(),s=i[i.length-2];void 0!==s&&s.route,e.submitStatus=!1,t.navigateBack({delta:1})}):(e.$common.errorToShow(a.msg),e.submitStatus=!1)})}},watch:{images:{handler:function(){var t=this;this.images.forEach(function(e,a){t.isupload[a]=!(e.length>t.maxUploadImg)})},deep:!0}}};e.default=n}).call(this,a("6e42")["default"])}},[["301d","common/runtime","common/vendor"]]]);