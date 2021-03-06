import { AlbumsState, Album, RootState, Photo } from '@/types';
import { GetterTree, Module, MutationTree, ActionTree, ActionContext, MutationPayload } from 'vuex';
import Toolbox from '@/tools/toolbox';
import AlbumsService from '@/services/albums';

const namespaced = true;

const state: AlbumsState = {
    albums: [],
    loading: true,
    loaded: false,
    error: null
}

const getters: GetterTree<AlbumsState, RootState> = {
    all(state: AlbumsState): Album[] {
        return state.albums;
    },
    byId: (state: AlbumsState) => (id: string) => {
        return state.albums.filter(x => x.id === id)[0];
    }
}

const mutations: MutationTree<AlbumsState> = {
    loading(state: AlbumsState, { payload }: MutationPayload) {
        state.loading = payload.flag;
        state.loaded = !payload.flag;
    },
    loaded(state: AlbumsState, { payload }: MutationPayload) {
        state.loading = state.loaded;
        state.albums = payload.albums;
        state.loaded = !state.loaded;
    },
    error(state: AlbumsState, { payload }: MutationPayload) {
        state.error = payload.error;
    }
}

const actions: ActionTree<AlbumsState, RootState> = {
    async load({ commit }: ActionContext<AlbumsState, RootState>) {
        commit("loading", { payload: { flag: true } });
        commit("error", { payload: { error: null } });

        const albumsService = new AlbumsService();

        try {
            const albums: Album[] = await albumsService.getAlbums();
            const photos: Photo[] = [];
            albums.forEach(album => {
                album.photos.forEach(photo => {
                    photo.comments = Toolbox.mockComments();
                    photos.push(photo);
                });
            });

            commit("photos/loaded", { payload: { photos } }, { root: true });
            commit("loaded", { payload: { albums: albums } });
        } catch (error) {
            commit("error", { payload: { error: error } });
        }
    }
}

export const AlbumsModule: Module<AlbumsState, RootState> = {
    namespaced,
    state,
    getters,
    mutations,
    actions
}
