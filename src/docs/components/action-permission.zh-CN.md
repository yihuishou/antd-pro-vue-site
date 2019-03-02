# 操作权限

指令权限，通过比对现有权限与准入权限，决定相关元素的展示（常用于按钮权限控制）。


## 用法

- 在需要控制 action 级别权限的组件上使用 v-action:[method] , 如下：

```html
<!-- 当前登陆用户必须有当前路由权限，并且必须有当前路由 permission 权限下的 [method] Action 操作权限 -->
<i-button v-action:add >添加用户</a-button>
<a-button v-action:delete>删除用户</a-button>
<a v-action:edit @click="edit(record)">修改</a>
```

- 当前用户没有权限时，组件上使用了该指令则会被隐藏
- 当后台权限跟 pro 提供的模式不同时，只需要针对这里的权限过滤进行修改即可
