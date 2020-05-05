<template>
  <v-btn
    depressed
    block
    :color="color"
    :x-large="hero"
    :outlined="secondary"
    :nuxt="nuxt"
    :to="to"
    @click="$emit('click', $event)"
  >
    <slot></slot>
  </v-btn>
</template>

<style lang="scss" scoped>
.v-btn {
  text-transform: none;
  font-weight: bold;
}


</style>

<script>
export default {
  name: "Button",
  props: {
    hero: Boolean,
    secondary: Boolean,
    nuxt: Boolean,
    to: String,
    color: {
      type: String,
      default: "primary"
    }
  }
};
</script>
