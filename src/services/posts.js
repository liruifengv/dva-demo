import request from '../utils/request'

/**
 * @description 获取文章接口
 * @author liruifeng
 * @date 12/04/2021
 * @export
 * @param {*} page
 * @param {number} [page_size=10]
 * @return {*}
 */
export function getPosts (page, page_size = 10) {
  return request({
    url: '/articles',
    params: {
      page,
      page_size
    }
  })
}
