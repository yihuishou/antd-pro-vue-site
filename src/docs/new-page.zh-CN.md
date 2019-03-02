# 新增页面

这里的『页面』指配置了路由，能够通过链接直接访问的模块，要新建一个页面，通常只需要在脚手架的基础上进行简单的配置。

## 一、新增vue 文件

在 `src/views` 下新建页面的`vue`文件，如果相关页面有多个，可以新建一个文件夹来放置相关文件。

![新增页面](/assets/newPage1.png)



样式文件默认使用 [CSS Modules](http://www.ruanyifeng.com/blog/2016/06/css_modules.html)，如果需要，你可以在`vue`文件的`style`标签头部引入 [antd 样式变量文件](https://github.com/vueComponent/ant-design-vue/blob/master/components/style/themes/default.less)：

![引用样式文件](/assets/newPage2.png)

```css
@import '~ant-design-vue/lib/style/themes/default.less';
```

这样可以很方便地获取 antd 样式变量并在你的文件里使用，有利于保持页面的一致性，也方便实现定制主题。

## 二、将文件加入菜单和路由

加入菜单和路由的方式请参照 [路由和菜单 - 添加路由/菜单](https://pro.loacg.com/docs/router-and-nav) 中的介绍完成。加好后，访问 `http://localhost:8080/new` 就可以看到新增的页面了。

![页面展示](/assets/newPage3.png)



## 三、新增 model

布局及路由都配置好之后，回到之前新建的 `newPage.vue`，可以开始写业务代码了！如果需要用到 [vuex](https://vuex.vuejs.org/zh/) 中的数据流，还需要在 `src/store/model`  中建立相应的 model。