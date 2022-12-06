import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectCharactersIds, getCharacters } from '../../cartoon-data-slice'

import { CharacterItem } from './components/CharacterItem'
import * as S from './styles'

export const Characters = () => {
	const charactersStatus = useSelector(state => state.cartoonData.status)
	const charactersIds = useSelector(selectCharactersIds)
	const dispatch = useDispatch()
	
	useEffect(() => {
		if (charactersStatus === 'idle') {
			dispatch(getCharacters())
		}
	}, [charactersStatus, dispatch])
	
	const renderedCharactersItems = charactersIds.map(id => (
		<CharacterItem key={id} id={id} />
	))
	
	return (
		<>
			<S.CharactersList>
				{renderedCharactersItems}
			</S.CharactersList>
		</>
	)
}