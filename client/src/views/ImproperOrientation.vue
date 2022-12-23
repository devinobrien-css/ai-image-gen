<template>
  <svg id="improper-orientation" viewBox="0 0 846 1202" preserveAspectRatio="none">
    <image href="../assets/rotate.svg" />
  </svg>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
#improper-orientation{
  position: absolute;
  height: 100%;
  width: 100%;
  image{
    height: 102%;
    width: 110%;
    transform: rotate(0.5deg) translate(-35px, -20px);
  }
}
</style>