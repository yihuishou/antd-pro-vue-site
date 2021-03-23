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
            <a-menu-item v-for="item in componentsRouterMap" :key="item.url">
              <router-link :to="{ name: 'components', params: { page: item.url } }">
                <span>{{ item.title }}</span>
                <span v-if="isCN" class="chinese">{{ item.cnTitle }}</span>
              </router-link>
            </a-menu-item>
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
import { componentsRouterMap } from '@/config/router.config'
import marked from 'marked'

const mdImport = (name, lang = 'en-US') => {
  return import(`../docs/components/${name}.${lang}.md`)
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
  name: 'Components',
  mixins: [mixin],
  data () {
    return {
      selectedKeys: [],
      componentsRouterMap,
      marked,
      text: ''
    }
  },
  computed: {
    isCN () {
      return this.currentLang === 'zh-CN'
    }
  },
  created () {
    const { $route: { params } } = this
    const page = params.page || 'avatar-list'
    this.$router.push({ name: 'components', params: { page: page } })
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
      console.log('import markdown:', md)
      md.then((...rest) => {
        this.text = rest[0].default
      }).catch(err => {
        console.log('import err', err)
        $message.error(err.message)
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
