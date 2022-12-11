<template>
  <div class="movie__container">
    <MovieInput />
    <MovieList />
  </div>
</template>

<script>
import MovieInput from "~/components/MovieInput";
import MovieList from "~/components/MovieList";

export default {
  components: {
    MovieInput,
    MovieList,
  },
};
</script>
