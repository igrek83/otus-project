<script setup>

import { useStore } from 'vuex'
import {computed, ref } from "vue";
import Title from './Title';

const store = useStore()

const array = computed(() => store.state.list)
const searchArray = ref([]);
const titlePage = ref('Поиск');
const checkbox = ref('author')

const input = ref('');

const search = () => {
  const length = input.value.length;
  if (length < 1) {
    searchArray.value = [];
    return
  }
  searchArray.value = array.value.filter((item) => {
    let el = null
    if (checkbox.value === 'author') {
      el = item.authors[0].name.slice(0, length)
    }
    if (checkbox.value === 'title') {
      el = item.title.slice(0, length)
    }
    if (el.toLowerCase() === input.value.toLowerCase()) {
      return true
    }
  });
}

const changeCheckbox = (event) => {
  checkbox.value = event.target.value
  input.value = ''
}

const addSearchResult = (event) => {
  input.value = event.target.textContent
  searchArray.value = [];
}

</script>

<style lang="scss" scoped>
.search {
  display: flex;
  justify-content: center;
  width: 100%;

  &__container {
    display: flex;
    flex-direction: column;
    width: 1250px;
  }

  &__form {
    position: relative;
    display: flex;
    flex-direction: column;
  }

  &__input {
    width: 300px;
    height: 40px;
    padding: 0 16px;
    @include text($font, 600, 16px, 20px, $color-black);
    background-color: $color-white;
    border-radius: 3px;
    border: 1px solid $color-black;
    margin-bottom: 16px;

    &::placeholder {
      color: rgba(0, 0, 0, 0.2);
    }

    &:focus {
      border-color: $color-blue;
    }

    &:focus::placeholder {
      color: rgba(0, 0, 0, 0);
    }
  }

  &__ul {
    position: absolute;
    display: flex;
    flex-direction: column;
    background-color: $color-white;
    width: 100%;
    gap: 4px;
    top: 50px;
    z-index: 2;
  }

  &__li {
    @include text($font, 500, 14px, 16px, $color-black);
    cursor: pointer;
    transition: color 0.15s ease;

    &:hover {
      color: $color-red;
    }
  }

  &__box {
    display: grid;
    grid-gap: 8px;
  }

  &__block {
    display: flex;
    align-items: center;
  }

  &__checkbox {
    display: none;

    &:checked + .search__label {
      background-color: $color-yellow;
      border-color: $color-yellow;
    }

    &:checked + .search__label::before {
      opacity: 1;
    }
  }

  &__label {
    position: relative;
    width: 22px;
    height: 22px;
    border-radius: 2px;
    cursor: pointer;
    border-radius: 50%;
    background-color: $color-white;
    border: 1px solid $color-gray;
    margin-right: 8px;

    &::before {
      position: absolute;
      opacity: 0;
      content: '';
      width: 5px;
      height: 8px;
      border-right: 2px solid $color-black;
      border-bottom: 2px solid $color-black;
      transform: rotate(45deg);
      top: 4px;
      right: 6px;
    }
  }

  &__span {
    @include text($font, 500, 14px, 16px, $color-gray);
  }
}
</style>

<template>
  <div class="search">
    <div class="search__container">
      <Title :title="titlePage" />
      <form class="search__form">
        <input
            type="text"
            placeholder="поиск"
            maxlength="35"
            class="search__input"
            v-model="input"
            @input="search"
        >
        <ul class="search__ul">
          <span
              v-for="(item, index) in searchArray"
              :key="index"
              class="search__li"
              @click.prevent.stop.self="addSearchResult"
          >
            {{ checkbox === 'author' ? item.authors[0].name : item.title }}
          </span>
        </ul>
        <div class="search__box">
          <div class="search__block">
            <input
                type="radio"
                v-model="checkbox"
                id="one"
                value="author"
                :checked="checkbox === 'author'"
                @change="changeCheckbox"
                class="search__checkbox"
            >
            <label for="one" class="search__label"></label>
            <span class="search__span">По имени автора</span>
          </div>
          <div class="search__block">
            <input
                type="radio"
                v-model="checkbox"
                id="two"
                value="title"
                :checked="checkbox === 'title'"
                @change="changeCheckbox"
                class="search__checkbox"
            >
            <label for="two" class="search__label"></label>
            <span class="search__span">По названию книги</span>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>