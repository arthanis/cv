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
          <p>Senior frontend developer with a little backend developing experience from Budapest.
            <br>Currently I am working as a contractor for multiple companies.</p>

          <p><strong>Used technologies:</strong> HTML5, CSS3 / SCSS, Bootstrap, JavaScript (ES6),
            Vue.js, Erlang, webpack, gulp, npm / yarn, SVG, XML, jQuery, Git.</p>

          <p>Looking for javascript developer opportunities and open to work with node.js.</p>

          <p class="mt-4">
            <a href="@/assets/imre_toth_cv_public_2020.pdf"
               target="_blank"
               class="btn btn-outline-light">
              Download CV
            </a>
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
