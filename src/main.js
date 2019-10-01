import '@/assets/css/tailwind.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faCoffee, faBars);
Vue.component('font-awesome-icon', FontAwesomeIcon);

import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
