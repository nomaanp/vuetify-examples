import Vue from "vue"
import Router from "vue-router"

import HelloWorld from "@/components/HelloWorld"
import dnd from "@/pages/dnd"

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: HelloWorld
  },
  {
    path: '/dnd',
    component: dnd
  }
];

export default new Router({routes})