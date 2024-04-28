import { createWebHistory, createRouter } from "vue-router";

import BoardLists from "../components/BoardLists.vue";
import BoardDetail from "../components/BoardDetail.vue";
import BoardEdit from "../components/BoardEdit.vue";

const routes = [
  { path: "/", redirect: "/board" },
  { path: "/board", component: BoardLists },
  { path: "/board/:id", component: BoardDetail },
  { path: "/edit/:id", component: BoardEdit },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
