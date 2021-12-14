<template>
<v-row class='my-0 mx-0'>
    <v-checkbox class=''>
    </v-checkbox>
    <v-list class='my-0'>
        <v-list-item class='mx-1 my-0 font-weight-normal'>
            
            Title
        </v-list-item>
        
        <v-list-item class='mx-1 my-0 font-weight-light'>
            Description
        </v-list-item>
    </v-list>
    <v-btn
        fab x-small elevation='0' class='ml-auto my-auto'>
        <v-icon class='ma-auto'>
            mdi-trash-can-outline
        </v-icon>
    </v-btn>
</v-row>
</template>

<script>

export default {
    name: "TodoItem",
    props: {

    },
    data() {
        return {
        }
    },
    computed: {
        console: () => console,
    },
    created: function() {
    },
    methods: {
    }
}
</script>

<style>
</style>