import { createRouter, createWebHistory } from "vue-router";

import HomePage from "@/pages/index.vue";
import RegisterAddress from "@/pages/RegisterAddress.vue";

const routes = [
  { path: "/", component: HomePage, name: "home" },
  {
    path: "/register-address",
    component: RegisterAddress,
    name: "register-address",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router
