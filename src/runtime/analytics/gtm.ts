export const useGtm = () => {
  if (!window.google_tag_manager) {
    throw new Error('GTM wasn\'t setup properly. Please check your configurations.')
  }

  function pushEcommerce (event, ecommerce) {
    window.dataLayer.push({ ecommerce: null })
    window.dataLayer.push({ event, ecommerce })
  }

  function pushUser (userId: string, loginType: string = 'email') {
    const data = userId ? { isLoggedIn: true, user_id: userId, loginType } : { isLoggedIn: false }
    window.dataLayer.push(data)
  }

  return {
    pushDataLayer: window.dataLayer.push,
    pushEcommerce,
    pushUser
  }
}
