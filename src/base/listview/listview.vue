<!--
  @description 左右联动思路
    首先需要实时知道其滚动位置
    根据滚动位置计算到当前位置处于哪个group的区间
    得到右侧高亮区域
-->
<template>
  <scroll class="listview" 
          :data="data" 
          ref="listview"
          :listenScroll="listenScroll"
          :probeType="probeType"
          @scroll="scroll"
  >
    <ul>
      <li 
        v-for="(group, index) in data" 
        class="list-group" 
        ref="listGroup" 
        :key="index"
      >
        <h2 class="list-group-title">{{group.title}}</h2>
        <ul>
          <li 
            @click="selectItem(item)" 
            class="list-group-item" 
            v-for="(item, index) in group.items" 
            :key="index"
          >
            <img class="avatar" v-lazy="item.avatar" />
            <span class="name">{{item.name}}</span>
          </li>
        </ul>
      </li>
    </ul>
    <!--
      监听并阻止默认事件
      @touchstart.stop.prevent 点击事件
      @touchmove.stop.prevent  滚动事件
    -->
    <div 
      class="list-shortcut" 
      @touchstart.stop.prevent="onShortcutTouchStart" 
      @touchmove.stop.prevent="onShortcutTouchMove" 
      @touchend.stop
    >
      <ul>
        <li v-for="(item, index) in shortcutList"
            class="item"
            :key="index"
            :data-index="index"
            :class="{'current': currentIndex===index}"
        >
          {{item}}
        </li>
      </ul>
    </div>
    <div class="list-fixed" v-show="fixedTitle" ref="fixed">
      <h1 class="fixed-title">{{fixedTitle}}</h1>
    </div>
    <div v-show="!data.length" class="loading-container">
      <loading></loading>
    </div>
  </scroll>
</template>

<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll'
  import Loading from 'base/loading/loading'
  import {getData} from 'common/js/dom'

  const TITLE_HEIGHT = 30     // title高度(热门或字母)
  const ANCHOR_HEIGHT = 18    // 锚点的高度(样式设置)

  export default {
    /**probeType
     * 监听事件的触发时间，
     * 1为即时触发，
     * 3为延迟到事件完毕后触发 
     */
    created() {
      this.touch = {}
      this.listenScroll = true
      this.listHeight = []
      this.probeType = 3
    },
    data() {
      return {
        scrollY: -1,  // 滚动Y的位置
        currentIndex: 0,  // 当前位置
        diff: -1     // 表示区块的上限与当前区块滚动位置的差值
      }
    },
    props: {
      data: {
        type: Array,
        default: function() {
          return []
        }
      }
    },
    computed: {
      /**@description 
       * 右侧查询title的集合数组 
       */
      shortcutList() {
        return this.data.map((group) => {
          return group.title.substr(0, 1)
        })
      },
      /**@description
       * 当前固定的title
       */
      fixedTitle() {
        // 边界值重复去除
        if (this.scrollY > 0) {
          return ''
        }
        return this.data[this.currentIndex] ? this.data[this.currentIndex].title : null
      }
    },
    methods: {
      /**
       * @description 外部知道你點擊了什麽
       */
      selectItem(item) {
        this.$emit('select', item)
      },
      /** @function
        * @description  右侧栏的开始点击事件
        */
      onShortcutTouchStart(e) {
        let anchorIndex = getData(e.target, 'index')
        let firstTouch = e.touches[0]
        this.touch.y1 = firstTouch.pageY
        this.touch.anchorIndex = anchorIndex
        this._scrollTo(anchorIndex)
      },
      /**@function
       * @description 右侧栏的滚动事件
       * this.touch.y2 - this.touch.y1 Y轴偏移的像素
       */
      onShortcutTouchMove(e) {
        let firstTouch = e.touches[0]  //初始touch位置
        this.touch.y2 = firstTouch.pageY
        let delta = (this.touch.y2 - this.touch.y1) / ANCHOR_HEIGHT | 0  // 偏移几个锚点  (|0)=>或0 向下取整
        let anchorIndex = parseInt(this.touch.anchorIndex) + delta
        this._scrollTo(anchorIndex)
      },
      refresh() {
        this.$refs.listview.refresh()
      },
      scroll(pos) {
        this.scrollY = pos.y
      },
      _scrollTo(index) {
        /**@description
         * 当前右边选择框的边缘位置
         */
        if (!index && index !== 0) {
          return
        }
        /**@description
         * index边界值 是由touchmove产生的，
         * 上限是0,下限是this.listHeight.length - 2
         */
        if (index < 0) {
          index = 0
        } else if (index > this.listHeight.length - 2) {
          index = this.listHeight.length - 2
        }
        this.scrollY = -this.listHeight[index]  // 需要边界情况判断
        // 第二个参数为滚动动画时间
        this.$refs.listview.scrollToElement(this.$refs.listGroup[index], 0)
      },
      /**@function
       * @description 计算DOM的高度
       */
      _calculateHeight() {
        this.listHeight = []
        const list = this.$refs.listGroup
        let height = 0
        this.listHeight.push(height)
        for (let i = 0; i < list.length; i++) {
          let item = list[i]
          height += item.clientHeight
          this.listHeight.push(height)
        }
      }
    },
    watch: {
      data() {
        setTimeout(() => {
          this._calculateHeight()
        }, 20)
      },
      scrollY(newY) {
        const listHeight = this.listHeight
        // 当滚动到顶部, newY>0
        if (newY > 0) {
          this.currentIndex = 0
          return
        }
        /**@description 
         * 在中间部分滚动
         * -newY 反向滚动式是负值，所以需要转换成正数
         */
        for (let i = 0; i < listHeight.length - 1; i++) {
          let height1 = listHeight[i]
          let height2 = listHeight[i + 1]
          if (-newY >= height1 && -newY < height2) {
            this.currentIndex = i
            this.diff = height2 + newY
            return
          }
        }
        // 当滚动到底部，且-newY大于最后一个元素的上限
        this.currentIndex = listHeight.length - 2
      },
      /**@function diff
       * @description 观测diff的实时变化
       * @augments newVal 改变的值
       */
      diff(newVal) {
        let fixedTop = (newVal > 0 && newVal < TITLE_HEIGHT) ? newVal - TITLE_HEIGHT : 0
        if (this.fixedTop === fixedTop) {
          return
        }
        this.fixedTop = fixedTop
        this.$refs.fixed.style.transform = `translate3d(0, ${fixedTop}px, 0)`
      }
    },
    components: {
      Scroll,
      Loading
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .listview
    width: 100%
    height: 100%
    overflow: hidden
    background: $color-background
    .list-group
      padding-bottom: 30px
      .list-group-title
        height: 30px
        line-height: 30px
        padding-left: 20px
        font-size: $font-size-small
        color: $color-text-l
        background: $color-highlight-background
      .list-group-item
        display: flex
        align-items: center
        padding: 20px 0 0 30px
        .avatar
          width: 50px
          height: 50px
          border-radius: 50%
        .name
          margin-left: 20px
          color: $color-text-l
          font-size: $font-size-medium
    .list-shortcut
      position: absolute
      z-index: 30
      right: 0
      top: 50%
      transform: translateY(-50%)
      width: 20px
      padding: 20px 0
      border-radius: 10px
      text-align: center
      background: $color-background-d
      font-family: Helvetica
      .item
        padding: 3px
        line-height: 1
        color: $color-text-l
        font-size: $font-size-small
        &.current
          color: $color-theme
    .list-fixed
      position: absolute
      top: 0
      left: 0
      width: 100%
      .fixed-title
        position relative
        top -1px
        height: 30px
        line-height: 30px
        padding-left: 20px
        font-size: $font-size-small
        color: $color-text-l
        background: $color-highlight-background
    .loading-container
      position: absolute
      width: 100%
      top: 50%
      transform: translateY(-50%)
</style>

