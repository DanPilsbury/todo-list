<template>
  <TodoList/>
</template>

<script>

import axios from 'axios';
import TodoList from '../components/TodoList.vue'

export default {
  name: "Home",
  components: {
    TodoList
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