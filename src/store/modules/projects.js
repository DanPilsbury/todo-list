import axios from "axios";

const state = {
  projects: [],
  projectForm: false,
  currentProject: "",
};

const getters = {
  allProjects: (state) => state.projects,
  projectForm: (state) => state.projectForm,
  currentProject: (state) => state.currentProject,
};

const actions = {
  async fetchProjects({ commit }) {
    const response = await axios.get("/project");
    commit("setProjects", response.data);
  },
  async addProject({ commit }, project) {
    const response = await axios.post("/project", project);
    commit("newProject", response.data);
  },
  async deleteProject({ commit }, id) {
    await axios.delete(`/project/${id}`);
    commit("deleteProject", id);
  },
};

const mutations = {
  setProjects: (state, projects) => (state.projects = projects),
  newProject: (state, project) => state.projects.push(project),
  openProjectForm: (state) => (state.projectForm = true),
  closeProjectForm: (state) => (state.projectForm = false),
  setCurrentProject: (state, projectName) =>
    (state.currentProject = projectName),
  deleteProject: (state, id) =>
    (state.projects = state.projects.filter((p) => p._id != id)),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
