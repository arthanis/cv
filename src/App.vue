<template>
  <div id="app">
    <welcome />
    <about />
    <experience />
    <stack />
  </div>
</template>

<script>
import Welcome from '@/components/Welcome.vue';
import About from '@/components/About.vue';
import Experience from '@/components/Experience.vue';
import Stack from '@/components/Stack.vue';

export default {
  name: 'App',
  components: {
    about: About,
    welcome: Welcome,
    experience: Experience,
    stack: Stack,
  },
};
</script>

<style lang="scss">
  @import 'assets/scss/app';
</style>
