# 常见问题

提问之前，请先查阅下面的常见问题。

### Ant Design Vue 和 Ant Design Pro of Vue 有什么区别？

可以理解为 Ant Design Vue 是一套 Vue 组件库，而 Pro 是使用了这套组件库的完整前端脚手架。

### 如何更新 Ant Design Pro？

- 单独升级 `antd` 版本，用于更新基础组件。
- 比较不同的 Ant Design Pro 版本间的差异，手动修改本地文件（针对更新）。
- 也可以尝试合并远程分支：`git pull https://github.com/sendya/ant-design-pro-vue.git`（注意，需要自行解决冲突）。
- 直接在 GitHub 上拷贝最新的典型模板。

### 如何修改默认 webpack 配置？

详见 [CLI3 配置](https://cli.vuejs.org/)。

### 如何使用图片等静态资源？

可以直接使用绝对路径（需要图床支持），若需直接使用本地文件，可按以下方式引入。

```vue
<template>
	<img src="/assets/picture.png" />
	<img src="~assets/picture.png" />
</template>
```

### 我的 url 里怎么有 `#` 号？要如何去掉？

请参考文档 [前端路由与服务端的结合](/docs/deploy#前端路由与服务端的结合)。

### 如何代理到后端服务器？

Ant Design Pro 使用了 vue-cli3，采用 webpack [devServer](https://webpack.docschina.org/configuration/dev-server/) 来支持代理，请阅读 vue-cli 和 webpack 官方文档。
eg:
```js
  devServer: {
    proxy: {
      '/api': {
        target: 'https://example.com/api',
        ws: false,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
```

### 编译好的 dist 怎么运行？

必须在 web 容器环境才能正常使用 html5 history 模式（Pro 默认），具体操作可以参考 https://github.com/sendya/ant-design-pro-vue/issues/41#issuecomment-451359254


### 如何添加 scss 支持？

本项目默认使用 `less`，当然 你也可以更换为 `scss`，执行如下命令即可

```bash
$ yarn add -D node-sass sass-loader
or
$ npm i node-sass sass-loader --save
```

### 项目启动起来后 `sock-js` 跨域？

请确认你是否在非 8000 端口下运行。如果 8000 被占用，应当手动修改 devServer 配置下的端口号

### 站点是否支持国际化？

pro 通过 vue-i18n 插件 [vue-i18n](https://www.npmjs.com/package/vue-i18n) 来实现全球化的功能,详情请见 [国际化](/docs/i18n)。

---

更多常见问题可以查看 [pro/issue](https://github.com/sendya/ant-design-pro-vue/issues) 是否能解决。如果这里未能解决你的问题，欢迎 [报告给我们](https://github.com/sendya/ant-design-pro-vue/issues)。
