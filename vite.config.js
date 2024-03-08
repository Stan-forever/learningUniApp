import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
	plugins: [
		uni(),
		AutoImport({
			//自动导入配置
			imports: [
				//预设
				'vue',
				'uni-app'
			]
		})
	]
})