export const useGtm = () => {
  if (!window.google_tag_manager) {
    throw new Error('GTM wasn\'t setup properly. Please check your configurations.')
  }

  return {
    dataLayer: window.dataLayer
  }
}
