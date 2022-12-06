import styled from 'styled-components'
import { Outlet } from 'react-router-dom'

const Main = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 2rem 1rem;
`

export const Home = () => {
	return (
		<Main>
			<Outlet />
		</Main>
	)
}