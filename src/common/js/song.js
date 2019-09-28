import { getVKey, getLyric } from 'api/song'
import { ERR_OK } from 'api/config'
import { Base64 } from 'js-base64'

/**
 * @function Song
 *           constructor构造器，传参初始化
 * @description 设计song类，类的扩展强，易于修改及改进
 */
export default class Song {
    constructor({ id, mid, singer, name, album, duration, image, url, playLists }) {
        this.id = id
        this.mid = mid
        this.singer = singer
        this.name = name
        this.album = album
        this.duration = duration
        this.image = image
        this.url = url
        this.playLists = playLists
    }

    getLyric() {
        if (this.lyric) {
            return Promise.resolve(this.lyric)
        }
        return new Promise((resolve, reject) => {
            getLyric(this.mid).then((res) => {
                if (res.retcode === ERR_OK) {
                    this.lyric = Base64.decode(res.lyric)
                        // console.log(this.lyric)
                    resolve(this.lyric)
                } else {
                    reject('no lyric')
                }
            })
        })
    }
}

export function getPlayLists(songmid) {
    return new Promise((resolve, reject) => {
        getVKey(songmid).then(res => {
            let playLists = []
            if (res.code === ERR_OK) {
                if (res.req_0 && res.req_0.data) {
                    let req_0 = res.req_0.data;
                    req_0.sip.map(sipURL => {
                        let purl = req_0.midurlinfo[0].purl;
                        let URI = `${sipURL}${purl}`
                        playLists.push(URI);
                    });
                }
                resolve(playLists)
            } else {
                reject('no lyric')
            }
        })
    })
}

export function createSong(musicData) {
    let url = ''
    musicData.playLists.map(item => /com\/C100/g.test(item) && (url = item))
    return new Song({
        id: musicData.songid,
        mid: musicData.songmid,
        singer: filterSinger(musicData.singer),
        name: musicData.songname,
        album: musicData.albumname,
        duration: musicData.interval,
        playLists: musicData.playLists,
        image: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${musicData.albummid}.jpg?max_age=2592000`,
        // url: `http://ws.stream.qqmusic.qq.com/C100${musicData.songmid}.m4a?fromtag=0`
        // url: `http://ws.stream.qqmusic.qq.com/${musicData.songid}.m4a?fromtag=46`
        // url: `http://dl.stream.qqmusic.qq.com/${musicData.songid}.m4a?fromtag=66`
        // url: `http://isure.stream.qqmusic.qq.com/C100${musicData.songmid}.m4a?fromtag=32`
        // url: `http://thirdparty.gtimg.com/C100${musicData.songmid}.m4a?fromtag=38`
        // url: `http://isure.stream.qqmusic.qq.com/C100${musicData.songmid}.m4a?fromtag=32`
        // url: `http://dl.stream.qqmusic.qq.com/C400${musicData.songmid}.m4a?vkey=${vkey}&fromtag=66`,
        url: url.length ? url : `http://ws.stream.qqmusic.qq.com/C100${musicData.songmid}.m4a?fromtag=0&guid=126548448`,
        // url: `http://dl.stream.qqmusic.qq.com/C400${musicData.songmid}/${musicData.songid}.m4a?guid=263427534&fromtag=66`
    })
}

function filterSinger(singer) {
    let ret = []
    if (!singer) {
        return ''
    }
    singer.forEach((s) => {
        ret.push(s.name)
    })
    return ret.join('/')
}