<template>
	<view class="content">
		<view class="order-list">
			<view class="goods-detail" v-for="(item, key) in order" :key="key" v-if="item.order && item.order.items">
				<view class="order-item">
					<view class='cell-group'>
						<view class='cell-item'>
							<view class='cell-item-hd'>
								<view class='cell-hd-title'>售后单号：{{item.aftersales_id}}</view>
							</view>
							<view class='cell-item-ft'>
								<text class='cell-ft-text' v-if="item.status == 1">待审核</text>
								<text class='cell-ft-text' v-else-if="item.status == 2">审核通过</text>
								<text class='cell-ft-text' v-else-if="item.status == 3">审核拒绝</text>
							</view>
						</view>
					</view>
					<view class='img-list' v-if="item.order && item.order.items">
						<view class='img-list-item' v-for="(v, k) in item.order.items" :key="k" @click="showOrder(item.aftersales_id)">
							<image class='img-list-item-l little-img' :src='v.image_url' mode='aspectFill'></image>
							<view class='img-list-item-r little-right'>
								<view class='little-right-t'>
									<view class='goods-name list-goods-name'>{{v.name}}</view>
									<view class='goods-price'>￥{{v.price}}</view>
								</view>
								<view class='goods-item-c'>
									<view class='goods-buy'>
										<view class='goods-salesvolume' v-if="v.addon">{{v.addon}}</view>
										<view class='goods-num'>× {{v.nums}}</view>
									</view>
								</view>
							</view>
						</view>
					</view>
					<!-- <view class='cell-group'>
						<view class='cell-item'>
							<view class='cell-item-ft goods-num'>
								<text class='cell-ft-text'>合计<text class="red-price">￥{{item.order.order_amount}}（含运费￥{{item.order.cost_freight}})</text></text>
								<text class='cell-ft-text'>共计{{item.countnum}}件商品</text>
							</view>
						</view>
					</view> -->
					<view class='order-list-button'>
						<button class='btn btn-circle btn-b' @click="showOrder(item.aftersales_id)">查看详情</button>
					</view>
				</view>
			</view>
			<uni-load-more :status="loadStatus"></uni-load-more>
		</view>
	</view>
</template>

<script>
import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue'
export default {
	components: {
		uniLoadMore
	},
    data() {
        return {
			order: [], //订单列表
			page: 1, //当前页
			limit: 5, //每页显示几条
			loadStatus: 'more'
        }
    },
	onShow() {
		this.getOrderList();
	},
	onReachBottom () {
		if (this.loadStatus === 'more') {
			this.getOrderList()
		}
	},
	methods: {
		//获取订单数据
		getOrderList() {
			let data = {};
			this.loadStatus = 'loading'
			data['page'] = this.page;
			data['limit'] = this.limit;
			this.$api.afterSalesList(data, res => {
				let orderList = this.dataFormat(res.data.list);
				this.order = this.order.concat(orderList);
				this.page = res.data.page*1+1;
				let allpage = res.data.total_page;
				if(allpage < this.page){
					this.loadStatus = 'noMore'
				}else{
					this.loadStatus = 'more'
				}
			});
		},

		//数据格式处理
		dataFormat(data) {
			for (var i = 0; i < data.length; i++) {
				let countnum = 0
				if(data[i].order && data[i].order.items){
					for (var j = 0; j < data[i].order.items.length; j++) {
						countnum += data[i].order.items[j].nums;
					}
					data[i].countnum = countnum;
				}
			}
			return data;
		},

		//查看详情
		showOrder(aftersales_id) {
			this.$common.navigateTo('detail?aftersales_id=' + aftersales_id);
		}
	},
}
</script>

<style>
.segmented-control {
	width: 100%;
	background-color: #fff;
	position: fixed;
	top: 88upx;
	z-index: 999;
}
.segmented-control-item{
	line-height: 70upx;
}
.order-list{
	/* margin-top: 64upx; */
}
.order-item{
	margin-bottom: 20upx;
}
.img-list{
	margin-top: 2upx;
}
.cell-group,.img-list-item {
	background-color: #fff;
}
.cell-hd-title{
	font-size: 22upx;
	color: #666;
}
.cell-ft-text{
	top: 0;
	font-size: 22upx;
	color: #333;
}
.order-list-button{
	width: 100%;
	background-color: #fff;
	text-align: right;
	padding: 10upx 26upx;
}
.order-list-button .btn{
	height: 50upx;
	line-height: 50upx;
}
.order-list-button .btn-w{
	margin-left: 20upx;
}
.goods-num .cell-ft-text{
	color: #999;
}
.goods-num .cell-ft-text:first-child{
	margin-left: 10upx;
}
.order-none{
	text-align: center;
	padding: 200upx 0;
}
.order-none-img{
	width: 274upx;
	height: 274upx;
}
</style>
