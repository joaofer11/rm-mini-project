import { 
	createSlice, 
	createAsyncThunk, 
	createEntityAdapter,
} from '@reduxjs/toolkit'
import { client } from './api'


export const getCharacters = createAsyncThunk('cartoonData/getCharacters', async () => {
	return client.fetchCharacters()
})

const charactersAdapter = createEntityAdapter()

const initialState = charactersAdapter.getInitialState({
	status: 'idle',
	error: null,
})

const cartoonDataSlice = createSlice({
	name: 'cartoonData',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getCharacters.pending, state => {
				state.status = 'loading'
			})
			.addCase(getCharacters.fulfilled, (state, action) => {
				state.status = 'succeeded'
				charactersAdapter.setAll(state, action.payload.results)
			})
			.addCase(getCharacters.rejected, (state, action) => {
				state.status = 'failed'
				state.error = action.error.message
			})
	}
})

export const {
	selectIds: selectCharactersIds,
	selectAll: selectAllCharacters,
	selectById: selectCharacterById,
} = charactersAdapter.getSelectors(state => state.cartoonData)
export const { reducer: cartoonDataReducer } = cartoonDataSlice