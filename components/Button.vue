<template>
  <v-btn
    depressed
    block
    :color="color"
    :class="{ hero: hero }"
    :outlined="secondary"
    @click="$emit('click', $event)"
  >
    <slot></slot>
  </v-btn>
</template>

<style lang="scss" scoped>
a.v-btn {
  text-transform: none;
}
.hero {
  height: 58px;
}
</style>

<script>
export default {
  name: "Button",
  props: {
    hero: Boolean,
    secondary: Boolean,
    color: {
      type: String,
      default: "primary"
    }
  }
};
</script>
