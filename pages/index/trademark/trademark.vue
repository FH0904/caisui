<template>
	<view class="company">

		<view class="content">
			<!-- 服务介绍 -->
			<view class="introduce">
				<view>
					<image src="../../../static/index/register/images/46791c23ff8abab413fdaa918baa5115.jpg" class="image1"></image>
					<image src="../../../static/index/register/images/0d5f6e3e38d63877c5f94f19ccf14d8d.jpg" class="image1"></image>
					<image src="../../../static/index/register/images/88fcb8c3f236afc680446f1df26b01b7.jpg" class="image1"></image>
					<image src="../../../static/index/register/images/cbe85cc000692e398dfd9332cceeaecd.jpg" class="image2"></image>
					<image src="../../../static/index/register/images/00402428ebf974fa7c8aa4a09ff42d2c.jpg" class="image4"></image>
				</view>
			</view>

			<!-- 办理流程 -->
			<view class="content_block" id="service_flow">
				<view class="content_block_title">
					<view>办理流程</view>
				</view>
				<view class="content_block_content">
					<image src="../../../static/index/register/images/42e43135097bf765ba56ec7d60d3376a.jpg" mode="" class="img_bar363"></image>
					<image src="../../../static/index/register/images/018dd806d751bc533bb1e25fc7cc66ee.jpg" mode="" class="img_bar336"></image>
					<image src="../../../static/index/register/images/b5b98ac95a6d5cdb79240b97f9b95fab.jpg" mode="" class="img_bar372"></image>
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
							<image src="../../../static/index/register/images/8595e88eabe5a682e69c9fe958.jpg" class="img-circle pull-left"
							 mode=""></image>
							<!-- <img class="img-circle pull-left" src="./images/9a5e66a3.jpg"> -->
							<view class="comment_title_right">
								<p class="comment_title_nick">启明融资
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
							<p>第一次创业，想注册公司，找了很多财务公司，各个公司，说的都有理，自己也被弄糊了，后来找到注册猫，第一次用手机扫二维码就能注册公司，真心不错，速度快，觉的流程很清淅，自己都能看到进度，价格也很便宜，体验很好，推荐！</p>
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
