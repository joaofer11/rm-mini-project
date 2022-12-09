import { useAppSelector, useAppDispatch } from '../../../../app/store-hooks'
import { getCharacters } from '../../cartoon-data-slice'

import {
	MAX_ITEMS,
	MAX_PAGES, 
	PAGES_AMOUNT_ON_SCREEN,
	MAX_PAGES_LEFT,
} from './constants'

import * as S from './styles'

export const Pagination = () => {
	const currentPage = useAppSelector(state => state.cartoonData.currentPage!)
	const dispatch = useAppDispatch()
	
	const diffOfCurrentPageToLastPage = (currentPage + MAX_PAGES_LEFT) - MAX_PAGES
	
	const firstPage = (diffOfCurrentPageToLastPage <= 0)
		? Math.max(currentPage - MAX_PAGES_LEFT, 1)
		: MAX_PAGES - (MAX_PAGES_LEFT * 2)
	
	const handlePageChangingClick = (pageNumber: number) => () => {
		dispatch(getCharacters({ pageNumber }))
		window.scrollTo(0, 0)
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