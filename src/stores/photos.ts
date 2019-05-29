import { IPhotosStore, IPhoto, IStore } from '@/types';
import { GetterTree, Module, MutationTree, ActionTree, ActionContext } from 'vuex';
import Toolbox from '@/tools/toolbox';
import PhotosService from '@/services/photos';

const namespaced = true;

const state: IPhotosStore = {
    Photos: Toolbox.mockPhotos(),
    Loading: true,
    Loaded: false
};

const getters: GetterTree<IPhotosStore, IStore> = {
    Photos: function (store: IPhotosStore): IPhoto[]
    {
        return store.Photos.filter((photo) => photo.Id == "1");
    }
};

const mutations: MutationTree<IPhotosStore> = {
    Loading: function (store: IPhotosStore, flag: boolean)
    {
        store.Loading = flag;
        store.Loaded = !flag;
    },
    Loaded: function (store: IPhotosStore, photos: IPhoto[])
    {
        store.Loading = store.Loaded;
        store.Photos = photos;
        store.Loaded = !store.Loaded;
    }
};

const actions: ActionTree<IPhotosStore, IStore> = {
    Load: function (context: ActionContext<IPhotosStore, IStore>)
    {
        context.commit("Loading", true);

        const photosService = new PhotosService();

        photosService.getPhotos().then(function (photos)
        {
            context.commit("Loaded", photos);
        }).catch(function (error)
        {

        });
    }
};

export const PhotosModule: Module<IPhotosStore, IStore> = {
    namespaced,
    state,
    getters,
    mutations,
    actions
}
