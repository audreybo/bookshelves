import styled from 'styled-components';

const PaginationWrapper = styled.div`
	display: flex;
	justify-content: center;
	${props => !props.isDisplayed && 'display:none;'}
`;

export { PaginationWrapper };