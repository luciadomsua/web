import { IPhoto } from '../types';
import Api from '@/tools/api';

export default class PhotosService
{
    private _api: Api;

    constructor()
    {
        this._api = new Api();
    }

    async getPhotos(): Promise<IPhoto[]>
    {
        let photoArray: IPhoto[] = [];

        const response = await this._api.getPhotos();

        photoArray = Object.assign(photoArray, response);
        return photoArray;
    }

    async getPhoto(id: string): Promise<IPhoto>
    {
        let photo: IPhoto = Object.create(null);

        const response = await this._api.getPhoto(id);

        photo = Object.assign(photo, response);
        return photo;
    }
}
