/*
 * @Descripttion: 
 * @version: 
 * @Author: dxiaoxing
 * @Date: 2020-08-12 14:24:29
 * @LastEditors: dxiaoxing
 * @LastEditTime: 2020-08-12 15:10:44
 */
let url = require('url')
// console.log(url);

let httpUrl = "https://sale.vmall.com/hwmate.html?cid=10602"
let urlObj = url.parse(httpUrl)
console.log(urlObj);
/*
Url {
  protocol: 'https:', // 协议
  slashes: true,
  auth: null,
  host: 'sale.vmall.com',
  port: null,
  hostname: 'sale.vmall.com',  // 主机名
  hash: null, // 哈希值
  search: '?cid=10602',
  query: 'cid=10602',
  pathname: '/hwmate.html',
  path: '/hwmate.html?cid=10602',
  href: 'https://sale.vmall.com/hwmate.html?cid=10602'
}
*/



let targetUrl = "http://www.taobao.com/"
httpUrl = "./sxt/qianduan/laochen.html"

let newUrl = url.resolve(targetUrl,httpUrl)
console.log(newUrl);






