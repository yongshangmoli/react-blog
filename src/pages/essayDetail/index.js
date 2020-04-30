import React, { Component } from 'react';
import './index.less'
import { observer } from 'mobx-react';
import { Breadcrumb } from 'antd';
import { getBlogDetail } from 'api';
import { tabsConfig } from 'config/body';

@observer
class EssayDetail extends Component {
    constructor (props) {
        super(props)
        this.state = {
            essayDetail: {}
        }
    }

    async componentDidMount () {
        let blogId = this.props.match.params
        let res = await getBlogDetail({
            blogId
        })
        this.setState({
            essayDetail: res.data.blog
        })
    }

    getTypeDesc = (type) => {
        return tabsConfig.find(v => v.key === type)
    }

    render () {
		const details = this.state.essayDetail
		const classification = details.classification && details.classification.label
        return <div className='wrapper'>
            <Breadcrumb className='bread'>
				{
					classification && <Breadcrumb.Item href="/">{ classification }</Breadcrumb.Item>
				}
                <Breadcrumb.Item>{ details.title || ''}</Breadcrumb.Item>
            </Breadcrumb>
            <article>
                <h1 className='title'>标题：{details.title}</h1>
                <p>
                    <span className='time'>{details.createdTime}</span>
                    <span>阅读：0</span>
                </p>
                <p>简介：{details.introduction}</p>
                <div dangerouslySetInnerHTML={{ __html: details.text }}></div>
            </article>
        </div>;
    }
}
export default EssayDetail;
