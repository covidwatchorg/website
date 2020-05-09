import colors from "vuetify/es5/util/colors";

const metaHeaders = require("./meta-headers.json");

export default {
  mode: "spa",
  /*
   ** Headers of the page
   */
  head: {
    title: metaHeaders.title,
    meta: [
      metaHeaders,
      ...Object.entries(metaHeaders).map(([key, value]) => ({
        hid: key,
        name: key,
        content: value
      })),
      ...Object.entries(metaHeaders).map(([key, value]) => ({
        hid: `og:${key}`,
        name: `og:${key}`,
        content: value
      }))
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["~/plugins/mixins.js"],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxtjs/vuetify"],
  /*
   ** Nuxt.js modules
   */
  modules: ["nuxt-webfontloader"],
  /*
   ** Redirect a few routes from the old website to new pages
   */
  router: {
    extendRoutes(routes, resolve) {
      routes.push(
        { path: "/article", redirect: { name: "article" } },
        { path: "/collaborate", redirect: { name: "join" } }
      );
    }
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: [
      "~/assets/images.scss",
      "~/assets/mixins.scss",
      "~/assets/typography.scss",
      "~/assets/variables.scss"
    ],
    theme: {
      options: {
        customProperties: true
      },
      themes: {
        light: {
          primary: "#2C58B1",
          bluejay: "#2C58B1",
          accent: "#F05452",
          tangerine: "#F05452",
          secondary: "#43C4D9",
          aqua: "#43C4D9",
          plum: "#4B0A70",
          lavender: "#A680B7",
          elderberry: "#2C007B",
          thistle: "#71CDDF",
          pewter: "#585858",
          silver: "#C4C4C4",
          grey: "#828282",
          info: "#2C58B1", // bluejay
          warning: "#43C4D9", // aqua
          error: "#F05452", // tangerine
          success: "#A680B7" // lavender
        }
      }
    },
    defaultAssets: {
      font: {
        family: "Montserrat"
      }
    },
    treeShake: true // override production-only default so defaultAssets work as expected
  },
  /*
   ** nuxt-webfontloader module configuration
   ** https://github.com/Developmint/nuxt-webfontloader
   */
  webfontloader: {
    google: {
      families: ["Montserrat:400,600,700"] // Loads Monserrat with 400, 600 and 700 weights
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  generate: {
    fallback: true // generate a 404.html fallback page
  }
};
