import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const baseRoutes = [
  {
    path: "/",
    name: "dashboard",
    meta: { requiresAuth: true },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      // import(/* webpackChunkName: "about" */ "@/views/auth/Login.vue")
      import(/* webpackChunkName: "about" */ "@/views/Dashboard.vue")
  },
  {
    path: "*",
    redirect: "/404"
  },
  {
    path: "/404",
    name: "404",
    component: () =>
      import(/* webpackChunkName: "errors" */ "@/views/errors/404.vue")
  },
  {
    path: "/403",
    name: "403",
    component: () =>
      import(/* webpackChunkName: "errors" */ "@/views/errors/403.vue")
  }
];

const routes = baseRoutes.concat();

const router = new Router({
  mode: "history",
  routes
});

export default router;
