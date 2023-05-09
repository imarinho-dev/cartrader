<template>
  <div v-if="car">
    <CarDetailHero :car="car" />

    <CarDetailAttributes :features="car.features" />

    <CarDetailDescription :description="car.description" />

    <CarDetailContact />
  </div>
</template>
<script setup>
const route = useRoute();
const { capitalize } = useUtilities();
const { cars } = useCars();

useHead({
  title: capitalize(route.params.name),
});

definePageMeta({
  layout: "custom",
});

const car = computed(() => {
  return cars.find((c) => {
    return c.id === parseInt(route.params.id);
  });
});

if (!car.value) {
  throw createError({
    statusCode: 404,
    statusMessage: `Car with ID: ${route.params.id} doesnt exist.`,
  });
}
</script>
