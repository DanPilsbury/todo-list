<template>
<v-app>
    <Navbar/>
    <router-view/>
</v-app>
</template>

<script>

import Navbar from './components/Navbar.vue'

export default {
  name: "app",
  components: {
    Navbar
  },
  data() {
    return {
    };
  },
  mounted () {
  },
  created: function() {
  },
  computed: {
    console: () => console,
  },
  methods: {
  },
};
</script>

<style>
</style>
