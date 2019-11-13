<template>
	<view class="tax">
		<!-- header部分 -->
		<view class="header">
			<text>财务应用</text>
		</view>
		
    
		<!-- <navigator url="https://www.baidu.com/">到百度</navigator> -->
		<!-- 内容部分 -->
		<view class="con">
			<!-- 1 item                   老板看账-->
			<navigator class="con_item" url="../childrenCompon/boss" hover-class="none">    

				<view class="con_img">
					<image src="/static/homeimg/laobankanzhang.png" mode=""></image>
				</view>

				<view class="con_title">
					老板看账
				</view>
			</navigator>

			<!-- 2 item                     纳税申报-->
			<navigator class="con_item"  url="../childrenCompon/nashui" hover-class="none">

				<view class="con_img">
					<image src="/static/homeimg/nashuishenbao.png" mode=""></image>
				</view>

				<view class="con_title">
					纳税申报
				</view>
			</navigator>

			<!-- 3 item -->
			<view class="con_item">

				<view class="con_img">
					<image src="/static/homeimg/xianjinliuliang.png" mode=""></image>
				</view>

				<view class="con_title">
					现金流量
				</view>
			</view>

			<!-- 4 item                       资产负债-->
			<navigator class="con_item" url="../childrenCompon/zichan" hover-class="none">

				<view class="con_img">
					<image src="/static/homeimg/zichanfuzhai.png" mode=""></image>
				</view>

				<view class="con_title">
					资产负债
				</view>
			</navigator>

			<!-- 1 item                                      明细-->
			<navigator class="con_item" url="../childrenCompon/mingxi" hover-class="none">

				<view class="con_img">
					<image src="/static/homeimg/mingxizhang.png" mode=""></image>
				</view>

				<view class="con_title">
					明细账
				</view>
			</navigator>

			<!-- 2 item                                  利润-->
			<navigator class="con_item" url="../childrenCompon/lirun" hover-class="none">

				<view class="con_img">
					<image src="/static/homeimg/lirunbiao.png" mode=""></image>
				</view>

				<view class="con_title">
					利润表
				</view>
			</navigator>
			
			<!--                                       财务分析 -->
			<navigator class="con_item" url="../childrenCompon/caiwu" hover-class="none">
			
				<view class="con_img">
					<image src="/static/homeimg/caiwufenxi.png" mode=""></image>
				</view>
			
				<view class="con_title">
					财务分析
				</view>
			</navigator>
			
			<!-- 2 item                                  余额表-->
			<navigator class="con_item" url="../childrenCompon/yue" hover-class="none">
			
				<view class="con_img">
					<image src="/static/homeimg/yuebiao.png" mode=""></image>
				</view>
			
				<view class="con_title">
					余额表
				</view>
			</navigator>
			
			
			<!--                                              发票清单 -->
			<navigator class="con_item" url="../childrenCompon/fapiao" hover-class="none">
			
				<view class="con_img">
					<image src="/static/homeimg/fapiaoqingdan.png" mode=""></image>
				</view>
			
				<view class="con_title">
					发票清单
				</view>
			</navigator>
			
			
			<view class="con_item">
			
				<view class="con_img">
					<image src="/static/homeimg/shuichoubao.png" mode=""></image>
				</view>
			
				<view class="con_title">
					税筹宝
				</view>
			</view>
			
			<!--                                     我的工资 -->
			<navigator class="con_item" url="../childrenCompon/gongzi" hover-class="none">
			
				<view class="con_img">
					<image src="/static/homeimg/wodegongzi.png" mode=""></image>
				</view>
			
				<view class="con_title">
					我的工资
				</view>
			</navigator>
		</view>
		<view class="header">
			<text>公司管理</text>
		</view>
		<!-- 内容部分 -->
		<view class="con">
			<!-- 1 item -->
			<!--                                             公司管理 -->
			<navigator class="con_item" url="../childrenCompon/guanli" hover-class="none">
		
				<view class="con_img">
					<image src="/static/homeimg/gongsiguanli.png" mode=""></image>
				</view>
		
				<view class="con_title">
					公司管理
				</view>
			</navigator>
		
			<!-- 2 item                                           代账机构-->
			<navigator class="con_item" url="../childrenCompon/jigou">
		
				<view class="con_img">
					<image src="/static/homeimg/daizhangjigou.png" mode=""></image>
				</view>
		
				<view class="con_title">
					代账机构
				</view>
			</navigator>
		
			<!-- 3 item -->
			<navigator class="con_item" url="../childrenCompon/kaipiao" hover-class="none">
		
				<view class="con_img">
					<image src="/static/homeimg/kaipiaoxinxi.png" mode=""></image>
				</view>
		
				<view class="con_title">
					开票信息
				</view>
			</navigator>
		
			<!-- 4 item -->
			<view class="con_item">
		
				<view class="con_img">
					<image src="/static/homeimg/ziliaojioajie.png" mode=""></image>
				</view>
		
				<view class="con_title">
					资料交接
				</view>
			</view>
		
			<!-- 1 item -->
			<!--                                    更多服务 -->
			<navigator class="con_item" url="../childrenCompon/gengduo" hover-class="none">
		
				<view class="con_img">
					<image src="/static/homeimg/gengduofuwu.png" mode=""></image>
				</view>
		
				<view class="con_title">
					更多服务
				</view>
			</navigator>
		
			<!-- 2 item -->
			<view class="con_item">
		
				<view class="con_img">
					<image src="/static/homeimg/gongzuoribao.png" mode=""></image>
				</view>
		
				<view class="con_title">
					工作日报
				</view>
			</view>
			
			<view class="con_item">
			
				<view class="con_img">
					<image src="/static/homeimg/qiandao.png" mode=""></image>
				</view>
			
				<view class="con_title">
					签到
				</view>
			</view>	
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
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

