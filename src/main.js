import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import swal from 'sweetalert';
import $ from 'jquery';


// import VueSweetalert2 from 'vue-sweetalert2';


// main.js or app.js
// import Vue from 'vue';
// import App from './App.vue';

// Import jQuery
// import $ from 'jquery';
window.jQuery = $;
window.$ = $;

Vue.config.productionTip = false;

// new Vue({
// //   render: h => h(App),
// }).$mount('#app');


createApp(App).use(store).use(router).mount('#app')


