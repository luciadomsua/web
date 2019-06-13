import { Album } from '@/types';
import Api from '@/tools/api';
import Toolbox from '@/tools/toolbox';

export default class AlbumsService {
    private _api: Api

    public constructor() {
        this._api = new Api();
    }

    async getAlbums(): Promise<Album[]> {
        const response = Toolbox.mockAlbums(); //await this._api.getAlbums();

        let albums: Album[] = [];
        albums = Object.assign(albums, response);

        return albums;
    }

    async getAlbum(id: string): Promise<Album> {
        const response = Toolbox.mockAlbums().filter(x => x.Id === id); //await this._api.getAlbum(id);

        let album: Album = {};
        album = Object.assign(album, response);

        return album;
    }
}
