import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: '/',
          name: 'Samples',
          component: import('../components/samplePage.vue')
        },
        {
          path: '/add-sample',
          name: 'Add-sample',
          component: import('../components/AddSampleForm.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/sample',
      name: 'Sample-page',
      component: () => import('../views/SampleView.vue')
    },
  ]
})

export default router
