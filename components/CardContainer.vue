<template>
  <div class="w-full">
    <Card v-for="car in cars" :key="car.id" :car="car" />
  </div>
</template>
<script setup>
const { cars } = useCars();
</script>
