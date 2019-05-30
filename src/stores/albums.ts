import { AlbumsState, Album, RootState } from '@/types';
import { GetterTree, Module, MutationTree, ActionTree, ActionContext } from 'vuex';
import Toolbox from '@/tools/toolbox';
import AlbumsService from '@/services/albums';

const namespaced = true;

const state: AlbumsState = {
    albums: Toolbox.mockAlbums(),
    loading: true,
    loaded: false,
    error: null
};

const getters: GetterTree<AlbumsState, RootState> = {
    albums: (state: AlbumsState): Album[] =>
    {
        return state.albums;
    }
};

const mutations: MutationTree<AlbumsState> = {
    loading: (state: AlbumsState, flag: boolean) =>
    {
        state.loading = flag;
        state.loaded = !flag;
    },
    loaded: (state: AlbumsState, albums: Album[]) =>
    {
        state.loading = state.loaded;
        state.albums = albums;
        state.loaded = !state.loaded;
    },
    error: (state: AlbumsState, error: any) =>
    {
        state.error = error;
    }
};

const actions: ActionTree<AlbumsState, RootState> = {
    load: async ({ commit }: ActionContext<AlbumsState, RootState>) =>
    {
        commit("loading", true);
        commit("error", null);

        const albumsService = new AlbumsService();

        try {
            const albums: Album[] = await albumsService.getAlbums();
            commit("loaded", albums);
        } catch (error) {
            commit("error", error);
        }
    }
};

export const AlbumsModule: Module<AlbumsState, RootState> = {
    namespaced,
    state,
    getters,
    mutations,
    actions
};
