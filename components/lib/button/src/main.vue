<template>
  <button class="m-button" :style="{width: width +'px',height:  height +'px'}" >
    {{buttonName}}
    </button>
</template>

<script>
export default {
  name: 'm-button',
  props: {
    width: {
      type: Number,
      default: 130,
    },
    height: {
      type: Number,
      default: 42,
    },
    buttonName: {
      type: String,
      default: '',
    }
  }
}
</script>