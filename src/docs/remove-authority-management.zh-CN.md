# 去除权限控制

当你要开发一个小系统，或一个完全不需要权限控制的，开放后台任意访问的管理面板。

### 去除路由守卫

移除代码 `src/main.js` 第 10 行 `import '@/permission' // permission control`

### 让菜单生成不经过动态路由

修改 `src/router/index.js`
```js
import Vue from 'vue'
import Router from 'vue-router'
import { constantRouterMap, asyncRouterMap } from '@/config/router.config'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap.concat(asyncRouterMap)
})
```

增加 `src/components/page/GlobalLayout.vue` 第 79 行起
```js
import { asyncRouterMap } from '@/config/router.config.js'
```

修改 `src/components/page/GlobalLayout.vue` 第 120 行起
```js
created () {
  this.menus = asyncRouterMap.find((item) => item.path === '/').children
  // this.menus = this.mainMenu.find((item) => item.path === '/').children
  this.collapsed = !this.sidebarOpened
},
```

更加细节参考 Issue: https://github.com/sendya/ant-design-pro-vue/issues/76