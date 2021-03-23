# Style

This document describes how to use and organize style files in your project. If you want to get basic CSS knowledge or consult properties, you can refer to the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference).

---


## Less

Ant Design Pro uses less as a style language by default, and it is recommended to learn about [less](http://lesscss.org/) before using it.

In the style development process, there are two prominent problems:

- Global Pollution —— CSS selectors are globally valid. Selectors with the same name in different files will be built together, and the former will be overrided by the latter.
- Complex Selector —— In order to avoid the above problem, we have to be careful when writing styles. The increase in flags for range restriction will lead to a growing class name, besides that, naming style confusion in multi person development and an increasing number of selectors on an element is hard to avoid.

In order to solve the above problem, our scaffolding is recommended to use the `scoped` solution. Let's first look at how to write styles in this mode:

```vue
<template>
	<div class="title">
		{{ title }}
	</div>
</template>

<script>
export default {
    data () {
        return {
            title: 'miaowmiaow'
        }
    },
    methods: {
        
    }
}
</script>

<style lang="less" scoped>
import "@/components/index.less";

.title {
    color: @heading-color;
    font-weight: 600;
    margin-bottom: 16px;
}
</style>
```


In the above example, `.title` will only work in this file. You can use the same name selector in any other file, and it will not affect this. But what if we want to take effect globally? You can extract them into a public file, such as `components/global.less` extracted by `Pro` and then import it in `main.js`.

```less
// global.less
.title {
  color: @heading-color;
  font-weight: 600;
  margin-bottom: 16px;
}

.text {
  font-size: 16px;
}

.footer {
  color: #ccc;
}
.sider {
  background: #ebebeb;
}
```


The handling of `scoped` in Vue is very simple, that is, the dom element of each class name is converted according to certain rules, the `data-v-xx` attribute is added, and the compiled style sheet class name and `data-x` cooperate to ensure its uniqueness. If you look at the dom structure of this example in a browser, you will find that the actual rendering looks like this:

```html
<div class="title" data-v-c05f9fc4>title</div>
```
The class name is automatically added with a hash value selector, which guarantees its uniqueness.

In addition to the basics above, there are some key points to note:

- Since you don't have to worry about duplicate class names, your class can be as simple as possible.
- https://juejin.im/post/5ac5fd7f5188257cc20d854e

## Style file category

In a project, style files can be divided into different categories depending on the function.

### src/global.less

Global style files, where you can make some common settings, such as the ones included in the scaffolding:

```css
html, body {
  height: 100%;
}

body {
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

> Because antd comes with some global settings, such as font size, color, line height, etc., here, you only need to pay attention to your own personalized needs, without a lot of reset.

### src/utils/utils.less

Here you can place some tool functions for calling, such as `.clearfix`.

### Module style

A file that is in effect for a module/page.

#### Universal module level

For example, `src/layouts/BasicLayout.less`, which contains some basic layout styles, is referenced by `src/layouts/BasicLayout.vue`, and the pages in the project that use this layout do not need to care about the overall layout settings. If you need to use other layouts in your project, it is also recommended to put the relevant js and less here `src/layouts`.

#### Page level

Styles related to specific pages, such as `src/views/dashborad/Monitor.less`, are only relevant to the content of that page. Under normal circumstances, if the content of the page is not particularly complicated, with the cooperation of the previous global style and common module style, there should be not much to write here.

#### Component level

The styles associated with the component, there are some fragments that are reused in the page or relatively independent functions, you can refine them into components, and the related styles should be refined and placed in the component instead of being mixed in the page.

> The above style categories are for independent style files. Sometimes the style configuration is particularly simple and has not been reused. You can also use the inline style `style="{ fontSize: fontSizeVar }"` to set it.

## Override component style

Due to the individual needs, we often encounter situations where we need to override the component style. Here is a simple example.

```vue
<template>
	<div class="test-wrapper">
		<a-select>
			<a-select-option value="1">Option 1</a-select-option>
			<a-select-option value="2">Option 2</a-select-option>
			<a-select-option value="3">Option 3</a-select-option>
		</a-select>
	</div>
</template>

<script>
export default {
    
}
</script>
<style lang="less" scoped>
// When using CSS, you can use >>> for style penetration.
.test-wrapper >>> .ant-select {
    font-size: 16px;
}

// When using scss and less, you can use /deep/ for style penetration
.test-wrapper /deep/ .ant-select {
    font-size: 16px;
}
</style>
```

The method is very simple, there are two points to note:

- The introduced antd component class name is not converted by the CSS compiler, so the overridden class name `.ant-select` must rely on the penetration scheme provided by Vue to penetrate the component's style.
- Because of the relationship of the previous one, the coverage is global. To prevent impact on other Select components, you need to wrap the extra class to limit the scope of the style.
