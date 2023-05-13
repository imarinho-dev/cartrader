<template>
  <div class="mt-2 flex w-[48%] flex-col">
    <label for="" class="mb-1 text-sm text-cyan-500">{{ title }}</label>
    <input
      type="text"
      class="w-full rounded border p-2 focus:outline-cyan-500"
      :placeholder="placeholder"
      v-model="state"
      :name="name"
      @input="onChange"
    />
  </div>
</template>

<script setup>
const state = ref("");

const props = defineProps({
  title: String,
  name: String,
  placeholder: String,
});

const emits = defineEmits(["changeInput"]);

const onChange = () => {
  emits("changeInput", state.value, props.name);
};
</script>
