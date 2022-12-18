import { createStore } from "vuex";
import { request } from "../../functions/api";

export default createStore({
  state() {
    return {
      isLoading: false,
      isDetail: false,
      movieList: [],
      movieDetail: {},
      page: 1,
    };
  },
  mutations: {
    setMovieList(state, payload) {
      state.movieList = payload.Search;
    },
    setMovieDetail(state, payload) {
      state.movieDetail = payload;
    },
    changeLoading(state) {
      state.isLoading = !state.isLoading;
    },
    changeIsDetail(state) {
      state.isDetail = !state.isDetail;
    },
  },
  actions: {
    fetchList: async ({ commit, state }, payload) => {
      // payload: 검색한 movie
      commit("changeLoading");
      const page = state.page;
      const movie = payload;
      const url = `&s=${movie}&page=${page}`;
      const res = await request(url);
      commit("setMovieList", res);
      commit("changeLoading");
    },
    fetchDetail: async ({ commit, state }, payload) => {
      // payload: 영화 id
      commit("changeLoading");
      const id = payload;
      const url = `&i=${id}&plot=full`;
      const res = await request(url);
      commit("setMovieDetail", res);
      commit("changeLoading");
      commit("changeIsDetail");
    },
  },
});
