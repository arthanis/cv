(function(e){function t(t){for(var n,i,r=t[0],c=t[1],l=t[2],p=0,d=[];p<r.length;p++)i=r[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),s()}function s(){for(var e,t=0;t<o.length;t++){for(var s=o[t],n=!0,r=1;r<s.length;r++){var c=s[r];0!==a[c]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=s[0]))}return e}var n={},a={app:0},o=[];function i(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=e,i.c=n,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(s,n,function(t){return e[t]}.bind(null,n));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/cv/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var u=c;o.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("welcome"),s("about"),s("experience"),s("stack")],1)},o=[],i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",{staticClass:"section section--welcome section--light"},[s("div",{staticClass:"section__content"},[e._m(0),s("h2",{staticClass:"section__subtitle"},[e._v("<frontend developer />")]),s("h3",{staticClass:"h5 mt-2"},[e._v("Budapest, Hungary")]),s("ul",{staticClass:"section__list"},e._l(e.icons,(function(e,t){return s("li",{key:t,staticClass:"section__list-item"},[s("a",{staticClass:"section__list-link",attrs:{target:"_blank",href:e.url}},[s("i",{class:e.class})])])})),0),s("div",{staticClass:"section__scroll icon-scroll"})])])},r=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("h1",{staticClass:"section__title section__title--large mb-2"},[e._v(" Imre Tóth"),s("span",{staticClass:"underscore"},[e._v("_")])])}],c={name:"Welcome",data:function(){return{icons:[{class:"fab fa-github",url:"https://github.com/arthanis"},{class:"fab fa-linkedin",url:"https://www.linkedin.com/in/imre-toth-00510b30/"},{class:"fab fa-dev",url:"https://dev.to/arthanis"},{class:"fab fa-stack-overflow",url:"https://stackoverflow.com/users/7074144/arthanis"},{class:"fab fa-twitter",url:"https://twitter.com/arthanis88"}]}}},l=c,u=s("2877"),p=Object(u["a"])(l,i,r,!1,null,null,null),d=p.exports,_=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},m=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"section section--about section--dark"},[n("div",{staticClass:"container section__content pb-lg-5"},[n("h2",{staticClass:"section__title mb-lg-5"},[e._v("About")]),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-4 col-lg-3 text-center"},[n("img",{staticClass:"section__image rounded-circle",attrs:{src:s("cf83"),alt:"Imre Toth"}})]),n("div",{staticClass:"col-md-8 col-lg-9 pt-4 pt-md-0"},[n("p",[e._v("Senior frontend developer with backend developing experience from Budapest.")]),n("p",[n("strong",[e._v("Used technologies:")]),e._v(" HTML5, CSS3 (SCSS), JS (ES6+), Vue.js, React, Bootstrap, webpack, gulp, npm / yarn, SVG, XML, Git. ")]),n("p",{staticClass:"d-none"},[e._v(" Looking for javascript developer opportunities and I am opened to work with node.js. ")])])])])])}],f={name:"About"},v=f,b=Object(u["a"])(v,_,m,!1,null,null,null),h=b.exports,k=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",{staticClass:"section section--experience section--light"},[s("div",{staticClass:"container section__content"},[s("h2",{staticClass:"section__title mb-lg-5"},[e._v("Experience")]),s("div",{staticClass:"experience"},[s("ul",{staticClass:"experience__list"},e._l(e.experience.items,(function(t,n){return s("li",{key:n,staticClass:"experience__item item"},[s("h4",{staticClass:"item__title"},[e._v(e._s(t.role))]),s("p",{staticClass:"item__subtitle"},[e._v(e._s(t.employer))]),s("p",{staticClass:"item__date"},[e._v(e._s(t.date))]),s("p",{staticClass:"item__details"},[s("strong",[e._v("Tasks: ")]),e._v(" "+e._s(t.tasks)+" "),s("br"),s("strong",[e._v("Stack: ")]),e._v(" "+e._s(t.stack)+" ")])])})),0)]),s("h2",{staticClass:"section__title mt-4 mt-lg-5 mb-lg-5"},[e._v("Education")]),s("div",{staticClass:"experience"},[s("ul",{staticClass:"experience__list"},e._l(e.education.items,(function(t,n){return s("li",{key:n,staticClass:"experience__item item"},[s("h4",{staticClass:"item__title"},[e._v(e._s(t.school))]),s("p",{staticClass:"item__subtitle"},[e._v(e._s(t.details))]),s("p",{staticClass:"item__date"},[e._v(e._s(t.date))]),t.description?s("p",{staticClass:"item__details"},[e._v(e._s(t.description))]):e._e()])})),0)])])])},S=[],g={name:"Experience",data:function(){return{experience:{items:[{role:"Frontend developer",employer:"JC360",date:"2020.12 - ",tasks:"Product development",stack:"JS (ES6+), React (17+), Vue.js, HTML5, CSS3, SCSS, Bootstrap, SPA, REST API, Webpack"},{role:"Frontend developer",employer:"Risskov Autoferien",date:"2020.10 - 2020.11",tasks:"",stack:"JS (ES6+), React (17+), Vue.js, HTML5, CSS3, SCSS, Bootstrap, SPA, REST API, Webpack"},{role:"Lead frontend developer",employer:"OANDER Media (Contract)",date:"2018.09 - 2020.09",tasks:"Vue.js based SPA, middleware and magento development (theme, module - vue.js) and static frontend (part time)",stack:"Vue.js, HTML5, CSS, Scss, JS (ES6+), Erlang, Mongodb, Bootstrap, Webpack, Websocket, Rest, yarn, npm, docker, git, kanban, gulp, nunjucks"},{role:"Lead frontend developer",employer:"OANDER Media",date:"2017.06 - 2018.08",tasks:"Magento & Wordpress theme development",stack:"Magento2, HTML5, CSS3, Scss, Bootstrap4, Javascript (ES6 & jQuery), Vue.js, Wordpress, gulp, XML, Docker, npm, ubuntu"},{role:"Frontend developer",employer:"Virgo Systems",date:"2017.05 - 2017.06",tasks:"Symfony based e-commerce development",stack:"Symfony, HTML5, CSS3, Scss, Bootstrap, jQuery, Docker, npm, linux"},{role:"Frontend developer",employer:"OANDER Media",date:"2014.08 - 2017.04",tasks:"Static site and Wordpress/Magento theme development",stack:"HTML5, CSS3, Scss, Bootstrap, jQuery, Wordpress, Magento 1-2, Bower, Gulp, Docker, npm, win/ubuntu"},{role:"Frontend developer, webdesigner",employer:"Freelancer",date:"2009.06 - 2014.08",tasks:"Static site development, webdesign",stack:"HTML5, CSS3, Less, Scss, jQuery, Bootstrap, Photoshop"},{role:"Frontend developer, webdesigner (part time)",employer:"Next-IT Hungary",date:"2010.11 - 2012.11",tasks:"CakePHP based website (frontend) development, webdesign",stack:"CakePHP, xampp, HTML5, CSS3, Less, jQuery, Photoshop, svn"}]},education:{items:[{school:"Dennis Gabor College",details:"IT Engineer, Information Technology",date:"2010 - 2017",description:"Degree thesis in currently progress."},{school:"Szamalk Secondary School",details:"Multimedia developer, Technical Certificate of Multimedia Developer",date:"2007 - 2009"}]}}}},C=g,y=Object(u["a"])(C,k,S,!1,null,null,null),w=y.exports,j=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",{staticClass:"section section--stack section--dark"},[s("div",{staticClass:"container section__content"},[s("h2",{staticClass:"section__title mb-lg-5"},[e._v("Stack")]),s("div",{staticClass:"stack mt-4"},[s("ul",{staticClass:"stack__list"},e._l(e.stackItems,(function(e,t){return s("li",{key:t,staticClass:"stack__item",attrs:{"data-title":e}},[s("i",{staticClass:"fab",class:"fa-"+e,attrs:{title:e}})])})),0)])])])},x=[],M={name:"Stack",data:function(){return{stackItems:["html5","css3","sass","js","vuejs","react","bootstrap","yarn","npm","gulp","git","github","docker","sketch","digital-ocean","adobe","apple","ubuntu","windows"]}}},E=M,T=Object(u["a"])(E,j,x,!1,null,null,null),O=T.exports,P={name:"App",components:{about:h,welcome:d,experience:w,stack:O}},L=P,H=(s("5c0b"),Object(u["a"])(L,a,o,!1,null,null,null)),A=H.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(A)}}).$mount("#app")},"5c0b":function(e,t,s){"use strict";s("9c0c")},"9c0c":function(e,t,s){},cf83:function(e,t,s){e.exports=s.p+"img/aboutme.6fc1a641.jpg"}});
//# sourceMappingURL=app.89a161fe.js.map