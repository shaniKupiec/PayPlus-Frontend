import { createRouter, createWebHashHistory } from "vue-router";
import loginPage from "../views/login-page.vue";
import homePage from "../views/home-page.vue";

const routes = [
  {
    path: "/",
    name: "login",
    component: loginPage,
  },
  {
    path: "/home",
    name: "home",
    component: homePage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
