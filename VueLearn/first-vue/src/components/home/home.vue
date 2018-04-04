<template>
  <div>
    <div>I am home</div>
    <router-link :to="{name:'HomeDetail'}">点击我，然后home页面里面会出现二级页面</router-link>
    <router-view/>
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
  }
}
</script>
