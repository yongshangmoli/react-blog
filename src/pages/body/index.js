import React, { Component } from 'react';
import './index.less';
import { observer } from 'mobx-react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Tabs } from 'antd'; 
import { tabsConfig } from 'config/body';
import EssayList from './components/essayList';
import EssayDetail from './components/essayDetail';
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
            </TabPane>
        ) 

        const withProps = (Component, props) => {
            return function(matchProps) {
              return <Component {...props} {...matchProps} />
            }
        }

        return <div>
            <Tabs defaultActiveKey={tabsConfig[0]?.key} onChange={this.handleTabsChange}>
                { tabs }
            </Tabs>
            <BrowserRouter>
                <Switch>
                    <Route path='/blog/detail' component={ EssayDetail }></Route>
                    <Route path='/blog' component={ withProps(EssayList, {blogList: essayListStore.essayList}) }></Route>
                </Switch>
            </BrowserRouter>
        </div>;
    }
}
export default Body;
