import { ITagStore, ITag, IStore } from '@/types';
import { GetterTree, Module, MutationTree, ActionTree } from 'vuex';
import Toolbox from '@/tools/toolbox';

const namespaced = true;

const state: ITagStore = {
    Tags: Toolbox.mockTags(),
    Loading: true,
    Loaded: false
}

const getters: GetterTree<ITagStore, IStore> = {
    Tags: function (tagStore): ITag[]
    {
        return tagStore.Tags.filter(x => x.Id == "0");
    }
}

const mutations: MutationTree<ITagStore> = {
    Loading: function (tagStore, { payload })
    {
        tagStore.Loading = payload;
        tagStore.Loaded = !payload;
    },
    Loaded: function (tagStore, { payload })
    {
        tagStore.Loading = !payload;
        tagStore.Loaded = payload;
    }
};

const actions: ActionTree<ITagStore, IStore> = {
    Load: function (context)
    {
        context.commit("Loading", { payload: true });

        setTimeout(() => { }, 500);

        context.commit("Loaded", { payload: true });
    }
};

export const TagsModule: Module<ITagStore, IStore> = {
    namespaced,
    state,
    getters,
    mutations,
    actions
}
