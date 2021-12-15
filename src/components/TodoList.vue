<template>
  <v-main>
    <v-card width="70%" class="mx-auto my-6" elevation="1" rounded="lg">
      <v-card-title class="justify-center"> Todo Items </v-card-title>
      <v-list>
        <template v-for="(item, index) in items">
          <v-divider :key="(index + 1) * -1" class=""></v-divider>
          <v-list-item class="" :key="index">
            <TodoItem v-bind:todo="item" />
          </v-list-item>
        </template>
        <v-divider class=""></v-divider>
        <v-list-item v-if="!todoForm">
          <v-btn @click="openTodoForm" elevation="0" color="white">
            <v-icon left> mdi-plus-circle </v-icon>
            Add Item
          </v-btn>
        </v-list-item>

        <v-list-item v-if="todoForm">
          <CreateTodo />
        </v-list-item>
      </v-list>
    </v-card>
  </v-main>
</template>

<script>
import TodoItem from "./TodoItem.vue";
import CreateTodo from "./CreateTodo.vue";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "TodoList",
  components: {
    TodoItem,
    CreateTodo,
  },
  props: {},
  data() {
    return {};
  },
  computed: {
    console: () => console,
    ...mapGetters({ items: "allTodos" }),
    ...mapGetters({ todoForm: "todoForm" }),
  },
  created: function () {},
  methods: {
    ...mapMutations(["openTodoForm"]),
  },
};
</script>

<style scoped></style>
