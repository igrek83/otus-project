<script setup>

import HeaderMenu from "@/components/HeaderMenu";
import { onMounted } from "vue";
import { useStore } from 'vuex'
const store = useStore()
onMounted(() =>store.dispatch('getAddListItems'))

</script>

<template>
  <div class="page">
    <HeaderMenu />
    <router-view></router-view>
  </div>
</template>