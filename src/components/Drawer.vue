<script setup>
import DrawerHeader from './DrawerHeader.vue'
import CartListItem from './CartListItem.vue'
import InfoBlock from './InfoBlock.vue'
import { useCartStore } from '../store/cart'
import { reactive, ref, watch } from 'vue'

const storeCart = useCartStore()

//let totalPrice = ref(storeCart.cart.reduce((acc, item) => acc + item.price, 0))

const createOrderHandler = () => {
    console.log("click")
    storeCart.createOrder()
    // totalPrice.value = 0
}

</script>

<template>
    <div class="fixed top-0 left-0 h-full w-full bg-black z-10 opacity-70"></div>
    <div class="bg-slate-200 w-96 h-full fixed right-0 top-0 z-20 p-8">
        <DrawerHeader/>

        <div class="flex h-full items-center" v-if="!storeCart.totalPrice()" >
            <InfoBlock 
                title="Корзина пустая" 
                description="Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
                imgUrl="/package-icon.png" 
            />
        </div>

        <CartListItem v-if="storeCart.totalPrice()"/>

        <div 
            v-if="storeCart.totalPrice()" 
            class="flex items-center gap-3 mb-6 my-6"
        >
            <span>Итого:</span>
            <div class="flex-1 border-b border-slate-300 mt-1"></div>
            <b>{{ storeCart.totalPrice() }} руб</b>
        </div>

        <button 
            v-if="storeCart.totalPrice()"
            :disabled="totalPrice ? false : true" 
            @click="createOrderHandler" 
            class="bg-slate-800 hover:bg-slate-950 active:bg-slate-700 disabled:bg-slate-600 transition 
            text-slate-50 text-bold w-full rounded-xl py-2 cursor-pointer"
        >
            Заказать
        </button>
    </div>
</template>