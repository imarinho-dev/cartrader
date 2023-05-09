<template>
  <div
    class="flex h-screen translate-y-1/4 flex-col items-center justify-start space-y-4"
  >
    <h1 class="text-6xl">{{ error.statusCode }}</h1>
    <p class="text-xl font-normal">{{ error.message }}</p>

    <button
      class="rounded bg-blue-500 px-4 py-2 text-white"
      @click="handleError"
    >
      Go back
    </button>
  </div>
</template>
<script setup>
const error = useError();

const handleError = () =>
  clearError({
    redirect: "/",
  });
</script>
