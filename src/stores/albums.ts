import { IAlbumsStore, IAlbum, IStore } from '@/types';
import { GetterTree, Module, MutationTree, ActionTree } from 'vuex';
import Toolbox from '@/tools/toolbox';
import AlbumsService from '@/services/albums';

const namespaced = true;

const state: IAlbumsStore = {
    Albums: Toolbox.mockAlbums(),
    Loading: true,
    Loaded: false
};

const getters: GetterTree<IAlbumsStore, IStore> = {
    Albums: function (store: IAlbumsStore): IAlbum[]
    {
        return store.Albums.filter(x => x.Id == "0");
    }
};

const mutations: MutationTree<IAlbumsStore> = {
    Loading: function (store: IAlbumsStore, flag: boolean)
    {
        store.Loading = flag;
        store.Loaded = !flag;
    },
    Loaded: function (store: IAlbumsStore, albums: IAlbum[])
    {
        store.Loading = store.Loaded;
        store.Albums = albums;
        store.Loaded = !store.Loaded;
    }
};

const actions: ActionTree<IAlbumsStore, IStore> = {
    Load: function (context)
    {
        context.commit("Loading", true);

        const albumsService = new AlbumsService();

        albumsService.getAlbums().then(function (albums)
        {
            context.commit("Loaded", albums);
        }).catch(function (error)
        {

        });
    }
};

export const AlbumsModule: Module<IAlbumsStore, IStore> = {
    namespaced,
    state,
    getters,
    mutations,
    actions
};
