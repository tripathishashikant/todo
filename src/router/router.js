import { createRouter, createWebHistory } from 'vue-router';

import TodoList from '../views/TodoList.vue';
import PendingTasks from '../views/PendingTasks.vue';
import CompletedTasks from '../views/CompletedTasks.vue';
import NotFound from '../components/modules/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { name: 'home', path: '/', component: TodoList },
    { name: 'pending-list', path: '/pending-list', component: PendingTasks },
    { name: 'completed-list', path: '/completed-list', component: CompletedTasks },
    { name: 'not-found', path: '/:notFound(.*)', component: NotFound },
  ],
});

export default router;
