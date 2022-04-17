<template>
  <div class="header">
    <div class="header__container">
      <div class="header__box">
        <router-link to="/" class="header__link">Главная</router-link>
        <router-link to="/authors" class="header__link">Список авторов</router-link>
        <router-link to="/books" class="header__link">Список книг</router-link>
        <router-link to="/search" class="header__link">Поиск</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderMenu"
}
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
    @include text($font, 700, 18px, 24px, $color-black);
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: $color-blue;
    }
  }
}

.router-link-active {
  color: $color-red;
}
</style>