import axios from 'axios'

export default {
  getUserInfo (params,successFn) {
    axios({
      method: 'get',
      url: '/getUserInfo',
      responseType: 'json',
      params: {
        a: 'a',
        b: 'b'
      }
    })
      .then(function (response) {
        successFn(response.data.content)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}
