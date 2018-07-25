<template>
  <div id="app">    
		<sidebar ref="sidebar"></sidebar>
  	<tab></tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <player></player>
		<!-- <div class="user" @click="showSidebar">
			<img src="./user.png" >
		</div> -->
  </div>
</template>

<script type="text/ecmascript-6">
  import Sidebar from 'components/sidebar/sidebar'
  import Tab from 'components/tab/tab'
  import Player from 'components/player/player'
  
  export default {
    methods: {  
			showSidebar () {
				this.$refs.sidebar.open()
			}
    },
    components: {
      Sidebar,
      Tab,
      Player
    }
  }
</script>

<style socped lang="stylus" rel="stylesheet/stylus">
  @import 'common/stylus/variable.styl'
  .user
    position absolute
    right 20px
    bottom 10%
</style>
