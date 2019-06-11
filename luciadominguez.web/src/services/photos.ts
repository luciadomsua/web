import { Photo } from '../types';
import Api from '@/tools/api';

export default class PhotosService
{
    private _api: Api;

    constructor()
    {
        this._api = new Api();
    }

    async getPhotos(): Promise<Photo[]>
    {
        const response = await this._api.getPhotos();

        let photos: Photo[] = [];
        photos = Object.assign(photos, response);

        return photos;
    }

    async getPhoto(id: string): Promise<Photo>
    {
        const response = await this._api.getPhoto(id);

        let photo: Photo = {};
        photo = Object.assign(photo, response);

        return photo;
    }
}
