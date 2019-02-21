<template>
  <div id="app">
    <div class="page-wrapper">
      <a-header/>
      <router-view/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AHeader from '@/components/Header'

export default {
  name: 'home',
  components: {
    AHeader
  }
}
</script>
