import React from 'react';
import { LoaderContainer } from './style';

const Loader = () => {
	return (
		<LoaderContainer>
			<div className="ui active inverted dimmer">
				<div className="ui big text loader">Loading</div>
			</div>
		</LoaderContainer>
	);
};

export default Loader;