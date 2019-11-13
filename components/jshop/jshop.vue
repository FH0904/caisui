<template>
  <view>
    <block v-for="(item,index) in data" :key="index">
      <!-- <jshopsearch :data="item" v-if="item.widget_code=='search' "></jshopsearch> -->
      <!-- <jshopnotice :data="item" v-if="item.widget_code=='notice' "></jshopnotice> -->
      <jshopimgSlide :data="item" v-if="item.widget_code=='imgSlide' "></jshopimgSlide>
	  
	  <!-- 赠劵 -->
      <!-- <jshopcoupon :data="item" v-if="item.widget_code=='coupon' "></jshopcoupon> -->
	  
	  <!-- 空白的 -->
      <!-- <jshopblank :data="item" v-if="item.widget_code=='blank' "></jshopblank> -->
	  
	  <!-- 文本域 -->
      <!-- <jshoptextarea :data="item" v-if="item.widget_code=='textarea' "></jshoptextarea> -->
	  
	  
      <!-- <jshopvideo :data="item" v-if="item.widget_code=='video' "></jshopvideo> -->
	  
	  
      <!-- <jshopimgWindow :data="item" v-if="item.widget_code=='imgWindow' "></jshopimgWindow> -->
	  
	  
      <!-- <jshopimgSingle :data="item" v-if="item.widget_code=='imgSingle' "></jshopimgSingle> -->
	  
	  <!-- 商品界面 -->
      <jshopgoods :data="item" v-if="item.widget_code=='goods' "></jshopgoods>
	  
	  <!-- 文章部分 -->
      <!-- <jshoparticle :data="item" v-if="item.widget_code=='article' "></jshoparticle> -->
	  
      <!-- <jshoparticleClassify :data="item" v-if="item.widget_code=='articleClassify' "></jshoparticleClassify> -->
	  
	  <!-- navbar部分 -->
      <jshopnavBar :data="item" v-if="item.widget_code=='navBar' "></jshopnavBar>
	  
	  <!-- 分组购买 -->
      <!-- <jshopgroupPurchase :data="item" v-if="item.widget_code=='groupPurchase' "></jshopgroupPurchase> -->
	  
	  <!-- 记录，表明 -->
      <!-- <jshoprecord :data="item" v-if="item.widget_code=='record' "></jshoprecord> -->
	  
	  <!-- 拼团 -->
	  <jshoppintuan :data="item" v-if="item.widget_code=='pintuan' "></jshoppintuan>
    </block>
  </view>
</template>

<script>
/**
 * 吉海科技jshop小程序插件集合。
 * author:novice
 * date:2019:05:20
 */
import uniCountdown from '@/components/uni-countdown/uni-countdown.vue'
import jshopimgSlide from '@/components/jshop/jshop-imgSlide.vue'
import jshopsearch from '@/components/jshop/jshop-search.vue'
import jshopnotice from '@/components/jshop/jshop-notice.vue'
import jshopcoupon from '@/components/jshop/jshop-coupon.vue'
import jshopblank from '@/components/jshop/jshop-blank.vue'
import jshoptextarea from '@/components/jshop/jshop-textarea.vue'
import jshopvideo from '@/components/jshop/jshop-video.vue'
import jshopimgWindow from '@/components/jshop/jshop-imgWindow.vue'
import jshopimgSingle from '@/components/jshop/jshop-imgSingle.vue'
import jshopgoods from '@/components/jshop/jshop-goods.vue'
import jshoparticle from '@/components/jshop/jshop-article.vue'
import jshoparticleClassify from '@/components/jshop/jshop-articleClassify.vue'
import jshopnavBar from '@/components/jshop/jshop-navBar.vue'
import jshopgroupPurchase from '@/components/jshop/jshop-groupPurchase.vue'
import jshoprecord from '@/components/jshop/jshop-record.vue'
import jshoppintuan from '@/components/jshop/jshop-pintuan.vue'
export default {
  name: 'jshop',
  components: {
    jshopimgSlide,
    jshopsearch,
    jshopnotice,
    jshopcoupon,
    jshopblank,
    jshoptextarea,
    jshopvideo,
    jshopimgWindow,
    jshopimgSingle,
    jshopgoods,
    jshoparticle,
    jshoparticleClassify,
    jshopnavBar,
    jshopgroupPurchase,
    jshoprecord,
	jshoppintuan
  },
  props: {
    data: {
      default: function() {
        return []
      }
    }
  },
  mounted() {
  	console.log(this.data)
  }
}
</script>
