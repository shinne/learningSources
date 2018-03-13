import * as types from './mutationsType'

const mutations = {
  [types.GET_RIGHTS_IMGS] (state, {...result}) {
    console.log(result)
    state.rightsImgs = result.rightsImgs
  }
}

export default mutations
