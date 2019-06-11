import { PhotosState, Photo, RootState } from '@/types';
import { GetterTree, Module, MutationTree, ActionTree, ActionContext, MutationPayload } from 'vuex';
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
    photos(state: PhotosState): Photo[]
    {
        return state.photos;
    }
};

const mutations: MutationTree<PhotosState> = {
    loading(state: PhotosState, { payload }: MutationPayload)
    {
        state.loading = payload.flag;
        state.loaded = !payload.flag;
    },
    loaded(state: PhotosState, { payload }: MutationPayload)
    {
        state.loading = state.loaded;
        state.photos = payload.photos;
        state.loaded = !state.loaded;
    },
    error(state: PhotosState, { payload }: MutationPayload)
    {
        state.error = payload.error;
    }
};

const actions: ActionTree<PhotosState, RootState> = {
    async load({ commit }: ActionContext<PhotosState, RootState>)
    {
        commit("loading", { payload: true });
        commit("error", null);

        const photosService = new PhotosService();

        try {
            const photos: Photo[] = await photosService.getPhotos();
            commit("loaded", { payload: photos });
        } catch (error) {
            commit("error", { payload: error });
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
