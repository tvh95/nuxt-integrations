import { defineNuxtConfig } from 'nuxt'
import MyModule from '../src/module'

export default defineNuxtConfig({
  app: {
  },
  modules: [
    MyModule
  ],
  integrations: {
    // facebookLogin: {
    //   appId: process.env.FB_APP_ID,
    //   version: process.env.FB_APP_VERSION
    // }
    // gtm: {
    //   id: process.env.GTM
    // }
    // googleLogin: {
    //   clientId: process.env.GOOGLE_LOGIN_KEY
    // }
    // appleLogin: {
    //   clientId: process.env.APPLE_LOGIN_ID
    // }
    facebookPixel: {
      id: process.env.FACEBOOK_PIXEL_ID
    }
  }
})
