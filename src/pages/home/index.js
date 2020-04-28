import React, { Component } from 'react';
import './index.less';

import Header from 'components/header';
import BlogCard from 'components/blogCard';
import UserCard from 'components/userCard';


class Home extends Component {
    render() {
        return <div className="header">
            <Header></Header>
            <BlogCard></BlogCard>
            <UserCard></UserCard>
        </div>;
    }
}

export default Home;
