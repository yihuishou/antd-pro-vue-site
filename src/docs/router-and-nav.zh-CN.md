# 路由和菜单

路由和菜单是组织起一个应用的关键骨架，pro 中的路由为了方便管理，使用了中心化的方式，在 [`router.config.js`](https://github.com/sendya/ant-design-pro-vue/blob/master/src/config/router.config.js) 统一配置和管理。

## 基本结构

在这一部分，脚手架通过结合一些配置文件、基本算法及工具函数，搭建好了路由和菜单的基本框架，主要涉及以下几个模块/功能：

- `路由管理` 通过约定的语法根据在 [`router.config.js`](https://github.com/sendya/ant-design-pro-vue/blob/master/src/config/router.config.js) 中配置路由。
- `菜单生成` 根据路由配置来生成菜单。菜单项名称，嵌套路径与路由高度耦合。
- `面包屑` 组件 [PageHeader](http://pro.loacg.com/components/page-header) 中内置的面包屑也可由脚手架提供的配置信息自动生成。

下面简单介绍下各个模块的基本思路，如果你对实现过程不感兴趣，只想了解应该怎么实现相关需求，可以直接查看[需求实例](/docs/router-and-nav#需求实例)。

### 路由

目前脚手架中所有的路由都通过 [`router.config.js`](https://github.com/sendya/ant-design-pro-vue/blob/master/src/config/router.config.js) 来统一管理，在 `vue-router` 的配置中我们增加了一些参数，如 `hideChildrenInMenu`,`meta.title`,`meta.icon`,`meta.permission`，来辅助生成菜单。其中：

- `hideChildrenInMenu` 用于隐藏不需要在菜单中展示的子路由。用法可以查看 `分步表单` 的配置。
- `hidden` 可以在菜单中不展示这个路由，包括子路由。效果可以查看 `dashboard/monitor`页面。
- `meta.title` 和 `meta.icon`分别代表生成菜单项的文本和图标。
- `meta.permission` 用来配置这个路由的权限，如果配置了将会验证当前用户的权限，并决定是否展示。
- `meta.hidden` 可以强制子菜单不显示在菜单上(和父级 `hideChildrenInMenu` 配合)
- `meta.hiddenHeaderContent` 可以强制当前页面不显示 [PageHeader](https://github.com/sendya/ant-design-pro-vue/blob/dev/v2/src/components/PageHeader/PageHeader.vue#L6) 组件中的页面带的 面包屑和页面标题栏

### 菜单

菜单根据 [`router.config.js`](https://github.com/sendya/ant-design-pro-vue/blob/master/src/config/router.config.js) 生成，具体逻辑在 `src/store/modules/permission.js` 中的 `actions.GenerateRoutes` 方法实现。

> 如果你需要从服务器请求菜单

## 需求实例

上面对这部分的实现概要进行了介绍，接下来通过实际的案例来说明具体该怎么做。

### 菜单跳转到外部地址

你可以直接将完整 url 填入 path 中，框架会自动处理。

```js
{
    path: 'https://pro.loacg.com/docs/getting-started',
    name: 'docs',
    meta: {
        title: '文档', 
        target: '_blank' // 打开到新窗口
   }
}
```
加好后，会默认生成相关的路由及导航。

### 新增布局

在脚手架中我们通过嵌套路由来实现布局模板。[`router.config.js`](https://github.com/sendya/ant-design-pro-vue/blob/master/src/config/router.config.js) 是一个数组，其中第一级数据就是我们的布局，如果你需要新增布局可以再直接增加一个新的一级数据。

```js
{
    path: '/new-router',
    name: 'newRouter',
    redirect: '/new-router/ahaha',
    component: RouteView,
    meta: { title: '仪表盘', keepAlive: true, permission: [ 'dashboard' ] },
    children: [
    {
        path: '/new-router/ahaha',
        name: 'ahaha',
        component: () => import('@/views/dashboard/Analysis'),
        meta: { title: '分析页', keepAlive: false, permission: [ 'ahaha' ] }
    }
}

```

路由配置项 eg: 
```js
/**
 * 路由配置说明：
 * 建议：sider menu 请不要超过三级菜单，若超过三级菜单，则应该设计为顶部主菜单 配合左侧次级菜单
 *
 **/
 {
  redirect: noredirect,
  name: 'router-name',
  hidden: true,
  meta: {
    title: 'title',
    icon: 'a-icon',
    keepAlive: true,
    hiddenHeaderContent: true,
  }
}
```


### API

`{ Route }` 对象

| 参数               | 说明                                              | 类型    | 默认值 |
| ------------------ | ------------------------------------------------- | ------- | ------ |
| hidden             | 控制路由是否显示在 sidebar                        | boolean | false  |
| redirect           | 重定向地址, 访问这个路由时,自定进行重定向         | string  | -      |
| name               | 路由名称, 必须设置,且不能重名                     | string  | -      |
| meta               | 路由元信息（路由附带扩展信息）                    | object  | {}     |
| hideChildrenInMenu | 强制菜单显示为Item而不是SubItem(配合 meta.hidden) | boolean | -      |

`{ Meta }` 路由元信息对象

| 参数                | 说明                                                         | 类型         | 默认值 |
| ------------------- | ------------------------------------------------------------ | ------------ | ------ |
| title               | 路由标题, 用于显示面包屑, 页面标题 *推荐设置                 | string       | -      |
| icon                | 路由在 menu 上显示的图标                                     | [string,svg] | -      |
| keepAlive           | 缓存该路由                                                   | boolean      | false  |
| hidden              | 用于隐藏菜单时，提供递归到父菜单显示 选中菜单项_（可参考 个人页 配置方式）_ | boolean      | false  |
| hiddenHeaderContent | *特殊 隐藏 [PageHeader](https://github.com/sendya/ant-design-pro-vue/blob/master/src/components/layout/PageHeader.vue#L14) 组件中的页面带的 面包屑和页面标题栏 | boolean      | false  |
| permission          | 与项目提供的权限拦截匹配的权限，如果不匹配，则会被禁止访问该路由页面 | array        | []     |

> 路由自定义 `Icon` 请引入自定义 `svg` Icon 文件，然后传递给路由的 `meta.icon` 参数即可



> 请注意 `component: () => import('..') ` 方式引入路由的页面组件为 懒加载模式。具体可以看 [Vue 官方文档](https://router.vuejs.org/zh/guide/advanced/lazy-loading.html)  
> 增加新的路由应该增加在 '/' (index) 路由的 `children` 内  
> `permission` 可以进行自定义修改，只需要对这个模块进行自定义修改即可 [src/store/modules/permission.js#L10](https://github.com/sendya/ant-design-pro-vue/blob/master/src/store/modules/permission.js#L10)
