<template>
  <section class="section section--stack section--dark">
    <div class="container section__content">
      <h2 class="section__title mb-lg-5">Stack</h2>

      <div class="stack mt-4">
        <ul class="stack__list">
          <li class="stack__item"
              v-for="(item, index) in stackItems"
              :key="index">
            <i class="fab"
               :class="`fa-${item}`"
               :title="item"></i>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Stack',
  data() {
    return {
      stackItems: ['html5', 'css3-alt', 'sass', 'js', 'vuejs', 'bootstrap', 'yarn', 'npm', 'erlang',
        'gulp', 'node-js', 'git', 'github', 'docker', 'magento', 'wordpress', 'php',
        'sketch', 'digital-ocean', 'adobe', 'apple', 'ubuntu'],
    };
  },
};
</script>
