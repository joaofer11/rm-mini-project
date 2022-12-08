import { 
	createSlice, 
	createAsyncThunk, 
	createEntityAdapter,
} from '@reduxjs/toolkit'
import { client } from './api'


export const getCharacters = createAsyncThunk('cartoonData/getCharacters', async (params) => {
	const data = await client.fetchCharacters(params)
	return data
})

const charactersAdapter = createEntityAdapter()

const initialState = charactersAdapter.getInitialState({
	error: null,
	status: 'idle',
	fetchedOnce: false,
	currentPage: null,
})

const cartoonDataSlice = createSlice({
	name: 'cartoonData',
	initialState,
	reducers: {
		switchPage: (state, action) => {
			state.currentPage = action.payload
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(getCharacters.pending, state => {
				state.status = 'loading'
			})
			.addCase(getCharacters.fulfilled, (state, action) => {
				state.fetchedOnce = true,
				state.status = 'succeeded'
				state.currentPage = action.payload.pageNumber
				charactersAdapter.setAll(state, action.payload.items)
			})
			.addCase(getCharacters.rejected, (state, action) => {
				state.status = 'failed'
				state.error = action.error.message
			})
	}
})

export const { 
	switchPage: switchPageAct,
} = cartoonDataSlice.actions

export const {
	selectIds: selectCharactersIds,
	selectAll: selectAllCharacters,
	selectById: selectCharacterById,
} = charactersAdapter.getSelectors(state => state.cartoonData)
export const { reducer: cartoonDataReducer } = cartoonDataSlice