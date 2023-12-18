<script setup>
import { useCartStore } from '../store/cart'
import CartItem from './CartItem.vue'

const { cart } = useCartStore()

</script>


<template>
    <div class="flex flex-col gap-2" v-auto-animate>
        <CartItem 
            v-for="item in cart" 
            :key="item.id"
            :image-url="item.imageUrl"
            :title="item.title"
            :price="item.price"

            @delete-item="() => deleteItem(item)"
        />
    </div>
</template>