<template>
  <router-view />
</template>

<script setup lang="ts">
import { useAppStore } from '@/stores'

const store = useAppStore()
</script>

<style lang="scss">
@import '@/assets/styles/variables.scss';

html, body {
  margin: 0;
  padding: 0;
  font-family: $font-family-base;
  font-size: $font-size-base;
  color: $text;
  background: $background;
}

* {
  box-sizing: border-box;
}
</style> 