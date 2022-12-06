import { useSelector } from 'react-redux'
import { selectPostById } from '../../../../posts-slice'

import * as S from './styles'

export const CharacterExcerpt = ({ id }) => {
	const characterData = useSelector(state => selectPostById(state, id))
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
		<S.CharacterExcerpt>
			<img src={image} alt=""/>
			<h1>{name}</h1>
			<span>{gender}</span>
			<span>{origin.name}</span>
			<span>{species}</span>
			<span>{status}</span>
		</S.CharacterExcerpt>
	)
}