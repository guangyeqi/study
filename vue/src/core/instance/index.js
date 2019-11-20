//导入对于的方法
import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'


//vue 类的定义
function Vue (options) {
  //若环境不是线上生产环境且this不是来着Vue,警告vue是一个类，使用是要通过new关键字
  if (process.env.NODE_ENV !== 'production' &&!(this instanceof Vue)) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  // 调用_init方法，传参，options
  this._init(options)
}

initMixin(Vue);//初始化vue????
stateMixin(Vue)//添加状态
eventsMixin(Vue)//添加事件
lifecycleMixin(Vue)//添加生命周期？
renderMixin(Vue)//添加渲染

export default Vue ;//导出VUE
