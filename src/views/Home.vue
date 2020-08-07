<template>
    <div>
        <h1>Home Protected</h1>
        <p>{{ user.email }}</p>
        <router-link to="/add">
            <button>Add</button>
        </router-link>
        <ul>
            <li v-for="(task, index) in tasks" :key="index">
                {{ task.name }}
                <router-link :to="{name: 'Edit', params: {id: task.id}}">
                    <button>edit</button>
                </router-link>
                <button @click="deleteTask(task.id)">delete</button>
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