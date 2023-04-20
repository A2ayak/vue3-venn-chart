<script setup lang="ts">
import { ref } from 'vue'
import VennChart from '../packages'

const chartData = ref([
	{ sets: ['A'], label: '12', size: 12 },
	{ sets: ['B'], label: '8', size: 8 },
	{ sets: ['A', 'B'], label: '4', size: 4 }
])
const colors = ['#ee4035', '#0392cf', '#7bc043']
const legend = ['left(左边)', 'right(右边)', 'common(同时存在)']
</script>

<template>
	<div class="chart-container">
		<VennChart :data="chartData" :colors="colors" :legend="legend" />
	</div>
</template>

<style scoped lang="less">
.chart-container {
	width: 50%;
	height: 50%;
	border: 1px solid #409eff;
}
</style>
