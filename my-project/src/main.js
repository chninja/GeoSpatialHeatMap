// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import mapboxgl from 'mapbox-gl'
// import 'mapbox-gl/dist/mapbox-gl.css'
Vue.config.productionTip = false

// mapboxgl.accessToken = 'pk.eyJ1IjoiY2F0aGVyaW5laGlnZ2lucyIsImEiOiJja3dxanVidmowbmEwMnBucWVmdXhrbGM1In0.nqBHck1p4sgntYj-ZcuS3w'
/* eslint-disable */
// var map = new mapboxgl.Map({
//   container: 'app',
//   style: 'mapbox://styles/mapbox/streets-v11'
// })
// console.log(mapboxgl)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
