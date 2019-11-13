<template>
	<view class="company">

		<view class="content">
			<!-- 服务介绍 -->
			<view class="introduce">
				<view>
					<image src="../../../static/index/register/images/e504d5f1beb8e41ba9ab5f9fc6841508.jpg" class="image1"></image>
					<image src="../../../static/index/register/images/a7b2e5197b5a8487d67ba9160fbcb4b1.jpg" class="image1"></image>
					<image src="../../../static/index/register/images/2be519124a5fed7464a53f5a4f4ac28a.jpg" class="image1"></image>
					<image src="../../../static/index/register/images/0edefaea9abe3e43c4cd18c70c1f9d32.jpg" class="image3"></image>
					<image src="../../../static/index/register/images/1d9db821814e711552f7e2f181098a64.jpg" class="image4"></image>
				</view>
			</view>

			<!-- 办理流程 -->
			<view class="content_block" id="service_flow">
				<view class="content_block_title">
					<view>办理流程</view>
				</view>
				<view class="content_block_content">
					<image src="../../../static/index/register/images/8142ce1407203c6ba1164c5e090f94ed.jpg" mode="" class="img_bar"></image>
					<image src="../../../static/index/register/images/f99fdd8f4c70b7e37a05ffc83dc5db4b.jpg" mode="" class="img_bar"></image>
					<image src="../../../static/index/register/images/75f835a9b157861f2a1d40bddb03210a.jpg" mode="" class="img_bar"></image>
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
							<image src="../../../static/index/register/images/0e2ce7b4abe6aa80e69caae781ad313231343722.jpg" class="img-circle pull-left"
							 mode=""></image>
							<!-- <img class="img-circle pull-left" src="./images/9a5e66a3.jpg"> -->
							<view class="comment_title_right">
								<p class="comment_title_nick">紫檀未灭1214
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
							<p>之前有朋友在注册猫注册了公司。和朋友喝茶聊天的时候说要注册公司，就推荐了这家公司。因为朋友推荐也放心。去了注册猫具体了解，公司员工都很热情，也很专业负责，有事情都积极联系我，让人感觉很开心，也很放心。</p>
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
