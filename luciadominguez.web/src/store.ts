import Vue from 'vue';
import Vuex, { StoreOptions, ModuleTree } from 'vuex';
import { AlbumsModule } from '@/stores/albums';
import { PhotosModule } from '@/stores/photos';
import { TagsModule } from '@/stores/tags';
import { RootState } from '@/types';

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
