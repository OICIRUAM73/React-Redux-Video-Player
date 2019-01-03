import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../pages/containers/home';
//import Playlist from './src/playlist/components/playlist';
//import Category from './src/category/components/category';
//import data from '../api.json';
import data from '../schemas/index.js';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../reducers/index';
import { Map as map } from 'immutable';

const initialState = {
	data: {
		entities: data.entities,
		categories: data.result.categories,
		search: [],
	},
	modal: {
		visibility: false,
		mediaId: null,
	}
};

const store = createStore(
	reducer,
	map(),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)
console.log(store.getState());

const homeContainer = document.getElementById('home-container')
const holaMundo = <h1>Hola Mundo!!</h1>;

ReactDOM.render(
	<Provider store={store}>
		<Home/>
	</Provider>
, homeContainer)
