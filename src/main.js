import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import VueForm from 'vue-form';
import VueSocketio from 'vue-socket.io';


import interceptors from './http/interceptor';
import routes from './http/route';
import middleware from './http/middleware';
import config from './config';
import app from './app.vue';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueForm);
Vue.use(VueSocketio, config.socket);
Vue.http.interceptors.concat(interceptors);

var router = new VueRouter({linkActiveClass: 'active'});
router.map(routes);
middleware(router);


router.start(Vue.extend(app), 'app');