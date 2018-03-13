import * as types from './mutationsType'

const mutations = {
  [types.GET_USER_INFO] (state, {...result}) {
    console.log(state)
    console.log(result)
    state.userInfo = result.userInfo
  }
}

export default mutations
