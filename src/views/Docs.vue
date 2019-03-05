<template>
  <div class="main-wrapper">
    <a-row>
      <a-col class="main-menu" :xs="24" :sm="24" :md="24" :lg="6" :xl="5" :xxl="4">
        <a-menu
          class="aside-container"
          mode="inline"
          @click="handleClick"
          :selectedKeys="selectedKeys"
          :inlineIndent="54"
        >
          <a-menu-item-group v-for="(route, index) in docsRouterMap" :key="index">
            <template slot="title"><span>{{ route.title }}</span></template>
            <a-menu-item v-for="item in route.children" :key="item.url">
              <router-link :to="{ name: 'docs', params: { page: item.url } }"><span>{{ item.title }}</span></router-link>
            </a-menu-item>
          </a-menu-item-group>
        </a-menu>
      </a-col>
      <a-col class="main-container" :xs="24" :sm="24" :md="24" :lg="18" :xl="19" :xxl="20">
        <div class="markdown" v-html="marked(text)">
        </div>
      </a-col>
    </a-row>
    <a-back-top />
  </div>
</template>

<script>
import { mixin } from '@/store/mixin'
import { docsRouterMap } from '@/config/router.config'
import marked from 'marked'

const mdImport = (name, lang = 'en-US') => {
  return import(`../docs/${name}.${lang}.md`)
}

const renderer = new marked.Renderer()
renderer.heading = function (text, level) {
  return '<h' +
    level +
    ' id="' +
    text.replace(/[^\w]+/g, '-') +
    '">' +
    text +
    '</h' +
    level +
    '>\n'
}
marked.setOptions({
  renderer,
  gfm: true,
  tables: true,
  breaks: true,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: true
})

export default {
  name: 'Docs',
  components: {
  },
  mixins: [mixin],
  data () {
    /*
    let text = md

    text = text || ''
    text = text.split('\n').map(t => t.trim()).join('\n')
*/

    return {
      selectedKeys: [],
      docsRouterMap,
      marked,
      text: ''
    }
  },
  created () {
    const { $route: { params } } = this
    const page = params.page || 'getting-started'
    this.$router.push({ name: 'docs', params: { page: page } })
    if (page && page !== '') {
      this.updateMenu()
    }
  },
  methods: {
    handleClick (e) {
      this.selectedKeys = [e.key]
    },
    updateMenu () {
      const { $route: { params }, $message } = this
      this.selectedKeys = [params.page]
      const md = mdImport(params.page, 'zh-CN')
      console.log('import markdown:', md)
      md.then((...rest) => {
        this.text = rest[0].default
      }).catch(err => {
        console.log('import err', err)
        $message.error(<span>无法找到改文档或者该文档尚未完成。如果你是开发者，可以获取 <code style="background: #ccc">{err.message}</code> 并完成该文档</span>)
      })
    }
  },
  watch: {
    $route () {
      this.updateMenu()
    }
  }
}
</script>
