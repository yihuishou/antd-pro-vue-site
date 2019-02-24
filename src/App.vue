<template>
  <div id="app">
    <div class="page-wrapper" :class="mainClass ? 'index-page-wrapper' : null">
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

export default {
  name: 'home',
  components: {
    AHeader,
    AFooter
  },
  data () {
    return {
      mainClass: false
    }
  },
  methods: {
    setMainClass (bool) {
      console.log('main class', bool)
      this.mainClass = bool
    }
  }
}
</script>
