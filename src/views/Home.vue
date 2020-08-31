<template>
    <div>
        <div class="text-center">
            <h2>Home Protected</h2>
            <p>{{ user.email }}</p>
        </div>
        <br>
        <div class="md-layout md-gutter">
            <div class="md-layout-item"></div>
            <div class="md-layout-item">
                <router-link to="/add">
                    <md-button class="md-success md-round mb-2">Add</md-button>
                </router-link>
                <md-list class="md-double-line">
                    <md-subheader>tasks</md-subheader>

                    <md-list-item v-for="(task, index) in tasks" :key="index">
                        <md-icon class="md-secondary">fiber_manual_record</md-icon>

                        <div class="md-list-item-text">
                            <span>{{ task.name }}</span>
                        </div>

                        <router-link :to="{name: 'Edit', params: {id: task.id}}" class="float-right">
                            <md-button class="md-warning md-just-icon md-round"><md-icon>create</md-icon></md-button>
                        </router-link>
                        <md-button class="md-danger md-just-icon md-round" @click="deleteTask(task.id)"><md-icon>delete</md-icon></md-button>
                    </md-list-item>
                </md-list>
            </div>
            <div class="md-layout-item"></div>
        </div>
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