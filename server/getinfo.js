const axios = require('axios')

var getinfo = function () {
  return async function (ctx) {
    const {
      code
    } = ctx.query
    console.log(code)
    if (code) {
      let url = `https://api.weixin.qq.com/sns/oauth2/access_token?appid=wx6115bb7f7f3d9bb9&secret=be1b4402144cf1a2b203c14cc657d38f&code=${code}&grant_type=authorization_code`
      let res = await axios.get(url)
      ctx.body = res.data
      console.log(res.data)
    } else {
      ctx.body = 'none'
    }
  }
}

module.exports = getinfo
