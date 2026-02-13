<template>
  <section class="section section--stack section--dark">
    <div class="container section__content">
      <h2 class="section__title mb-lg-5">Current stack</h2>

      <div class="stack mt-4">
        <ul class="stack__list">
          <li class="stack__item"
              v-for="(item, index) in stackItems"
              :key="index"
              :data-title="item"
              >
            <i class="fab"
               :class="`fa-${item}`"
               :title="item"
            ></i>
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
      stackItems: [
        'typescript',
        'js',
        'react',
        'vuejs',
        'html5',
        'css3',
        'tailwind-css',
        'bootstrap',
        'yarn',
        'npm',
        'git',
        'sass',
        'github',
        'docker',
        'digital-ocean',
        'apple',
        'ubuntu',
        'windows',
      ],
    };
  },
};
</script>
