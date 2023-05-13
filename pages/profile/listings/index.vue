<template>
  <div>
    <div class="mt-24 flex items-center justify-between">
      <h1 class="text-6xl">My Listings</h1>
      <!-- <NuxtLink
      to="/profile/listings/create"
      class="h-9 w-9 bg-blue-500 text-white"
      >+</NuxtLink
    > -->
      <Icon
        @click="handleCreate"
        class="cursor-pointer text-blue-400"
        size="36"
        name="ep:circle-plus-filled"
      />
    </div>
    <div class="mt-5 rounded p-3 shadow">
      <CarListingCard
        v-for="listing in listings"
        :key="listing.id"
        :listing="listing"
      />
    </div>
  </div>
</template>
<script setup>
definePageMeta({
  layout: "custom",
});

const { listings } = useCars();
const handleCreate = () => {
  navigateTo("/profile/listings/create");
};
</script>
