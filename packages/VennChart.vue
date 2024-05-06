<template>
  <div ref="wrapperDom" class="wrapper-venn">
    <div id="venn"></div>
  </div>
</template>

<script lang="ts" setup name="VennChart">
import { ref, onMounted, watch, getCurrentInstance, onUnmounted, computed } from 'vue'
/* 此处误报 模块“"d3"”没有导出的成员“select”，没有在d3.node.js里显式导出，实际是有的 */
// @ts-ignore
import { select, event } from 'd3'
import { VennDiagram } from '@upsetjs/venn.js'
import { ISetsItem } from './types'
import { debounce } from 'lodash-es'

interface IVennChartProps {
  data: ISetsItem[]
  colors: string[]
  legend: string[]
  strokeWidth?: number
  strokeColor?: string
  tooltipOffsetX?: string | number
  tooltipOffsetY?: string | number
  tooltipOpacity?: number
  tooltipDelay?: number
  textColor?: string
}

const chartWidth = ref(0)
const chartHeight = ref(0)
const presetNiceColors = ['#96ceb4', '#ffeead', '#ff6f69', '#ffcc5c', '#88d8b0', '#ee4035', '#f37736', '#fdf498', '#7bc043', '#0392cf']
const chartColors = computed({
  get() {
    return props.colors.length < props.data.length ? [...props.colors, ...presetNiceColors] : props.colors
  },
  set(colors: string[]) {
    chartColors.value = colors
  }
})

interface Emit {
  (e: 'clickItem', event: any): void
}

const emits = defineEmits<Emit>()
const props = withDefaults(defineProps<IVennChartProps>(), {
  data: () => [],
  colors: () => [],
  legend: () => [],
  strokeWidth: 3,
  strokeColor: '#f6cd61',
  tooltipOffsetX: 20,
  tooltipOffsetY: 10,
  tooltipOpacity: 0.9,
  tooltipDelay: 300,
  textColor: '#fff'
})

watch(
  [() => props.data, () => props.legend],
  () => {
    select('#venn').select('svg').remove() && renderVennChart()
  },
  { deep: true }
)

const curColor = ref('')
const wrapperDom = ref<HTMLElement>()
function renderVennChart() {
  // 确保存在容器
  if (!wrapperDom.value) {
    console.warn('Please check if the chart container dom exists, and make sure the width and height are set.(请检查是否存在图表容器dom节点,并设置好宽高)')
    return
  }
  // 渲染前清除所有tooltip节点
  const tooltipDom = document.getElementsByClassName('custom-venn-chart-tooltip')
  for (const dom of tooltipDom) {
    dom.remove()
  }

  chartWidth.value = wrapperDom.value!.getBoundingClientRect().width
  chartHeight.value = wrapperDom.value!.getBoundingClientRect().height

  const vennDiv = select('#venn')
  const chart = VennDiagram({
    symmetricalTextCentre: false // label是否放在圆的正中间
    // colorScheme: ['#19c386', '#409eff'] // 预设sets的颜色
    // textFill: '#fff' // 文字填充颜色
  })
    .width(chartWidth.value)
    .height(chartHeight.value)

  vennDiv.datum(props.data).call(chart) // 挂载
  vennDiv
    .selectAll('g path')
    .style('fill', function (d: any, i: number) {
      return chartColors.value[i]
    })
    .style('fill-opacity', 0.7)
    .style('stroke-opacity', 0)
    .style('stroke-width', props.strokeWidth)
    .style('stroke', props.strokeColor)
  vennDiv.selectAll('text').style('fill', props.textColor).style('font-size', '20px').style('font-weight', '700')
  const tooltip = select('body .wrapper-venn').append('div').attr('class', 'custom-venn-chart-tooltip')
  vennDiv
    .selectAll('g')
    .on('mouseover', function (d: any, i: number) {
      curColor.value = chartColors.value[i]
      tooltip.transition().duration(props.tooltipDelay).style('opacity', props.tooltipOpacity)
      tooltip.text(`${props.legend[i]} ${d.label}`)

      // @ts-ignore
      const selection = select(this).transition('tooltip').duration(props.tooltipDelay)
      // selection.select('path').style('fill-opacity', 1)
      selection.select('path').style('stroke-opacity', 1).style('fill-opacity', 1).style('fill', chartColors.value[i])
    })
    .on('mousemove', function (d: any, i: number) {
      tooltip.style('left', event.pageX + props.tooltipOffsetX + 'px').style('top', event.pageY + props.tooltipOffsetY + 'px')
    })

    .on('mouseout', function (d: any, i: number) {
      tooltip.transition().duration(props.tooltipDelay).style('opacity', 0)
      // @ts-ignore
      const selection = select(this).transition('tooltip').duration(props.tooltipDelay)
      // selection.select('path').style('fill-opacity', 0).style('stroke-opacity', 0)
      selection.select('path').style('stroke-opacity', 0).style('fill-opacity', 0.7).style('fill', chartColors.value[i])
    })
    .on('mousedown', function (e: ISetsItem) {
      emits('clickItem', e)
    })
}

onMounted(() => {
  renderVennChart()
  window.addEventListener('resize', debounce(renderVennChart, 500))
})
onUnmounted(() => {
  window.removeEventListener('resize', debounce(renderVennChart, 500))
})
</script>
<style scoped lang="less">
.wrapper-venn {
  width: 100%;
  height: 100%;
  :deep(.custom-venn-chart-tooltip) {
    position: absolute;
    min-height: 32px;
    max-width: 200px;
    font-size: 16px;
    display: flex;
    align-items: center;
    text-align: left;
    padding: 8px 16px 8px 36px;
    background: #fff;
    color: #606266;
    border: 0;
    border-radius: 8px;
    opacity: 0;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    z-index: 2333;
    &::before {
      content: '';
      width: 10px;
      height: 10px;
      position: absolute;
      left: 16px;
      background-color: v-bind(curColor);
      border-radius: 50%;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
</style>
