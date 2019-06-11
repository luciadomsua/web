import { Tag } from '@/types';
import Api from '@/tools/api';

export default class TagsService
{
    private _api: Api;

    public constructor()
    {
        this._api = new Api();
    }

    async getTags(): Promise<Tag[]>
    {
        const response = await this._api.getTags();
        return Object.assign({}, response) as Tag[];
    }

    async getTag(id: string): Promise<Tag>
    {
        const response = await this._api.getTag(id);
        return Object.assign({}, response) as Tag;
    }
}
