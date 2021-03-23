<template>
  <div class="main-wrapper">
    <a-row>
      <a-col class="main-menu" :xs="24" :sm="24" :md="24" :lg="6" :xl="5" :xxl="4">
        <a-affix :offset-top="0">
          <section class="main-menu-inner">
            <a-menu
              class="aside-container"
              mode="inline"
              @click="handleClick"
              :selectedKeys="selectedKeys"
              :inlineIndent="54"
            >
              <a-menu-item-group v-for="(route, index) in docsRouterMap" :key="index">
                <template slot="title"><span>{{ currentLang !== 'en-US' ? route.title : route.enTitle }}</span></template>
                <a-menu-item v-for="item in route.children" :key="item.url">
                  <router-link :to="{ name: 'docs', params: { page: item.url } }"><span>{{ currentLang !== 'en-US' ? item.title : item.enTitle }}</span></router-link>
                </a-menu-item>
              </a-menu-item-group>
            </a-menu>
          </section>
        </a-affix>
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
  // text.replace(/[^\w]+/g, '-') +
  // 生产锚点 a 链接
  const vtext = text.replace(/^\s+|\s+$/g, '-')
  const vhtml = `<a href="#${encodeURIComponent(vtext)}" aria-hidden="true" class="anchor">#</a>`
  return '<h' +
    level +
    ' id="' +
    encodeURIComponent(vtext) +
    '">' +
    text + '\n' + vhtml +
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
    return {
      selectedKeys: [],
      docsRouterMap,
      marked,
      text: ''
    }
  },
  created () {
    const { $route: { params, hash } } = this
    const page = params.page || 'getting-started'
    console.log('$route', params, hash)
    this.$router.push({ name: 'docs', params: { page: page }, hash: hash })
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
      if (!params.page) {
        return
      }
      this.selectedKeys = [params.page]
      const md = mdImport(params.page, this.currentLang)
      md.then((...rest) => {
        this.text = rest[0].default
        this.jumpToMark()
      }).catch(err => {
        console.log('import err', err)
        $message.error(<span>该文档尚未完成。如果你是开发者，可以获取 <code style="background: #ccc">{err.message}</code> 并完成该文档<br/>This translate not found</span>)
      })
    },
    jumpToMark () {
      const { $route: { hash } } = this
      this.$nextTick(() => {
        setTimeout(() => {
          const el = document.getElementById(`${hash.substring(1, hash.length)}`)
          console.log('el', el)
          if (el) {
            document.body.scrollTop = parseInt(el.offsetTop)
          }
        }, 800)
      })
    }
  },
  watch: {
    $route () {
      this.updateMenu()
    },
    currentLang () {
      this.updateMenu()
    }
  }
}
</script>
