<script>
const docsList = [
  { key: 'introduce', enTitle: 'Ant Design of Vue', title: 'Ant Design of Vue' },
  { key: 'getting-started', enTitle: 'Getting Started', title: '快速上手' },
  { key: 'use-with-vue-cli', enTitle: 'Use in vue-cli', title: '在 vue-cli 中使用' },
  { key: 'customize-theme', enTitle: 'Customize Theme', title: '定制主题' },
  { key: 'changelog', enTitle: 'Change Log', title: '更新日志' },
  { key: 'i18n', enTitle: 'Internationalization', title: '国际化' },
  { key: 'faq', enTitle: 'FAQ', title: '常见问题' },
  { key: 'sponsor', enTitle: 'Sponsor', title: '支持我们' },
  { key: 'download', enTitle: 'Download Design Resources', title: '下载设计资源' },
]

export default {
  name: 'Layout',
  data () {
    return {

    }
  },
  methods: {
    getDocsMenu (pagesKey) {
      const docsMenu = []
      docsList.forEach({ key, enTitle, title }, index) => {
        const k = `${key}-cn`
        pagesKey.push({
          name: k,
          url: `/docs/vue/${k}/`,
          title: title
        })
        docsMenu.push(<a-menu-item key={k}
          <router-link to={`/docs/vue/${k}/`}>{title}</router-link>
        </a-menu-item>)
        return docsMenu
      }
    }
  },
  render () {
      return (
        <div class='page-wrapper'>
        </div>
      )
  }
}
</script>

<style lang="less" scoped>

</style>
