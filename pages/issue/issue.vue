<template>
	<view class="wrap">
		<!-- <view class="write_title">
			<input type="text" v-model="title" placeholder="请输入标题" />
		</view> -->
		<!-- 内容展示区 -->
		<!-- <view class="artList">

			<block v-for="(item, index) in artList" :key="index">
				<view class="item" v-if="item.type == 'image'">
					<image :src="item.content" :data-index="index" mode="widthFix" @tap="removeImg" />
				</view>
				<view class="item" v-if="item.type == 'text'">
					<textarea :value="item.content" placeholder="请输入内容...." v-model="artList[index].content" />
					<view :data-index="index" class="deleteText" @tap="deleteText">删除</view>
				</view>
			</block>
		</view> -->
		<!-- 输入区 -->
		<form @submit="submit(inputContent)">
			<view class="inputArea clearfix">
				<view class="addText">
					<textarea name="artText" maxlength="-1" v-model="title" placeholder="这一刻的想法..." class="textarea" />
					<!-- <button type="primary" form-type="submit">添加</button> -->
					<!-- <button type="primary" @click="getoken()">添加</button> -->
				</view>
				<!-- 添加图片区域 -->
				<view class="addImgBox">
					<!-- 选择中的图片显示 -->
					<block v-for="(item, index) in imgUrl" :key="index">
							<!-- <view class="item" v-if="item.type == 'image'">
								<image :src="item.content" :data-index="index" mode="aspectFill" @tap="removeImg"/>
							</view> -->
							<view class="item" v-if="imgUrl">
								<image :src="item" :data-index="index" mode="aspectFill" @tap="removeImg"/>
							</view>
							
							<!-- <view class="item" v-if="item.type == 'text'">
								<textarea :value="item.content" placeholder="请输入内容...." v-model="artList[index].content" class="textarea"/>
								<view :data-index="index" class="deleteText" @tap="deleteText">删除</view>
							</view> -->
					</block>
					<view class="addImg" @tap="addImg">+</view>
					
				</view>
			</view>
		</form>
		<!-- 选择分类 -->
		<!-- <view class="art-cate">
			<view>文章分类</view>
			<view class="">
				
				<picker mode="selector" :range="caties" @change="cateChange">
					<view>{{caties[currentCateIndex]}}</view>
				</picker>
			</view>
		</view> -->
		<!-- 提交按钮 -->
		<!-- <view class="submitNow" v-if="artList.length > 0" @tap="submitNow">发布文章</view> -->
		
		<view class="submitNow"  @tap="submitNow">发布文章</view>
	</view>
</template>

<script>
	// loginRes:登录后保存的变量
	var _self, loginRes;
	// var signModel = require('../../commons/sign.js');
	export default {
		data() {
			return {
				title: '',
				// 文章核心内容区域
				artList : [],
				// 用户输入的内容
				inputContent : "",
				
				
				needUploadImg : [],
				uploadIndex : 0,
				//分类
				caties : ['点击选择'],
				currentCateIndex : 0,
				catiesFromApi : [],
				// 记录真实选择的api接口数据的分类id
				sedCateIndex  : 0,
				imgUrl: [],
				token: ''
			}
		},
		onLoad: function() {
			_self = this;
			this.getoken()
		},
		methods:{
			// 获取token
			getoken() {
				this.token = uni.getStorageSync('userToken');
				// console.log(this.token)
			},
			
			// 接口：http://deve.tianlwl.com/api.html&method=pages.addmoments
			// 发布功能
			submitNow(){
				if(this.title.length < 1){uni.showToast({title:'请输入内容', icon:"none"}); return ;};
				// if(this.imgUrl.length < 1){uni.showToast({title:'请添加图片', icon:"none"}); return ;};
				uni.request({
					url: 'http://deve.tianlwl.com/api.html&method=pages.addmoments',
					method: 'POST',
					header: {'content-type' : "application/x-www-form-urlencoded"},
					data:{
						title  : _self.title,
						images: _self.imgUrl,
						token: _self.token
						// content : JSON.stringify(_self.artList),
						// uid     : loginRes[0],
						// random  : loginRes[1],
						// cate    : _self.sedCateIndex,
						// sign    : sign
					},
					success:function(res){
						console.log(123)
						console.log(res)
						console.log(_self.imgUrl)
						if(res.data.status){
							
							uni.showToast({title:"提交成功", icon:"none"});
							// _self.artList = [];
							// 清空数据
							// signModel.sign(_self.apiServer);
							// 防止数据缓存
							// _self.currentCateIndex = 0;
							// _self.sedCateIndex     = 0;
							// _self.needUploadImg    = [];
							// _self.title            = '';
							setTimeout(function(){
								uni.switchTab({
									url:'../ring/index'
								})
							}, 1000);
						}else{
							console.log("失败了")
							console.log(res)
							uni.showToast({title:res.data.msg, icon:"none"});
						}
					}
				});
			},
			
			// 源码上的实现上传图片
			addImg() {
				// 自己写的
				
				uni.chooseImage({
					
					
					success: (chooseImageRes) => {
							uni.showLoading({title: "加载中"})
					        const tempFilePaths = chooseImageRes.tempFilePaths;
					        uni.uploadFile({
					            url: 'http://deve.tianlwl.com/api.html', //仅为示例，非真实的接口地址
					            filePath: tempFilePaths[0],
					            fileType: 'image',
					            name: 'file',
					            headers: {
					            	'Accept': 'application/json',
					            	'Content-Type': 'multipart/form-data',
					            },
					            formData: {
					            	'method': 'images.upload',
					            	'upfile': tempFilePaths[0]
					            },
					            success: (res) => {
									var res = JSON.parse(res.data)
									console.log(res)
									if (res.status) {
										console.log(1)
										let avatar = res.data.url // 上传成功的图片地址
										
										_self.imgUrl.push(avatar)
										
										console.log(_self.imgUrl)
										}
					            	
					            	
					            },
					            fail: (error) => {
					            	if (error && error.response) {
					            		showError(error.response);
					            	}
					            },
					            complete: () => {
					            	setTimeout(function() {
					            		uni.hideLoading();
					            	}, 250);
					            }
					        });
					    }
				})
				
				// this.$api.uploadFiles((res) => {
				// 	// console.log(res)
				// 	// 图片的地址
				// 	if (res.status) {
				// 		let avatar = res.data.url
				// 		_self.imgUrl.push(avatar)
				// 		}
				// 	
				// })
				// console.log(this.imgUrl)
			},
			// 上传图片end
			
			
			
			
			
			// 分类数据的选择
			cateChange : function(e){
				var sedIndex = e.detail.value;
				this.currentCateIndex = sedIndex;
				// 获取选择的分类名称
				if(sedIndex < 1){return ;}
				var cateName = this.caties[sedIndex];
				for(var k in this.catiesFromApi){
					if(cateName == this.catiesFromApi[k]){
						this.sedCateIndex = k;
						break;
					}
				}
				this.currentCateIndex = sedIndex;
			},
			// 删除图片
			removeImg : function(e){
				console.log(e)
				var index = e.currentTarget.dataset.index;
				uni.showModal({
					content:"确定要删除此图片吗",
					title:'提示',
					success(e) {
						if (e.confirm) {
							_self.imgUrl.splice(index, 1);
						}
					}
				});
			},
			// 删除文本
			deleteText : function(e){
				var index = e.currentTarget.dataset.index;
				uni.showModal({
					content:"确定要删除吗",
					title:'提示',
					success(e) {
						if (e.confirm) {
							_self.artList.splice(index, 1);
						}
					}
				});
			},
			
			
			submitNow1 : function(){
				this.submit(this.inputContent)
				// 数据验证
				// if(this.title.length < 2){uni.showToast({title:'请输入标题', icon:"none"}); return ;}
				if(this.inputContent < 1){uni.showToast({title:'请写文章内容', icon:"none"}); return ;};
				if(this.artList.length < 2){uni.showToast({title:'请添加图片', icon:"none"}); return ;};
				
				// this.inputContent = '';
				// if(this.sedCateIndex < 1){uni.showToast({title:'请选择分类', icon:"none"}); return ;}
				// 上传图片 一次一个多次上传 [ 递归函数 ]
				// 上传完成后整体提交数据
				// 首先整理一下需要上传的图片
				// this.needUploadImg = [{tmpurl : 临时地址, index : 数据索引}]
				this.needUploadImg = [];
				
				for(var i = 0; i < this.artList.length; i++){
					if(this.artList[i].type == 'image'){
						this.needUploadImg.push({"tmpurl" : this.artList[i].content , "indexID" : i});
					}
				}
				console.log('需要上传图片内容列表:'+ this.needUploadImg);
				this.uploadImg();
			},
			
			// 上传图片
			uploadImg : function(){
				// 如果没有图片 或者已经上传完成 则执行提交
				if(this.needUploadImg.length < 1 || this.uploadIndex >=  this.needUploadImg.length){
					//
					uni.showLoading({title:"正在提交"});
					
					// setTimeout(function() {uni.showToast({title:"提交成功", icon:"none"});}, 2000);
					uni.request({
						url: 'http://deve.tianlwl.com/api.html&method=pages.addmoments',
						method: 'POST',
						data: {
							title: _self.title,
							
						},
						success: res => {
							
						},
						fail: () => {},
						complete: () => {}
					});
					// var sign = uni.getStorageSync('sign');
					// 	uni.request({
					// 		url: this.apiServer + 'art&m=add',
					// 		method: 'POST',
					// 		header: {'content-type' : "application/x-www-form-urlencoded"},
					// 		data:{
					// 			title   : _self.title,
					// 			content : JSON.stringify(_self.artList),
					// 			uid     : loginRes[0],
					// 			random  : loginRes[1],
					// 			cate    : _self.sedCateIndex,
					// 			sign    : sign
					// 		},
					// 		success:function(res){
					// 			if(res.data.status == 'ok'){
					// 				uni.showToast({title:"提交成功", icon:"none"});
					// 				_self.artList = [];
					// 				// 清空数据
					// 				signModel.sign(_self.apiServer);
					// 				// 防止数据缓存
					// 				_self.currentCateIndex = 0;
					// 				_self.sedCateIndex     = 0;
					// 				_self.needUploadImg    = [];
					// 				_self.title            = '';
					// 				setTimeout(function(){
					// 					uni.switchTab({
					// 						url:'../my/my'
					// 					})
					// 				}, 1000);
					// 			}else{
					// 				uni.showToast({title:res.data.data, icon:"none"});
					// 			}
					// 		}
						// });
						
					
				}else{
					// 上传图片
					uni.showLoading({title:"上传图片"});
					console.log('needuploading')
					console.log(this.needUploadImg)
					// setTimeout(function() {uni.showToast({title:"上传成功!", icon:"none"});}, 1000);
					var uploader = uni.uploadFile({
						url      : 'http://deve.tianlwl.com/api.html&method=pages.addmoments',
						// url      : _self.apiServer + 'uploadimg',
						filePath : _self.needUploadImg[_self.uploadIndex].tmpurl,
						name     : 'file',
						success: (uploadFileRes) => {
							console.log(uploadFileRes);
							uploadFileRes = JSON.parse(uploadFileRes.data);
							if(uploadFileRes.status != 'ok'){
								uni.showToast({title:"上传图片失败,请重试!", icon:"none"});
								return false;
							}
							// 将已经上传的文件地址赋值给文章数据
							var index = _self.needUploadImg[_self.uploadIndex].indexID;
							_self.artList[index].content = _self.staticServer + uploadFileRes.data;
							_self.uploadIndex ++;
							// 递归上传
							setTimeout(function(){_self.uploadImg();}, 1000);
						},
						fail: (e) => {
							console.log(e);
							uni.showToast({title:"上传图片失败,请重试!", icon:"none"});
						}
					})
				
				
				}
			},
			
			submit : function(inputContent){
				console.log(inputContent)
				// console.log(res.detail.value.artText)
				// var content = res.detail.value.artText;
				// if(inputContent < 1){uni.showToast({title:'请输入内容', icon:"none"}); return ;}};
				
				for(var i = 0; i < this.artList.length; i++){
					if(this.artList[i].type == 'text'){
						this.artList.splice(i,1)
					}
				}
				this.artList.push({"type":"text", "content" : inputContent});
				// 先清除之前列表中text的内容，再添加
				console.log(this.artList)
				// this.inputContent = '';
			},
			// 添加图片
			addImg1 : function(){
				uni.chooseImage({
					count: 1,
					sizeType: ['compressed'],
					success: function(res) {
						// console.log(res.tempFilePaths)
						// 这个就是图片的位置，图片的本地文件路径列表
						// console.log(res.tempFilePaths[0])
						_self.artList.push({"type":"image", "content" : res.tempFilePaths[0]})
						// console.log("artList:",_self.artList)
						// console.log(res.tempFilePaths)
					}
				})
			}
		}
		
	}
</script>

<style lang="less" scoped>
	.issue{
		width: 100%;
		// text-align: center;
		margin: 0 auto;
		.write_title{
			width: 90%;
			// text-align: center;
			input{
				border: 1px solid #000;
			}
		}
	}
</style>
