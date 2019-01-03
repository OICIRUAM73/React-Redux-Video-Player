import React from 'react';
import Category from './category';
import './categories.css';
import SearchContainer from '../../widgets/containers/search.js';
import Media from '../../playlist/components/media.js';

function Categories(props) {
	return (
		<div className="Categories">
			<SearchContainer />
			{
				props.search.map((item) => {
					return (
						<Media
						key={item.get('id')}
						{...item.toJS()}
						/>
					)
				})
			}
			{
				props.categories.map((item) => {
					return (
						<Category 
							key={item.get('id')} 
							{...item.toJS()} 
							handleOpenModal = {props.handleOpenModal} 
						/>
					)
				})
			}
		</div>
	)
}

export default Categories;