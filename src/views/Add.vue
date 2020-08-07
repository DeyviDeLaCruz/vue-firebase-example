<template>
    <div class="mt-4">
        <h1>Add Task</h1>
        <form @submit.prevent="addTask(name)">
            <input type="text" v-model="name" class="form-control mb-2" placeholder="Type a task">
            <button type="submit" class="btn btn-success">Save</button>
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