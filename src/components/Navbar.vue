<template>
  <div>
    <v-app-bar app color="blue accent-2" dark clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Todo</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-filter</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" clipped>
      <v-list>
        <v-list-item-group>
          <v-list-item @click="selectProject('')">
            <v-list-item-title class="font-weight-black ml-2"
              >All</v-list-item-title
            >
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
                  @click="selectProject(project)"
                >
                  <v-list-item-title>{{ project }}</v-list-item-title>
                </v-list-item>
                <v-list-item v-if="!projectForm">
                  <v-btn @click="openProjectForm" elevation="0" color="white">
                    <v-icon left> mdi-plus-circle </v-icon>
                    Add Project
                  </v-btn>
                </v-list-item>
                <!-- input to add project -->
                <v-list-item v-if="projectForm">
                  <v-text-field
                    label="project name"
                    v-model="projectName"
                  ></v-text-field>
                </v-list-item>
                <v-list-item v-if="projectForm">
                  <v-btn @click="createProject"> add project </v-btn>
                </v-list-item>
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
    ...mapActions(["addProject"]),
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
  },
  mounted: function () {},
};
</script>

<style scoped></style>
