<template>
  <div id="header" class="header">
    <a-row>
      <a-col :xs="4" :sm="4" :md="8" :lg="8" :xl="5" :xxl="4">
        <router-link id="logo" :to="{ name: 'home' }">
          <img src="/logo.png" alt="logo"/>
          <a-badge count="Vue" :number-style="{ right: '-10px' }">
            <span>Ant Design Pro</span>
          </a-badge>
        </router-link>
      </a-col>
      <a-col :xs="20" :sm="20" :md="16" :lg="16" :xl="19" :xxl="20">
        <div id="search-box">
          <a-icon type="search" />
          <a-select
            showSearch
            :value="value"
            :placeholder="$t('header.searchPlaceholder')"
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
            <a id="preview-button" href="https://preview.pro.loacg.com" ref="noopener noreferrer">
              <a-button icon="eye-o">{{ $t('header.Menu.preview') }}</a-button>
            </a>
          </div>
          <div id="lang">
            <a-button @click="langSwitch">{{ $t('header.Menu.langSwitch') }}</a-button>
          </div>
          <div id="menu">
            <a-menu mode="horizontal" :selectedKeys="selectedKeys" @click="handleMenuClick">
              <a-menu-item key="home">
                <router-link :to="{ name: 'home' }">
                  {{ $t('header.Menu.home') }}
                </router-link>
              </a-menu-item>
              <a-menu-item key="docs">
                <router-link :to="{ name: 'docs' }">
                  <span>{{ $t('header.Menu.docs') }}</span>
                </router-link>
              </a-menu-item>
              <a-menu-item key="components">
                <router-link :to="{ name: 'components' }">
                  <span>{{ $t('header.Menu.components') }}</span>
                </router-link>
              </a-menu-item>
              <a-menu-item key="docs_v1" v-if="false">
                <router-link :to="{ name: 'v1' }">
                  <span>{{ $t('header.Menu.v1') }}</span>
                </router-link>
              </a-menu-item>
            </a-menu>
          </div>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { mixin } from '@/store/mixin'
import config from '@/config/default.config'

export default {
  name: 'Header',
  mixins: [mixin],
  data () {
    return {
      data: [],
      value: undefined,
      selectedKeys: []
    }
  },
  created () {
    this.updateMenu()
  },
  watch: {
    $route () {
      this.updateMenu()
    }
  },
  methods: {
    handleMenuClick ({ item, key, keyPath }) {
      console.log('item', item, key, keyPath)
      this.selectedKeys = keyPath
    },
    handleSearch (value) {

    },
    handleChange (value) {
      console.log(value)
      this.value = value
    },
    updateMenu () {
      const routes = this.$route.matched.concat()
      routes.length > 0 && (this.selectedKeys = [routes.pop().name])
    },
    langSwitch () {
      if (this.currentLang === config.defaultLang) {
        this.setLang('en-US')
      } else {
        this.setLang('zh-CN')
      }
    }
  }
}
</script>
