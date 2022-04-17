<template>
  <div class="header">
    <div class="header__container">
      <div class="header__box">
        <router-link
            v-for="(item, index) in menu"
            :to="item.path"
            :key="index"
            class="header__link"
        >
          {{ item.name }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import {computed } from "vue";

const store = useStore()
const menu = computed(() => store.state.menu)
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 24px;

  &__container {
    display: flex;
    width: 1250px;
  }

  &__box {
    display: grid;
    grid-auto-flow: column;
    grid-template-rows: repeat(auto-fill, 1fr);
    grid-gap: 24px;
  }

  &__link {
    @include text($font, 700, 18px, 24px, $color-blue);
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: $color-red;
    }
  }
}

.router-link-active {
  color: $color-red;
}
</style>