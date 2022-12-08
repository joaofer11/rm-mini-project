export const throttle = (callbackFn, delay) => {
	let shouldAwait = false
	let pendingArgs = null
	
	const checkIfHasPendingArgs = () => {
		const hasPendingArgs = pendingArgs !== null
		
		if (!hasPendingArgs) {
			shouldAwait = false
			return
		}
		
		callbackFn(...pendingArgs)
		pendingArgs = null
		setTimeout(checkIfHasPendingArgs, delay)
	}
	
	return (...args) => {
		if (shouldAwait) {
			pendingArgs = args
			return
		}
		
		callbackFn(...args)
		shouldAwait = true
		
		setTimeout(checkIfHasPendingArgs, delay)
	}
}