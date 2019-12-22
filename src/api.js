import axios from 'axios';
import { MAX_BOOKS_PER_PAGE } from './constants';

const USER_ID = '5a8411b53ed02c04187ff02a';

const api = axios.create({
	baseURL: 'https://api.glose.com'
});

const getShelvesData = userId => {
	return api.get(`/users/${userId}/shelves`)
		.then(response => response.data);
};

const getShelfContent = (shelfId, pageNumber) => {
	return api.get(`/shelves/${shelfId}/forms`, {
		params: {
			limit: MAX_BOOKS_PER_PAGE,
			offset: (pageNumber - 1) * MAX_BOOKS_PER_PAGE
		}
	})
		.then(response => response.data);
};

const getBookCount = shelfId => {
	return api.head(`/shelves/${shelfId}/forms`)
		.then(res => {
			const bookCount = res.headers['x-glose-count'];
			return parseInt(bookCount, 10);
		});
};

const getBookData = bookId => {
	return api.get(`/forms/${bookId}`);
};

const getBookRating = bookId => {
	return api.get(`/books/${bookId}`)
		.then(res => res.data.average_rating ? res.data.average_rating.toFixed(1) : null);
};

export { USER_ID, getShelvesData, getBookCount, getShelfContent, getBookData, getBookRating };