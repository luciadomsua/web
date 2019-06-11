import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { AlbumsModule } from '@/stores/albums';
import { PhotosModule } from '@/stores/photos';
import { TagsModule } from '@/stores/tags';
import { RootState } from '@/types';
import { ModuleTree } from 'vuex';

Vue.use(Vuex);

const modules: ModuleTree<RootState> = {
    albums: AlbumsModule,
    photos: PhotosModule,
    tags: TagsModule
};

const store: StoreOptions<RootState> = {
    modules
};

export default new Vuex.Store(store);
