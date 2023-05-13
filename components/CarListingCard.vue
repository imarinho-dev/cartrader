<template>
  <div class="mb-4 flex justify-between overflow-hidden rounded shadow">
    <div class="flex">
      <nuxt-img :src="listing.url" alt="" class="mr-4 h-44 w-80" />
      <div class="p-3">
        <h1 class="text-2xl">{{ listing.name }}</h1>
        <p class="text-blue-400">${{ listing.price }}</p>
      </div>
    </div>
    <div class="flex space-x-4 p-3">
      <NuxtLink
        class="text-blue-400"
        :to="`/profile/listings/view/${listing.id}`"
        >View</NuxtLink
      >
      <p class="cursor-pointer text-red-400">Delete</p>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  listing: Object,
});
</script>
