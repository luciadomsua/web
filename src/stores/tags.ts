import { ITagStore, ITag, IStore } from '@/types';
import { GetterTree, Module, MutationTree, ActionTree } from 'vuex';
import Toolbox from '@/tools/toolbox';
import TagsService from '@/services/tags';

const namespaced = true;

const state: ITagStore = {
    Tags: Toolbox.mockTags(),
    Loading: true,
    Loaded: false
}

const getters: GetterTree<ITagStore, IStore> = {
    Tags: function (store: ITagStore): ITag[]
    {
        return store.Tags.filter(x => x.Id == "0");
    }
}

const mutations: MutationTree<ITagStore> = {
    Loading: function (store: ITagStore, flag: boolean)
    {
        store.Loading = flag;
        store.Loaded = !flag;
    },
    Loaded: function (store: ITagStore, tags: ITag[])
    {
        store.Loading = store.Loaded;
        store.Tags = tags;
        store.Loaded = !store.Loaded;
    }
};

const actions: ActionTree<ITagStore, IStore> = {
    Load: function (context)
    {
        context.commit("Loading", true);

        const tagsService = new TagsService();

        tagsService.getTags().then(function (tags: ITag[])
        {
            context.commit("Loaded", tags);
        }).catch(function (error)
        {

        });
    }
};

export const TagsModule: Module<ITagStore, IStore> = {
    namespaced,
    state,
    getters,
    mutations,
    actions
}
