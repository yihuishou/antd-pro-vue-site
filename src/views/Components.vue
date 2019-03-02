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
          <a-menu-item v-for="item in routeMap" :key="item.url">
            <router-link :to="{ name: 'components', params: { page: item.url } }">
              <span>{{ item.title }}</span>
              <span v-if="isCN" class="chinese">{{ item.cnTitle }}</span>
            </router-link>
          </a-menu-item>
        </a-menu>
      </a-col>
      <a-col class="main-container" :xs="24" :sm="24" :md="24" :lg="18" :xl="19" :xxl="20">
        <div class="markdown" v-html="marked(text)">
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { mixin } from '@/store/mixin'
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
const routeMap = [
  {
    title: 'AvatarList',
    cnTitle: '用户头像列表',
    url: 'avatar-list'
  },
  {
    title: 'Charts',
    cnTitle: '图表',
    url: 'charts'
  },
  {
    title: 'CountDown',
    cnTitle: '倒计时',
    url: 'count-down'
  },
  {
    title: 'FooterToolbar',
    cnTitle: '底部工具栏',
    url: 'footer-toolbar'
  },
  {
    title: 'NumberInfo',
    cnTitle: '数据文本',
    url: 'number-info'
  },
  {
    title: 'Ellipsis',
    cnTitle: '文本自动省略号',
    url: 'ellipsis'
  },
  {
    title: 'Result',
    cnTitle: '处理结果',
    url: 'result'
  },
  {
    title: 'Trend',
    cnTitle: '趋势标记',
    url: 'trend'
  },
  {
    title: 'Table',
    cnTitle: '数据表格',
    url: 's-table'
  },
  {
    title: 'IconSelector',
    cnTitle: '图标选择器',
    url: 'icon-selector'
  },
  {
    title: 'TwoStepCaptcha',
    cnTitle: '两步验证 FMA',
    url: 'two-step-captcha'
  },
  {
    title: 'ActionPermission',
    cnTitle: '操作权限',
    url: 'action-permission'
  }
]
export default {
  name: 'Components',
  mixins: [mixin],
  data () {
    return {
      selectedKeys: [],
      routeMap,
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
      this.selectedKeys = [params.page]
      const md = mdImport(params.page, 'zh-CN')
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
    }
  }
}
</script>
