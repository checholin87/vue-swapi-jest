import Vue from "vue";
import Router from "vue-router";

import PlanetList from "@/PlanetList";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "planets",
      component: PlanetList
    },
    {
      path: "/planet",
      name: "planet",
      component: () => import(/* webpackChunkName: "about" */ "@/PlanetDetail"),
      props: route => ({ url: route.query.url })
    }
  ]
});
