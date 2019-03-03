import Home from '@/views/Home'

const constantRouterMap = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/docs/:page?',
    name: 'docs',
    // route level code-splitting
    // this generates a separate chunk (docs.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "docs" */ '@/views/Docs')
  },
  {
    path: '/components/:page?',
    name: 'components',
    // route level code-splitting
    // this generates a separate chunk (components.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "components" */ '@/views/Components')
  },
  {
    path: 'https://github.com/sendya/ant-design-pro-vue',
    name: 'github_repo_url',
    meta: { target: '_blank' }
  }
]

export { constantRouterMap }
