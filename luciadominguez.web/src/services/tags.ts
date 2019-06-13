import { Tag } from '@/types';
import Api from '@/tools/api';
import Toolbox from '@/tools/toolbox';

export default class TagsService {
    private _api: Api;

    public constructor() {
        this._api = new Api();
    }

    async getTags(): Promise<Tag[]> {
        const response = Toolbox.mockTags(); //await this._api.getTags();

        let tags: Tag[] = [];
        tags = Object.assign(tags, response);

        return tags;
    }

    async getTag(id: string): Promise<Tag> {
        const response = Toolbox.mockTags().filter(x => x.Id === id); //await this._api.getTag(id);

        let tag: Tag = {};
        tag = Object.assign(tag, response);

        return tag;
    }
}
