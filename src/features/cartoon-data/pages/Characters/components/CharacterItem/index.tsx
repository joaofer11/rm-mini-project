import { useSelector } from 'react-redux'
import { selectCharacterById } from '../../../../cartoon-data-slice'

import * as S from './styles'

export const CharacterItem = ({ id }) => {
	const characterData = useSelector(state => selectCharacterById(state, id))
	const {
		name,
		image,
		species,
		gender,
		status,
		origin,
	} = characterData
	
	console.log(characterData)
	
	return (
		<S.CharacterItem>
			<img src={image} alt=""/>
			<h1>{name}</h1>
			<span>{gender}</span>
			<span>{origin.name}</span>
			<span>{species}</span>
			<span>{status}</span>
		</S.CharacterItem>
	)
}