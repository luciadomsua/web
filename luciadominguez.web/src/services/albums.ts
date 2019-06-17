import { Album } from '@/types';
import Api from '@/tools/api';
import Toolbox from '@/tools/toolbox';

export default class AlbumsService
{
    private _api: Api

    public constructor()
    {
        this._api = new Api();
    }

    async getAlbums(): Promise<Album[]>
    {
        let response;
        try {
            response = await this._api.getAlbums();
            console.log(response);
        } catch (error) {
            console.log(error);
        }

        const albums = Object.assign([], response);

        return albums;
    }

    async getAlbum(id: string): Promise<Album>
    {
        let response;
        try {
            response = await this._api.getAlbum(id);
            console.log(response);
        } catch (error) {
            console.log(error);
        }

        const album = Object.assign({}, response);

        return album;
    }
}
