import Vue from 'vue'
import App from './App.vue'
import TextField from './components/elements/TextField.vue';

Vue.config.productionTip = false


//Vue.component('Text', TextField)

new Vue({
  render: h => h(App),
}).$mount('#app')
