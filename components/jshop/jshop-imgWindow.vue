<template>
	<view class="imgwindow bottom-cell-group">
		<view class="imgwindow-list" v-if="data.params.style == '2' ||data.params.style == '3' ||data.params.style == '4'"
		 v-bind:class="'row'+data.params.style" :style="{margin:-padding+'px'}">
			<view class="imgwindow-item" ref="imgwitem" :style="{height:height+'px',padding:padding+'px'}" v-for="(item, index) in data.params.list"
			 :key="index">
				<image :src="item.image" mode="aspectFill" @click="showSliderInfo(item.linkType, item.linkValue)"></image>
			</view>
		</view>
		<view class="imgwindow-list" v-if="data.params.style == '0'" v-bind:class="'row'+data.params.style" :style="{margin:-padding+'px'}">
			<view class="imgwindow-item" ref="imgwitem" :style="{height:height+'px',padding:padding+'px'}" v-for="(item, index) in data.params.list"
			 :key="index" v-if="index == 0">
				<image :src="item.image" mode="aspectFill" @click="showSliderInfo(item.linkType, item.linkValue)"></image>
			</view>
			<view class="imgwindow-item" ref="imgwitem" :style="{height:height1+'px',padding:padding+'px'}" v-for="(item, index) in data.params.list"
			 :key="index" v-if="index !== 0">
				<image :src="item.image" mode="aspectFill" @click="showSliderInfo(item.linkType, item.linkValue)"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "jshopimgwindow",
		props: {
			data: {
				// type: Object,
				required: true,
			}
		},
		data() {
			return {
				height: '',
				height1: '',
				padding: '3'
			}
		},
		mounted() {
			// #ifdef H5 || APP-PLUS || APP-PLUS-NVUE
			var view = uni.createSelectorQuery().in(this).select(".imgwindow-item");
			view.boundingClientRect(data => {
				this.height = data.width;
				// 橱窗小图高度
				this.height1 = data.width / 2;
			}).exec();
			// #endif

			// #ifdef MP-ALIPAY
			var view = uni.createSelectorQuery().select(".content").boundingClientRect().exec(data => {
				this.height1 = data[0].width / 4;
				if (this.data.params.style == '3') {
					this.height = data[0].width / 3;
				} else if (this.data.params.style == '2') {
					this.height = data[0].width / 2;
				} else if (this.data.params.style == '4') {
					this.height = data[0].width / 4;
				} else if (this.data.params.style == '0') {
					this.height = data[0].width / 2;
				}
			});
			// #endif

			// #ifdef MP-WEIXIN

			var view = uni.createSelectorQuery().select(".content");

			view.boundingClientRect(data => {

				this.height1 = data.width / 4;
				if (this.data.params.style == '3') {
					this.height = data.width / 3;
				} else if (this.data.params.style == '2') {
					this.height = data.width / 2;
				} else if (this.data.params.style == '4') {
					this.height = data.width / 4;
				} else if (this.data.params.style == '0') {
					this.height = data.width / 2;
				}
			}).exec();
			// #endif
		},
		methods: {
			showSliderInfo(type, val) {
				if (type == 1) {
					if (val.indexOf('http') != -1) {
						// #ifdef H5 
						window.location.href = val
						// #endif
					} else {
						// #ifdef H5 || APP-PLUS || APP-PLUS-NVUE || MP
						if (val == '/pages/classify/classify' || val == '/pages/cart/index/index' || val == '/pages/member/index/index') {
							uni.switchTab({
								url: val
							});
							return;
						} else {
							this.$common.navigateTo(val);
							return;
						}
						// #endif
					}
				} else if (type == 2) {
					// 商品详情
					this.goodsDetail(val)
				} else if (type == 3) {
					// 文章详情
					this.$common.navigateTo('/pages/article/index?id=' + val +'&id_type=1')
				} else if (type == 4) {
					// 文章列表
					this.$common.navigateTo('/pages/article/list?cid=' + val)
				} else if (type == 5) {
					//智能表单 
					this.$common.navigateTo('/pages/form/detail/form?id=' + val)
				}
			},
			//跳转到商品详情页面
			goodsDetail: function(id) {
				let url = '/pages/goods/index/index?id=' + id;
				this.$common.navigateTo(url);
			},
		}
	}
</script>

<style>
	.imgwindow {
		width: 100%;
	}

	.imgwindow-list {
		overflow: hidden;
		/* margin: -16upx; */
	}

	/* 堆积两列 */
	.imgwindow-list .imgwindow-item {
		height: auto;
		float: left;
		/* padding: 8upx; */
	}

	.imgwindow-list .imgwindow-item image {
		width: 100%;
		height: 100%;
	}

	.imgwindow-list.row0 .imgwindow-item:first-child {
		width: 50%;
	}

	.imgwindow-list.row0 .imgwindow-item:nth-child(2) {
		width: 50%;
	}

	.imgwindow-list.row0 .imgwindow-item:nth-child(3),
	.imgwindow-list.row0 .imgwindow-item:nth-child(4) {
		width: 25%;

	}

	.imgwindow-list.row2 .imgwindow-item {
		width: 50%;
	}

	.imgwindow-list.row3 .imgwindow-item {
		width: 33.3%;
	}

	.imgwindow-list.row4 .imgwindow-item {
		width: 25%;
	}
</style>
