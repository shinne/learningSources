<template>
  <div class="child-route">
    我是/home页面下的子路由
    <div>姓名：{{userInfo.name}}</div>
    <div>年龄：{{userInfo.age}}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  watch: {
  },
  computed: mapState({
    userInfo: state => state.home.userInfo
  }),
  methods: {
  },
  created () {
    this.$store.dispatch('getUserInfo', 'home')
  }
}
</script>

<style lang="css">
  .child-route{
    margin-top: 20px;
    padding: 20px 10px;
    border: 1px solid #ccc;
  }
</style>
