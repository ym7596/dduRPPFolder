
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'


//const path = require('path')

// module.exports = {
// 	alias: {
// 		'/@/': path.resolve(__dirname, './src'),
// 		'/@components/': path.resolve(__dirname, './src/components'),
// 		'/@app_modules/': path.resolve(__dirname, './src/modules'),
// 		'/@store': path.resolve(__dirname,'./src/store')
// 	},
// }





// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			vue: "vue/dist/vue.esm-bundler.js",
			//위에가 없을때 제대로 랜더링이 되지 않았다..
			'/@': path.resolve(__dirname, './src'),
			'/@components': path.resolve(__dirname, './src/components'),
			'/@app_modules': path.resolve(__dirname, './src/modules'),
			'/@store': path.resolve(__dirname,'./src/store')
		}
	},
  plugins: [vue()]
})

