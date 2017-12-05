<template>
  <div id="app">
  	<tab></tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
  import Tab from 'components/tab/tab'

  export default {
    components: {
    	Tab
    }
  }
</script>

<style socped lang="stylus" rel="stylesheet/stylus">
  @import 'common/stylus/variable.styl'
</style>
