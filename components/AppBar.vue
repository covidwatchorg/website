<template>
  <v-app-bar app clipped-left class="white" height="110px" elevate-on-scroll>
    <v-container>
      <v-row>
        <v-col>
          <nuxt-link to="/">
            <img src="../assets/logo/logo_text_blue.svg" alt="Covid Watch" id="logo-desktop" />
          </nuxt-link>
        </v-col>

        <v-spacer />
        <!--Desktop menu-->
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn
            v-for="link in navLinks"
            :key="link.title"
            :title="link.title"
            :to="link.href"
            nuxt
            text
            :ripple="false"
          >{{ link.title }}</v-btn>
        </v-toolbar-items>
        <!--Mobile menu-->
        <v-toolbar-items class="hidden-md-and-up">
          <v-menu offset-y>
            <template v-slot:activator="{ on }">
              <v-btn text v-on="on" id="mobile-menu-btn">
                <v-icon>mdi-menu</v-icon>
              </v-btn>
            </template>
            <v-list class="d-md-none">
              <v-list-item v-for="link in navLinks" :key="link.title">
                <nuxt-link class="link" :to="link.href">
                  {{
                  link.title
                  }}
                </nuxt-link>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-toolbar-items>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<style lang="scss" scoped>
header.v-app-bar {
  // Desktop menu links
  .v-btn {
    color: var(--v-primary-base);
    font-weight: 600;
    text-transform: none;
    font-size: 20px;

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
      font-weight: 700;

      &:after {
        @include pseudo-background(3px, var(--v-primary-base));
        width: calc(
          100% - 32px
        ); // by default, the buttons have 16px padding on either side
      }
    }
  }
}
// Mobile menu links
.v-list-item {
  &:before {
    @include pseudo-background;
    border-radius: inherit;
    color: inherit;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s cubic-bezier(0.4, 0, 0.6, 1);
    background-color: currentColor;
  }

  .nuxt-link-active {
    font-weight: 600;
  }
}
</style>

<script>
export default {
  name: "AppBar",
  props: {
    navLinks: Array,
    title: String
  }
};
</script>
