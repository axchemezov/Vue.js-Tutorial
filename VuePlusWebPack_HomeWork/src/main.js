import Vue from 'vue'
import App from './App.vue'

import AppStartScreen from './components/StartScreen.vue'
import AppQuestion from './components/Question.vue'
import AppMessage from './components/Message.vue'
import AppResultScreen from './components/ResultScreen.vue'

Vue.components(AppStartScreen, 'AppStartScreen')
Vue.components(AppQuestion, 'AppQuestion')
Vue.components(AppMessage, 'AppMessage')
Vue.components(AppResultScreen, 'AppResultScreen')

new Vue({
  el: '#app',
  render: h => h(App)
})
