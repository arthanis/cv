<template>
  <section class="section section--about section--dark">
    <div class="container section__content pb-lg-5">
      <h2 class="section__title mb-lg-5">About</h2>

      <div class="row">
        <div class="col-md-4 col-lg-3 text-center">
          <img src="@/assets/img/aboutme.jpg" alt="Imre Toth"
               class="section__image rounded-circle">
        </div>
        <div class="col-md-8 col-lg-9 pt-4 pt-md-0">
          <p>Senior frontend developer from Budapest.</p>

          <p>
            <strong>Used technologies:</strong> React, Typescript, Javascript (ES6+), Vue.js,
            Tailwind.css, Shadcn UI, CSS3 (SCSS), Bootstrap, vite, vitest, webpack, gulp, npm,
            pnpm, yarn, SVG, XML, Git.
          </p>

          <p class="d-none">
            Looking for JS/TS developer opportunities and I am opened to work with node.js.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About',
};
</script>
