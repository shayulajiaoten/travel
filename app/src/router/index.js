import Vue from "vue";
import Router from "vue-router";
import Index from "../components/index";
import Home from "../components/home";
import View from "../components/views";
import Route from "../components/route";
import Message from "../components/message";
import Food from "../components/food";
import Hotel from "../components/hotel";
import Detail from '../components/detail'
Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/index",
      component: Index,
      children: [
        { path: "", component: Home },
        { path: "route", component: Route },
        { path: "view", component: View },
        { path: "message", component: Message },
        { path: "food", component: Food },
        { path: "hotel", component: Hotel },
        { path: "detail", component: Detail },
      ],
    },
  ],
});

export default router;
