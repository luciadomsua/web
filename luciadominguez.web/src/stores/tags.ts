import { TagsState, Tag, RootState } from '@/types';
import { GetterTree, Module, MutationTree, ActionTree, ActionContext } from 'vuex';
import Toolbox from '@/tools/toolbox';
import TagsService from '@/services/tags';

const namespaced = true;

const state: TagsState = {
    tags: Toolbox.mockTags(),
    loading: true,
    loaded: false,
    error: null
}

const getters: GetterTree<TagsState, RootState> = {
    tags: (state: TagsState): Tag[] =>
    {
        return state.tags;
    }
}

const mutations: MutationTree<TagsState> = {
    loading: (state: TagsState, flag: boolean) =>
    {
        state.loading = flag;
        state.loaded = !flag;
    },
    loaded: (state: TagsState, tags: Tag[]) =>
    {
        state.loading = state.loaded;
        state.tags = tags;
        state.loaded = !state.loaded;
    },
    error: (state: TagsState, error: any) =>
    {
        state.error = error;
    }
};

const actions: ActionTree<TagsState, RootState> = {
    load: async ({ commit }: ActionContext<TagsState, RootState>) =>
    {
        commit("loading", true);
        commit("error", null);

        const tagsService = new TagsService();

        try {
            const tags: Tag[] = await tagsService.getTags();
            commit("loaded", tags);
        } catch (error) {
            commit("error", error);
        }
    }
};

export const TagsModule: Module<TagsState, RootState> = {
    namespaced,
    state,
    getters,
    mutations,
    actions
}
