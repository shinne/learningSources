<template>
  <div class="score-wrap">
    <strong class="tips">请勾选以下特权，并进行保存</strong>
    <div v-for="score in scoreList" :key="score.id">
      <input type="checkbox" v-model = score.checked><label for="">{{score.name}}</label>
    </div>

    <div class="selected-wrap">
      <strong>这是您当前选中的权益</strong>
      <strong>共需要分</strong>
      <strong>点击保存按钮进行保存</strong>
      <ul>
        <li v-for="score in selectedScoreList">
        {{score.name}}
      </li>
      </ul>
    </div>
    <button v-on:click="saveScore">保存</button>
    <div v-show="showMsg" v-bind:class="[{success:saveSuccess}, 'toast']" v-on:click ="toastToggle" ref = 'toast'>
      {{saveMsg}}
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import * as types from '../../store/modules/scores/mutationsType'
export default {

  computed: {
    ...mapState({
      scoreList: state => state.scores.scoreList,
      showMsg: state => state.scores.showMsg,
      saveSuccess: state => state.scores.saveSuccess,
      saveMsg: state => state.scores.saveMsg
    }),
    ...mapGetters([
      'selectedScoreList'
    ])
  },
  methods: {
    saveScore () {
      if (this.selectedScoreList && this.selectedScoreList.length > 0) {
        this.$store.dispatch('saveScoreList', this.selectedScoreList)
      } else {
        alert('请选择您需要的特权')
      }
    },
    toastToggle () {
      this.$store.commit(types.CLOSE_TOAST)
    }
  },
  created () {
    this.$store.commit('selectNav', 'score')
    this.$store.dispatch('getScoreList', {id: 12})
  }
}
</script>
<style lang="scss" scoped="">
  @import url("../../../static/css/score.scss");
</style>
