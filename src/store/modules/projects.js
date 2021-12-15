import axios from "axios";

const state = {
  projects: [],
  projectForm: false,
};

const getters = {
  allProjects: (state) => state.projects,
  projectForm: (state) => state.projectForm,
};

const actions = {
  async fetchProjects({ commit }) {
    const response = await axios.get("/project");
    console.log(response.data);
    commit("setProjects", response.data);
  },
  async addProject({ commit }, project) {
    const response = await axios.post("/project", project);
    commit("newProject", response.data);
  },
};

const mutations = {
  setProjects: (state, projects) => (state.projects = projects),
  newProject: (state, project) => state.projects.push(project),
  openProjectForm: (state) => (state.projectForm = true),
  closeProjectForm: (state) => (state.projectForm = false),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
