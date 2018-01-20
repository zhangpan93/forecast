// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import event from './components/event'
import run from './components/run'
import forecast from './components/forecast'
import login from './components/login'

require('!style-loader!css-loader!./font-awesome-4.7.0/css/font-awesome.min.css')
// Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(VueRouter);
Vue.use(VueResource);

const routes = [
  {
  	path: '/',
  	redirect: '/run'
  },
  {
  	path: '/run',
  	component: run
  },
  {
  	path: '/event',
  	component: event
  },
  {
  	path: '/forecast',
  	component: forecast
  },
  {
  	path: '/login',
  	component: login
  }
];

const router = new VueRouter({
  linkActiveClass: 'active',
	routes
});

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
