import Vue from 'vue'
import App from './App.vue'

import '../components/css/demo.scss';
import '../components/css/card.scss';
import '../components/css/button.scss';
import Demo from "../components/lib/demo/index.js"
import MCard from "../components/lib/card/index.js"
import MButton from "../components/lib/button/index.js"

Vue.use(Demo);//vue.use会调用 Demo.install -> vue.component();
Vue.use(MCard);
Vue.use(MButton);
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')

