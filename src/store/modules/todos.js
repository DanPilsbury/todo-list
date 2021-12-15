import axios from "axios";

const state = {
  todos: [],
  filteredTodos: [],
  todoForm: false,
};

const getters = {
  allTodos: (state) => state.todos,
  filteredTodos: (state, getters, rootState) =>
    state.todos.filter((todo) => {
      if (rootState.projects.currentProject == "") return true;
      return todo.project == rootState.projects.currentProject;
    }),
  todoForm: (state) => state.todoForm,
};

const actions = {
  async fetchTodos({ commit }) {
    const response = await axios.get("/todo");
    commit("setTodos", response.data);
  },
  async addTodo({ commit }, todo) {
    const response = await axios.post("/todo", todo);
    commit("newTodo", response.data);
  },
};

const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  newTodo: (state, todo) => state.todos.push(todo),
  openTodoForm: () => (state.todoForm = true),
  closeTodoForm: () => (state.todoForm = false),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
