
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch } from '../store'
import type { RootState } from '../store'
import { toggleSeverity, selectAllSeverities, clearAllSeverities, setSortKey } from '../features/ui/uiSlice'
import type { Severity } from '../types/types'

const ControlsBar: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const severityFilter = useSelector((s: RootState) => s.ui.severityFilter)
  const sortKey = useSelector((s: RootState) => s.ui.sortKey)

  const Toggle = ({ sev }: { sev: Severity }) => (
    <label className="inline-flex items-center gap-2 text-sm">
      <input
        type="checkbox"
        className="rounded"
        checked={severityFilter[sev]}
        onChange={() => dispatch(toggleSeverity(sev))}
        aria-label={`Toggle ${sev} severity`}
      />
      <span className="px-2 py-0.5 rounded border">{sev}</span>
    </label>
  )

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 px-3 py-2">
      <div className="flex items-center gap-3" role="group" aria-label="Severity filters">
        <Toggle sev="Critical" />
        <Toggle sev="High" />
        <Toggle sev="Medium" />
        <Toggle sev="Low" />
        <button className="text-xs px-2 py-1 border rounded hover:bg-gray-50" onClick={() => dispatch(selectAllSeverities())}>Select all</button>
        <button className="text-xs px-2 py-1 border rounded hover:bg-gray-50" onClick={() => dispatch(clearAllSeverities())}>Clear all</button>
      </div>

      <div className="flex items-center gap-2" aria-label="Sort controls">
        <span className="text-sm text-gray-600">Sort by</span>
        <select
          className="text-sm border rounded px-2 py-1"
          value={sortKey}
          onChange={(e) => dispatch(setSortKey(e.target.value as any))}
          aria-label="Sort classifiers"
        >
          <option value="severity">Severity</option>
          <option value="name">Name</option>
        </select>
      </div>
    </div>
  )
}

export default ControlsBar
