import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { AppContainer } from './style';
import Shelves from '../Shelves';
import Books from '../Books';
import Loader from '../Loader';
import { fetchShelves } from '../../actions';

class App extends React.Component {
	componentDidMount() {
		this.props.fetchShelves();
	}

	render() {
		if (!this.props.areShelvesLoaded) {
			return <Loader />;
		}

		return (
			<AppContainer>
				<Shelves />
				<Books />
			</AppContainer>
		);
	}
}

const mapStateToProps = state => {
	const { areBooksFetching, areShelvesLoaded } = state;
	return { areBooksFetching, areShelvesLoaded };
};

App.propTypes = {
	areShelvesLoaded: PropTypes.bool.isRequired,
	fetchShelves: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { fetchShelves })(App);
