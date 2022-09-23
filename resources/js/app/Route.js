import Vue from "vue";
import VueRouter from "vue-router";
import Social from "./views/Social";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Dashboard from "../app/Dashboard";

Vue.use(VueRouter);

export const routes = [
    {
        path: "/",
        name: "home",
        alias: "home",
        component: () => import("./views/Home.vue"),
    },
    {
        path: "/campaigns",
        component: () => import("./views/Campaigns.vue"),
    },
    {
        path: "/verification",
        component: () => import("./views/Verification.vue"),
    },
    {
        path: "/campaign/:id",
        component: () => import("./views/Campaign.vue"),
    },
    {
        path: "/blogs",
        component: () => import("./views/Blogs.vue"),
    },
    {
        path: "/blog/:id",
        component: () => import("./views/Blog.vue"),
    },
    {
        path: "/updatepassword",
        component: () => import("./views/UpdatePassword"),
    },
    {
        path: "/auth/social/:provider/callback",
        name: "social",
        component: () => import("./views/Social.vue"),
    },
    {
        path: "*",
        redirect: "/",
    },
    // {
    //     path: "/verification",
    //     name: "Verification",
    //     component: "Verification",
    // },
];
