import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import BookCard from '../Cards';
import { ListContainer, ListWrapper, ListTitle } from '../style';

const renderBooksList = books => {
	return books.map(bookId => <BookCard key={bookId} id={bookId} />);
};

const BooksList = ({ books, title }) => {
	return (
		<ListContainer>
			<ListTitle>{title}</ListTitle>
			<ListWrapper>
				{renderBooksList(books)}
			</ListWrapper>
		</ListContainer>
	);
};

const mapStateToProps = state => {
	const { current, shelves } = state;
	const { booksId, shelfId } = current;
	const { title } = shelves[shelfId];
	return { books: booksId, title };
};

BooksList.propTypes = {
	title: PropTypes.string.isRequired,
	books: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(BooksList);