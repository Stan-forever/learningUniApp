<template>
	<view class="container" hover-class="containerHover">
		<view class="box1" hover-stop-propagation>123</view>
	</view>
	<view>---</view>
	<text selectable>text文字</text>
	<view>---</view>
	<scroll-view scroll-x class="scrollView">
			<view class="box"></view>
			<view class="box"></view>
			<view class="box"></view>
			<view class="box"></view>
			<view class="box"></view>
			<view class="box"></view>
			<view class="box"></view>
			<view class="box"></view>
	</scroll-view>
	<view>---</view>
	<navigator url="/pages/detail1/detail1?id=1&name=mike">
		<button type="primary" size="mini" >onClick</button>
	</navigator>
	<view>---</view>
	<input type="text" value="111">
	<view>---</view>
	<com-header></com-header>
	<view>---</view>
	<UniHeader></UniHeader>
</template>

<script setup>

</script>

<style lang="scss">
.container {
	width: 200px;
	height: 200px;
	background-color: blue;
	.box1 {
		width: 100px;
		height: 100px;
		background: palevioletred;
	}
}

.containerHover {
	width: 300px;
}

.scrollView {
	height: 300px;
	width: 300px;
	border: 1px solid black;
	white-space: nowrap;
		.box {
			width: 100px;
			margin: 10px;
			height: 30px;
			background-color: rosybrown;
			display: inline-block;
		}
	
	
}

</style>
