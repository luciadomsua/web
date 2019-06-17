import { TagsState, Tag, RootState } from '@/types';
import { GetterTree, Module, MutationTree, ActionTree, ActionContext, MutationPayload } from 'vuex';
import Toolbox from '@/tools/toolbox';
import TagsService from '@/services/tags';

const namespaced = true;

const state: TagsState = {
    tags: [],
    loading: true,
    loaded: false,
    error: null
}

const getters: GetterTree<TagsState, RootState> = {
    tags(state: TagsState): Tag[] {
        return state.tags;
    }
}

const mutations: MutationTree<TagsState> = {
    loading(state: TagsState, { payload }) {
        state.loading = payload.flag;
        state.loaded = !payload.flag;
    },
    loaded(state: TagsState, { payload }) {
        state.loading = state.loaded;
        state.tags = payload.tags;
        state.loaded = !state.loaded;
    },
    error(state: TagsState, { payload }) {
        state.error = payload.error;
    }
}

const actions: ActionTree<TagsState, RootState> = {
    async load({ commit }: ActionContext<TagsState, RootState>) {
        commit("loading", { payload: { flag: true } });
        commit("error", { payload: { error: null } });

        const tagsService = new TagsService();

        try {
            const tags: Tag[] = await tagsService.getTags();
            commit("loaded", { payload: { tags: tags } });
        } catch (error) {
            commit("error", { payload: { error: error } });
        }
    }
}

export const TagsModule: Module<TagsState, RootState> = {
    namespaced,
    state,
    getters,
    mutations,
    actions
}
