import styled from 'styled-components'

export const BackToTopButton = styled.button`
	position: fixed;
	bottom: 2rem;
	right: 2rem;
	
	display: flex;
	justify-content: center;
	align-items: center;
	
	width: 3rem;
	height: 3rem;
	
	border-radius: 50%;
	background-color: #1a1a1a;
	
	&::before {
		content: "";
		width: 1rem;
		height: 1rem;
		transform: translateY(0.25rem) rotate(45deg);
		
		border-top: 0.5rem solid #979797;
		border-left: 0.5rem solid #979797;
	}
`