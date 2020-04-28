import axios from 'axios'

const service = axios.create({
    // baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
    baseURL: 'localhost:3456',
    withCredentials: true, // send cookies when cross-domain requests
    timeout: 60000 // request timeout
})

// response interceptor
service.interceptors.response.use(
    response => {
        const res = response.data
        console.info('请求成功：', res)
        if (res.code !== 0) {
            return Promise.reject(res)
        } else {
            return Promise.resolve(res)
        }
    },
    error => {
        console.error('请求失败：', error) // for debug
        return Promise.reject(error)
    }
)
  
export default service
  