#easytoast-f-vue
>一款简单的适用于pc端的vue-toast/并且匹配typescript的模式.效果是默认在屏幕的垂直居中位置.

##安装

这款toast是基于vue使用的,所以需要在vue的大环境下去安装使用.
```javascript
npm i easytoast-f-vue --save
```

##参数

```javascript
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

  //有一个toast结束的回调
  after() { ... }
```

- 默认的duration是**2s**
- 默认的字体颜色是白色,toast背景是rgba(0,0,0,.5)
- 如果使用html片段,设置的text参数和textColor参数和textAlign参数和max参数**会失效**.
- 如果使用html片段,会校验是否有输入 script标签和a标签

##使用

在入口的main.js或者main.ts中,
```javascript
import myToast from 'easytoast-f-vue';
Vue.use(myToast);
```
然后在具体需要使用的页面中,
```javascript
this.$ftoast({
  text: 'TOAST'
})
```

---
也可以按需加载
```javascript
import { Toast } from 'easytoast-f-vue';

Toast({ ... })
```