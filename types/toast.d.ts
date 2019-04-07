import { VueConstructor } from 'vue';
type textAlign = 'center' | 'right' | 'left';

export interface LoadingOption {
  //toast文案
  text?: string;
  //持续时间(ms)
  duration?: number;
  //蒙层背景色(支持直接写色号,rgb,rgba,英文单词)
  background?: string;
  //toast背景色
  toastBackground?: string;
  //toast文字颜色
  textColor?: string;
  //toast文字排列(适用于当出现文字太长出现换行)
  textAlign?: textAlign;
  //toast的最大宽度(默认为400px)
  max?: number;
  //支持html输入(预留允许输入html串)
  content?: string;
}

export interface MyToast {
  (options: LoadingOption): VueConstructor
}