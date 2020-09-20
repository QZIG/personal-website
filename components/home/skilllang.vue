<template lang="pug">
  div.relative(:style="`width: ${size}px; height: ${size}px;`")
    svg(xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 50 50")
      circle(cy="25" cx="25" r="22" stroke-width="6" stroke="#ffffff" :fill="bgcolor")
      circle(:class="`stroke-current ${color}`" transform="rotate(-90) translate(-50 0)" cy="25" cx="25" r="22" :stroke-dasharray="value * 1.39" stroke-width="6"  :fill="'none'")
    
    div(class="absolute inset-0 flex justify-center items-center")
      span(class="uppercase font-bold text-white text-xl") {{label}}
</template>

<script>
export default {
  props: {
    size: {
      type: Number,
      default: 200
    },
    value: {
      type: Number,
      default: 0
    },
    label: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: 'text-black'
    },
    bgcolor: {
      type: String,
      default: '#B2B2B2'
    }
  }
}
</script>