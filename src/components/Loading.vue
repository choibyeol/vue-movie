<template>
  <div class="loading">
    <img
      class="loading__item"
      src="https://cdn.roto.codes/images/nyan-cat.gif"
      alt="Loading" />
  </div>
</template>

<style lang="scss" scoped>
.loading {
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: -1;
  &__item {
    width: 250px;
    height: 250px;
  }
}
</style>
