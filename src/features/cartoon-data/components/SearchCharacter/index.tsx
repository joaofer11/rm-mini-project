import { useState, useEffect, useCallback, memo, ChangeEvent } from 'react'
import { useAppDispatch } from '../../../../app/store-hooks'
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

interface SearchCharacterProps {
	onInputChanging: () => void
}

export const SearchCharacter = ({ onInputChanging }: SearchCharacterProps) => {
	const dispatch = useAppDispatch()
	
	const debounce = (
		fn: (params: { characterName: string }) => void, delay = 1000
	) => {
		let timer: ReturnType<typeof setTimeout>
		
		return (...args: [{ characterName: string }]) => {
			clearTimeout(timer)
			timer = setTimeout(() => fn(...args), delay)
		}
	}
	
	const getCharactersDelayed = useCallback(
		debounce((params) => dispatch(getCharacters(params)), 2250), [])
	
	const handleInputChanging = ({ target }: ChangeEvent<HTMLInputElement>) => {
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