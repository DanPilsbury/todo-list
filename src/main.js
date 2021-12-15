import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import About from "./views/Home.vue";
import vuetify from "./plugins/vuetify";
import store from "./store";

export const eventBus = new Vue();

Vue.config.productionTip = false;

Vue.use(VueRouter);

export const router = new VueRouter({
  routes: [{ path: "/", component: About, props: true }],
});

new Vue({
  el: "#app",
  store,
  router,
  vuetify,
  render: (h) => h(App),
});
