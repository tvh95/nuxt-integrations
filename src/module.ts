import {
  defineNuxtModule
} from '@nuxt/kit'
import {
  facebookLogin,
  googleLogin,
  appleLogin
} from './tools/login'
import {
  gtm,
  facebookPixel
} from './tools/analytics'

const meta = {
  name: 'integrations',
  configKey: 'integrations'
}

function setup (options: Integrations.Configuration, nuxt) {
  const scripts: Array<{
    id: string
    type: string
    children?: string
    src?: string
  }> = []

  if (options.facebookLogin) {
    nuxt.options.runtimeConfig.public.facebookLogin = facebookLogin(
      options.facebookLogin.appId,
      options.facebookLogin.version
    )
  }

  if (options.googleLogin) {
    nuxt.options.runtimeConfig.public.googleLogin = googleLogin(
      options.googleLogin.clientId
    )
  }

  if (options.appleLogin) {
    nuxt.options.runtimeConfig.public.appleLogin = appleLogin(
      options.appleLogin.clientId
    )
  }

  if (options.gtm) {
    const result = gtm(options.gtm.id)
    scripts.push(result)
  }

  if (options.facebookPixel) {
    const result = facebookPixel(options.facebookPixel.id)
    scripts.push(result)
  }

  nuxt.options.head.script.push(...scripts)
  nuxt.options.app.head.script.push(...scripts)
  // if (!env.FB_APP_ID || !env.FB_APP_VERSION) { throw new Error('FB configuration not found.') }

  // if (options.addPlugin) {
  //   const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))
  //   nuxt.options.build.transpile.push(runtimeDir)
  //   addPlugin(resolve(runtimeDir, 'plugin'))
  // }
}

export default defineNuxtModule<Integrations.Configuration>({
  meta,
  setup
})
