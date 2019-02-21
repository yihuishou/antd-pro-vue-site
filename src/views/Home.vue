<template>
  <div class="home-wrapper">
    <banner/>
    <page1/>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '@/components/Banner'
import Page1 from '@/components/Page1'

export default {
  name: 'home',
  components: {
    Banner,
    Page1
  }
}
</script>
