import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { 
	cartoonDataReducer,
} from '../features/cartoon-data/cartoon-data-slice'


const rootReducer = combineReducers({
	cartoonData: cartoonDataReducer,
})

export const store = configureStore({ reducer: rootReducer })

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch