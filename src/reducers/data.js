import data from '../schemas/index.js';
import { fromJS } from 'immutable';
import { SEARCH_ENTITIES } from '../action-types/index';

const initialState = fromJS({
	entities: data.entities,
	categories: data.result.categories,
	search: '',
});

function dataReducer(state = initialState, action) {
	switch(action.type) {
		case SEARCH_ENTITIES : {
			return state.set('search', action.payload.query)
		}
		default: 
			return state
	}
}

export default dataReducer;