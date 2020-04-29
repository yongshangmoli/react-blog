import React, { Component } from 'react';
import BlogCard from 'components/blogCard';
import './essayList.less';

class EssayList extends Component {
    render () {
      const { blogList } = this.props
			const list = blogList.map(v => <BlogCard blog={v} key={v._id}></BlogCard>)
			return <div className='list-wrapper'>
					{list}
			</div>;
    }
}
export default EssayList;
