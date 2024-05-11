<script setup lang="ts">

import { products } from '~/composables/constants/products';
const props = defineProps({
    products : {
        type:
        Object,
        default: {},
    }
});
</script>

<template>
    <section class="bg-white shadow-xl rounded-xl overflow-hidden">
      <div :class="`w-full h-[200px] p-5 bg-gray-300`">
        <img :src="props.products.image" class="w-full h-full object-contain"/>
      </div>
      <div class="px-5 pb-5 pt-9 relative">
        <NuxtLink :to="`/products/${props.products.id}`">
          <h3 class="text-lg font-bold mb-4 text-limit limit-2">{{ props.products.name }}</h3>
        </NuxtLink>
        <div class="flex justify-evenly items-center">
          <span class="text-sm font-normal">{{ props.products.category }}</span>
          <span class="text-sm font-normal">${{ props.products.price }}</span>
        </div>
        <div :class="`cursor-pointer absolute -top-5 right-7 w-[50px] h-[50px] bg-white shadow-xl rounded-full flex justify-center items-center hover:bg-blue-600 hover:text-white transition duration-300`">
          <i class="ri-shopping-cart-2-line"></i>
        </div>
      </div>
    </section>
  </template>