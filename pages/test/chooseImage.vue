<template>
	<view class="chooseImage">
		<view class="j_header">
			图片上传界面,实现图片上传功能
		</view>
		<button type="primary" @click="a()">开始</button>
		<button type="primary" @click="b()">上传图片</button>
		
		<loading 
		ref="loading" 
		:custom="false" 
		:shadeClick="true"
		:type="1"
		@callback="callback()"
		></loading>
		
	</view>
</template>

<script>
	import loading from '../../components/xuan-loading/xuan-loading.vue'
	export default {
		data() {
			return {
				
			};
		},
		// 
		onLoad() {
			console.log('onload')
			
		},
		onShow() {
			console.log('onShow');
			
		},
		mounted() {
			this.open()
		},
		onPullDownRefresh() {
			setTimeout( () => {
				uni.stopPullDownRefresh()
				uni.showToast({
					title:"刷新完成",
					duration: 1000,
				})
			},300)
		},
		methods:{
			close() {
				this.$refs.loading.close();
			},
			open() {
				this.$refs.loading.open();
				setTimeout(() => {
					this.close()
				},2000)
			},
			callback() {
				console.log('关闭后的回调')
			},
			a() {
				this.open()
				setTimeout(() => {
					console.log('加载中')
				},2000)
				this.close()
			},
			b(){
				uni.chooseImage({
				    count: 6,
				    sizeType: ['original', 'compressed'],
				    sourceType: ['album'],
				    success: function(res) {
						console.log('点击')
						// 图片的本地文件路径列表
						console.log(res.tempFilePaths)
						
						// 图片的本地文件列表，每一项是一个file列表
						console.log('2')
						console.log(res.tempFiles)
						
				        // 预览图片
				        // uni.previewImage({
				        //     urls: res.tempFilePaths,
				        //     longPressActions: {
				        //         itemList: ['发送给朋友', '保存图片', '收藏'],
				        //         success: function(data) {
				        //             console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
				        //         },
				        //         fail: function(err) {
				        //             console.log(err.errMsg);
				        //         }
				        //     }
				        // });
				    }
				    });
			}
		},
		components: {
			loading
		}
		
	}
</script>

<style lang="less">
.chooseImage{
	width: 100%;
	background-color: skyblue;
	.j_header{
		
	}
}
</style>
