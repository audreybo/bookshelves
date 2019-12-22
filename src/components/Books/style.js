import styled from 'styled-components';
import { Title } from '../Shelves/style';

const BooksContainer = styled.div`
	display: flex;
	flex-flow: column nowrap;
	width: calc(100% - 220px);
	height: 100%;
	overflow: auto;
	background-color: white;

	@media only screen and (max-width : 767px) {
		width: 100%;
	}
`;

const ListContainer = styled.div`
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	padding-bottom: 20px;
`;

const ListWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, 200px);
	grid-gap: 20px;
	justify-content: center;
`;

const ListTitle = styled(Title)`
	display:flex;
	align-items: center;
	height: 60px;
	margin-left: 25px;
`;

const CardContainer = styled.div`
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	width: 200px;
	height: 320px;
	background-color: white;
	border-radius: 7px;
	border: 1px solid lightgray;
	padding: 10px 0;
`;

const CoverContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 120px;
	height: 150px;
	margin-bottom: 10px;
`;

const Cover = styled.img`
	max-height: 150px;
`;

const BookTitle = styled.div`
	font-size: 18px;
	font-weight: 600;
	text-align: center;
	line-height: 1.3;
`;

const Author = styled.div`
	color: silver;
	text-align: center;
`;

const Infos = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 40px;
`;

const Rating = styled.div`
	margin: 10px;
	font-weight: 600;
`;

const Price = styled.div`
	display: flex;
	justify-content: center;
	border-radius: 4px;
	min-width: 60px;
	max-width: 80px;
	padding: 3px;
	white-space: nowrap;
	background-color: green;
	color: white;
	font-weight: 600;
	margin: 10px;
`;

const NoSelection = styled.div`
	display: flex;
	flex-flow: column nowrap;
	margin: auto;
	font-size: 25px;
	color: grey;
	align-items: center;
	line-height: 80px;
`;

export { BooksContainer, ListContainer, ListWrapper, ListTitle, CardContainer, Cover,
	BookTitle, Author, Rating, Price, Infos, NoSelection, CoverContainer
};