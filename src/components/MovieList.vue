<template>
  <ul
    v-if="movieList"
    class="movie__list">
    <li
      v-for="movie in movieList"
      :key="movie.imdbID"
      class="movie__container"
      @click="searchDetail(movie.imdbID)">
      <div class="movie">
        <img
          class="movie--poster"
          :src="movie.Poster"
          alt="영화 포스터" />
        <div class="movie--text">
          <div class="movie--title">{{ movie.Title }}</div>
          <div class="movie--year">{{ movie.Year }}</div>
        </div>
      </div>
    </li>
  </ul>
  <ModalView
    v-if="isDetail"
    @close-modal="closeModal">
    <MovieDetail />
  </ModalView>
</template>

<script>
import ModalView from "~/components/ModalView";
import MovieDetail from "~/components/MovieDetail";

export default {
  components: {
    ModalView,
    MovieDetail,
  },
  data() {
    return {
      modalClosed: false,
    };
  },
  computed: {
    isDetail() {
      return this.$store.state.isDetail;
    },
    movieList() {
      return this.$store.state.movieList;
    },
  },
  watch: {
    isDetail() {
      if (!this.modalClosed) {
        window.addEventListener("keyup", this.keyUpHandler);
      }
    },
  },
  methods: {
    async searchDetail(imdbID) {
      this.modalClosed = false;
      await this.$store.dispatch("fetchDetail", imdbID);
    },
    keyUpHandler(event) {
      if (!this.modalClosed) {
        if (event.key === "Escape") {
          this.modalClosed = true;
          this.closeModal();
        }
      }
    },
    closeModal() {
      this.$store.commit("changeIsDetail");
    },
  },
};
</script>

<style lang="scss" scoped>
.movie__list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin-top: 30px;
}

.movie__container {
  list-style-type: none;
  cursor: pointer;
  &:hover {
    opacity: 0.85;
  }
}

.movie {
  margin: 20px 20px 65px 20px;
  width: 200px;
  height: 300px;
  background-color: white;
  border-radius: 3px;
  padding: 10px;
  &--poster {
    width: 100%;
    height: 100%;
  }
  &--text {
    margin: 0px -10px 0px -10px;
    padding: 0px 0px 3px 10px;
    background-color: white;
  }
  &--title {
    font-weight: bold;
  }
}
</style>
