<template>
  <div
    class="relative mb-5 h-[200px] w-full cursor-pointer overflow-hidden border shadow"
  >
    <Icon
      @click="emit('favor', car.id)"
      class="absolute right-5 top-2 z-20 w-7"
      :name="favored ? 'heroicons-solid:heart' : 'heroicons-outline:heart'"
      :class="favored ? 'text-red-500' : ''"
    />
    <div class="flex h-full" @click="navigateTo(`/car/${car.name}-${car.id}`)">
      <NuxtImg
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
  favored: Boolean,
});

const emit = defineEmits(["favor"]);

// const favored = useState(`favored-${props.car.id}`, () => false);
</script>
