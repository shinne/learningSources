import api from '../../../api/home'
import * as types from './mutationsType'

const actions = {
  getUserInfo ({commit}, id) {
    api.getUserInfo(
      id,
      ({...result}) => { console.log({...result}); commit(types.GET_USER_INFO, {...result})}
    )
  }
}

export default actions
