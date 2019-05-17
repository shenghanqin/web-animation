const userAgent = window.navigator.userAgent
const userAgentLowerCase = userAgent.toLocaleLowerCase()
// let app = navigator.appVersion
export const isAndroid = () => {
  return userAgent.indexOf('Android') > -1 || userAgent.indexOf('Linux') > -1
}

export const isIOS = () => {
  return !!userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
}
 


export const isWeixin = () => {
  let result = userAgentLowerCase.match(/micromessenger/i)
  let resultStr = Array.isArray(result) && result[0] ? result[0] : result
  return resultStr === 'micromessenger' 
}

// IE11的userAgent里是没有MSIE标志的，，所以只可以判断IE10及10以下浏览器
export const checkIEVersion = () => { // 判断ie版本
  const version = userAgent.indexOf('MSIE')

  if (version < 0) return -1

  return parseFloat(userAgent.substring(version + 5, userAgent.indexOf(';', version)))
}


export const isIE = () => {
  return window.ActiveXObject || 'ActiveXObject' in window
}
