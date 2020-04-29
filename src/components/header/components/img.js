import React, { Component } from 'react';

class Img extends Component {
    render () {
        const { url, alt } = this.props.item
        return <div className='banner-wrapper'>
            <img className='banner-img' alt={alt || 'banner图像'} src={require(`assets/imgs/${url}`)}></img>
        </div>;
    }
}

export default Img;
