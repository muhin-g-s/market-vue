<script setup>
import { provide, ref } from "vue"

import Header from "./components/Header.vue"
import Drawer from "./components/Drawer.vue"

const drawerOpen = ref(false)

const drawerSetOpen = () => drawerOpen.value = true
const drawerSetClose = () => drawerOpen.value = false

provide('cart', {
  drawerSetOpen,
  drawerSetClose,
})

</script>

<template>
  <div class="w-4/5 bg-slate-200	m-auto rounded-xl shadow-xl mt-14">
    <Drawer v-if="drawerOpen"/>
    <Header />

    <div class="p-10">
      <router-view></router-view>
    </div>

  </div>
</template>