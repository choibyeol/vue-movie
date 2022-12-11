<template>
  <div>
    <Header />
    <div v-if="isLoading">
      <Loading />
    </div>
    <MovieContainer />
  </div>
</template>

<script>
import Header from "~/components/Header";
import Loading from "~/components/Loading";
import MovieContainer from "~/components/MovieContainer";

export default {
  components: {
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
