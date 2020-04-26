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
    <Footer :sections="footerSections"></Footer>
  </v-app>
</template>
<style lang="scss" scoped>
.container {
  max-width: 1240px;
}
</style>

<script>
import AppBar from "../components/AppBar.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    AppBar,
    Footer
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
