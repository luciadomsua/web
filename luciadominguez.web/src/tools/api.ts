export default class Api
{
    private _url: string = "api/";

    public async getAlbums(): Promise<any>
    {
        const response = await fetch(this._url + "albums");
        const json = await response.json();

        return json;
    }

    public async getAlbum(id: string): Promise<any>
    {
        const response = await fetch(this._url + "albums/" + id, { method: "GET" });
        const json = await response.json();

        return json;
    }

    public async getPhotos(): Promise<any>
    {
        const response = await fetch(this._url + "photos", { method: "GET" });
        const json = await response.json();

        return json;
    }

    public async getPhoto(id: string): Promise<any>
    {
        const response = await fetch(this._url + "photos/" + id, { method: "GET" });
        const json = await response.json();

        return json;
    }

    public async getTags(): Promise<any>
    {
        const response = await fetch(this._url + "tags", { method: "GET" });
        const json = await response.json();

        return json;
    }

    public async getTag(id: string): Promise<any>
    {
        const response = await fetch(this._url + "tags/" + id, { method: "GET" });
        const json = await response.json();

        return json;
    }
}
