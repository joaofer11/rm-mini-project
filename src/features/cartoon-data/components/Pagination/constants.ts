const ITEMS_AMOUNT = 20
const MAX_PAGES = 25
const MAX_ITEMS = ITEMS_AMOUNT * MAX_PAGES

const PAGES_AMOUNT_ON_SCREEN = window.innerHeight < 768 ? 5 : 11
const MAX_PAGES_LEFT = (PAGES_AMOUNT_ON_SCREEN - 1) / 2

export {
	MAX_PAGES,
	PAGES_AMOUNT_ON_SCREEN,
	MAX_PAGES_LEFT,
	MAX_ITEMS,
}