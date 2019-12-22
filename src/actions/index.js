import _ from 'lodash';
import { USER_ID, getShelvesData, getBookCount, getShelfContent, getBookData, getBookRating } from '../api';
import { RECEIVED_SHELVES, REQUEST_BOOKS, RECEIVED_BOOKS, UPDATE_CURRENT_BOOKS } from '../constants';

const fetchShelves = () => async dispatch => {
	const shelvesData = await getShelvesData(USER_ID);

	let shelves = {};
	await Promise.all(shelvesData.map(async shelf => {
		shelves[shelf.id] = {
			title: shelf.title,
			id: shelf.id,
			bookCount: await getBookCount(shelf.id)
		};
	}));

	dispatch({
		type: RECEIVED_SHELVES,
		shelves
	});
};

const getBooksFromShelf = (shelfId, pageNumber) => async dispatch => {
	const currentBooks = await getShelfContent(shelfId, pageNumber);

	dispatch({
		type: UPDATE_CURRENT_BOOKS,
		currentBooks,
		shelfId
	});

	return currentBooks;
};

const getBooksData = booksToFetch => async dispatch => {
	let books = {};

	await Promise.all(booksToFetch.map(async bookId => {
		await getBookData(bookId)
			.then(async ({ data: { id, title, authors, price, book, image } }) => {
				books[id] = {
					title,
					authors: _.map(authors, 'name'),
					price,
					rating: await getBookRating(book.id),
					image
				};
			});
	}));

	return books;
};

const fetchBooks = (shelfId, pageNumber = 1) => async (dispatch, getState) => {
	const { books } = getState();
	const storedBooksIds = Object.keys(books);

	dispatch({ type: REQUEST_BOOKS });

	const shelfContent = await dispatch(getBooksFromShelf(shelfId, pageNumber));
	const booksToFetch = _.difference(shelfContent, storedBooksIds);

	const newBooks = booksToFetch.length > 0
		? await dispatch(getBooksData(booksToFetch)) 
		: {};

	dispatch({
		type: RECEIVED_BOOKS,
		newBooks
	});
};

export { fetchShelves, fetchBooks };