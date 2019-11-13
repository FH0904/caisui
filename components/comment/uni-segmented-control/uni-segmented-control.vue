<template>
  <view
    :class="{ text: styleType === 'text' }"
    :style="{ borderColor: styleType === 'text' ? '' : activeColor }"
    class="segmented-control"
  >
    <view
      v-for="(item, index) in values"
      :class="[{ text: styleType === 'text' }, { active: index === currentIndex }]"
      :key="index"
      :style="{
        color:
          index === currentIndex
            ? styleType === 'text'
              ? activeColor
              : '#ccc'
            : styleType === 'text'
              ? '#ccc'
              : activeColor,
        backgroundColor: index === currentIndex && styleType === 'button' ? activeColor : ''
      }"
      class="segmented-control-item"
      @click="_onClick(index)"
    >
      {{ item }}
    </view>
	<view class="back" @click="clickImg">
		<image src="../../static/homeimg/back.png" mode="" class="img"></image>
	</view>
  </view>
</template>

<script>
export default {
  name: 'UniSegmentedControl',
  props: {
    current: {
      type: Number,
      default: 0
    },
    values: {
      type: Array,
      default () {
        return []
      }
    },
    activeColor: {
      type: String,
      default: '#007aff'
    },
    styleType: {
      type: String,
      default: 'button'
    }
  },
  data () {
    return {
      currentIndex: 0
    }
  },
  watch: {
    current (val) {
      if (val !== this.currentIndex) {
        this.currentIndex = val
      }
    }
  },
  created () {
    this.currentIndex = this.current
  },
  methods: {
    _onClick (index) {
      if (this.currentIndex !== index) {
        this.currentIndex = index
        this.$emit('clickItem', index)
      }
    },
	clickImg(){
		uni.navigateBack({
			delta:1
		})
	}
  }
}
</script>

<style lang="scss">
	.back{
		position: fixed;
		top: 0upx;
		left: 0upx;
		z-index: 99;
		background-color: #007AFF;
		height: 128upx;
		width: 10%;
		.img{
			width: 24upx;
			height: 38upx;
			margin-top: 70upx;
			margin-left: 36upx;
		}
	}
.segmented-control {
	position: fixed;
	top: 0upx;
	z-index: 99;
	display: flex;
	flex-direction: row;
	justify-content: center;
	width: 90%;
	height: 128upx;
	font-size: 28upx;
	overflow: hidden;
	background-color: #007AFF;
	border: 1px solid;
	border-radius: 10upx;
	margin-left: 10%;
	&.text {
		border: 0;
		border-radius: 0;
	}
}

.segmented-control-item {
	display: flex;
	justify-content: center;
	flex: 1;
	height: 100%;
	line-height: 170upx;
	box-sizing: border-box;
	border-left: 1px solid;

	&.active {
		color: #fff;
	}

	&.text {
		border-left: 0;
		color: #000;
		&.active {
			border-bottom-style: solid;
		}
	}

	&:first-child {
		border-left-width: 0;
	}
}
</style>
