<template>
<div>
    <v-app-bar
      app
      color="blue accent-2"
      dark
      clipped-left
    >
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
    

    <v-navigation-drawer
      app
      v-model="drawer"
      clipped
    >
    <v-list>
    <v-list-item-group
        v-model="group"
        active-class="deep-purple--text text--accent-4"
    >
        <v-list-item>
            <v-list-item-title class='font-weight-black ml-2' >All</v-list-item-title>
        </v-list-item>
        <v-expansion-panels>
        <v-expansion-panel class='my-0' style="border-radius: 0px;">
            <v-expansion-panel-header class='font-weight-black'>
                Projects
            </v-expansion-panel-header>
            <v-expansion-panel-content class='pa-0'>
                    <v-list-item v-for='project in projects' v-bind:key='project'>
                        <v-list-item-title>{{project}}</v-list-item-title>
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

export default {
  name: "Navbar",
  components: {
  },
  data: function() {
    return {
        drawer: false,
        group: null,
        projects: ['classes', 'work', 'basketball']
    };
  },
  computed: {
    console: () => console,
  },
  watch: {
  },
  methods: {
  },
  mounted: function() {
  }
};
</script>
    
<style scoped>
</style>