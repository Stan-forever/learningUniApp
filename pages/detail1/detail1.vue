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
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
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
