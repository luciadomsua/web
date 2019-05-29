import { IPhotosStore, IPhoto } from '../types';
import { GetterTree } from 'vuex';
import Toolbox from '../tools/toolbox';

const state: IPhotosStore = {
    Photos: Toolbox.mockPhotos()
};

const getters: GetterTree<IPhotosStore, IPhoto[]> = {
    Photos: function (photoStore): IPhoto[]
    {
        return photoStore.Photos.filter((photo) =>
        {
            if (photo.Album != null && photo.Album.Id == "1") {
                return photo;
            }
        });
    }
};

export const PhotosStore = {
    state,
    getters
}
