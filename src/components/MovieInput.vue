<template>
  <div class="movie__search">
    <input
      class="movie__search--input"
      v-model="inputText"
      placeholder="찾고 싶은 영화를 검색하세요."
      @keyup.enter="searchMovie(inputText)" />
    <button
      class="movie__search--button"
      @click="searchMovie(inputText)">
      검색
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    async searchMovie(movie) {
      await this.$store.dispatch("fetchList", movie);
    },
  },
};
</script>

<style lang="scss" scoped>
.movie__search {
  display: flex;
  justify-content: center;
  &--input {
    width: 450px;
    height: 20px;
    margin-right: 10px;
    border: 0;
    border-radius: 3px;
    padding: 3px 10px 3px 10px;
    &:focus {
      outline: none;
    }
  }
  &--button {
    background-color: white;
    border: 0;
    border-radius: 3px;
    cursor: pointer;
    &:hover {
      background-color: lightgrey;
    }
  }
}
</style>
