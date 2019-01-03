<template>
  <v-app id="inspire">
    <v-navigation-drawer
      fixed
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-tile to="/">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/dnd">
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Drag and Drop</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <!-- <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-toolbar> -->
    <!-- <page-header :back-arrow="backArrow" :drawer="drawer"></page-header> -->
    <v-toolbar color="indigo" dark fixed app>
      <v-btn @click="back()" v-if="backArrow.state" icon class="hidden-xs-only">
        <v-icon>arrow_back</v-icon>
      </v-btn>
      <v-toolbar-side-icon @click.stop="drawer = !drawer" else class="white--text" light></v-toolbar-side-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer color="indigo" app inset>
      <div class="pa-2">
        <span class="white--text">&copy; 2018</span>
      </div>
    </v-footer>
  </v-app>
</template>

<script>
// import PageHeader from './components/PageHeader'

export default {
  name: 'App',
  components: {
    // PageHeader
  },
  data () {
    return {
      drawer: true,
      backArrow: {
        state: false,
        route: ""
      }
    }
  }
}
</script>
