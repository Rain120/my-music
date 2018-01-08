import { playMode } from 'common/js/config'
import { loadSearch, loadPlay, loadFavorite } from 'common/js/cache'

const state = {
    singer: {},
    playing: false, //播放
    fullScreen: false, //全屏
    playList: [], //播放列表
    sequenceList: [], //歌曲顺序列表
    mode: playMode.sequence, // 播放模式
    currentIndex: -1,
    disc: {}, // 歌单列表
    topList: {}, // 榜单列表
    searchHistory: loadSearch(),
    playHistory: loadPlay(),
    favoriteList: loadFavorite()
}

export default state