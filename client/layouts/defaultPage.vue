<template>
  <div>
    <HeaderVue/>
    <Nuxt class="mt-5" />
    <FooterVue/>
  </div>
</template>

<script>
import HeaderVue from '../components/DefaultHeader'
import FooterVue from '../components/Footer.vue'


export default {
  components: {
    HeaderVue,
    FooterVue
  }
}
</script>
<style>
</style>
