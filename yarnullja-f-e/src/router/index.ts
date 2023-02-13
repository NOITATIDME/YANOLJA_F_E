import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/main",
    name: "main",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/common/HomeMain.vue"),
  },
  {
    path: "/dad",
    name: "dad",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/domestic/dad/DadMain.vue"
      ),
  },
  {
    path: "/dai",
    name: "dai",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/domestic/dai/DaiMain.vue"
      ),
  },
  {
    path: "/dam",
    name: "dam",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/domestic/dam/DamMain.vue"
      ),
  },
  {
    path: "/dap",
    name: "dap",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/domestic/dap/DapMain.vue"
      ),
  },
  {
    path: "/basket",
    name: "basket",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/manage/mmb/BasketMain.vue"
      ),
  },
  {
    path: "/info",
    name: "info",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/manage/mmi/InfoManage.vue"
      ),
  },
  {
    path: "/reservation",
    name: "reservation",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/manage/mmr/ReservationList.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
