import originJSONP from 'jsonp'
/**
 * [jsonp description]
 * @param  {[type]} url    [jsonp跨域URL]
 * @param  {[type]} data   [data query 拼接 URL]
 * @param  {[type]} option [选项]
 * @return {[type]}        [返回]
 */
export default function jsonp(url, data, option) {
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)
  return new Promise((resolve, reject) => {
    originJSONP(url, option, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}
/**
 * 将data拼接成 URL
 * @param  {[String]} data [data query]
 * @return {[String]}      [返回URL]
 */
function param(data) {
  let url = ''
  for (var k in data) {
    let value = data[k] !== undefined ? data[k] : ''
    url += `&${k}=${encodeURIComponent(value)}`
  }
  return url ? url.substring(1) : ''
}
