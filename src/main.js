import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';

window.axios = axios
import swal from 'sweetalert';
window.Swal = swal;

createApp(App).use(router).mount('#app')
