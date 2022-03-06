import request from '@/utils/request'

export default {
  getCurrentUser () {
    return request({
      url: '/common/getCurrentUser',
      method: 'get'
    })
  },
  updateCurrentUser (updateUser) {
    return request({
      url: '/common/updateCurrentUser',
      method: 'post',
      data: updateUser
    })
  }
}
