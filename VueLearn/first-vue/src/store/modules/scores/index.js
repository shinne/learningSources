import mutations from './mutations'
import actions from './actions'
import getters from './getters'

const state = {
  scoreList: [],
  saveSuccess: false,
  showMsg: false,
  saveMsg: '保存失败'
}

export default {
  state,
  mutations,
  actions,
  getters
}
