<template>
  <div id="app">
    <welcome />
    <about />
  </div>
</template>

<script>
import Welcome from '@/components/Welcome.vue';
import About from '@/components/About.vue';

export default {
  name: 'App',
  components: {
    about: About,
    welcome: Welcome,
  },
};
</script>

<style lang="scss">
  @import 'assets/scss/app';
</style>
