<template>
  <v-row class="my-0 mx-0">
    <v-list class="my-0">
      <v-list-item>
        <v-text-field label="Title" v-model="taskTitle"></v-text-field>
      </v-list-item>
      <v-list-item>
        <v-text-field
          label="Description"
          v-model="taskDescription"
        ></v-text-field>
      </v-list-item>
      <v-list-item>
        <v-menu>
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark v-bind="attrs" v-on="on">
              {{ taskProject }}
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              @click="onClick(project)"
              v-for="(project, index) in projects"
              :key="index"
            >
              <v-list-item-title>{{ project }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-list-item>
      <v-list-item>
        <v-btn class="mx-1" @click="addTask"> Add Task </v-btn>
        <v-btn class="mx-1" @click="closeTodoForm"> cancel </v-btn>
      </v-list-item>
    </v-list>
  </v-row>
</template>

<script>
// import axios from "axios";
import { mapActions, mapMutations } from "vuex";

export default {
  name: "CreateTodo",
  props: {},
  data() {
    return {
      projects: ["one", "two", "three"],
      taskTitle: "",
      taskDescription: "",
      taskProject: "Project",
    };
  },
  computed: {
    console: () => console,
  },
  created: function () {},
  methods: {
    ...mapActions(["addTodo"]),
    ...mapMutations(["closeTodoForm", "openTodoForm"]),
    onClick(project) {
      this.taskProject = project;
    },
    addTask() {
      const bodyContent = {
        title: this.taskTitle,
        description: this.taskDescription,
        project: this.taskProject,
      };
      this.addTodo(bodyContent);
      this.taskTitle = "";
      this.taskDescription = "";
      this.closeTodoForm();
    },
  },
};
</script>

<style></style>
