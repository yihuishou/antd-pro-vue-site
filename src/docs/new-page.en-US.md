# New Page

This "page" refers to a module that is configured with a route and can be directly accessed through a link. To create a new page, usually only a simple configuration is required on the scaffold.

## 1. Add vue files

Create new `vue` files under `src/views`. If there are multiple related pages, you can create a new folder to place related files.

![New Page](/assets/new_page1.png)

The style file uses [Less](https://less.bootcss.com/) by default. If you want, you can introduce the [antd style file](https://github.com/vueComponent/ant-design-vue/blob/master/components/style/themes/default.less) in `style` tag of `vue` file:

![Introduce style files](/assets/new_page2.png)

```css
@import '~ant-design-vue/lib/style/themes/default.less';
```

This makes it easy to get antd style variables and use them in your files, which helps maintain page consistency and facilitates custom themes.

## 2. Add files into menus and routes

Please refer to  [Router&Nav](https://pro.loacg.com/docs/router-and-nav). After adding it，access `http://localhost:8080/new` and you will see the new page.

![The New Page](/assets/new_page3.png)



## 3. Add new model

After the layout and routing are configured, go back to the newly created `newPage.vue` and you can start writing the business code! If you need to use the data flow in [vuex](https://vuex.vuejs.org), you also need to create the corresponding model in `src/store/model`.
