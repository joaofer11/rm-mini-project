import { 
	createSlice, 
	createAsyncThunk, 
	createEntityAdapter,
} from '@reduxjs/toolkit'
import { client } from './api'


export const getCharactersPost = createAsyncThunk('posts/getPosts', async () => {
	return client.fetchCharactersPost()
})


const postsAdapter = createEntityAdapter()
const initialState = postsAdapter.getInitialState({
	status: 'idle',
	error: null,
})

const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getCharactersPost.pending, state => {
				state.status = 'loading'
			})
			.addCase(getCharactersPost.fulfilled, (state, action) => {
				state.status = 'succeeded'
				postsAdapter.setAll(state, action.payload.results)
			})
			.addCase(getCharactersPost.rejected, (state, action) => {
				state.status = 'failed'
				state.error = action.error.message
			})
	}
})

export const {
	selectIds: selectPostIds,
	selectAll: selectAllPosts,
	selectById: selectPostById,
} = postsAdapter.getSelectors(state => state.posts)
export const { reducer: postsReducer } = postsSlice