<template>
  <div id="header" class="header">
    <a-row>
      <a-col :xs="24" :sm="24" :md="8" :lg="8" :xl="5" :xxl="4">
        <a id="logo" href="/">
          <img src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" alt="logo"/>
          <span>Antv IDEAL</span>
        </a>
      </a-col>
      <a-col :xs="0" :sm="0" :md="16" :lg="16" :xl="19" :xxl="20">
        <div id="search-box">
          <a-icon type="search" />
          <a-select
            showSearch
            :value="value"
            placeholder="搜索..."
            style="width: 200px"
            :defaultActiveFirstOption="false"
            :showArrow="false"
            :filterOption="false"
            @search="handleSearch"
            @change="handleChange"
            :notFoundContent="null"
          >
            <a-select-option v-for="d in data" :key="d.value">{{ d.text }}</a-select-option>
          </a-select>
        </div>
        <div class="header-meta">
          <div id="preview">
            <a id="preview-button" href="https://pro.loacg.com" ref="noopener noreferrer">
              <a-button icon="eye-o">预览</a-button>
            </a>
          </div>
          <div id="lang">
            <a-button>English</a-button>
          </div>
          <div id="menu">
            <a-menu mode="horizontal">
              <a-menu-item key="home">首页</a-menu-item>
              <a-menu-item key="docs">文档</a-menu-item>
              <a-menu-item key="comp">组件</a-menu-item>
            </a-menu>
          </div>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      data: [],
      value: undefined
    }
  },
  methods: {
    handleSearch (value) {

    },
    handleChange (value) {
      console.log(value)
      this.value = value
    }
  }
}
</script>
