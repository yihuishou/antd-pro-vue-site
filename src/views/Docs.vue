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
          <a-menu-item-group key="g1">
            <template slot="title"><span>入门</span></template>
            <a-menu-item key="1">开始使用</a-menu-item>
            <a-menu-item key="2">路由和菜单</a-menu-item>
            <a-menu-item key="3">布局</a-menu-item>
            <a-menu-item key="4">新增页面</a-menu-item>
            <a-menu-item key="5">新增业务组件</a-menu-item>
            <a-menu-item key="6">样式</a-menu-item>
            <a-menu-item key="7">和服务端交互</a-menu-item>
            <a-menu-item key="8">引入外部模块</a-menu-item>
            <a-menu-item key="9">构建和发布</a-menu-item>
          </a-menu-item-group>
          <a-menu-item-group key="g2">
            <template slot="title"><span>进阶</span></template>
            <a-menu-item key="10">图表</a-menu-item>
            <a-menu-item key="11">业务图标</a-menu-item>
            <a-menu-item key="12">国际化</a-menu-item>
            <a-menu-item key="13">更换主题</a-menu-item>
            <a-menu-item key="14">错误处理</a-menu-item>
            <a-menu-item key="15">权限管理</a-menu-item>
          </a-menu-item-group>
          <a-menu-item-group key="g3">
            <template slot="title"><span>其他</span></template>
            <a-menu-item key="16">更新日志</a-menu-item>
            <a-menu-item key="17">常见问题</a-menu-item>
            <a-menu-item key="18">设计资源</a-menu-item>
          </a-menu-item-group>
        </a-menu>
      </a-col>
      <a-col class="main-container" :xs="24" :sm="24" :md="24" :lg="18" :xl="19" :xxl="20">
        22
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  name: 'Docs',
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
