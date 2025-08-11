
import { configureStore } from '@reduxjs/toolkit'
import { providersApi } from '../services/providersApi'

export const store = configureStore({
  reducer: {
    [providersApi.reducerPath]: providersApi.reducer
  },
  middleware: (gDM) => gDM().concat(providersApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
