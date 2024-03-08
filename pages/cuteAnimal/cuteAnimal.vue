<template>
	<view class="container">
		<uni-segmented-control 
			:current="1" 
			:values="[11, 22, 33]" 
			@clickItem="onClickItem" 
			styleType="button" 
			activeColor="#4cd964">	
		</uni-segmented-control>
		<view class="layout" v-for="(item, index) in listData" :key="item._id">
			<image lazy-load :src="item.url" alt="" mode="widthFix" @click="handlePreview(index)"></image>
			<view>{{item.content}}</view>
		</view>
		<view class="btn-box">
			<view class="btn" @click="handleRefresh">
				<uni-icons type="refreshempty" size="30"></uni-icons>
			</view>
			<view class="btn" @click="handleTop">
				<uni-icons type="arrow-up" size="30"></uni-icons>
			</view>
		</view>
		<view class="more">
			<uni-load-more status="loading"></uni-load-more>
		</view>
	</view>
</template>

<script setup>
import {ref} from 'vue'

const listData = ref([])

const getData = async() => {
	try{
		const res = await uni.request({
			url: 'https://tea.qingnian8.com/tools/petShow',
			data: {
				size: 5
			},
			header: {
				'access-key': 'abc123456'
			}
		})
		listData.value = [...listData.value, ...res.data.data]
	}catch(e){
		console.log('err', e);
		//TODO handle the exception
	}
}

const handlePreview = (current) => {
	let urls = listData.value.map(item => item.url)
	uni.previewImage({
		urls,
		current
	})
}

const handleRefresh = () => {
	uni.startPullDownRefresh()
}

const handleTop = () => {
	uni.pageScrollTo({
		scrollTop: 0,
		duration: 100
	})
}

const onClickItem = (val) => {
	console.log('val', val);
}


onPullDownRefresh(() => {
	listData.value = []
	getData()
})

onReachBottom(() => {
	getData()
})

getData()
</script>

<style lang="scss" scoped>
.container {
	width: 100%;
	.layout {
		padding: 50rpx;
	}
	.btn-box {
		position: fixed;
		right: 60rpx;
		bottom: 0rpx;
		.btn {
			height: 90rpx;
			width: 90rpx;
			background-color: rgba(255, 255, 255, 0.9);
			border: 1px solid #eee;
			border-radius: 50%;
			display: flex;
			justify-content: center;
			align-items: center;
			margin-bottom: 30rpx;
		}
	}
	.more {
		margin-bottom: env(safe-area-inset-bottom);
	}
}
</style>
