import Home from '@/views/Home'

const docsRouterMap = [
  {
    title: '入门',
    children: [
      {
        title: '开始使用',
        enTitle: 'Getting Started',
        url: 'getting-started'
      },
      {
        title: '路由和菜单',
        enTitle: 'Router and Nav',
        url: 'router-and-nav'
      },
      {
        title: '布局',
        enTitle: 'Layout',
        url: 'layout'
      },
      {
        title: '新增页面',
        enTitle: 'New Page',
        url: 'new-page'
      },
      {
        title: '新增业务组件',
        enTitle: 'New Component',
        url: 'new-component'
      },
      {
        title: '样式',
        enTitle: 'Style',
        url: 'style'
      },
      {
        title: '和服务端交互',
        enTitle: 'Communicate with Server',
        url: 'server'
      },
      {
        title: '引入外部模块',
        enTitle: 'Import Module',
        url: 'import'
      },
      {
        title: '构建和发布',
        enTitle: 'Build & Deploy',
        url: 'deploy'
      }
    ]
  },
  {
    title: '进阶',
    children: [
      {
        title: '图表',
        enTitle: 'Charts',
        url: 'graph'
      },
      {
        title: '业务图标',
        enTitle: 'BIZ Icon',
        url: 'biz-icon'
      },
      {
        title: '国际化',
        enTitle: 'i18n',
        url: 'i18n'
      },
      {
        title: '更换主题',
        enTitle: 'Theme',
        url: 'theme'
      },
      {
        title: '错误处理',
        enTitle: 'Error Handle',
        url: 'error-handle'
      },
      {
        title: '权限管理',
        enTitle: 'Authority Management',
        url: 'authority-management'
      },
      {
        title: '去除权限控制',
        enTitle: 'Remove Authority',
        url: 'remove-authority-management'
      }
    ]
  },
  {
    title: '其他',
    children: [
      {
        title: '更新日志',
        enTitle: 'ChangeLog',
        url: 'changelog'
      },
      {
        title: '常见问题',
        enTitle: 'FAQ',
        url: 'faq'
      },
      {
        title: '设计资源',
        enTitle: 'Design Kit',
        url: 'resource'
      }
    ]
  }
]

const componentsRouterMap = [
  {
    title: 'AvatarList',
    cnTitle: '用户头像列表',
    url: 'avatar-list'
  },
  {
    title: 'Charts',
    cnTitle: '图表',
    url: 'charts'
  },
  {
    title: 'CountDown',
    cnTitle: '倒计时',
    url: 'count-down'
  },
  {
    title: 'FooterToolbar',
    cnTitle: '底部工具栏',
    url: 'footer-toolbar'
  },
  {
    title: 'DescriptionList',
    cnTitle: '描述文本',
    url: 'description-list'
  },
  {
    title: 'NumberInfo',
    cnTitle: '数据文本',
    url: 'number-info'
  },
  {
    title: 'Ellipsis',
    cnTitle: '文本自动省略号',
    url: 'ellipsis'
  },
  {
    title: 'Result',
    cnTitle: '处理结果',
    url: 'result'
  },
  {
    title: 'Trend',
    cnTitle: '趋势标记',
    url: 'trend'
  },
  {
    title: 'Table',
    cnTitle: '数据表格',
    url: 's-table'
  },
  {
    title: 'IconSelector',
    cnTitle: '图标选择器',
    url: 'icon-selector'
  },
  {
    title: 'TwoStepCaptcha',
    cnTitle: '两步验证 FMA',
    url: 'two-step-captcha'
  },
  {
    title: 'ActionPermission',
    cnTitle: '操作权限',
    url: 'action-permission'
  }
]

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

export { constantRouterMap, docsRouterMap, componentsRouterMap }
