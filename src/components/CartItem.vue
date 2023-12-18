<script setup>
defineProps({
    imageUrl    : String,
    title       : String,
    price       : Number
})

const emit = defineEmits(['deleteItem'])
</script>

<template>
    <div class="flex items-center border border-slate-300 p-4 rounded-xl gap-4 bg-slate-100 transition hover:-translate-y-px hover:shadow-xs translate-gpu">
        <img class="w-16 h-16 opacity-80 rounded-xl" :src="imageUrl" alt="img"/>

        <div class="flex flex-col">
            <p class="text-slate-800 font-bold">{{ title }}</p>

            <div class="flex justify-between mt-2">
                <p>{{ price }}</p>
                <img @click="emit('deleteItem')" class="opacity-75 hover:opacity-100 cursor-pointer transition" src="/close.svg"/>
            </div>
        </div>
    </div>
</template>