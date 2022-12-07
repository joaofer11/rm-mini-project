import axios from 'axios'
const BASE_URL = axios.create({
	baseURL: 'https://rickandmortyapi.com/api'
})

const fetchCharacters = async (pageNumber) => {
	const response = await BASE_URL.get('/character', {
		params: {
			page: pageNumber,
		}
	})
	return response.data
}

export const client = {
	fetchCharacters,
}