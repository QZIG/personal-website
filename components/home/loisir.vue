<template lang="pug">
  div(class="w-full mx-auto md:mx-0" style="max-width: 500px;")
    div(class="relative w-full"  style="padding-top: 75%;")

      div(class="absolute inset-0")
        div(class="h-full w-full bg-no-repeat bg-cover bg-center" :lazy-background="image")

      div(:class="`absolute inset-0 flex justify-center items-center bg-black bg-opacity-50`")
        span(class="text-white text-3xl font-bold uppercase text-center") {{title}}
</template>

<script>
export default {
  props: {
    title: String,
    image: String
  }
}
</script>