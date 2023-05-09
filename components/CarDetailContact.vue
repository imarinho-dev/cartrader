<template>
  <div class="mt-10">
    <div class="flex w-[600px] justify-between">
      <input type="text" class="border p-1" placeholder="Name" />
      <input type="email" class="border p-1" placeholder="Email" />
      <input type="tel" class="border p-1" placeholder="Phone" />
    </div>
    <div class="mt-4 flex w-[600px]">
      <textarea
        class="w-full resize-none border p-1"
        rows="5"
        placeholder="Message"
      ></textarea>
    </div>
    <button class="mt-4 rounded bg-blue-400 px-10 py-3 text-white">
      Submit
    </button>
  </div>
</template>
