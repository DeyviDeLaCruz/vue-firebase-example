<template>
    <div>
        <h1>Add Task</h1>
        <form @submit.prevent="addTask(name)">
            <input type="text" v-model="name">
            <button type="submit">Guardar</button>
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'Add',
    data() {
        return {
            name: ''
        }
    },
    methods: {
        ...mapActions(['addTask'])
    }
}
</script>