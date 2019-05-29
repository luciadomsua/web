import { ITagStore, ITag } from '../types';
import { GetterTree } from 'vuex';
import Toolbox from '../tools/toolbox';

const state: ITagStore = {
    Tags: Toolbox.mockTags()
}

const getters: GetterTree<ITagStore, ITag[]> = {
    Tags: function (tagStore)
    {
        return tagStore.Tags.filter(x => x.Id == "0");
    }
}

export const TagStore = {
    state,
    getters
}
