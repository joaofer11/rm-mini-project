import styled from 'styled-components'

export const Pagination = styled.nav`
	display: flex;
	justify-content: center;
	
	padding: 0.5rem 1rem;
	
	> ul {
		display: flex;
		gap: 0.5rem;
		
		button {
			display: flex;
			justify-content: center;
			align-items: center;
			
			width: 2.5rem;
			height: 2.5rem;
			
			font-weight: 500;
			font-size: 2rem;
			
			border-radius: 3px;
			background-color: #e7e7e7;
		}
	}
`