import * as types from './mutationsType'

const mutations = {
  [types.GET_SCORES_LIST] (state, {...result}) {
    state.scoreList = result.scoreList
    state.showMsg = false
  },
  [types.SAVE_SCORES_LIST] (state, {...result}) {
    state.showMsg = result.showMsg
    state.saveSuccess = result.saveSuccess
    state.saveMsg = result.saveMsg
    console.log(state)
  },
  [types.CLOSE_TOAST] (state, {...result}) {
    state.showMsg = false
  }
}

export default mutations
