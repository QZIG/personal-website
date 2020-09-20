<template lang="pug">
  svg(:class="`stroke-current ${color}`" :style="`width: ${size}px; height: ${size}px; `" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64")
    g(transform="translate(-928 -369)")
      g(transform="translate(928 369)" fill="none" :stroke-width="strokeSize")
        circle(cx="32" cy="32" r="32" stroke="none")
        circle(cx="32" cy="32" r="28" fill="none")
      path(d="M476.505,589.209c7.868,5.833,11.921,8.791,11.921,8.791l11.8-8.791" transform="translate(472 -193)" fill="none" :stroke-width="strokeSize")
</template>

<script>
export default {
  props: {
    size: {
      type: Number,
      default: 64
    },
    color: {
      type: String,
      default: "text-black"
    },
    strokeSize: {
      type: Number,
      default: 4
    },
  }
}
</script>