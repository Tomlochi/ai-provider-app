
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Severity } from '../../types/types'
import type { SortKey } from '../../utils/severity'

type SeverityFilter = Record<Severity, boolean>

interface UIState {
  selectedProviderId: number | null
  severityFilter: SeverityFilter
  sortKey: SortKey
}

const initialState: UIState = {
  selectedProviderId: null,
  severityFilter: { Critical: true, High: true, Medium: true, Low: true },
  sortKey: 'severity'
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setSelectedProviderId(state, action: PayloadAction<number | null>) {
      state.selectedProviderId = action.payload
    },
    toggleSeverity(state, action: PayloadAction<Severity>) {
      const k = action.payload
      state.severityFilter[k] = !state.severityFilter[k]
    },
    selectAllSeverities(state) {
      state.severityFilter = { critical: true, high: true, medium: true, low: true }
    },
    clearAllSeverities(state) {
      state.severityFilter = { critical: false, high: false, medium: false, low: false }
    },
    setSortKey(state, action: PayloadAction<SortKey>) {
      state.sortKey = action.payload
    }
  }
})

export const { setSelectedProviderId, toggleSeverity, selectAllSeverities, clearAllSeverities, setSortKey } =
  uiSlice.actions
export default uiSlice.reducer
