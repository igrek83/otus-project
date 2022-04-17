<template>
  <div class="content">
    <div class="content__container">
      <h1 class="content__title">Список книг</h1>
      <ul class="content__ul">
        <li
            v-for="(item, index) in array"
            :key="index"
            class="content__li"
        >
          <span class="content__span">{{ item.title }}</span>
          <button class="content__button" @click="del(item.id)">
            <span class="content__cross"></span>
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>

import { useStore } from 'vuex'
import {computed } from "vue";

const store = useStore()

const array = computed(() => store.state.list)
const del = (id) => {
  store.commit('deleteBooks', id);
}

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

  &__li {
    display: flex;
    align-items: center;
    margin-right: auto;
  }

  &__li:hover > &__button {
    opacity: 1;
  }

  &__span {
    @include text($font, 600, 14px, 20px, $color-black);
    white-space: nowrap;
    max-width: 350px;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-right: 8px;
  }

  &__button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: $color-white;
    cursor: pointer;
    width: 14px;
    height: 14px;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &__cross {
    position: relative;
    width: 8px;
    height: 2px;
    background-color: $color-red;
    transform: rotate(45deg);
    margin-top: 2px;
    pointer-events: none;

    &:before {
      position: absolute;
      content: '';
      width: 2px;
      height: 8px;
      background-color: $color-red;
      pointer-events: none;
      top: -3px;
      left: 3px;
    }
  }
}
</style>