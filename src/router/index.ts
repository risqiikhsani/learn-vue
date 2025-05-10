import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LearnView from '../views/LearnView.vue'
import AboutView from '../views/AboutView.vue'
import GlobalStateView from '@/views/GlobalStateView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AboutView,
    },
    {
      path: '/learn',
      name: 'learn',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: LearnView,
    },
    {
      path: '/global-state',
      name: 'global-state',
      component: GlobalStateView,
    },
  ],
})

export default router
