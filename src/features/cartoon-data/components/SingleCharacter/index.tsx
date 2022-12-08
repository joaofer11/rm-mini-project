import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCharacterById, selectCharactersIds } from '../../cartoon-data-slice'

import * as S from './styles'

export const SingleCharacter = () => {
	const { characterId } = useParams()
	const characterData = useSelector((state) => selectCharacterById(state, Number(characterId)))
	
	const {
		name,
		image,
		species,
		gender,
		status,
		origin,
	} = characterData
	
	return (
		<S.Character>
			<img src={image} alt=""/>
			<h1>{name}</h1>
			<span>{gender}</span>
			<span>{origin.name}</span>
			<span>{species}</span>
			<span>{status}</span>
		</S.Character>
	)
}