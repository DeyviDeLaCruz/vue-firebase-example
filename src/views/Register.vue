<template>
    <div>
        <h1>Registro de usuarios</h1>
        <form @submit.prevent="createUser({email: email, password: password})">
            <input type="email" placeholder="email" v-model="email">
            <input type="password" placeholder="password" v-model="password">
            <input type="password" placeholder="repeat password" v-model="password_confirm">

            <button type="submit" :disabled='!desactivar'>Registrar Usuario</button>
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