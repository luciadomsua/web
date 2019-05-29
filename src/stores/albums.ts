import { IAlbumsStore, IAlbum } from '../types';
import { GetterTree } from 'vuex';
import Toolbox from '../tools/toolbox';

const state: IAlbumsStore = {
    Albums: Toolbox.mockAlbums()
};

const getters: GetterTree<IAlbumsStore, IAlbum[]> = {
    Albums: function (albumsStore): IAlbum[]
    {
        return albumsStore.Albums.filter(x => x.Id == "0");
    }
};

export const AlbumsStore = {
    state,
    getters
};
