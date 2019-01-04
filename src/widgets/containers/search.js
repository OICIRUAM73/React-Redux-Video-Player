import React, { Component } from 'react';
import Search from '../components/search.js';
import { connect } from 'react-redux';
import  * as actions from '../../actions/index';
import { bindActionCreators } from 'redux';

class SearchContainer extends Component {
	state = {
		value:'Luis Fonsi',
	}
	handleSubmit = event => {
		event.preventDefault();
		this.props.actions.searchEntities(this.input.value);
	}

	setInputRef = element => {
		this.input = element;
	}

	handleInputChange = event => {
		this.setState({
			value: event.target.value.replace(' ', '-')
		})
	}

	render() {
		return (
			<Search 
				handleChange={this.handleInputChange}
				setRef={this.setInputRef}
				handleSubmit={this.handleSubmit}
				value={this.state.value}
			/>
		)
	}
}

function mapDispatchToProps(dispatch){
	return{
		actions: bindActionCreators(actions, dispatch)
	}
}

export default connect(null, mapDispatchToProps)(SearchContainer);