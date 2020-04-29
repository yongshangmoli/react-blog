import React, { Component } from 'react';
import './index.less';

import Header from 'components/header';
import Body from 'pages/body';
import UserCard from 'components/userCard';


class Home extends Component {
    render() {
        return <div className="header">
            <Header></Header>
            <Body></Body>
            <UserCard></UserCard>
        </div>;
    }
}

export default Home;
