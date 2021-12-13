import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import About from './views/About.vue'
import vuetify from './plugins/vuetify'
import VueCookie from 'vue-cookie';

Vue.use(VueCookie);

export const eventBus = new Vue();

Vue.config.productionTip = false;

Vue.use(VueRouter);

export const router = new VueRouter({
  routes: [
    { path: "/", component: About, props: true },
  ],
});

new Vue({
  el: "#app",
  router,
  vuetify,
  render: (h) => h(App)
});





