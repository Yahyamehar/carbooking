import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Resocar from "../views/Resocar.vue";
import Address from "../views/Address.vue";
import Resoform from "../views/Resoform.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Electriccar from "../views/Electriccar.vue";
import Admin from "../views/Admin.vue";
import Reservation from "../views/Reservation.vue";
import MyBooking from "../views/MyBooking.vue";
import loading from "../views/loading.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },

  {
    path: "/Resocar",
    name: "Resocar",
    component: Resocar,
  },
  {
    path: "/Address",
    name: "address",
    component: Address,
  },
  {
    path: "/Resoform/:carId",
    props: true,
    name: "resoform",
    component: Resoform,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/Electriccar",
    name: "Electriccar",
    component: Electriccar,
  },
  {
    path: "/Admin",
    name: "Admin",
    component: Admin,
  },
  {
  path: "/Reservation",
  name: "Reservation",
  component: Reservation,
  },
  {
    path: '/mybooking',
    name: 'mybooking',
    component: MyBooking,
  },
  {
    path: "/loading",
    name: 'loading',
    component: loading,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
