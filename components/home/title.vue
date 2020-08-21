<template>
  <div class="mt-12">
    <h3 class="font-bold text-2xl">{{text}}</h3>
    <div class="h-1 w-16 bg-primary rounded-sm"></div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "",
    }
  }
}
</script>