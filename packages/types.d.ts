export interface ISetsItem {
	sets: string[]
	label: string
	size: number
}

export interface IVennChartProps {
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
