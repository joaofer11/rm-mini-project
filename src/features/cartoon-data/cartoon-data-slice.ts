import { 
	createSlice, 
	PayloadAction,
	createAsyncThunk, 
	createEntityAdapter,
} from '@reduxjs/toolkit'
import { client, FetchCharacters } from './api'
import type { RootState } from '../../app/store'

export const getCharacters = createAsyncThunk('cartoonData/getCharacters', async (params: FetchCharacters = {} as FetchCharacters) => {
	const data = await client.fetchCharacters(params)
	return data
})

interface CharacterData {
	id: number;
	name: string;
	image: string;
	status: string;
	gender: string;
	species: string;
	origin: { name: string; };
}

interface TrackingState {
	error: null | string | undefined;
	status: 'idle' | 'loading' | 'succeeded' | 'failed';
	fetchedOnce: boolean;
	currentPage: null | number
}

const charactersAdapter = createEntityAdapter<CharacterData>()

const initialState = charactersAdapter.getInitialState<TrackingState>({
	error: null,
	status: 'idle',
	fetchedOnce: false,
	currentPage: null,
})




const cartoonDataSlice = createSlice({
	name: 'cartoonData',
	initialState,
	reducers: {
		switchPage: (state, action: PayloadAction<number>) => {
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
} = charactersAdapter.getSelectors((state: RootState) => state.cartoonData)
export const { reducer: cartoonDataReducer } = cartoonDataSlice