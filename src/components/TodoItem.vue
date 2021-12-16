<template>
  <v-row class="my-0 mx-0">
    <v-col cols="1" class="px-0" align-self="center">
      <v-icon
        v-if="todo.done"
        class="my-auto"
        color="green"
        @click="toggleDone(todo._id)"
        >mdi-checkbox-marked
      </v-icon>
      <v-icon v-else color="green" @click="toggleDone(todo._id)"
        >mdi-checkbox-blank-outline
      </v-icon>
    </v-col>
    <v-col cols="8">
      <v-list class="">
        <v-list-item class="ma-0 pa-0 font-weight-normal">
          {{ todo.title }}
        </v-list-item>

        <v-list-item
          v-if="todo.description"
          class="ma-0 pa-0 font-weight-light"
        >
          {{ todo.description }}
        </v-list-item>
      </v-list>
    </v-col>
    <v-col cols="3">
      <v-list>
        <v-list-item>
          <v-btn
            @click="deleteTodo(todo._id)"
            fab
            x-small
            elevation="0"
            class="ml-auto"
            color="white"
          >
            <v-icon class="ma-auto">mdi-trash-can-outline</v-icon>
          </v-btn>
        </v-list-item>
        <v-list-item v-if="todo.project" class="">
          <v-card class="ml-auto px-1" color="grey lighten-2">
            {{ todo.project }}
          </v-card>
        </v-list-item>
      </v-list>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "TodoItem",
  props: {
    todo: Object,
  },
  data() {
    return {};
  },
  computed: {
    console: () => console,
  },
  created: function () {},
  methods: {
    ...mapActions(["deleteTodo", "toggleDone"]),
  },
};
</script>

<style></style>
