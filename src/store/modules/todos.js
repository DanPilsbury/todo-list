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
  async toggleDone({ commit }, id) {
    const response = await axios.patch(`/todo/done/${id}`);
    commit("setDone", { id: id, bool: response.data });
  },
};

const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  newTodo: (state, todo) => state.todos.push(todo),
  openTodoForm: () => (state.todoForm = true),
  closeTodoForm: () => (state.todoForm = false),
  deleteTodo: (state, id) =>
    (state.todos = state.todos.filter((t) => t._id != id)),
  toggleDone: (state, id) => {
    state.todos.map((t) => {
      if (t._id == id) t.done = !t.done;
      return t;
    });
  },
  setDone: (state, { id, bool }) => {
    state.todos.map((t) => {
      if (t._id == id) t.done = bool;
      return t;
    });
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
