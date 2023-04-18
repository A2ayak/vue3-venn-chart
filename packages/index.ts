import VennChart from './VennChart.vue'
import type { App } from 'vue'

// import module
export { VennChart }
console.log(VennChart.name)

// vue.use
const install = (app: App) => {
	app.component(VennChart.name, VennChart)
}
export default {
	install
}
