<template>
    <div>
        <h1>Edit Task</h1>
        <form @submit.prevent="editTask(task)" >
            <input type="text" v-model="task.name">
            <button type="submit">Guardar</button>
        </form>
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