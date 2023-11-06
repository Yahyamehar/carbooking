import Vue, { createApp } from '@vue/compat';
import BootstrapVue from 'bootstrap-vue';
import App from './src/App.vue';
import router from './src/router/index'
import '@fortawesome/fontawesome-free/css/all.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);
const app = createApp(App);
app.use(router)
app.mount('#app');
