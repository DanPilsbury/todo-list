import Vuex from "vuex";
import Vue from "vue";
import todos from "./modules/todos";
import projects from "./modules/projects";
import data from "./modules/data";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    todos,
    projects,
    data,
  },
});
