<template>
	<view class="fp-wrapper">
		<view class="fp-item">
			<view class="item-title">
				2018-03
			</view>
			<view class="item-list">
				<view class="list1">
					销项发票2张
				</view>
				<view class="list2">
					<view class="list-left">
						<view class="left1">
							价税合计 :
						</view>
						<view class="left2">
							3.1415926
						</view>
					</view>
					<view class="list-right">
						<view class="right1">
							税额合计 :
						</view>
						<view class="right2">
							3.1415926
						</view>
					</view>
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
</script>

<style lang="less">
	.fp-wrapper {
		.fp-item {
			.item-title {
				height: 88upx;
				width: 100%;
				line-height: 88upx;
				text-align: center;
				border-bottom: 2upx solid #cbcbcb;
				font-size: 24upx;
			}
			.item-list{
				border-bottom: 2upx solid #cbcbcb;
				font-size: 24upx;
				.list1{
					margin: 26upx 0 0 21upx;
				}
				.list2{
					display: flex;
					margin: 43upx 0 16upx 21upx;
					.list-left{
						flex: 1;
						display: flex;
						justify-content: space-between;
						margin-right: 26upx;
					}
					.list-right{
						flex: 1;
						display: flex;
						justify-content: space-between;
						margin-right: 26upx;
					}
				}
			}
		}
	}
</style>
