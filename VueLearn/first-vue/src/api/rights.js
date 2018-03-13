import axios from 'axios'

export default {
  getRightsImgs (params, successFn) {
    axios({
      method: 'get',
      url: '/getRightImgs',
      responseType: 'json'
    })
      .then(function (response) {
        successFn(response.data.content)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}
