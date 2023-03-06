import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './assets/tailwind.css'
// Import Swiper and modules
import Swiper, { Navigation, Pagination, Scrollbar } from 'swiper';

// Swiper.js
const swiper = new Swiper('.swiper', {
  // Install modules
  modules: [Navigation, Pagination, Scrollbar],
  speed: 500,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const app = createApp(App);
app.mount('#app');