import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'
import App from './App'
import router from './router'
import axios from 'axios'

axios.defaults.baseURL = '/api'
Vue.prototype.$http=axios
window.axios = require('axios');

Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyATPI5d7sG2niv14q1wv59xfC3ZxYm0iDA',
    libraries: 'places',
  }
});

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


