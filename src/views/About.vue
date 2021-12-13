<template>
    <v-main >
      About Page
    <v-container>
      <v-form ref="form">
        <v-text-field
          v-model="title"
          :rules="rules"
          label="title"
        ></v-text-field>
        <v-text-field
          v-model="description"
          label="description"
        ></v-text-field>
        <v-btn @click="onClick()">
          submit
        </v-btn>
      </v-form>
    </v-container>
    </v-main>
</template>

<script>

import axios from 'axios';

export default {
  name: "About",
  components: {
  },
  data: function() {
    return {
      title: '',
      description: '',
      rules: [(s) => s.length > 0 || 'required']
    };
  },
  computed: {
    console: () => console,
  },
  watch: {
  },
  methods: {
    onClick() {
      if (this.$refs.form.validate()) {
        const bodyContent = {title: this.title, descripiton: this.description}
        axios.post('/todo', bodyContent)
          .then((response) => {
            this.console.log(response.data);
          });
        this.title = '';
        this.description = '';
      }
    },

  },
  mounted: function() {
  }
};
</script>
    
<style scoped>
</style>