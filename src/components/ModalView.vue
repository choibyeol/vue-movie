<template>
  <div class="modal">
    <div
      class="overlay"
      @click="$emit('close-modal')"></div>
    <div class="modal-card">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.modal,
.overlay {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
}
.overlay {
  opacity: 0.5;
  background-color: white;
}
.modal-card {
  position: relative;
  max-width: 60%;
  min-height: 500px;
  margin: auto;
  margin-top: 15vh;
  padding: 20px;
  background-color: white;
  border-radius: 3px;
  z-index: 9;
  opacity: 1;
}
</style>
