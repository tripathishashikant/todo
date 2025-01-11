import { createApp } from 'vue';
import store from './store/index';
import router from './router/router';
import App from './App.vue';

import BaseCard from './components/global/BaseCard.vue';

import '@/assets/scss/styles.scss';

const app = createApp(App);

app.use(store);
app.use(router);

app.component('BaseCard', BaseCard);

app.mount('#app');
