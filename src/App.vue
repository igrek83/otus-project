<template>
  <HeaderMenu />
  <router-view  />
</template>
<script>

import HeaderMenu from "@/components/HeaderMenu";
import { onMounted } from "vue";
import { useStore } from 'vuex'

export default {
  components: {
    HeaderMenu,
  },

  setup() {
    const store = useStore()
    onMounted(() =>store.dispatch('getAddListItems'))
  }
}

</script>