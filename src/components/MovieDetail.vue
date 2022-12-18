<template>
  <div class="movie__detail">
    <div class="detail__container">
      <img
        :src="movieDetail.Poster"
        alt="영화 포스터"
        class="detail--poster" />
      <div class="detail__text">
        <h1>{{ movieDetail.Title }}</h1>
        <div>장르: {{ movieDetail.Genre }}</div>
        <div>감독: {{ movieDetail.Director }}</div>
        <div>Runtime: {{ movieDetail.Runtime }}</div>
        <div>개봉: {{ movieDetail.Released }}</div>
        <div class="detail__text--plot">{{ movieDetail.Plot }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    movieDetail() {
      return this.$store.state.movieDetail;
    },
  },
};
</script>

<style lang="scss" scoped>
html,
body {
  overflow: hidden;
}
.movie__detail {
  display: flex;
}
.detail__container {
  max-height: 500px;
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
}

.detail--poster {
  min-width: 30%;
}

.detail__text {
  height: 100%;
  margin-left: 20px;
  z-index: 20;
  &--plot {
    margin-top: 15px;
  }
}
</style>
