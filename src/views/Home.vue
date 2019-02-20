<template>
  <div class="page-wrapper">
    <a-header/>
    <a-home/>
  </div>
</template>

<script>
// @ is an alias to /src
import AHeader from '@/components/Header'
import AHome from '@/components/Home'

export default {
  name: 'home',
  components: {
    AHeader,
    AHome
  }
}
</script>
