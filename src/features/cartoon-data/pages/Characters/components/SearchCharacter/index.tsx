import { useState, useEffect, useCallback, } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectCharactersIds, getCharacters } from '../../../../cartoon-data-slice'

import { DotsLoading } from '../../../../../../components/DotsLoading'

export const SearchCharacter = () => {
	const [isSearching, setIsSearching] = useState(false)
	const charactersIds = useSelector(selectCharactersIds)
	const dispatch = useDispatch()
	
	useEffect(() => {
		setIsSearching(false)
	}, [charactersIds])
	
	const debounce = (fn, delay = 1000) => {
		let timer = null
		
		const trackActions = (...args) => {
			clearTimeout(timer)
			timer = setTimeout(() => fn(...args), delay)
		}
		return trackActions
	}
	
	const getCharactersDelayed = useCallback(
		debounce((params) => dispatch(getCharacters(params)), 2250),
		[]
	)
	
	const handleInputChanging = ({ target }) => {
		setIsSearching(true)
		getCharactersDelayed({ characterName: target.value })
	}
	
	return (
		<>
			<label htmlFor="searchCharacter">Search Character</label>
			<input 
				type="text" 
				id="searchCharacter"
				onChange={handleInputChanging}
				style={{ marginBottom: '1.5rem', }}
			/>
			{isSearching && <DotsLoading />}
		</>
	)
}