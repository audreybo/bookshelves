import React, { useState, useEffect } from 'react';
import Pagination from 'react-js-pagination';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchBooks } from '../../actions';
import { PaginationWrapper } from './style';
import { MAX_BOOKS_PER_PAGE } from '../../constants';
import 'bootstrap/dist/css/bootstrap.css';

const Paginate = ({ bookCount, fetchBooks, id }) => {
	const [ activePage, setPage ] = useState(1);

	useEffect(() => {
		setPage(1);
	}, [id]);

	const handlePageChange = pageNumber => {
		setPage(pageNumber);
		fetchBooks(id, pageNumber);
	};

	return (
		<PaginationWrapper isDisplayed={bookCount > MAX_BOOKS_PER_PAGE}>
			<Pagination
				hideDisabled
				activePage={activePage}
				itemsCountPerPage={MAX_BOOKS_PER_PAGE}
				totalItemsCount={bookCount}
				pageRangeDisplayed={5}
				onChange={handlePageChange}
				itemClass="page-item"
				linkClass="page-link"
			/>
		</PaginationWrapper>
	);
};

const mapStateToProps = state => {
	const { shelves, current } = state;
	const { shelfId } = current;
	const { bookCount } = shelves[shelfId];
	return { id: shelfId, bookCount };
};

Paginate.propTypes = {
	id: PropTypes.string.isRequired,
	bookCount: PropTypes.number.isRequired,
	fetchBooks: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { fetchBooks })(Paginate);