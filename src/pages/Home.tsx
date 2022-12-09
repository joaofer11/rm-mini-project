import { useState, useEffect, useRef } from 'react'
import { useAppSelector, useAppDispatch } from '../app/store-hooks'
import { getCharacters } from '../features/cartoon-data/cartoon-data-slice'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

import { 
	SearchCharacter,
	CharactersList,
	Pagination,
} from '../features/cartoon-data/'

import { BackToTopButton, DotsLoading } from '../features/ui'

const Main = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 2rem 1rem;
`

export const Home = () => {
	const [isSearching, setIsSearching] = useState(false)
	const charactersStatus = useAppSelector(state => state.cartoonData.status)
	const fetchedOnce = useAppSelector(state => state.cartoonData.fetchedOnce)
	const dispatch = useAppDispatch()
	
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
			<BackToTopButton />
			{canLoaderAppear && <DotsLoading center />}
			{fetchedOnce && (
				<>
					<SearchCharacter
						onInputChanging={handleInputChanging}  
					/>
					<Main>
						<CharactersList />
					</Main>
					<Pagination />
				</>
			)}
			
			{isSearching && <DotsLoading />}
		</>
	)
}