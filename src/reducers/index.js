import { RECEIVED_SHELVES, REQUEST_BOOKS, RECEIVED_BOOKS, UPDATE_CURRENT_BOOKS } from '../constants';
import { deepCopy } from '../utils';

const initialState = {
	areShelvesLoaded: false,
	areBooksFetching: false,
	shelves: {},
	books: {},
	current: {
		booksId: [],
		shelfId: null
	}
};

const bookshelves = (state = initialState, action) => {
	let newState = deepCopy(state);
	switch (action.type) {
		case RECEIVED_SHELVES:
			newState.areShelvesLoaded = true;
			newState.shelves = action.shelves;
			return newState;
		case REQUEST_BOOKS:
			newState.areBooksFetching = true;
			return newState;
		case RECEIVED_BOOKS:
			newState.areBooksFetching = false;
			newState.books = { ...state.books, ...action.newBooks };
			return newState;
		case UPDATE_CURRENT_BOOKS:
			newState.current.booksId = action.currentBooks;
			newState.current.shelfId = action.shelfId;
			return newState;
		default:
			return state;
	}
};

export default bookshelves;