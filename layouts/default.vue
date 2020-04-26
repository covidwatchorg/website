<template>
  <v-app>
    <!--Fixed navbar-->
    <v-app-bar
      app
      flat
      clipped-left
    >
      <v-container>
        <v-layout row>
          <v-toolbar-title v-text="title" />
          <v-spacer />
          <!-- Desktop menu -->
          <v-toolbar-items class="d-none d-md-flex">
            <v-btn
              v-for="link in navLinks"
              :key="link.title"
              :title="link.title"
              :to="link.href"
              nuxt
              text
            >{{ link.title }}</v-btn>
          </v-toolbar-items>
          <!-- Mobile menu -->
          <v-toolbar-items class="d-flex d-md-none">
            <v-menu offset-y >
              <template v-slot:activator="{ on }">
                <v-btn text v-on="on">
                  <v-icon>mdi-menu</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                  v-for="link in navLinks"
                  :key="link.title"
                >
                  <nuxt-link
                    class="link primary--text"
                    :to="link.href"
                  >
                      {{ link.title }}
                  </nuxt-link>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-toolbar-items>
        </v-layout>
      </v-container>
    </v-app-bar>

      <v-content>
        <v-container>
          <nuxt />
        </v-container>
      </v-content>

      <v-navigation-drawer
        v-model="rightDrawer"
        :right="right"
        temporary
        fixed
      >
        <v-list>
          <v-list-item @click.native="right = !right">
            <v-list-item-action>
              <v-icon light>
                mdi-repeat
              </v-icon>
            </v-list-item-action>
            <v-list-item-title>Switch drawer (click me)</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-footer
        :fixed="fixed"
        app
      >
        <span>&copy; {{ new Date().getFullYear() }}</span>
      </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      navLinks: [
        {
          title: "How It Works",
          href: "/how-it-works",
        },
        {
          title: "FAQ",
          href: "/faq",
        },
        {
          title: "About",
          href: "/about",
        },
        {
          title: "News",
          href: "/news",
        },
      ],
      title: 'Covid Watch'
    }
  }
}
</script>
