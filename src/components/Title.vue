<template>
  <h1 class="title">{{ title }}</h1>
</template>

<script setup>
import { defineProps } from "vue";
defineProps({
  title: {
    type: String,
    required: true,
  }
})
</script>

<style lang="scss" scoped>
  .title {
    @include text($font, 600, 24px, 30px, $color-black);
    margin-right: auto;
    margin-bottom: 16px;
  }
</style>