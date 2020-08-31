<template>
    <div>
        <div class="text-center">
            <h2>Edit Task</h2>
            <p>edit your task</p>
        </div>
        <div class="md-layout md-gutter">
            <div class="md-layout-item"></div>
            <div class="md-layout-item">
                <form @submit.prevent="editTask(task)" >
                    <md-field>
                        <label>Task Name</label>
                        <md-input v-model="task.name"></md-input>
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
import { mapState, mapActions } from 'vuex'

export default {
    name: 'Edit',
    created() {
        this.getTask(this.$route.params.id)
    },
    methods: {
        ...mapActions(['getTask', 'editTask'])
    },
    computed: {
        ...mapState(['task'])
    },
}
</script>