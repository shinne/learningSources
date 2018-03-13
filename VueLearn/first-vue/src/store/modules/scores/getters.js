const getters = {
  selectedScoreList: state => {
    return state.scoreList.filter(score => score.checked === true)
  }
}
export default getters
