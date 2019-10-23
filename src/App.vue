<template>
  <div id="app">
    <component :is="isComponent"></component>
  </div>
</template>

<script>
import Main from "@/layouts/MainLayout";

export default {
  name: "app",

  components: { Main },

  computed: {
    isComponent() {
      return this.$route.meta.layout || 'Main'
    }
  }
};
</script>

<style lang="scss">
@import '~materialize-css/sass/materialize.scss';
@import '@/assets/style';
</style>