(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-member-distribution-store_setting"],{1560:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"content-top"},[i("v-uni-view",{staticClass:"cell-group"},[i("v-uni-view",{staticClass:"cell-item"},[i("v-uni-view",{staticClass:"cell-item-hd"},[i("v-uni-view",{staticClass:"cell-hd-title"},[t._v("名称")])],1),i("v-uni-view",{staticClass:"cell-item-bd"},[i("v-uni-input",{staticClass:"cell-bd-input",attrs:{placeholder:"请输入店铺名称"},model:{value:t.store_name,callback:function(e){t.store_name=e},expression:"store_name"}})],1)],1),i("v-uni-view",{staticClass:"cell-item user-head"},[i("v-uni-view",{staticClass:"cell-item-hd"},[i("v-uni-view",{staticClass:"cell-hd-title"},[t._v("图标")])],1),i("v-uni-view",{staticClass:"cell-item-ft"},[i("v-uni-image",{staticClass:"cell-ft-next user-head-img have-none",attrs:{mode:"aspectFill",src:t.logo},on:{click:function(e){e=t.$handleEvent(e),t.uploadLogo(e)}}})],1)],1)],1),i("v-uni-view",{staticClass:"cell-group"},[i("v-uni-view",{staticClass:"cell-item right-img"},[i("v-uni-view",{staticClass:"cell-item-hd"},[i("v-uni-view",{staticClass:"cell-hd-title"},[t._v("店招")])],1)],1),i("v-uni-view",{},[i("v-uni-view",{staticClass:"evaluate-c-b"},[t._l(t.images,function(e,a){return i("v-uni-view",{key:a,staticClass:"goods-img-item"},[i("v-uni-image",{staticClass:"del",attrs:{src:"../../../static/image/del.png",mode:""},on:{click:function(i){i=t.$handleEvent(i),t.delImage(e)}}}),i("v-uni-image",{attrs:{src:e.url,mode:""},on:{click:function(i){i=t.$handleEvent(i),t.clickImg(e.url)}}})],1)}),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.isImage,expression:"isImage"}],staticClass:"upload-img",on:{click:function(e){e=t.$handleEvent(e),t.upImage(e)}}},[i("v-uni-image",{staticClass:"icon",attrs:{src:"../../../static/image/camera.png",mode:""}}),i("v-uni-view",{},[t._v("上传照片")])],1)],2)],1)],1),i("v-uni-view",{staticClass:"cell-group"},[i("v-uni-view",{staticClass:"cell-item right-img"},[i("v-uni-view",{staticClass:"cell-item-hd"},[i("v-uni-view",{staticClass:"cell-hd-title"},[t._v("简介")])],1)],1),i("v-uni-view",{staticClass:"cell-textarea "},[i("v-uni-textarea",{attrs:{placeholder:"请您在此描述问题(最多200字)",maxlength:"200"},model:{value:t.store_desc,callback:function(e){t.store_desc=e},expression:"store_desc"}})],1)],1)],1),i("v-uni-view",{staticClass:"button-bottom"},[i("v-uni-button",{staticClass:"btn btn-square btn-b",attrs:{"hover-class":"btn-hover2"},on:{click:function(e){e=t.$handleEvent(e),t.submitHandler()}}},[t._v("保存")])],1)],1)},s=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return s})},3889:function(t,e,i){"use strict";i.r(e);var a=i("6325"),s=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);e["default"]=s.a},"568c":function(t,e,i){"use strict";i.r(e);var a=i("1560"),s=i("3889");for(var o in s)"default"!==o&&function(t){i.d(e,t,function(){return s[t]})}(o);i("e095");var n=i("2877"),l=Object(n["a"])(s["default"],a["a"],a["b"],!1,null,"6cb39abd",null);e["default"]=l.exports},6325:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("28a5");var a={data:function(){return{title:"picker",logo:"",index:2,images:[],image_max:1,store_name:"",store_logo:"",store_banner:"",store_desc:"",store_logo_src:"",store_banner_src:""}},computed:{isImage:function(){var t=this.image_max-this.images.length;return t>0}},methods:{uploadLogo:function(){var t=this;this.$api.uploadFiles(function(e){e.status?(t.store_logo=e.data.image_id,t.logo=e.data.url):t.$common.errorToShow(e.msg)})},submitHandler:function(){var t=this;this.store_name&&""!=this.store_name?(this.store_banner=this.images[0].image_id,this.$api.setStore({store_name:this.store_name,store_logo:this.store_logo,store_banner:this.store_banner,store_desc:this.store_desc},function(e){e.status?t.$common.successToShow(e.msg,function(t){uni.navigateBack({delta:1})}):t.$common.errorToShow(e.msg)})):this.$common.errorToShow("请填写店铺名称")},upImage:function(){var t=this,e=this.image_max-this.images.length;e>0&&this.$api.uploadImage(e,function(e){e.status?(t.images.push(e.data),t.$common.successToShow(e.msg)):t.$common.errorToShow(e.msg)})},delImage:function(t){for(var e=[],i=0;i<this.images.length;i++)this.images[i].image_id!=t.image_id&&e.push(this.images[i]);this.images=e},clickImg:function(t){uni.previewImage({urls:t.split()})}},onLoad:function(){var t=this;t.$api.getDistributioninfo({check_condition:!1},function(e){e.status?(t.store_name=e.data.store_name,t.store_desc=e.data.store_desc,t.store_logo=e.data.store_logo,e.data.store_logo&&(t.logo=e.data.store_logo_src),t.store_banner=e.data.store_banner,t.store_banner&&t.images.push({image_id:e.data.store_banner,url:e.data.store_banner_src})):t.$common.errorToShow(e.msg)})}};e.default=a},"92c1":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".user-head[data-v-6cb39abd]{height:%?100?%}.user-head-img[data-v-6cb39abd]{height:%?90?%;width:%?90?%;border-radius:50%}.cell-hd-title[data-v-6cb39abd]{color:#333}.cell-item-bd[data-v-6cb39abd]{color:#666;font-size:%?26?%}.list-goods-name[data-v-6cb39abd]{width:100%!important}.cart-checkbox-item[data-v-6cb39abd]{position:relative}.invoice-type .uni-list-cell[data-v-6cb39abd]{display:inline-block;font-size:%?26?%;color:#333;position:relative;margin-left:%?50?%}.invoice-type .uni-list-cell>uni-view[data-v-6cb39abd]{display:inline-block}.invoice-type-icon[data-v-6cb39abd]{position:absolute;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%)}.invoice-type-c[data-v-6cb39abd]{margin-left:%?50?%;line-height:2}.cell-item-ft .cell-bd-input[data-v-6cb39abd]{text-align:right;width:%?500?%;font-size:%?28?%}.right-img[data-v-6cb39abd]{border-bottom:0}.cell-textarea[data-v-6cb39abd]{padding:0 %?26?% %?20?%}.cell-textarea uni-textarea[data-v-6cb39abd]{width:100%;height:%?200?%;font-size:%?26?%;color:#333}.evaluate-c-b[data-v-6cb39abd]{overflow:hidden;padding:0 %?20?%}.upload-img[data-v-6cb39abd]{width:%?146?%;height:%?146?%;margin:%?14?%;text-align:center;color:#999;font-size:%?22?%;border:%?2?% solid #e1e1e1;border-radius:%?4?%;display:inline-block;float:left;padding:%?24?% 0}.goods-img-item[data-v-6cb39abd]{width:%?174?%;height:%?174?%;padding:%?14?%;float:left;position:relative}.goods-img-item[data-v-6cb39abd]:nth-child(4n){margin-right:0}.goods-img-item uni-image[data-v-6cb39abd]{width:100%;height:100%}.del[data-v-6cb39abd]{width:%?30?%!important;height:%?30?%!important;position:absolute;right:0;top:0;z-index:999}.cell-textarea uni-textarea[data-v-6cb39abd]{background-color:#f8f8f8;padding:%?12?% %?20?%;-webkit-box-sizing:border-box;box-sizing:border-box}",""])},bb67:function(t,e,i){var a=i("92c1");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=i("4f06").default;s("15ba93aa",a,!0,{sourceMap:!1,shadowMode:!1})},e095:function(t,e,i){"use strict";var a=i("bb67"),s=i.n(a);s.a}}]);