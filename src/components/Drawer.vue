<script setup>
import DrawerHeader from './DrawerHeader.vue'
import CartListItem from './CartListItem.vue'
import InfoBlock from './InfoBlock.vue'
import { useCartStore } from '../store/cart'
import { computed } from 'vue'

const storeCart = useCartStore()

const totalPrice = computed(() => storeCart.totalPrice())

const createOrderHandler = () => {
    console.log("click")
    storeCart.createOrder()
}

</script>

<template>
    <div class="fixed top-0 left-0 h-full w-full bg-black z-10 opacity-70"></div>
    <div class="bg-slate-200 w-96 h-full fixed right-0 top-0 z-20 p-8">
        <DrawerHeader/>

        <div class="flex h-full items-center" v-if="!totalPrice" >
            <InfoBlock 
                title="Корзина пустая" 
                description="Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
                imgUrl="/package-icon.png" 
            />
        </div>

        <CartListItem v-if="totalPrice"/>

        <div 
            v-if="totalPrice" 
            class="flex items-center gap-3 mb-6 my-6"
        >
            <span>Итого:</span>
            <div class="flex-1 border-b border-slate-300 mt-1"></div>
            <b>{{ totalPrice }} руб</b>
        </div>

        <button 
            v-if="totalPrice"
            :disabled="totalPrice ? false : true" 
            @click="createOrderHandler" 
            class="bg-slate-800 hover:bg-slate-950 active:bg-slate-700 disabled:bg-slate-600 transition 
            text-slate-50 text-bold w-full rounded-xl py-2 cursor-pointer"
        >
            Заказать
        </button>
    </div>
</template>