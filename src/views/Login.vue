<template>
    <div>
        <h1>Login User</h1>
        <form @submit.prevent="loginUser({email: email, password: password})">
            <input type="email" placeholder="Type your email" v-model="email">
            <input type="password" placeholder="Type your password" v-model="password">
            <button type="submit">Login</button>

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