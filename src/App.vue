<template>
  <div id="app">
  	<tab></tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <player></player>
  </div>
</template>

<script type="text/ecmascript-6">
  import Tab from 'components/tab/tab'
  import Player from 'components/player/player'
  export default {
    components: {
      Tab,
      Player
    }
  }
</script>

<style socped lang="stylus" rel="stylesheet/stylus">
  @import 'common/stylus/variable.styl'
</style>
