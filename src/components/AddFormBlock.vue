<script setup>
import { useStore } from 'vuex'
import { ref } from "vue";
import Title from './Title';

const store = useStore();
const authorInput = ref('');
const titleInput = ref('');
const titlePage = ref('Добавить книгу/автора');

const setSubmitForm = () => {
  if (authorInput.value.length < 1 || titleInput.value.length < 1) {
    return
  }

  store.commit('addBooks', {
    id: (Math.floor(Math.random() * 100) + 1) * (Math.floor(Math.random() * 100) + 1) * (Math.floor(Math.random() * 100) + 1),
    title: titleInput.value,
    authors: [
      {
        name: authorInput.value,
      }
    ]
  });
  authorInput.value = '';
  titleInput.value = '';
}

</script>

<style lang="scss" scoped>
.add-form {
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

  &__button {
    border: none;
    cursor: pointer;
    background-color: $color-red;
    border-radius: 3px;
    @include text($font, 600, 16px, 19px, $color-white);
    letter-spacing: 0.08px;
    width: 300px;
    height: 40px;
    transition: background-color 0.3s ease;
  }
}
</style>

<template>
  <div class="add-form">
    <div class="add-form__container">
      <Title :title="titlePage" />
      <form class="add-form__form">
        <input
            type="text"
            placeholder="введите имя автора"
            v-model="authorInput"
            class="add-form__input"
        >
        <input
            type="text"
            placeholder="введите название книги"
            v-model="titleInput"
            class="add-form__input"
        >
        <button
            type="submit"
            class="add-form__button"
            @click.prevent.stop.self="setSubmitForm"
            @keyup.enter.stop.prevent="setSubmitForm"
        >
          Отправить
        </button>
      </form>
    </div>
  </div>
</template>