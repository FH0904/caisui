<template>
	<view class="lr-wrapper">
		<!-- 日期选择 -->
		<view class="uni-list">
			<view class="line">
			</view>
			<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange" fields="month">
				<view class="uni-input">{{date}}</view>
			</picker>
		</view>
		<!-- header -->
		<view class="lr-header">
			<text class="header-left">手机演示</text>
			<text class="header-right">单位 ：元</text>
		</view>
		<!-- list -->
		<view class="lr-list">
			<view class="left">
				项目
			</view>
			<view class="right">
				<text>期末余额</text>
				<text class="active">年初余额</text>
			</view>
		</view>
		
		<view class="lr-content">
			<uni-collapse accordion="true" >
			    <uni-collapse-item title="流动资产:" :showAnimation="true" >
			        <view>
			            <view class="list-item1 active">
			            	<view class="left">
			            		货币资金
			            	</view>
			            	<view class="right">
			            		<text class="item-1">301,492,354.69</text>
			            		<text class="item-2">301,492,354.69</text>
			            	</view>
			            </view>
			            
			            <view class="list-item1 active">
			            	<view class="left">
			            		短期投资
			            	</view>
			            	<view class="right">
			            		<text class="item-1">301,492,354.69</text>
			            		<text class="item-2">301,492,354.69</text>
			            	</view>
			            </view>
			            
			            <view class="list-item1 active">
			            	<view class="left">
			            		应收票据
			            	</view>
			            	<view class="right">
			            		<text class="item-1">301,492,354.69</text>
			            		<text class="item-2">301,492,354.69</text>
			            	</view>
			            </view>
			            
			            <view class="list-item1 active">
			            	<view class="left">
			            		应收账款
			            	</view>
			            	<view class="right">
			            		<text class="item-1">301,492,354.69</text>
			            		<text class="item-2">301,492,354.69</text>
			            	</view>
			            </view>
			            
			            <view class="list-item active">
			            	<text class="left">预付款项</text>
			            	<text></text>
			            </view>
						<view class="list-item active">
							<text class="left">应收股利</text>
							<text></text>
						</view>
						<view class="list-item active">
							<text class="left">应收利息</text>
							<text></text>
						</view>
						
						<view class="list-item1 active">
							<view class="left">
								其他应收款
							</view>
							<view class="right">
								<text class="item-1">301,492,354.69</text>
								<text class="item-2">301,492,354.69</text>
							</view>
						</view>
						<view class="list-item1 active">
							<view class="left">
								存货
							</view>
							<view class="right">
								<text class="item-1">301,492,354.69</text>
								<text class="item-2">301,492,354.69</text>
							</view>
						</view>
						<view class="list-item active">
							<text class="left">其他流动资产</text>
							<text></text>
						</view>
			        </view>
			    </uni-collapse-item>
			</uni-collapse>
			
			<view class="list-item1">
				<view class="left">
					流动资产合计
				</view>
				<view class="right">
					<text class="item-1">301,492,354.69</text>
					<text class="item-2">301,492,354.69</text>
				</view>
			</view>
			
			<uni-collapse accordion="true" >
			    <uni-collapse-item title="非流动资产:" :showAnimation="true" >
			        <view>
			            <view class="list-item1 active">
			            	<view class="left">
			            		长期债券投资
			            	</view>
			            	<view class="right">
			            		<text class="item-1"></text>
			            		<text class="item-2"></text>
			            	</view>
			            </view>
			            
			            <view class="list-item active">
			            	<text class="left">长期股权投资</text>
			            	<text></text>
			            </view>
			            
			            <view class="list-item1 active">
			            	<view class="left">
			            		固定资产原价
			            	</view>
			            	<view class="right">
			            		<text class="item-1">99999</text>
			            		<text class="item-2">3.1415926</text>
			            	</view>
			            </view>
			            
			            <view class="list-item1 active">
			            	<view class="left">
			            		减:累计折旧
			            	</view>
			            	<view class="right">
			            		<text class="item-1">3.1415926</text>
			            		<text class="item-2">3.1415926</text>
			            	</view>
			            </view>
			            
			            <view class="list-item1 active">
			            	<view class="left">
			            		固定资产账面价值
			            	</view>
			            	<view class="right">
			            		<text class="item-1">3.1415926</text>
			            		<text class="item-2">3.1415926</text>
			            	</view>
			            </view>
						<view class="list-item active">
							<text class="left">在建工程</text>
							<text></text>
						</view>
						<view class="list-item active">
							<text class="left">工程物资</text>
							<text></text>
						</view>
						<view class="list-item active">
							<text class="left">固定资产清理</text>
							<text></text>
						</view>
						<view class="list-item1 active">
							<view class="left">
								生产性生物资产
							</view>
							<view class="right">
								<text class="item-1">3.1415926</text>
								<text class="item-2">3.1415926</text>
							</view>
						</view>
						<view class="list-item1 active">
							<view class="left">
								无形资产
							</view>
							<view class="right">
								<text class="item-1">3.1415926</text>
								<text class="item-2">3.1415926</text>
							</view>
						</view>
						<view class="list-item active">
							<text class="left">长期待摊费用</text>
							<text></text>
						</view>
						<view class="list-item active">
							<text class="left">其他非流动资产</text>
							<text></text>
						</view>
			        </view>
			    </uni-collapse-item>
			</uni-collapse>
			
			<view class="list-item1">
				<view class="left">
					非流动资产合计
				</view>
				<view class="right">
					<text class="item-1">0.00</text>
					<text class="item-2">0.00</text>
				</view>
			</view>
			
			<view class="list-item1">
				<view class="left">
					资产总计
				</view>
				<view class="right">
					<text class="item-1">301,492,354.69</text>
					<text class="item-2">301,492,354.69</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniSegmentedControl from "../../components/comment/uni-segmented-control/uni-segmented-control.vue"
	import uniCollapseItem from "../../components/Example1/uni-collapse-item/uni-collapse-item.vue"
	import uniCollapse from "../../components/Example1/uni-collapse/uni-collapse.vue"
	
	function getDate(type) {
		const date = new Date();
	
		let year = date.getFullYear();
		let month = date.getMonth() + 1;
	
		if (type === 'start') {
			year = year - 60;
		} else if (type === 'end') {
			year = year + 2;
		}
		month = month > 9 ? month : '0' + month;;
	
		return `${year}-${month}`;
	}
	export default {
		components: {
			uniSegmentedControl,
			uniCollapseItem,
			uniCollapse
		},
		data() {
			return {
				items: ['资产', '负债和权益'],
				current: 0,
				date: getDate({
					format: true
				}),
				startDate: getDate('start'),
				endDate: getDate('end'),
			}
		},
		methods: {
			onClickItem(index) {
				if (this.current !== index) {
					this.current = index;
				}
			},
			bindDateChange: function(e) {
				this.date = e.target.value
			},
			arrChange(e){
				this.arrindex = e.detail.value
			}
			
		}
	}
</script>

<style lang="less">
	// 时间
	.uni-list {
		position: fixed;
		top: 0upx;
		width: 100%;
		z-index: 10;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 90upx;
		font-size: 28upx;
		background-color: #f6f6f7;
	
		.line {
			position: relative;
			top: 0;
			width: 22upx;
			height: 4upx;
			background-color: #9f9fa0;
			margin-right: 10upx;
			box-shadow: 0px 5px 0px #9f9fa0;
	
			&::before {
				content: '';
				position: absolute;
				top: -5px;
				width: 22upx;
				height: 4upx;
				background: #9f9fa0;
			}
		}
	}
	
	//公共header
	.lr-header{
		position: fixed;
		top: 82upx;
		left: 0;
		right: 0;
		height: 90upx;
		width: 100%;
		background-color: #f0f0f3;
		font-size: 28upx;
		line-height: 90upx;
		z-index: 10;
		
		.header-left {
			position: absolute;
			left: 35upx;
		}
		
		.header-right {
			position: absolute;
			right: 35upx;
			color: #4382ff;
		}
	}
	
	//公共list
	.lr-list{
		position: fixed;
		top: 170upx;
		left: 0;
		right: 0;
		z-index: 20;
		display: flex;
		align-items: center;
		font-size: 28upx;
		color: #4182ff;
		height: 90upx;
		background-color: #f2f5f5;
		.left{
			flex: 1;
			margin-left:  36upx;
		}
		.right{
			flex: 1.2;
			display: flex;
			text{
				flex: 1;
			}
			.active{
				display: flex;
				justify-content: flex-end;
				margin-right: 34upx;
			}
		}
	}
	
	// 折叠面板
	.uni-collapse{
		margin-left: 32upx;
		padding-right: 10upx;
		font-size: 20upx;
		.list-item{
			display: flex;
			align-items: center;
			height: 89upx;
			margin-left: 0upx;
			font-size: 24upx;
			border-bottom: 2upx solid #f0f0f3;
			.left{
				margin-left:10upx;
			}
		}
		.list-item1{
			display: flex;
			align-items: center;
			height: 89upx;
			margin-left: 0upx;
			font-size: 24upx;
			border-bottom: 2upx solid #f0f0f3;
			.left{
				flex: 1;
				margin-left:10upx;
			}
			.right{
				flex: 1.3 ;
				display: flex;
				.item-1{
					flex: 1;
					display: flex;
					justify-content: flex-end;
					margin-right: 40upx;
				}
				.item-2{
					flex: 1;
					display: flex;
					justify-content: flex-end;
					margin-right: 72upx;
				}
			}
		}
		.active{
			color: #4283fc;
		}
	}
	
	.list-item{
		display: flex;
		align-items: center;
		height: 89upx;
		margin-left: 32upx;
		font-size: 24upx;
		border-bottom: 2upx solid #f0f0f3;
		.left{
			flex: 1;
			margin-left:10upx;
		}
		.pic{
			width: 60upx;
			height: 100%;
			display: flex;
			align-items: center;
			image{
				flex: 1;
				width: 30upx;
				height: 30upx;
				margin-right: 10upx;
			}
		}
	}
	.list-item1{
		display: flex;
		align-items: center;
		height: 89upx;
		margin-left: 32upx;
		font-size: 24upx;
		border-bottom: 2upx solid #f0f0f3;
		.left{
			flex: 1;
			margin-left:10upx;
		}
		.right{
			flex: 1.3 ;
			display: flex;
			.item-1{
				flex: 1;
				display: flex;
				justify-content: flex-end;
				margin-right: 40upx;
			}
			.item-2{
				flex: 1;
				display: flex;
				justify-content: flex-end;
				margin-right: 34upx;
			}
		}
	}
	.lr-content{
		margin-top: 248upx;
	}
</style>
