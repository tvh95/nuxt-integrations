import {
  addAutoImport,
  addComponent,
  createResolver
} from '@nuxt/kit'

const libResolver = createResolver(import.meta.url)
const runtimeResolver = createResolver(libResolver.resolve('../runtime'))

function facebookLogin (appId: string, version: string): { appId: string, version: string, scriptId: string } {
  if (!appId || !version) {
    throw new Error('Missing facebook appId or version, please check your configurations.')
  }
  addAutoImport([{
    from: runtimeResolver.resolve('login/facebook'),
    name: 'useFacebookLogin'
  }])
  return { appId, version, scriptId: 'facebook-jssdk' }
}

function googleLogin (clientId: string): { clientId: string, scriptId: string } {
  if (!clientId) {
    throw new Error('Missing google clientId or version, please check your configurations.')
  }
  addAutoImport([{
    from: runtimeResolver.resolve('login/google'),
    name: 'useGoogleLogin'
  }])
  addComponent({
    filePath: runtimeResolver.resolve('login/google-login-button.vue'),
    name: 'GoogleLoginButton'
  })
  return { clientId, scriptId: 'google-jssdk' }
}

function appleLogin (clientId: string): { clientId: string, scriptId: string } {
  if (!clientId) {
    throw new Error('Missing apple clientId, please check your configurations.')
  }
  // addAutoImport([{
  //   from: runtimeResolver.resolve('login/apple'),
  //   name: 'useAppleLogin'
  // }])
  addComponent({
    filePath: runtimeResolver.resolve('login/apple-login-button.vue'),
    name: 'AppleLogin'
  })
  return { clientId, scriptId: 'apple-jssdk' }
}

export {
  facebookLogin,
  googleLogin,
  appleLogin
}
