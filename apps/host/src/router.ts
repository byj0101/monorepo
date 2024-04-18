import { createWebHistory, createRouter } from "vue-router";

import Home from "./pages/home/index.vue";
import About from "./pages/about/index.vue";
import Attendance from "./pages/attendance/index.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/attendance", component: Attendance },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
