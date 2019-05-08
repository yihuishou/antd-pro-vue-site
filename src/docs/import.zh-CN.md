# 引入外部模块

除了 `ant-design-vue` 组件以及脚手架内置的业务组件，有时我们还需要引入其他外部模块，这里以引入富文本组件 [vue-quill-editor](https://www.npmjs.com/package/vue-quill-editor) 为例进行介绍，如果该组件已更新引入方式，可直接自行前往组件首页查看如何引入，并以官方为准。

---

## 引入依赖

在终端输入下面的命令完成安装：

```bash
$ yarn add vue-quill-editor
or
$ npm install vue-quill-editor --save
```
> 加上 `--save` 参数会自动添加依赖到 package.json 中去。

## 使用

### 全局引入

```js
import Vue from 'vue'
import VueQuillEditor from 'vue-quill-editor'

// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

Vue.use(VueQuillEditor, /* { default global options } */)
```



### 局部按需引入

```vue
<template>
	<div>
        <quill-editor ref="myTextEditor"
                      v-model="content"
                      :config="editorOption"
                      @blur="onEditorBlur($event)"
                      @focus="onEditorFocus($event)"
                      @ready="onEditorReady($event)">
        </quill-editor>
	</div>
</template>

<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import { quillEditor } from 'vue-quill-editor'

export default {
  components: {
    quillEditor
  },
  data () {
      return {
          content: '<h2>I am Example</h2>',
          editorOption: {
           // something config
          }
      }
  },
  // 如果需要手动控制数据同步，父组件需要显式地处理changed事件
  methods: {
    onEditorBlur(editor) {
      console.log('editor blur!', editor)
    },
    onEditorFocus(editor) {
      console.log('editor focus!', editor)
    },
    onEditorReady(editor) {
      console.log('editor ready!', editor)
    },
    onEditorChange({ editor, html, text }) {
      // console.log('editor change!', editor, html, text)
      this.content = html
    }
  },
  // 如果你需要得到当前的editor对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的editor对象，实际上这里的$refs对应的是当前组件内所有关联了ref属性的组件元素对象
  computed: {
    editor() {
      return this.$refs.myTextEditor.quillEditor
    }
  },
  mounted() {
    // you can use current editor object to do something(editor methods)
    console.log('this is my editor', this.editor)
    // this.editor to do something...
  }
}
</script>
```



这样就成功引入了一个富文本组件。有几点值得注意：

- import 时需要注意组件暴露的数据结构；
- 有一些组件需要额外引入样式。

