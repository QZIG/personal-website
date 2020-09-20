<template lang="pug">
  div.mt-12
    h3.font-bold.text-2xl {{text}}
    div(class="h-1 w-16 bg-primary rounded-sm")
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