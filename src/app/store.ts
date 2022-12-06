import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { postsReducer } from '../features/posts/posts-slice'


const rootReducer = combineReducers({
	posts: postsReducer,
})

export const store = configureStore({ reducer: rootReducer })