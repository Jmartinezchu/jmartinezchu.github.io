import { createApp } from 'vue';
import App from './App.vue';
import router from './router/routes';
import swal from 'sweetalert';
createApp(App).use(router, swal).mount('#app');
