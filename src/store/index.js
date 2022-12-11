import { createStore } from "vuex";
import { request } from "../../functions/api";

export default createStore({
  state() {
    return {
      isLoading: false,
      movieList: [],
      movieDetail: {},
      page: 1,
    };
  },
  mutations: {
    setMovieList(state, payload) {
      state.movieList = payload.Search;
      console.log(state.movieList);
    },
    changeLoading(state) {
      state.isLoading = !state.isLoading;
    },
  },
  actions: {
    fetchList: async ({ commit, state }, payload) => {
      // payload에는 검색한 movie 값 들어옴
      const page = state.page;
      const movie = payload;
      commit("changeLoading");
      const url = `&s=${movie}&page=${page}`;
      const res = await request(url);
      commit("setMovieList", res);
      commit("changeLoading");
    },
    // fetchDetail: async () => {
    //   // &i=tt4520988&plot=full
    // },
  },
});
