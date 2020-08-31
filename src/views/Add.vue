<template>
    <div>
        <div class="text-center">
            <h2>Add Task</h2>
            <p>create new task</p>
        </div>
        <div class="md-layout md-gutter">
            <div class="md-layout-item"></div>
            <div class="md-layout-item">
                <form @submit.prevent="addTask(name)">
                    <md-field>
                        <label>Type a task</label>
                        <md-input v-model="name"></md-input>
                    </md-field>
                    <div class="text-center">
                        <md-button class="md-primary md-wd" type="submit">Save</md-button>
                    </div>
                </form>
            </div>
            <div class="md-layout-item"></div>
        </div>
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