<template>
	<view class="wrapper">
		
		<view class="header">
			<view class="list1">
				<text>2019年10月</text>
				<text class="color-active">单位 : 元</text>
			</view>
			<view class="list2">
					<image src="../../../static/homeimg/明细账.png" mode=""></image>
				<view class="text">
					<text>个人所得税</text>
					<text>0.00</text>
				</view>
			</view>
			<view class="allPrice">
				<text>合计</text>
				<text class="num">0.00</text>
			</view>
		</view>
		<view class="bottomline"></view>
		
		<view class="header">
			<view class="list1">
				<text>2019年10月</text>
				<text class="color-active">单位 : 元</text>
			</view>
			<view class="list2">
					<image src="../../../static/homeimg/明细账.png" mode=""></image>
				<view class="text">
					<text>个人所得税</text>
					<text>0.00</text>
				</view>
			</view>
			<view class="list2">
					<image src="../../../static/homeimg/明细账.png" mode=""></image>
				<view class="text">
					<text>个人所得税</text>
					<text>0.00</text>
				</view>
			</view>
			<view class="list2">
					<image src="../../../static/homeimg/明细账.png" mode=""></image>
				<view class="text">
					<text>个人所得税</text>
					<text>0.00</text>
				</view>
			</view>
			<view class="list2">
					<image src="../../../static/homeimg/明细账.png" mode=""></image>
				<view class="text">
					<text>个人所得税</text>
					<text>0.00</text>
				</view>
			</view>
			<view class="list2">
					<image src="../../../static/homeimg/明细账.png" mode=""></image>
				<view class="text">
					<text>个人所得税</text>
					<text>0.00</text>
				</view>
			</view>
			<view class="list2">
					<image src="../../../static/homeimg/明细账.png" mode=""></image>
				<view class="text">
					<text>个人所得税</text>
					<text>0.00</text>
				</view>
			</view>
			<view class="list2">
					<image src="../../../static/homeimg/明细账.png" mode=""></image>
				<view class="text">
					<text>个人所得税</text>
					<text>0.00</text>
				</view>
			</view>
			<view class="list2">
					<image src="../../../static/homeimg/明细账.png" mode=""></image>
				<view class="text">
					<text>个人所得税</text>
					<text>0.00</text>
				</view>
			</view>
			<view class="list2">
					<image src="../../../static/homeimg/明细账.png" mode=""></image>
				<view class="text">
					<text>个人所得税</text>
					<text>0.00</text>
				</view>
			</view>
			<view class="allPrice">
				<text>合计</text>
				<text class="num">0.00</text>
			</view>
		</view>
		<view class="bottomline"></view>
		
		
		
	
	</view>
</template>

<script>
</script>

<style lang="less">
	.wrapper{
		.header{
			padding-left: 20upx ;
			.list1{
				display: flex;
				justify-content: space-between;
				align-items: center;
				height:100upx;
				font-size: 28upx;
				border-bottom: 2upx solid #c6d2d7;
				.color-active{
					color: #4182ff;
					margin-right: 20upx;
				}
			}
			.list2{
				position: relative;
				top: 0;
				display: flex;
				align-items: center;
				height:100upx;
				font-size: 28upx;
				image{
					flex-grow: 0;
					width:53upx ;
					height: 53upx;
					margin-right: 10upx;
				}
				.text{
					flex-grow: 1;
					display: flex;
					justify-content: space-between;
					margin-right: 20upx;
					&:after{
						content: '';
						position: absolute;
						right: 0;
						bottom: 0;
						width: 90%;
						height: 2upx;
						background-color: #c6d2d7;
					}
				}
			}
			.allPrice{
				display: flex;
				justify-content: space-between;
				align-items: center;
				height:100upx;
				font-size: 28upx;
				.num{
					margin-right: 20upx;
				}
			}
		}
		.bottomline{
			width: 100%;
			height: 22upx;
			background-color: #f0f0f3;
		}
		
	}
</style>

