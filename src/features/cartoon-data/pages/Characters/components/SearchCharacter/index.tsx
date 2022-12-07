import { useDispatch } from 'react-redux'
import { getCharacters } from '../../../../cartoon-data-slice'

export const SearchCharacter = () => {
	const dispatch = useDispatch()
	
	const debounce = (fn, delay = 1000) => {
		let timer = null
		
		const trackActions = (...args) => {
			clearTimeout(timer)
			timer = setTimeout(() => fn(...args), delay)
		}
		return trackActions
	}
	
	const handleInputChanging = ({ target }) => {
		dispatch(getCharacters({ characterName: target.value }))
	}
	
	return (
		<>
			<label htmlFor="searchCharacter">Search Character</label>
			<input 
				type="text" 
				id="searchCharacter"
				onChange={debounce(handleInputChanging, 2250)}
			/>
		</>
	)
}