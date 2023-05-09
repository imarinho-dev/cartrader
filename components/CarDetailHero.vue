<template>
  <div class="mt-10">
    <img
      :src="car.url"
      alt=""
      class="h-[500px] w-full object-cover object-center"
    />
    <h1 class="mt-10 text-4xl">{{ car.name }}</h1>
    <div class="mt-3 flex justify-between border-b pb-5 text-lg text-slate-500">
      <div class="flex">
        <p class="mr-2">{{ car.seats }} seats</p>
        <p class="mr-2">|</p>
        <p class="mr-2">{{ car.miles }} miles</p>
      </div>
      <div>
        <p class="text-2xl font-bold">${{ car.price }}</p>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  car: Object,
});
</script>
