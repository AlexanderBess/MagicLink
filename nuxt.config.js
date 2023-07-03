import localeEn from './locales/en.json';
import localeRu from './locales/ru.json';
import BaseURL from './utils/enums'

export default {
  ssr: false,
  target: 'static',
  head: {
    title: 'The Link',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'description',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/img/app/favicon.svg' },
    ],
  },
  css: [
    '@/assets/scss/main.scss',
  ],
  plugins: [
    { src: '@plugins/main.js' },
    { src: '@plugins/axios.js' },
    { src: '@plugins/injectComponents.js' },
    { src: '@plugins/vee-validate.js' },
    { src: '@plugins/clipboard.js' },
    { src: '@plugins/vue-qrcode.js' }
  ],
  components: true,
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/dotenv',
    '@nuxtjs/color-mode',
    '@nuxtjs/moment',
  ],
  styleResources: {
    scss: ['./assets/scss/resources.scss'],
  },
  router: {
    middleware: ['router'],
  },
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    '@nuxtjs/i18n',
    'bootstrap-vue/nuxt',
    'cookie-universal-nuxt',
  ],
  build: {
    productionSourceMap: false,
    productionGzip: true,
    productionGzipExtensions: ['js', 'css', 'svg'],
    extend(config) {
      config.node = { fs: 'empty' };
    },
    transpile: [
      'vee-validate/dist/rules'
    ],
    babel: {
      compact: false,
    },
    postcss: null,
  },
  axios: {
    baseURL: process.env.API
  },
  moment: {
    defaultLocale: 'ru',
    locales: ['ru']
  },
  i18n: {
    // locales: ['en', 'ru', 'bn', 'ar', 'fr', 'hi', 'id', 'pt', 'es', 'zh_cn'],
    locales: ['ru'],
    defaultLocale: 'ru',
    strategy: 'no_prefix',
    vueI18n: {
      messages: {
        en: localeEn,
        ru: localeRu
      }
    },
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      alwaysRedirect: true
    }
  }
};
