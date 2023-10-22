import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
    {
      path: '/admin',
      name: 'Admin',
      component: HomeView,
      meta: { auth: true },
      children: [
        {
          path: '',
          name: 'Clients',
          component: () => import('../components/ClientListPage.vue'),
          meta: { auth:true }
        },
        {
          path: '/admin/add-client',
          name: 'Add-client',
          component: () => import('../components/AddClientForm.vue'),
          meta: { auth:true }
        },
        {
          path: '/admin/client-details/:id',
          name: 'Client-Details',
          component: () => import('../components/ClientPage.vue'),
          meta: { auth:true },
        },
        // {
        //   path: '/feedback',
        //   name: 'Feedback',
        //   component: () => import('../components/Feedback.vue'),
        //   meta: { auth:true }
        // }
      ]
    },
    {
      path: '/admin/login',
      name: 'Login',
      component: () => import('../views/LoginView.vue'),
      meta: { auth: false }
    },
    {
      path: '/',
      name: 'Client-page',
      component: () => import('../views/SampleView.vue'),
      meta: { auth: false },
    },
    {
      path: '/:id',
      name: 'View-Samples',
      component: () => import('../components/SampleInfo.vue'),
      meta: { auth: false},
      props: (route) => {
        const id= Number.parseInt(route.params.id, 10)
        if (Number.isNaN(id)) {
          return 0
        }
        return { id }
      }
    }
  ]

  function isAuthenticated() {
    const token = localStorage.getItem('token') ? localStorage.getItem('token') : sessionStorage.getItem('token');
    return !!token;
  }

  function clientLogin() {
    const logged = localStorage.getItem('client');
    return !!client;
  }

  const router = createRouter({
    history: createWebHistory(),
    routes,
  })

router.beforeEach((to, from, next) => {
  if (to.meta.auth) {
    if (!isAuthenticated()) {
      next({name: 'Login'});
    } else {
      next();
    }
  } else {
    next();
  }
});


export default router
