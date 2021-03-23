<template>
  <div class="banner-wrapper">
    <div class="banner-title-wrapper">
      <div class="title-line-wrapper" style="opacity: 1; transform: translate(0px, 0px);">
        <div class="title-line" style="transform: translateX(-64px);"></div>
      </div>
      <h1 class="" style="opacity: 1; transform: translate(0px, 0px);">ANTD PRO VUE</h1>
      <p style="opacity: 1; transform: translate(0px, 0px);">
        <span>{{ $t('banner.desc') }}</span>
      </p>
      <div class="button-wrapper">
        <a href="https://preview.pro.loacg.com">
          <a-button type="primary">{{ $t('banner.preview') }}</a-button>
        </a>
        <a @click="$router.push({ name: 'docs' })">
          <a-button style="margin: 0 16px;">{{ $t('banner.getter') }}</a-button>
        </a>
      </div>
    </div>
    <div class="banner-image-wrapper" style="opacity: 1;">
<!--      <img src="/cover1.jpg" style="height: 100%;" />-->
      <a-carousel arrows autoplay>
        <div
          slot="prevArrow"
          slot-scope="props"
          class="custom-slick-arrow"
          style="left: 10px;zIndex: 1"
        >
          <a-icon type="left-circle" />
        </div>
        <div
          slot="nextArrow"
          slot-scope="props"
          class="custom-slick-arrow"
          style="right: 10px"
        >
          <a-icon type="right-circle" />
        </div>
        <div v-for="i in 4" :key="i">
          <img :src="`/cover${i}.jpg`" style="height: 324px"/>
        </div>
      </a-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner'
}
</script>
