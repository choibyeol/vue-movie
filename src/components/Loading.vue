<template>
  <div class="loading">
    <div class="wrapper">
      <div class="spinner"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.loading {
  position: fixed;
  width: 100%;
  top: 120px;
  display: flex;
  justify-content: center;
  z-index: 10;
  .spinner {
    margin: 0 auto;
    width: 50px;
    height: 50px;
    border: 10px solid rgba(163, 151, 198, 0.2);
    border-top: 10px solid #6a7ba2;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }
  .wrapper {
    margin: 0 auto;
    padding: 30px;
    max-width: 1000px;
  }
}
</style>
