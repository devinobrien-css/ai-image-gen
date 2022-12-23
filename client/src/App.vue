<template id="app">
  <q-layout>
    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
@import "./quasar-variables.sass";
#app{
  background-color: $background-primary;
  color: white;
}
</style>
