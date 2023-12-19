

<script setup>
import { useCartStore } from "@/store/cart";
import { useFavoritesStore } from "@/store/favorites";
import { onMounted } from "vue"

import CardList from '../components/CardList.vue';

const storeFavorites = useFavoritesStore()
const storeCart      = useCartStore()

onMounted(storeFavorites.getFavorites)

</script>


<template>
    <div class="flex justify-between items-center mb-10">
        <h2 class="text-3xl font-bold text-slate-800">Закладки</h2>
    </div>
    <CardList :items="storeFavorites.favorites" @add-to-favorite="storeFavorites.deleteFavorite" @add-to-cart="storeCart.addCart"/>
</template>