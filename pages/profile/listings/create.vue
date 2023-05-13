<template>
  <div>
    <div>
      <h1 class="mt-24 text-6xl">Create a New Listing</h1>
    </div>
    <div class="mt-5 flex flex-wrap justify-between rounded p-3 shadow">
      <CarAdSelect
        title="Make *"
        :options="makes"
        name="make"
        @change-input="onChangeInput"
      />
      <CarAdInput
        v-for="input in input"
        :key="input.id"
        :input="input"
        :title="input.title"
        :name="input.name"
        :placeholder="input.placeholder"
        @change-input="onChangeInput"
      />
      <CardTextarea
        title="Description *"
        name="description"
        placeholder=" ..."
        @change-input="onChangeInput"
      />
      <CarAdImage @change-input="onChangeInput" />
    </div>
  </div>
</template>
<script setup>
definePageMeta({
  layout: "custom",
});

const { makes } = useCars();

const info = useState("adInfo", () => {
  return {
    make: "",
    model: "",
    year: "",
    miles: "",
    price: "",
    city: "",
    seats: "",
    features: "",
    description: "",
    image: null,
  };
});

const onChangeInput = (data, name) => {
  info.value[name] = data;
};

const input = [
  {
    id: 1,
    title: "Model *",
    name: "model",
    placeholder: "Civic",
  },
  {
    id: 2,
    title: "Year *",
    name: "year",
    placeholder: "2019",
  },
  {
    id: 3,
    title: "Miles *",
    name: "miles",
    placeholder: "10000",
  },
  {
    id: 4,
    title: "City *",
    name: "city",
    placeholder: "Austin",
  },
  {
    id: 5,
    title: "Number of Seats *",
    name: "seats",
    placeholder: "5",
  },
  {
    id: 6,
    title: "Features *",
    name: "features",
    placeholder: "Leather Interior, No Accidents",
  },
];
</script>
