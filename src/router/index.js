import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import BookAdmin from '@/components/BookAdmin'
import BookList from '@/components/BookList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/bookAdmin',
      name: 'BookAdmin',
      component: BookAdmin
    },
    {
      path: '/books',
      component: BookList,
    },
  ]
})
