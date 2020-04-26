<template>
  <v-app-bar app flat clipped-left>
    <v-container>
      <v-row>
        <v-toolbar-title v-text="title" />
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

<script>
export default {
  name: "AppBar",
  props: {
    navLinks: Array,
    title: String
  }
};
</script>
