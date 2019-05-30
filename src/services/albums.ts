import { Album } from '../types';
import Api from '@/tools/api';

export default class AlbumsService
{
    private _api: Api

    public constructor()
    {
        this._api = new Api();
    }

    async getAlbums(): Promise<Album[]>
    {
        const response = await this._api.getAlbums();
        return Object.assign({}, response) as Album[];
    }

    async getAlbum(id: string): Promise<Album>
    {
        const response = await this._api.getAlbum(id);
        return Object.assign({}, response) as Album;
    }
}
