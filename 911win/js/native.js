const os = () => {
  var ua = navigator.userAgent
  var isWindowsPhone = /(?:Windows Phone)/.test(ua)
  var isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone
  var isAndroid = /(?:Android)/.test(ua)
  var isFireFox = /(?:Firefox)/.test(ua)
  var isTablet = /(?:iPad|PlayBook)/.test(ua) || (isAndroid && !/(?:Mobile)/.test(ua)) || (isFireFox && /(?:Tablet)/.test(ua))
  var isPhone = /(?:iPhone)/.test(ua) && !isTablet
  var isPc = !isPhone && !isAndroid && !isSymbian
  return {
    isTablet: isTablet,
    isPhone: isPhone,
    isAndroid: isAndroid,
    isPc: isPc
  }
}

const nativeJsCall = (method, data = {}) => {
  if (!window.jsCallNative) return
  const control = {
    method,
    data
  }
  window.jsCallNative.postMessage(os().isAndroid ? JSON.stringify(control) : control)
}

// export default nativeJsCall