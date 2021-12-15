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
              {{ projectDropdownName }}
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              @click="selectProject(project)"
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
import { mapActions, mapMutations, mapGetters } from "vuex";

export default {
  name: "CreateTodo",
  props: {},
  data() {
    return {
      taskTitle: "",
      taskDescription: "",
      selectedProject: "",
    };
  },
  computed: {
    console: () => console,
    ...mapGetters({
      projects: "allProjects",
      currentProject: "currentProject",
    }),
  },
  created: function () {
    this.projectDropdownName = this.currentProject || "Add Project";
    this.projects.push("None");
  },
  methods: {
    ...mapActions(["addTodo"]),
    ...mapMutations(["closeTodoForm", "openTodoForm"]),
    selectProject(project) {
      this.selectedProject = project;
      this.projectDropdownName = project;
    },
    addTask() {
      if (this.selectedProject == "None") {
        this.selectedProject = "";
      }
      const bodyContent = {
        title: this.taskTitle,
        description: this.taskDescription,
        project: this.taskProject,
      };
      this.console.log(this.taskProject);
      this.addTodo(bodyContent);
      this.taskTitle = "";
      this.taskDescription = "";
      this.closeTodoForm();
    },
  },
};
</script>

<style></style>
