<template>
  <div class="home-wrapper">
    <banner/>
    <page1/>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '@/components/home/Banner'
import Page1 from '@/components/home/Page1'

export default {
  name: 'home',
  components: {
    Banner,
    Page1
  },
  mounted () {
    this.toggleMain()
  },
  beforeDestroy () {
    this.toggleMain(false)
  },
  methods: {
    toggleMain (bool = true) {
      this.$parent.setMainClass(bool)
    }
  }
}
</script>
