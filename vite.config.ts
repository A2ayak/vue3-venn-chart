import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		VueSetupExtend(),
		cssInjectedByJsPlugin(),
		dts({
			outputDir: './lib/types'
		})
	],
	build: {
		outDir: 'lib',
		lib: {
			entry: resolve(__dirname, 'packages/index.ts'),
			name: 'vue3VennChart',
			fileName: 'vue3-venn-chart'
		},
		rollupOptions: {
			external: ['vue'],
			output: {
				globals: {
					vue: 'Vue'
				}
			}
		}
	}
})
