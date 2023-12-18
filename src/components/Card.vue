<script setup>
defineProps({
    id: Number,
    imageUrl: String,
    title: String,
    price: Number,
    isFavorite: Boolean,
    isAdded: Boolean,

    onClickFavorite: Function,
    onClickAdd: Function
})
</script>

<template>
    <div class="relative border border-slate-300 rounded-xl p-4 cursor-pointer 
                transition hover:-translate-y-2 hover:shadow-xl translate-gpu
                bg-slate-50	 
    ">
        <img  @click="onClickFavorite" :src="isFavorite ? '/like-2.svg' : '/like-1.svg'"
            alt="like-2" class="absolute top-10 left-10" />

        <img class="rounded-xl" :src="imageUrl" alt="img" />
        <p class="text-slate-800 font-bold mt-8">{{ title }}</p>

        <div class="flex justify-between mt-5">
            <div class="flex flex-col text-slate-800">
                <span class="">Цена:</span>
                <span>{{ price }} руб</span>
            </div>

            <img @click="onClickAdd" :src="!isAdded ? '/plus.svg' : '/checked.svg'" alt="plus" />
        </div>
    </div>
</template>