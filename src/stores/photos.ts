import { PhotosState, Photo, RootState } from '@/types';
import { GetterTree, Module, MutationTree, ActionTree, ActionContext } from 'vuex';
import Toolbox from '@/tools/toolbox';
import PhotosService from '@/services/photos';

const namespaced = true;

const state: PhotosState = {
    photos: Toolbox.mockPhotos(),
    loading: true,
    loaded: false,
    error: null
};

const getters: GetterTree<PhotosState, RootState> = {
    photos: (state: PhotosState): Photo[] =>
    {
        return state.photos;
    }
};

const mutations: MutationTree<PhotosState> = {
    loading: (state: PhotosState, flag: boolean) =>
    {
        state.loading = flag;
        state.loaded = !flag;
    },
    loaded: (state: PhotosState, photos: Photo[]) =>
    {
        state.loading = state.loaded;
        state.photos = photos;
        state.loaded = !state.loaded;
    }
};

const actions: ActionTree<PhotosState, RootState> = {
    load: async ({ commit }: ActionContext<PhotosState, RootState>) =>
    {
        commit("loading", true);
        commit("error", null);

        const photosService = new PhotosService();

        try {
            const photos: Photo[] = await photosService.getPhotos();
            commit("loaded", photos);
        } catch (error) {
            commit("error", error);
        }
    }
};

export const PhotosModule: Module<PhotosState, RootState> = {
    namespaced,
    state,
    getters,
    mutations,
    actions
}
