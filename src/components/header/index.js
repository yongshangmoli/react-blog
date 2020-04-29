import React, { Component } from 'react';
import './index.less';

import { Carousel } from 'antd';
import bannerConfig from 'config/banner';
import Img from './components/img';

class Header extends Component {
  render () {
    const bannerImgs = bannerConfig.bannerImg
    const list = bannerImgs.map(v => <Img item={v} key={v.url}></Img>)
    return <div className="header">
      <Carousel autoplay>
        { list }
      </Carousel>
    </div>;
  }
}

export default Header;
