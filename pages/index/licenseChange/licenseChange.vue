<template>
	<view class="company">

		<view class="content">
			<!-- 服务介绍 -->
			<view class="introduce">
				<view>
					<image src="../../../static/index/register/images/d4d00c8ceb569e9e2aede968d83d1415.jpg" class="image1"></image>
					<image src="../../../static/index/register/images/cabcb611c0b292e117dba0754fe68639.jpg" class="image1"></image>
					<image src="../../../static/index/register/images/bf7a54a68f0a8c5756cbfd244598bdc5.jpg" class="image1"></image>
					<image src="../../../static/index/register/images/d93c94a0457b43357c5c162f437a7254.jpg" class="image2"></image>
					<image src="../../../static/index/register/images/77097db6477763e503f0472dc887871d.jpg" class="image4"></image>
				</view>
			</view>

			<!-- 办理流程 -->
			<view class="content_block" id="service_flow">
				<view class="content_block_title">
					<view>办理流程</view>
				</view>
				<view class="content_block_content">
					<image src="../../../static/index/register/images/7735f6ea2db378e9fd3e2cc677df55c9.jpg" mode="" class="img_bar363"></image>
					<image src="../../../static/index/register/images/b1354c1e704dc9ad6d24be4f94d608dd.jpg" mode="" class="img_bar336"></image>
					<image src="../../../static/index/register/images/7f829acb0067503357a7ca20cfaf71b1.jpg" mode="" class="img_bar372"></image>
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
							<image src="../../../static/index/register/images/3adae5b08fe59f94e69d91263b.jpg" class="img-circle pull-left"
							 mode=""></image>
							<!-- <img class="img-circle pull-left" src="./images/9a5e66a3.jpg"> -->
							<view class="comment_title_right">
								<p class="comment_title_nick">小埔村
									<!-- <span class="pull-right">
										<i class="comment_title_star on"></i>
										<i class="comment_title_star on"></i>
										<i class="comment_title_star on"></i>
										<i class="comment_title_star on"></i>
										<i class="comment_title_star on"></i>
									</span> -->
								</p>
								<p class="comment_title_date">2018.07.09</p>
							</view>
						</view>
						<view class="comment_content">
							<p>注册猫的服务很贴心，合作了有段时间，咨询了很多问题都很耐心回答，感觉很正规可靠！</p>
						</view>
					</view>
				</view>
			</view>
			<!-- 客户评价end -->

			<!-- 相关服务 -->
			<view class="content_block service_related">
				<view class="content_block_title service_related_title">
					<h1>相关服务</h1>
				</view>
				<view class="content_block_content">
					<view class="service_related_contain clearfix">
						<view class="service_related_item">
							<a class="scale-1px" href="#">
								<image  src="../../../static/index/register/images/be4456a91c1910e501a2067169465b43.png" ></image>
								<!-- <img alt="" src="../../../static/index/register/images/be4456a91c1910e501a2067169465b43.png"> -->
								<span>注册公司</span>
							</a>
						</view>

						<view class="service_related_item">
							<a class="scale-1px" href="#">
								<image  src="../../../static/index/register/images/ef0e8990e800b8cb67a9d4aec870ed11.png" ></image>
								<!-- <img alt="" src="../../../static/index/register/images/ef0e8990e800b8cb67a9d4aec870ed11.png"> -->
								<span>银行业务</span>
							</a>
						</view>
					</view>
				</view>

			</view>
			<!-- 相关服务end -->
			
			<!-- 公司logo -->
			<view class="index_logo">
				<image src="../../../static/index/register/images/_logo.png" mode=""></image>
				<!-- <img src="./images/_logo.png"> -->
			</view>

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
				<a href="http://dct.zoosnet.net/LR/Chatpre.aspx?id=DCT13278969&amp;lng=cn&amp;r=%e7%a7%bb%e5%8a%a8" target="_blank">
					<view class="nav_btn">
						<span>在线咨询</span>
					</view>
				</a>
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
