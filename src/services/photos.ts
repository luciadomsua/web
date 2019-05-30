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
        return Object.assign({}, response) as Photo[];
    }

    async getPhoto(id: string): Promise<Photo>
    {
        const response = await this._api.getPhoto(id);
        return Object.assign({}, response) as Photo;
    }
}
