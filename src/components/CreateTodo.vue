<template>
  <v-row>
    <v-col>
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
              <v-btn color="grey lighten-2" v-bind="attrs" v-on="on">
                {{ projectDropdownName }}
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                @click="selectProject(project.name)"
                v-for="(project, index) in projects"
                :key="index"
              >
                <v-list-item-title>{{ project.name }}</v-list-item-title>
              </v-list-item>
              <v-list-item @click="selectProject('')">
                <v-list-item-title>No Project</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-list-item>
        <v-list-item>
          <v-btn class="mx-1" color="green lighten-2" @click="addTask">
            Add Task
          </v-btn>
          <v-btn class="mx-1" color="red lighten-2" @click="closeTodoForm">
            cancel
          </v-btn>
        </v-list-item>
      </v-list>
    </v-col>
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
    this.selectedProject = this.currentProject;
  },
  methods: {
    ...mapActions(["addTodo"]),
    ...mapMutations(["closeTodoForm", "openTodoForm"]),
    selectProject(projectName) {
      this.selectedProject = projectName;
      this.projectDropdownName = projectName || "No Project";
    },
    addTask() {
      const bodyContent = {
        title: this.taskTitle,
        description: this.taskDescription,
        project: this.selectedProject,
      };
      this.addTodo(bodyContent);
      this.taskTitle = "";
      this.taskDescription = "";
      this.selectedProject = "";
      this.closeTodoForm();
    },
  },
};
</script>

<style></style>
