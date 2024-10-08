import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AuthorProfile from '@/views/AuthorProfile.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/authors',
      name: 'authors',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AuthorView.vue')
    },
    {
      path: '/authors/:id',
      name: 'AuthorProfile',
      component: AuthorProfile,
      props: (route) => ({ id: Number(route.params.id) })
    },
    {
      path: '/posts/:id',
      name: 'post-title',
      component: () => import('../views/PostView.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { left: 0, top: 0, behavior: 'auto' }
    }
  }
})

export default router
