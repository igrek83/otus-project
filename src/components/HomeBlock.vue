<script setup>
import { ref } from "vue";
import Title from './Title';
const titlePage = ref('Главная');
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  justify-content: center;
  width: 100%;

  &__container {
    display: flex;
    flex-direction: column;
    width: 1250px;
  }
}
</style>

<template>
  <div class="home">
    <div class="home__container">
      <Title :title="titlePage" />
    </div>
  </div>
</template>