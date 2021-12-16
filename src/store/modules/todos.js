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
  async deleteTodo({ commit }, id) {
    await axios.delete(`/todo/${id}`);
    commit("deleteTodo", id);
  },
};

const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  newTodo: (state, todo) => state.todos.push(todo),
  openTodoForm: () => (state.todoForm = true),
  closeTodoForm: () => (state.todoForm = false),
  deleteTodo: (state, id) =>
    (state.todos = state.todos.filter((t) => t._id != id)),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
