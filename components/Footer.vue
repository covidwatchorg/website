<template>
  <v-footer app absolute color="primary" style="white--text">
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
          <v-list>
            <v-list-item v-for="link in section.links" :key="link.title">
              <nuxt-link class="link primary--text" :to="link.href">{{
                link.title
              }}</nuxt-link>
            </v-list-item>
          </v-list>
        </v-col>
        <v-spacer />
        <v-col :md="2">
          <span>&copy; {{ new Date().getFullYear() }}</span>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  props: {
    sections: Array
  }
};
</script>
