import { useState, useEffect } from 'react'
import * as S from './styles'

/*
	1. Execute imediatamente a função.
	
	2. Espere uma certa quantidade de tempo
	para executar novamente.
	
	3. Nesse tempo de espera, armazene ações pendentes
	para serem executados no futuro.
	
	4. Depois que o tempo de espera expirar,
	verifique se existe ações pendentes.
	
	5.1. Execute a ação pendente se existir, e continue esperando.
	5.2. Cancele o tempo de espera, e volte ao estado inicial, 
	se não houver ações pendentes.
*/


export const BackToTopButton = () => {
	const [canAppearOnScreen, setCanAppearOnScreen] = useState(false)
	
	const throttle = (fn, delay = 1000) => {
		let shouldAwait  = false
		let pendingArgs = null
		
		const pendingActionChecker = () => {
			const hasPendingAction = pendingArgs !== null
			
			if (!hasPendingAction) {
				shouldAwait = false
				return
			}
			
			fn(...pendingArgs)
			pendingArgs = null
			setTimeout(pendingActionChecker, delay)
		}
		
		return (...args) => {
			if (shouldAwait) {
				pendingArgs = args
				return
			}
			
			fn(...args)
			shouldAwait = true
			
			setTimeout(pendingActionChecker, delay)
		}
	}
	
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
	}, [])
	
	return (
		canAppearOnScreen 
		 ? <S.BackToTopButton onClick={handleClickedButton}></S.BackToTopButton>
		 : null
	)
}