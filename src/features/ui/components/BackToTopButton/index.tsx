import { useState, useEffect } from 'react'
import { throttle } from '../../../../common/utils/throttle'
import * as S from './styles'

export const BackToTopButton = () => {
	const [canAppearOnScreen, setCanAppearOnScreen] = useState(false)
	
	const handleWheel = () => {
		let startPosScroll = document.documentElement.scrollTop
		
		return () => {
			const currentPosScroll = document.documentElement.scrollTop
			
			if (currentPosScroll - startPosScroll < 0 && currentPosScroll >= 650) {
				setCanAppearOnScreen(true)
			} else {
				setCanAppearOnScreen(false)
			}
			startPosScroll = currentPosScroll
		}
	}
	
	const handleClickedButton = () => {
		const duration = 500
		let startTime = null
		
		const animateScroll = timestamp => {
			if (!startTime) startTime = timestamp
			
			const diffOfMsPassed = timestamp - startTime
			const progessInPercent = diffOfMsPassed / duration
			const currentPosScroll = document.documentElement.scrollTop
			
			const test = currentPosScroll - (progessInPercent * currentPosScroll)
			window.scrollTo(0, test)
			
			if (progessInPercent < 1) requestAnimationFrame(animateScroll)
		}
		
		requestAnimationFrame(animateScroll)
	}
	
	const handleWheelDelayed = throttle(handleWheel(), 250)
	
	useEffect(() => {
		window.addEventListener('scroll', handleWheelDelayed)
		return () => window.removeEventListener('scroll', handleWheelDelayed)
	}, [])
	
	return (
		canAppearOnScreen 
		 ? <S.BackToTopButton onClick={handleClickedButton}></S.BackToTopButton>
		 : null
	)
}