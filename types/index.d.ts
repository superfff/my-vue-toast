import Vue, { VueConstructor } from 'vue';
import { LoadingOption, MyToast } from './toast'

export function install (vue: typeof Vue): void;

export const Toast: MyToast;

declare module 'vue/types/vue' {
  interface Vue {
    $ftoast (options: LoadingOption): VueConstructor
  }
}
