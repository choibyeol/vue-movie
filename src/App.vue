<template>
  <div>
    <Background />
    <Header />
    <Loading v-if="isLoading" />
    <MovieContainer />
  </div>
</template>

<script>
import Background from "~/components/Background";
import Header from "~/components/Header";
import Loading from "~/components/Loading";
import MovieContainer from "~/components/MovieContainer";

export default {
  components: {
    Background,
    Header,
    Loading,
    MovieContainer,
  },
  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    },
  },
};
</script>

<style>
.scroll__hidden {
  overflow: hidden;
  height: 100%;
}
</style>
