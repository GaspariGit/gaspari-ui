import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../HelloWorld.vue';
import ClientView from '../views/Anagraphics/Clients/ClientView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/anagrafiche/clienti',
    name: 'anagraphics.clients.index',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ClientView
  }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router
