<template>
  <div class="mt-2 w-full md:grid-cols-5">
    <label for="" class="mb-1 text-sm text-cyan-500">Image *</label>
    <form class="mt-2">
      <div class="form-group">
        <div class="relative">
          <input
            type="file"
            accept="image/*"
            class="absolute cursor-pointer opacity-0"
            @change="onImageUpload"
          />
          <span class="cursor-pointer">Browser File</span>
        </div>
        <div class="mt-3 w-56 border p-2" v-if="image.preview">
          <img :src="image.preview" class="h-auto max-w-full" />
        </div>
      </div>
    </form>
  </div>
</template>
<script setup>
const emits = defineEmits(["changeInput"]);
const image = useState("carImage", () => {
  return {
    preview: null,
    image: null,
  };
});

const onImageUpload = (event) => {
  const input = event.target;

  if (input.files) {
    const reader = new FileReader();
    reader.onload = (e) => {
      image.value.preview = e.target.result;
    };
    image.value.image = input.files[0];
    reader.readAsDataURL(input.files[0]);
    emits("changeInput", input.files[0], "image");
  }
};
</script>
