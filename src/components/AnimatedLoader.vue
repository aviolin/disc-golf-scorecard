<template>
    <div class="loader">
        <div class="lds-circle"><div></div></div>
        <p>Loading...</p>
    </div>
</template>

<style lang="scss" scoped>
.loader {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80vh;
    height: 80svh;
}
.lds-circle {
  color: var(--col-accent-light);
}
.lds-circle,
.lds-circle div {
  box-sizing: border-box;
}
.lds-circle {
  display: inline-block;
  transform: translateZ(1px);
}
.lds-circle > div {
  display: inline-block;
  width: 64px;
  height: 64px;
  margin: 8px;
  background: currentColor;
  border-radius: 50%;
  animation: lds-circle 2.4s infinite;
}
@keyframes lds-circle {
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(180deg);
  }
  100% {
    transform: rotateY(360deg);
  }
}
</style>