<template>
	<view class="kp-wrapper">
		<view class="kp-header">
			
		</view>
		<view class="kp-content">
			<view class="item-1">
				<view class="list">
					企业名称 <input type="text" value="手机演示公司" />
				</view>
				<view class="list">
					企业税号 <input type="text" value="124666" />
				</view>
				<view class="list">
					企业地址 <input type="text" value="手机演示公司" />
				</view>
			</view>
			<view class="item-1">
				<view class="list">
					企业名称 <input type="text" value="手机演示公司" />
				</view>
				<view class="list">
					企业税号 <input type="text" value="124666" />
				</view>
				<view class="list">
					企业地址 <input type="text" value="手机演示公司" />
				</view>
			</view>
			<view class="item-1">
				<view class="list">
					企业名称 <input type="text" value="手机演示公司" />
				</view>
				<view class="list">
					企业税号 <input type="text" value="124666" />
				</view>
				<view class="list">
					企业地址 <input type="text" value="手机演示公司" />
				</view>
			</view>
		</view>
		
		<!-- 底部 -->
		<view class="tabbar">
			<view class="tabbar-left">
				<text>
					分享到QQ
				</text>
			</view>
			<view class="tabbar-right">
				<text>
					分享到微信
				</text>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="less">
	.kp-wrapper{
		.kp-header{
			width: 100%;
			height: 530upx;
			border-bottom: 20upx solid #f7f7f7;
		}
		.kp-content{
			position: absolute;
			left: 0;
			right: 0;
			margin-bottom: 88upx;
			.item-1{
				border-bottom: 20upx solid #f7f7f7;
				.list{
					display: flex;
					align-items: center;
					height: 106upx;
					border-bottom: 2upx solid #c8c8c8;
					font-size: 28upx;
					color: #9e9e9e;
					padding-left:30upx ;
					input{
						text-indent: 22upx;
						font-size: 26upx;
						color: #000;
					}
				}
			}
		}
		.tabbar{
			display: flex;
			position: fixed;
			left: 0;
			right: 0;
			bottom: 0;
			height: 88upx;
			font-size: 34upx;
			z-index: 10;
			.tabbar-left{
				flex: 1;
				display: flex;
				align-items: center;
				justify-content: center;
				background-color: #fff;
				color: #427afe;
			}
			.tabbar-right{
				flex: 1;
				display: flex;
				align-items: center;
				justify-content: center;
				background-color: #427afe;
				color: #ffff;
			}
		}
	}
</style>
