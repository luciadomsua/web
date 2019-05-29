import Vue from 'vue';
import Vuex from 'vuex';
import { AlbumsStore } from './stores/albums';
import { PhotosStore } from './stores/photos';
import { TagStore } from './stores/tags';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        AlbumsStore,
        PhotosStore,
        TagStore
    }
});
