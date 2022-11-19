import { createApp } from 'vue';
import App from './App.vue';

import BaseCard from './components/global/BaseCard.vue';

const app = createApp(App);

app.component('base-card', BaseCard);

app.mount('#app');
