<template>
  <div class="banner-wrapper">
    <div class="banner-title-wrapper">
      <div class="title-line-wrapper" style="opacity: 1; transform: translate(0px, 0px);">
        <div class="title-line" style="transform: translateX(-64px);"></div>
      </div>
      <h1 class="" style="opacity: 1; transform: translate(0px, 0px);">ANTV IDEAL</h1>
      <p style="opacity: 1; transform: translate(0px, 0px);">
        <span>{{ $t('banner.desc') }}</span>
      </p>
      <div class="button-wrapper">
        <a href="https://pro.loacg.com">
          <a-button type="primary">{{ $t('banner.preview') }}</a-button>
        </a>
        <a @click="$router.push({ name: 'docs' })">
          <a-button style="margin: 0 16px;">{{ $t('banner.getter') }}</a-button>
        </a>
      </div>
    </div>
    <div class="banner-image-wrapper" style="opacity: 1;">
      <img src="/cover1.jpg" style="height: 100%;" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner'
}
</script>
