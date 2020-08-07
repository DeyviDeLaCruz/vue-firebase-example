<template>
  <div>
    <router-link to="/" v-if="existUser">Home</router-link> |
    <router-link to="/register" v-if="!existUser">Register</router-link> |
      <router-link to="/login" v-if="!existUser">Login</router-link> |
      <button v-if="existUser" @click="logout">
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
