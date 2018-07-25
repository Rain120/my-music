import { commonParams } from './config'
import axios from 'axios'

export function getVKey (mid) {
    const url = '/api/getVKey'
    let _guid = Math.round(2147483647 * Math.random()) * (new Date).getUTCMilliseconds() % 1e10
    const data = Object.assign({}, commonParams, {
        songmid: mid,
        filename: `C400${mid}.m4a`,
        platform: 'yqq',
        format: 'json',
        needNewCode: 0,
        cid: 205361747,
        guid: _guid,
        hostUin: 0,
        uin: 0,
        callback: `MusicJsonCallback${(Math.random() + "").replace("0.", "")}`,
    })

    return axios.get(url, {
        params: data
    }).then((res) => {
        return Promise.resolve(res.data)
    })
}
/**
 * 获取歌词
 * @param {*歌曲id} mid 
 */
export function getLyric(mid) {
    const url = '/api/lyric'
    const data = Object.assign({}, commonParams, {
        songmid: mid,
        pcachetime: +new Date(),
        platform: 'yqq',
        hostUin: 0,
        needNewCode: 0,
        g_tk: 1536882860,
        format: 'jsonp'
    })

    return axios.get(url, {
        params: data
    }).then((res) => {
        return Promise.resolve(res.data)
    })
}