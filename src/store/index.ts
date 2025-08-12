
import { configureStore } from '@reduxjs/toolkit'
import { providersApi } from '../services/providersApi'
import providersSlice from './slices/providerSlice'

export const store = configureStore({
  reducer: {
    [providersApi.reducerPath]: providersApi.reducer,
    provider: providersSlice
  },
  middleware: (gDM) => gDM().concat(providersApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
