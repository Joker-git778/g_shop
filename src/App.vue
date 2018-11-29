<template>
  <div id="app">
    <router-view/>
    <v-footer v-show="$router.meta.showFooter"></v-footer>
  </div>
  <!--$router 当前路由
  	meta 路由携带  在router/index.js里
  -->
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide';
export default {
  name: 'App',
  components : {
  	"v-footer" : FooterGuide
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
#app
	width: 100%;
	height: 100%;
</style>
