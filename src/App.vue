<template>
  <v-app>
    <Navbar />
    <router-view />
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
import Navbar from "./components/Navbar.vue";

export default {
  name: "app",
  components: {
    Navbar,
  },
  data() {
    return {};
  },
  mounted() {},
  created: function () {
    this.fetchTodos();
    this.fetchProjects();
  },
  computed: {
    console: () => console,
  },
  methods: {
    ...mapActions(["fetchTodos", "fetchProjects"]),
  },
};
</script>

<style></style>
