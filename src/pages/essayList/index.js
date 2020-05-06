import React, { Component } from 'react';
import BlogCard from 'components/blogCard';
import './index.less';

import { Pagination } from 'antd';
import { observer } from 'mobx-react';
import { essayListStore } from 'store/essayListStore'


@observer
class EssayList extends Component {
	
	handleEssayClick = (id) => {
		if (id) {
			this.props.history.push(`/blog/detail/${id}`);
			// this.props.history.goback()
		}
	}

	handlePageChange = (page, pageSize) => {
		// console.log(222, page, pageSize)
		essayListStore.updatePageInfo({
			page,
			pageSize,
			total: this.props.total
		})
		essayListStore.getEssayList()
	}

    render () {
		let { blogList, total } = this.props
		blogList = blogList || []
		const list = blogList.map(v =>
			<BlogCard
				blog={v}
				key={v._id}
				handleEssayClick={ () => this.handleEssayClick(v._id)}
			></BlogCard>
		)
			return <div className='wrapper'>
				<div className='list-wrapper'>
					{list}
				</div>
				<Pagination
					className='page-wrapper'
					total={total}
					showSizeChanger
					showQuickJumper
					showTotal={total => `总共 ${total} 篇`}
					onChange={this.handlePageChange}
					onShowSizeChange={this.handlePageChange}
				/>
			</div>;
    }
}
export default EssayList;
