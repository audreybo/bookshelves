import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchBooks } from '../../actions';
import { ShelvesContainer, Shelf, Title, ShelfTitle, BookCount } from './style';

const renderShelvesList = ({ shelves, fetchBooks, currentShelf }) => {
	return _.chain(shelves)
		.sortBy(({ title }) => title)
		.map(({ id, title, bookCount }) => {
			return (
				<Shelf
					key={id}
					onClick={() => fetchBooks(id)}
					isActive={id === currentShelf}
				>
					<ShelfTitle>{title}</ShelfTitle>
					<BookCount>{bookCount}</BookCount>
				</Shelf>
			);
		})
		.value();
};

const Shelves = (props) => {
	return (
		<ShelvesContainer>
			<Title>Shelves</Title>
			{renderShelvesList(props)}
		</ShelvesContainer>
	);
};

const mapStateToProps = state => {
	const { shelves, current } = state;
	const { shelfId } = current;
	return { shelves, currentShelf: shelfId };
};

Shelves.propTypes = {
	shelves: PropTypes.object.isRequired,
	currentShelf: PropTypes.string
};

export default connect(mapStateToProps, { fetchBooks })(Shelves);
