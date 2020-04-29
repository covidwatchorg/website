<template>
  <v-app-bar app flat clipped-left class="white">
    <v-container>
      <v-row>
        <nuxt-link to="/">
          <img src="../assets/logo/logo_text_blue.svg" alt="Covid Watch" />
        </nuxt-link>

        <v-spacer />
        <!--Desktop menu-->
        <v-toolbar-items class="d-none d-md-flex">
          <v-btn
            v-for="link in navLinks"
            :key="link.title"
            :title="link.title"
            :to="link.href"
            nuxt
            text
            :ripple="false"
            >{{ link.title }}</v-btn
          >
        </v-toolbar-items>
        <!--Mobile menu-->
        <v-toolbar-items class="d-flex d-md-none">
          <v-menu offset-y>
            <template v-slot:activator="{ on }">
              <v-btn text v-on="on">
                <v-icon>mdi-menu</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item v-for="link in navLinks" :key="link.title">
                <nuxt-link class="link primary--text" :to="link.href">{{
                  link.title
                }}</nuxt-link>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-toolbar-items>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<style lang="scss">
header.v-app-bar {
  padding-top: 20px;

  .v-btn {
    color: var(--v-primary-base);
    font-weight: 600;

    &:before {
      display: none;
    }

    &:hover:after {
      content: "";
      position: absolute;
      border-bottom: 3px solid rgb(67, 196, 217, 0.5);
      margin: auto;
      right: 0;
      bottom: 0;
      left: 0;
      width: calc(100% - 32px);
    }

    &--active:after {
      content: "";
      position: absolute;
      border-bottom: 3px solid var(--v-primary-base);
      margin: auto;
      right: 0;
      bottom: 0;
      left: 0;
      width: calc(100% - 32px);
    }
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
