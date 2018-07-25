<!--
getRecommend的时间是异步过程的，其实会出现几百ms的时间误差的，
当我们还没提取到任何数据时，mounted已经执行了，为了确保能提取到数据时，
可以使用v-if="recommends.length"
-->
<template>
  <div class="recommend" ref="recommend">
    <scroll ref="scroll" class="recommend-content" :data="discList">
			<div>
				<div v-if="recommends.length" class="slider-wrapper">
					<slider>
						<div v-for="(item, index) in recommends" :key="index">
							<a :href="item.linkUrl">
								<img class="needsclick" @load="loadImage" :src="item.picUrl">
							</a> 
						</div>
					</slider>
				</div>
				<div class="recommend-list">
					<h1 class="list-title">热门歌单推荐</h1>
					<ul>
						<li @click="selectItem(item)" :key="index" v-for="(item, index) in discList" class="item">
							<div class="icon">
								<img height="60" width="60" v-lazy="item.imgurl" />
							</div>
							<div class="text">
								<h2 class="name" v-html="item.creator.name"></h2>
								<p class="desc" v-html="item.dissname"></p>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<div class="loading-container" v-show="!discList.length">
				<loading></loading>
			</div>
    </scroll>
	<!-- 二级路由容器 -->
		<router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
	import Scroll from 'base/scroll/scroll'
	import Slider from 'base/slider/slider'
	import Loading from 'base/loading/loading'
	import {getRecommend, getDiscList} from 'api/recommend'
	import {ERR_OK} from 'api/config'
	import {playlistMixin} from 'common/js/mixin'
	import {mapMutations} from 'vuex'

	export default {
		mixins: [playlistMixin],
		data() {
			return {
				checkLoaded: false,
				recommends: [],
				discList: []
			}
		},
		created() {
			this._getRecommend()
			this._getDiscList()
		},
		methods: {
			handlePlaylist(playList) {
				const bottom = playList.length > 0 ? '60px' : ''
				this.$refs.recommend.style.bottom = bottom
				this.$refs.scroll.refresh()
			},
			selectItem(item) {
				this.$router.push({
					path: `/recommend/${item.dissid}`
				})
				this.setDisc(item)
			},
			_getRecommend() {
				getRecommend().then( (res) => {
					if (res.code === ERR_OK) {
						this.recommends = res.data.slider
						//console.log(res.data.slider)						
					}
				})
			},
			_getDiscList() {
				getDiscList().then( (res) => {
					if (res.code === ERR_OK) {
						this.discList = res.data.list
						// console.log(res.data.list)
					}
				})
			},
			loadImage() {
				if (!this.checkLoaded) {
					this.$refs.scroll.refresh()
					this.checkLoaded = true
				}
			},
			...mapMutations({
				setDisc: 'SET_DISC'
			})
		}, 
		components: {
			Slider,
			Scroll,
			Loading
		}
	}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
	@import "~common/stylus/variable"
	
	.recommend
		position fixed
		width 100%
		top 54px
		bottom 0
		.recommend-content
			height 100%
			overflow hidden
			.slider-wrapper
				position relative
				width 100%
				overflow hidden
			.recommend-list
				.list-title
					height 65px
					line-height 65px
					text-align center
					font-size $font-size-medium
					color $color-theme
				.item
					display flex
					box-sizing border-box
					align-items center
					padding 0 20px 20px 20px
				.icon
					flex 0 0 60px
					width 60px
					padding-right 20px
				.text
					display flex
					flex-direction column
					justify-content center
					flex 1
					line-height 20px
					overflow hidden
					font-size $font-size-medium
					.name
						margin-bottom 10px
						color $color-text
					.desc
						color $color-text-d
			.loading-container
				position absolute
				width 100%
				top 50%
				transform translateY(-50%)
</style>
