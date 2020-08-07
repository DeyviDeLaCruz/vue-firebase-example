<template>
    <div class="mt-4">
        <h1>Registro de usuarios</h1>
        <form @submit.prevent="createUser({email: email, password: password})">
            <input type="email" placeholder="email" v-model="email" class="form-control mb-2">
            <input type="password" placeholder="password" v-model="password" class="form-control mb-2">
            <input type="password" placeholder="repeat password" v-model="password_confirm" class="form-control mb-2">

            <button type="submit" :disabled='!desactivar' class="btn btn-primary">Register User</button>
        </form>
        <p>{{ error }}</p>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
    name: 'Register',
    data() {
        return {
            email: '',
            password: '',
            password_confirm: ''
        }
    },
    created() {

    },
    methods: {
        ...mapActions(['createUser'])
    },
    computed: {
        ...mapState(['error']),
        desactivar() {
            return this.password === this.password_confirm && this.password.trim() !== '' && this.password.length > 5
        }
    },
}
</script>