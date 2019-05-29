import { IAlbum } from '../types';
import Api from '@/tools/api';

export default class AlbumsService
{
    private _api: Api

    public constructor()
    {
        this._api = new Api();
    }

    async getAlbums(): Promise<IAlbum[]>
    {
        let albumArray: IAlbum[] = [];

        const response = await this._api.getAlbums();

        albumArray = Object.assign(albumArray, response);
        return albumArray;
    }

    async getAlbum(id: string): Promise<IAlbum>
    {
        let album: IAlbum = Object.create(null);

        const response = await this._api.getAlbum(id);

        album = Object.assign(album, response);
        return album;
    }
}
