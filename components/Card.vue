<template>
  <div
    class="mb-5 h-[200px] w-full cursor-pointer overflow-hidden border shadow"
    @click="navigateTo(`/car/${car.name}-${car.id}`)"
  >
    <div class="flex h-full">
      <img
        :src="car.url"
        alt="Car 1"
        class="h-full w-[300px] object-cover object-center"
      />
      <div class="flex flex-col p-4">
        <h1 class="text-2xl text-blue-700">{{ car.name }}</h1>
        <p class="text-gray-700">
          {{ car.description }}
        </p>
        <h1 class="mt-auto text-xl">${{ car.price }}</h1>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  car: Object,
});
</script>
