import { awaitTimeout } from '../tools'
import { useRuntimeConfig, useHead } from '#imports'

let env: {
  clientId: string
}

let exist = false

function init ({ scriptId }: any, onload = () => {}) {
  if (exist) { return }
  exist = true
  return awaitTimeout((resolve) => {
    useHead({
      script: [{
        id: scriptId,
        type: 'text/javascript',
        src: 'https://accounts.google.com/gsi/client',
        async: true,
        defer: true,
        onload: (() => {
          setTimeout(() => { resolve(true) }, 300)
        })()
      }]
    })
  })
}

export const useGoogleLogin = async () => {
  if (!env) { env = useRuntimeConfig().public.googleLogin as any }
  await init(env)
  if (!window.google) { return {} }

  function initialize (callback: (credential: string) => void) {
    window.google.accounts.id.initialize({
      client_id: env.clientId,
      callback: response => callback(response.credential)
    })
  }

  return {
    prompt: window.google.accounts.id.prompt,
    renderButton: (callback: (credential: string) => void, buttonRef: any, style: any = {}) => {
      initialize(callback)
      window.google.accounts.id.renderButton(buttonRef, style)
    }
  }
}
