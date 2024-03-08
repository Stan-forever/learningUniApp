<script>
	export default {
		
		onLaunch: function() {
			uni.setTabBarBadge({
				index: 2,
				text: '33'
			})
			
			uni.showTabBarRedDot({
				index: 1,
				text: ''
			})
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
