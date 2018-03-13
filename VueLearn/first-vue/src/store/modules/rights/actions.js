import api from '../../../api/rights'
import * as types from './mutationsType'

const actions = {
  getRightsImgs ({commit}, id) {
    api.getRightsImgs(
      id,
      ({...result}) => { commit(types.GET_RIGHTS_IMGS, {...result})}
    )
  }
}

export default actions
