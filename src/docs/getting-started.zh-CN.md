# 开始使用

## 写在前面

Ant Design Pro 是一个企业级中后台前端/设计解决方案，我们秉承 [Ant Design](http://ant.design/) 的设计价值观，致力于在设计规范和基础组件的基础上，继续向上构建，提炼出典型模板/业务组件/配套设计资源，进一步提升企业级中后台产品设计研发过程中的『用户』和『设计者』的体验。随着『设计者』的不断反馈，我们将持续迭代，逐步沉淀和总结出更多设计模式和相应的代码实现，阐述中后台产品模板/组件/业务场景的最佳实践，也十分期待你的参与和共建。

**本项目默认你有一定的 Vue 基础和 Antd 使用经验,如果你对这些还不熟悉，我们建议你先查阅相关文档 [Vue](https://cn.vuejs.org/)、[Ant Design Vue](https://vue.ant.design/)**

我们基于上述目标和提供了以下的典型模板，并据此构建了一套基于 [Ant Design Vue](https://vue.ant.design) 的中后台管理控制台的脚手架，它可以帮助你快速搭建企业级中后台产品原型。


```
- Dashboard
  - 分析页
  - 监控页
  - 工作台
- 表单页
  - 基础表单页
  - 分步表单页
  - 高级表单页
- 列表页
  - 查询表格
  - 标准列表
  - 卡片列表
  - 搜索列表（项目/应用/文章）
- 详情页
  - 基础详情页
  - 高级详情页
- 结果
  - 成功页
  - 失败页
- 异常
  - 403 无权限
  - 404 找不到
  - 500 服务器出错
- 个人页
  - 个人中心
  - 个人设置
- 帐户
  - 登录
  - 注册
  - 注册成功
```



## 前序准备

你的本地环境需要安装 [node](http://nodejs.org/) 和 [git](https://git-scm.com/)。我们的技术栈基于 [ES2015+](http://es6.ruanyifeng.com/)、[Vue.Js](https://vuejs.org/)、[Vuex](https://vuex.vuejs.org/)、[Vue-Router](https://router.vuejs.org/)、[g2](https://antv.alipay.com/zh-cn/g2/3.x/index.html) 和 [antd-vue](https://vue.ant.design/docs/vue/introduce-cn/)，提前了解和学习这些知识会非常有帮助。

## 安装

从 GitHub 仓库中直接安装最新的脚手架代码。

```bash
$ git clone --depth=1 https://github.com/sendya/ant-design-pro-vue.git my-project
$ cd my-project
```

## 目录结构

我们已经为你生成了一个完整的开发框架，提供了涵盖中后台开发的各类功能和坑位，下面是整个项目的目录结构。

```bash
├── public
│   └── logo.png             # LOGO
|   └── index.html           # Vue 入口模板
├── src
│   ├── api                  # Api ajax 等
│   ├── assets               # 本地静态资源
│   ├── config               # 项目基础配置，包含路由，全局设置
│   ├── components           # 业务通用组件
│   ├── core                 # 项目引导, 全局配置初始化，依赖包引入等
│   ├── router               # Vue-Router
│   ├── store                # Vuex
│   ├── utils                # 工具库
│   ├── locales              # 国际化资源
│   ├── views                # 业务页面入口和常用模板
│   ├── App.vue              # Vue 模板入口
│   └── main.js              # Vue 入口 JS
│   └── permission.js        # 路由守卫(路由权限控制)
├── tests                    # 测试工具
├── README.md
└── package.json
```

## 本地开发

安装依赖。

```bash
$ yarn install
```

> 如果网络状况不佳，可以使用 [cnpm](https://cnpmjs.org/) 进行加速，并使用 `cnpm` 代替 `yarn`

```bash
$ yarn run serve
```

启动完成后会自动打开浏览器访问 [http://localhost:8000](http://localhost:8080)，你看到下面的页面就代表成功了。

接下来你可以修改代码进行业务开发了，我们内建了典型业务模板、常用业务组件、全局路由等等各种实用的功能辅助开发，你可以继续阅读和探索左侧的其他文档。
