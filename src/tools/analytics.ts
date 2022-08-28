import {
  addAutoImport,
  createResolver
} from '@nuxt/kit'

const libResolver = createResolver(import.meta.url)

function gtm (gtmId: string) {
  if (!gtmId) {
    throw new Error('Missing gtm id, please check your configurations.')
  }
  addAutoImport([{
    from: libResolver.resolve('./runtime/analytics/gtm.ts'),
    name: 'useGtm'
  }])
  return {
    id: 'gtm-jssdk',
    type: 'text/javascript',
    children: '(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({"gtm.start":' +
      'new Date().getTime(),event:"gtm.js"});var f=d.getElementsByTagName(s)[0],' +
      'j=d.createElement(s),dl=l!="dataLayer"?"&l="+l:"";j.async=true;j.src=' +
      '"https://www.googletagmanager.com/gtm.js?id="+i+dl;f.parentNode.insertBefore(j,f);' +
      `})(window,document,"script","dataLayer","${gtmId}");`
  }
}

function facebookPixel (id: string) {
  return {
    id: 'facebookpixel-jssdk',
    type: 'text/javascript',
    children: '!function(f,b,e,v,n,t,s)' +
      '{if(f.fbq)return;n=f.fbq=function(){n.callMethod?' +
      'n.callMethod.apply(n,arguments):n.queue.push(arguments)};' +
      'if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version="2.0";' +
      'n.queue=[];t=b.createElement(e);t.async=!0;' +
      't.src=v;s=b.getElementsByTagName(e)[0];' +
      's.parentNode.insertBefore(t,s)}(window, document,"script",' +
      '"https://connect.facebook.net/en_US/fbevents.js");' +
      `fbq("init", "${id}");` +
      'fbq("track", "PageView");'
  }
}

export {
  gtm,
  facebookPixel
}
