import { ITag } from '../types';
import Api from '@/tools/api';

export default class TagsService
{
    private _api: Api;

    public constructor()
    {
        this._api = new Api();
    }

    async getTags(): Promise<ITag[]>
    {
        let tagArray: ITag[] = [];

        const response = await this._api.getTags();

        tagArray = Object.assign(tagArray, response);
        return tagArray;
    }

    async getTag(id: string): Promise<ITag>
    {
        let tag: ITag = Object.create(null);

        const response = await this._api.getTag(id);

        tag = Object.assign(tag, response);
        return tag;
    }
}
