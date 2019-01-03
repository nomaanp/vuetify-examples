<template>
    <v-toolbar color="indigo" dark fixed app>
      <v-btn @click="back()" v-if="backArrow.state" icon class="hidden-xs-only">
        <v-icon>arrow_back</v-icon>
      </v-btn>
      <v-toolbar-side-icon @click.stop="computedDrawer = !computedDrawer" else class="white--text" light></v-toolbar-side-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-toolbar>

    <!-- <div id="app">
  <v-app id="inspire">
  <page-header :back-arrow="backArrow" inline-template>
    <v-toolbar color="indigo" dark fixed app>
      <v-btn @click="back()" v-if="backArrow.state" icon class="hidden-xs-only">
        <v-icon>arrow_back</v-icon>
      </v-btn>
      <v-toolbar-side-icon class="white--text" light></v-toolbar-side-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-toolbar>
  </page-header>    
    
    <v-content>
      <v-container fluid fill-height>
        <v-layout
          justify-center
          align-center
        >
          <v-flex text-xs-center>
            {{ backArrow }}
           <v-btn @click="toggleBack()">Toggle Back Arrow</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2017</span>
    </v-footer>
  </v-app>
</div>
 -->

</template>

<script>
    export default {
        name: 'PageHeader',
        props: [
            "backArrow",
            "drawer"
        ],
        data() {
            return {
              
            };
        },
        methods: {
            back() {

            }
        },
        computed: {
            computedDrawer: {
              get() {
                return JSON.parse(this.drawer);
              }
                // return JSON.parse(this.drawer)
            }
        }
    }

//     Vue.component('page-header', {
//   props: [ 'backArrow' ],
//   methods: {
//     back() {
//       this.backArrow.state = !this.backArrow.state;
//       this.backArrow.route = ""
//     }
//   }
// })

// new Vue({
//   el: '#app',
//   data: () => ({
//     backArrow: {
//       state: 0,
//       route: ""
//     }
//   }),
//   methods: {
//     toggleBack() {
      
//       this.backArrow.state = !this.backArrow.state;
//       this.backArrow.route = "test"
//     },
    
//   }
// })
</script>