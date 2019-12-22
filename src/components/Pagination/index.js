import React from 'react';
import Pagination from 'react-js-pagination';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchBooks } from '../../actions';
import { PaginationWrapper } from './style';
import { MAX_BOOKS_PER_PAGE } from '../../constants';
import 'bootstrap/dist/css/bootstrap.css';

class Paginate extends React.Component {
	state = { activePage: 1 };

	componentDidUpdate(prevProps) {
		const { id } = this.props;

		if (prevProps.id !== id) {
			this.setState({ activePage: 1 });
		}
	}

	handlePageChange = pageNumber => {
		const { fetchBooks, id } = this.props;
		this.setState({ activePage: pageNumber });
		fetchBooks(id, pageNumber);
	}
	
	render() {
		const { bookCount } = this.props;

		return (
			<PaginationWrapper isDisplayed={bookCount > MAX_BOOKS_PER_PAGE}>
				<Pagination
					hideDisabled
					activePage={this.state.activePage}
					itemsCountPerPage={MAX_BOOKS_PER_PAGE}
					totalItemsCount={bookCount}
					pageRangeDisplayed={5}
					onChange={this.handlePageChange}
					itemClass="page-item"
					linkClass="page-link"
				/>
			</PaginationWrapper>
		);
	}
}

const mapStateToProps = state => {
	const { shelves, current } = state;
	const { shelfId } = current;
	const { bookCount } = shelves[shelfId];
	return { id: shelfId, bookCount };
};

Paginate.propTypes = {
	id: PropTypes.string.isRequired,
	bookCount: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, { fetchBooks })(Paginate);