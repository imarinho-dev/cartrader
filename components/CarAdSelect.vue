<template>
  <div class="mt-2 flex w-[48%] flex-col">
    <label for="" class="mb-1 text-sm text-cyan-500">{{ title }}</label>
    <select
      v-model="state"
      name=""
      id=""
      class="w-full rounded border p-2 focus:outline-cyan-500"
      @change="onChange"
    >
      <option v-for="option in options" :key="option" :value="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script setup>
const state = ref("");

const props = defineProps({
  title: String,
  name: String,
  options: Array,
});

const emits = defineEmits(["changeInput"]);

const onChange = () => {
  emits("changeInput", state.value, props.name);
};
</script>
