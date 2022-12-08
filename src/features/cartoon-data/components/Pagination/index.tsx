import { useSelector, useDispatch } from 'react-redux'
import { getCharacters } from '../../cartoon-data-slice'

import {
	MAX_ITEMS,
	MAX_PAGES, 
	PAGES_AMOUNT_ON_SCREEN,
	MAX_PAGES_LEFT,
} from './constants'

import * as S from './styles'

export const Pagination = () => {
	const currentPage = useSelector(state => state.cartoonData.currentPage)
	const dispatch = useDispatch()
	
	const diffOfCurrentPageToLastPage = (currentPage + MAX_PAGES_LEFT) - MAX_PAGES
	
	const firstPage = (diffOfCurrentPageToLastPage <= 0)
		? Math.max(currentPage - MAX_PAGES_LEFT, 1)
		: MAX_PAGES - (MAX_PAGES_LEFT * 2)
	
	const handlePageChangingClick = pageNumber => () => {
		dispatch(getCharacters({ pageNumber }))
	}
	
	const renderedPages = Array(PAGES_AMOUNT_ON_SCREEN)
		.fill(null)
		.map((_, index) => (
			<li key={index + firstPage}>
				<button 
					onClick={handlePageChangingClick(index + firstPage)}
				>
				{index + firstPage}
			</button>
			</li>
		))
	
	return (
		<S.Pagination>
			<ul>
				{renderedPages}
			</ul>
		</S.Pagination>
	)
}