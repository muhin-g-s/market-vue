<script setup>
import { onMounted, watch, reactive } from "vue"
import { useGoodsStore } from "../store/goods"
import { useFavoritesStore } from "../store/favorites"
import { useCartStore } from "../store/cart"
import CardList from '../components/CardList.vue'

const storeGoods     = useGoodsStore()
const storeFavorites = useFavoritesStore()
const storeCart      = useCartStore()

const filter = reactive(storeGoods.params)

const onChangeSelect = (event) => filter.sortBy = event.target.value
const onChangeInput = (event) => filter.searchQuery = event.target.value

watch(filter, storeGoods.getGoods)

onMounted(storeGoods.getGoods)

</script>


<template>
    <div class="flex justify-between items-center mb-10">
        <h2 class="text-3xl font-bold text-slate-800">Все кроссовки</h2>

        <div class="flex gap-4">
            <select class="py-1.5 px-3 border border-slate-300 rounded-xl outline-none" @change="onChangeSelect">
                <option value="name">По названию</option>
                <option value="-price">По цене (убывание)</option>
                <option value="price">По цене (возрастание)</option>
            </select>

            <div class="relative">
                <img class="absolute left-4 top-2.5" src="/search.svg" alt="search">
                <input @input="onChangeInput"
                    class="border border-slate-300 rounded-xl py-1 pl-10 pr-4 outline-none focus:border-slate-400"
                    placeholder="Найдется все">
            </div>
        </div>

    </div>

    <CardList :items="storeGoods.goods" @add-to-favorite="storeFavorites.addFavorites" @add-to-cart="storeCart.addCart" />
</template>