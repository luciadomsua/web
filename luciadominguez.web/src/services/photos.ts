import { Photo } from '@/types';
import Api from '@/tools/api';
import Toolbox from '@/tools/toolbox';

export default class PhotosService
{
    private _api: Api;

    constructor()
    {
        this._api = new Api();
    }

    async getPhotos(): Promise<Photo[]>
    {
        let response;
        try {
            response = await this._api.getPhotos();
            console.log(response);
        } catch (error) {
            console.log(error);
        }

        const photos = Object.assign([], response);

        return photos;
    }

    async getPhoto(id: string): Promise<Photo>
    {
        let response;
        try {
            response = await this._api.getPhoto(id);
            console.log(response);
        } catch (error) {
            console.log(error)
        }

        const photo = Object.assign({}, response);

        return photo;
    }
}
