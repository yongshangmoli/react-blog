import React, { Component } from 'react';
import './index.less';
import { observer } from 'mobx-react'

import { Tabs } from 'antd'; 
import { tabsConfig } from 'config/body';
import EssayList from './components/essayList';
import { essayListStore } from 'store/essayListStore'
const { TabPane } = Tabs;

@observer
class Body extends Component {
    handleTabsChange = (key) => {
        // TODO: 清空列表，由于滚动条的存在会有跳动的效果
        // essayListStore.setEssayList([])
        this.updateBlogList(key)
    }

    UNSAFE_componentWillMount () {
        let defaultActiveKey = tabsConfig[0]?.key
        this.updateBlogList(defaultActiveKey)
    }

    updateBlogList = (key) => {
        if (key) {
            essayListStore.setEssayType(key)
            essayListStore.getEssayList()
        }
    }

    render () {
        const tabs = tabsConfig.map(v =>
            <TabPane tab={v.name} key={v.key}>
                <EssayList blogList={essayListStore.essayList} ></EssayList>
            </TabPane>
        ) 
        return <Tabs defaultActiveKey={tabsConfig[0]?.key} onChange={this.handleTabsChange}>
            { tabs }
        </Tabs>;
    }
}
export default Body;
