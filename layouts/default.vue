<template>
  <v-app>
    <!--Fixed top navbar-->
    <AppBar :navLinks="navLinks" :title="title"></AppBar>

    <!--Main content, pulled in by nuxt. Thanks, nuxt!-->
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <!--Fixed footer-->
    <v-footer app color="primary" style="white--text">
      <v-container>
        <v-row>
          <v-col v-for="section in footerSections" :key="section.title">
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
          <v-col md="2">
            <span>&copy; {{ new Date().getFullYear() }}</span>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
import AppBar from "../components/AppBar.vue";
export default {
  components: {
    AppBar
  },
  data() {
    return {
      navLinks: [
        {
          title: "How It Works",
          href: "/how-it-works"
        },
        {
          title: "FAQ",
          href: "/faq"
        },
        {
          title: "About",
          href: "/about"
        },
        {
          title: "News",
          href: "/news"
        }
      ],
      footerSections: [
        {
          title: "Mobile App",
          links: [
            {
              title: "Download",
              href: "/download"
            },
            {
              title: "How It Works",
              href: "/how-it-works"
            },
            {
              title: "FAQ",
              href: "/faq"
            }
          ]
        },
        {
          title: "Organization",
          links: [
            {
              title: "About Us",
              href: "/about"
            },
            {
              title: "News",
              href: "/news"
            }
          ]
        },
        {
          title: "Resources",
          links: [
            {
              title: "Privacy Policy",
              href: "/privacy-policy"
            },
            {
              title: "Terms of Use",
              href: "/terms-of-use"
            }
          ]
        },
        {
          title: "Get Involved",
          links: [
            {
              title: "Partner with Us",
              href: "/partner"
            },
            {
              title: "Join Us",
              href: "/volunteer"
            },
            {
              title: "Contact Us",
              href: "mailto:contact@covid-watch.org"
            }
          ]
        }
      ],
      title: "Covid Watch"
    };
  }
};
</script>
