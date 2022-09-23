require("./bootstrap");

// window.Vue = require('vue');
import Vue from "vue";
import App from "./app/App";
import { routes } from "./app/Route";
import VueRouter from "vue-router";
import vuetify from "./app/plugins/vuetify";
import store from "./app/Store";

const router = new VueRouter({
    routes,
    mode: "history",
});

const app = new Vue({
    el: "#app",
    router: router,
    store,
    vuetify,
    render: (app) => app(App),
});
