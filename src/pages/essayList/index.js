import React, { Component } from 'react';
import BlogCard from 'components/blogCard';
import './index.less';

import { observer } from 'mobx-react';

@observer
class EssayList extends Component {
	
	handleEssayClick = (id) => {
		if (id) {
			this.props.history.push(`/blog/detail/${id}`);
			// this.props.history.goback()
		}
	}

    render () {
		let { blogList } = this.props
		blogList = blogList || []
		const list = blogList.map(v =>
			<BlogCard
				blog={v}
				key={v._id}
				handleEssayClick={ () => this.handleEssayClick(v._id)}
			></BlogCard>
		)
			return <div className='list-wrapper'>
				{list}
			</div>;
    }
}
export default EssayList;
