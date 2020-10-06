import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import Second from './components/Second.vue';
import Sidebar from './components/Sidebar.vue';
const routes = [
  {
    path: '/',
    name: 'foo',
    components: {
      home: Home,
    },
  },
  {
    path: '/second',
    name: 'Second',
    components: {
      default: Second,
      sidebar: Sidebar,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
