# Layout

Layout is the outermost structure for a project, usually consists of navigation, footer, sidebar, notification and content. There are also a lot of different layouts within a page.

## Layout in Ant Design Pro
We abstract common layouts in Ant Design Pro, and put them in `/layouts`, includes:

- BasicLayout: Basic Layout, includes header navigation, sidebar and notification.

![BasicLayout](/assets/basic_layout.jpg)

- UserLayout: Layout for login and sign-up.

![UserLayout](/assets/user_layout.jpg)

- PageView: Basic Layout, includes breadcrumbs and intermediate content areas (`slot`).
- RouterView: Blank Layout, used to customize the contents of the secondary menu.
- BlankLayout: Blank Layout

### Usage

Typically, the layout is tightly integrated with the routing system. Ant Design Pro uses `Vue-Router` for routing. For ease of management, we integrate the configuration into `config/router.config.js` and manage it as follows:

```js
// eslint-disable-next-line
import { UserLayout, BasicLayout, RouteView, BlankLayout, PageView } from '@/components/layouts'

export default [
  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    meta: { title: 'Home page' },
    redirect: '/dashboard/workplace',
    children: [
      // dashboard
      {
        path: '/dashboard',
        name: 'dashboard',
        redirect: '/dashboard/workplace',
        component: RouteView,
        meta: { title: 'Gauge', icon: 'dash', permission: ['admin'] },
        children: [
          {
          	path: '',
          	name: '',
          	component: () => import('@/views/...'),
          	meta: { title: '', permission: [ '...' ] }
          },
          {
          	path: '',
          	name: '',
          	hidden: true,
          	component: () => import('@/views/...'),
          	meta: { title: '', keepAlive: true, permission: [ '...' ] }
          }
        ]
      },
      // forms
      {
        path: '/form',
        redirect: '/form/base-form',
        component: PageView,
        meta: { title: 'Form Page', icon: 'form', permission: [ 'form' ] },
        children: [
          {
            path: '/form/base-form',
            name: 'BaseForm',
            component: () => import('@/views/form/BasicForm'),
            meta: { title: 'Basic Form', permission: [ 'form' ] }
          }
        ]
      }
    ]
  }
]
```

See  [router.config.js](https://github.com/sendya/ant-design-pro-vue/blob/master/src/config/router.config.js) for more details. And you can learn more about Vue-Router from offical docs [Vue-Router](https://router.vuejs.org/)

#### Extended configuration for routing

We extended some configuration about the global menu of pro, in `router.config.js`.

```
{
	hidden: true,
    hideChildrenInMenu: true,
    meta: {
        icon: 'dashboard',
        title: 'Title of Menu',
        keepAlive: true,
        permission: ['admin']
    }
}
```
> For more details, please check [Router&Nav](/docs/router-and-nav)

## Ant Design Layout Component

In addition to the build-in layout component of Pro, you can also work with [Layout](https://vue.ant.design/components/layout-cn/) and [Grid](https://vue.ant.design/components/grid-cn/) provided by Ant Design.

### Grid Component

Grid layout is the most commonly used layout in web pages. It is characterized by dividing the page according to a certain proportion, and it can maintain the proportion with the change of the screen, which is flexible.

Ant Design offers more powerful features, the ability to set spacing, support for responsive proportionaling, and support for the `flex` mode, which covers most of the layout. For details, please see: [Grid](https://vue.ant.design/components/grid-cn/).

### Layout Component

If you need more structured layout components, then [Layout](https://vue.ant.design/components/layout-cn/) is your best option. You only need to fill in the blanks to build a professional layout. See [Layout](https://vue.ant.design/components/layout-cn/) for details.

### Building layout components for specific use cases.

Under most cases, we will build more specific components from the above ones, that includes navigation, sidebar, notification, titles etc., An example would be [BasicLayout](https://github.com/sendya/ant-design-pro-vue/blob/master/src/components/layouts/BasicLayout.vue) from Ant Design Pro.

We put layout components inside `components` and `layouts`. It is worth noting that layout components has no fundamental difference from other components, just that it deals with layout.
