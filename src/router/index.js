import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Tables from "../views/Tables.vue";
import Billing from "../views/Billing.vue";
import VirtualReality from "../views/VirtualReality.vue";
import RTL from "../views/Rtl.vue";
import Profile from "../views/Profile.vue";
import Signup from "../views/Signup.vue";
import Signin from "../views/Signin.vue";
import put from "../views/components/put.vue";
import del from "../views/components/delete.vue";

const routes = [
  {
    path: "/",
    name: "/",
    redirect: "/tables",
  },
  {
    path: "/dashboard-default",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/tables",
    name: "GET API",
    component: Tables,
  },
  {
    path: "/billing",
    name: "POST API",
    component: Billing,
  },
  {
    path: "/virtual-reality",
    name: "PUT API",
    component: VirtualReality,
  },
  {
    path: "/rtl-page",
    name: "DELETE API",
    component: RTL,
  },
  {
    path: "/post",
    name: "post",
    component: () => import('../views/components/post.vue'),
  },
  {
    path: "/put",
    name: "put",
    component: put,
  },
  {
    path: "/del",
    name: "del",
    component: del,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/signin",
    name: "Signin",
    component: Signin,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },

];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

export default router;