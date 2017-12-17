import { commonParams } from './config'
import axios from 'axios'

export function getLyric(mid) {
    const url = '/api/lyric'
    const data = Object.assign({}, commonParams, {
        songmid: mid,
        pcachetime: +new Date(),
        platform: 'h5',
        hostUin: 0,
        needNewCode: 0,
        g_tk: 2001751543,
        format: 'jsonp'
    })

    return axios.get(url, {
        params: data
    }).then((res) => {
        return Promise.resolve(res.data)
    })
}