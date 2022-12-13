import { createApp } from 'vue';
import store from './store/index';
import router from './router';
import App from './App.vue';

import BaseCard from './components/global/BaseCard.vue';

const app = createApp(App);

app.use(store);
app.use(router);

app.component('base-card', BaseCard);

app.mount('#app');
