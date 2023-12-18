import "./assets/main.css"

import { createApp } from "vue"
import { createRouter, createWebHistory } from "vue-router"
import { createPinia } from 'pinia'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import App from "./App.vue"

import Home from "./pages/Home.vue"
import Favorites from "./pages/Favorites.vue"

const app = createApp(App)

const routes = [
    { path: '/', component: Home },
    { path: '/favorites', component: Favorites },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

const pinia = createPinia()
app.use(autoAnimatePlugin)
app.use(router)
app.use(pinia)

app.mount('#app')