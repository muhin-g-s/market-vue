import axios from "axios"

const BASE_URL_API = "https://c970a512cb20338f.mokky.dev/"

const $api = axios.create({
    baseURL: BASE_URL_API
})

const getGoods = async (params) => {
    const res = await $api.get("goods", { params })
    return res.data
}

const getFavorites = async () => {
    const res = await $api.get("favorites")
    return res.data
}

const postFavorite = async (item) => {
    const res = await $api.post("favorites", item, { headers: { "Content-Type": "application/json" } })
    return res.data
}

const deleteFavorite = async (id) => {
    const res = await $api.delete(`favorites/${id}`)
    return res.data
}

const postOrder = async (item) => {
    const res = await $api.post("orders", item, { headers: { "Content-Type": "application/json" } })
    return res.data
}

export { getGoods, getFavorites, postFavorite, deleteFavorite, postOrder }