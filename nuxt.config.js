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
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
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
