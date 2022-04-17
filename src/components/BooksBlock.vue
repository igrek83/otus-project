<script setup>
  import ListItem from './ListItem';
  import Title from './Title';
  import { useStore } from 'vuex';
  import {computed, ref } from "vue";
  const store = useStore();
  const array = computed(() => store.state.list);
  const title = ref('books');
  const titlePage = ref('Список книг');
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  justify-content: center;
  width: 100%;

  &__container {
    display: flex;
    flex-direction: column;
    width: 1250px;
  }

  &__title {
    @include text($font, 600, 24px, 30px, $color-black);
    margin-bottom: 16px;
    margin-right: auto;
  }

  &__ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 6px;
  }
}
</style>

<template>
  <div class="content">
    <div class="content__container">
      <Title :title="titlePage" />
      <ul class="content__ul">
        <ListItem
            v-for="(item, index) in array"
            :key="index"
            :item="item"
            :title="title"
        />
      </ul>
    </div>
  </div>
</template>