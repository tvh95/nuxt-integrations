export {}

declare global {
  export namespace Apple {
    interface Configuration {
      clientId: string
      scope: string
      redirectURI: string
      state: string
      nonce: string
      usePopup: boolean
    }
  }
  export namespace Facebook {
    type UserField = 'first_name' | 'last_name' | 'email'
    interface Configuration {
      appId: string
      version: string
      cookie: true
      xfbml: true
    }

    interface Result {
      accessToken: string
      email: string
      first_name: string
      id: string
      last_name: string
      userID: string
    }

    interface AuthResponse {
      accessToken: string
      data_access_expiration_time: number
      expiresIn: number
      graphDomain: string
      signedRequest: string
      userID: string
    }

    interface Token {
      authResponse: AuthResponse
      status: string
    }
  }

  export interface Window {
    // facebook login
    FB: {
      init: (value: Facebook.Configuration) => void
      AppEvents: { logPageView: () => void }
      getLoginStatus: (callback: (value: { status: string, authResponse: Facebook.AuthResponse }) => void) => void
      api: (s: string, callback: any) => void
      login: (response: any, { scope: string }) => void
    }
    fbAsyncInit: () => void
    // gtm
    google_tag_manager: any
    dataLayer: any
    // google gsi
    google: {
      accounts: {
        id: {
          initialize: (value: {
            client_id: string
            callback: (response: any) => void
          }) => void
          prompt: () => void
          renderButton: (buttomRef: Ref<HTMLElement>, style?: any) => void
        }
      }
    }
    googleApiReady: any
    // apple login
    AppleID: {
      auth: {
        init: (calue: Apple.Configuration) => void
      }
    }
  }

  export namespace Login {
    interface Facebook {
      appId: string
      version: string
    }
    interface Google {
      clientId: string
    }
    interface Apple {
      clientId: string
    }
  }

  export namespace Integrations {
    interface Configuration {
      // social logins
      facebookLogin?: Login.Facebook
      googleLogin?: Login.Google
      appleLogin?: Login.Apple
      linkedInLogin?: Login.LinkedIn
      microsoftLogin?: Login.Microsoft
      // analytics
      ga?: {}
      gtm?: {
        id: string
      }
      facebookPixel?: {
        id: string
      }
      // others
      receptcha?: {}
    }
  }
}
