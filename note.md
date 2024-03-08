1、uniapp定义公共组件步骤：
在components文件夹定义组件文件夹及组件，无需像vue一样import引入，可直接调用

2、uniapp页面生命周期
onLoad 类似直接写在vue3setup里面的作用，可用以接收页面跳转过来的路由参数
onLoad((e) => {
	//获取到页面传参
})

onReady 类似vue3的onMounted

onShow 触发方式:1、离开页面重新进入 2、点击其他app再回去

onHide 触发方式:与onHide相反

执行顺序快慢: onLoad > onShow > onReady 

3、pages.json
页面设置的样式权重大于全局设置的样式权重

4、navigator要链接跳转到导航栏(tabBar)的话，必须设置open-type为reLaunch

5、showToast的title在小程序中最多只能显示7个文字，若要显示多行可以将icon设置为none

6、showModal设置的content，如果在editable为真(即设置了显示输入框)的情况下，等同于输入框的默认值

7、数据缓存
setStorageSync(key, value) 设置
getStorageSync(key) 获取指定key的值
removeStorageSync(key) 移除指定key

8、setTabBarBadge(为 tabBar 某一项的右上角添加文本)
   showTabBarRedDot(显示 tabBar 某一项的右上角的红点)
   
9、