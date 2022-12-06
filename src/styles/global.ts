import { createGlobalStyle } from 'styled-components'
import { sizes } from './breakpoints'


export const GlobalStyles = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	
	:focus {
		outline: 1px solid #333;
	}
	
	html {
		height: -webkit-fill-available;
		font-size: 87.5%;
		
		@media ${sizes.md} {
			font-size: 93.75%;
		}
		
		@media ${sizes.lg} {
			font-size: 100%;
		}
	}
	
	body {
		min-height: 100vh;
		min-height: -webkit-fill-available;
		min-height: fill-available;
	}
	
	body, input, button {
		-webkit-font-smoothing: antialiased;
		font-family: 'Open Sans', sans-serif;
		font-size: 1rem;
		font-weight: 400;
	}
	
	button, a {
		cursor: pointer;
	}
	
	a {
		text-decoration: none;
	}
	
	ul {
		list-style: none;
	}
`