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
          component: import('../components/ClientListPage.vue')
        },
        {
          path: '/add-sample',
          name: 'Add-sample',
          component: import('../components/AddSampleForm.vue')
        },
        {
          path: '/client-details',
          name: 'Client-Details',
          component: import('../components/ClientPage.vue')
        },
        {
          path: '/feedback',
          name: 'Feedback',
          component: import('../components/Feedback.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/client',
      name: 'Client-page',
      component: () => import('../views/SampleView.vue')
    },
    {
      path: '/client/samples',
      name: 'View-Samples',
      component: () => import('../components/SampleInfo.vue')
    }
  ]
})

export default router
