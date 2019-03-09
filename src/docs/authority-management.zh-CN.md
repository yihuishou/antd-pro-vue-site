# 权限管理

权限控制是中后台系统中常见的需求之一，你可以利用我们提供的 **路由权限** 和 **指令权限**，实现一些基本的权限控制功能，脚手架中也包含了几个简单示例以提供参考。






## 路由权限

Pro 中路由权限的实现方式是通过获取当前用户的权限去比对路由表，生成当前用户具有的权限可访问的路由表，通过 `router.addRoutes` 动态挂载到 `router` 上。

但其实很多公司的业务逻辑可能并不是这样，比如正常业务逻辑下 每个页面的权限都是动态从后端配置的，并不是像 Pro 默认的路由表那样写死在预设的。你可以在后台通过一个 tree 或者其它展现形式给每一个页面动态配置权限，之后将这份路由表存储到后端。
权限/菜单 eg:
![authority-management-permission-list](/assets/authority-p1.png)

![authority-management-permission-object-info](/assets/authority-p3.png)

角色 eg:
![authority-management-roles-list](/assets/authority-p2.png)

>  由 角色关联 到多个 权限(菜单) 。 __角色 1 对多权限__，__用户 1 对多角色__ 或 __用户 1 对 1 角色__；

当用户登录后得到 roles，前端根据 roles 去向后端请求可访问的路由表，从而动态生成可访问页面，之后就是 router.addRoutes 动态挂载到 router 上，你会发现原来是相同的，万变不离其宗。

eg:
```js
// 后端返回的 JSON 动态路由结构
const servicePermissionMap = [
   { 
       title: '仪表盘', 
       key: 'dashboard', 
       component: 'RouteView',
       icon: 'dashboard', 
       children: [{
           title: '分析页',
           key: 'analysis',
           icon: ''
       }, {
           title: '监控页',
           key: 'monitor',
           icon: ''
       }, {
           title: '工作台',
           key: 'wordplace',
           icon: ''
       }]
   }, {
       title: '系统管理',
       key: 'system',
       component: 'PageView',
       icon: 'setting',
       children: [{
           title: '用户管理',
           key: 'user'
       }, {
           title: '角色管理',
           key: 'role'
       }, {
           title: '权限管理',
           key: 'permission'
       }]
   }
   // ...more
]


// router.config.js
import { UserLayout, BasicLayout, RouteView, BlankLayout, PageView } from '@/components/layouts'

const constantRouterComponents = [
    // 基础页面 layout 必须引入
    BasicLayout: BasicLayout,
    BlankLayout: BlankLayout,
    RouteView: RouteView,
    PageView: PageView,
    
    // 你需要动态引入的页面组件
    analysis: () => import('@/views/dashboard/analysis'),
    workplace: () => import('@/views/dashboard/workplace'),
	monitor: () => import('@/views/dashboard/monitor'),
	user: () => import('@/views/system/user'),
	role: () => import('@/views/system/role'),
	permission: () => import('@/views/system/permission')
	// ...more
]

// asyncRouter.js
// 构建动态的路由
const asyncRouters = servicePermissionMap.map(item => {
    // 一级菜单
    const currentRouter = {
            path: `/${item.key}`,
            name: item.key,
            // 获取页面 layout
            components: constantRouterComponents[item.component || item.key],
            meta: [ title: item.title, icon: item.icon || null ]
        }
    // 有子菜单
    if (item.children && item.children.length > 0) {
        currentRouter.children = builderChildrenRouter(item.children, item)
    }
    return currentRouter
})
// 当 asyncRouters 得到构建完之后的值。调用 router.addRoutes(asyncRouters) 把动态生成的路由加入到当前路由表


// 递归构建子菜单
function builderChildrenRouter (routerMap, parentRouter) {
    const accessedRouters = routerMap.map(item => {
        const currentRouter = {
                // 路由地址结果 eg: /dashboard/analysis
                path: `/${parentRouter.key}/${item.key}`,
                name: item.key,
                component: constantRouterComponents[item.key],
                // 页面标题, 菜单图标, 页面权限(供指令权限用，可去掉)
                meta: { title: item.title, icon: item.icon || null, permission: [ item.key ] }
            }
        if (item.children && item.children.length > 0) {
            currentRouter.children = builderChildrenRouter (item.children, item)
        }
		return currentRouter
    })
}

```

> 需要注意的是，上面的代码只是一个例子，实际上可能更加复杂。需要开发者自身有一定的编码能力来实现动态路由功能。

Pro 默认实现的路由权限的控制代码都在 [@/permission.js](https://github.com/sendya/ant-design-pro-vue/blob/master/src/permission.js) 中，如果想修改逻辑，直接在适当的判断逻辑中 `next()` 释放钩子即可。



## 指令权限

Pro 封装了一个非常方便实现按钮级别权限的自定义指令。 [v-action](https://github.com/sendya/ant-design-pro-vue/blob/master/src/permission.js#L83)



使用

```vue
<!-- eg: 当前页面为 dashboard -->

<template>
	<!-- 校验是否有 dashboard 权限下的 add 操作权限 -->
    <a-button v-action:add >添加用户</a-button>

	<!-- 校验是否有 dashboard 权限下的 del 操作权限 -->
    <a-button v-action:del>删除用户</a-button>

	<!-- 校验是否有 dashboard 权限下的 edit 操作权限 -->
    <a v-action:edit @click="edit(record)">修改</a>
</template>
```

> 需要注意的是，指令权限默认从 store 中获取当前已经登陆的用户的角色和权限信息进行比对，所以也要对指令权限的获取和校验 Action 权限部分进行自定义。



在某些情况下，不适合使用 `v-action`，例如 Tab 组件，只能通过手动设置 v-if 来实现。

这时候，Pro 为其提供了原始 v-if 级别的权限判断。

```vue
<template>
	<a-tabs>
        <a-tab-pane v-if="$auth('dashboard.add')" tab="Tab 1">
            some context..
    	</a-tab-pane>
        <a-tab-pane v-if="$auth('dashboard.del')" tab="Tab 2">
            some context..
    	</a-tab-pane>
        <a-tab-pane v-if="$auth('dashboard.edit')" tab="Tab 3">
            some context..
    	</a-tab-pane>
    </a-tabs>
</template>
```

实现思路：

在 Vue 初始化时，[@/utils/helper/permission.js](https://github.com/sendya/ant-design-pro-vue/blob/master/src/utils/helper/permission.js) 作为插件注册到 Vue 原型链上，在 Vue 实例中就可以用 this.$auth() 方法进行权限判断。 当然这里也要对权限的获取和校验 Action 权限部分进行自定义。