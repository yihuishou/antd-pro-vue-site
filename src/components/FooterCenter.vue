<template>
  <div class="footer-center">
    <h2>
      <slot name="title">
        <span>{{ title }}</span>
      </slot>
    </h2>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'FooterCenter',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>
