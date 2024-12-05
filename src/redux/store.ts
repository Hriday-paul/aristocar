import { configureStore } from '@reduxjs/toolkit'
import baseApi from './features/Api'
import testSlice from './slice/testSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      testSlice: testSlice,
      [baseApi.reducerPath]: baseApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(baseApi.middleware),
    devTools: process.env.isDev !== 'prod', // hide redux dev tool in production server
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']