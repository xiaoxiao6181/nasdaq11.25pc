(function () {
  var host = location.hostname || ''
  var local = !host || host === 'localhost' || host === '127.0.0.1' || /^\d{1,3}(?:\.\d{1,3}){3}$/.test(host)
  window.__SP_CONFIG__ = {
    apiBaseUrl: local ? '/api/v1' : 'https://api.nq633.shop/api/v1',
    assetOrigin: local ? '' : 'https://api.nq633.shop',
    siteKind: 'pc',
    pcSiteUrl: 'https://nasdaqp-z9uic.ondigitalocean.app',
    mobileSiteUrl: 'https://nasdaqm-yrwrm.ondigitalocean.app',
  }
})()
