import Vue from 'vue';
import toastVue from './toast.vue';


const toastConstructor = Vue.extend(toastVue);
//部分初始配置项
const defaults = {
  text: '这是一个TOAST',
  duration: 1500,
  max: 400
}

//增加可以单独引入的入口
export const Toast = (options = {}) => {

  //默认给body添加toast
  const parent = document.body;

  //传入的数据
  options = Object.assign({}, defaults, options);

  //检测,当输入的html片段若有script关键字,或a关键字, 将清空
  if (options.content) {
    if (options.content.indexOf('<script') != -1 || options.content.indexOf('<a') != -1) {
      options.content = '';
    }
  }

  //创建的vueToast实例
  let instance = new toastConstructor({
    el: document.createElement('div'),
    data: options
  });

  //将实例的dom添加到html中
  parent.appendChild(instance.$el);

  //将vueToast显示
  Vue.nextTick(() => {
    //给HTML增加禁止滚动的样式
    document.documentElement.style['overflow'] = 'hidden';
    instance.toast = true;
  });

  //计时器隐藏vueToast
  setTimeout(() => {
    document.documentElement.style['overflow'] = '';
    instance.toast = false;
  }, options.duration);

  //监控toast消失的回调,
  instance.$on('after', function() {

    //将其从html中去除
    if (instance.$el && instance.$el.parentNode) {
      instance.$el.parentNode.removeChild(instance.$el);
    }

    instance.$destroy();
  })

  return instance;
};


export default {
  install(Vue) {
    Vue.prototype.$ftoast = Toast
  }
}