<template>
  <div class="">
    <div class="header">一直都在的头部,&nbsp;&nbsp;&nbsp;用户名{{userName}}</div>
    <ul class="header-nav">
      <li><router-link :to="{name:'Home'}" :class="{'active':curPage=='home' }">我是主页</router-link></li>
      <li><router-link :to="{name:'Score'}" :class="{'active':curPage=='score' }">我是分数页面</router-link></li>
      <li><router-link :to="{name:'RightsList'}" :class="{'active':curPage=='rightsList' }">我是权益页面</router-link></li>
    </ul>
  </div>
</template>

<style lang="scss">
  @import "../../../static/css/headerTop.scss";
</style>

<script>
import { mapState } from 'vuex'
export default {
  computed: mapState({
    userName: state => state.userName
  }),
  methods: {
  },
  created () {
  }
}
</script>
