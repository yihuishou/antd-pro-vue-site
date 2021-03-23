<template>
  <div id="app">
    <div class="page-wrapper" :class="[mainClass ? 'index-page-wrapper' : null, device]">
      <a-header/>
      <router-view/>
      <a-footer />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AHeader from '@/components/Header'
import AFooter from '@/components/Footer'
import { AppDeviceEnquire } from '@/utils/device'

export default {
  name: 'home',
  mixins: [AppDeviceEnquire],
  data () {
    return {
      mainClass: false
    }
  },
  methods: {
    setMainClass (bool) {
      this.mainClass = bool
    }
  },
  components: {
    AHeader,
    AFooter
  }
}
</script>
