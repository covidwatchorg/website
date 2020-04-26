import colors from 'vuetify/es5/util/colors'

const metaHeaders = require("./meta-headers.json");

export default {
  mode: 'spa',
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
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
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
          info: "#2C58B1",    // bluejay
          warning: "#2C58B1", // tangerine
          error: "#F05452",   // tangerine
          success: "#A680B7"  // lavender     
        }
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
