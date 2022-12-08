import { useState, useEffect, useCallback, memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectCharactersIds, getCharacters } from '../../cartoon-data-slice'
import styled from 'styled-components'

import { DotsLoading } from '../../../ui/components/DotsLoading'

const SearchCharacterContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.357rem;
	
	margin: 1.5rem 0 2rem;
`

export const SearchCharacter = ({ onInputChanging }) => {
	const dispatch = useDispatch()
	
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
		onInputChanging()
		getCharactersDelayed({ characterName: target.value })
	}
	
	return (
		<SearchCharacterContainer>
			<label htmlFor="searchCharacter">Search Character</label>
			<input 
				type="text" 
				id="searchCharacter"
				onChange={handleInputChanging}
			/>
		</SearchCharacterContainer>
	)
}