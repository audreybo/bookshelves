import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { AppContainer } from './style';
import Shelves from '../Shelves';
import Books from '../Books';
import Loader from '../Loader';
import { fetchShelves } from '../../actions';

const App = ({ areShelvesLoaded, fetchShelves }) => {
	useEffect(() => {
		fetchShelves();
	}, []);

	if (!areShelvesLoaded) {
		return <Loader />;
	}

	return (
		<AppContainer>
			<Shelves />
			<Books />
		</AppContainer>
	);
};

const mapStateToProps = state => {
	const { areShelvesLoaded } = state;
	return { areShelvesLoaded };
};

App.propTypes = {
	areShelvesLoaded: PropTypes.bool.isRequired,
	fetchShelves: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { fetchShelves })(App);
