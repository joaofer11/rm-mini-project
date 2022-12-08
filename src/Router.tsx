import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { SingleCharacter } from './features/cartoon-data'

export const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="character/:characterId" element={<SingleCharacter />} />
		</Routes>
	)
}