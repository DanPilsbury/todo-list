<template>
  <div>
    <v-app-bar app color="blue accent-2" dark clipped-left>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Todo</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer" clipped>
      <v-list>
        <v-list-item-group>
          <v-list-item @click="selectProject('')">
            <v-list-item-title class="font-weight-black ml-2">
              All
            </v-list-item-title>
          </v-list-item>
          <v-expansion-panels>
            <v-expansion-panel class="my-0" style="border-radius: 0px">
              <v-expansion-panel-header class="font-weight-black">
                Projects
              </v-expansion-panel-header>
              <v-expansion-panel-content class="pa-0">
                <v-list-item
                  v-for="(project, index) in projects"
                  v-bind:key="index"
                  @click="selectProject(project.name)"
                >
                  <v-list-item-title>
                    {{ project.name }}
                  </v-list-item-title>
                  <v-btn
                    @click.stop="removeProject(project._id)"
                    fab
                    x-small
                    elevation="0"
                    class="ml-auto"
                    color="white"
                  >
                    <v-icon class="ma-auto" small>mdi-trash-can-outline</v-icon>
                  </v-btn>
                </v-list-item>
                <!-- <v-list-item > -->
                <v-btn
                  v-if="!projectForm"
                  @click="openProjectForm"
                  elevation="0"
                  color="white"
                >
                  <v-icon left> mdi-plus-circle </v-icon>
                  Add Project
                </v-btn>
                <!-- </v-list-item> -->
                <v-list-item v-if="projectForm">
                  <v-text-field
                    label="project name"
                    v-model="projectName"
                  ></v-text-field>
                </v-list-item>
                <!-- <v-list-item v-if="projectForm"> -->

                <v-btn
                  v-if="projectForm"
                  @click="createProject"
                  small
                  class="mx-2"
                  color="green lighten-2"
                >
                  create
                </v-btn>
                <v-btn
                  v-if="projectForm"
                  @click="closeProjectForm"
                  small
                  class="mx-2"
                  color="red lighten-2"
                >
                  cancel
                </v-btn>
                <!-- </v-list-item> -->
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
  name: "Navbar",
  components: {},
  data: function () {
    return {
      drawer: true,
      group: null,
      projectName: "",
    };
  },
  created: function () {},
  computed: {
    console: () => console,
    ...mapGetters({
      projects: "allProjects",
      projectForm: "projectForm",
      currentProject: "currentProject",
    }),
  },
  methods: {
    ...mapActions(["addProject", "deleteProject"]),
    ...mapMutations([
      "closeProjectForm",
      "openProjectForm",
      "setCurrentProject",
    ]),
    selectProject(name) {
      this.setCurrentProject(name);
    },
    createProject() {
      const bodyContent = {
        name: this.projectName,
      };
      this.addProject(bodyContent);
      this.setCurrentProject(this.projectName);
      this.projectName = "";
      this.closeProjectForm();
    },
    removeProject(id) {
      this.deleteProject(id);
      this.setCurrentProject("");
    },
  },
  mounted: function () {},
};
</script>

<style scoped></style>
