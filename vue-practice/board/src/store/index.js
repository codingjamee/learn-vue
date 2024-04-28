import { getData } from "@/api";
import { createStore } from "vuex";

export const store = createStore({
  state: {
    boardData: {},
  },
  mutations: {
    SET_BOARD(state, data) {
      state.boardData = data;
    },
  },
  actions: {
    FETCH_DATA({ commit }, id) {
      getData(`boards/${id}/`)
        .then((response) => commit("SET_BOARD", response.data))
        .catch((error) => {
          console.error("Failed to fetch board details:", error);
          this.$router.push("/board");
        });
    },
  },
});
