import React, { Component } from 'react';
import './index.less';

import { renderRoutes } from 'react-router-config'
import Header from 'components/header';

import UserCard from 'components/userCard';


class Home extends Component {
    render() {
        // console.log(111111, this.props.route)
        return <div className="header">
            <Header></Header>
            {
                renderRoutes(
                    this.props.route.routes
                )
            }
            <UserCard></UserCard>
        </div>;
    }
}

export default Home;
