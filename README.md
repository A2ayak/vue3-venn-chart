# vue3-venn-chart

Venn chart component based on Vue3.2
## Table of Contents

- [vue3-venn-chart](#vue3-venn-chart)
  - [Table of Contents](#table-of-contents)
  - [Demo](#demo)
  - [Usage](#usage)
  - [Maintainers](#maintainers)
  - [License](#license)

## Demo
This project uses [node](http://nodejs.org) and [npm](https://npmjs.com). I am now using node@16.14.0.
```sh
$ git clone https://github.com/A2ayak/vue3-venn-chart
$ cd vue3-venn-chart
$ npm install
$ npm run dev
```
and then open [localhost:4090](http://localhost:4090/)

## Usage

```sh
npm install vue3-venn-chart
```

```vue
// make sure the "chart-container" has the width & height(px or %)
// "chart-container"容器必须拥有宽高，支持百分比
<div class="chart-container">
  <VennChart :data="chartData" :colors="colors" :legend="legend" />
</div>

// script setup
<script setup lang="ts">
import VennChart from 'vue3-venn-chart'
const chartData = ref([
  { sets: ['A'], label: '12', size: 12 },
  { sets: ['B'], label: '8', size: 8 },
  { sets: ['A', 'B'], label: '4', size: 4 }
])
const colors = ['#ee4035', '#0392cf', '#7bc043']
const legend = ['left(左边)', 'right(右边)', 'common(同时存在)']
</script>

// css
<style scoped>
.chart-container {
  width: 400px;
  height: 400px;
}
</style>
```

| props | Descriptions| isRequired| type（类型） | default（默认值）|
| ----- | ----------- | ------------------- | ---------- |--------------- |
| data | venn chart data （维恩图数据源） | true（必填） | Array<{sets: string[],label: string,size: number}> | -
| colors | chart color options（图表颜色选项）.**The array length is better to be the same as props.data** | true（必填） | string[] | example: ['#ee4035', '#0392cf', '#7bc043']
| legend | legend（图例）.**The array length must be the same as props.data** | true（必填） | string[] | example: ['left', 'right', 'common']
| strokeWidth | borderWidth when hovered（鼠标悬停时的边框粗细） | false（选填） | number | 3
| strokeColor | borderColor when hovered（鼠标悬停时的边框颜色） | false（选填） | string | '#f6cd61'
| tooltipOffsetX | tooltip offset in X axis（tooltip在X轴的偏移量） | false（选填） | number | 20
| tooltipOffsetY | tooltip offset in Y axis（tooltip在Y轴的偏移量） | false（选填） | number | 10
| tooltipOpacity | tooltip background color opacity（tooltip背景透明度） | false（选填） | number | 0.9
| tooltipDelay | tooltip animation time（tooltip显示/消失持续时间） | false（选填） | number | 0.9
| textColor | chart text color（图表文字颜色） | false（选填） | string | '#fff'


## Maintainers

[@A2ayak](https://github.com/A2ayak)  :email: :point_right: **azayakey@gmail.com** for further support


## License

[MIT](LICENSE) © A2ayak