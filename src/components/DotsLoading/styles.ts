import styled, { keyframes } from 'styled-components'

const leap = keyframes`
	to { transform: translateY(-10px); }
`

export const Loader = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
`

export const Dot = styled.span`
	width: 1rem;
	height: 1rem;
	
	border-radius: 50%;
	background-color: #47a6ed;
	
	animation: ${leap} 200ms 200ms infinite alternate;
	
	&:nth-child(2) {
		animation-delay: 250ms;
	}
	
	&:nth-child(3) {
		animation-delay: 300ms;
	}
`