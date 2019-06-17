import Vue from 'vue'
import Router, { RouterOptions, RouteConfig } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue';
import Gallery from '@/views/Gallery.vue';
import AlbumView from '@/views/Album.vue';
import PhotoView from '@/views/Photo.vue';
import AdminView from './views/Admin.vue';

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

const albumRoute: RouteConfig = {
    path: "/album/:albumId",
    name: "album",
    props: true,
    component: AlbumView
}

const photoRoute: RouteConfig = {
    path: "/photo/:photoId",
    name: "photo",
    props: true,
    component: PhotoView
}

const adminRoute: RouteConfig = {
    path: "/admin",
    name: "admin",
    component: AdminView
}

const fallbackRoute: RouteConfig = {
    path: "*",
    redirect: "/home"
}

const routes: RouteConfig[] = [
    homeRoute,
    aboutRoute,
    galleryRoute,
    albumRoute,
    photoRoute,
    adminRoute,
    fallbackRoute
];

const routerOptions: RouterOptions = {
    mode: "hash",
    base: "/",
    routes
};

export default new Router(routerOptions);
