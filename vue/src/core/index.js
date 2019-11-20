import Vue from './instance/index';//从instance/index导入vue的主体
import { initGlobalAPI } from './global-api/index'//公共api方法？? ?
import { isServerRendering } from 'core/util/env'//判断是否是服务器渲染环境
import { FunctionalRenderContext } from 'core/vdom/create-functional-component'//与虚拟dom相关？

initGlobalAPI(Vue);//为vue添加一些公共的api?

//为vue原型上添加isServer属性，该属性为对象，有key：get,有值为：boolean。是否是服务器渲染环境
Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
})
//为vue 原型上添加￥ssrContext属性，该属性为对象，有方法get，return为 this.$vnode && this.$vnode.ssrContext 的布尔值。
//this.$vnode ??? && this.$vnode.ssrContext ?????
Object.defineProperty(Vue.prototype, '$ssrContext', {
  get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
})

// expose FunctionalRenderContext for ssr runtime helper installation
//为vue 原型上添加属性FunctionalRenderContext属性，有key:value,值为functionalRenderCintent
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
})

Vue.version = '__VERSION__'//vue版本信息，估计要做字符串替换

export default Vue;//导出vue
