import request from 'utils/request'

export function getClassification(params) {
    params = params || {}
    return request({
        url: '/api/blog/getClassification',
        method: 'get',
        params
    })
}
  
export function addClassification(data) {
    data = data || {}
    return request({
        url: '/api/blog/addClassification',
        method: 'post',
        data
    })
}
  
export function getTag(params) {
    params = params || {}
    return request({
        url: '/api/blog/getTag',
        method: 'get',
        params
    })
}

export function addTag(data) {
    data = data || {}
    return request({
        url: '/api/blog/addTag',
        method: 'post',
        data
    })
}

export function addBlog(data) {
    data = data || {}
    return request({
        url: '/api/blog/add',
        method: 'post',
        data
    })
}

export function deleteBlog(id) {
    return request({
        url: `/api/blog/delete/${id}`,
        method: 'delete'
    })
}

export function getBlogDetail(params) {
    params = params || {}
    return request({
        url: `/api/blog/get/${params.blogId}`,
        method: 'get',
        params
    })
}

export function getBlogList(params) {
    return request({
        url: `/api/blog/list`,
        method: 'get',
        params
    })
}
  
  