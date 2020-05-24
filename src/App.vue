<template>
  <div id="app">
    <welcome />
    <about />
    <experience />
  </div>
</template>

<script>
import Welcome from '@/components/Welcome.vue';
import About from '@/components/About.vue';
import Experience from '@/components/Experience.vue';

export default {
  name: 'App',
  components: {
    about: About,
    welcome: Welcome,
    experience: Experience,
  },
};
</script>

<style lang="scss">
  @import 'assets/scss/app';
</style>
