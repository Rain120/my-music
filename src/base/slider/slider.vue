<template>
  <div class="slider" ref="slider">
    <div class="slider-group" ref="sliderGroup">
      <slot></slot>
    </div>
    <div class="dots">
      <span class="dot" v-for="(item, index) in dots" :class="{active: currentPageIndex === index}" :key="index"></span>
    </div>
  </div>
</template>

 <script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import { addClass } from 'common/js/dom'

  export default {
    data() {
      return {
        dots: [],
        currentPageIndex: 0  /**轮播图当前页数**/
      }
    },
    props: {
      /**循环轮播**/
      loop: {
        type: Boolean,
        default: true
      },
      /**自动轮播**/
      autoPlay: {
        type: Boolean,
        default: true
      },
      /**轮播间隔**/
      interval: {  
        type: Number,
        default: 4000
      }
    },
    mounted() {
      setTimeout(() => {
        this._setSliderWidth()
        this._initDots()
        this._initSlider()

        if (this.autoPlay) {
          this._play()
        }
      }, 20)/**浏览器通常刷新时间17ms**/
      /**
       * [description] 监听事件，当前页面大小更改后，页面重置大小
       * @param  {[type]} 'resize' [description]
       * @param  {[type]} (        [description]
       * @return {[type]}          [description]
       */
      window.addEventListener('resize', () => {
        if (!this.slider) {
          return
        }
        this._setSliderWidth(true)
        this.slider.refresh() /**better-scroll接口，刷新slider**/
      })
    },
    methods: {
      /**
       * 设置slider的宽度
       * @param {Boolean} isResize [description]
       */
      _setSliderWidth(isResize) {
        this.children = this.$refs.sliderGroup.children
        
        let width = 0
        let sliderWidth = this.$refs.slider.clientWidth
        for (let i = 0; i < this.children.length; i++) {
          let child = this.children[i]
          addClass(child, 'slider-item')
          child.style.width = sliderWidth + 'px'
          width += sliderWidth
        }
        if (this.loop && !isResize) {
          width += 2 * sliderWidth
        }
        this.$refs.sliderGroup.style.width = width + 'px'
      },
      /**
       * [_initDots description] 初始化Dots，初始化他会创建length+2个div使得正常轮播
       * @return {[type]} [description]
       */
      _initDots() {
        this.dots = new Array(this.children.length)
      },
      /**
       * [_initSlider description] 初始化slider
       * @return {[type]} [description]
       */
      _initSlider() {
        this.slider = new BScroll(this.$refs.slider, {
          scrollX: true,
          scrollY: false,
          momentum: false,
          snap: true,  /**普通的列表滾動**/
          snapLoop: this.loop,  /**循環無縫輪播**/
          snapThreshold: 0.3,   /**用於手指滑動頁面可切換的閾值，大於閾值即可滑動到下一頁**/
          snapSpeed: 400  /**輪播切換的動畫時間**/
        })
        /**
         * [description] 绑定on事件，火器营当前页面
         * @param  {[type]} 'scrollEnd' [轮播结束]
         * @param  {[type]} (           [description]
         * @return {[type]}             [description]
         */
        this.slider.on('scrollEnd', () => {
          let pageIndex = this.slider.getCurrentPage().pageX
          if (this.loop) {
            pageIndex -= 1
          }
          this.currentPageIndex = pageIndex
          if (this.autoPlay) {
            clearTimeout(this.timer)
            this._play()
          }
        })
      },
      /**
       * [_play description] 自动播放，跳轉到下一張圖片
       * @return {[type]} [description]
       */
      _play() {
        let pageIndex = this.currentPageIndex + 1
        if (this.loop) {
          pageIndex += 1
        }
        this.timer = setTimeout(() => {
          this.slider.goToPage(pageIndex, 0, 400)  /**better-scroll的接口，跳轉**/
        }, this.interval)
      }
    },
    /**
     * [destroyed description]  清除當前時間戳
     * @return {[type]} [description]
     */
    destroyed() {
      clearTimeout(this.timer)
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .slider
    min-height: 1px
    .slider-group
      position: relative
      overflow: hidden
      white-space: nowrap
      .slider-item
        float: left
        box-sizing: border-box
        overflow: hidden
        text-align: center
        a
          display: block
          width: 100%
          overflow: hidden
          text-decoration: none
        img
          display: block
          width: 100%
    .dots
      position: absolute
      right: 0
      left: 0
      bottom: 12px
      text-align: center
      font-size: 0
      .dot
        display: inline-block
        margin: 0 4px
        width: 8px
        height: 8px
        border-radius: 50%
        background: $color-text-l
        &.active
          width: 20px
          border-radius: 5px
          background: $color-text-ll
</style>