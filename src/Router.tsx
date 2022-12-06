import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Characters } from './features/posts'


export const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />}>
				<Route index element={<Characters />}/>
			</Route>
		</Routes>
	)
}