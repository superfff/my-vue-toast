<template>
  <transition name="toast-fade" @after-leave="afterLeave">
    <div 
      v-show="toast"
      class="toast-wrapper"
      :style="{ backgroundColor: background || '' }">
      <template v-if="content">
        <div class="toast-content" v-html="content"></div>
      </template>
      <template v-else>
        <div class="toast-content" :style="toastCls">{{text}}</div>
      </template>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      toast: false,
      text: '',
      background: null,
      toastBackground: null,
      textColor: null,
      textAlign: null,
      content: null,
      max: null
    }
  },
  computed: {
    toastCls() {
      let cls = {};

      if (this.toastBackground) {
        cls['background'] = this.toastBackground;
      }

      //如果是传入了content(html片段) 下面的不生效
      if (this.content) {
        return cls;
      }

      if (this.textColor) {
        cls['color'] = this.textColor;
      }
      
      if (this.textAlign) {
        cls['textAlign'] = this.textAlign;
      }
      
      if (this.max) {
        cls['maxWidth'] = `${this.max}px`;
      }

      return cls;
    }
  },
  methods: {
    afterLeave() {
      this.$emit('after');
    }
  }
};
</script>

<style scoped>

  .toast-wrapper {
    position: fixed;
    margin: 0;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 3000;
    user-select: none;
    transition: all linear .2s;
    opacity: 1;
  }

  .toast-wrapper .toast-content {
    display: inline-block;
    padding: 15px 24px;
    background: rgba(0,0,0,.5);
    color: #FFFFFF;
    border-radius: 5px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3000;
    word-break: break-all;
  }

  .toast-fade-enter,
  .toast-fade-leave-to {
    opacity: 0;
  }

</style>
