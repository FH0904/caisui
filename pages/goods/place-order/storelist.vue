<template>
	<view class="content">
		<view class='search'>
			<view class='search-c'>
				<image class='icon search-icon' src='../../../static/image/zoom.png'></image>
				<input class='search-input' placeholder-class='search-input-p' placeholder='请输入门店名' v-model="key"></input>
			</view>
			<button class="btn btn-g" hover-class="btn-hover2" @click="storeSearch">搜索</button>
		</view>
		<view class='cell-group margin-cell-group'>
			<view class='cell-item add-title-item right-img' v-for="(item, key) in storeList" :key="key" @click="selectStore(item.id, item.store_name, item.mobile, item.all_address)">
				<view class="cell-item-hd">
					<image class='cell-hd-icon' src='../../../static/image/homepage.png'></image>
				</view>
				<view class='cell-item-bd'>
					<view class="cell-bd-view black-text">
						<text class="cell-bd-text">{{item.store_name}}</text>
					</view>
					<view class="cell-bd-view">
						<text class="cell-bd-text">电话：{{item.mobile}}</text>
					</view>
					<view class="cell-bd-view">
						<text class="cell-bd-text">地址：{{item.all_address}}</text>
					</view>
				</view>
				<view class='cell-item-ft'>
					<image class='cell-ft-next icon' src='../../../static/image/location.png'></image>
					<text class="cell-ft-text color-9">{{item.distance}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data () {
			return {
				storeList: [],
				key: '',
				longitude: '',
				latitude: '',
			}
		},
		onShow () {
			this.getStoreList();
		},
		methods: {
			//门店搜索
			storeSearch(){
				this.getStoreList();
			},
			//获取门店列表
			getStoreList(){
				let _this = this;
				uni.getLocation({
					type: 'gcj02',
					success: function (res) {
						_this.longitude = res.longitude;
						_this.latitude = res.latitude;
					},
					complete: function (res) {
						let data = {
							'key': _this.key,
							'longitude': _this.longitude,
							'latitude': _this.latitude
						}
						_this.$api.storeList(data, e => {
							_this.storeList = e.data;
						});
					}
				});
			},
			//门店选择
			selectStore(id, name, mobile, address){
				let pages = getCurrentPages()
				let pre = pages[pages.length - 2]
				let store = {};
				store['id'] = id;
				store['name'] = name;
				store['mobile'] = mobile;
				store['address'] = address;
				
				// #ifdef MP-ALIPAY
				pre.rootVM.store = store;
				// #endif

				// #ifdef MP-WEIXIN || APP-PLUS || APP-PLUS-NVUE
				pre.$vm.store = store
				// #endif
				
				// #ifdef H5 
				pre.store = store
				// #endif
				
				uni.navigateBack({
					delta: 1
				});
			}
		}
	}
</script>

<style>
.search{
	display: flex;
}
.search-c{
	width: 80%;
	margin-right: 2%;
}
.search-icon{
	left: 30upx;	
}
.search-input {
	padding: 10upx 30upx 10upx 90upx;
}
.search-input-p{
	padding: 0 !important;
}
.search .btn{
	width: 18%;
	border: none;
	background-color: #f1f1f1;
	font-size: 28upx;
	color: #333;
	border-radius: 6upx;
	line-height: 72upx;
}
.add-title-item .cell-item-hd {
	min-width: 50upx;
	color: #666;
	font-size: 28upx;
}
.cell-bd-view {
	margin-bottom: 6upx;
}
.cell-bd-view .cell-bd-text{
	font-size: 22upx;
	color: #999;
}
.black-text .cell-bd-text{
	font-size: 28upx;
	color: #333;	
}
</style>
