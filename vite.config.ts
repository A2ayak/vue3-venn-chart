import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue(), VueSetupExtend()],
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
