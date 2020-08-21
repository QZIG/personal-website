<template>
  <div class="w-full mx-auto md:mx-0" style="max-width: 500px;">
    <div class="relative w-full"  style="padding-top: 75%;">
      <div class="absolute inset-0">
        <img class="h-full w-full" :src="`/images/${image}.jpg`" :alt="`image ${title}`">
      </div>
      <div :class="`absolute inset-0 flex justify-center items-center bg-black bg-opacity-${opacity}`">
        <span class="text-white text-3xl font-bold uppercase text-center">{{title}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    image: String,
    opacity: {
      type: Number,
      default: 50
    }
  }
}
</script>