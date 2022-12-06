import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectPostIds, getCharactersPost } from '../../posts-slice'

import { CharacterExcerpt } from './components/CharacterExcerpt'
import * as S from './styles'

export const Characters = () => {
	const postsStatus = useSelector(state => state.posts.status)
	const postIds = useSelector(selectPostIds)
	const dispatch = useDispatch()
	
	useEffect(() => {
		if (postsStatus === 'idle') {
			dispatch(getCharactersPost())
		}
	}, [postsStatus, dispatch])
	
	const renderedCharactersList = postIds.map(id => (
		<CharacterExcerpt key={id} id={id} />
	))
	
	return (
		<>
			<S.CharactersList>
				{renderedCharactersList}
			</S.CharactersList>
		</>
	)
}