<template>
	<view class="content">
		<image src="
https://vkceyugu.cdn.bspapp.com/VKCEYUGU-sweet-apply/827ee930-c27c-11ea-b244-a9f5e5565f30.svg" mode=""></image>
		<input type="text" v-model="name" class="name" placeholder="" />

		<button @tap="hello()" type="primary">提交</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '',
				name: ''
			}
		},
		onLoad() {

		},
		methods: {
			hello: function() {
				uniCloud.callFunction({
					name: 'index',
					data: {
						name: this.name
					},
					success: res => {
						console.log(res)
						// this.title = res.result;
					}
				})
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	input.name {
		box-sizing: border-box;
		padding: 0 20rpx;
		width: 80vw;
		height: 60rpx;
		line-height: 60rpx;
		border: #007AFF solid 2rpx;
		border-radius: 6rpx;
	}

	button {
		margin-top: 40rpx;
		width: 80vw;
	}

	.text-area {
		margin-top: 40rpx;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
