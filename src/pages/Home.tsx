import { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCharacters } from '../features/cartoon-data/cartoon-data-slice'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

import { 
	SearchCharacter,
	CharactersList,
	Pagination,
} from '../features/cartoon-data/'

import { DotsLoading } from '../features/ui'

const Main = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 2rem 1rem;
`

export const Home = () => {
	const [isSearching, setIsSearching] = useState(false)
	const charactersStatus = useSelector(state => state.cartoonData.status)
	const fetchedOnce = useSelector(state => state.cartoonData.fetchedOnce)
	const dispatch = useDispatch()
	
	const canLoaderAppear = !fetchedOnce && charactersStatus === 'loading'
	
	const handleInputChanging = () => setIsSearching(true)
	
	useEffect(() => {
		dispatch(getCharacters())
	}, [])
	
	useEffect(() => {
		if (charactersStatus === 'succeeded') setIsSearching(false)
	}, [charactersStatus])
	
	return (
		<>	
			{canLoaderAppear && <DotsLoading center />}
			{fetchedOnce && <SearchCharacter 
				onInputChanging={handleInputChanging} 
			/>}
			
			{isSearching && <DotsLoading />}
			<Main>
				<CharactersList />
			</Main>
			<Pagination />
		</>
	)
}