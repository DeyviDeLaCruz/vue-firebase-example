<template>
    <div class="mt-4">
        <div class="text-center">
            <h1>Home Protected</h1>
            <p>{{ user.email }}</p>
        </div>
        <router-link to="/add">
            <button class="btn btn-success mb-2">Add</button>
        </router-link>
        <ul class="list-group">
            <li v-for="(task, index) in tasks" :key="index" class="list-group-item">
                {{ task.name }}
                <button @click="deleteTask(task.id)" class="btn btn-sm btn-danger float-right ml-2">delete</button>
                <router-link :to="{name: 'Edit', params: {id: task.id}}" class="float-right">
                    <button class="btn btn-sm btn-warning">edit</button>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    name: 'Home',
    created() {
        this.getTasks()
    },
    methods: {
        ...mapActions(['getTasks', 'deleteTask'])
    },
    computed: {
        ...mapState(['user', 'tasks'])
    },
}
</script>