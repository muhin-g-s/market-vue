import { defineStore } from 'pinia';
import { postOrder } from '../api'
import { useGoodsStore } from './goods';

export const useCartStore = defineStore('cart', {
    state: () => ({
        cart: JSON.parse(localStorage.getItem("cart")) || [],
    }),
    actions: {
        addCart (item) {
            if (!item.isAdded) {
                this.cart.push(item)
                item.isAdded = true
                console.log(this.cart)
            } else {
                this.cart.splice(this.cart.indexOf(item), 1)
                item.isAdded = false
            }
            localStorage.setItem("cart", JSON.stringify(this.cart))    
        },

        totalPrice () {
            return this.cart.reduce((acc, item) => acc + item.price, 0)
        },

        async createOrder() {
            try {
                await postOrder({
                    cart: this.cart,
                    totalPrice: this.totalPrice()
                })
                const {goods} = useGoodsStore()

                goods.forEach(element => {
                  element.isAdded = false  
                })

                this.cart = []
                localStorage.setItem("cart", JSON.stringify(this.cart))
            } catch (error) {
                console.log(error)
            }
        }
    }
})