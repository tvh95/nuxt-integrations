import { awaitTimeout } from '../tools'
import { useRuntimeConfig, useHead } from '#imports'

let env: {
  clientId: string
}

let exist = false

function init ({ scriptId }: any) {
  if (exist) { return }
  exist = true
  return awaitTimeout((resolve) => {
    useHead({
      script: [{
        id: scriptId,
        type: 'text/javascript',
        src: 'https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js',
        async: true,
        crossorigin: 'anonymous',
        defer: true,
        onload: setTimeout(() => resolve(true), 300)
      }]
    })
  })
}

export const useAppleLogin = async () => {
  if (!env) { env = useRuntimeConfig().public.appleLogin as any }
  await init(env)

  function setup (onSuccess, onFailed, scope = [], redirectURI = '/', state = '', nonce = '', usePopup = true) {
    window.AppleID.auth.init({
      clientId: env.clientId,
      scope: scope.join(' '),
      redirectURI,
      state,
      nonce,
      usePopup
    })
    document.addEventListener(
      'AppleIDSignInOnSuccess',
      (event: any) => { onSuccess(event.detail.data) }
    )
    document.addEventListener(
      'AppleIDSignInOnFailure',
      (event: any) => { onFailed(event.detail.error) }
    )
  }

  return { setup }
}
