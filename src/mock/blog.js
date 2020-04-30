const Mock = require('mockjs')

const classification = [
    {
        label: '分类1',
        value: 'class1'
    }, {
        label: '分类2',
        value: 'class2'
    }, {
        label: '分类3',
        value: 'class3'
    }
]
const tags = ['标签1', '标签2', '标签3']

const blogList = Mock.mock({
    'blogList|10': [{
        _id: '@id',
        title: '@string(10)',
        classification: {
            'label|1': ['分类1', '分类2', '分类3'],
            value: ['class1', 'class2', 'class3']
        },
        'label|2': ['published', 'draft'],
        introduction: '@string(100)',
        cover: '@sentence(2, 3)',
        text: '@sentence(200, 400)',
        createdTime: '@datetime',
        updatedTime: '@datetime'
        // display_time: '@datetime',
        // pageviews: '@integer(300, 5000)'
    }]
})

const getBlogDetail = (id) => {
    return Mock.mock({
        _id: id,
        title: '@string(10)',
        classification: {
            'label|1': ['分类1', '分类2', '分类3'],
            value: ['class1', 'class2', 'class3']
        },
        'label|2': ['published', 'draft'],
        introduction: '@string(100)',
        cover: '@sentence(2, 3)',
        text: '@sentence(200, 400)',
        createdTime: '@datetime',
        updatedTime: '@datetime'
        // display_time: '@datetime',
        // pageviews: '@integer(300, 5000)'
    })
}

let mockApis = [
    {
        url: '/api/blog/addClassification',
        type: 'post',
        response: config => {
            const { label, value, list } = config.body
            if (label && value) {
                classification.push({
                    label,
                    value
                })
            } else if (list && list.length) {
                classification.push(...list)
            }
            return {
                code: 0,
                data: {
                    total: classification.length,
                    items: classification
                }
            }
        }
    },
    {
        url: '/api/blog/getClassification',
        type: 'get',
        response: config => {
            return {
                code: 0,
                data: {
                total: classification.length,
                items: classification
                }
            }
        }
    },
    {
        url: '/api/blog/addTag',
        type: 'post',
        response: config => {
            const { value, list } = config.body
            if (value) {
                tags.push(value)
            } else if (list && list.length) {
                tags.push(...list)
            }
            return {
                code: 0,
                data: {
                total: tags.length,
                items: tags
                }
            }
        }
    },
    {
        url: '/api/blog/getTag',
        type: 'get',
        response: config => {
            return {
                code: 0,
                data: {
                total: tags.length,
                items: tags
                }
            }
        }
    },
    {
        url: '/api/blog/add',
        type: 'post',
        response: config => {
            return {
                code: 0,
                data: config.body.blog
            }
        }   
    },
    {
        url: '/api/blog/list',
        type: 'get',
        response: config => {
            return {
                code: 0,
                data: {
                    blogList: blogList.blogList.map((v, idx) => {
                        return {
                            ...v,
                            title: config.query.type + idx
                        }
                    })
                }
            }
        }
    },
    {
        url: '/api/blog/get/',
        type: 'get',
        response: config => {
            console.log(2222, config)
            return {
                code: 0,
                data: {
                    blog: getBlogDetail(config?.body?.id || 'ssssssssssssss')
                }
            }
        }
    }
]
export default mockApis