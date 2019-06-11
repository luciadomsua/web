import Vue from 'vue'
import Router, { RouterOptions, RouteConfig } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue';
import Gallery from '@/views/Gallery.vue';

Vue.use(Router);

const homeRoute: RouteConfig = {
    path: "/home",
    name: "home",
    component: Home,
};

const aboutRoute: RouteConfig = {
    path: "/about",
    name: "about",
    component: About
}

const galleryRoute: RouteConfig = {
    path: "/gallery",
    name: "gallery",
    component: Gallery
};

const fallbackRoute: RouteConfig = {
    path: "*",
    redirect: "/home"
}

const routes: RouteConfig[] = [
    homeRoute,
    aboutRoute,
    galleryRoute,
    fallbackRoute
];

const routerOptions: RouterOptions = {
    routes,
    fallback: true
};

export default new Router(routerOptions);
