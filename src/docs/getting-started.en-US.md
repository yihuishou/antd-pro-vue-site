# Getting Started

Ant Design Pro is a production-ready solution for admin interfaces. Built on the design principles developed by [Ant Design](http://ant.design/), this project introduces higher level components; we have developed templates, components, and a corresponding design kit to improve the user and development experience for admin interfaces.


Your help is welcomed and much appreciated. With your feedback we can make incremental progress towards elegant and well designed components. Please open a issue or submit a pull request!

With those objectives in mind, we have built the following templates and a scaffold based on React.js, which should help you prototyping production-ready admin interfaces.

```
- Dashboard
  - Analytic
  - Monitor
  - Workspace
- Form
  - Basic Form
  - Step Form
  - Advanced Form
- List
  - Standard Table
  - Standard List
  - Card List
  - Search List (Project/Applications/Article)
- Profile
  - Simple Profile
  - Advanced Profile
- Result
  - Success
  - Failed
- Exception
  - 403
  - 404
  - 500
- Account
  - Account Center
  - Account Settings
- User
  - Login
  - Register
  - Register Result
```

## Preparation

You will need [node](http://nodejs.org/), [git](https://git-scm.com/). The project is based on  [ES2015+](http://es6.ruanyifeng.com/)、[Vue.Js](https://vuejs.org/)、[Vuex](https://vuex.vuejs.org/)、[Vue-Router](https://router.vuejs.org/)、[g2](https://antv.alipay.com/zh-cn/g2/3.x/index.html) and [antd-vue](https://vue.ant.design/docs/vue/introduce-cn/). It would be helpful if you have pre-existing knowledge on those.

## Installation

Clone the project from Github.

```bash
$ git clone --depth=1 https://github.com/sendya/ant-design-pro-vue.git my-project
$ cd my-project
```

## Scaffolding

We have provided a scaffold which includes common routes for admins and demonstrates our component library. The project layout is as follows:

```bash
├── public
│   └── logo.png             # LOGO
|   └── index.html           # Vue entrance template
├── src
│   ├── api                  # Api, ajax, etc.
│   ├── assets               # Local static files
│   ├── config               # Basic config, include routes and global configuration
│   ├── components           # Components
│   ├── core                 # Starter, project configuration, library
│   ├── router               # Vue-Router
│   ├── store                # Vuex
│   ├── utils                # Utilities
│   ├── locales              # I18n resouces
│   ├── views                # Sub-pages and templates
│   ├── App.vue              # Vue template entrance
│   └── main.js              # Vue javascript entrance
│   └── permission.js        # Router permission control
├── tests                    # Tests Configuration
├── README.md
└── package.json
```

## Development

Install Dependencies:

```bash
$ yarn install
```
Run server:
```bash
$ yarn run serve
```

This will automatically open [http://localhost:8000](http://localhost:8080), If you see the following page then you have succeeded.
![](/assets/user_layout.jpg)

You're all set!

We have built-in mock data, hot module reloading, state management,i18n, global router, etc. You can continue exploring other documents for more details on those topics.
