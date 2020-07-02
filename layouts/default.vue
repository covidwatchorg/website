<template>
  <v-app id="app">
    <!--Fixed top navbar-->
    <AppBar :navLinks="navLinks" :title="title"></AppBar>

    <!--Main content, pulled in by nuxt. Thanks, nuxt!-->
    <v-content class="pb-0">
      <v-container id="main-content" class="px-0">
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
  padding-left: 10px;
  padding-right: 10px;

  &#main-content {
    padding: 0px;

    div.container:first-of-type {
      padding-top: 0px;
      padding-bottom: 0px;
    }
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
    Footer,
  },
  data() {
    return {
      navLinks: [
        {
          title: "How it Works",
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
      footerSections: [
        {
          title: "Mobile App",
          links: [
            {
              title: "How It Works",
              href: "/how-it-works",
              nuxt: true,
            },
            {
              title: "FAQ",
              href: "/faq",
              nuxt: true,
            },
          ],
        },
        {
          title: "Organization",
          links: [
            {
              title: "About Us",
              href: "/about",
              nuxt: true,
            },
            {
              title: "News",
              href: "/news",
              nuxt: true,
            },
          ],
        },
        {
          title: "Resources",
          links: [
            {
              title: "Blog",
              href: "https://medium.com/covid-watch",
              nuxt: false,
            },
            {
              title: "Covid Watch Forum",
              href: "/forum",
              nuxt: true,
            },
            {
              title: "Privacy Policy",
              href: "/covid_watch_privacy_policy.pdf",
              nuxt: false,
            },
          ],
        },
        {
          title: "Get Involved",
          links: [
            {
              title: "Start a Pilot",
              href: "/pilot",
              nuxt: true,
            },
            {
              title: "Join Us",
              href: "/join",
              nuxt: true,
            },
            {
              title: "Contact Us",
              href: "mailto:contact@covidwatch.org",
              nuxt: false,
            },
          ],
        },
      ],
      title: "Covid Watch",
    };
  },
};
</script>
