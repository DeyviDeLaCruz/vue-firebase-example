<template>
  <div id="app">
    <md-toolbar class="md-success">
      <div class="md-toolbar-row">
        <div class="md-toolbar-section-start">
          <h3 class="md-title">Vue Tasks</h3>
        </div>
        <div class="md-toolbar-section-end">
          <md-button class="md-just-icon md-simple md-toolbar-toggle">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </md-button>

          <div class="md-collapse">
            <md-list>
              <md-list-item to="/" v-if="existUser" exact>
                <i class="material-icons">home</i>
                <p class="hidden-lg hidden-md">Home</p>
              </md-list-item>

              <md-list-item to="/register" v-if="!existUser">
                <i class="material-icons">person</i>
                <p class="hidden-lg hidden-md">register</p>
              </md-list-item>
              <md-list-item to="/login" v-if="!existUser">
                <i class="material-icons">vpn_key</i>
                <p class="hidden-lg hidden-md">Login</p>
              </md-list-item>
              <md-list-item href="javascript:void(0)" @click="logout" v-if="existUser">
                <i class="material-icons">power_settings_new</i>
                <p class="hidden-lg hidden-md">Logout</p>
              </md-list-item>
            </md-list>
          </div>
        </div>
      </div>
    </md-toolbar>
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
