import {createRouter, createWebHistory} from 'vue-router'

import HomePage from "@/views/HomePage";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/authors',
    name: 'AuthorsPage',
    component: () => import('../views/AuthorsPage.vue' ),
  },
  {
    path: '/books',
    name: 'BooksPage',
    component: () => import('../views/BooksPage.vue' )
  },
  {
    path: '/search',
    name: 'SearchPage',
    component: () => import('../views/SearchPage.vue' )
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
