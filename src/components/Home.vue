<template>
  <div class="home-wrapper">
    <banner/>
    <page1/>
  </div>
</template>

<script>
import Banner from '@/components/Banner'
import Page1 from '@/components/Page1'

export default {
  name: 'Home',
  components: { Page1, Banner }
}
</script>
