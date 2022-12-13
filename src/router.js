import { createRouter, createWebHistory } from 'vue-router';

import TodoList from './components/modules/TodoList.vue';
import NotFound from './components/modules/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { name: 'home', path: '/', component: TodoList },
    { name: 'not-found', path: '/:notFound(.*)', component: NotFound },
  ],
});

export default router;
