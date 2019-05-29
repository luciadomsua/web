import { IAlbumsStore, IAlbum, IStore, ILoad } from '../types';
import { GetterTree, Module, MutationTree, ActionTree } from 'vuex';
import Toolbox from '../tools/toolbox';

const namespaced = true;

const state: IAlbumsStore = {
    Albums: Toolbox.mockAlbums(),
    Loading: true,
    Loaded: false
};

const getters: GetterTree<IAlbumsStore, IStore> = {
    Albums: function (albumsStore): IAlbum[]
    {
        return albumsStore.Albums.filter(x => x.Id == "0");
    }
};

const mutations: MutationTree<IAlbumsStore> = {
    Loading: function (albumStore, { payload })
    {
        albumStore.Loading = payload;
        albumStore.Loaded = !payload;
    },
    Loaded: function (albumStore, { payload })
    {
        albumStore.Loaded = payload;
        albumStore.Loading = !payload;
    }
};

const actions: ActionTree<IAlbumsStore, IStore> = {
    Load: function (context)
    {
        context.commit("Loading", { payload: true });

        setTimeout(() => { }, 500);

        context.commit("Loaded", { payload: true });
    }
};

export const AlbumsModule: Module<IAlbumsStore, IStore> = {
    namespaced,
    state,
    getters,
    mutations,
    actions
};
