import type { PropType as __PropType } from 'vue';
import { ISetsItem } from './types';
declare const _sfc_main: import("vue").DefineComponent<{
    data: {
        type: __PropType<ISetsItem[]>;
        required: true;
        default: () => never[];
    };
    colors: {
        type: __PropType<string[]>;
        required: true;
        default: () => never[];
    };
    legend: {
        type: __PropType<string[]>;
        required: true;
        default: () => never[];
    };
    strokeWidth: {
        type: __PropType<number | undefined>;
        required: false;
        default: number;
    };
    strokeColor: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    tooltipOffsetX: {
        type: __PropType<string | number | undefined>;
        required: false;
        default: number;
    };
    tooltipOffsetY: {
        type: __PropType<string | number | undefined>;
        required: false;
        default: number;
    };
    tooltipOpacity: {
        type: __PropType<number | undefined>;
        required: false;
        default: number;
    };
    tooltipDelay: {
        type: __PropType<number | undefined>;
        required: false;
        default: number;
    };
    textColor: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "clickItem"[], "clickItem", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    data: {
        type: __PropType<ISetsItem[]>;
        required: true;
        default: () => never[];
    };
    colors: {
        type: __PropType<string[]>;
        required: true;
        default: () => never[];
    };
    legend: {
        type: __PropType<string[]>;
        required: true;
        default: () => never[];
    };
    strokeWidth: {
        type: __PropType<number | undefined>;
        required: false;
        default: number;
    };
    strokeColor: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    tooltipOffsetX: {
        type: __PropType<string | number | undefined>;
        required: false;
        default: number;
    };
    tooltipOffsetY: {
        type: __PropType<string | number | undefined>;
        required: false;
        default: number;
    };
    tooltipOpacity: {
        type: __PropType<number | undefined>;
        required: false;
        default: number;
    };
    tooltipDelay: {
        type: __PropType<number | undefined>;
        required: false;
        default: number;
    };
    textColor: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
}>> & {
    onClickItem?: ((...args: any[]) => any) | undefined;
}, {
    data: ISetsItem[];
    colors: string[];
    legend: string[];
    strokeWidth: number | undefined;
    strokeColor: string | undefined;
    tooltipOffsetX: string | number | undefined;
    tooltipOffsetY: string | number | undefined;
    tooltipOpacity: number | undefined;
    tooltipDelay: number | undefined;
    textColor: string | undefined;
}>;
export default _sfc_main;
