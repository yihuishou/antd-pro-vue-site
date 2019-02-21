import Home from '@/views/Home'

const constantRouterMap = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/docs',
    name: 'docs',
    // route level code-splitting
    // this generates a separate chunk (docs.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "docs" */ '@/views/Docs')
  },
  {
    path: '/components',
    name: 'components',
    // route level code-splitting
    // this generates a separate chunk (components.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "components" */ '@/views/Components')
  }
]

export { constantRouterMap }
