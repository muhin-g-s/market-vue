import { defineStore } from 'pinia';

import { getFavorites, postFavorite, deleteFavorite } from '../api'
import { useCartStore } from './cart';

export const useFavoritesStore = defineStore('favorites', {
    state: () => ({
        favorites: [],
    }),
    actions: {
        async getFavorites () {
            try {
                const data = await getFavorites()
                const storeCart = useCartStore()

                this.favorites = data.map(item => ({
                    ...item,
                    isFavorite: true,
                    isAdded: storeCart.cart.some(cartItem => cartItem.id === item.parrentId)
                }))
            } catch (error) {
                console.log(error)
            }
       },
      async addFavorites (item) {
        try {
            if (!item.isFavorite) {
                const obj = {
                    parrentId: item.id,
                    title: item.title,
                    price: item.price,
                    imageUrl: item.imageUrl
                }
    
                item.isFavorite = true
    
                const data = await postFavorite(obj)
    
                item.favoriteId = data.id
            } else {
                item.isFavorite = false
                await deleteFavorite(item.favoriteId)
                delete item.favoriteId
            } 
        } catch (error) {
            console.log(error)
        }
      },

      async deleteFavorite (item) {
        try {
            console.log(item)
            item.isFavorite = false
            await deleteFavorite(item.id)
            delete item.favoriteId
            this.favorites.splice(this.favorites.indexOf(item), 1)
        } catch (error) {
            console.log(error)
        }
      }
    }
})