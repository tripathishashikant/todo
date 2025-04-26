import { createRouter, createWebHistory } from 'vue-router';
import store from '@/store';

import LoginView from '@/views/LoginView.vue';
import RegisterView from '@/views/RegisterView.vue';
import TodoList from '@/views/TodoList.vue';
import PendingTasks from '@/views/PendingTasks.vue';
import CompletedTasks from '@/views/CompletedTasks.vue';
import NotFound from '@/components/modules/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { name: 'home', path: '/', component: TodoList },
    { name: 'login', path: '/login', component: LoginView },
    { name: 'register', path: '/register', component: RegisterView },
    { name: 'todo-list', path: '/todo-list', component: TodoList },
    { name: 'pending-list', path: '/pending-list', component: PendingTasks },
    { name: 'completed-list', path: '/completed-list', component: CompletedTasks },
    { name: 'not-found', path: '/:notFound(.*)', component: NotFound },
  ],
});

let intendedRoute = null;

router.beforeEach((to, from, next) => {
  const isAuthenticated = store.getters['authStore/isAuthenticated'];

  // Redirect unauthenticated users to login for protected routes
  if (!isAuthenticated && !['login', 'register'].includes(to.name)) {
    intendedRoute = to;
    return next({ name: 'login' });
  }

  // Prevent authenticated users from accessing login or register pages
  if (isAuthenticated && ['login', 'register'].includes(to.name)) {
    const redirectTo = intendedRoute || { name: 'home' };
    intendedRoute = null;
    return next(redirectTo);
  }

  // Allow navigation for all other cases
  next();
});

export default router;
