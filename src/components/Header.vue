<script setup>
import { useCartStore } from '@/store/cart';
import { inject } from 'vue';

const { drawerSetOpen } = inject('cart')
const storeCart = useCartStore()

</script>


<template>
  <header class="flex justify-between border-b border-slate-300 px-8 py-4">
    <router-link to="/">
      <div class="flex items-center gap-4 cursor-pointer">
        <img src="/logo.png" alt="logo" class="w-10" />
        <div>
          <h2 class="text-xl font-bold uppercase">Market</h2>
          <p class="text-slate-500">testing vue features</p>
        </div>
      </div>
    </router-link>


    <ul class="flex items-center gap-10">
      <li @click="drawerSetOpen" class="flex items-center gap-3 text-gray-500 hover:text-slate-800 cursor-pointer">
        <img src="/cart.svg" alt="cart" class="fill-slate-950">
        <b>{{ storeCart.totalPrice() }} руб</b>
      </li>

      <router-link to="/favorites">
        <li class="flex items-center gap-3 text-gray-500 hover:text-slate-800 cursor-pointer">
          <img src="/heart.svg" alt="heart">
          <b>Закладки</b>
        </li>
      </router-link>
      
      <li class="flex items-center gap-3 text-gray-500 hover:text-slate-800 cursor-pointer">
        <img src="/profile.svg" alt="profile">
        <b>Профиль</b>
      </li>
    </ul>
  </header>
</template>