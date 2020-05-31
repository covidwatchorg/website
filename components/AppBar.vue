<template>
  <v-app-bar app clipped-left class="white" height="110px" elevate-on-scroll>
    <v-container>
      <v-row align="center" justify="space-between">
        <v-col cols="8" sm="auto">
          <nuxt-link to="/">
            <v-img
              :src="logoSvg"
              alt="Covid Watch"
              id="logo-desktop"
              max-width="265px"
              contain
            ></v-img>
          </nuxt-link>
        </v-col>
        <v-spacer></v-spacer>

        <!--Desktop menu-->
        <v-col class="hidden-sm-and-down" sm="auto">
          <v-toolbar-items>
            <MenuButton
              v-for="link in navLinks"
              :key="link.title"
              :title="link.title"
              :to="link.href"
              nuxt
              >{{ link.title }}</MenuButton
            >
          </v-toolbar-items>
        </v-col>
        <!--Mobile menu-->
        <v-col cols="3" :sm="1" class="hidden-md-and-up">
          <v-toolbar-items>
            <v-menu offset-y>
              <template v-slot:activator="{ on }">
                <v-btn text v-on="on" id="mobile-menu-btn">
                  <v-icon>mdi-menu</v-icon>
                </v-btn>
              </template>
              <v-list class="d-md-none">
                <v-list-item v-for="link in navLinks" :key="link.title">
                  <nuxt-link class="link" :to="link.href">{{
                    link.title
                  }}</nuxt-link>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-toolbar-items>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<style lang="scss" scoped>
header.v-app-bar {
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
}
</style>

<script>
import MenuButton from "./MenuButton.vue";

export default {
  name: "AppBar",
  components: {
    MenuButton,
  },
  props: {
    navLinks: Array,
    title: String,
  },
  data: () => ({
    logoSvg: require("../assets/logo/logo_text_blue.svg"),
  }),
};
</script>
