<template>
  <v-footer
    app
    absolute
    color="primary"
    style="white--text; position: relative"
    dark
  >
    <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="2"
          v-for="section in sections"
          :key="section.title"
        >
          <b>{{ section.title }}</b>
          <v-list class="footer-link-list" dense>
            <v-list-item
              v-for="link in section.links"
              :key="link.title"
              class="pl-0"
            >
              <nuxt-link v-if="link.nuxt" class="link" :to="link.href">
                {{ link.title }}
              </nuxt-link>
              <a v-else :href="link.href">{{ link.title }}</a>
            </v-list-item>
          </v-list>
        </v-col>
        <v-spacer />
        <v-col :md="3">
          <v-row class="justify-center">
            <v-col :md="8" class="pt-0">
              <Button class="primary--text" nuxt to="/support" color="white"
                >Donate</Button
              >
            </v-col>
          </v-row>
          <v-row justify="space-around" class="mb-2">
            <span class="group mt-4 pa-2 social-media">
              <a :href="github.link" class="ma-1">
                <v-icon large dark>mdi-github</v-icon>
              </a>
              <a :href="facebook.link" class="ma-1">
                <v-icon large dark>mdi-facebook</v-icon>
              </a>
              <a :href="twitter.link" class="ma-1">
                <v-icon large dark>mdi-twitter</v-icon>
              </a>
              <a :href="instagram.link" class="ma-1">
                <v-icon large dark>mdi-instagram</v-icon>
              </a>
              <a :href="youtube.link" class="ma-1">
                <v-icon large dark>mdi-youtube</v-icon>
              </a>
            </span>
          </v-row>
        </v-col>
        <v-col cols="12" class="text-center">
          <span class="caption">
            Copyright &copy; {{ new Date().getFullYear() }} Covid Watch. All
            rights reserved.
          </span>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<style lang="scss" scoped>
.footer-link-list {
  &.v-list {
    background-color: transparent;
  }

  .v-list-item a {
    font-size: 16px;
    color: white;
    text-decoration: none;

    &:hover {
      color: var(--v-aqua-base);
    }
  }
}
</style>

<script>
import Button from "./Button.vue";
import {
  TWITTER,
  FACEBOOK,
  INSTAGRAM,
  GITHUB,
  YOUTUBE,
} from "@/assets/data/social_media.js";

export default {
  name: "Footer",
  components: {
    Button,
  },
  data: () => ({
    twitter: TWITTER,
    instagram: INSTAGRAM,
    facebook: FACEBOOK,
    github: GITHUB,
    youtube: YOUTUBE
  }),
  props: {
    sections: Array,
  },
};
</script>
