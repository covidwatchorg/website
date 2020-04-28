<template>
  <v-footer app absolute color="primary" style="white--text" dark>
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
              <nuxt-link class="link" :to="link.href">{{
                link.title
              }}</nuxt-link>
            </v-list-item>
          </v-list>
        </v-col>
        <v-spacer />
        <v-col :md="2">
          <Button class="primary--text" nuxt to="/support" color="white"
            >Donate</Button
          >
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

<style lang="scss">
.footer-link-list {
  &.v-list {
    background-color: transparent;
  }

  .v-list-item a {
    font-size: 16px;
    color: white;
    text-decoration: none;
  }
}
</style>

<script>
import Button from "./Button.vue";

export default {
  name: "Footer",
  components: {
    Button
  },
  props: {
    sections: Array
  }
};
</script>
