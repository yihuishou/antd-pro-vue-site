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
          <a-menu-item key="1">
            <span>AvatarList</span>
            <span class="chinese">用户头像列表</span>
          </a-menu-item>
          <a-menu-item key="2">
            <span>Charts</span>
            <span class="chinese">图表</span>
          </a-menu-item>
          <a-menu-item key="3">
            <span>CountDown</span>
            <span class="chinese">倒计时</span>
          </a-menu-item>
          <a-menu-item key="4">
            <span>FooterToolbar</span>
            <span class="chinese">底部工具栏</span>
          </a-menu-item>
          <a-menu-item key="5">
            <span>NumberInfo</span>
            <span class="chinese">数据文本</span>
          </a-menu-item>
          <a-menu-item key="6">
            <span>Ellipsis</span>
            <span class="chinese">文本自动省略号</span>
          </a-menu-item>
          <a-menu-item key="7">
            <span>Result</span>
            <span class="chinese">处理结果</span>
          </a-menu-item>
          <a-menu-item key="8">
            <span>Trend</span>
            <span class="chinese">趋势标记</span>
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
export default {
  name: 'Components',
  data () {
    return {
      selectedKeys: ['1']
    }
  },
  methods: {
    handleClick (e) {
      console.log('click', e)
      this.selectedKeys = [e.key]
    }
  }
}
</script>
