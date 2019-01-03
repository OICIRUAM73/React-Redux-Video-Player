import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories.js'
import Related from '../components/related';
import ModalContainer from '../../widgets/containers/modal';
import Modal from '../../widgets/components/modal.js';
import HandleError from '../../error/containers/handle-error.js';
import VideoPlayer from '../../player/containers/video-player.js';
import { connect } from 'react-redux';

class Home extends Component {
	state = {
		modalVisible : false,
	}

	handleOpenModal = (media) => {
		this.setState({
			modalVisible : true,
			media
		})
	}

	handleCloseModal = (event) =>{
		this.setState({
			modalVisible : false,
		})
	}

	render() {
		return (
			<HandleError>
				<HomeLayout>
					<Related />
					<Categories 
						categories={this.props.categories} 
						handleOpenModal = {this.handleOpenModal}
						search={this.props.search}
					/>
					{
						this.state.modalVisible &&
						<ModalContainer>
							<Modal
								handleClick={this.handleCloseModal}
							>
								<VideoPlayer 
									autoplay
									src={this.state.media.src}
									title={this.state.media.title}
								/>
							</Modal>
						</ModalContainer>
					}
				</HomeLayout>
			</HandleError>
		)
	}
}

function mapSateToProps(state, props) {
	const categories = state.get('data').get('categories').map((categoryId) => {
		return state.get('data').get('entities').get('categories').get(categoryId)
	})
	return {
		categories: categories,
		search: state.get('data').get('search')
	}
}

export default connect(mapSateToProps)(Home);