<template>
  <div class="mb-5">
    <p class="my-3 font-bold">{{label}}</p>
    <div class="w-full h-4 bg-gray-400 rounded-lg">
      <div :class="`h-full rounded-lg flex justify-end items-center ${color}`" :style="`width: ${value}%`">
        <div :class="`rounded-full h-12 w-12 ${buttonColor}`"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: 'green'
    },
    buttonColor: {
      type: String,
      default: 'green'
    },
    value: {
      type: Number,
      default: 0
    }
  }
}
</script>