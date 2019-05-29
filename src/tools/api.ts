export default class Api
{
    private _url: string = "http://localhost:8080/";

    public constructor()
    {

    }

    public async getAlbums(): Promise<any>
    {
        const response = await fetch(this._url + "albums");
        const json = await response.json();

        return json;
    }

    public async getAlbum(id: string): Promise<any>
    {
        const response = await fetch(this._url + "albums/" + id);
        const json = await response.json();

        return json;
    }

    public async getPhotos(): Promise<any>
    {
        const response = await fetch(this._url + "photos");
        const json = await response.json();

        return json;
    }

    public async getPhoto(id: string): Promise<any>
    {
        const response = await fetch(this._url + "photos/" + id);
        const json = await response.json();

        return json;
    }

    public async getTags(): Promise<any>
    {
        const response = await fetch(this._url + "tags");
        const json = await response.json();

        return json;
    }

    public async getTag(id: string): Promise<any>
    {
        const response = await fetch(this._url + "tags/" + id);
        const json = await response.json();

        return json;
    }
}
