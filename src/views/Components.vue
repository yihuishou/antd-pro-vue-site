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
        Coming soon
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { mixin } from '@/store/mixin'

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
  }
]
export default {
  name: 'Components',
  mixins: [mixin],
  data () {
    return {
      selectedKeys: [],
      routeMap
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
    this.updateMenu()
  },
  methods: {
    handleClick (e) {
      this.selectedKeys = [e.key]
    },
    updateMenu () {
      const { $route: { params } } = this
      this.selectedKeys = [params.page]
    }
  },
  watch: {
    $route () {
      this.updateMenu()
    }
  }
}
</script>
