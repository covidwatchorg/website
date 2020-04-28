<template>
  <v-btn
    depressed
    block
    :color="color"
    :class="{ hero: hero }"
    :disabled="disabled"
    :nuxt="nuxt"
    :outlined="secondary || disabled"
    :to="to"
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
    disabled: Boolean,
    nuxt: Boolean,
    secondary: Boolean,
    to: String,
    color: {
      type: String,
      default: "primary"
    }
  }
};
</script>
