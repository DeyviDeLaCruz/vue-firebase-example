<template>
    <div class="wrapper">
        <div class="section page-header header-filter">
            <div class="container">
                <div class="md-layout">
                    <div class="md-layout-item md-size-33 md-small-size-66 md-xsmall-size-100 md-medium-size-40 mx-auto">
                        <login-card header-color="green">
                            <h4 slot="title" class="card-title">Login User</h4>
                            <p slot="description" class="description">write your credentials</p>
                            <md-field class="md-form-group" slot="inputs">
                                <md-icon>email</md-icon>
                                <label>Email...</label>
                                <md-input v-model="email" type="email"></md-input>
                            </md-field>
                            <md-field class="md-form-group" slot="inputs">
                                <md-icon>lock_outline</md-icon>
                                <label>Password...</label>
                                <md-input v-model="password" type="password"></md-input>
                            </md-field>
                            <p>{{ error }}</p>
                            <md-button slot="footer" class="md-simple md-success md-lg" @click="loginUser({email: email, password: password})">
                                Ingresar
                            </md-button>
                            <!-- 
                            <form @submit.prevent="loginUser({email: email, password: password})">

                                <input type="email" placeholder="Type your email" v-model="email" class="form-control mb-2">
                                <input type="password" placeholder="Type your password" v-model="password" class="form-control mb-2">
                                <button type="submit" class="btn btn-primary">Login</button>
                            </form> -->
                        </login-card>
                        
                    </div>
                </div>

            </div>

        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { LoginCard } from "@/components";

export default {
    name: 'Login',
    components: {
        LoginCard
    },
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