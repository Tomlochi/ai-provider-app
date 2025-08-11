
import { configureStore } from '@reduxjs/toolkit'
import { providersApi } from '../services/providersApi'
import uiReducer from '../features/ui/uiSlice'

export const store = configureStore({
  reducer: {
    [providersApi.reducerPath]: providersApi.reducer,
    ui: uiReducer
  },
  middleware: (gDM) => gDM().concat(providersApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
