import Vue from "vue";
import Router from "vue-router";

import PageNotFound from "../pages/PageNotFound.vue";
import PageHome from "../pages/PageHome.vue";
import PageOne from "../pages/PageOne.vue";

Vue.use(Router);

const routes = new Router({
//   mode: "history",
  routes: [
    // {
    //   path: "/step",
    //   name: "p-step",
    //   component: PageSteps,
    //   children: [
    //     {
    //       path: "login",
    //       name: "login",
    //       component: CStepLogin
    //     },
        
    //     {
    //       path: "thankyou",
    //       name: "thankyou",
    //       component: CStepThankYou
    //     }
    //   ]
    // },
    {
      path: "/",
      name: "p-home",
      component: PageHome
    },
    {
      path: "/page1",
      name: "p-one",
      component: PageOne
    },
    {
      path: "*",
      name: "p-not-found",
      component: PageNotFound
    }
  ]
});

export default routes;
