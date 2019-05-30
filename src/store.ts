import Vue from 'vue';
import Vuex from 'vuex';
import { AlbumsModule } from '@/stores/albums';
import { PhotosModule } from '@/stores/photos';
import { TagsModule } from '@/stores/tags';
import { RootState } from '@/types';

Vue.use(Vuex);

const store: RootState = {
    modules: {
        Albums: AlbumsModule,
        Photos: PhotosModule,
        Tags: TagsModule
    }
};

export default new Vuex.Store(store);
