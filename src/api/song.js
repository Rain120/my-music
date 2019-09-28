import { commonParams } from './config'
import axios from 'axios'

export function getVKey (songmid) {
    const url = '/api/getVKey'
    let _guid = Math.round(2147483647 * Math.random()) * (new Date).getUTCMilliseconds() % 1e10
    let guid = _guid ? _guid + '' : '1429839143';
    let data = {
        req: {
        module: "CDN.SrfCdnDispatchServer",
        method: "GetCdnDispatch",
        param: {
            guid,
            calltype: 0,
            userip: ""
        }
        },
        req_0: {
        module: "vkey.GetVkeyServer",
        method: "CgiGetVkey",
        param: {
            guid,
            songmid: [songmid],
            songtype: [0],
            uin: "0",
            loginflag: 1,
            platform: "20"
        }
        },
        comm: {
        uin: 0,
        format: "json",
        ct: 24,
        cv: 0
        }
    }
    let params = Object.assign({
        format: 'json',
        data: JSON.stringify(data),
    });

    return axios.get(url, {
        params
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