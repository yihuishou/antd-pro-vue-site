import Vue from 'vue'
import VueStorage from 'vue-ls'
import config from '@/config/default.config'
import '@/core/lazy.lib' // base library
import '@/styles/app.less'

Vue.use(VueStorage, config.storage)
