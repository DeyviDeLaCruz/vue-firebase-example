<template>
    <div>
        <div class="text-center">
            <h2>New User</h2>
            <p>complete your information</p>
        </div>
        <div class="md-layout md-gutter">
            <div class="md-layout-item"></div>
            <div class="md-layout-item">
                <form @submit.prevent="createUser({email: email, password: password})">
                    <md-field>
                        <label>email</label>
                        <md-input v-model="email" type="email"></md-input>
                    </md-field>
                    <md-field>
                        <label>password</label>
                        <md-input v-model="password" type="password"></md-input>
                    </md-field>
                    <md-field>
                        <label>repeat password</label>
                        <md-input v-model="password_confirm" type="password"></md-input>
                    </md-field>
                    <div class="text-center">
                        <md-button class="md-primary md-wd" type="submit" :disabled='!desactivar'>Register</md-button>
                    </div>
                </form>
                <p>{{ error }}</p>
            </div>
            <div class="md-layout-item"></div>
        </div>
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