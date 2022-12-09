import { Link } from 'react-router-dom'
import { useAppSelector } from '../../../../app/store-hooks'
import { selectCharacterById } from '../../cartoon-data-slice'

import * as S from './styles'

interface CharacterItemProps {
	id: number;
}

export const CharacterItem = ({ id }: CharacterItemProps) => {
	const characterData = useAppSelector(state => selectCharacterById(state, id))
	const {
		name,
		image,
		species,
		gender,
		status,
		origin,
	} = characterData!
	
	return (
		<S.CharacterItem>
			<img src={image} alt=""/>
			<h1>{name}</h1>
			<span>{gender}</span>
			<span>{origin!.name}</span>
			<span>{species}</span>
			<span>{status}</span>
			<Link to={`character/${id}`}>Show on</Link>
		</S.CharacterItem>
	)
}