import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AdminView.vue')
    }
  },
  {
    path: '/login',
    name: 'login',
    component: function () {
      return import('../views/LoginView.vue')
    }
  },
  {
    path: '/subjects',
    name: 'subjects',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/SubjectsView.vue')
    }
  },
  {
    path: '/teachers',
    name: 'teachers',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/TeachersView.vue')
    }
  },
  {
    path: '/learners',
    name: 'learners',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/LearnersView.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
