import { awaitTimeout } from '../tools'
import { useRuntimeConfig, useHead } from '#imports'

let env: {
  appId: string
  version: string
  scriptId: string
}

let exist = false

function init ({ scriptId, appId, version }: any) {
  if (exist) { return }
  exist = true
  window.fbAsyncInit = () => {
    window.FB.init({ appId, version, cookie: true, xfbml: true })
    window.FB.AppEvents.logPageView()
  }
  useHead({
    script: [{
      id: scriptId,
      type: 'text/javascript',
      src: 'https://connect.facebook.net/en_US/sdk.js',
      async: true,
      crossorigin: 'anonymous',
      defer: true
    }]
  })
}

export const useFacebookLogin = () => {
  if (!env) { env = useRuntimeConfig().public.facebookLogin as any }
  init(env)

  function loginStatus () {
    return awaitTimeout<Facebook.AuthResponse>((resolve) => {
      window.FB.getLoginStatus((response: { status: string, authResponse: Facebook.AuthResponse }) => {
        if (response.status !== 'connected' || response.authResponse) {
          throw new Error('Facebook login error: Status -> ' + response.status)
        }
        resolve(response.authResponse)
      })
    })
  }

  function getUser (feilds: Array<Facebook.UserField>): Promise<any> {
    return awaitTimeout((resolve) => {
      window.FB.api('/me?fields=' + feilds.join(','), resolve)
    })
  }

  function getAccessToken (scope: string) {
    return awaitTimeout((resolve) => {
      window.FB.login((response: any) => {
        resolve(response.authResponse)
      }, { scope })
    })
  }

  return {
    getAccessToken,
    loginStatus,
    getUser
  }
}
