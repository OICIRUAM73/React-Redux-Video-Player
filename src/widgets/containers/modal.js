import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class ModalContainer extends Component {
	render() {
		const modalContainer = document.getElementById('modal-container')
		return ReactDOM.createPortal(this.props.children, modalContainer)
	}
}

export default ModalContainer;