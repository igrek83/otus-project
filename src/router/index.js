import {createRouter, createWebHistory} from 'vue-router'

const routeOptions = [
  { path: '/', name: 'HomePage' },
  { path: '/authors', name: 'AuthorsPage' },
  { path: '/books', name: 'BooksPage' },
  { path: '/search', name: 'SearchPage' },
  { path: '/form', name: 'AddFormPage' },
]

const routes = routeOptions.map(route => {
  return {
    ...route,
    component: () => import(/* webpackChunkName: "[request]" */ `../views/${route.name}.vue`)
  }
})

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router