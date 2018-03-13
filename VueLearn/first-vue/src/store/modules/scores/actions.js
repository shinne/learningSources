import api from '../../../api/score'
import * as types from './mutationsType'

const actions = {
  getScoreList ({commit}, params) {
    api.getScoreList(
      params,
      ({...result}) => { commit(types.GET_SCORES_LIST, {...result}) },
      ({...result}) => { commit(types.GET_SCORES_LIST_ERROR, {...result}) }
    )
  },
  saveScoreList ({commit}, params) {
    api.saveScoreList(
      params,
      ({...result}) => { commit(types.SAVE_SCORES_LIST, {...result}) },
      ({...result}) => { commit(types.SAVE_SCORES_LIST_ERROR, {...result}) }
    )
  }
}

export default actions
