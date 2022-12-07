import axios from 'axios'
const BASE_URL = axios.create({
	baseURL: 'https://rickandmortyapi.com/api'
})

const fetchCharacters = async (params = {}) => {
	const { pageNumber, characterName } = params
	
	const response = await BASE_URL.get('/character', {
		params: {
			page: pageNumber ?? 1,
			name: characterName ?? '',
		}
	})
	
	return { 
		items: response.data.results,
		pageNumber: pageNumber ?? 1,
	}
}

export const client = {
	fetchCharacters,
}