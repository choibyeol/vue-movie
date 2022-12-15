<template>
  <ul
    v-if="movieList"
    class="movie__list">
    <li
      v-for="movie in movieList"
      :key="movie.imdbID"
      class="movie__container">
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
</template>

<script>
export default {
  computed: {
    movieList() {
      return this.$store.state.movieList;
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
  background-color: white;
  list-style-type: none;
  cursor: pointer;
}

.movie {
  margin: 20px 20px 65px 20px;
  width: 200px;
  height: 300px;
  &--poster {
    width: 100%;
    height: 100%;
  }
  &--text {
    background-color: white;
  }
  &--title {
    font-weight: bold;
  }
}
</style>
