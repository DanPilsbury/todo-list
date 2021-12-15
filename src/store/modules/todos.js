import axios from "axios";

const state = {
  todos: [],
  todoForm: false,
};

const getters = {
  allTodos: (state) => state.todos,
  todoForm: (state) => state.todoForm,
};

const actions = {
  async fetchTodos({ commit }) {
    const response = await axios.get("/todo");
    console.log(response.data);
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
