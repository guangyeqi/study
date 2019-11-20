// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
Vue.config.productionTip = false;



import ajax from './ajax/request'
Vue.prototype.$ajax=ajax;

import vueztree from 'vue-ztree-2.0/dist/vue-ztree-2.0.umd.min'
import 'vue-ztree-2.0/dist/vue-ztree-2.0.css'
Vue.use(vueztree);


/* eslint-disable no-new */
new Vue({
	el: '#app',
	components: { App },
	template: '<App/>'
})
