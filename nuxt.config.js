export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  ssr: 'true',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: '合同会社Steg 公式ホームページ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '合同会社Steg 公式ホームページ。Web制作案件の受託や、iOSアプリ開発の受託などを行なっています。' },
      { hid: 'og:site_name', property: 'og:site_name', content: '合同会社Steg 公式ホームページ' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://team-steg.com' },
      { hid: 'og:title', property: 'og:title', content: '合同会社Steg 公式ホームページ' },
      { hid: 'og:description', property: 'og:description', content: '合同会社Steg 公式ホームページ。Web制作案件の受託や、iOSアプリ開発の受託などを行なっています。' },
      { hid: 'og:image', property: 'og:image', content: 'https://team-steg.com/img/ogp.jpg' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@Steg_official' },
    ],
    link: [
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Noto+Sans+JP:400,700&display=swap"
      },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },
  /*
  ** Global CSS
  */
  css: ["@/assets/css/reset.css"],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    '~plugins/vue-scrollto'
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/style-resources',
  ],
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  styleResources: {
    scss: ["~/assets/scss/variable.scss"]
  },
  build: {
  },
  publicRuntimeConfig: {
    API_KEY: process.env.API_KEY,
    BLOG_API_KEY: process.env.BLOG_API_KEY
  }
}
