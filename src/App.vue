<template>
  <div class="container mt-2" id="app">
    <router-link to="/" v-if="existUser" class="btn btn-primary mr-2">Home</router-link>
    <router-link to="/register" v-if="!existUser" class="btn btn-secondary mr-2">Register</router-link>
      <router-link to="/login" v-if="!existUser" class="btn btn-primary mr-2">Login</router-link>
      <button v-if="existUser" @click="logout" class="btn btn-danger">
        Logout
      </button>
    <router-view/>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data() {
    return {
      active: 'guide'
    }
  },
  methods: {
    ...mapActions(['logout'])  
  },
  computed: {
    ...mapGetters(['existUser'])
  }
}
</script>
