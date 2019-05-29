import { IPhotosStore, IPhoto, IStore } from '../types';
import { GetterTree, Module, MutationTree, ActionTree } from 'vuex';
import Toolbox from '../tools/toolbox';

const namespaced = true;

const state: IPhotosStore = {
    Photos: Toolbox.mockPhotos(),
    Loading: true,
    Loaded: false
};

const getters: GetterTree<IPhotosStore, IStore> = {
    Photos: function (photoStore): IPhoto[]
    {
        return photoStore.Photos.filter((photo) => photo.Id == "1");
    }
};

const mutations: MutationTree<IPhotosStore> = {
    Loading: function (photoStore, { payload })
    {
        photoStore.Loading = payload;
        photoStore.Loaded = !payload;
    },
    Loaded: function (photoStore, { payload })
    {
        photoStore.Loaded = payload;
        photoStore.Loading = !payload;
    }
};

const actions: ActionTree<IPhotosStore, IStore> = {
    Load: function (context)
    {
        context.commit("Loading", { payload: true });

        setTimeout(() => { }, 500);

        context.commit("Loaded", { payload: true });
    }
};

export const PhotosModule: Module<IPhotosStore, IStore> = {
    namespaced,
    state,
    getters,
    mutations,
    actions
}
