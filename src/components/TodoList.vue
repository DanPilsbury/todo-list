<template>
    <v-main>
        <v-card
          width="70%"
          class='mx-auto my-6'
          elevation='1'
          rounded="lg"
        >
          <v-card-title class='justify-center'>
              Todo Items
          </v-card-title>
          <!-- <v-divider class='py-0'></v-divider> -->
          <v-list>
            <template v-for="(item, index) in items">
              <v-divider :key="(index+1)*-1" class=''></v-divider>
              <v-list-item class='' :key="index">
                <TodoItem v-bind:todo="item"/>
              </v-list-item>
              
            </template>
            <v-divider class=''></v-divider>
            <v-list-item v-if='!addItem'>
                <v-btn @click="addItem = !addItem" elevation="0" color="white">
                    <v-icon left>
                        mdi-plus-circle
                    </v-icon>
                    Add Item
                </v-btn>
            </v-list-item>
          
            <v-list-item v-if='addItem'>
                <CreateTodo/>
            </v-list-item>
            </v-list>
        </v-card>
    </v-main>
</template>

<script>

import axios from 'axios';
import TodoItem from './TodoItem.vue'
import CreateTodo from './CreateTodo.vue'
import { eventBus } from '../main';

export default {
  name: "TodoList",
  components: {
    TodoItem,
    CreateTodo
  },
  props: {
  },
  data() {
        return {
            addItem: false,
            items: [
                {title: 'item 1'},
                {title: 'item 2'},
                {title: 'item 3'}
            ],
        }
    },
  created: function() {
      this.refreshItems();
      eventBus.$on('cancelAdd', () => {
          this.addItem = !this.addItem
      });
      eventBus.$on('refreshItems', () => {
          this.refreshItems();
      });
  },
  computed: {
    console: () => console,
  },
  mounted: function() {},
  methods: {
    refreshItems() {
      axios.get('/todo')
        .then((response) => {
          this.console.log(response.data)
          this.items = response.data;
        })
    }
  },
};
</script>

<style scoped>
</style>
