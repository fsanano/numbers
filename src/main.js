import Vue from 'vue'
import App from './App'
import router from './router'
import components from './components'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components,
	render: h => h(App)
})
