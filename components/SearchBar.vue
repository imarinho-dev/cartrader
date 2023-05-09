<template>
  <div
    class="font-serif mx-auto flex w-[1000px] justify-between overflow-hidden rounded-full bg-white text-2xl drop-shadow-2xl"
  >
    <input
      v-model="city"
      type="text"
      class="w-full rounded-full rounded-r-none border-y border-l px-5 py-3 text-2xl focus:outline-none"
      :class="
        cityError
          ? '  border-red-500 placeholder:text-red-500'
          : 'border-transparent '
      "
      :placeholder="cityError ? 'Type a valid city!' : 'Search by city...'"
    />
    <button
      class="bg-sky-500 px-10 py-3 text-white"
      @click.prevent="handleSearch"
    >
      Search
    </button>
  </div>
</template>
<script setup>
const city = ref("");
const cityError = ref(false);

const handleSearch = () => {
  if (!city.value) {
    return (cityError.value = true);
  }
  navigateTo(`/city/${city.value}/car`);
};
</script>
