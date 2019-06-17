import { Tag } from '@/types';
import Api from '@/tools/api';
import Toolbox from '@/tools/toolbox';

export default class TagsService
{
    private _api: Api;

    public constructor()
    {
        this._api = new Api();
    }

    async getTags(): Promise<Tag[]>
    {
        const response = await this._api.getTags(); //Toolbox.mockTags();

        const tags = Object.assign([], response);

        return tags;
    }

    async getTag(id: string): Promise<Tag>
    {
        const response = await this._api.getTag(id); //Toolbox.mockTags().filter(x => x.Id === id)[0];

        const tag = Object.assign({}, response);

        return tag;
    }
}
