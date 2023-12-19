import { defineStore } from 'pinia'
import { getGoods } from '../api'
import { useFavoritesStore } from "../store/favorites"
import { useCartStore } from './cart';

export const useGoodsStore = defineStore('goods', {
    state: () => ({
        goods: [],
        params : {
            sortBy : "title",
            searchQuery: ""
        }
    }),
    actions: {
        async getGoods () {
            try {
                const params = {
                    sortBy: this.params.sortBy,
                }
        
                if (this.params.searchQuery) {
                    params.title = `*${this.params.searchQuery}*`
                }
        
                this.goods  = await getGoods(params)
                const storeFavorites = useFavoritesStore()
                const storeCart = useCartStore()

                await storeFavorites.getFavorites()

                const favorites = storeFavorites.favorites

                console.log(favorites)

                this.goods = this.goods.map(item => {
                    const favorite = favorites.find(favorite => favorite.parrentId === item.id)

                    if (!favorite) {
                        return item
                    }

                    return {
                        ...item,
                        isFavorite: true,
                        favoriteId: favorite.id,
                        isAdded: storeCart.cart.some(cartItem => cartItem.id === item.id)
                    }
                })
            } catch (error) {
                console.log(error)
            }
        }
    }
})