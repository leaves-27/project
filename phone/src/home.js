import Vue from 'vue'

import $ from 'jquery'
import home from './container/home.vue'

const app = new Vue({
  el : "#root",
  components : {
    "home" : home
  }
})