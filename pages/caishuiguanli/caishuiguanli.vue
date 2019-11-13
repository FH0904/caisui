<template>
	<view class="tax">
		<!-- 轮播图片 -->
		<view class="pic">
			<!-- <image src="../../static/homeimg/0304.jpg" mode=""></image> -->
			<swiper indicator-dots="true" autoplay="true" interval="3000" duration="1000" circular="true">
				<swiper-item>
					<view class="swiper-item">
						<image src="../../static/homeimg/0304.jpg" mode=""></image>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">
						<image src="../../static/homeimg/0304.jpg" mode=""></image>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">
						<image src="../../static/homeimg/0304.jpg" mode=""></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<!-- 通告栏部分 -->
		<uni-notice-bar scrollable="true" speed=1000 show-icon="true" single="true" text="[多行] 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏"></uni-notice-bar>
		<!-- 内容部分 -->
		<view class="con">
			<!-- 1 item                   上传票据-->
			<navigator class="con_item"  hover-class="none" @click="toShow">   <!-- url="../childrenCompon/shangchuan" -->

				<view class="con_img">
					<image src="/static/homeimg/shangchuanpiaoju.png" mode=""></image>
				</view>

				<view class="con_title">
					上传票据
				</view>
			</navigator>

			<!-- 2 item                     财务进度-->
			<navigator class="con_item" @click="toShow">

				<view class="con_img">
					<image src="/static/homeimg/caiwujindu.png" mode=""></image>
				</view>

				<view class="con_title">
					财务进度
				</view>
			</navigator>

			<!-- 3 item                   老板看账-->
			<navigator class="con_item"  hover-class="none" @click="toShow">    
			
				<view class="con_img">
					<image src="/static/homeimg/laobankanzhang.png" mode=""></image>
				</view>
			
				<view class="con_title">
					老板看账
				</view>
			</navigator>

			<!-- 4 item                     纳税申报-->
			<navigator class="con_item"   hover-class="none" @click="toShow">
			
				<view class="con_img">
					<image src="/static/homeimg/nashuishenbao.png" mode=""></image>
				</view>
			
				<view class="con_title">
					纳税申报
				</view>
			</navigator>

			<!-- 5 item                       资产负债-->
			<navigator class="con_item"  hover-class="none" @click="toShow">
			
				<view class="con_img">
					<image src="/static/homeimg/zichanfuzhai.png" mode=""></image>
				</view>
				
			
				<view class="con_title">
					资产负债
				</view>
			</navigator>
			
			<!-- 6 item                       现金流量-->
			<view class="con_item" @click="toShow">
			
				<view class="con_img">
					<image src="/static/homeimg/xianjinliuliang.png" mode=""></image>
				</view>
			
				<view class="con_title">
					现金流量
				</view>
			</view>
			
			<!-- 7 item                                  利润-->
			<navigator class="con_item" hover-class="none" @click="toShow">
			
				<view class="con_img">
					<image src="/static/homeimg/lirunbiao.png" mode=""></image>
				</view>
			
				<view class="con_title">
					利润表
				</view>
			</navigator>

		
			
			<!--  8                                     财务分析 -->
			<navigator class="con_item"  hover-class="none" @click="toShow">
			
				<view class="con_img">
					<image src="/static/homeimg/caiwufenxi.png" mode=""></image>
				</view>
			
				<view class="con_title">
					财务分析
				</view>
			</navigator>
	
	
			<!--  9                                            发票清单 -->
			<navigator class="con_item"  hover-class="none" @click="toShow">
			
				<view class="con_img">
					<image src="/static/homeimg/fapiaoqingdan.png" mode=""></image>
				</view>
			
				<view class="con_title">
					发票清单
				</view>
			</navigator>
			
			

			 <!-- 10                          开票信息 -->
			<navigator class="con_item"  hover-class="none" @click="toShow">
					
				<view class="con_img">
					<image src="/static/homeimg/kaipiaoxinxi.png" mode=""></image>
				</view>
					
				<view class="con_title">
					开票信息
				</view>
			</navigator>
			
			
			<!-- 11    主页更多   -->
			<navigator class="con_item"  hover-class="none" @click="toShow">
					
				<view class="con_img">
					<image src="/static/homeimg/gengduo.png" mode=""></image>
				</view>
					
				<view class="con_title">
					更多
				</view>
			</navigator>
		</view>
		
		
		<!-- plan 部分 -->
		<view class="chunk">


			<!-- 财务进度 -->
			<view class="plan">
				<view class="plan_header">
					<view class="text1">
					</view>
					<view class="text2">财务进度</view>
				</view>
				
				<view class="plan_item2">
					<view class="plan_item2_l">
						<text>状态：</text>
						
					</view>
					
				</view>
				<view class="plan_item2">
					<view class="plan_item2_l">
						<text>上传单据：{{resData.up_document}}张</text>
						
					</view>
					<view class="plan_item2_r">
						<text>会计凭证：{{resData.accounting_voucher}}张</text>
					</view>
				</view>
			</view>

			<!-- 财务指标--以这个为模板 -->
			<view class="plan">
				<view class="plan_header">
					<view class="text1">
					</view>
					<view class="text2">财务指标</view>
				</view>
				
				<view class="plan_item2">
					<view class="plan_item2_l">
						<text>净利润：{{resData.net_profit}}</text>
						
					</view>
					<view class="plan_item2_r">
						<text>收入：{{resData.income}}</text>
					</view>
				</view>
				<view class="plan_item2">
					<view class="plan_item2_l">
						<text>支出：{{resData.expend}}</text>
						
					</view>
					<view class="plan_item2_r">
						<text>费用：{{resData.costs}}</text>
					</view>
				</view>
				
				<!-- 财务指标 -->
				
			</view>

			<!-- 发票清单 -->
			<view class="plan">
			<view class="plan_header">
				<view class="text1">
				</view>
				<view class="text2">发票清单</view>
			</view>
			
			<view class="plan_item2">
				<view class="plan_item2_l">
					<text>销项发票：{{resData.sales_invoice}}张&nbsp;&nbsp;&nbsp;&nbsp;{{resData.sales_invoice_spare}}</text>
					
				</view>
				
			</view>
			<view class="plan_item2">
				<view class="plan_item2_l">
					<text>进项发票：{{resData.invoice_receipts}}张&nbsp;&nbsp;&nbsp;&nbsp;{{resData.invoice_receipts_spare}}</text>
					
				</view>
				
			</view>
			</view>
			<view class="row">
				
			</view>
			<!-- 资金状况与应收应付 -->
			<view class="monney">
				<view class="monney_l">
					<view class="plan_header">
						<view class="text1">
						</view>
						<view class="text2">资金状况</view>
					</view>
					
					<view class="plan_item2">
						<view class="plan_item2_l">
							<text>资金收入</text>
							
						</view>
						
					</view>
					
					<view class="plan_item2">
						<view class="plan_item2_l">
							<text>本期&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{resData.current_income}}</text>
							
						</view>
						
					</view>
					<view class="plan_item2">
						<view class="plan_item2_l">
							<text>累计&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{resData.total_income}}</text>
							
						</view>
						
					</view>
					<view class="plan_item2">
						<view class="plan_item2_l">
							<text>资金支付</text>
							
						</view>
						
					</view>
					
					<view class="plan_item2">
						<view class="plan_item2_l">
							<text>本期&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{resData.current_pay}}</text>
							
						</view>
						
					</view>
					<view class="plan_item2">
						<view class="plan_item2_l">
							<text>累计&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{resData.total_pay}}</text>
							
						</view>
						
					</view>
					
				</view>
				
				<view class="monney_r">
					<view class="plan_header">
						<view class="text1">
						</view>
						<view class="text2">应付应收</view>
					</view>
					
					<view class="plan_item2">
						<view class="plan_item2_l">
							<text>应收账款：</text>
							
						</view>
						
					</view>
					<view class="plan_item2">
						<view class="plan_item2_l">
							<text>本期&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{resData.current_should_income}}</text>
							
						</view>
						
					</view>
					<view class="plan_item2">
						<view class="plan_item2_l">
							<text>累计&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{resData.total_should_income}}</text>
							
						</view>
						
					</view>
					<view class="plan_item2">
						<view class="plan_item2_l">
							<text>应付账款：</text>
							
						</view>
						
					</view>
					<view class="plan_item2">
						<view class="plan_item2_l">
							<text>本期&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{resData.current_should_pay}}</text>
							
						</view>
						
					</view>
					<view class="plan_item2">
						<view class="plan_item2_l">
							<text>累计&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{resData.total_should_pay}}</text>
							
						</view>
						
					</view>
				</view>
				
			</view>

		</view>

	</view>
</template>

<script>
	import uniNoticeBar from '../../components/uni-notice-bar/uni-notice-bar.vue'
	export default {
		components: {uniNoticeBar},
    data(){
      return{
        resData:{}
      }
    },
    onShow() {
      this.getRingDate()
    },
    methods:{
      toShow(){
        uni.showToast({
          title:'维护中',
          icon:'none'
        })
      },
      async getRingDate() {
      	var token = this.$db.get('userToken')
      
      	let res = await this.$httpRequest.init({
      	    method: 'finance.lst',
      	    token: token || '',
      	})
        console.log(res);
        this.resData = res.data.info
        }
    },
    
	}
</script>

<style lang="less">
	.tax{
		overflow: hidden;
	}
	// chunk部分
	.chunk {
		width: 100%;

	}
	.row{
		width: 100%;
		height: 20rpx;
		background-color: #f2f4f5;
	}
	// monney底部内容
	.monney{
		margin-top: 30rpx;
		width: 100%;
		display: flex;
		.plan_header {
			box-sizing: content-box;
			width: 100%;
			height: 85rpx;
			line-height: 85rpx;
			
			
			.text1 {
				width: 5rpx;
				height: 24rpx;
				background-color: #4279ff;
				float: left;
				margin-top: 30rpx;
				margin-left: 20rpx;
			}
			.text2 {
				margin-left: 44rpx;
				font-size: 26rpx;
				color: #515151;
				font-weight: 400;
			}
			}
		.monney_l{
			// height: 480rpx;
			flex: 1;
			border-right: 4rpx solid #e3e4e6;
		}
		.monney_r{
			flex: 1;
		}
	}
	.plan {
		width: 100%;

		.plan_header {
			box-sizing: content-box;
			width: 100%;
			height: 85rpx;
			line-height: 85rpx;
			border-top: 20rpx solid #f2f4f5;
			border-bottom: 2rpx solid #e3e4e6;
			.text1 {
				width: 5rpx;
				height: 24rpx;
				background-color: #4279ff;
				float: left;
				margin-top: 30rpx;
				margin-left: 20rpx;
			}
			.text2 {
				margin-left: 44rpx;
				font-size: 26rpx;
				color: #515151;
				font-weight: 400;
			}
		}
		
		// .plan_content1 {
		// 	width: 100%;
		// 	.plan_item1{
		// 		width: 100%;
		// 		height: 76rpx;
		// 		line-height: 76rpx;
		// 		margin-left: 45rpx;
		// 		color: #515151;
		// 		font-weight: 400;
		// 	}
		// 	
		// }
	}
	.plan_item2{
		width: 100%;
		height: 76rpx;
		
		.plan_item2_l{
			height: 100%;
			width: 366rpx;
			float: left;
			line-height: 76rpx;
			text{
				margin-left: 44rpx;
				color: #515151;
				font-weight: 400;
				font-size: 24rpx;
			}
		}
		.plan_item2_r{
			line-height: 76rpx;
			height: 100%;
			width: 350rpx;
			float: left;
			text{
				color: #515151;
				font-weight: 400;
				font-size: 24rpx;
			}
		}
	}
	
	// 顶部的内容
	.tax {

		width: 100%;
		
		background-color: #fff;
		.pic{
			image{
				width: 100vw;
			}
		}
		.header {
			width: 100%;
			height: 80rpx;
			line-height: 80rpx;
			background-color: #fff;
			padding-left: 22rpx;
			color: #000;
			font-size: 30rpx;
			font-weight: 300;
			border-top: 2rpx solid #e3e4e6;
		}

		.con {
			width: 100%;
			background-color: #fff;
			display: flex;
			justify-content: flex-start;
			flex-wrap: wrap;
			border-top: 22rpx solid #f2f4f5;

			.con_item {

				flex: 1;
				min-width: 187.5rpx;
				max-width: 187.5rpx;
				height: 180rpx;
				display: flex;
				justify-content: center;
				flex-direction: column;
				align-items: center;

				.con_img {
					width: 75rpx;
					height: 75rpx;

					image {
						width: 100%;
						height: 100%;
					}
				}

				.con_title {
					margin-top: 10rpx;
					font-size: 26rpx;
					// color: #8a8a8a;
					font-weight: 400;
				}
			}
		}
	}
</style>

