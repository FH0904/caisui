<template>
	<view class="company">

		<view class="content">
			<!-- 服务介绍 -->
			<view class="introduce">
				<view>
					<image src="../../../static/index/register/images/e948c91f2a54edbf8754776af113cede.jpg" class="image1"></image>
					<image src="../../../static/index/register/images/b0b113bafee8d1115f62f05b4b398d8c.jpg" class="image1"></image>
					<image src="../../../static/index/register/images/1225e4fb21a01ba444762342306d4aff.jpg" class="image1"></image>
					<image src="../../../static/index/register/images/24dee2acbe5fc1c79a63b9b8a2e92ba9.jpg" class="image1"></image>
					<image src="../../../static/index/register/images/6ec8b4147bcbd557ea8e960905e23075.jpg" class="image1"></image>
					<image src="../../../static/index/register/images/b1b3e23ff74e0479d0902d8e51d12677.jpg" class="image1"></image>
					<image src="../../../static/index/register/images/86164db9806046ecbddf0df9eec65abb.jpg" class="image622"></image>
				</view>
			</view>

			<!-- 办理流程 -->
			<view class="content_block" id="service_flow">
				<view class="content_block_title">
					<view>办理流程</view>
				</view>
				<view class="content_block_content">
					<image src="../../../static/index/register/images/30347851f4da8e5033a42a9a9b108482.jpg" mode="" class="img_bar"></image>
					<image src="../../../static/index/register/images/2a41d82fcc0a95dc504f7aec21f14984.jpg" mode="" class="img_bar"></image>
					<image src="../../../static/index/register/images/b1ab9fab8ea0d4f6769125f6a34564ae.jpg" mode="" class="img_bar"></image>
					<image src="../../../static/index/register/images/9ca25c05ff9cc5fc280b6b46681f4872.jpg" mode="" class="img_bar"></image>
				</view>
			</view>

			<!-- 客户评价 -->
			<view class="block pad_lr_15" id="service_comment">
				<view class="block_title border-1px">
					<view>客户评价
						<!-- <a href="http://m.zhuce-m.com/site/comment.html" class="block_title_a pull-right" style="display: block;">
							<span class="block_title_right">查看更多<i class="icon-v-right" style=""></i></span>
						</a> -->
					</view>
				</view>
				<view class="pad_b_15" id="comment_contain">
					<view class="comment_item">
						<view class="comment_title clearfix">
							<image src="../../../static/index/register/images/9a5e66a3.jpg" class="img-circle pull-left" mode=""></image>
							<!-- <img class="img-circle pull-left" src="./images/9a5e66a3.jpg"> -->
							<view class="comment_title_right">
								<p class="comment_title_nick">呼啦啦
									<!-- <span class="pull-right">
										<i class="comment_title_star on"></i>
										<i class="comment_title_star on"></i>
										<i class="comment_title_star on"></i>
										<i class="comment_title_star on"></i>
										<i class="comment_title_star on"></i>
									</span> -->
								</p>
								<p class="comment_title_date">2018.12.12</p>
							</view>
						</view>
						<view class="comment_content">
							<p>我在公交车上面看到了广告扫了二维码，咨询了注册公司事项，这家公司办事效率高，服务态度非常好，感谢注册猫公司为我解决了注册和税务难题。</p>
						</view>
					</view>
				</view>

			</view>

			<!-- 客户评价end -->



			<!-- 版权声明 -->
			<!-- <div class="index_copyright">受著作权法保护，翻版必究</div> -->

			<!-- 内容填充行 -->
			<div class="content_padding">
			</div>

		</view>
		<!-- 内容部分end -->


		<!-- 顶部导航 -->
		<div class="service_topnav" style="opacity: 1;">
			<div class="my_order_tab tab_contain flex_row">
				<div class="tab_item active" data-tabid="1">
					<div class="tab_item_link service_nav">服务介绍</div>
				</div>
				<div class="tab_item" data-tabid="2">
					<div class="tab_item_link service_nav">办理流程</div>
				</div>
				<div class="tab_item " data-tabid="3">
					<div class="tab_item_link service_nav">客户评价</div>
				</div>
			</div>
		</div>

		<!-- 底部内容 -->
		<view class="nav_footer nav_footer_bg">
			<view class="nav_icon_btn">
				<!-- <a href="http://m.zhuce-m.com/index.html"> -->
				<navigator url="../index" hover-class="none" open-type="switchTab">
					<view class="nav_icon_img">
						<image src="../../../static/index/register/images/_index_on.png" mode=""></image>
						<!-- <img src="./images/_index_on.png"> -->
					</view>
					<p class="nav_icon_text">首页</p>
				</navigator>
			</view>
			<view class="nav_icon_btn">
				<a href="http://m.zhuce-m.com/service-list.html">
					<view class="nav_icon_img">
						<image src="../../../static/index/register/images/_service_on.png" mode=""></image>
						<!-- <img src="./images/_service_on.png"> -->
					</view>
					<p class="nav_icon_text">更多服务</p>
				</a>
			</view>
			<view class="nav_icon_btn">
				<a href="tel:4000363168" target="_blank">
					<view class="nav_icon_img">
						<image src="../../../static/index/register/images/phone.png" mode=""></image>
						<!-- <img src="./images/phone.png"> -->
					</view>
					<p class="nav_icon_text">电话咨询</p>
				</a>
			</view>
			<view class="nav_btn_group">
				<!-- <a href="#" target="_blank"> -->
					<view class="nav_btn">
						<span>在线咨询</span>
					</view>
				<!-- </a> -->
			</view>
		</view>


	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style scoped>
	@import "../../../static/index/register/register.css"
</style>
