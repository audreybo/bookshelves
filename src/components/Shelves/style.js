import styled from 'styled-components';

const ShelvesContainer = styled.div`
	width: 220px;
	padding: 15px 20px;

	@media only screen and (max-width : 767px) {
		width: 100%;
		padding: 5px 25px;
	}
`;

const Title = styled.div`
	font-size: 20px;
	font-weight: 700;
	font-family: 'Montserrat', 'Lato';
	text-transform: uppercase;
	margin: 15px 0;

	@media only screen and (max-width : 767px) {
		margin: 5px 0;
	}
`;

const activeStyling = `
	font-weight: 600;
	background-color: rgba(255,255,255,0.8);
	color: #0099ff;
`;

const Shelf = styled.div`
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;
	align-items: center;
	padding: 10px 5px;
	cursor: pointer;

	${props => props.isActive && `
		${activeStyling}
		border-style: solid none;
		border-color: #0099ff;
		border-width: 1px;
	`}

	&:hover {
		${activeStyling}
	}

	@media only screen and (max-width : 767px) {
		padding: 5px;
	}
`;

const ShelfTitle = styled.div`
	font-size: 16px;
`;

const BookCount = styled.span`
	font-size: 14px;
	color: #a9a9a9;
`;

export { ShelvesContainer, Shelf, Title, ShelfTitle, BookCount };
