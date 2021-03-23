# 更换主题

我们基于 Ant Design 视觉风格和 React Ant Design Pro 的成功，搭建了这套风格经过设计师的精心调配，适合大多数中后台项目。如果对视觉风格有额外的要求，推荐使用以下的方式进行定制。

## 主题定制

我们基于 Ant Design React 进行开发，完全支持官方提供的 less 变量定制功能. 你可以在脚手架目录中找到 `vue.config.js` 代码类似这样:

```js
css: {
  loaderOptions: {
    less: {
      modifyVars: {
        'primary-color': '#F5222D',
        'link-color': '#F5222D',
        'border-radius-base': '4px'
      },
      javascriptEnabled: true
    }
  }
}
```

当修改完毕后，重启环境，即可生效 ( `yarn run serve` 或 `npm run serve` )

更多方式可以参考官方文档：[定制主题](https://vue.ant.design/docs/vue/customize-theme-cn/)。

## 样式覆盖

Ant Design 的通用样式变量可能无法满足所有定制需求，你需要全局覆盖默认的组件样式。我们可以参照 [样式](/docs/style) 章节来覆盖样式。

### 全局覆盖组件

比如新建全局覆盖样式表 `src/global.less` 并修改所有标签的字体大小。

```less
.ant-tag {
  font-size: 12px;
}
```
并将样式表引入到 `src/core/use.js` 或者 `src/core/lazy.lib.js` 即可

### 单独覆盖指定组件

```less
// sample.less
.customTag {
  font-size: 18px;
}
```

```vue
<template>
  <a-tag class="customTag">定制标签</a-tag>
</template>

<style lang="less" scoped>
@import './sample.less';

</style>
```

## 在线切换主题
pro 中提供了一个可以在线切换主题和布局的 设置抽屉，使用这个抽屉可以很方便的查看更换主题的效果，无需重启脚手架。
为了方便预览，设置中的配置项会被保存在 `LocalStorage`，你可以自行定义储存位置。

> 更换浏览器，或者强制刷新浏览器缓存，可能被清空。

> 在线修改颜色使用的是 less 在线编译，在线编译 less 需要时间，并且会造成卡顿 需要注意。
> 该功能仅用于预览，若需用于生产环境，请自行优化
