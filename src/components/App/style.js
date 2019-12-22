import styled from 'styled-components';

const AppContainer = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	display: flex;
	background-color: rgba(54,154,233, 0.2);

	@media only screen and (max-width : 767px) {
		flex-flow: column nowrap;
	}
`;

export { AppContainer };