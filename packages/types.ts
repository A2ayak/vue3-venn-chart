export interface ISetsItem {
	sets: string[]
	label: string
	size: number
}

export interface IVennChartProps {
	data: ISetsItem[]
	w?: number
	h?: number
	strokeWidth?: number
	strokeColor?: string
	colors?: string[]
	legend?: string[]
}
