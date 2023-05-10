<template>
  <div class="z-30 mr-10 h-[190px] w-64 border shadow">
    <!-- Location starts here -->
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
    <!-- Location ends here -->

    <!-- Make starts here -->
    <div class="relative flex cursor-pointer justify-between border-b p-5">
      <h3>Make</h3>
      <h3 class="capitalize text-blue-400" @click="updateModal('make')">
        {{ route.params.make || "Any" }}
      </h3>
      <div
        class="absolute left-64 top-1 -m-1 flex w-[600px] flex-wrap justify-between border bg-white p-5 shadow"
        v-if="modal.make"
      >
        <h4
          v-for="make in makes"
          :key="make"
          class="w-1/3"
          @click="onChangeMake(make)"
        >
          {{ make }}
        </h4>
      </div>
    </div>
    <!-- Make ends here -->

    <!-- Price starts here -->
    <div class="relative flex cursor-pointer justify-between border-b p-5">
      <h3>price</h3>
      <h3 class="capitalize text-blue-400" @click="updateModal('price')">
        {{ priceRangeText }}
      </h3>
      <div
        class="absolute left-64 top-1 -m-1 border bg-white p-5 shadow"
        v-if="modal.price"
      >
        <!-- Min price -->
        <input
          class="rounded border p-1 focus:outline-none"
          type="number"
          placeholder="min"
          v-model="min"
        />
        <!-- Max price -->
        <input
          class="rounded border p-1 focus:outline-none"
          type="number"
          placeholder="max"
          v-model="max"
        />
        <!-- Apply Button -->
        <button
          class="mt-2 w-full rounded bg-blue-400 p-1 text-white"
          @click="onChangePrice"
        >
          APPLY
        </button>
      </div>
    </div>
    <!-- prices ends here -->
  </div>
</template>
<script setup>
const route = useRoute();
const router = useRouter();

const { makes } = useCars();

const city = ref("");
const priceRange = reactive({
  min: "",
  max: "",
});

const { min, max } = toRefs(priceRange);

console.log(min.value, max.value);

const priceRangeText = computed(() => {
  const minPrice = route.query.minPrice;
  const maxPrice = route.query.maxPrice;

  if (!minPrice && !maxPrice) return "Any";
  else if (!minPrice && maxPrice) return `< $${maxPrice}`;
  else if (minPrice && !maxPrice) return `> $${minPrice}`;
  else return `$${minPrice}-$${maxPrice}`;
});

const modal = reactive({
  make: false,
  location: false,
  price: false,
});

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

const onChangeMake = (make) => {
  updateModal("make");
  navigateTo(`/city/${route.params.city}/car/${make}`);
};

const onChangePrice = () => {
  updateModal("price");
  if (min && max) {
    if (min > max) return;
  }

  router.push({
    query: {
      minPrice: min.value,
      maxPrice: max.value,
    },
  });
};
</script>
