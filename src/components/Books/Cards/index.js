import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CardContainer, CoverContainer, Cover, BookTitle, Author, Rating, Price, Infos } from '../style';
import { getTitle, getPrice } from '../../../utils';

const BookCard = ({ title, image, authors, rating, price }) => {
	return (
		<CardContainer>
			<CoverContainer>
				{image
					? <Cover src={image}/>
					: <i className="book massive disabled icon" />
				}
			</CoverContainer>
			<Infos>
				{rating && <Rating><i className="star icon yellow" />{rating}</Rating>}
				{price && <Price>{price}</Price>}
			</Infos>
			<BookTitle>{title}</BookTitle>
			{authors && <Author>by {authors}</Author>}
		</CardContainer>
	);
};

const mapStateToProps = (state, ownProps) => {
	const { books } = state;
	const { id } = ownProps;
	const { title, authors, price, rating, image } = books[id];
	return {
		title: getTitle(title),
		authors: authors.join(', '),
		price: getPrice(price),
		rating,
		image
	};
};

BookCard.propTypes = {
	image: PropTypes.string,
	title: PropTypes.string.isRequired,
	authors: PropTypes.string,
	rating: PropTypes.string,
	price: PropTypes.string
};

export default connect(mapStateToProps)(BookCard);