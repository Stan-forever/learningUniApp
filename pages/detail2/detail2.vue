<template>
	<view>
		<div>
			<button @click="handleShow" size="mini">显示提示框(showToast)</button>
			<button @click="handleHide" size="mini">隐藏提示框(hideToast)</button>
		</div>
		<view>---</view>
		<div>
			<button @click="showModal">showModal</button>
			<!-- <button @click="hideModal">hideModal</button> -->
		</div>
		<view>---</view>
		<button @click="showActionSheet">showActionSheet</button>
	</view>
</template>

<script setup>
const handleShow = () => {
	uni.showToast({
		title: '页面加载中1231111页面加载中1231111页面加载中1231111',
		icon: 'none',
		duration: 3000,
		success: (res) => {
			console.log('res', res)
		},
		complete: (complete) => {
			console.log('complete', complete)
		}
	})
	uni.removeTabBarBadge({
		index: 2
	})
}

const handleHide = () => {
	uni.hideToast({
		title: '页面已隐藏'
	})
}

const showModal = () => {
	uni.showModal({
		title: 'showModal',
		editable: true,
		content: '主体',
		complete: (res) => {
			console.log('res', res)
		}
	})
}


const itemList = ['a', 'b', 'c', 'd']
const showActionSheet = () => {
	uni.showActionSheet({
		itemList: itemList,
		title: '请选择',
		complete: (res) => {
			console.log('res', res)
			console.log('item', itemList[res.tapIndex])
		}
	})
}

uni.showNavigationBarLoading()
setTimeout(() => {
	uni.setNavigationBarTitle({
		title: '新标题'
	})
	uni.hideNavigationBarLoading()
}, 2000)
</script>

<style>

</style>
