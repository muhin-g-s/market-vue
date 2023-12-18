<script setup>
defineProps({
    title: String,
    imgUrl: String,
    description: String
})
</script>

<template>
    <div class="flex flex-col items-center text-center mx-auto w-72">
        <img height="70" width="70" :src="imgUrl" alt="{{ imgUrl }}" />
        <h2 class="text-2xl mb-4 font-bold text-slate-800">{{ title }}</h2>
        <p class="text-slate-500">{{ description }}</p>
    </div>
</template>