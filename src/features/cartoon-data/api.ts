import axios from 'axios'
const BASE_URL = axios.create({
	baseURL: 'https://rickandmortyapi.com/api'
})

const fetchCharacters = async () => {
	const response = await BASE_URL.get('/character')
	return response.data
}

export const client = {
	fetchCharacters,
}