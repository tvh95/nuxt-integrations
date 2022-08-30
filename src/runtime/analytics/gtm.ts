export const useGtm = () => {
  setTimeout(() => {
    if (!window.google_tag_manager) {
      console.error('GTM wasn\'t setup properly. Please check your configurations.')
    }
  }, 1000)

  function pushEcommerce (event, ecommerce) {
    window.dataLayer.push({ ecommerce: null })
    window.dataLayer.push({ event, ecommerce })
  }

  function pushUser (userId?: string, loginType: string = 'email') {
    const data = userId ? { isLoggedIn: true, user_id: userId, loginType } : { isLoggedIn: false }
    window.dataLayer.push(data)
  }

  return {
    dataLayer: window.dataLayer,
    pushEcommerce,
    pushUser
  }
}
