<template>
  <div class="mt-32 flex">
    <NuxtErrorBoundary>
      <CarSideBar />
      <NuxtPage />
      <template #error="{ error }">
        <div class="mx-auto flex flex-col space-y-4 text-center">
          <h1 class="text-3xl text-red-600">Sorry, something went wrong</h1>
          <code>{{ error }}</code>
          <button
            @click="error.value = null"
            class="rounded bg-blue-400 px-10 py-3 text-white"
          >
            Go Back
          </button>
        </div>
      </template>
    </NuxtErrorBoundary>
  </div>
</template>
<script setup>
const route = useRoute();
const { capitalize } = useUtilities();

useHead({
  title: `${
    route.params.make ? capitalize(route.params.make) : "Cars"
  } in ${capitalize(route.params.city)}`,
});
definePageMeta({
  layout: "custom",
});
</script>
