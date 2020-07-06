<template>
  <v-btn
    depressed
    block
    :color="color"
    :x-large="hero"
    :outlined="secondary"
    :nuxt="nuxt"
    :to="to"
    :href="href"
    @click="$emit('click', $event)"
  >
    <slot></slot>
  </v-btn>
</template>

<style scoped>
/* Not SCSS since the deep (>>>) selector doesn't seem to work in SCSS */
.v-btn {
  text-transform: none;
  font-weight: bold;
}

.v-btn >>> a:hover {
  color: inherit;
}

</style>

<script>
export default {
  name: "Button",
  props: {
    href: String,
    hero: Boolean,
    secondary: Boolean,
    nuxt: Boolean,
    to: String,
    color: {
      type: String,
      default: "primary",
    },
  },
};
</script>
