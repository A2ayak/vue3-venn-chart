import VennChart from './VennChart.vue'
import { App } from 'vue'

// import module
export { VennChart }

// vue.use
VennChart.install = (app: App) => {
	app.component(VennChart.name, VennChart)
}
export default VennChart
