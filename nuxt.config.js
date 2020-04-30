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
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxtjs/vuetify"],
  /*
   ** Nuxt.js modules
   */
  modules: ["nuxt-webfontloader"],
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ["~/assets/variables.scss", "~/assets/main.scss"],
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
        family: "Montserrat",
        size: "18"
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
  }
};
