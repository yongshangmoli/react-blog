import React, { Component } from 'react';
import './index.less';

import { Carousel } from 'antd'

// function Img (item) {

// }

class User extends Component {
  render() {
    const url = '1.jpg'
    return <div className="header">
      <img className='banner-img' alt="banner图像" src={require(`assets/imgs/${url}`)}></img>
      <Carousel>
        <div>
          <img className='banner-img' alt="banner图像" src={require(`assets/imgs/${url}`)}></img>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
      </Carousel>
    </div>;
  }
}

export default User;
