<template>
  <v-btn
    :nuxt="nuxt"
    :to="to"
    :href="href"
    :value="value"
    text
    :ripple="false"
    class="btn-flat-underlined py-4"
    @click="$emit('click', $event)"
  >
    <slot></slot>
  </v-btn>
</template>
            
<style lang="scss" scoped>
.v-btn-toggle > .btn-flat-underlined.v-btn,
.btn-flat-underlined.v-btn {
  color: var(--v-primary-base);
  font-weight: 600;
  text-transform: none;
  font-size: 20px;
  border: none;

  &:before {
    display: none;
  }

  &:not(#mobile-menu-btn):hover:after {
    @include pseudo-background(3px, rgb(67, 196, 217, 0.5));
    width: calc(
      100% - 32px
    ); // by default, the buttons have 16px padding on either side
  }

  &--active {
    color: var(--v-primary-base);
    font-weight: 700;

    &:after {
      @include pseudo-background(3px, var(--v-primary-base));
      width: calc(
        100% - 32px
      ); // by default, the buttons have 16px padding on either side
    }
  }
}
</style>

<script>
export default {
  name: "MenuButton",
  props: {
    href: String,
    to: String,
    nuxt: Boolean,
    value: [String, Number, Boolean]
  }
};
</script>
