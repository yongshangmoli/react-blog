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
        id: '@id',
        title: '@string(10)',
        classification: {
        'label|1': ['test1', 'test2', 'test3'],
        value: '@string(3)'
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
        id,
        title: '@string(10)',
        classification: {
        'label|1': ['test1', 'test2', 'test3'],
        value: '@string(3)'
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

export default [
    {
        url: '/blog/addClassification',
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
        url: '/blog/getClassification',
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
        url: '/blog/addTag',
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
        url: '/blog/getTag',
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
        url: '/blog/add',
        type: 'post',
        response: config => {
            return {
                code: 0,
                data: config.body.blog
            }
        }   
    },
    {
        url: '/blog/list',
        type: 'get',
        response: config => {
            return {
                code: 0,
                data: {
                ...blogList
                }
            }
        }
    },
    {
        url: '/blog/detail',
        type: 'get',
        response: config => {
            console.log(2222, config)
            return {
                code: 0,
                data: {
                blog: getBlogDetail(config.body.id || 'ssssssssssssss')
                }
            }
        }
    }
]
