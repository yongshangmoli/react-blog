import React, { Component } from 'react';
import './index.less';

import { Card } from 'antd';
const { Meta } = Card;


class BlogCard extends Component {
  render() {
    const { title, introduction, updatedTime } = this.props.blog
    return <Card
      hoverable
      style={{ maxWidth: '240px', margin: '20px', width: '100%' }}
      cover={
        <img alt="cover"
        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        style={{
          maxHeight: '150px',
          objectFit: 'cover'
        }}/>}
      onClick={this.props.handleEssayClick}
    >
      <Meta title={title} description={introduction} />
      <div>{ updatedTime }</div>
    </Card>;
  }
}

export default BlogCard
