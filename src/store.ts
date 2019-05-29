import Vue from 'vue';
import Vuex from 'vuex';
import { AlbumsModule } from './stores/albums';
import { PhotosModule } from './stores/photos';
import { TagsModule } from './stores/tags';
import { IStore } from './types';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        Albums: AlbumsModule,
        Photos: PhotosModule,
        Tags: TagsModule
    }
} as IStore);
