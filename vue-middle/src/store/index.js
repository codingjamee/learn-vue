import { createStore } from "vuex";
import { fetchLists } from "@/api";

export const store = createStore({
  state: {
    news: [],
    jobs: [],
    asks: [],
    users: [],
    items: [],
  },
  mutations: {
    SET_STATE(state, { data, name }) {
      state[name] = data;
    },
  },
  // getters: {
  //   getJobs: (state) => {
  //     return state.jobs;
  //   },
  // },

  actions: {
    FETCH_DATA(context, payload) {
      fetchLists(payload.url)
        .then((response) => {
          context.commit("SET_STATE", {
            data: response.data,
            name: payload.name,
          });
        })
        .catch((err) => console.log(err));
    },
  },
});
