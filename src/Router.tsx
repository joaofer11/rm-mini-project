import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'

import { Characters, SingleCharacter } from './features/cartoon-data'


export const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />}>
				<Route index element={<Characters />}/>
				<Route path="character/:characterId" element={<SingleCharacter />} />
			</Route>
		</Routes>
	)
}