import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// --- Import ALL CSS files first ---
import 'swiper/css/bundle'
import './assets/main.css'
import "bootstrap/dist/css/bootstrap.min.css" // Bootstrap CSS
import 'aos/dist/aos.css';

// --- Import ALL JS files *before* mounting ---
// import "bootstrap/dist/js/bootstrap.bundle.min.js" // Bootstrap JS

import AOS from 'aos';

const app = createApp(App);

app.use(router);

app.mount('#app'); // <-- Mount the app LAST

// Initialize AOS *after* mounting
AOS.init({
  duration: 800, // Animation duration in milliseconds
  once: true,    // Whether animation should happen only once
  offset: 50     // Triggers animation 50px before the element's top reaches the viewport
});

