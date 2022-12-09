export const throttle = <Params extends []>(callbackFn: Function, delay = 1000) => {
	let shouldAwait = false
	let pendingArgs: null | Params = null
	
	const checkIfHasPendingArgs = () => {
		const hasPendingArgs = pendingArgs !== null
		
		if (!hasPendingArgs) {
			shouldAwait = false
			return
		}
		
		callbackFn(...pendingArgs as Params)
		pendingArgs = null
		setTimeout(checkIfHasPendingArgs, delay)
	}
	
	return (...args: Params) => {
		if (shouldAwait) {
			pendingArgs = args
			return
		}
		
		callbackFn(...args)
		shouldAwait = true
		
		setTimeout(checkIfHasPendingArgs, delay)
	}
}