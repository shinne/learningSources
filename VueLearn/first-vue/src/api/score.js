import axios from 'axios'

export default {
  getScoreList (params, successFn, errorFn) {
    axios({
      method: 'get',
      url: '/getScoreList',
      responseType: 'json',
      params: params
    })
      .then(function (response) {
        successFn(response.data.content)
      })
      .catch(function (error) {
        errorFn(error)
      })
  },
  saveScoreList (params, successFn, errorFn) {
    axios({
      method: 'get',
      url: '/saveScoreList',
      responseType: 'json',
      params: params
    })
      .then(function (response) {
        successFn(response.data.content)
      })
      .catch(function (error) {
        errorFn(error)
      })
  },
}
