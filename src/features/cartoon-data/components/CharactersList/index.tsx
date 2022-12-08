import { useSelector } from 'react-redux'
import { selectCharactersIds } from '../../cartoon-data-slice'

import { CharacterItem } from '../CharacterItem'
import * as S from './styles'

export const CharactersList = () => {
	const charactersIds = useSelector(selectCharactersIds)
	
	const renderedCharactersList = charactersIds.map(id => (
		<CharacterItem key={id} id={id} />
	))
	
	return (
		<S.CharactersList>
			{renderedCharactersList}
		</S.CharactersList>
	)
}