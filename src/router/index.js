import { createRouter, createWebHistory } from 'vue-router'
import ViewNotes from '../views/ViewNotes.vue'
import ViewEditNote from '../views/ViewEditNote.vue'
import ViewStats from '../views/ViewStats.vue'
import ViewAuth from '../views/ViewAuth.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ViewNotes
    },
    {
      path: '/stats',
      name: 'stats',
      component: ViewStats
    },
    {
      path: '/editNote/:id',
      name: 'edit-note',
      component: ViewEditNote
    },
    {
      path: '/auth',
      name: 'auth',
      component: ViewAuth
    },
  ]
})

export default router
