<template>
  <v-app>
    <!--Fixed top navbar-->
    <AppBar :navLinks="navLinks" :title="title"></AppBar>

    <!--Main content, pulled in by nuxt. Thanks, nuxt!-->
    <v-content>
      <v-container id="main-content">
        <!-- this transition element manages the fade in/out of each page -->
        <transition name="slide-fade" mode="out-in">
          <nuxt />
        </transition>
      </v-container>
    </v-content>

    <!-- Footer-->
    <Footer :sections="footerSections"></Footer>
  </v-app>
</template>

<style lang="scss">
.container {
  max-width: 1240px;

  &#main-content {
    padding-top: 0px;
    padding-bottom: 0px;
  }
}

// this manages the transitions between pages.
// more info/options we can play with: https://www.vuemastery.com/courses/animating-vue/page-transitions
.slide-fade-enter {
  transform: translateX(10px);
  opacity: 0;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.2s ease;
}

.slide-fade-leave-to {
  transform: translateX(-10px);
  opacity: 0;
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
        // {
        //   title: "Resources",
        //   links: [
        //     {
        //       title: "Privacy Policy",
        //       href: "/privacy-policy"
        //     },
        //     {
        //       title: "Terms of Use",
        //       href: "/terms-of-use"
        //     }
        //   ]
        // },
        {
          title: "Get Involved",
          links: [
            {
              title: "Start a Pilot",
              href: "/pilot"
            },
  // commented out until we have a clear sense of what 'partnering' means and copy
            // {
            //   title: "Partner with Us",
            //   href: "/partner"
            // },
            {
              title: "Join Us",
              href: "/join"
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

