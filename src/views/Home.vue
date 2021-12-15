<template>
  <TodoList />
</template>

<script>
import TodoList from "../components/TodoList.vue";

export default {
  name: "Home",
  components: {
    TodoList,
  },
  data: function () {
    return {};
  },
  computed: {
    console: () => console,
  },
  watch: {},
  methods: {},
  mounted: function () {},
};
</script>

<style scoped></style>
