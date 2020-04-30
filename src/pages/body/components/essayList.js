import React, { Component } from 'react';
import BlogCard from 'components/blogCard';

import './essayList.less';

class EssayList extends Component {
	
	handleEssayClick = () => {
		this.props.history.push('/blog/detail');
	}

    render () {
		let { blogList } = this.props
		console.log(222, this.props)
		blogList = blogList || []
		const list = blogList.map(v =>
			<BlogCard
				blog={v}
				key={v._id}
				handleEssayClick={this.handleEssayClick}
			></BlogCard>
		)
			return <div className='list-wrapper'>
				{list}
			</div>;
    }
}
export default EssayList;
