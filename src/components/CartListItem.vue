<script setup>
import { useCartStore } from '@/store/cart'
import CartItem from './CartItem.vue'

const { cart } = useCartStore()

const emit = defineEmits(['deleteItem'])

</script>

<template>
    <div class="flex flex-col gap-2" v-auto-animate>
        <CartItem 
            v-for="item in cart" 
            :key="item.id"
            :image-url="item.imageUrl"
            :title="item.title"
            :price="item.price"

            @deleteItem="() => emit('deleteItem', item)"
        />
    </div>
</template>