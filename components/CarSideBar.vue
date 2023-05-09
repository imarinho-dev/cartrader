<template>
  <div class="z-30 mr-10 h-[190px] w-64 border shadow">
    <div class="relative flex cursor-pointer justify-between border-b p-5">
      <h3>Location</h3>
      <h3 @click="updateModal('location')" class="capitalize text-blue-400">
        {{ route.params.city }}
      </h3>
      <div
        v-if="modal.location"
        class="absolute left-56 top-1 -m-1 border bg-white p-5 shadow"
      >
        <input
          v-model="city"
          type="text"
          class="rounded border p-1 focus:outline-none"
        />
        <button
          @click="onChangeLocation"
          class="mt-2 w-full rounded bg-blue-400 p-1 text-white"
        >
          Apply
        </button>
      </div>
    </div>
    <div class="relative flex cursor-pointer justify-between border-b p-5">
      <h3>Make</h3>
      <h3 class="capitalize text-blue-400">Toyota</h3>
    </div>
    <div class="relative flex cursor-pointer justify-between border-b p-5">
      <h3>price</h3>
      <h3 class="capitalize text-blue-400">Any</h3>
    </div>
  </div>
</template>
<script setup>
const route = useRoute();

const modal = reactive({
  make: false,
  location: false,
  price: false,
});

const city = ref("");

const updateModal = (key) => {
  modal[key] = !modal[key];
};

const onChangeLocation = () => {
  if (!city.value) return;
  if (!isNaN(parseInt(city.value))) {
    throw createError({
      statusCode: 400,
      message: "Invalid city format",
    });
  }
  updateModal("location");
  navigateTo(`/city/${city.value}/car/${route.params.make}`);
  city.value = "";
};
</script>
