import { defineStore } from 'pinia'
import { getGoods } from '../api'

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
        
                const data = await getGoods(params)
        
                this.goods.value = data.map(items => ({
                    ...items,
                    isFavorite: false,
                    isAdded: false
                }))
            } catch (error) {
                console.log(error)
            }
        },

        // setGoods(modArray) {
        //     this.goods = modArray
        // }
    }
})