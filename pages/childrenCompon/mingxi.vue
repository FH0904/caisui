<template>
	<view class="zc-wrapper">
		<!-- 日期选择 -->
		<view class="uni-list">
			<view class="line">
			</view>
			<picker mode="multiSelector" :range="arr" @change="arrChange" >
				<view class="uni-input" v-show="isShow">{{arr[0][arrindex[0]]}}年{{arr[1][arrindex[1]]}}月~{{arr[1][arrindex[1]]}}月</view>
				<view class="uni-input" v-show="isShow1">2019年9月~10月</view>
			</picker>
		</view>
		<!-- header -->
		<view class="mx-header">
			<text class="header-left">手机演示</text>
			<text class="header-right">单位 ：元</text>
		</view>
		
		<!-- 分段器 -->
		<uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" style-type="text" active-color="#fff"></uni-segmented-control>
		<view class="content">
			<view v-show="current === 0">
				<view class="mx-content">
					<view class="content-item">
						<view class="header">
							<text class="mx-header-left">科目: 库存现金  </text>
							<text class="mx-header-right">2019-10-01</text>
						</view> 
						<view class="item-list">
							<view class="list-item-left">
								<text class="l-item1">摘要</text>
								<text class="l-item2">本月合计</text>
							</view>
							<view class="list-item-right">
								<text class="r-item1">借方</text>
								<text class="r-item2">-</text>
							</view>
						</view>
						<view class="item-list">
							<view class="list-item-left">
								<text class="l-item1">方向</text>
								<text class="l-item2">借</text>
							</view>
							<view class="list-item-right">
								<text class="r-item1">贷方</text>
								<text class="r-item2">-</text>
							</view>
						</view>
						<view class="item-list active">
							<view class="list-item-left">
								<text class="l-item1"></text>
								<text class="l-item2"></text>
							</view>
							<view class="list-item-right ">
								<text class="r-item1">余额</text>
								<text class="r-item2">3.1415956</text>
							</view>
						</view>
					</view>
					
					
					<view class="content-item">
						<view class="header">
							<text class="mx-header-left">科目: 库存现金  </text>
							<text class="mx-header-right">2019-10-01</text>
						</view> 
						<view class="item-list">
							<view class="list-item-left">
								<text class="l-item1">摘要</text>
								<text class="l-item2">本月合计</text>
							</view>
							<view class="list-item-right">
								<text class="r-item1">借方</text>
								<text class="r-item2">-</text>
							</view>
						</view>
						<view class="item-list">
							<view class="list-item-left">
								<text class="l-item1">方向</text>
								<text class="l-item2">借</text>
							</view>
							<view class="list-item-right">
								<text class="r-item1">贷方</text>
								<text class="r-item2">-</text>
							</view>
						</view>
						<view class="item-list active">
							<view class="list-item-left">
								<text class="l-item1"></text>
								<text class="l-item2"></text>
							</view>
							<view class="list-item-right ">
								<text class="r-item1">余额</text>
								<text class="r-item2">3.1415956</text>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view v-show="current === 1">
				<view class="mx-content">
					<view class="content-item">
						<view class="header">
							<text class="mx-header-left">科目: 短期借款  </text>
							<text class="mx-header-right">2019-10-01</text>
						</view> 
						<view class="item-list">
							<view class="list-item-left">
								<text class="l-item1">摘要</text>
								<text class="l-item2">初期余额</text>
							</view>
							<view class="list-item-right">
								<text class="r-item1">借方</text>
								<text class="r-item2">-</text>
							</view>
						</view>
						<view class="item-list">
							<view class="list-item-left">
								<text class="l-item1">方向</text>
								<text class="l-item2">借</text>
							</view>
							<view class="list-item-right">
								<text class="r-item1">贷方</text>
								<text class="r-item2">-</text>
							</view>
						</view>
						<view class="item-list active">
							<view class="list-item-left">
								<text class="l-item1"></text>
								<text class="l-item2"></text>
							</view>
							<view class="list-item-right ">
								<text class="r-item1">余额</text>
								<text class="r-item2">3.1415956</text>
							</view>
						</view>
					</view>
					
					
					<view class="content-item">
						<view class="header">
							<text class="mx-header-left">科目: 库存现金  </text>
							<text class="mx-header-right">2019-10-01</text>
						</view> 
						<view class="item-list">
							<view class="list-item-left">
								<text class="l-item1">摘要</text>
								<text class="l-item2">本月合计</text>
							</view>
							<view class="list-item-right">
								<text class="r-item1">借方</text>
								<text class="r-item2">-</text>
							</view>
						</view>
						<view class="item-list">
							<view class="list-item-left">
								<text class="l-item1">方向</text>
								<text class="l-item2">借</text>
							</view>
							<view class="list-item-right">
								<text class="r-item1">贷方</text>
								<text class="r-item2">-</text>
							</view>
						</view>
						<view class="item-list active">
							<view class="list-item-left">
								<text class="l-item1"></text>
								<text class="l-item2"></text>
							</view>
							<view class="list-item-right ">
								<text class="r-item1">余额</text>
								<text class="r-item2">3.1415956</text>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view v-show="current === 2">
				<view class="mx-content">
					<view class="content-item">
						<view class="header">
							<text class="mx-header-left">科目: 实收资本  </text>
							<text class="mx-header-right">2019-10-01</text>
						</view> 
						<view class="item-list">
							<view class="list-item-left">
								<text class="l-item1">摘要</text>
								<text class="l-item2">初期余额</text>
							</view>
							<view class="list-item-right">
								<text class="r-item1">借方</text>
								<text class="r-item2">-</text>
							</view>
						</view>
						<view class="item-list">
							<view class="list-item-left">
								<text class="l-item1">方向</text>
								<text class="l-item2">借</text>
							</view>
							<view class="list-item-right">
								<text class="r-item1">贷方</text>
								<text class="r-item2">-</text>
							</view>
						</view>
						<view class="item-list active">
							<view class="list-item-left">
								<text class="l-item1"></text>
								<text class="l-item2"></text>
							</view>
							<view class="list-item-right ">
								<text class="r-item1">余额</text>
								<text class="r-item2">3.1415956</text>
							</view>
						</view>
					</view>
					
					
					<view class="content-item">
						<view class="header">
							<text class="mx-header-left">科目: 库存现金  </text>
							<text class="mx-header-right">2019-10-01</text>
						</view> 
						<view class="item-list">
							<view class="list-item-left">
								<text class="l-item1">摘要</text>
								<text class="l-item2">本月合计</text>
							</view>
							<view class="list-item-right">
								<text class="r-item1">借方</text>
								<text class="r-item2">-</text>
							</view>
						</view>
						<view class="item-list">
							<view class="list-item-left">
								<text class="l-item1">方向</text>
								<text class="l-item2">借</text>
							</view>
							<view class="list-item-right">
								<text class="r-item1">贷方</text>
								<text class="r-item2">-</text>
							</view>
						</view>
						<view class="item-list active">
							<view class="list-item-left">
								<text class="l-item1"></text>
								<text class="l-item2"></text>
							</view>
							<view class="list-item-right ">
								<text class="r-item1">余额</text>
								<text class="r-item2">3.1415956</text>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view v-show="current === 3">
				<view class="mx-content">
					<view class="content-item">
						<view class="header">
							<text class="mx-header-left">科目: 主营业务收入  </text>
							<text class="mx-header-right">2019-10-01</text>
						</view> 
						<view class="item-list">
							<view class="list-item-left">
								<text class="l-item1">摘要</text>
								<text class="l-item2">本月合计</text>
							</view>
							<view class="list-item-right">
								<text class="r-item1">借方</text>
								<text class="r-item2">-</text>
							</view>
						</view>
						<view class="item-list">
							<view class="list-item-left">
								<text class="l-item1">方向</text>
								<text class="l-item2">借</text>
							</view>
							<view class="list-item-right">
								<text class="r-item1">贷方</text>
								<text class="r-item2">-</text>
							</view>
						</view>
						<view class="item-list active">
							<view class="list-item-left">
								<text class="l-item1"></text>
								<text class="l-item2"></text>
							</view>
							<view class="list-item-right ">
								<text class="r-item1">余额</text>
								<text class="r-item2">3.1415956</text>
							</view>
						</view>
					</view>
					
					
					<view class="content-item">
						<view class="header">
							<text class="mx-header-left">科目: 库存现金  </text>
							<text class="mx-header-right">2019-10-01</text>
						</view> 
						<view class="item-list">
							<view class="list-item-left">
								<text class="l-item1">摘要</text>
								<text class="l-item2">本月合计</text>
							</view>
							<view class="list-item-right">
								<text class="r-item1">借方</text>
								<text class="r-item2">-</text>
							</view>
						</view>
						<view class="item-list">
							<view class="list-item-left">
								<text class="l-item1">方向</text>
								<text class="l-item2">借</text>
							</view>
							<view class="list-item-right">
								<text class="r-item1">贷方</text>
								<text class="r-item2">-</text>
							</view>
						</view>
						<view class="item-list active">
							<view class="list-item-left">
								<text class="l-item1"></text>
								<text class="l-item2"></text>
							</view>
							<view class="list-item-right ">
								<text class="r-item1">余额</text>
								<text class="r-item2">3.1415956</text>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view v-show="current === 4">
				<view class="mx-content">
					<view class="content-item">
						<view class="header">
							<text class="mx-header-left">科目: 生产成本  </text>
							<text class="mx-header-right">2019-10-01</text>
						</view> 
						<view class="item-list">
							<view class="list-item-left">
								<text class="l-item1">摘要</text>
								<text class="l-item2">本月合计</text>
							</view>
							<view class="list-item-right">
								<text class="r-item1">借方</text>
								<text class="r-item2">-</text>
							</view>
						</view>
						<view class="item-list">
							<view class="list-item-left">
								<text class="l-item1">方向</text>
								<text class="l-item2">借</text>
							</view>
							<view class="list-item-right">
								<text class="r-item1">贷方</text>
								<text class="r-item2">-</text>
							</view>
						</view>
						<view class="item-list active">
							<view class="list-item-left">
								<text class="l-item1"></text>
								<text class="l-item2"></text>
							</view>
							<view class="list-item-right ">
								<text class="r-item1">余额</text>
								<text class="r-item2">3.1415956</text>
							</view>
						</view>
					</view>
					
					
					<view class="content-item">
						<view class="header">
							<text class="mx-header-left">科目: 库存现金  </text>
							<text class="mx-header-right">2019-10-01</text>
						</view> 
						<view class="item-list">
							<view class="list-item-left">
								<text class="l-item1">摘要</text>
								<text class="l-item2">本月合计</text>
							</view>
							<view class="list-item-right">
								<text class="r-item1">借方</text>
								<text class="r-item2">-</text>
							</view>
						</view>
						<view class="item-list">
							<view class="list-item-left">
								<text class="l-item1">方向</text>
								<text class="l-item2">借</text>
							</view>
							<view class="list-item-right">
								<text class="r-item1">贷方</text>
								<text class="r-item2">-</text>
							</view>
						</view>
						<view class="item-list active">
							<view class="list-item-left">
								<text class="l-item1"></text>
								<text class="l-item2"></text>
							</view>
							<view class="list-item-right ">
								<text class="r-item1">余额</text>
								<text class="r-item2">3.1415956</text>
							</view>
						</view>
					</view>
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
		let day = date.getDate();
	
		if (type === 'start') {
			year = year - 60;
		} else if (type === 'end') {
			year = year + 2;
		}
		month = month > 9 ? month : '0' + month;;
		day = day > 9 ? day : '0' + day;
	
		return `${year}-${month}-${month}`;
	}
	export default {
		components: {
			uniSegmentedControl,
			uniCollapseItem,
			uniCollapse
		},
		data() {
			return {
				isShow: false,
				isShow1:true,
				items: ['资产', '负债', "权益", "损益","成本"],
				current: 0,
				date: getDate({
					format: true
				}),
				startDate: getDate('start'),
				endDate: getDate('end'),
				arr:[[2000,2001,2002,2003,2004,2005,2006,2007,2007,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020],[1,2,3,4,5,6,7,8,9,10,11,12],[1,2,3,4,5,6,7,8,9,10,11,12]],
				arrindex:[]
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
				this.arrindex = e.detail.value,
				this.isShow = true,
				this.isShow1 = false
			}
			
		}
	}
</script>

<style lang="less">
	// 时间
	.uni-list {
		position: fixed;
		top: 128upx;
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
	.mx-header{
		position: fixed;
		top: 210upx;
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
	
	.mx-content{
		margin-top: 300upx;
		font-size: 24upx;
		.content-item{
			.header{
				display: flex;
				align-items: center;
				justify-content: space-between;
				width: 100%;
				height: 60upx;
				background-color: #fafafa;
				color: #707070;
				font-size: 24upx;
				.mx-header-left{
					margin-left: 20upx;
				}
				.mx-header-right{
					margin-right: 20upx;
				}
			}
			.item-list{
				display: flex;
				margin-top: 26upx;
				width: 100%;
				color: #666;
				.list-item-left{
					flex: 1;
					.l-item1{
						margin-left: 64upx;
					}
					.l-item2{
						margin-left: 26upx;
					}
				}
				.list-item-right{
					display: flex;
					justify-content: space-between;
					flex: 1;
					.r-item2{
						margin-right: 26upx;
					}
				}				
			}
			.active{
				color: #4ca276;
				margin-bottom: 26upx;
			}
		}
	}
	
	
</style>
