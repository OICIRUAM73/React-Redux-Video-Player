import data from '../schemas/index.js';
import { fromJS } from 'immutable';

const initialState = fromJS({
	entities: data.entities,
	categories: data.result.categories,
	search: [],
});

function dataReducer(state = initialState, action) {
	switch(action.type) {
		case 'SEARCH_VIDEO' : {
			let results = []
			if(action.payload.query) {
				state.data.categories.map((item)=>{
	                return  item.playlist.filter((item)=>{
	                    return item.author.toLowerCase().includes(action.payload.query.toLowerCase()) && results.push(item) 
	                })
	            })
			}
			return {
				...state,
				search: results
			}
		}
		default: 
			return state
	}
}

export default dataReducer;