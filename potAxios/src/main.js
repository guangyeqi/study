import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

import Axios from "axios";
console.log(Axios);
Vue.prototype.$axios=Axios;
console.log(Vue);

new Vue({
	render: h => h(App)
}).$mount("#app");
