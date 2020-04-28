import request from 'utils/request'

export function getClassification(params) {
    params = params || {}
    return request({
        url: '/blog/getClassification',
        method: 'get',
        params
    })
}
  
export function addClassification(data) {
    data = data || {}
    return request({
        url: '/blog/addClassification',
        method: 'post',
        data
    })
}
  
export function getTag(params) {
    params = params || {}
    return request({
        url: '/blog/getTag',
        method: 'get',
        params
    })
}

export function addTag(data) {
    data = data || {}
    return request({
        url: '/blog/addTag',
        method: 'post',
        data
    })
}

export function addBlog(data) {
    data = data || {}
    return request({
        url: '/blog/add',
        method: 'post',
        data
    })
}

export function deleteBlog(id) {
    return request({
        url: `/blog/delete/${id}`,
        method: 'delete'
    })
}

export function getBlogDetail(params) {
    params = params || {}
    return request({
        url: `/blog/get/${params.blogId}`,
        method: 'get',
        params
    })
}

export function getBlogList(params) {
    return request({
        url: `/blog/list`,
        method: 'get',
        params
    })
}
  
  