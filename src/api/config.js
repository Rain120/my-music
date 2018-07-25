/**
 * 配置 相同参数
 * @type {Object}
 */
export const commonParams = {
        g_tk: 776578293,
        inCharset: 'utf-8',
        outCharset: 'utf-8',
        notice: 0,
        format: 'jsonp'
    }
    /**
     * 参数选项配置
     * @type {Object}
     */
export const options = {
        param: 'jsonpCallback',
        prefix: 'tan',
        // prefix: 'jp',
    }
    /**
     * 基于jsonp方库，设置自定义的cbname
     * 解决cbname未定义的问题
     */
export const optionsPrefix = {
        param: 'jsonpCallback',
        prefix: 'playlistinfoCallback'
    }
    /**
     * [ERR_OK 错误]
     * @type {Number}
     */
export const ERR_OK = 0