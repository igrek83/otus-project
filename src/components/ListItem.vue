<template>
  <li class="list-item">
    <span class="list-item__span">
      {{ title === 'books' ?
        item.title :
        title === 'authors' ?
            item.authors[0].name : ''
      }}
    </span>
    <button
        class="list-item__button"
        @click="del(item.id)"
    >
      <span class="list-item__cross"></span>
    </button>
  </li>
</template>
<script setup>
import { defineProps } from "vue";
import { useStore } from 'vuex'
defineProps({
  item: {
    type: Object,
    required: true,
  },
  title: {
    type: String,
    required: true,
  }
})

const store = useStore()
const del = (id) => {
  store.commit('deleteBooks', id);
}

</script>

<style lang="scss" scoped>
.list-item {
  display: flex;
  align-items: center;
  margin-right: auto;

  &:hover > &__button {
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