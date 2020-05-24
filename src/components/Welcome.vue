<template>
  <section class="section section--welcome">
    <div class="section__content">
      <h1 class="section__title section__title--large">
        Imre Tóth<span class="underscore">_</span>
      </h1>
      <h2 class="section__subtitle">&#60;frontend developer /&#62;</h2>

      <ul class="section__list">
        <li class="section__list-item"
            v-for="(icon, index) in icons" :key="index">
          <a target="_blank"
             class="section__list-link"
             :href="icon.url">
            <i :class="icon.class"></i>
          </a>
        </li>
      </ul>

      <div class="section__scroll icon-scroll"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Welcome',
  data() {
    return {
      icons: [
        { class: 'fab fa-github', url: 'https://github.com/arthanis' },
        { class: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/imre-toth-00510b30/' },
        { class: 'fab fa-dev', url: 'https://dev.to/arthanis' },
        { class: 'fab fa-stack-overflow', url: 'https://stackoverflow.com/users/7074144/arthanis' },
        { class: 'fab fa-twitter', url: 'https://twitter.com/arthanis88' },
      ],
    };
  },
};
</script>
