
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Severity } from '../types/types'

type SeverityFilter = Record<Severity, boolean>

interface ProviderState {
  selectedProviderId: number | null
  severityFilter: SeverityFilter
  isSorted: boolean
}

const initialState: ProviderState = {
  selectedProviderId: null,
  severityFilter: { Critical: true, High: true, Medium: true, Low: true },
  isSorted: false
}

const providersSlice = createSlice({
  name: 'providers',
  initialState,
  reducers: {
    setSelectedProviderId(state, action: PayloadAction<number | null>) {
      state.selectedProviderId = action.payload
    },
    toggleSeverity(state, action: PayloadAction<Severity>) {
      const severity = action.payload
      state.severityFilter[severity] = !state.severityFilter[severity]
    },
    selectAllSeverities(state) {
      state.severityFilter = { Critical: true, High: true, Medium: true, Low: true }
    },
    clearAllSeverities(state) {
      state.severityFilter = { Critical: false, High: false, Medium: false, Low: false }
    },
    setIsSorted(state, action: PayloadAction<boolean>) {
      state.isSorted = !action.payload
    }
  }
})

export const { setSelectedProviderId, toggleSeverity, selectAllSeverities, clearAllSeverities, setIsSorted } =
providersSlice.actions
export default providersSlice.reducer
