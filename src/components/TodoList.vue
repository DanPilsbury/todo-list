<template>
    <v-main>
        <v-card
          width="50%"
          class='mx-auto my-2'
          elevation='1'
          rounded="lg"
        >
          <v-card-title class='justify-center'>
              Todo Items
          </v-card-title>
          <!-- <v-divider class='py-0'></v-divider> -->
          <v-list>
            <template v-for="(item, index) in items">
              <v-divider :key="index" class=''></v-divider>
              <v-list-item class='' :key="item.title">
                <TodoItem/>
              </v-list-item>
              
            </template>
          </v-list>

          <!-- <v-text-field label="Add Comment" required filled outlined>
            <v-btn class="mb-2" slot='append' type="submit">
              POST
            </v-btn>
          </v-text-field> -->
        </v-card>
    </v-main>
</template>

<script>

// import axios from 'axios';
import TodoItem from './TodoItem.vue'

export default {
  name: "TodoList",
  components: {
    TodoItem
  },
  props: {
  },
  data() {
        return {
            items: [
                {title: 'item 1'},
                {title: 'item 2'},
                {title: 'item 3'}
            ],
        }
    },
  created: function() {
  },
  computed: {
    console: () => console,
  },
  mounted: function() {},
  methods: {
  },
};
</script>

<style scoped>
</style>
