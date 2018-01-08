import jsonp from 'common/js/jsonp'
import { commonParams, options } from './config'

/**
 * 获取歌手列表
 * data: Query String Parameters
 */
export function getSingerList() {
    const url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg'
    const data = Object.assign({}, commonParams, {
        channel: 'singer',
        page: 'list',
        key: 'all_all_all',
        pagesize: 100,
        pagenum: 1,
        hostUin: 0,
        needNewCode: 0,
        platform: 'yqq',
        g_tk: 619563301
    })
    return jsonp(url, data, options)
}
/**
 * @description 获取歌手详情
 * @param {*} singerId 
 */
export function getSingerDetail(singerId) {
    const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg'

    const data = Object.assign({}, commonParams, {
        hostUin: 0,
        needNewCode: 0,
        order: 'listen',
        platform: 'h5page',
        // platform: 'yqq',
        begin: 0,
        num: 100,
        // num: 30,
        songstatus: 1,
        singermid: singerId,
        g_tk: 619563301
    })
    return jsonp(url, data, options)
}