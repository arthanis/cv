<template>
  <section class="section section--experience section--light">
    <div class="container section__content">
      <h2 class="section__title mb-lg-5">Experience</h2>

      <div class="experience">
        <ul class="experience__list">
          <li class="experience__item item" v-for="(item, index) in experience.items" :key="index">
            <h4 class="item__title">{{ item.role }}</h4>
            <p class="item__subtitle">{{ item.employer }}</p>
            <p class="item__date">{{ item.date }}</p>
            <p class="item__details">
              <strong>Tasks: </strong> {{ item.tasks }} <br>
              <strong>Stack: </strong> {{ item.stack }}
            </p>
          </li>
        </ul>
      </div>

      <h2 class="section__title mt-4 mt-lg-5 mb-lg-5">Education</h2>

      <div class="experience">
        <ul class="experience__list">
          <li class="experience__item item" v-for="(item, index) in education.items" :key="index">
            <h4 class="item__title">{{ item.school }}</h4>
            <p class="item__subtitle">{{ item.details }}</p>
            <p class="item__date">{{ item.date }}</p>
            <p class="item__details" v-if="item.description">{{ item.description }}</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Experience',
  data() {
    return {
      experience: {
        items: [{
          role: 'Frontend developer',
          employer: 'JC360',
          date: '2020.12 - ',
          tasks: 'Product development',
          stack: 'JS (ES6+), React (17+), Vue.js, HTML5, CSS3, SCSS, Bootstrap, SPA, Rest API, Webpack',
        }, {
          role: 'Frontend developer',
          employer: 'Risskov Autoferien',
          date: '2020.10 - 2020.11',
          tasks: '',
          stack: 'HTML5, CSS3, JS (vanillaJS), Rest API',
        }, {
          role: 'Lead frontend developer',
          employer: 'OANDER Media (Contract)',
          date: '2018.09 - 2020.09',
          tasks: 'Vue.js based SPA, middleware and magento development (theme, module - vue.js) and static frontend (part time)',
          stack: 'Vue.js, HTML5, CSS, Scss, JS (ES6+), Erlang, Mongodb, Bootstrap, Webpack, Websocket, Rest API, yarn, npm, docker, git, kanban, gulp, nunjucks',
        }, {
          role: 'Lead frontend developer',
          employer: 'OANDER Media',
          date: '2017.06 - 2018.08',
          tasks: 'Magento & Wordpress theme development',
          stack: 'Magento2, HTML5, CSS3, SCSS, Bootstrap4, Javascript (ES6 & jQuery), Vue.js, Wordpress, gulp, XML, Docker, npm, ubuntu',
        }, {
          role: 'Frontend developer',
          employer: 'Virgo Systems',
          date: '2017.05 - 2017.06',
          tasks: 'Symfony based e-commerce development',
          stack: 'Symfony, HTML5, CSS3, Scss, Bootstrap, jQuery, Docker, npm, linux',
        }, {
          role: 'Frontend developer',
          employer: 'OANDER Media',
          date: '2014.08 - 2017.04',
          tasks: 'Static site and Wordpress/Magento theme development',
          stack: 'HTML5, CSS3, Scss, Bootstrap, jQuery, Wordpress, Magento 1-2, Bower, Gulp, Docker, npm, win/ubuntu',
        }, {
          role: 'Frontend developer, webdesigner',
          employer: 'Freelancer',
          date: '2009.06 - 2014.08',
          tasks: 'Static site development, webdesign',
          stack: 'HTML5, CSS3, Less, Scss, jQuery, Bootstrap, Photoshop',
        }, {
          role: 'Frontend developer, webdesigner (part time)',
          employer: 'Next-IT Hungary',
          date: '2010.11 - 2012.11',
          tasks: 'CakePHP based website (frontend) development, webdesign',
          stack: 'CakePHP, xampp, HTML5, CSS3, Less, jQuery, Photoshop, svn',
        }],
      },
      education: {
        items: [{
          school: 'Dennis Gabor College',
          details: 'IT Engineer, Information Technology',
          date: '2010 - 2017',
          description: 'Final exam passed, last step is language exam',
        }, {
          school: 'Szamalk Secondary School',
          details: 'Multimedia developer, Technical Certificate of Multimedia Developer',
          date: '2007 - 2009',
        }],
      },
    };
  },
};
</script>
