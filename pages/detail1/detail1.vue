<template>
	<view>
		<swiper indicator-dots circular vertical>
			<swiper-item>
				<image src="../../static/1.jpeg" mode="aspectFill"></image>
			</swiper-item>
			<swiper-item>
				<image src="../../static/2.jpeg" mode="aspectFill"></image>
			</swiper-item>
			<swiper-item>
				<image src="../../static/3.jpeg" mode="aspectFill"></image>
			</swiper-item>
			<swiper-item>
				<image src="../../static/4.jpeg" mode="aspectFill"></image>
			</swiper-item>
			<swiper-item>
				<image src="../../static/5.jpeg" mode="aspectFill"></image>
			</swiper-item>
		</swiper>
		<view>---</view>
		<button size="mini" @click="handlePush">跳转到detail3</button>
		<button size="mini" @click="handlePush1">跳转到detail2</button>
	</view>
</template>

<script setup>
// import {onLoad, onReady} from '@dcloudio/uni-app'

const handlePush = () => {
	uni.navigateTo({
		url: '/pages/detail3/detail3'
	})
}

const handlePush1 = () => {
	uni.reLaunch({
		url: '/pages/detail2/detail2'
	})
}

const getPageData = async() => {
	const res = await uni.request({
		url: 'https://jsonplaceholder.typicode.com/posts'
	})
	console.log('res', res);
}

getPageData()

onLoad((e) => {
	console.log('onLoad', e);
})

onReady((e) => {
	console.log('onReady', e);
})
</script>

<style lang="scss">
swiper {
	width: 100vh;
	height: 200px;
	border: 1px solid black;
	view {
		width: 100%;
		height: 100%;
		background: blue;
	}
}
</style>
