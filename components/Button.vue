<template>
  <v-btn
    depressed
    color="primary"
    :class="{ hero: hero }"
    :disabled="disabled"
    :nuxt="nuxt"
    :outlined="secondary || disabled"
    :to="to"
  >
    <slot></slot>
  </v-btn>
</template>

<style lang="scss" scoped>
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
    to: String
  }
};
</script>
