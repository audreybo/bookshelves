import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BooksList from './List';
import Pagination from '../Pagination';
import Loader from '../Loader';
import { BooksContainer, NoSelection } from './style';

const Books = ({ areBooksFetching, noShelfSelected }) => {
	return (
		<BooksContainer>
			{noShelfSelected
				? <NoSelection>
					<i className="book huge disabled icon" />
					Please select a bookshelf
				</NoSelection>
				: <>
					{areBooksFetching
						? <Loader />
						: <BooksList />
					}
					<Pagination />
				</>
			}
		</BooksContainer>
	);
};

const mapStateToProps = state => {
	const { areShelvesLoaded, areBooksFetching, current } = state;
	const noShelfSelected = areShelvesLoaded && current.booksId.length < 1;
	return { areBooksFetching, noShelfSelected };
};

Books.propTypes = {
	areBooksFetching: PropTypes.bool,
	noShelfSelected : PropTypes.bool
};

export default connect(mapStateToProps)(Books);