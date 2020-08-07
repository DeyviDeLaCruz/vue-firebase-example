<template>
    <div class="mt-4">
        <h1>Login User</h1>
        <form @submit.prevent="loginUser({email: email, password: password})">
            <input type="email" placeholder="Type your email" v-model="email" class="form-control mb-2">
            <input type="password" placeholder="Type your password" v-model="password" class="form-control mb-2">
            <button type="submit" class="btn btn-primary">Login</button>
        </form>
        <p>{{ error }}</p>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
    name: 'Login',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        ...mapActions(['loginUser'])
    },
    computed: {
        ...mapState(['error'])
    }
}
</script>