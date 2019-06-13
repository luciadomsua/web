import { Photo } from '@/types';
import Api from '@/tools/api';
import Toolbox from '@/tools/toolbox';

export default class PhotosService {
    private _api: Api;

    constructor() {
        this._api = new Api();
    }

    async getPhotos(): Promise<Photo[]> {
        const response = Toolbox.mockPhotos(); //await this._api.getPhotos();

        let photos: Photo[] = [];
        photos = Object.assign(photos, response);

        return response;
    }

    async getPhoto(id: string): Promise<Photo> {
        const response = Toolbox.mockPhotos().filter(x => x.Id === id) //await this._api.getPhoto(id);

        let photo: Photo = {};
        photo = Object.assign(photo, response);

        return photo;
    }
}
