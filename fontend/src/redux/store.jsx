import { configureStore } from '@reduxjs/toolkit'
import ReducerHome from './ReducerHome'
import ReducerSingle from './ReducerSingle'
export const store = configureStore({
  reducer: {
    product: ReducerHome.reducer,
    single: ReducerSingle.reducer
  }
})